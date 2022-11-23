import fs from "node:fs"

if (!process.argv[2]) {
    throw new Error("Usage: node vm.js <object file>")
}



/**
 * @type {{quadruples: string[][], constants: Object<string, number | boolean>}}
 */
const {quadruples, constants} = JSON.parse(fs.readFileSync(process.argv[2]).toString())


const mem = Object.assign({}, constants)

//console.debug(quadruples, constants)

for (let cursor = 0; cursor < quadruples.length; cursor++) {
    const q = quadruples[cursor]
    switch (q[0]) {
        case "=":
            mem[q[1]] = mem[q[3]]
            break;
        case "+":
            mem[q[3]] = mem[q[1]] + mem[q[2]]
            break;
        case "-":
            mem[q[3]] = mem[q[1]] - mem[q[2]]
            break;
        case "*":
            mem[q[3]] = mem[q[1]] * mem[q[2]]
            break;
        case "/":
            mem[q[3]] = mem[q[1]] / mem[q[2]]
            break;
        case "^":
            mem[q[3]] = Math.pow(mem[q[1]], mem[q[2]])
            break;
        case "==":
            mem[q[3]] = mem[q[1]] === mem[q[2]]
            break;
        case "!=":
            mem[q[3]] = mem[q[1]] !== mem[q[2]]
            break;
        case "|":
            mem[q[3]] = mem[q[1]] || mem[q[2]]
            break;
        case "&":
            mem[q[3]] = mem[q[1]] && mem[q[2]]
            break;
        case ">":
            mem[q[3]] = mem[q[1]] > mem[q[2]]
            break;
        case ">=":
            mem[q[3]] = mem[q[1]] >= mem[q[2]]
            break;
        case "<":
            mem[q[3]] = mem[q[1]] < mem[q[2]]
            break;
        case "<=":
            mem[q[3]] = mem[q[1]] <= mem[q[2]]
            break;
        case "print":
            console.log(mem[q[1]])
            break;
        case "a":
            mem[q[3]] = mem[q[1]] + mem[q[2]]
            break;
        case "b":
            mem[q[3]] = mem[q[1]] + mem[q[2]]
            break;
        case "c":
            mem[q[3]] = mem[q[1]] + mem[q[2]]
            break;
        default:
            throw new Error(`Unrecognized instruction: ${q[0]}`)
            break;
    }
}