import antlr4 from "antlr4";
import AmosToJavaScriptTranslator from "../AmosToJavaScriptTranslator";
import AMOSParser from "../AMOSParser";
import AMOSLexer from "../AMOSLexer";

test("procedures", () => {

  const amosBasicCode = `
  Procedure P_DRAWKEYS[PRESSEDKEYNUMBER]
   'White key positions 
   '******************* 
   XW=70
   YW=70
   WW=50
   HW=100
   
   'Black key positions 
   '******************* 
   XB=XW+WW
   YB=70
   WB=30
   HB=60
   
   'Draw keys 
   '*********   
   For I=0 To 5
      'Draw white keys 
      '***************     
      'Set color, either white or green (pressed)  
      '******************************************
      If PRESSEDKEYNUMBER=2*I
         Ink 5
      Else 
         Ink 2
      End If 
      Bar XW+(I*(WB+WW)),YW To XW+((WB+WW)*I+WW),YW+HW
      
      'If last iteration, do not draw a black key  
      '******************************************  
      If I<>5 
         If PRESSEDKEYNUMBER=2*I+1
            Ink 5
         Else 
            Ink 0
         End If 
         Bar XB+((WB+WW)*I),YB To XB+((WB+WW)*I+WB+WW),YB+HB
      End If 
   Next I
  End Proc

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
    `const P_DRAWKEYS = (PRESSEDKEYNUMBER) => {`);
  expect(translatedJsCode).toContain(
    `const currentTime = Date.now();`);
  expect(translatedJsCode).toContain(
    `const timeSinceLastCall = currentTime - lastTimeP_DRAWKEYS;`
  );
  expect(translatedJsCode).toContain(
    `let lastTimeP_DRAWKEYS = 0;`
  );
  expect(translatedJsCode).toContain(
    `let timeoutIdP_DRAWKEYS = null;`
  );
  expect(translatedJsCode).toContain(
    `if (timeSinceLastCall < 16) {`
  );
  expect(translatedJsCode).toContain(
    `if (timeoutIdP_DRAWKEYS) clearTimeout(timeoutIdP_DRAWKEYS);`
  );
  expect(translatedJsCode).toContain(
    `timeoutIdP_DRAWKEYS = setTimeout(() => {`
  );
  expect(translatedJsCode).toContain(
    `P_DRAWKEYS(PRESSEDKEYNUMBER);`
  );
  expect(translatedJsCode).toContain(
    `}, 100 - timeSinceLastCall);`
  );
  expect(translatedJsCode).toContain(
    `lastTimeP_DRAWKEYS = currentTime;`
  );
  expect(translatedJsCode).toContain(
    `timeoutIdP_DRAWKEYS = null;`
  );
  
});
