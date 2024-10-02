import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "../AmosToJavaScriptTranslator";
import AMOSParser from "../AMOSParser";
import AMOSLexer from "../AMOSLexer";

test("print_something", () => {
  const amosBasicCode = `Print 500/Timer;" FPS"`;

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

  let targetString = `
  const printDiv0 = document.createElement('div');
  printDiv0.innerText = (500/Timer).toString();
  printDiv0.style.position = 'relative';
  printDiv0.style.left = '50%';
  printDiv0.style.top = '50%';
  printDiv0.style.fontSize = '14px';
  printDiv0.style.color = 'black';
  document.getElementById('amos-screen').appendChild(printDiv0);
  
  const printDiv1 = document.createElement('div');
  printDiv1.innerText = ' FPS';
  printDiv1.style.position = 'relative';
  printDiv1.style.left = '50%';
  printDiv1.style.top = '50%';
  printDiv1.style.fontSize = '14px';
  printDiv1.style.color = 'black';
  document.getElementById('amos-screen').appendChild(printDiv1);`;
  /* test */
  const normalizedTranslatedJsCode = translatedJsCode
    .replace(/\s+/g, " ")
    .trim();
  const normalizedExpectedJsCode = targetString.replace(/\s+/g, " ").trim();
  expect(normalizedTranslatedJsCode).toContain(normalizedExpectedJsCode);
});
