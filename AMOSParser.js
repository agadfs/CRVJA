// Generated from AMOS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AMOSListener from './AMOSListener.js';
const serializedATN = [4,1,48,277,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,1,0,1,0,1,0,5,0,54,8,0,10,
0,12,0,57,9,0,1,1,1,1,1,1,5,1,62,8,1,10,1,12,1,65,9,1,1,2,1,2,1,2,5,2,70,
8,2,10,2,12,2,73,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,83,8,3,1,4,5,4,
86,8,4,10,4,12,4,89,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,111,8,5,1,6,1,6,1,6,1,6,1,6,3,6,118,
8,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,3,10,142,8,10,1,10,1,10,5,10,146,8,10,10,10,
12,10,149,9,10,1,10,3,10,152,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,16,1,16,5,16,181,8,16,10,16,12,16,184,9,16,1,16,1,16,1,17,
1,17,1,17,5,17,191,8,17,10,17,12,17,194,9,17,1,17,1,17,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,5,18,205,8,18,10,18,12,18,208,9,18,1,18,1,18,1,18,1,19,
1,19,1,19,1,19,1,19,5,19,218,8,19,10,19,12,19,221,9,19,1,19,1,19,3,19,225,
8,19,1,20,1,20,5,20,229,8,20,10,20,12,20,232,9,20,1,20,1,20,1,21,1,21,1,
21,5,21,239,8,21,10,21,12,21,242,9,21,1,21,1,21,3,21,246,8,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,3,23,261,8,23,1,23,
1,23,5,23,265,8,23,10,23,12,23,268,9,23,1,23,1,23,1,24,1,24,1,24,1,24,1,
24,1,24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,0,5,1,0,47,48,1,0,45,46,2,0,9,9,36,36,1,0,10,11,1,0,2,7,290,
0,50,1,0,0,0,2,58,1,0,0,0,4,66,1,0,0,0,6,82,1,0,0,0,8,87,1,0,0,0,10,110,
1,0,0,0,12,112,1,0,0,0,14,122,1,0,0,0,16,124,1,0,0,0,18,128,1,0,0,0,20,151,
1,0,0,0,22,153,1,0,0,0,24,164,1,0,0,0,26,166,1,0,0,0,28,168,1,0,0,0,30,171,
1,0,0,0,32,178,1,0,0,0,34,187,1,0,0,0,36,197,1,0,0,0,38,212,1,0,0,0,40,226,
1,0,0,0,42,235,1,0,0,0,44,247,1,0,0,0,46,256,1,0,0,0,48,271,1,0,0,0,50,55,
3,4,2,0,51,52,7,0,0,0,52,54,3,4,2,0,53,51,1,0,0,0,54,57,1,0,0,0,55,53,1,
0,0,0,55,56,1,0,0,0,56,1,1,0,0,0,57,55,1,0,0,0,58,63,3,4,2,0,59,60,7,0,0,
0,60,62,3,4,2,0,61,59,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,
64,3,1,0,0,0,65,63,1,0,0,0,66,71,3,6,3,0,67,68,7,1,0,0,68,70,3,6,3,0,69,
67,1,0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,5,1,0,0,0,73,71,
1,0,0,0,74,83,5,9,0,0,75,83,5,36,0,0,76,77,5,38,0,0,77,78,3,2,1,0,78,79,
5,39,0,0,79,83,1,0,0,0,80,81,5,44,0,0,81,83,5,9,0,0,82,74,1,0,0,0,82,75,
1,0,0,0,82,76,1,0,0,0,82,80,1,0,0,0,83,7,1,0,0,0,84,86,3,10,5,0,85,84,1,
0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,
0,0,90,91,5,0,0,1,91,9,1,0,0,0,92,111,3,46,23,0,93,111,3,22,11,0,94,111,
3,24,12,0,95,111,3,26,13,0,96,111,3,28,14,0,97,111,3,30,15,0,98,111,3,32,
16,0,99,111,3,36,18,0,100,111,3,42,21,0,101,111,3,38,19,0,102,111,3,18,9,
0,103,111,3,44,22,0,104,111,3,20,10,0,105,111,3,16,8,0,106,111,3,34,17,0,
107,111,3,14,7,0,108,111,3,12,6,0,109,111,5,1,0,0,110,92,1,0,0,0,110,93,
1,0,0,0,110,94,1,0,0,0,110,95,1,0,0,0,110,96,1,0,0,0,110,97,1,0,0,0,110,
98,1,0,0,0,110,99,1,0,0,0,110,100,1,0,0,0,110,101,1,0,0,0,110,102,1,0,0,
0,110,103,1,0,0,0,110,104,1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,110,107,
1,0,0,0,110,108,1,0,0,0,110,109,1,0,0,0,111,11,1,0,0,0,112,117,5,30,0,0,
113,114,5,44,0,0,114,118,5,9,0,0,115,118,3,2,1,0,116,118,5,36,0,0,117,113,
1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,119,1,0,0,0,119,120,5,12,0,0,
120,121,5,9,0,0,121,13,1,0,0,0,122,123,5,34,0,0,123,15,1,0,0,0,124,125,5,
36,0,0,125,126,5,2,0,0,126,127,3,2,1,0,127,17,1,0,0,0,128,129,5,36,0,0,129,
130,5,40,0,0,130,131,7,2,0,0,131,132,5,41,0,0,132,19,1,0,0,0,133,134,5,36,
0,0,134,135,5,40,0,0,135,136,3,2,1,0,136,137,5,41,0,0,137,152,1,0,0,0,138,
139,5,36,0,0,139,141,5,38,0,0,140,142,3,2,1,0,141,140,1,0,0,0,141,142,1,
0,0,0,142,147,1,0,0,0,143,144,5,12,0,0,144,146,3,2,1,0,145,143,1,0,0,0,146,
149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,
0,0,150,152,5,39,0,0,151,133,1,0,0,0,151,138,1,0,0,0,152,21,1,0,0,0,153,
154,5,8,0,0,154,155,5,9,0,0,155,156,5,12,0,0,156,157,5,9,0,0,157,158,5,12,
0,0,158,159,5,9,0,0,159,160,5,12,0,0,160,161,5,9,0,0,161,162,5,12,0,0,162,
163,7,3,0,0,163,23,1,0,0,0,164,165,5,15,0,0,165,25,1,0,0,0,166,167,5,16,
0,0,167,27,1,0,0,0,168,169,5,17,0,0,169,170,5,9,0,0,170,29,1,0,0,0,171,172,
5,18,0,0,172,173,5,9,0,0,173,174,5,12,0,0,174,175,5,9,0,0,175,176,5,12,0,
0,176,177,5,19,0,0,177,31,1,0,0,0,178,182,5,20,0,0,179,181,3,10,5,0,180,
179,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,185,1,0,
0,0,184,182,1,0,0,0,185,186,5,21,0,0,186,33,1,0,0,0,187,188,5,28,0,0,188,
192,3,48,24,0,189,191,3,10,5,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,
0,0,0,192,193,1,0,0,0,193,195,1,0,0,0,194,192,1,0,0,0,195,196,5,29,0,0,196,
35,1,0,0,0,197,198,5,22,0,0,198,199,5,36,0,0,199,200,5,2,0,0,200,201,5,9,
0,0,201,202,5,23,0,0,202,206,5,9,0,0,203,205,3,10,5,0,204,203,1,0,0,0,205,
208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,
0,0,209,210,5,24,0,0,210,211,5,36,0,0,211,37,1,0,0,0,212,213,5,25,0,0,213,
214,3,2,1,0,214,215,7,4,0,0,215,219,3,0,0,0,216,218,3,10,5,0,217,216,1,0,
0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,224,1,0,0,0,221,
219,1,0,0,0,222,225,3,40,20,0,223,225,5,27,0,0,224,222,1,0,0,0,224,223,1,
0,0,0,225,39,1,0,0,0,226,230,5,26,0,0,227,229,3,10,5,0,228,227,1,0,0,0,229,
232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,233,1,0,0,0,232,230,1,0,
0,0,233,234,5,27,0,0,234,41,1,0,0,0,235,236,5,25,0,0,236,240,3,48,24,0,237,
239,3,10,5,0,238,237,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,
0,0,241,245,1,0,0,0,242,240,1,0,0,0,243,246,3,40,20,0,244,246,5,27,0,0,245,
243,1,0,0,0,245,244,1,0,0,0,246,43,1,0,0,0,247,248,5,33,0,0,248,249,3,2,
1,0,249,250,5,12,0,0,250,251,3,0,0,0,251,252,5,23,0,0,252,253,3,2,1,0,253,
254,5,12,0,0,254,255,3,0,0,0,255,45,1,0,0,0,256,257,5,31,0,0,257,258,5,36,
0,0,258,260,5,40,0,0,259,261,5,36,0,0,260,259,1,0,0,0,260,261,1,0,0,0,261,
262,1,0,0,0,262,266,5,41,0,0,263,265,3,10,5,0,264,263,1,0,0,0,265,268,1,
0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,269,1,0,0,0,268,266,1,0,0,0,269,
270,5,32,0,0,270,47,1,0,0,0,271,272,5,35,0,0,272,273,5,38,0,0,273,274,3,
2,1,0,274,275,5,39,0,0,275,49,1,0,0,0,20,55,63,71,82,87,110,117,141,147,
151,182,192,206,219,224,230,240,245,260,266];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AMOSParser extends antlr4.Parser {

    static grammarFileName = "AMOS.g4";
    static literalNames = [ null, "'End'", "'='", "'<>'", "'>='", "'>'", 
                            "'<='", "'<'", "'Screen Open'", null, "'Lowres'", 
                            "'Hires'", "','", null, null, "'Curs Off'", 
                            "'Curs On'", "'Ink'", "'Text'", null, "'Do'", 
                            "'Loop'", "'For'", "'To'", "'Next'", "'If'", 
                            "'Else'", "'End If'", "'While'", "'Wend'", "'Play'", 
                            "'Procedure'", "'End Proc'", "'Bar'", "'Wait Key'", 
                            "'Key State'", null, null, "'('", "')'", "'['", 
                            "']'", "'{'", "'}'", "'$'", "'*'", "'/'", "'+'", 
                            "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "SCREENOPEN", "NUMBER", "LOWRES", "HIRES", 
                             "COMMA", "COMMENT", "WS", "CURSOFF", "CURSON", 
                             "INK", "TEXT", "STRING", "DO", "LOOP", "FOR", 
                             "TO", "NEXT", "IF", "ELSE", "ENDIF", "WHILE", 
                             "WEND", "PLAY", "PROC", "ENDPROC", "BAR", "WAITKEY", 
                             "KEYSTATE", "IDENTIFIER", "COMPARISON", "BRACKETOPEN_PROP", 
                             "BRACKETCLOSE_PROP", "BRACKETOPEN_ARRAY", "BRACKETCLOSE_ARRAY", 
                             "BRACKETOPEN_FUNCTION", "BRACKETCLOSE_FUNCTION", 
                             "HECADECIMAL", "MULTIPLY", "DIVIDE", "ADD", 
                             "SUBTRACT" ];
    static ruleNames = [ "expression2", "expression1", "term", "factor", 
                         "program", "statement", "play_sound", "wait_key_break", 
                         "variable_starter", "function_starter", "function_call_or_array_access", 
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
	        this.state = 50;
	        this.term();
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===47 || _la===48) {
	            this.state = 51;
	            _la = this._input.LA(1);
	            if(!(_la===47 || _la===48)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 52;
	            this.term();
	            this.state = 57;
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
	        this.state = 58;
	        this.term();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===47 || _la===48) {
	            this.state = 59;
	            _la = this._input.LA(1);
	            if(!(_la===47 || _la===48)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 60;
	            this.term();
	            this.state = 65;
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
	        this.state = 66;
	        this.factor();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45 || _la===46) {
	            this.state = 67;
	            _la = this._input.LA(1);
	            if(!(_la===45 || _la===46)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 68;
	            this.factor();
	            this.state = 73;
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
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.match(AMOSParser.NUMBER);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.match(AMOSParser.IDENTIFIER);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 77;
	            this.expression1();
	            this.state = 78;
	            this.match(AMOSParser.BRACKETCLOSE_PROP);
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 80;
	            this.match(AMOSParser.HECADECIMAL);
	            this.state = 81;
	            this.match(AMOSParser.NUMBER);
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
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 84;
	            this.statement();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
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
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.procedure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.screen_open();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 94;
	            this.curs_off();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 95;
	            this.curs_on();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 96;
	            this.ink();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 97;
	            this.text();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 98;
	            this.do_loop();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 99;
	            this.for_loop();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 100;
	            this.if_statement_key_state();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 101;
	            this.if_statement();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 102;
	            this.function_starter();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 103;
	            this.bar();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 104;
	            this.function_call_or_array_access();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 105;
	            this.variable_starter();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 106;
	            this.while_wend();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 107;
	            this.wait_key_break();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 108;
	            this.play_sound();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 109;
	            this.match(AMOSParser.T__0);
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



	play_sound() {
	    let localctx = new Play_soundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AMOSParser.RULE_play_sound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(AMOSParser.PLAY);
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 113;
	            this.match(AMOSParser.HECADECIMAL);
	            this.state = 114;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 115;
	            this.expression1();
	            break;

	        case 3:
	            this.state = 116;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        }
	        this.state = 119;
	        this.match(AMOSParser.COMMA);
	        this.state = 120;
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
	    this.enterRule(localctx, 14, AMOSParser.RULE_wait_key_break);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
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
	    this.enterRule(localctx, 16, AMOSParser.RULE_variable_starter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 125;
	        this.match(AMOSParser.T__1);
	        this.state = 126;
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
	    this.enterRule(localctx, 18, AMOSParser.RULE_function_starter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 129;
	        this.match(AMOSParser.BRACKETOPEN_ARRAY);
	        this.state = 130;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===36)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 131;
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
	    this.enterRule(localctx, 20, AMOSParser.RULE_function_call_or_array_access);
	    var _la = 0;
	    try {
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 134;
	            this.match(AMOSParser.BRACKETOPEN_ARRAY);
	            this.state = 135;
	            this.expression1();
	            this.state = 136;
	            this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 138;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 139;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9 || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 261) !== 0)) {
	                this.state = 140;
	                this.expression1();
	            }

	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 143;
	                this.match(AMOSParser.COMMA);
	                this.state = 144;
	                this.expression1();
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 150;
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



	screen_open() {
	    let localctx = new Screen_openContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AMOSParser.RULE_screen_open);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(AMOSParser.SCREENOPEN);
	        this.state = 154;
	        this.match(AMOSParser.NUMBER);
	        this.state = 155;
	        this.match(AMOSParser.COMMA);
	        this.state = 156;
	        this.match(AMOSParser.NUMBER);
	        this.state = 157;
	        this.match(AMOSParser.COMMA);
	        this.state = 158;
	        this.match(AMOSParser.NUMBER);
	        this.state = 159;
	        this.match(AMOSParser.COMMA);
	        this.state = 160;
	        this.match(AMOSParser.NUMBER);
	        this.state = 161;
	        this.match(AMOSParser.COMMA);
	        this.state = 162;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
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
	    this.enterRule(localctx, 24, AMOSParser.RULE_curs_off);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
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
	    this.enterRule(localctx, 26, AMOSParser.RULE_curs_on);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
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
	    this.enterRule(localctx, 28, AMOSParser.RULE_ink);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(AMOSParser.INK);
	        this.state = 169;
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
	    this.enterRule(localctx, 30, AMOSParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(AMOSParser.TEXT);
	        this.state = 172;
	        this.match(AMOSParser.NUMBER);
	        this.state = 173;
	        this.match(AMOSParser.COMMA);
	        this.state = 174;
	        this.match(AMOSParser.NUMBER);
	        this.state = 175;
	        this.match(AMOSParser.COMMA);
	        this.state = 176;
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
	    this.enterRule(localctx, 32, AMOSParser.RULE_do_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(AMOSParser.DO);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 179;
	            this.statement();
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 185;
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
	    this.enterRule(localctx, 34, AMOSParser.RULE_while_wend);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(AMOSParser.WHILE);
	        this.state = 188;
	        this.current_Key_State();
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 189;
	            this.statement();
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 195;
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
	    this.enterRule(localctx, 36, AMOSParser.RULE_for_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(AMOSParser.FOR);
	        this.state = 198;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 199;
	        this.match(AMOSParser.T__1);
	        this.state = 200;
	        this.match(AMOSParser.NUMBER);
	        this.state = 201;
	        this.match(AMOSParser.TO);
	        this.state = 202;
	        this.match(AMOSParser.NUMBER);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 203;
	            this.statement();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 209;
	        this.match(AMOSParser.NEXT);
	        this.state = 210;
	        this.match(AMOSParser.IDENTIFIER);
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
	    this.enterRule(localctx, 38, AMOSParser.RULE_if_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(AMOSParser.IF);
	        this.state = 213;
	        this.expression1();
	        this.state = 214;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 252) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 215;
	        this.expression2();
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 216;
	            this.statement();
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.state = 222;
	            this.else_statement();
	            break;
	        case 27:
	            this.state = 223;
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
	    this.enterRule(localctx, 40, AMOSParser.RULE_else_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(AMOSParser.ELSE);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 227;
	            this.statement();
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 233;
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
	    this.enterRule(localctx, 42, AMOSParser.RULE_if_statement_key_state);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(AMOSParser.IF);
	        this.state = 236;
	        this.current_Key_State();
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 237;
	            this.statement();
	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 245;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.state = 243;
	            this.else_statement();
	            break;
	        case 27:
	            this.state = 244;
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
	    this.enterRule(localctx, 44, AMOSParser.RULE_bar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(AMOSParser.BAR);
	        this.state = 248;
	        this.expression1();
	        this.state = 249;
	        this.match(AMOSParser.COMMA);
	        this.state = 250;
	        this.expression2();
	        this.state = 251;
	        this.match(AMOSParser.TO);
	        this.state = 252;
	        this.expression1();
	        this.state = 253;
	        this.match(AMOSParser.COMMA);
	        this.state = 254;
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
	    this.enterRule(localctx, 46, AMOSParser.RULE_procedure);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(AMOSParser.PROC);
	        this.state = 257;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 258;
	        this.match(AMOSParser.BRACKETOPEN_ARRAY);
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 259;
	            this.match(AMOSParser.IDENTIFIER);
	        }

	        this.state = 262;
	        this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3528950018) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11) !== 0)) {
	            this.state = 263;
	            this.statement();
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 269;
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
	    this.enterRule(localctx, 48, AMOSParser.RULE_current_Key_State);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(AMOSParser.KEYSTATE);
	        this.state = 272;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 273;
	        this.expression1();
	        this.state = 274;
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
AMOSParser.SCREENOPEN = 8;
AMOSParser.NUMBER = 9;
AMOSParser.LOWRES = 10;
AMOSParser.HIRES = 11;
AMOSParser.COMMA = 12;
AMOSParser.COMMENT = 13;
AMOSParser.WS = 14;
AMOSParser.CURSOFF = 15;
AMOSParser.CURSON = 16;
AMOSParser.INK = 17;
AMOSParser.TEXT = 18;
AMOSParser.STRING = 19;
AMOSParser.DO = 20;
AMOSParser.LOOP = 21;
AMOSParser.FOR = 22;
AMOSParser.TO = 23;
AMOSParser.NEXT = 24;
AMOSParser.IF = 25;
AMOSParser.ELSE = 26;
AMOSParser.ENDIF = 27;
AMOSParser.WHILE = 28;
AMOSParser.WEND = 29;
AMOSParser.PLAY = 30;
AMOSParser.PROC = 31;
AMOSParser.ENDPROC = 32;
AMOSParser.BAR = 33;
AMOSParser.WAITKEY = 34;
AMOSParser.KEYSTATE = 35;
AMOSParser.IDENTIFIER = 36;
AMOSParser.COMPARISON = 37;
AMOSParser.BRACKETOPEN_PROP = 38;
AMOSParser.BRACKETCLOSE_PROP = 39;
AMOSParser.BRACKETOPEN_ARRAY = 40;
AMOSParser.BRACKETCLOSE_ARRAY = 41;
AMOSParser.BRACKETOPEN_FUNCTION = 42;
AMOSParser.BRACKETCLOSE_FUNCTION = 43;
AMOSParser.HECADECIMAL = 44;
AMOSParser.MULTIPLY = 45;
AMOSParser.DIVIDE = 46;
AMOSParser.ADD = 47;
AMOSParser.SUBTRACT = 48;

AMOSParser.RULE_expression2 = 0;
AMOSParser.RULE_expression1 = 1;
AMOSParser.RULE_term = 2;
AMOSParser.RULE_factor = 3;
AMOSParser.RULE_program = 4;
AMOSParser.RULE_statement = 5;
AMOSParser.RULE_play_sound = 6;
AMOSParser.RULE_wait_key_break = 7;
AMOSParser.RULE_variable_starter = 8;
AMOSParser.RULE_function_starter = 9;
AMOSParser.RULE_function_call_or_array_access = 10;
AMOSParser.RULE_screen_open = 11;
AMOSParser.RULE_curs_off = 12;
AMOSParser.RULE_curs_on = 13;
AMOSParser.RULE_ink = 14;
AMOSParser.RULE_text = 15;
AMOSParser.RULE_do_loop = 16;
AMOSParser.RULE_while_wend = 17;
AMOSParser.RULE_for_loop = 18;
AMOSParser.RULE_if_statement = 19;
AMOSParser.RULE_else_statement = 20;
AMOSParser.RULE_if_statement_key_state = 21;
AMOSParser.RULE_bar = 22;
AMOSParser.RULE_procedure = 23;
AMOSParser.RULE_current_Key_State = 24;

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
AMOSParser.Play_soundContext = Play_soundContext; 
AMOSParser.Wait_key_breakContext = Wait_key_breakContext; 
AMOSParser.Variable_starterContext = Variable_starterContext; 
AMOSParser.Function_starterContext = Function_starterContext; 
AMOSParser.Function_call_or_array_accessContext = Function_call_or_array_accessContext; 
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
