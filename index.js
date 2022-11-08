import GrammarLexer from "./lib/GrammarLexer.js"
import GrammarParser from "./lib/GrammarParser.js"
import GrammarListener from "./lib/GrammarListener.js"
import {default as antlr} from "antlr4"

const input = "1 + 2 / 4 * 8"
const chars = new antlr.InputStream(input)
const lexer = new GrammarLexer(chars)
const tokens = new antlr.CommonTokenStream(lexer)
const parser = new GrammarParser(tokens)

const listener = new GrammarListener()

parser.buildParseTrees = true
parser.addParseListener(listener)

console.log("Input:", input)
const tree = parser.start()