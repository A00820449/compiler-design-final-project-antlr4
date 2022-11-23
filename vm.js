import fs from "node:fs"

if (process.argv[2]) {
    throw new Error("Usage: node vm.js <object file>")
}

/**
 * @type {{quadruples: string[][], constants: Object<string, number | boolean>}}
 */
const {quadruples, constants} = JSON.stringify(fs.readFileSync(process.argv[2]).toString())

const mem = Object.assign({}, constants)
function getMem(key) {
    return mem[key] || false
}

for (let cursor = 0; cursor < quadruples.length; cursor++) {
    switch (quadruples[i][0]) {
        case "=":
            
            break;
    
        default:
            throw new Error(`Unrecognized instruction: ${quadruples[i][0]}`)
            break;
    }
}