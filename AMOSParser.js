// Generated from AMOS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AMOSListener from './AMOSListener.js';
const serializedATN = [4,1,49,225,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,0,
5,0,42,8,0,10,0,12,0,45,9,0,1,1,1,1,1,1,5,1,50,8,1,10,1,12,1,53,9,1,1,2,
1,2,1,2,5,2,58,8,2,10,2,12,2,61,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,69,8,3,1,
4,5,4,72,8,4,10,4,12,4,75,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,5,3,5,92,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,3,7,106,8,7,1,7,1,7,5,7,110,8,7,10,7,12,7,113,9,7,1,7,3,7,116,8,7,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,5,13,145,8,13,10,13,12,13,
148,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,159,8,14,10,14,
12,14,162,9,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,5,15,172,8,15,10,
15,12,15,175,9,15,1,15,1,15,5,15,179,8,15,10,15,12,15,182,9,15,3,15,184,
8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,194,8,16,10,16,12,16,197,
9,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,
18,1,18,3,18,214,8,18,1,18,1,18,5,18,218,8,18,10,18,12,18,221,9,18,1,18,
1,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,4,
1,0,48,49,1,0,46,47,1,0,11,12,1,0,1,6,234,0,38,1,0,0,0,2,46,1,0,0,0,4,54,
1,0,0,0,6,68,1,0,0,0,8,73,1,0,0,0,10,91,1,0,0,0,12,93,1,0,0,0,14,115,1,0,
0,0,16,117,1,0,0,0,18,128,1,0,0,0,20,130,1,0,0,0,22,132,1,0,0,0,24,135,1,
0,0,0,26,142,1,0,0,0,28,151,1,0,0,0,30,166,1,0,0,0,32,187,1,0,0,0,34,200,
1,0,0,0,36,209,1,0,0,0,38,43,3,4,2,0,39,40,7,0,0,0,40,42,3,4,2,0,41,39,1,
0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,1,1,0,0,0,45,43,1,0,0,
0,46,51,3,4,2,0,47,48,7,0,0,0,48,50,3,4,2,0,49,47,1,0,0,0,50,53,1,0,0,0,
51,49,1,0,0,0,51,52,1,0,0,0,52,3,1,0,0,0,53,51,1,0,0,0,54,59,3,6,3,0,55,
56,7,1,0,0,56,58,3,6,3,0,57,55,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,
1,0,0,0,60,5,1,0,0,0,61,59,1,0,0,0,62,69,5,10,0,0,63,69,5,37,0,0,64,65,5,
39,0,0,65,66,3,2,1,0,66,67,5,40,0,0,67,69,1,0,0,0,68,62,1,0,0,0,68,63,1,
0,0,0,68,64,1,0,0,0,69,7,1,0,0,0,70,72,3,10,5,0,71,70,1,0,0,0,72,75,1,0,
0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,75,73,1,0,0,0,76,77,5,0,0,
1,77,9,1,0,0,0,78,92,3,36,18,0,79,92,3,16,8,0,80,92,3,18,9,0,81,92,3,20,
10,0,82,92,3,22,11,0,83,92,3,24,12,0,84,92,3,26,13,0,85,92,3,28,14,0,86,
92,3,32,16,0,87,92,3,30,15,0,88,92,3,34,17,0,89,92,3,14,7,0,90,92,3,12,6,
0,91,78,1,0,0,0,91,79,1,0,0,0,91,80,1,0,0,0,91,81,1,0,0,0,91,82,1,0,0,0,
91,83,1,0,0,0,91,84,1,0,0,0,91,85,1,0,0,0,91,86,1,0,0,0,91,87,1,0,0,0,91,
88,1,0,0,0,91,89,1,0,0,0,91,90,1,0,0,0,92,11,1,0,0,0,93,94,5,37,0,0,94,95,
5,1,0,0,95,96,3,2,1,0,96,13,1,0,0,0,97,98,5,37,0,0,98,99,5,41,0,0,99,100,
3,2,1,0,100,101,5,42,0,0,101,116,1,0,0,0,102,103,5,37,0,0,103,105,5,39,0,
0,104,106,3,2,1,0,105,104,1,0,0,0,105,106,1,0,0,0,106,111,1,0,0,0,107,108,
5,13,0,0,108,110,3,2,1,0,109,107,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,
111,112,1,0,0,0,112,114,1,0,0,0,113,111,1,0,0,0,114,116,5,40,0,0,115,97,
1,0,0,0,115,102,1,0,0,0,116,15,1,0,0,0,117,118,5,9,0,0,118,119,5,10,0,0,
119,120,5,13,0,0,120,121,5,10,0,0,121,122,5,13,0,0,122,123,5,10,0,0,123,
124,5,13,0,0,124,125,5,10,0,0,125,126,5,13,0,0,126,127,7,2,0,0,127,17,1,
0,0,0,128,129,5,16,0,0,129,19,1,0,0,0,130,131,5,17,0,0,131,21,1,0,0,0,132,
133,5,18,0,0,133,134,5,10,0,0,134,23,1,0,0,0,135,136,5,19,0,0,136,137,5,
10,0,0,137,138,5,13,0,0,138,139,5,10,0,0,139,140,5,13,0,0,140,141,5,20,0,
0,141,25,1,0,0,0,142,146,5,21,0,0,143,145,3,10,5,0,144,143,1,0,0,0,145,148,
1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,
149,150,5,22,0,0,150,27,1,0,0,0,151,152,5,23,0,0,152,153,5,37,0,0,153,154,
5,1,0,0,154,155,5,10,0,0,155,156,5,24,0,0,156,160,5,10,0,0,157,159,3,10,
5,0,158,157,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,0,0,161,
163,1,0,0,0,162,160,1,0,0,0,163,164,5,25,0,0,164,165,5,37,0,0,165,29,1,0,
0,0,166,167,5,26,0,0,167,168,3,2,1,0,168,169,7,3,0,0,169,173,3,0,0,0,170,
172,3,10,5,0,171,170,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,
0,0,174,183,1,0,0,0,175,173,1,0,0,0,176,180,5,27,0,0,177,179,3,10,5,0,178,
177,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,184,1,0,
0,0,182,180,1,0,0,0,183,176,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,
186,5,28,0,0,186,31,1,0,0,0,187,188,5,26,0,0,188,189,5,7,0,0,189,190,5,8,
0,0,190,191,5,38,0,0,191,195,3,0,0,0,192,194,3,10,5,0,193,192,1,0,0,0,194,
197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,198,1,0,0,0,197,195,1,0,
0,0,198,199,5,28,0,0,199,33,1,0,0,0,200,201,5,34,0,0,201,202,3,2,1,0,202,
203,5,13,0,0,203,204,3,0,0,0,204,205,5,24,0,0,205,206,3,2,1,0,206,207,5,
13,0,0,207,208,3,0,0,0,208,35,1,0,0,0,209,210,5,32,0,0,210,211,5,37,0,0,
211,213,5,41,0,0,212,214,5,37,0,0,213,212,1,0,0,0,213,214,1,0,0,0,214,215,
1,0,0,0,215,219,5,42,0,0,216,218,3,10,5,0,217,216,1,0,0,0,218,221,1,0,0,
0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,219,1,0,0,0,222,223,
5,33,0,0,223,37,1,0,0,0,17,43,51,59,68,73,91,105,111,115,146,160,173,180,
183,195,213,219];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AMOSParser extends antlr4.Parser {

    static grammarFileName = "AMOS.g4";
    static literalNames = [ null, "'='", "'<>'", "'>='", "'>'", "'<='", 
                            "'<'", "'Key'", "'State'", "'Screen Open'", 
                            null, "'Lowres'", "'Hires'", "','", null, null, 
                            "'Curs Off'", "'Curs On'", "'Ink'", "'Text'", 
                            null, "'Do'", "'Loop'", "'For'", "'To'", "'Next'", 
                            "'If'", "'Else'", "'End If'", "'While'", "'Wend'", 
                            "'Play'", "'Procedure'", "'End Proc'", "'Bar'", 
                            "'Wait Key'", "'Key State'", null, null, "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'$'", "'*'", 
                            "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "SCREENOPEN", "NUMBER", "LOWRES", "HIRES", 
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
                         "program", "statement", "variable_starter", "function_call_or_array_access", 
                         "screen_open", "curs_off", "curs_on", "ink", "text", 
                         "do_loop", "for_loop", "if_statement", "if_statement_key_state", 
                         "bar", "procedure" ];

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
	        this.state = 38;
	        this.term();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48 || _la===49) {
	            this.state = 39;
	            _la = this._input.LA(1);
	            if(!(_la===48 || _la===49)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 40;
	            this.term();
	            this.state = 45;
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
	        this.state = 46;
	        this.term();
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48 || _la===49) {
	            this.state = 47;
	            _la = this._input.LA(1);
	            if(!(_la===48 || _la===49)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 48;
	            this.term();
	            this.state = 53;
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
	        this.state = 54;
	        this.factor();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===46 || _la===47) {
	            this.state = 55;
	            _la = this._input.LA(1);
	            if(!(_la===46 || _la===47)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 56;
	            this.factor();
	            this.state = 61;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.match(AMOSParser.NUMBER);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.match(AMOSParser.IDENTIFIER);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 64;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 65;
	            this.expression1();
	            this.state = 66;
	            this.match(AMOSParser.BRACKETCLOSE_PROP);
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 310531969) !== 0)) {
	            this.state = 70;
	            this.statement();
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
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
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.procedure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.screen_open();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 80;
	            this.curs_off();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 81;
	            this.curs_on();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 82;
	            this.ink();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 83;
	            this.text();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 84;
	            this.do_loop();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 85;
	            this.for_loop();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 86;
	            this.if_statement_key_state();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 87;
	            this.if_statement();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 88;
	            this.bar();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 89;
	            this.function_call_or_array_access();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 90;
	            this.variable_starter();
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



	variable_starter() {
	    let localctx = new Variable_starterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AMOSParser.RULE_variable_starter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 94;
	        this.match(AMOSParser.T__0);
	        this.state = 95;
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



	function_call_or_array_access() {
	    let localctx = new Function_call_or_array_accessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AMOSParser.RULE_function_call_or_array_access);
	    var _la = 0;
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 98;
	            this.match(AMOSParser.BRACKETOPEN_ARRAY);
	            this.state = 99;
	            this.expression1();
	            this.state = 100;
	            this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 103;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 10)) & ~0x1f) === 0 && ((1 << (_la - 10)) & 671088641) !== 0)) {
	                this.state = 104;
	                this.expression1();
	            }

	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===13) {
	                this.state = 107;
	                this.match(AMOSParser.COMMA);
	                this.state = 108;
	                this.expression1();
	                this.state = 113;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 114;
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
	    this.enterRule(localctx, 16, AMOSParser.RULE_screen_open);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(AMOSParser.SCREENOPEN);
	        this.state = 118;
	        this.match(AMOSParser.NUMBER);
	        this.state = 119;
	        this.match(AMOSParser.COMMA);
	        this.state = 120;
	        this.match(AMOSParser.NUMBER);
	        this.state = 121;
	        this.match(AMOSParser.COMMA);
	        this.state = 122;
	        this.match(AMOSParser.NUMBER);
	        this.state = 123;
	        this.match(AMOSParser.COMMA);
	        this.state = 124;
	        this.match(AMOSParser.NUMBER);
	        this.state = 125;
	        this.match(AMOSParser.COMMA);
	        this.state = 126;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
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
	    this.enterRule(localctx, 18, AMOSParser.RULE_curs_off);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
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
	    this.enterRule(localctx, 20, AMOSParser.RULE_curs_on);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
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
	    this.enterRule(localctx, 22, AMOSParser.RULE_ink);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(AMOSParser.INK);
	        this.state = 133;
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
	    this.enterRule(localctx, 24, AMOSParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(AMOSParser.TEXT);
	        this.state = 136;
	        this.match(AMOSParser.NUMBER);
	        this.state = 137;
	        this.match(AMOSParser.COMMA);
	        this.state = 138;
	        this.match(AMOSParser.NUMBER);
	        this.state = 139;
	        this.match(AMOSParser.COMMA);
	        this.state = 140;
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
	    this.enterRule(localctx, 26, AMOSParser.RULE_do_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(AMOSParser.DO);
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 310531969) !== 0)) {
	            this.state = 143;
	            this.statement();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 149;
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



	for_loop() {
	    let localctx = new For_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, AMOSParser.RULE_for_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(AMOSParser.FOR);
	        this.state = 152;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 153;
	        this.match(AMOSParser.T__0);
	        this.state = 154;
	        this.match(AMOSParser.NUMBER);
	        this.state = 155;
	        this.match(AMOSParser.TO);
	        this.state = 156;
	        this.match(AMOSParser.NUMBER);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 310531969) !== 0)) {
	            this.state = 157;
	            this.statement();
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 163;
	        this.match(AMOSParser.NEXT);
	        this.state = 164;
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
	    this.enterRule(localctx, 30, AMOSParser.RULE_if_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(AMOSParser.IF);
	        this.state = 167;
	        this.expression1();
	        this.state = 168;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 169;
	        this.expression2();
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 310531969) !== 0)) {
	            this.state = 170;
	            this.statement();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 176;
	            this.match(AMOSParser.ELSE);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 310531969) !== 0)) {
	                this.state = 177;
	                this.statement();
	                this.state = 182;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 185;
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
	    this.enterRule(localctx, 32, AMOSParser.RULE_if_statement_key_state);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(AMOSParser.IF);
	        this.state = 188;
	        this.match(AMOSParser.T__6);
	        this.state = 189;
	        this.match(AMOSParser.T__7);
	        this.state = 190;
	        this.match(AMOSParser.COMPARISON);
	        this.state = 191;
	        this.expression2();
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 310531969) !== 0)) {
	            this.state = 192;
	            this.statement();
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 198;
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



	bar() {
	    let localctx = new BarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, AMOSParser.RULE_bar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(AMOSParser.BAR);
	        this.state = 201;
	        this.expression1();
	        this.state = 202;
	        this.match(AMOSParser.COMMA);
	        this.state = 203;
	        this.expression2();
	        this.state = 204;
	        this.match(AMOSParser.TO);
	        this.state = 205;
	        this.expression1();
	        this.state = 206;
	        this.match(AMOSParser.COMMA);
	        this.state = 207;
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
	    this.enterRule(localctx, 36, AMOSParser.RULE_procedure);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(AMOSParser.PROC);
	        this.state = 210;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 211;
	        this.match(AMOSParser.BRACKETOPEN_ARRAY);
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 212;
	            this.match(AMOSParser.IDENTIFIER);
	        }

	        this.state = 215;
	        this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 310531969) !== 0)) {
	            this.state = 216;
	            this.statement();
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 222;
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
AMOSParser.SCREENOPEN = 9;
AMOSParser.NUMBER = 10;
AMOSParser.LOWRES = 11;
AMOSParser.HIRES = 12;
AMOSParser.COMMA = 13;
AMOSParser.COMMENT = 14;
AMOSParser.WS = 15;
AMOSParser.CURSOFF = 16;
AMOSParser.CURSON = 17;
AMOSParser.INK = 18;
AMOSParser.TEXT = 19;
AMOSParser.STRING = 20;
AMOSParser.DO = 21;
AMOSParser.LOOP = 22;
AMOSParser.FOR = 23;
AMOSParser.TO = 24;
AMOSParser.NEXT = 25;
AMOSParser.IF = 26;
AMOSParser.ELSE = 27;
AMOSParser.ENDIF = 28;
AMOSParser.WHILE = 29;
AMOSParser.WEND = 30;
AMOSParser.PLAY = 31;
AMOSParser.PROC = 32;
AMOSParser.ENDPROC = 33;
AMOSParser.BAR = 34;
AMOSParser.WAITKEY = 35;
AMOSParser.KEYSTATE = 36;
AMOSParser.IDENTIFIER = 37;
AMOSParser.COMPARISON = 38;
AMOSParser.BRACKETOPEN_PROP = 39;
AMOSParser.BRACKETCLOSE_PROP = 40;
AMOSParser.BRACKETOPEN_ARRAY = 41;
AMOSParser.BRACKETCLOSE_ARRAY = 42;
AMOSParser.BRACKETOPEN_FUNCTION = 43;
AMOSParser.BRACKETCLOSE_FUNCTION = 44;
AMOSParser.HECADECIMAL = 45;
AMOSParser.MULTIPLY = 46;
AMOSParser.DIVIDE = 47;
AMOSParser.ADD = 48;
AMOSParser.SUBTRACT = 49;

AMOSParser.RULE_expression2 = 0;
AMOSParser.RULE_expression1 = 1;
AMOSParser.RULE_term = 2;
AMOSParser.RULE_factor = 3;
AMOSParser.RULE_program = 4;
AMOSParser.RULE_statement = 5;
AMOSParser.RULE_variable_starter = 6;
AMOSParser.RULE_function_call_or_array_access = 7;
AMOSParser.RULE_screen_open = 8;
AMOSParser.RULE_curs_off = 9;
AMOSParser.RULE_curs_on = 10;
AMOSParser.RULE_ink = 11;
AMOSParser.RULE_text = 12;
AMOSParser.RULE_do_loop = 13;
AMOSParser.RULE_for_loop = 14;
AMOSParser.RULE_if_statement = 15;
AMOSParser.RULE_if_statement_key_state = 16;
AMOSParser.RULE_bar = 17;
AMOSParser.RULE_procedure = 18;

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

	bar() {
	    return this.getTypedRuleContext(BarContext,0);
	};

	function_call_or_array_access() {
	    return this.getTypedRuleContext(Function_call_or_array_accessContext,0);
	};

	variable_starter() {
	    return this.getTypedRuleContext(Variable_starterContext,0);
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

	ELSE() {
	    return this.getToken(AMOSParser.ELSE, 0);
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

	COMPARISON() {
	    return this.getToken(AMOSParser.COMPARISON, 0);
	};

	expression2() {
	    return this.getTypedRuleContext(Expression2Context,0);
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




AMOSParser.Expression2Context = Expression2Context; 
AMOSParser.Expression1Context = Expression1Context; 
AMOSParser.TermContext = TermContext; 
AMOSParser.FactorContext = FactorContext; 
AMOSParser.ProgramContext = ProgramContext; 
AMOSParser.StatementContext = StatementContext; 
AMOSParser.Variable_starterContext = Variable_starterContext; 
AMOSParser.Function_call_or_array_accessContext = Function_call_or_array_accessContext; 
AMOSParser.Screen_openContext = Screen_openContext; 
AMOSParser.Curs_offContext = Curs_offContext; 
AMOSParser.Curs_onContext = Curs_onContext; 
AMOSParser.InkContext = InkContext; 
AMOSParser.TextContext = TextContext; 
AMOSParser.Do_loopContext = Do_loopContext; 
AMOSParser.For_loopContext = For_loopContext; 
AMOSParser.If_statementContext = If_statementContext; 
AMOSParser.If_statement_key_stateContext = If_statement_key_stateContext; 
AMOSParser.BarContext = BarContext; 
AMOSParser.ProcedureContext = ProcedureContext; 
