const fs = require('fs');
const antlr4 = require('antlr4');
const AmosLexer = require('./AMOSLexer').AMOSLexer;
const AmosParser = require('./AMOSParser').AMOSParser;
const AmosToJavaScriptTranslator = require('./AmosToJavaScriptTranslator').default;

const input = fs.readFileSync('path/to/your/amosbasicfile.bas', 'utf8');

const chars = new antlr4.InputStream(input);
const lexer = new AmosLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new AmosParser(tokens);
const tree = parser.program();

const translator = new AmosToJavaScriptTranslator();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(translator, tree);

const outputJavaScript = translator.getJavaScript();
console.log(outputJavaScript);
