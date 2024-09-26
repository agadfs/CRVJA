import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "../AmosToJavaScriptTranslator";
import AMOSParser from "../AMOSParser";
import AMOSLexer from "../AMOSLexer";

test("do_loop", () => {
  const amosBasicCode = `
Do 
   Wait Key 
   For I=0 To 10
      If Key State($10+I)
         P_DRAWKEYS[I]
         While Key State($10+I)
            Play 37+I,1
         Wend 
         P_DRAWKEYS[-1]
      End If 
   Next I
Loop 
 
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
    `setInterval(() => {`
  );
  expect(translatedJsCode).toContain(`currentTimer = Date.now();`);
  expect(translatedJsCode).toContain(`}, 16);`);
});
