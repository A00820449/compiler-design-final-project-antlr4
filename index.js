import GrammarLexer from "./lib/GrammarLexer.js"
import GrammarParser from "./lib/GrammarParser.js"
import MyListener from "./my_listener.js"
import {default as antlr} from "antlr4"

const input = "3 - (1 + 2) / (4 * 8)"
const chars = new antlr.InputStream(input)
const lexer = new GrammarLexer(chars)
const tokens = new antlr.CommonTokenStream(lexer)
const parser = new GrammarParser(tokens)

const listener = new MyListener()

parser.buildParseTrees = true
parser.addParseListener(listener)

console.log("Input:", input)
parser.start()