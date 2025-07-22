"use client";
import React, { useEffect, useState } from "react";
import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "@/AmosToJavaScriptTranslator";
import AMOSParser from "@/AMOSParser";
import AMOSLexer from "@/AMOSLexer";
import { Sketch } from "@uiw/react-color";
import prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import AMOSDecoder from "@/src/tools/AmosDecoder";

function App() {
  const [jsCode, setJsCode] = useState("");
  const [numBanks, setNumBanks] = useState(0);
  const [bankFiles, setBankFiles] = useState([]);
  const [option, setOption] = useState("file");
  const [AmosCode, setAmosCode] = useState("");
  const [createBank, setCreateBank] = useState(false);

  const [bankCreator, setBankCreator] = useState({
    sprites: [],
    palette: Array(32).fill("#000000"),
  });

  useEffect(() => {
    // Load bank data from local storage if it exists
    const savedBankData = localStorage.getItem("bankCreator");
    if (savedBankData) {
      setBankCreator(JSON.parse(savedBankData));
    }
  }, []);

  useEffect(() => {
    // Save bank data to local storage whenever it changes
    localStorage.setItem("bankCreator", JSON.stringify(bankCreator));
  }, [bankCreator]);

  function loadBank(bank) {
    const findElementId = "Creator_bankStored" + bank;
    const inputElement = document.getElementById(findElementId);
    const file = inputElement?.files?.[0];

    console.log("Storing bank:", inputElement?.id);
    if (!file) {
      console.log("Bank failed to be loaded: No file was selected");
      return;
    }
    const reader = new FileReader();

    reader.onload = function (e) {
      const arrayBuffer = e.target.result; // The result is now an ArrayBuffer
      const buffer = new Uint8Array(arrayBuffer); // Convert to Uint8Array for easier byte manipulation
      console.log(buffer);
      let offset = 6; // Adjust the starting offset as per the file format
      const numberExpected = (buffer[4] << 8) | buffer[5]; // Check this is correct

      let objectsArray = [];

      for (let i = 0; i < numberExpected; i++) {
        const width = (buffer[offset] << 8) | buffer[offset + 1];
        const height = (buffer[offset + 2] << 8) | buffer[offset + 3];
        const depth = (buffer[offset + 4] << 8) | buffer[offset + 5];
        const hotspotX = (buffer[offset + 6] << 8) | buffer[offset + 7];
        const hotspotY = (buffer[offset + 8] << 8) | buffer[offset + 9];

        const planarGraphicData = [];
        const dataSize = width * 2 * height * depth; // Ensure this calculation is correct

        for (let j = 0; j < dataSize; j++) {
          planarGraphicData.push(buffer[offset + 10 + j]);
        }

        const objectBuilder = {
          width,
          height,
          depth,
          hotspotX,
          hotspotY,
          planarGraphicData,
        };

        objectsArray.push(objectBuilder);
        offset += 10 + dataSize;
      }

      // Initialize colorPalette to hold 32 colors (64 bytes in total)
      let colorPalette = [];

      // Loop through each pair of bytes in the color palette section (32 colors x 2 bytes)
      for (let k = offset; k < offset + 64; k += 2) {
        const byte1 = buffer[k];
        const byte2 = buffer[k + 1];

        const color1 = (byte1 << 8) | byte2;

        // Extract the red, green, and blue components (4 bits each)
        const red = (color1 >> 8) & 0xf;
        const green = (color1 >> 4) & 0xf;
        const blue = color1 & 0xf;

        // Convert 4-bit values (0-15) to 8-bit values (0-255) by multiplying by 17
        const red8 = (red * 17).toString(16).padStart(2, "0");
        const green8 = (green * 17).toString(16).padStart(2, "0");
        const blue8 = (blue * 17).toString(16).padStart(2, "0");

        // Format as HTML color code #RRGGBB
        const color = "#" + red8 + green8 + blue8;
        colorPalette.push(color.toUpperCase());
      }
      setBankCreator({
        ...bankCreator,
        sprites: objectsArray,
        palette: colorPalette,
      });
      console.log("Bank loaded successfully:", objectsArray, colorPalette);
    };

    reader.readAsArrayBuffer(file); // Use readAsArrayBuffer for binary data
  }

  const clearBank = () => {
    localStorage.removeItem("bankCreator");
    setBankCreator({ sprites: [], palette: Array(32).fill("#000000") });
  };

  const handleNumBanksChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumBanks(value);
    setBankFiles(new Array(value).fill(null));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const amosBasicCode = event.target.result;
      setAmosCode(amosBasicCode);
      parseAmosCode(amosBasicCode);
    };

    reader.readAsText(file);
  };

  const parseAmosCode = async (amosBasicCode) => {
    console.log(amosBasicCode);
    const chars = new antlr4.InputStream(amosBasicCode);
    const lexer = new AMOSLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new AMOSParser(tokens);
    const tree = parser.program();

    const translator = new AmosToJavaScriptTranslator();
    const walker = new antlr4.tree.ParseTreeWalker();
    walker.walk(translator, tree);
    let translatedJsCode = translator.getJavaScript();
    try {
      const formatted = await prettier.format(translatedJsCode, {
        parser: "babel",
        plugins: [babelPlugin, estreePlugin],
      });

      setJsCode(formatted);
    } catch (err) {
      setJsCode(translatedJsCode); // fallback
    }
  };

 useEffect(() => {
  if (jsCode) {
    try {
      const existingContainer = document.getElementById("amos-screen");
      if (existingContainer) {
        existingContainer.remove();
      }

      const asyncWrapper = new Function(`
        return (async () => {
          ${jsCode}
        })();
      `);

      asyncWrapper().catch((err) => {
        console.error("Async error in dynamic JavaScript:", err);
      });
    } catch (err) {
      console.error("Error creating async function:", err);
    }
  }
}, [jsCode]);
  function generateAmosBankFile(bankCreator) {
    const { sprites, palette } = bankCreator;
    const identifier = "AmSp"; // 4-byte identifier for sprites

    // Create an array to hold the binary data
    let binaryData = [];

    // Add the 4-byte identifier
    for (let i = 0; i < identifier.length; i++) {
      binaryData.push(identifier.charCodeAt(i));
    }

    // Add the 2-byte number of sprites
    const spriteCount = sprites.length;
    binaryData.push((spriteCount >> 8) & 0xff); // High byte
    binaryData.push(spriteCount & 0xff); // Low byte
    // Add each sprite's data
    sprites.forEach((sprite) => {
      const { width, height, depth, hotspotX, hotspotY, planarGraphicData } =
        sprite;

      let object = [];
      // Width and height are each 2 bytes
      object.push((width >> 8) & 0xff);
      object.push(width & 0xff);
      object.push((height >> 8) & 0xff);
      object.push(height & 0xff);

      // Depth, hotspot X, and hotspot Y are each 2 bytes
      object.push((depth >> 8) & 0xff);
      object.push(depth & 0xff);
      object.push((hotspotX >> 8) & 0xff);
      object.push(hotspotX & 0xff);
      object.push((hotspotY >> 8) & 0xff);
      object.push(hotspotY & 0xff);
      if (Array.isArray(planarGraphicData)) {
        object.push(...planarGraphicData);
      } else {
        console.error("planarGraphicData is not an array", planarGraphicData);
      }

      binaryData.push(...object);
    });
    let newPalette = [...palette];
    function rgbTo16Bit(rgbColor) {
      // Extract the red, green, and blue components from the hex color
      const red = parseInt(rgbColor.slice(1, 3), 16) >> 4; // Red channel (top 4 bits)
      const green = parseInt(rgbColor.slice(3, 5), 16) >> 4; // Green channel (middle 4 bits)
      const blue = parseInt(rgbColor.slice(5, 7), 16) >> 4; // Blue channel (bottom 4 bits)

      // Combine red, green, and blue components into a 16-bit color value
      const color16Bit = (red << 8) | (green << 4) | blue;

      return color16Bit;
    }
    let binaryPalette = [];
    // Convert the palette into 16-bit color values and then add to binaryData
    newPalette.forEach((color) => {
      const rgb = rgbTo16Bit(color); // Convert to 16-bit color
      binaryData.push((rgb >> 8) & 0xff); // High byte
      binaryData.push(rgb & 0xff); // Low byte

      binaryPalette.push((rgb >> 8) & 0xff); // High byte
      binaryPalette.push(rgb & 0xff); // Low byte
    });

    console.log(binaryPalette);

    console.log(binaryData);
    const blob = new Blob([new Uint8Array(binaryData)], {
      type: "application/octet-stream",
    });
    const url = URL.createObjectURL(blob);

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "AmosBank_test4.abk";
    downloadLink.click();
  }

  // Helper function to convert pixels array to planar format

  // Helper function to convert a hex color to 4-bit RGB values

  function BankEditor({ bankCreator, setBankCreator }) {
    const renderSpritePixels = (
      planarGraphicData,
      width,
      height,
      depth,
      palette
    ) => {
      const pixels = [];
      const bytesPerRow = width / 8;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let colorIndex = 0;

          // Build colorIndex by combining bits across planes
          for (let plane = 0; plane < depth; plane++) {
            const byteIndex =
              y * bytesPerRow +
              plane * (height * bytesPerRow) +
              Math.floor(x / 8);
            const bitPos = 7 - (x % 8);
            const bit = (planarGraphicData[byteIndex] >> bitPos) & 1;

            colorIndex |= bit << plane;
          }

          const hexColor = palette[colorIndex];
          pixels.push(hexColor);
        }
      }
      return pixels;
    };

    const [palette, setPalette] = useState(
      bankCreator.palette || Array(32).fill("#000000")
    );
    const [sprites, setSprites] = useState(bankCreator.sprites || []);
    const [spriteSelected, setSpriteSelected] = useState(null);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [colorPickerPosition, setColorPickerPosition] = useState({
      top: 0,
      left: 0,
    });
    const [selectedColorIndex, setSelectedColorIndex] = useState(null);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [spriteWidth, setSpriteWidth] = useState(0);
    const [spriteHeight, setSpriteHeight] = useState(0);

    const handleColorClick = (index, event) => {
      event.preventDefault();
      if (event.button === 2) {
        setSelectedColorIndex(index);
        setColorPickerPosition({ top: event.clientY, left: event.clientX });
        setShowColorPicker(true);
      } else if (event.button === 0) {
        console.log("Current color: ", index);
        setCurrentColorIndex(index);
      }
    };

    const handleColorChange = (color) => {
      const newPalette = [...palette];
      newPalette[selectedColorIndex] = color.hex;
      setPalette(newPalette);
    };

    const addNewSprite = () => {
      const newSprite = {
        width: 1,
        height: 16,
        depth: 4, // Default depth (4 color planes for 16 colors)
        hotspotX: 0,
        hotspotY: 0,
        planarGraphicData: [], // Initialize planarGraphicData with zeros for an 8x8 sprite
      };
      const updatedSprites = [...sprites, newSprite];
      setSprites(updatedSprites);
      setBankCreator({ ...bankCreator, sprites: updatedSprites });
    };

    const selectSprite = (index) => {
      setSpriteSelected(index);
    };

    const handlePixelClick = (index) => {
      if (spriteSelected !== null) {
        const selectedSprite = sprites[spriteSelected];
        const actualWidth = selectedSprite.width * 16; // Convert to actual pixel width
        const bytesPerRow = Math.ceil(actualWidth / 8);

        // Calculate x and y based on index
        const x = index % actualWidth;
        const y = Math.floor(index / actualWidth);

        // Update the planarGraphicData based on currentColorIndex
        for (let plane = 0; plane < selectedSprite.depth; plane++) {
          const bit = (currentColorIndex >> plane) & 1;
          const byteIndex =
            y * bytesPerRow +
            plane * (selectedSprite.height * bytesPerRow) +
            Math.floor(x / 8);
          const bitPos = 7 - (x % 8);

          if (bit) {
            selectedSprite.planarGraphicData[byteIndex] |= 1 << bitPos;
          } else {
            selectedSprite.planarGraphicData[byteIndex] &= ~(1 << bitPos);
          }
        }

        // Update the sprites array with the modified sprite
        const updatedSprites = sprites.map((sprite, i) =>
          i === spriteSelected ? { ...selectedSprite } : sprite
        );
        console.log(selectedSprite);
        setSprites(updatedSprites);
      }
    };

    const updateSpriteSize = (dimension, value) => {
      if (spriteSelected !== null) {
        const newSize = Number(value);
        const selectedSprite = sprites[spriteSelected];

        if (!isNaN(newSize) && newSize > 0) {
          const newSprite = {
            ...selectedSprite,
            [dimension]: newSize,
            planarGraphicData: Array(
              spriteHeight * spriteWidth * selectedSprite.depth * 2
            ).fill(0), // Reset planar data based on new size
          };

          if (dimension === "width") {
            newSprite.planarGraphicData = Array(
              newSize * spriteHeight * selectedSprite.depth * 2
            ).fill(0);
          } else {
            newSprite.planarGraphicData = Array(
              spriteWidth * newSize * selectedSprite.depth * 2
            ).fill(0);
          }

          console.log(newSprite);
          const updatedSprites = sprites.map((sprite, i) =>
            i === spriteSelected ? newSprite : sprite
          );
          setSprites(updatedSprites);
        }
      }
    };

    const handleSpriteClick = (index) => {
      setSpriteSelected(index);
      setSpriteHeight(sprites[index].height);
      setSpriteWidth(sprites[index].width);
    };

    // Save bank data to local storage
    const saveBankToLocalStorage = () => {
      const bankData = JSON.stringify(bankCreator);
      localStorage.setItem("bankCreator", bankData);
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20%",
          border: "1px solid red",
        }}
      >
        <div>
          <button
            onClick={() => {
              console.log(bankCreator);
              generateAmosBankFile(bankCreator);
            }}
          >
            GENERATE BANK FILE
          </button>
          <div>
            Load bank:
            <input
              id={`Creator_bankStored1`}
              type="file"
              onChange={(e) => {
                setBankCreator({ ...bankCreator, sprites: [], palette: [] });
                if (e.target.files.length > 0) {
                  const file = e.target.files[0];
                  console.log("File selected for bank 1:", file.name);
                  loadBank(1);
                }
              }}
              multiple
            />
          </div>
          <button onClick={() => saveBankToLocalStorage()}>
            Save Bank to Local Storage
          </button>
          <h2>Palette</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "4px",
            }}
          >
            {palette.map((color, index) => (
              <div
                key={index}
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: color,
                  border: "1px solid black",
                  cursor: "pointer",
                }}
                onClick={(event) => handleColorClick(index, event)}
                onContextMenu={(event) => handleColorClick(index, event)}
              >
                {color}
              </div>
            ))}
          </div>
          {showColorPicker && (
            <div
              style={{
                position: "absolute",
                top: colorPickerPosition.top,
                left: colorPickerPosition.left,
                zIndex: 1000,
              }}
            >
              <button
                onClick={() => {
                  setBankCreator({ ...bankCreator, palette: palette });
                  setShowColorPicker(false);
                }}
              >
                Close
              </button>
              <Sketch
                color={palette[selectedColorIndex]}
                onChange={handleColorChange}
                onClose={() => setShowColorPicker(false)}
              />
            </div>
          )}
        </div>

        <div>
          <h2>Pixel Editor</h2>
          <div>
            <label>Width:</label>
            <input
              type="number"
              value={
                spriteSelected !== null ? sprites[spriteSelected].width : ""
              }
              onChange={(e) => updateSpriteSize("width", e.target.value)}
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              value={
                spriteSelected !== null ? sprites[spriteSelected].height : ""
              }
              onChange={(e) => updateSpriteSize("height", e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                console.log(sprites[spriteSelected]);
                setBankCreator({ ...bankCreator, sprites: sprites });
              }}
            >
              Save
            </button>
            <button
              onClick={() => {
                console.log(sprites[spriteSelected]);
                const spritesCopy = [...sprites];
                spritesCopy.splice(spriteSelected, 1);
                setBankCreator({ ...bankCreator, sprites: spritesCopy });
              }}
            >
              Delete
            </button>
          </div>
          {spriteSelected !== null && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${
                  sprites[spriteSelected].width * 16
                }, 20px)`,
                gap: "1px",
              }}
            >
              {renderSpritePixels(
                sprites[spriteSelected].planarGraphicData,
                sprites[spriteSelected].width * 16,
                sprites[spriteSelected].height,
                sprites[spriteSelected].depth,
                palette
              ).map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: color,
                    border: "1px solid #ccc",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePixelClick(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <h2>Sprites</h2>
          <button onClick={addNewSprite}>Add New Sprite</button>
          <button
            onClick={clearBank}
            style={{
              marginTop: "10px",
              backgroundColor: "#FF6961",
              color: "#FFF",
            }}
          >
            Clear Bank
          </button>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4px",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                marginTop: "10px",
              }}
            >
              {sprites.map((sprite, index) => {
                const width = sprite.width * 16; // Convert width in words to pixels
                const pixels = renderSpritePixels(
                  sprite.planarGraphicData,
                  width,
                  sprite.height,
                  sprite.depth,
                  palette
                );

                return (
                  <div
                    key={index}
                    onClick={() => {
                      handleSpriteClick(index);
                    }}
                    onContextMenu={(event) => {
                      event.preventDefault();
                      console.log(sprites[index]);
                      const spritesCopy = [...sprites];
                      spritesCopy.splice(index, 1);
                      setBankCreator({ ...bankCreator, sprites: spritesCopy });
                      selectSprite(index);
                    }}
                    style={{
                      width: "40px",
                      height: "40px",
                      border:
                        spriteSelected === index
                          ? "2px solid blue"
                          : "1px solid black",
                      cursor: "pointer",
                      display: "grid",
                      gridTemplateColumns: `repeat(${width}, 1fr)`,
                    }}
                  >
                    {pixels.map((color, pixelIndex) => (
                      <div
                        key={pixelIndex}
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor:
                            color === palette[0] ? "transparent" : color,
                        }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>AMOS Basic parser to JavaScript</h1>
      <div style={{ marginBlock: "20px" }}>
        Open browser console to see full results
      </div>
      <div style={{ border: "2px solid black", padding: "5px" }}>
        <div>
          <label>STEP ONE: Select number of banks: </label>
          <select value={numBanks} onChange={handleNumBanksChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
          </select>
        </div>
        {Array.from({ length: numBanks }, (_, index) => (
          <div style={{ marginBottom: "10px" }} key={index}>
            <label>Bank {index + 1}: </label>
            <input
              id={`bankStored${index + 1}`}
              type="file"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  const file = e.target.files[0];
                  console.log(
                    `File selected for bank ${index + 1}:`,
                    file.name
                  );
                }
              }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          border: "2px solid black",
          padding: "5px",
        }}
      >
        <div>STEP TWO: Enter AMOS BASIC code or upload a file</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <select
            style={{ width: "fit-content" }}
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="file">File</option>
            <option value="text">Code Text</option>
          </select>
          {option === "text" && (
            <div style={{ display: "flex", gap: "1%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1%",
                  marginBlock: "1%",
                }}
              >
                <button
                  onClick={() => {
                    parseAmosCode(AmosCode);
                  }}
                >
                  Run Code
                </button>
                <button
                  onClick={() => {
                    setAmosCode("");
                    setJsCode("");
                    const existingContainer =
                      document.getElementById("amos-screen");
                    if (existingContainer) {
                      existingContainer.remove();
                    }
                  }}
                >
                  Clear Code
                </button>
              </div>
              <textarea
                value={AmosCode}
                onChange={(e) => {
                  setAmosCode(e.target.value);
                }}
                placeholder="Enter AMOS BASIC code here"
              />
              <div id="game-container"></div>
            </div>
          )}
          {option === "file" && (
            <div>
              <input type="file" onChange={handleFileUpload} />
              <div id="game-container"></div>
            </div>
          )}
        </div>
      </div>
      <AMOSDecoder />
      {!createBank ? (
        <div>
          <button onClick={() => setCreateBank(true)}>Open Bank Creator</button>
        </div>
      ) : (
        <button onClick={() => setCreateBank(false)}>Close Bank Creator</button>
      )}

      {createBank && (
        <BankEditor bankCreator={bankCreator} setBankCreator={setBankCreator} />
      )}
    </div>
  );
}

export default App;
