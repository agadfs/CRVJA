"use client";
import React, { useEffect, useState } from "react";
import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "@/AmosToJavaScriptTranslator";
import AMOSParser from "@/AMOSParser";
import AMOSLexer from "@/AMOSLexer";

function App() {
  const [jsCode, setJsCode] = useState("");
  const [numBanks, setNumBanks] = useState(0);
  const [bankFiles, setBankFiles] = useState([]);
  const [option, setOption] = useState("file");
  const [AmosCode, setAmosCode] = useState("");


  const handleNumBanksChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumBanks(value);
    setBankFiles(new Array(value).fill(null)); // Reset bankFiles array
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

  /* const readAndShowBank1 = async () => {
    try {
      const response = await fetch("/api/readBank1");
      let { data } = await response.json();
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
  
      // Initialize colorPalette to hold 32 colors (64 bytes in total)
      let colorPalette = [];
  
      // Loop through each pair of bytes in the color palette section (32 colors x 2 bytes)
      for (let k = offset; k < offset + 64; k += 2) {
        const byte1 = data[k];
        const byte2 = data[k + 1];
  
        
        const color1 = (byte1 << 8) | byte2;
  
        // Extract the red, green, and blue components (4 bits each)
        const red = (color1 >> 8) & 0xF;   // Top 4 bits for red
        const green = (color1 >> 4) & 0xF; // Next 4 bits for green
        const blue = color1 & 0xF;           // Bottom 4 bits for blue
     
        // Convert 4-bit values (0-15) to 8-bit values (0-255) by multiplying by 17
        const red8 = (red * 17).toString(16).padStart(2, "0");
        const green8 = (green * 17).toString(16).padStart(2, "0");
        const blue8 = (blue * 17).toString(16).padStart(2, "0");
  
        // Format as HTML color code #RRGGBB
        console.log(`${color1.toString(16)}`);

        colorPalette.push(`#${red8}${green8}${blue8}`.toUpperCase());
      }
  
      console.log(colorPalette);
      setPalette(colorPalette);
  
      setSprites(objectsArray);
    } catch (error) {
      console.error("Error fetching file data:", error);
    }
  };

  const readAndShowBank2 = async () => {
    try {
      const response = await fetch("/api/readBank2");
      let { data } = await response.json();
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
  
      // Initialize colorPalette to hold 32 colors (64 bytes in total)
      let colorPalette = [];
  
      // Loop through each pair of bytes in the color palette section (32 colors x 2 bytes)
      for (let k = offset; k < offset + 64; k += 2) {
        const byte1 = data[k];
        const byte2 = data[k + 1];
  
        
        const color1 = (byte1 << 8) | byte2;
  
        // Extract the red, green, and blue components (4 bits each)
        const red = (color1 >> 8) & 0xF;   // Top 4 bits for red
        const green = (color1 >> 4) & 0xF; // Next 4 bits for green
        const blue = color1 & 0xF;           // Bottom 4 bits for blue
     
        // Convert 4-bit values (0-15) to 8-bit values (0-255) by multiplying by 17
        const red8 = (red * 17).toString(16).padStart(2, "0");
        const green8 = (green * 17).toString(16).padStart(2, "0");
        const blue8 = (blue * 17).toString(16).padStart(2, "0");
  
        // Format as HTML color code #RRGGBB
        console.log(`${color1.toString(16)}`);

        colorPalette.push(`#${red8}${green8}${blue8}`.toUpperCase());
      }
  
      console.log(colorPalette);
      setPalette(colorPalette);
  
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
        const hexColor = colorPalette[colorIndex]
          ? `${colorPalette[colorIndex]}`
          : "#000000";

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
  } */

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




  return (
    <div className="App">
      <h1>AMOS Basic parser to JavaScript</h1>
      <div style={{marginBlock:"20px"}} >Open browser console to see full results</div>
      <div style={{border:"2px solid black", padding:"5px"}} >

      <div>
        <label>STEP ONE: Select number of banks: </label>
        <select value={numBanks} onChange={handleNumBanksChange}>
          <option value="0">0</option>
          <option value="1">1</option>

        </select>
      </div>
      {Array.from({ length: numBanks }, (_, index) => (
  <div style={{marginBottom:"10px"}} key={index}>
    <label>Bank {index + 1}: </label>
    <input
      id={`bankStored${index + 1}`}
      type="file"
      onChange={(e) => {
        if (e.target.files.length > 0) {
          const fileName = e.target.files[0].name;
          e.target.id = `bankStored_${fileName.replace(/\s/g, "_")}`;
        }
      }}
      multiple
    />
  </div>
))}
      </div>
    <div style={{display:"flex", marginTop:"30px", border:"2px solid black", padding:"5px"}} >
      <div>STEP TWO: Enter AMOS BASIC code or upload a file</div>
      <div style={{ display: "flex", flexDirection: "column", marginTop:"10px" }}>
        
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
    </div>
  );
}

export default App;
