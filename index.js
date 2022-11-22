import GrammarLexer from "./lib/GrammarLexer.js"
import GrammarParser from "./lib/GrammarParser.js"
import MyListener from "./my_listener.js"
import {default as antlr} from "antlr4"
import {readFileSync, writeFileSync} from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

if (!process.argv[2]) {
    throw new Error("Usage: node . <input file>")
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const input = readFileSync(process.argv[2]).toString()

const chars = new antlr.InputStream(input)
const lexer = new GrammarLexer(chars)
const tokens = new antlr.CommonTokenStream(lexer)
const parser = new GrammarParser(tokens)

const listener = new MyListener()

parser.buildParseTrees = true
parser.addParseListener(listener)

console.log("Input:", input)
parser.start()

const output = {quadruples: listener.quad_vector, constants: listener.consts}

writeFileSync(path.resolve(__dirname, "output.o"), JSON.stringify(output, null, 4))
console.log(output)