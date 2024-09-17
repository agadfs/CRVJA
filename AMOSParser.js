// Generated from AMOS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AMOSListener from './AMOSListener.js';
const serializedATN = [4,1,50,201,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,5,0,40,8,0,
10,0,12,0,43,9,0,1,1,1,1,1,1,5,1,48,8,1,10,1,12,1,51,9,1,1,2,1,2,1,2,5,2,
56,8,2,10,2,12,2,59,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,67,8,3,1,4,5,4,70,8,
4,10,4,12,4,73,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,
5,88,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,
1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,5,11,117,8,11,10,11,
12,11,120,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,131,8,12,
10,12,12,12,134,9,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,5,13,144,8,
13,10,13,12,13,147,9,13,1,13,1,13,5,13,151,8,13,10,13,12,13,154,9,13,3,13,
156,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,166,8,14,10,14,12,
14,169,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,
1,16,1,16,1,16,1,16,3,16,187,8,16,1,16,5,16,190,8,16,10,16,12,16,193,9,16,
1,16,1,16,1,17,1,17,1,17,1,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,0,4,1,0,49,50,1,0,47,48,1,0,11,12,1,0,1,6,206,0,36,1,0,
0,0,2,44,1,0,0,0,4,52,1,0,0,0,6,66,1,0,0,0,8,71,1,0,0,0,10,87,1,0,0,0,12,
89,1,0,0,0,14,100,1,0,0,0,16,102,1,0,0,0,18,104,1,0,0,0,20,107,1,0,0,0,22,
114,1,0,0,0,24,123,1,0,0,0,26,138,1,0,0,0,28,159,1,0,0,0,30,172,1,0,0,0,
32,181,1,0,0,0,34,196,1,0,0,0,36,41,3,4,2,0,37,38,7,0,0,0,38,40,3,4,2,0,
39,37,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,1,1,0,0,0,43,
41,1,0,0,0,44,49,3,4,2,0,45,46,7,0,0,0,46,48,3,4,2,0,47,45,1,0,0,0,48,51,
1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,3,1,0,0,0,51,49,1,0,0,0,52,57,3,6,
3,0,53,54,7,1,0,0,54,56,3,6,3,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,
0,57,58,1,0,0,0,58,5,1,0,0,0,59,57,1,0,0,0,60,67,5,10,0,0,61,67,5,38,0,0,
62,63,5,40,0,0,63,64,3,2,1,0,64,65,5,41,0,0,65,67,1,0,0,0,66,60,1,0,0,0,
66,61,1,0,0,0,66,62,1,0,0,0,67,7,1,0,0,0,68,70,3,10,5,0,69,68,1,0,0,0,70,
73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,
5,0,0,1,75,9,1,0,0,0,76,88,3,12,6,0,77,88,3,32,16,0,78,88,3,14,7,0,79,88,
3,16,8,0,80,88,3,18,9,0,81,88,3,20,10,0,82,88,3,22,11,0,83,88,3,24,12,0,
84,88,3,28,14,0,85,88,3,26,13,0,86,88,3,30,15,0,87,76,1,0,0,0,87,77,1,0,
0,0,87,78,1,0,0,0,87,79,1,0,0,0,87,80,1,0,0,0,87,81,1,0,0,0,87,82,1,0,0,
0,87,83,1,0,0,0,87,84,1,0,0,0,87,85,1,0,0,0,87,86,1,0,0,0,88,11,1,0,0,0,
89,90,5,9,0,0,90,91,5,10,0,0,91,92,5,13,0,0,92,93,5,10,0,0,93,94,5,13,0,
0,94,95,5,10,0,0,95,96,5,13,0,0,96,97,5,10,0,0,97,98,5,13,0,0,98,99,7,2,
0,0,99,13,1,0,0,0,100,101,5,16,0,0,101,15,1,0,0,0,102,103,5,17,0,0,103,17,
1,0,0,0,104,105,5,18,0,0,105,106,5,10,0,0,106,19,1,0,0,0,107,108,5,19,0,
0,108,109,5,10,0,0,109,110,5,13,0,0,110,111,5,10,0,0,111,112,5,13,0,0,112,
113,5,20,0,0,113,21,1,0,0,0,114,118,5,21,0,0,115,117,3,10,5,0,116,115,1,
0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,
118,1,0,0,0,121,122,5,22,0,0,122,23,1,0,0,0,123,124,5,23,0,0,124,125,5,38,
0,0,125,126,5,1,0,0,126,127,5,10,0,0,127,128,5,24,0,0,128,132,5,10,0,0,129,
131,3,10,5,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,
0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,136,5,25,0,0,136,137,5,38,0,0,137,
25,1,0,0,0,138,139,5,26,0,0,139,140,3,2,1,0,140,141,7,3,0,0,141,145,3,0,
0,0,142,144,3,10,5,0,143,142,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,
146,1,0,0,0,146,155,1,0,0,0,147,145,1,0,0,0,148,152,5,27,0,0,149,151,3,10,
5,0,150,149,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,
156,1,0,0,0,154,152,1,0,0,0,155,148,1,0,0,0,155,156,1,0,0,0,156,157,1,0,
0,0,157,158,5,28,0,0,158,27,1,0,0,0,159,160,5,26,0,0,160,161,5,7,0,0,161,
162,5,8,0,0,162,163,5,39,0,0,163,167,3,0,0,0,164,166,3,10,5,0,165,164,1,
0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,170,1,0,0,0,169,
167,1,0,0,0,170,171,5,28,0,0,171,29,1,0,0,0,172,173,5,34,0,0,173,174,3,2,
1,0,174,175,5,13,0,0,175,176,3,0,0,0,176,177,5,24,0,0,177,178,3,2,1,0,178,
179,5,13,0,0,179,180,3,0,0,0,180,31,1,0,0,0,181,182,5,32,0,0,182,186,5,38,
0,0,183,184,5,42,0,0,184,185,5,38,0,0,185,187,5,43,0,0,186,183,1,0,0,0,186,
187,1,0,0,0,187,191,1,0,0,0,188,190,3,10,5,0,189,188,1,0,0,0,190,193,1,0,
0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,191,1,0,0,0,194,
195,5,33,0,0,195,33,1,0,0,0,196,197,5,38,0,0,197,198,5,1,0,0,198,199,5,38,
0,0,199,35,1,0,0,0,14,41,49,57,66,71,87,118,132,145,152,155,167,186,191];


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
                            "'Wait Key'", "'Key State'", "'P_DRAWKEYS'", 
                            null, null, "'('", "')'", "'['", "']'", "'{'", 
                            "'}'", "'$'", "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "SCREENOPEN", "NUMBER", "LOWRES", "HIRES", 
                             "COMMA", "COMMENT", "WS", "CURSOFF", "CURSON", 
                             "INK", "TEXT", "STRING", "DO", "LOOP", "FOR", 
                             "TO", "NEXT", "IF", "ELSE", "ENDIF", "WHILE", 
                             "WEND", "PLAY", "PROC", "ENDPROC", "BAR", "WAITKEY", 
                             "KEYSTATE", "P_DRAWKEYS", "IDENTIFIER", "COMPARISON", 
                             "BRACKETOPEN_PROP", "BRACKETCLOSE_PROP", "BRACKETOPEN_ARRAY", 
                             "BRACKETCLOSE_ARRAY", "BRACKETOPEN_FUNCTION", 
                             "BRACKETCLOSE_FUNCTION", "HECADECIMAL", "MULTIPLY", 
                             "DIVIDE", "ADD", "SUBTRACT" ];
    static ruleNames = [ "expression2", "expression1", "term", "factor", 
                         "program", "statement", "screen_open", "curs_off", 
                         "curs_on", "ink", "text", "do_loop", "for_loop", 
                         "if_statement", "if_statement_key_state", "bar", 
                         "procedure", "variable_starter" ];

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
	        this.state = 36;
	        this.term();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49 || _la===50) {
	            this.state = 37;
	            _la = this._input.LA(1);
	            if(!(_la===49 || _la===50)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 38;
	            this.term();
	            this.state = 43;
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
	        this.state = 44;
	        this.term();
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49 || _la===50) {
	            this.state = 45;
	            _la = this._input.LA(1);
	            if(!(_la===49 || _la===50)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 46;
	            this.term();
	            this.state = 51;
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
	        this.state = 52;
	        this.factor();
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===47 || _la===48) {
	            this.state = 53;
	            _la = this._input.LA(1);
	            if(!(_la===47 || _la===48)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 54;
	            this.factor();
	            this.state = 59;
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
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(AMOSParser.NUMBER);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.match(AMOSParser.IDENTIFIER);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 63;
	            this.expression1();
	            this.state = 64;
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
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 42096513) !== 0)) {
	            this.state = 68;
	            this.statement();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
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
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.screen_open();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.procedure();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.curs_off();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 79;
	            this.curs_on();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 80;
	            this.ink();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 81;
	            this.text();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 82;
	            this.do_loop();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 83;
	            this.for_loop();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 84;
	            this.if_statement_key_state();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 85;
	            this.if_statement();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 86;
	            this.bar();
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
	    this.enterRule(localctx, 12, AMOSParser.RULE_screen_open);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(AMOSParser.SCREENOPEN);
	        this.state = 90;
	        this.match(AMOSParser.NUMBER);
	        this.state = 91;
	        this.match(AMOSParser.COMMA);
	        this.state = 92;
	        this.match(AMOSParser.NUMBER);
	        this.state = 93;
	        this.match(AMOSParser.COMMA);
	        this.state = 94;
	        this.match(AMOSParser.NUMBER);
	        this.state = 95;
	        this.match(AMOSParser.COMMA);
	        this.state = 96;
	        this.match(AMOSParser.NUMBER);
	        this.state = 97;
	        this.match(AMOSParser.COMMA);
	        this.state = 98;
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
	    this.enterRule(localctx, 14, AMOSParser.RULE_curs_off);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
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
	    this.enterRule(localctx, 16, AMOSParser.RULE_curs_on);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
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
	    this.enterRule(localctx, 18, AMOSParser.RULE_ink);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(AMOSParser.INK);
	        this.state = 105;
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
	    this.enterRule(localctx, 20, AMOSParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(AMOSParser.TEXT);
	        this.state = 108;
	        this.match(AMOSParser.NUMBER);
	        this.state = 109;
	        this.match(AMOSParser.COMMA);
	        this.state = 110;
	        this.match(AMOSParser.NUMBER);
	        this.state = 111;
	        this.match(AMOSParser.COMMA);
	        this.state = 112;
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
	    this.enterRule(localctx, 22, AMOSParser.RULE_do_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(AMOSParser.DO);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 42096513) !== 0)) {
	            this.state = 115;
	            this.statement();
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
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
	    this.enterRule(localctx, 24, AMOSParser.RULE_for_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(AMOSParser.FOR);
	        this.state = 124;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 125;
	        this.match(AMOSParser.T__0);
	        this.state = 126;
	        this.match(AMOSParser.NUMBER);
	        this.state = 127;
	        this.match(AMOSParser.TO);
	        this.state = 128;
	        this.match(AMOSParser.NUMBER);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 42096513) !== 0)) {
	            this.state = 129;
	            this.statement();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
	        this.match(AMOSParser.NEXT);
	        this.state = 136;
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
	    this.enterRule(localctx, 26, AMOSParser.RULE_if_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(AMOSParser.IF);
	        this.state = 139;
	        this.expression1();
	        this.state = 140;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 141;
	        this.expression2();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 42096513) !== 0)) {
	            this.state = 142;
	            this.statement();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 148;
	            this.match(AMOSParser.ELSE);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 42096513) !== 0)) {
	                this.state = 149;
	                this.statement();
	                this.state = 154;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 157;
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
	    this.enterRule(localctx, 28, AMOSParser.RULE_if_statement_key_state);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(AMOSParser.IF);
	        this.state = 160;
	        this.match(AMOSParser.T__6);
	        this.state = 161;
	        this.match(AMOSParser.T__7);
	        this.state = 162;
	        this.match(AMOSParser.COMPARISON);
	        this.state = 163;
	        this.expression2();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 42096513) !== 0)) {
	            this.state = 164;
	            this.statement();
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 170;
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
	    this.enterRule(localctx, 30, AMOSParser.RULE_bar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(AMOSParser.BAR);
	        this.state = 173;
	        this.expression1();
	        this.state = 174;
	        this.match(AMOSParser.COMMA);
	        this.state = 175;
	        this.expression2();
	        this.state = 176;
	        this.match(AMOSParser.TO);
	        this.state = 177;
	        this.expression1();
	        this.state = 178;
	        this.match(AMOSParser.COMMA);
	        this.state = 179;
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
	    this.enterRule(localctx, 32, AMOSParser.RULE_procedure);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this.match(AMOSParser.PROC);
	        this.state = 182;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 183;
	            this.match(AMOSParser.BRACKETOPEN_ARRAY);
	            this.state = 184;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 185;
	            this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	        }

	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 42096513) !== 0)) {
	            this.state = 188;
	            this.statement();
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 194;
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



	variable_starter() {
	    let localctx = new Variable_starterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, AMOSParser.RULE_variable_starter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 197;
	        this.match(AMOSParser.T__0);
	        this.state = 198;
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
AMOSParser.P_DRAWKEYS = 37;
AMOSParser.IDENTIFIER = 38;
AMOSParser.COMPARISON = 39;
AMOSParser.BRACKETOPEN_PROP = 40;
AMOSParser.BRACKETCLOSE_PROP = 41;
AMOSParser.BRACKETOPEN_ARRAY = 42;
AMOSParser.BRACKETCLOSE_ARRAY = 43;
AMOSParser.BRACKETOPEN_FUNCTION = 44;
AMOSParser.BRACKETCLOSE_FUNCTION = 45;
AMOSParser.HECADECIMAL = 46;
AMOSParser.MULTIPLY = 47;
AMOSParser.DIVIDE = 48;
AMOSParser.ADD = 49;
AMOSParser.SUBTRACT = 50;

AMOSParser.RULE_expression2 = 0;
AMOSParser.RULE_expression1 = 1;
AMOSParser.RULE_term = 2;
AMOSParser.RULE_factor = 3;
AMOSParser.RULE_program = 4;
AMOSParser.RULE_statement = 5;
AMOSParser.RULE_screen_open = 6;
AMOSParser.RULE_curs_off = 7;
AMOSParser.RULE_curs_on = 8;
AMOSParser.RULE_ink = 9;
AMOSParser.RULE_text = 10;
AMOSParser.RULE_do_loop = 11;
AMOSParser.RULE_for_loop = 12;
AMOSParser.RULE_if_statement = 13;
AMOSParser.RULE_if_statement_key_state = 14;
AMOSParser.RULE_bar = 15;
AMOSParser.RULE_procedure = 16;
AMOSParser.RULE_variable_starter = 17;

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

	screen_open() {
	    return this.getTypedRuleContext(Screen_openContext,0);
	};

	procedure() {
	    return this.getTypedRuleContext(ProcedureContext,0);
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


	ENDPROC() {
	    return this.getToken(AMOSParser.ENDPROC, 0);
	};

	BRACKETOPEN_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETOPEN_ARRAY, 0);
	};

	BRACKETCLOSE_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_ARRAY, 0);
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




AMOSParser.Expression2Context = Expression2Context; 
AMOSParser.Expression1Context = Expression1Context; 
AMOSParser.TermContext = TermContext; 
AMOSParser.FactorContext = FactorContext; 
AMOSParser.ProgramContext = ProgramContext; 
AMOSParser.StatementContext = StatementContext; 
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
AMOSParser.Variable_starterContext = Variable_starterContext; 
