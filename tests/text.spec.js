import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "../AmosToJavaScriptTranslator";
import AMOSParser from "../AMOSParser";
import AMOSLexer from "../AMOSLexer";

test("Text", () => {

  const amosBasicCode = `
        Text 10,10,"ReAnimate(d) Piano"
    `;

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

  expect(translatedJsCode).toContain(`const textDiv1010 = document.createElement('div');`);
  expect(translatedJsCode).toContain(`textDiv1010.innerText = 'ReAnimate(d) Piano';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.position = 'absolute';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.left = '10px';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.top = '10px';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.fontSize = '14px';`);
  expect(translatedJsCode).toContain(`textDiv1010.style.color = 'black';`);
  expect(translatedJsCode).toContain(`document.getElementById('amos-screen').appendChild(textDiv1010);`);
});
