import GrammarLexer from "./lib/GrammarLexer.js"
import GrammarParser from "./lib/GrammarParser.js"
import MyListener from "./my_listener.js"
import {default as antlr} from "antlr4"
import {readFileSync} from "node:fs"

const input = readFileSync("input.txt").toString()

const chars = new antlr.InputStream(input)
const lexer = new GrammarLexer(chars)
const tokens = new antlr.CommonTokenStream(lexer)
const parser = new GrammarParser(tokens)

const listener = new MyListener()

parser.buildParseTrees = true
parser.addParseListener(listener)

console.log("Input:", input)
parser.start()