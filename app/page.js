"use client";
import React, { useEffect, useState } from "react";
import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "@/AmosToJavaScriptTranslator";
import AMOSParser from "@/AMOSParser";
import AMOSLexer from "@/AMOSLexer";

function App() {
  const [jsCode, setJsCode] = useState(""); // Store the translated JavaScript code

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader();

    // When the file is loaded, read the content
    reader.onload = (event) => {
      const amosBasicCode = event.target.result;

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
      console.log("Translated JS Code: ", jsCode);
    
      try {
        const func = new Function(jsCode); // Create a function from the JS code
        func(); // Execute the function (it should render the game)
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
      <div style={{marginBlock:"20px"}} >TO DO:
        <div>Fix and map ALL keyboard keys with hexadecimals id</div>
        <div>Add rule for file input for audio</div>
        <div>Add rule for file input for sprites</div>
        <div>Fix rule If Else because is very ugly right now</div>
        <div>any created function needs to be on top?</div>
      </div>
      {/* File input to upload the AMOS BASIC file */}
      <input type="file" onChange={handleFileUpload} />

      {/* Canvas will be appended here by the dynamically generated code */}
      <div id="game-container"></div>
    </div>
  );
}

export default App;
