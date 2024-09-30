// Generated from AMOS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AMOSListener from './AMOSListener.js';
const serializedATN = [4,1,52,341,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,0,5,0,64,8,0,10,0,12,0,67,9,0,1,1,1,1,
1,1,5,1,72,8,1,10,1,12,1,75,9,1,1,2,1,2,1,2,5,2,80,8,2,10,2,12,2,83,9,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,95,8,3,1,4,5,4,98,8,4,10,4,12,
4,101,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,126,8,5,1,6,1,6,1,6,1,6,1,6,3,6,133,8,
6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,142,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,3,
8,151,8,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,175,8,12,1,12,1,12,5,12,
179,8,12,10,12,12,12,182,9,12,1,12,3,12,185,8,12,1,13,1,13,1,13,1,13,1,13,
1,14,1,14,1,14,3,14,195,8,14,1,14,5,14,198,8,14,10,14,12,14,201,9,14,1,15,
1,15,1,15,1,15,1,15,3,15,208,8,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,5,21,241,8,21,10,21,12,21,244,
9,21,1,21,1,21,1,22,1,22,1,22,5,22,251,8,22,10,22,12,22,254,9,22,1,22,1,
22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,23,265,8,23,10,23,12,23,268,9,23,
1,23,3,23,271,8,23,1,23,1,23,3,23,275,8,23,1,24,1,24,1,24,1,24,1,24,5,24,
282,8,24,10,24,12,24,285,9,24,1,24,1,24,3,24,289,8,24,1,25,1,25,5,25,293,
8,25,10,25,12,25,296,9,25,1,25,1,25,1,26,1,26,1,26,5,26,303,8,26,10,26,12,
26,306,9,26,1,26,1,26,3,26,310,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,27,1,28,1,28,1,28,1,28,3,28,325,8,28,1,28,1,28,5,28,329,8,28,10,28,
12,28,332,9,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,0,0,30,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,0,5,1,0,50,51,1,0,48,49,2,0,12,12,39,39,1,0,13,14,2,0,4,4,6,10,364,0,
60,1,0,0,0,2,68,1,0,0,0,4,76,1,0,0,0,6,94,1,0,0,0,8,99,1,0,0,0,10,125,1,
0,0,0,12,127,1,0,0,0,14,136,1,0,0,0,16,145,1,0,0,0,18,155,1,0,0,0,20,157,
1,0,0,0,22,161,1,0,0,0,24,184,1,0,0,0,26,186,1,0,0,0,28,191,1,0,0,0,30,202,
1,0,0,0,32,213,1,0,0,0,34,224,1,0,0,0,36,226,1,0,0,0,38,228,1,0,0,0,40,231,
1,0,0,0,42,238,1,0,0,0,44,247,1,0,0,0,46,257,1,0,0,0,48,276,1,0,0,0,50,290,
1,0,0,0,52,299,1,0,0,0,54,311,1,0,0,0,56,320,1,0,0,0,58,335,1,0,0,0,60,65,
3,4,2,0,61,62,7,0,0,0,62,64,3,4,2,0,63,61,1,0,0,0,64,67,1,0,0,0,65,63,1,
0,0,0,65,66,1,0,0,0,66,1,1,0,0,0,67,65,1,0,0,0,68,73,3,4,2,0,69,70,7,0,0,
0,70,72,3,4,2,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,
74,3,1,0,0,0,75,73,1,0,0,0,76,81,3,6,3,0,77,78,7,1,0,0,78,80,3,6,3,0,79,
77,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,5,1,0,0,0,83,81,
1,0,0,0,84,95,5,12,0,0,85,95,5,39,0,0,86,87,5,41,0,0,87,88,3,2,1,0,88,89,
5,42,0,0,89,95,1,0,0,0,90,91,5,47,0,0,91,95,5,12,0,0,92,95,3,12,6,0,93,95,
3,14,7,0,94,84,1,0,0,0,94,85,1,0,0,0,94,86,1,0,0,0,94,90,1,0,0,0,94,92,1,
0,0,0,94,93,1,0,0,0,95,7,1,0,0,0,96,98,3,10,5,0,97,96,1,0,0,0,98,101,1,0,
0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,
5,0,0,1,103,9,1,0,0,0,104,126,3,56,28,0,105,126,3,32,16,0,106,126,3,34,17,
0,107,126,3,30,15,0,108,126,3,36,18,0,109,126,3,38,19,0,110,126,3,40,20,
0,111,126,3,42,21,0,112,126,3,46,23,0,113,126,3,52,26,0,114,126,3,48,24,
0,115,126,3,22,11,0,116,126,3,54,27,0,117,126,3,24,12,0,118,126,3,20,10,
0,119,126,3,44,22,0,120,126,3,18,9,0,121,126,3,16,8,0,122,126,5,1,0,0,123,
126,5,52,0,0,124,126,3,28,14,0,125,104,1,0,0,0,125,105,1,0,0,0,125,106,1,
0,0,0,125,107,1,0,0,0,125,108,1,0,0,0,125,109,1,0,0,0,125,110,1,0,0,0,125,
111,1,0,0,0,125,112,1,0,0,0,125,113,1,0,0,0,125,114,1,0,0,0,125,115,1,0,
0,0,125,116,1,0,0,0,125,117,1,0,0,0,125,118,1,0,0,0,125,119,1,0,0,0,125,
120,1,0,0,0,125,121,1,0,0,0,125,122,1,0,0,0,125,123,1,0,0,0,125,124,1,0,
0,0,126,11,1,0,0,0,127,128,5,2,0,0,128,132,5,41,0,0,129,133,5,12,0,0,130,
133,5,39,0,0,131,133,3,2,1,0,132,129,1,0,0,0,132,130,1,0,0,0,132,131,1,0,
0,0,133,134,1,0,0,0,134,135,5,42,0,0,135,13,1,0,0,0,136,137,5,3,0,0,137,
141,5,41,0,0,138,142,5,12,0,0,139,142,5,39,0,0,140,142,3,2,1,0,141,138,1,
0,0,0,141,139,1,0,0,0,141,140,1,0,0,0,142,143,1,0,0,0,143,144,5,42,0,0,144,
15,1,0,0,0,145,150,5,33,0,0,146,147,5,47,0,0,147,151,5,12,0,0,148,151,3,
2,1,0,149,151,5,39,0,0,150,146,1,0,0,0,150,148,1,0,0,0,150,149,1,0,0,0,151,
152,1,0,0,0,152,153,5,15,0,0,153,154,5,12,0,0,154,17,1,0,0,0,155,156,5,37,
0,0,156,19,1,0,0,0,157,158,5,39,0,0,158,159,5,4,0,0,159,160,3,2,1,0,160,
21,1,0,0,0,161,162,5,39,0,0,162,163,5,43,0,0,163,164,7,2,0,0,164,165,5,44,
0,0,165,23,1,0,0,0,166,167,5,39,0,0,167,168,5,43,0,0,168,169,3,2,1,0,169,
170,5,44,0,0,170,185,1,0,0,0,171,172,5,39,0,0,172,174,5,41,0,0,173,175,3,
2,1,0,174,173,1,0,0,0,174,175,1,0,0,0,175,180,1,0,0,0,176,177,5,15,0,0,177,
179,3,2,1,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,
0,0,181,183,1,0,0,0,182,180,1,0,0,0,183,185,5,42,0,0,184,166,1,0,0,0,184,
171,1,0,0,0,185,25,1,0,0,0,186,187,5,39,0,0,187,188,5,41,0,0,188,189,5,12,
0,0,189,190,5,42,0,0,190,27,1,0,0,0,191,192,5,5,0,0,192,199,3,26,13,0,193,
195,5,15,0,0,194,193,1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,198,3,26,
13,0,197,194,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,
29,1,0,0,0,201,199,1,0,0,0,202,203,5,39,0,0,203,207,5,41,0,0,204,208,5,12,
0,0,205,208,5,39,0,0,206,208,3,2,1,0,207,204,1,0,0,0,207,205,1,0,0,0,207,
206,1,0,0,0,208,209,1,0,0,0,209,210,5,42,0,0,210,211,5,4,0,0,211,212,3,2,
1,0,212,31,1,0,0,0,213,214,5,11,0,0,214,215,5,12,0,0,215,216,5,15,0,0,216,
217,5,12,0,0,217,218,5,15,0,0,218,219,5,12,0,0,219,220,5,15,0,0,220,221,
5,12,0,0,221,222,5,15,0,0,222,223,7,3,0,0,223,33,1,0,0,0,224,225,5,18,0,
0,225,35,1,0,0,0,226,227,5,19,0,0,227,37,1,0,0,0,228,229,5,20,0,0,229,230,
5,12,0,0,230,39,1,0,0,0,231,232,5,21,0,0,232,233,5,12,0,0,233,234,5,15,0,
0,234,235,5,12,0,0,235,236,5,15,0,0,236,237,5,22,0,0,237,41,1,0,0,0,238,
242,5,23,0,0,239,241,3,10,5,0,240,239,1,0,0,0,241,244,1,0,0,0,242,240,1,
0,0,0,242,243,1,0,0,0,243,245,1,0,0,0,244,242,1,0,0,0,245,246,5,24,0,0,246,
43,1,0,0,0,247,248,5,31,0,0,248,252,3,58,29,0,249,251,3,10,5,0,250,249,1,
0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,255,1,0,0,0,254,
252,1,0,0,0,255,256,5,32,0,0,256,45,1,0,0,0,257,258,5,25,0,0,258,259,5,39,
0,0,259,260,5,4,0,0,260,261,5,12,0,0,261,262,5,26,0,0,262,266,5,12,0,0,263,
265,3,10,5,0,264,263,1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,0,
0,0,267,274,1,0,0,0,268,266,1,0,0,0,269,271,5,27,0,0,270,269,1,0,0,0,270,
271,1,0,0,0,271,275,1,0,0,0,272,273,5,27,0,0,273,275,5,39,0,0,274,270,1,
0,0,0,274,272,1,0,0,0,275,47,1,0,0,0,276,277,5,28,0,0,277,278,3,2,1,0,278,
279,7,4,0,0,279,283,3,0,0,0,280,282,3,10,5,0,281,280,1,0,0,0,282,285,1,0,
0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,288,1,0,0,0,285,283,1,0,0,0,286,
289,3,50,25,0,287,289,5,30,0,0,288,286,1,0,0,0,288,287,1,0,0,0,289,49,1,
0,0,0,290,294,5,29,0,0,291,293,3,10,5,0,292,291,1,0,0,0,293,296,1,0,0,0,
294,292,1,0,0,0,294,295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,
5,30,0,0,298,51,1,0,0,0,299,300,5,28,0,0,300,304,3,58,29,0,301,303,3,10,
5,0,302,301,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,
309,1,0,0,0,306,304,1,0,0,0,307,310,3,50,25,0,308,310,5,30,0,0,309,307,1,
0,0,0,309,308,1,0,0,0,310,53,1,0,0,0,311,312,5,36,0,0,312,313,3,2,1,0,313,
314,5,15,0,0,314,315,3,0,0,0,315,316,5,26,0,0,316,317,3,2,1,0,317,318,5,
15,0,0,318,319,3,0,0,0,319,55,1,0,0,0,320,321,5,34,0,0,321,322,5,39,0,0,
322,324,5,43,0,0,323,325,5,39,0,0,324,323,1,0,0,0,324,325,1,0,0,0,325,326,
1,0,0,0,326,330,5,44,0,0,327,329,3,10,5,0,328,327,1,0,0,0,329,332,1,0,0,
0,330,328,1,0,0,0,330,331,1,0,0,0,331,333,1,0,0,0,332,330,1,0,0,0,333,334,
5,35,0,0,334,57,1,0,0,0,335,336,5,38,0,0,336,337,5,41,0,0,337,338,3,2,1,
0,338,339,5,42,0,0,339,59,1,0,0,0,27,65,73,81,94,99,125,132,141,150,174,
180,184,194,199,207,242,252,266,270,274,283,288,294,304,309,324,330];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AMOSParser extends antlr4.Parser {

    static grammarFileName = "AMOS.g4";
    static literalNames = [ null, "'End'", "'Sin'", "'Cos'", "'='", "'Dim'", 
                            "'<>'", "'>='", "'>'", "'<='", "'<'", "'Screen Open'", 
                            null, "'Lowres'", "'Hires'", "','", null, null, 
                            "'Curs Off'", "'Curs On'", "'Ink'", "'Text'", 
                            null, "'Do'", "'Loop'", "'For'", "'To'", "'Next'", 
                            "'If'", "'Else'", "'End If'", "'While'", "'Wend'", 
                            "'Play'", "'Procedure'", "'End Proc'", "'Bar'", 
                            "'Wait Key'", "'Key State'", null, null, "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'$'", "'*'", 
                            "'/'", "'+'", "'-'", "':'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "SCREENOPEN", "NUMBER", "LOWRES", 
                             "HIRES", "COMMA", "COMMENT", "WS", "CURSOFF", 
                             "CURSON", "INK", "TEXT", "STRING", "DO", "LOOP", 
                             "FOR", "TO", "NEXT", "IF", "ELSE", "ENDIF", 
                             "WHILE", "WEND", "PLAY", "PROC", "ENDPROC", 
                             "BAR", "WAITKEY", "KEYSTATE", "IDENTIFIER", 
                             "COMPARISON", "BRACKETOPEN_PROP", "BRACKETCLOSE_PROP", 
                             "BRACKETOPEN_ARRAY", "BRACKETCLOSE_ARRAY", 
                             "BRACKETOPEN_FUNCTION", "BRACKETCLOSE_FUNCTION", 
                             "HECADECIMAL", "MULTIPLY", "DIVIDE", "ADD", 
                             "SUBTRACT", "STATEMENT_SEPARATOR" ];
    static ruleNames = [ "expression2", "expression1", "term", "factor", 
                         "program", "statement", "sin_function", "cos_function", 
                         "play_sound", "wait_key_break", "variable_starter", 
                         "function_starter", "function_call_or_array_access", 
                         "array_structure", "array_create", "array_update", 
                         "screen_open", "curs_off", "curs_on", "ink", "text", 
                         "do_loop", "while_wend", "for_loop", "if_statement", 
                         "else_statement", "if_statement_key_state", "bar", 
                         "procedure", "current_Key_State" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AMOSParser.ruleNames;
        this.literalNames = AMOSParser.literalNames;
        this.symbolicNames = AMOSParser.symbolicNames;
    }



	expression2() {
	    let localctx = new Expression2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AMOSParser.RULE_expression2);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.term();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===50 || _la===51) {
	            this.state = 61;
	            _la = this._input.LA(1);
	            if(!(_la===50 || _la===51)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 62;
	            this.term();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression1() {
	    let localctx = new Expression1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AMOSParser.RULE_expression1);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.term();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===50 || _la===51) {
	            this.state = 69;
	            _la = this._input.LA(1);
	            if(!(_la===50 || _la===51)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 70;
	            this.term();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AMOSParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.factor();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48 || _la===49) {
	            this.state = 77;
	            _la = this._input.LA(1);
	            if(!(_la===48 || _la===49)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 78;
	            this.factor();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AMOSParser.RULE_factor);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.match(AMOSParser.NUMBER);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.match(AMOSParser.IDENTIFIER);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 87;
	            this.expression1();
	            this.state = 88;
	            this.match(AMOSParser.BRACKETCLOSE_PROP);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 90;
	            this.match(AMOSParser.HECADECIMAL);
	            this.state = 91;
	            this.match(AMOSParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 92;
	            this.sin_function();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 93;
	            this.cos_function();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AMOSParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2461796386) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 524379) !== 0)) {
	            this.state = 96;
	            this.statement();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
	        this.match(AMOSParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AMOSParser.RULE_statement);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 104;
	            this.procedure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 105;
	            this.screen_open();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 106;
	            this.curs_off();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 107;
	            this.array_update();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 108;
	            this.curs_on();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 109;
	            this.ink();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 110;
	            this.text();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 111;
	            this.do_loop();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 112;
	            this.for_loop();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 113;
	            this.if_statement_key_state();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 114;
	            this.if_statement();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 115;
	            this.function_starter();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 116;
	            this.bar();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 117;
	            this.function_call_or_array_access();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 118;
	            this.variable_starter();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 119;
	            this.while_wend();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 120;
	            this.wait_key_break();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 121;
	            this.play_sound();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 122;
	            this.match(AMOSParser.T__0);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 123;
	            this.match(AMOSParser.STATEMENT_SEPARATOR);
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 124;
	            this.array_create();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sin_function() {
	    let localctx = new Sin_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AMOSParser.RULE_sin_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(AMOSParser.T__1);
	        this.state = 128;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 129;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 130;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 131;
	            this.expression1();
	            break;

	        }
	        this.state = 134;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cos_function() {
	    let localctx = new Cos_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AMOSParser.RULE_cos_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(AMOSParser.T__2);
	        this.state = 137;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 138;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 139;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 140;
	            this.expression1();
	            break;

	        }
	        this.state = 143;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	play_sound() {
	    let localctx = new Play_soundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AMOSParser.RULE_play_sound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.match(AMOSParser.PLAY);
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 146;
	            this.match(AMOSParser.HECADECIMAL);
	            this.state = 147;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 148;
	            this.expression1();
	            break;

	        case 3:
	            this.state = 149;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        }
	        this.state = 152;
	        this.match(AMOSParser.COMMA);
	        this.state = 153;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wait_key_break() {
	    let localctx = new Wait_key_breakContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AMOSParser.RULE_wait_key_break);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(AMOSParser.WAITKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_starter() {
	    let localctx = new Variable_starterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AMOSParser.RULE_variable_starter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 158;
	        this.match(AMOSParser.T__3);
	        this.state = 159;
	        this.expression1();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_starter() {
	    let localctx = new Function_starterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AMOSParser.RULE_function_starter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 162;
	        this.match(AMOSParser.BRACKETOPEN_ARRAY);
	        this.state = 163;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===39)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 164;
	        this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_call_or_array_access() {
	    let localctx = new Function_call_or_array_accessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, AMOSParser.RULE_function_call_or_array_access);
	    var _la = 0;
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 167;
	            this.match(AMOSParser.BRACKETOPEN_ARRAY);
	            this.state = 168;
	            this.expression1();
	            this.state = 169;
	            this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 172;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4108) !== 0) || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 261) !== 0)) {
	                this.state = 173;
	                this.expression1();
	            }

	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===15) {
	                this.state = 176;
	                this.match(AMOSParser.COMMA);
	                this.state = 177;
	                this.expression1();
	                this.state = 182;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 183;
	            this.match(AMOSParser.BRACKETCLOSE_PROP);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_structure() {
	    let localctx = new Array_structureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, AMOSParser.RULE_array_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 187;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 188;
	        this.match(AMOSParser.NUMBER);
	        this.state = 189;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_create() {
	    let localctx = new Array_createContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, AMOSParser.RULE_array_create);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(AMOSParser.T__4);
	        this.state = 192;
	        this.array_structure();
	        this.state = 199;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 194;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===15) {
	                    this.state = 193;
	                    this.match(AMOSParser.COMMA);
	                }

	                this.state = 196;
	                this.array_structure(); 
	            }
	            this.state = 201;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_update() {
	    let localctx = new Array_updateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, AMOSParser.RULE_array_update);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 203;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 204;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 205;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 206;
	            this.expression1();
	            break;

	        }
	        this.state = 209;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	        this.state = 210;
	        this.match(AMOSParser.T__3);
	        this.state = 211;
	        this.expression1();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	screen_open() {
	    let localctx = new Screen_openContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, AMOSParser.RULE_screen_open);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(AMOSParser.SCREENOPEN);
	        this.state = 214;
	        this.match(AMOSParser.NUMBER);
	        this.state = 215;
	        this.match(AMOSParser.COMMA);
	        this.state = 216;
	        this.match(AMOSParser.NUMBER);
	        this.state = 217;
	        this.match(AMOSParser.COMMA);
	        this.state = 218;
	        this.match(AMOSParser.NUMBER);
	        this.state = 219;
	        this.match(AMOSParser.COMMA);
	        this.state = 220;
	        this.match(AMOSParser.NUMBER);
	        this.state = 221;
	        this.match(AMOSParser.COMMA);
	        this.state = 222;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curs_off() {
	    let localctx = new Curs_offContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, AMOSParser.RULE_curs_off);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(AMOSParser.CURSOFF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curs_on() {
	    let localctx = new Curs_onContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, AMOSParser.RULE_curs_on);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(AMOSParser.CURSON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ink() {
	    let localctx = new InkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, AMOSParser.RULE_ink);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(AMOSParser.INK);
	        this.state = 229;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, AMOSParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(AMOSParser.TEXT);
	        this.state = 232;
	        this.match(AMOSParser.NUMBER);
	        this.state = 233;
	        this.match(AMOSParser.COMMA);
	        this.state = 234;
	        this.match(AMOSParser.NUMBER);
	        this.state = 235;
	        this.match(AMOSParser.COMMA);
	        this.state = 236;
	        this.match(AMOSParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	do_loop() {
	    let localctx = new Do_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, AMOSParser.RULE_do_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(AMOSParser.DO);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2461796386) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 524379) !== 0)) {
	            this.state = 239;
	            this.statement();
	            this.state = 244;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 245;
	        this.match(AMOSParser.LOOP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_wend() {
	    let localctx = new While_wendContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, AMOSParser.RULE_while_wend);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(AMOSParser.WHILE);
	        this.state = 248;
	        this.current_Key_State();
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2461796386) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 524379) !== 0)) {
	            this.state = 249;
	            this.statement();
	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 255;
	        this.match(AMOSParser.WEND);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_loop() {
	    let localctx = new For_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, AMOSParser.RULE_for_loop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(AMOSParser.FOR);
	        this.state = 258;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 259;
	        this.match(AMOSParser.T__3);
	        this.state = 260;
	        this.match(AMOSParser.NUMBER);
	        this.state = 261;
	        this.match(AMOSParser.TO);
	        this.state = 262;
	        this.match(AMOSParser.NUMBER);
	        this.state = 266;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 263;
	                this.statement(); 
	            }
	            this.state = 268;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 270;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 269;
	                this.match(AMOSParser.NEXT);

	            }
	            break;

	        case 2:
	            this.state = 272;
	            this.match(AMOSParser.NEXT);
	            this.state = 273;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_statement() {
	    let localctx = new If_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, AMOSParser.RULE_if_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(AMOSParser.IF);
	        this.state = 277;
	        this.expression1();
	        this.state = 278;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2000) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 279;
	        this.expression2();
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2461796386) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 524379) !== 0)) {
	            this.state = 280;
	            this.statement();
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 288;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.state = 286;
	            this.else_statement();
	            break;
	        case 30:
	            this.state = 287;
	            this.match(AMOSParser.ENDIF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	else_statement() {
	    let localctx = new Else_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, AMOSParser.RULE_else_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(AMOSParser.ELSE);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2461796386) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 524379) !== 0)) {
	            this.state = 291;
	            this.statement();
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 297;
	        this.match(AMOSParser.ENDIF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_statement_key_state() {
	    let localctx = new If_statement_key_stateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, AMOSParser.RULE_if_statement_key_state);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(AMOSParser.IF);
	        this.state = 300;
	        this.current_Key_State();
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2461796386) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 524379) !== 0)) {
	            this.state = 301;
	            this.statement();
	            this.state = 306;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 309;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.state = 307;
	            this.else_statement();
	            break;
	        case 30:
	            this.state = 308;
	            this.match(AMOSParser.ENDIF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bar() {
	    let localctx = new BarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, AMOSParser.RULE_bar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this.match(AMOSParser.BAR);
	        this.state = 312;
	        this.expression1();
	        this.state = 313;
	        this.match(AMOSParser.COMMA);
	        this.state = 314;
	        this.expression2();
	        this.state = 315;
	        this.match(AMOSParser.TO);
	        this.state = 316;
	        this.expression1();
	        this.state = 317;
	        this.match(AMOSParser.COMMA);
	        this.state = 318;
	        this.expression2();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedure() {
	    let localctx = new ProcedureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, AMOSParser.RULE_procedure);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(AMOSParser.PROC);
	        this.state = 321;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 322;
	        this.match(AMOSParser.BRACKETOPEN_ARRAY);
	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 323;
	            this.match(AMOSParser.IDENTIFIER);
	        }

	        this.state = 326;
	        this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	        this.state = 330;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2461796386) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 524379) !== 0)) {
	            this.state = 327;
	            this.statement();
	            this.state = 332;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 333;
	        this.match(AMOSParser.ENDPROC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	current_Key_State() {
	    let localctx = new Current_Key_StateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, AMOSParser.RULE_current_Key_State);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(AMOSParser.KEYSTATE);
	        this.state = 336;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 337;
	        this.expression1();
	        this.state = 338;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AMOSParser.EOF = antlr4.Token.EOF;
AMOSParser.T__0 = 1;
AMOSParser.T__1 = 2;
AMOSParser.T__2 = 3;
AMOSParser.T__3 = 4;
AMOSParser.T__4 = 5;
AMOSParser.T__5 = 6;
AMOSParser.T__6 = 7;
AMOSParser.T__7 = 8;
AMOSParser.T__8 = 9;
AMOSParser.T__9 = 10;
AMOSParser.SCREENOPEN = 11;
AMOSParser.NUMBER = 12;
AMOSParser.LOWRES = 13;
AMOSParser.HIRES = 14;
AMOSParser.COMMA = 15;
AMOSParser.COMMENT = 16;
AMOSParser.WS = 17;
AMOSParser.CURSOFF = 18;
AMOSParser.CURSON = 19;
AMOSParser.INK = 20;
AMOSParser.TEXT = 21;
AMOSParser.STRING = 22;
AMOSParser.DO = 23;
AMOSParser.LOOP = 24;
AMOSParser.FOR = 25;
AMOSParser.TO = 26;
AMOSParser.NEXT = 27;
AMOSParser.IF = 28;
AMOSParser.ELSE = 29;
AMOSParser.ENDIF = 30;
AMOSParser.WHILE = 31;
AMOSParser.WEND = 32;
AMOSParser.PLAY = 33;
AMOSParser.PROC = 34;
AMOSParser.ENDPROC = 35;
AMOSParser.BAR = 36;
AMOSParser.WAITKEY = 37;
AMOSParser.KEYSTATE = 38;
AMOSParser.IDENTIFIER = 39;
AMOSParser.COMPARISON = 40;
AMOSParser.BRACKETOPEN_PROP = 41;
AMOSParser.BRACKETCLOSE_PROP = 42;
AMOSParser.BRACKETOPEN_ARRAY = 43;
AMOSParser.BRACKETCLOSE_ARRAY = 44;
AMOSParser.BRACKETOPEN_FUNCTION = 45;
AMOSParser.BRACKETCLOSE_FUNCTION = 46;
AMOSParser.HECADECIMAL = 47;
AMOSParser.MULTIPLY = 48;
AMOSParser.DIVIDE = 49;
AMOSParser.ADD = 50;
AMOSParser.SUBTRACT = 51;
AMOSParser.STATEMENT_SEPARATOR = 52;

AMOSParser.RULE_expression2 = 0;
AMOSParser.RULE_expression1 = 1;
AMOSParser.RULE_term = 2;
AMOSParser.RULE_factor = 3;
AMOSParser.RULE_program = 4;
AMOSParser.RULE_statement = 5;
AMOSParser.RULE_sin_function = 6;
AMOSParser.RULE_cos_function = 7;
AMOSParser.RULE_play_sound = 8;
AMOSParser.RULE_wait_key_break = 9;
AMOSParser.RULE_variable_starter = 10;
AMOSParser.RULE_function_starter = 11;
AMOSParser.RULE_function_call_or_array_access = 12;
AMOSParser.RULE_array_structure = 13;
AMOSParser.RULE_array_create = 14;
AMOSParser.RULE_array_update = 15;
AMOSParser.RULE_screen_open = 16;
AMOSParser.RULE_curs_off = 17;
AMOSParser.RULE_curs_on = 18;
AMOSParser.RULE_ink = 19;
AMOSParser.RULE_text = 20;
AMOSParser.RULE_do_loop = 21;
AMOSParser.RULE_while_wend = 22;
AMOSParser.RULE_for_loop = 23;
AMOSParser.RULE_if_statement = 24;
AMOSParser.RULE_else_statement = 25;
AMOSParser.RULE_if_statement_key_state = 26;
AMOSParser.RULE_bar = 27;
AMOSParser.RULE_procedure = 28;
AMOSParser.RULE_current_Key_State = 29;

class Expression2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_expression2;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.ADD);
	    } else {
	        return this.getToken(AMOSParser.ADD, i);
	    }
	};


	SUBTRACT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.SUBTRACT);
	    } else {
	        return this.getToken(AMOSParser.SUBTRACT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterExpression2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitExpression2(this);
		}
	}


}



class Expression1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_expression1;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.ADD);
	    } else {
	        return this.getToken(AMOSParser.ADD, i);
	    }
	};


	SUBTRACT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.SUBTRACT);
	    } else {
	        return this.getToken(AMOSParser.SUBTRACT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterExpression1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitExpression1(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	MULTIPLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.MULTIPLY);
	    } else {
	        return this.getToken(AMOSParser.MULTIPLY, i);
	    }
	};


	DIVIDE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.DIVIDE);
	    } else {
	        return this.getToken(AMOSParser.DIVIDE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitTerm(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_factor;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	HECADECIMAL() {
	    return this.getToken(AMOSParser.HECADECIMAL, 0);
	};

	sin_function() {
	    return this.getTypedRuleContext(Sin_functionContext,0);
	};

	cos_function() {
	    return this.getTypedRuleContext(Cos_functionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFactor(this);
		}
	}


}



class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_program;
    }

	EOF() {
	    return this.getToken(AMOSParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_statement;
    }

	procedure() {
	    return this.getTypedRuleContext(ProcedureContext,0);
	};

	screen_open() {
	    return this.getTypedRuleContext(Screen_openContext,0);
	};

	curs_off() {
	    return this.getTypedRuleContext(Curs_offContext,0);
	};

	array_update() {
	    return this.getTypedRuleContext(Array_updateContext,0);
	};

	curs_on() {
	    return this.getTypedRuleContext(Curs_onContext,0);
	};

	ink() {
	    return this.getTypedRuleContext(InkContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	do_loop() {
	    return this.getTypedRuleContext(Do_loopContext,0);
	};

	for_loop() {
	    return this.getTypedRuleContext(For_loopContext,0);
	};

	if_statement_key_state() {
	    return this.getTypedRuleContext(If_statement_key_stateContext,0);
	};

	if_statement() {
	    return this.getTypedRuleContext(If_statementContext,0);
	};

	function_starter() {
	    return this.getTypedRuleContext(Function_starterContext,0);
	};

	bar() {
	    return this.getTypedRuleContext(BarContext,0);
	};

	function_call_or_array_access() {
	    return this.getTypedRuleContext(Function_call_or_array_accessContext,0);
	};

	variable_starter() {
	    return this.getTypedRuleContext(Variable_starterContext,0);
	};

	while_wend() {
	    return this.getTypedRuleContext(While_wendContext,0);
	};

	wait_key_break() {
	    return this.getTypedRuleContext(Wait_key_breakContext,0);
	};

	play_sound() {
	    return this.getTypedRuleContext(Play_soundContext,0);
	};

	STATEMENT_SEPARATOR() {
	    return this.getToken(AMOSParser.STATEMENT_SEPARATOR, 0);
	};

	array_create() {
	    return this.getTypedRuleContext(Array_createContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Sin_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_sin_function;
    }

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterSin_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitSin_function(this);
		}
	}


}



class Cos_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_cos_function;
    }

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCos_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCos_function(this);
		}
	}


}



class Play_soundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_play_sound;
    }

	PLAY() {
	    return this.getToken(AMOSParser.PLAY, 0);
	};

	COMMA() {
	    return this.getToken(AMOSParser.COMMA, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	HECADECIMAL() {
	    return this.getToken(AMOSParser.HECADECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterPlay_sound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitPlay_sound(this);
		}
	}


}



class Wait_key_breakContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_wait_key_break;
    }

	WAITKEY() {
	    return this.getToken(AMOSParser.WAITKEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterWait_key_break(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitWait_key_break(this);
		}
	}


}



class Variable_starterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_variable_starter;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterVariable_starter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitVariable_starter(this);
		}
	}


}



class Function_starterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_function_starter;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	BRACKETOPEN_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETOPEN_ARRAY, 0);
	};

	BRACKETCLOSE_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_ARRAY, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFunction_starter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFunction_starter(this);
		}
	}


}



class Function_call_or_array_accessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_function_call_or_array_access;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	BRACKETOPEN_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETOPEN_ARRAY, 0);
	};

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	BRACKETCLOSE_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_ARRAY, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFunction_call_or_array_access(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFunction_call_or_array_access(this);
		}
	}


}



class Array_structureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_array_structure;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterArray_structure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitArray_structure(this);
		}
	}


}



class Array_createContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_array_create;
    }

	array_structure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Array_structureContext);
	    } else {
	        return this.getTypedRuleContext(Array_structureContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterArray_create(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitArray_create(this);
		}
	}


}



class Array_updateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_array_update;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterArray_update(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitArray_update(this);
		}
	}


}



class Screen_openContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_screen_open;
    }

	SCREENOPEN() {
	    return this.getToken(AMOSParser.SCREENOPEN, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	LOWRES() {
	    return this.getToken(AMOSParser.LOWRES, 0);
	};

	HIRES() {
	    return this.getToken(AMOSParser.HIRES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterScreen_open(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitScreen_open(this);
		}
	}


}



class Curs_offContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_curs_off;
    }

	CURSOFF() {
	    return this.getToken(AMOSParser.CURSOFF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCurs_off(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCurs_off(this);
		}
	}


}



class Curs_onContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_curs_on;
    }

	CURSON() {
	    return this.getToken(AMOSParser.CURSON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCurs_on(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCurs_on(this);
		}
	}


}



class InkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_ink;
    }

	INK() {
	    return this.getToken(AMOSParser.INK, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterInk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitInk(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_text;
    }

	TEXT() {
	    return this.getToken(AMOSParser.TEXT, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	STRING() {
	    return this.getToken(AMOSParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitText(this);
		}
	}


}



class Do_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_do_loop;
    }

	DO() {
	    return this.getToken(AMOSParser.DO, 0);
	};

	LOOP() {
	    return this.getToken(AMOSParser.LOOP, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterDo_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitDo_loop(this);
		}
	}


}



class While_wendContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_while_wend;
    }

	WHILE() {
	    return this.getToken(AMOSParser.WHILE, 0);
	};

	current_Key_State() {
	    return this.getTypedRuleContext(Current_Key_StateContext,0);
	};

	WEND() {
	    return this.getToken(AMOSParser.WEND, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterWhile_wend(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitWhile_wend(this);
		}
	}


}



class For_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_for_loop;
    }

	FOR() {
	    return this.getToken(AMOSParser.FOR, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	NEXT() {
	    return this.getToken(AMOSParser.NEXT, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFor_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFor_loop(this);
		}
	}


}



class If_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_if_statement;
    }

	IF() {
	    return this.getToken(AMOSParser.IF, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	expression2() {
	    return this.getTypedRuleContext(Expression2Context,0);
	};

	else_statement() {
	    return this.getTypedRuleContext(Else_statementContext,0);
	};

	ENDIF() {
	    return this.getToken(AMOSParser.ENDIF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterIf_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitIf_statement(this);
		}
	}


}



class Else_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_else_statement;
    }

	ELSE() {
	    return this.getToken(AMOSParser.ELSE, 0);
	};

	ENDIF() {
	    return this.getToken(AMOSParser.ENDIF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterElse_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitElse_statement(this);
		}
	}


}



class If_statement_key_stateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_if_statement_key_state;
    }

	IF() {
	    return this.getToken(AMOSParser.IF, 0);
	};

	current_Key_State() {
	    return this.getTypedRuleContext(Current_Key_StateContext,0);
	};

	else_statement() {
	    return this.getTypedRuleContext(Else_statementContext,0);
	};

	ENDIF() {
	    return this.getToken(AMOSParser.ENDIF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterIf_statement_key_state(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitIf_statement_key_state(this);
		}
	}


}



class BarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_bar;
    }

	BAR() {
	    return this.getToken(AMOSParser.BAR, 0);
	};

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	expression2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression2Context);
	    } else {
	        return this.getTypedRuleContext(Expression2Context,i);
	    }
	};

	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterBar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitBar(this);
		}
	}


}



class ProcedureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_procedure;
    }

	PROC() {
	    return this.getToken(AMOSParser.PROC, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	BRACKETOPEN_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETOPEN_ARRAY, 0);
	};

	BRACKETCLOSE_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_ARRAY, 0);
	};

	ENDPROC() {
	    return this.getToken(AMOSParser.ENDPROC, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterProcedure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitProcedure(this);
		}
	}


}



class Current_Key_StateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_current_Key_State;
    }

	KEYSTATE() {
	    return this.getToken(AMOSParser.KEYSTATE, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCurrent_Key_State(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCurrent_Key_State(this);
		}
	}


}




AMOSParser.Expression2Context = Expression2Context; 
AMOSParser.Expression1Context = Expression1Context; 
AMOSParser.TermContext = TermContext; 
AMOSParser.FactorContext = FactorContext; 
AMOSParser.ProgramContext = ProgramContext; 
AMOSParser.StatementContext = StatementContext; 
AMOSParser.Sin_functionContext = Sin_functionContext; 
AMOSParser.Cos_functionContext = Cos_functionContext; 
AMOSParser.Play_soundContext = Play_soundContext; 
AMOSParser.Wait_key_breakContext = Wait_key_breakContext; 
AMOSParser.Variable_starterContext = Variable_starterContext; 
AMOSParser.Function_starterContext = Function_starterContext; 
AMOSParser.Function_call_or_array_accessContext = Function_call_or_array_accessContext; 
AMOSParser.Array_structureContext = Array_structureContext; 
AMOSParser.Array_createContext = Array_createContext; 
AMOSParser.Array_updateContext = Array_updateContext; 
AMOSParser.Screen_openContext = Screen_openContext; 
AMOSParser.Curs_offContext = Curs_offContext; 
AMOSParser.Curs_onContext = Curs_onContext; 
AMOSParser.InkContext = InkContext; 
AMOSParser.TextContext = TextContext; 
AMOSParser.Do_loopContext = Do_loopContext; 
AMOSParser.While_wendContext = While_wendContext; 
AMOSParser.For_loopContext = For_loopContext; 
AMOSParser.If_statementContext = If_statementContext; 
AMOSParser.Else_statementContext = Else_statementContext; 
AMOSParser.If_statement_key_stateContext = If_statement_key_stateContext; 
AMOSParser.BarContext = BarContext; 
AMOSParser.ProcedureContext = ProcedureContext; 
AMOSParser.Current_Key_StateContext = Current_Key_StateContext; 
