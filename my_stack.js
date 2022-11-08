export default class Stack {
    #arr
    constructor() {
        this.#arr = new Array(0)
    }

    pop() {
        return this.#arr.pop()
    }

    push(x) {
        return this.#arr.push(x)
    }

    peek() {
        return this.#arr[this.#arr.length - 1]
    }
}