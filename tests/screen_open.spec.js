import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "../AmosToJavaScriptTranslator";
import AMOSParser from "../AMOSParser";
import AMOSLexer from "../AMOSLexer";

test("amos_screen", () => {
    
    /* Properties of amos screen */

  const width = 600;
  const height = 400;
  const screenNumber = 1;
  let colorScreen = 8;
  const screenResolution = "Hires";


  const amosBasicCode = `
        Screen Open ${screenNumber.toString()},${width.toString()},${height.toString()},${colorScreen},${screenResolution}
    `;


 /* convert color screen id to a color */
  const colorMapping = {
    1: "black",
    2: "white",
    3: "red",
    5: "green",
    8: "rgb(160, 64, 0)",
  };
  colorScreen = colorMapping[colorScreen] || "black";

  /* construct */

  const chars = new antlr4.InputStream(amosBasicCode);
  const lexer = new AMOSLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new AMOSParser(tokens);

  const tree = parser.program();

  // Translate the parsed AMOS BASIC into JavaScript
  const translator = new AmosToJavaScriptTranslator();
  const walker = new antlr4.tree.ParseTreeWalker();
  walker.walk(translator, tree);
  const translatedJsCode = translator.getJavaScript(); // Get the translated JavaScript code

  /* test */

  expect(translatedJsCode).toContain(
    `const screenDiv = document.createElement('div');`
  );
  expect(translatedJsCode).toContain(`screenDiv.style.width = '${width}px';`);
  expect(translatedJsCode).toContain(`screenDiv.style.height = '${height}px';`);
  expect(translatedJsCode).toContain(`screenDiv.style.border = '1px solid red';`);
  expect(translatedJsCode).toContain("screenDiv.style.overflow = 'hidden'; ");
  expect(translatedJsCode).toContain("screenDiv.style.padding = '0'; ");
  expect(translatedJsCode).toContain("screenDiv.style.position = 'relative'; ");
  expect(translatedJsCode).toContain("screenDiv.id = 'amos-screen'; ");
  expect(translatedJsCode).toContain(
    `document.getElementById('game-container').appendChild(screenDiv);`
  );
  expect(translatedJsCode).toContain(
    `document.getElementById('amos-screen').style.backgroundColor = "${colorScreen}";`
  );
});
