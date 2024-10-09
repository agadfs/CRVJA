"use client";
import React, { useEffect, useState } from "react";
import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "@/AmosToJavaScriptTranslator";
import AMOSParser from "@/AMOSParser";
import AMOSLexer from "@/AMOSLexer";
import { Amiri } from "next/font/google";

function App() {
  const [jsCode, setJsCode] = useState(""); // Store the translated JavaScript code
  const [option, setOption] = useState("file"); // Store the selected option
  const [AmosCode, setAmosCode] = useState(""); // Store the AMOS BASIC code
  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader();

    // When the file is loaded, read the content
    reader.onload = (event) => {
      const amosBasicCode = event.target.result;
      setAmosCode(amosBasicCode);
      // Parse and translate the code
      parseAmosCode(amosBasicCode);
    };

    reader.readAsText(file); // Read the file as text
  };

  // Function to parse AMOS BASIC code using ANTLR
  const parseAmosCode = (amosBasicCode) => {
    console.log("Parsing AMOS Code: ", amosBasicCode);
    const chars = new antlr4.InputStream(amosBasicCode);
    const lexer = new AMOSLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new AMOSParser(tokens);

    const tree = parser.program();

    // Translate the parsed AMOS BASIC into JavaScript
    const translator = new AmosToJavaScriptTranslator();
    const walker = new antlr4.tree.ParseTreeWalker();
    console.log("Starting the walk");
    walker.walk(translator, tree);
    console.log("Completed the walk");

    const translatedJsCode = translator.getJavaScript(); // Get the translated JavaScript code
    setJsCode(translatedJsCode); // Store the translated code in the state
  };

  // Function to dynamically render the translated JavaScript code
  useEffect(() => {
    if (jsCode) {
      console.log("Executing JavaScript code: ", jsCode);
      try {
        const existingContainer = document.getElementById("amos-screen");
        if (existingContainer) {
          existingContainer.remove();
        }
        const func = new Function(jsCode); // Create a function from the JS code
        func(); // Execute the function (it should render the game)
        console.log("JavaScript code executed successfully");
      } catch (err) {
        console.error("Error rendering JavaScript:", err);
      }
    }
  }, [jsCode]);

  return (
    <div className="App">
      <h1>AMOS Basic parser to JavaScript</h1>
      <div>Open browser console to see full results</div>
      <div>For now, only accepts single file .asc apps</div>
      {/* File input to upload the AMOS BASIC file */}
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
              <button onClick={() => {
                setAmosCode("")
                setJsCode("");
                const existingContainer =
                  document.getElementById("amos-screen");
                if (existingContainer) {
                  existingContainer.remove();
                }
              }}>Clear Code</button>
            </div>
            <textarea
              value={AmosCode}
              onChange={(e) => {
                setAmosCode(e.target.value);
                
              }}
              placeholder="Enter AMOS BASIC code here"
            />

            {/* Canvas will be appended here by the dynamically generated code */}
            <div id="game-container"></div>
          </div>
        )}
        {option === "file" && (
          <div>
            <input type="file" onChange={handleFileUpload} />

            {/* Canvas will be appended here by the dynamically generated code */}
            <div id="game-container"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
