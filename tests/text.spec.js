import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "../AmosToJavaScriptTranslator";
import AMOSParser from "../AMOSParser";
import AMOSLexer from "../AMOSLexer";

test("Text", () => {
    
    /* Properties of amos screen */

  const position_x = 10;
  const position_y = 10;
  const content = "ReAnimate(d) Piano";


  const amosBasicCode = `
        Text ${position_x.toString()},${position_y.toString()},"${content}"
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

  expect(translatedJsCode).toContain(`const textDiv${position_x}${position_y} = document.createElement('div');`);
  expect(translatedJsCode).toContain(`textDiv${position_x}${position_y}.innerText = '${content}';`);

});
