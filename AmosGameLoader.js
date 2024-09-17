import React, { useState } from 'react';
import antlr4 from 'antlr4';
import AmosLexer from './AMOSLexer';   // Assuming you have it generated
import AmosParser from './AMOSParser'; // Assuming you have it generated
import AmosToJavaScriptTranslator from './AmosToJavaScriptTranslator'; // Your translation logic

function AmosGameLoader() {
  const [code, setCode] = useState(''); // Store the uploaded AMOS BASIC code
  const [jsCode, setJsCode] = useState(''); // Store the translated JavaScript code

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    // When the file is loaded, set the code
    reader.onload = (event) => {
      const amosBasicCode = event.target.result;
      setCode(amosBasicCode); // Store the AMOS BASIC code

      // Parse and translate the code
      parseAmosCode(amosBasicCode);
    };

    reader.readAsText(file); // Read file as text
  };

  // Function to parse AMOS BASIC code using ANTLR
  const parseAmosCode = (amosBasicCode) => {
    const chars = new antlr4.InputStream(amosBasicCode);
    const lexer = new AmosLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new AmosParser(tokens);
    const tree = parser.program(); // Assuming 'program' is your entry rule

    // Translate the parsed AMOS BASIC into JavaScript
    const translator = new AmosToJavaScriptTranslator();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(translator, tree);

    const translatedJsCode = translator.getJavaScript(); // Get the JavaScript code
    setJsCode(translatedJsCode); // Store the translated code
  };

  // Function to render the translated JavaScript code dynamically
  const renderJsCode = () => {
    // Dynamically execute the generated JavaScript code
    try {
      const func = new Function(jsCode); // Create a function from the JS code
      func(); // Execute the function (it should render the game)
    } catch (err) {
      console.error("Error rendering JavaScript:", err);
    }
  };

  return (
    <div>
      <h1>AMOS BASIC Game Loader</h1>
      <input type="file" accept=".bas" onChange={handleFileUpload} />
      <button onClick={renderJsCode}>Render Game</button>
      
      <div id="game-container"></div>
    </div>
  );
}

export default AmosGameLoader;
