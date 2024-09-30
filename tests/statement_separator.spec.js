import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "../AmosToJavaScriptTranslator";
import AMOSParser from "../AMOSParser";
import AMOSLexer from "../AMOSLexer";

test("statement_separator", () => {

  const amosBasicCode = `
       Screen Open 1,600,400,8,Hires : Curs Off : Text 10,10,"ReAnimate(d) Piano"
    `;

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
  expect(translatedJsCode).toContain(`screenDiv.style.width = '600px';`);
  expect(translatedJsCode).toContain(`screenDiv.style.height = '400px';`);
  expect(translatedJsCode).toContain(`screenDiv.style.border = '1px solid red';`);
  expect(translatedJsCode).toContain("screenDiv.style.overflow = 'hidden'; ");
  expect(translatedJsCode).toContain("screenDiv.style.padding = '0'; ");
  expect(translatedJsCode).toContain("screenDiv.style.position = 'relative'; ");
  expect(translatedJsCode).toContain("screenDiv.id = 'amos-screen'; ");
  expect(translatedJsCode).toContain(
    `document.getElementById('game-container').appendChild(screenDiv);`
  );
  expect(translatedJsCode).toContain(
    `document.getElementById('amos-screen').style.backgroundColor = "rgb(160, 64, 0)";`
  );


  expect(translatedJsCode).toContain(
    `document.getElementById('amos-screen').style.cursor = 'none';`
  );
  

  expect(translatedJsCode).toContain(`const textDiv1010 = document.createElement('div');`);
  expect(translatedJsCode).toContain(`textDiv1010.innerText = 'ReAnimate(d) Piano';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.position = 'absolute';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.left = '10px';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.top = '10px';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.fontSize = '14px';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.color = 'black';`);
  expect(translatedJsCode).toContain(`document.getElementById('amos-screen').appendChild(textDiv1010);`);
});
