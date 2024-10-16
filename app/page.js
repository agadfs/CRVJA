"use client";
import React, { useEffect, useState } from "react";
import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "@/AmosToJavaScriptTranslator";
import AMOSParser from "@/AMOSParser";
import AMOSLexer from "@/AMOSLexer";

function App() {
  const [jsCode, setJsCode] = useState("");
  const [option, setOption] = useState("file");
  const [AmosCode, setAmosCode] = useState("");
  const [sprites, setSprites] = useState([]);
  const [palette, setPalette] = useState([]);

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

  const parseAmosCode = (amosBasicCode) => {
    console.log(amosBasicCode);
    const chars = new antlr4.InputStream(amosBasicCode);
    const lexer = new AMOSLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new AMOSParser(tokens);
    const tree = parser.program();

    const translator = new AmosToJavaScriptTranslator();
    const walker = new antlr4.tree.ParseTreeWalker();
    walker.walk(translator, tree);
    const translatedJsCode = translator.getJavaScript();
    setJsCode(translatedJsCode);
    console.log(translatedJsCode);
  };

  const readAndShowBank = async () => {
    try {
      const response = await fetch("/api/readBank");
      const { data } = await response.json();
      const buffer = Uint8Array.from(data);

      let offset = 6;
      const numberExpected = (buffer[4] << 8) | buffer[5];
      let objectsArray = [];
      for (let i = 0; i < numberExpected; i++) {
        const width = (data[offset] << 8) | data[offset + 1];
        const height = (data[offset + 2] << 8) | data[offset + 3];
        const depth = (data[offset + 4] << 8) | data[offset + 5];
        const hotspotX = (data[offset + 6] << 8) | data[offset + 7];
        const hotspotY = (data[offset + 8] << 8) | data[offset + 9];

        const planarGraphicData = [];
        const dataSize = width * 2 * height * depth;

        for (let j = 0; j < dataSize; j++) {
          planarGraphicData.push(data[offset + 10 + j]);
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
     
      let colorPalette = [];
      for (let k = 0; k < 32; k += 2) {
        const byte1 = data[offset + k * 3];
        const byte2 = data[offset + k * 3 + 1];
        const byte3 = data[offset + k * 3 + 2];
      
        const color1 = ((byte1 << 4) | (byte2 >> 4)) & 0xfff;
        const color2 = (((byte2 & 0x0f) << 8) | byte3) & 0xfff;
        console.log(`Bytes: ${byte1}, ${byte2}, ${byte3}`);
 
        colorPalette.push(color1, color2);
      }
      
      const convertedPalette = colorPalette.map((color) => {
        const red = (color >> 8) & 0xF;
        const green = (color >> 4) & 0xF;
        const blue = color & 0xF;
      
        const red8 = (red * 17).toString(16).padStart(2, "0");
        const green8 = (green * 17).toString(16).padStart(2, "0");
        const blue8 = (blue * 17).toString(16).padStart(2, "0");
      
        return `#${red8}${green8}${blue8}`.toUpperCase();
      });
      
      console.log(convertedPalette);
      setPalette(convertedPalette);

      setSprites(objectsArray);
    } catch (error) {
      console.error("Error fetching file data:", error);
    }
  };

  function SpriteRenderer({ sprite }) {
    let { width, height, depth, planarGraphicData } = sprite;
    const colorPalette = palette;
    width = width * 16; // Convert width in 16-bit words to pixels

    const pixels = [];
    const bytesPerRow = width / 8;
    const rowSize = bytesPerRow * depth;

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

        if (colorIndex >= colorPalette.length) {
          console.warn(`colorIndex (${colorIndex}) is out of palette range`);
        }

        // Map colorIndex to the palette
        const hexColor = colorPalette[colorIndex] ? `${colorPalette[colorIndex]}` : "#000000";
     
        pixels.push(hexColor);
      }
    }

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${width}, 10px)`,
        }}
      >
        {pixels.map((color, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    );
  }

  useEffect(() => {
    if (jsCode) {
      try {
        const existingContainer = document.getElementById("amos-screen");
        if (existingContainer) {
          existingContainer.remove();
        }
        const func = new Function(jsCode);
        func();
      } catch (err) {
        console.error("Error rendering JavaScript:", err);
      }
    }
  }, [jsCode]);

  useEffect(() => {
    console.log("Sprites: ", sprites);
  }, [sprites]);

  useEffect(() => {
    console.log("Pallete: ", palette);
  }, [palette]);

  return (
    <div className="App">
      <h1>AMOS Basic parser to JavaScript</h1>
      <div>Open browser console to see full results</div>
      <button
        onClick={() => {
          readAndShowBank();
        }}
      >
        Read a sample sprite
      </button>
      <div>For now, only accepts single file .asc apps</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
      <div>
        <h2>Rendered Sprites</h2>
        {sprites.map((sprite, index) => (
          <div
            key={index}
            style={{ marginBottom: "20px", border: "1px solid red" }}
          >
            <SpriteRenderer sprite={sprite} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
