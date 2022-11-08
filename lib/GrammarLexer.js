// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,6,41,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,23,8,4,11,4,12,4,24,
1,4,1,4,4,4,29,8,4,11,4,12,4,30,3,4,33,8,4,1,5,4,5,36,8,5,11,5,12,5,37,1,
5,1,5,0,0,6,1,1,3,2,5,3,7,4,9,5,11,6,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,
44,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
0,0,1,13,1,0,0,0,3,15,1,0,0,0,5,17,1,0,0,0,7,19,1,0,0,0,9,22,1,0,0,0,11,
35,1,0,0,0,13,14,5,43,0,0,14,2,1,0,0,0,15,16,5,45,0,0,16,4,1,0,0,0,17,18,
5,42,0,0,18,6,1,0,0,0,19,20,5,47,0,0,20,8,1,0,0,0,21,23,7,0,0,0,22,21,1,
0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,32,1,0,0,0,26,28,5,46,
0,0,27,29,7,0,0,0,28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,
0,31,33,1,0,0,0,32,26,1,0,0,0,32,33,1,0,0,0,33,10,1,0,0,0,34,36,7,1,0,0,
35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,
40,6,5,0,0,40,12,1,0,0,0,5,0,24,30,32,37,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GrammarLexer extends antlr4.Lexer {

    static grammarFileName = "Grammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'+'", "'-'", "'*'", "'/'" ];
	static symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", "NUM_LITERAL", 
                          "WS" ];
	static ruleNames = [ "ADD", "SUB", "MUL", "DIV", "NUM_LITERAL", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

GrammarLexer.EOF = antlr4.Token.EOF;
GrammarLexer.ADD = 1;
GrammarLexer.SUB = 2;
GrammarLexer.MUL = 3;
GrammarLexer.DIV = 4;
GrammarLexer.NUM_LITERAL = 5;
GrammarLexer.WS = 6;



