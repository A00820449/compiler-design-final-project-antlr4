import GrammarListener from "./lib/GrammarListener.js"
import Stack from "./my_stack.js"


export default class MyListener extends GrammarListener {
	vector = []
	op_stack = new Stack()

    constructor() {
        super()
    }

    enterStart(ctx) {
		console.log("Starting")
	}

	exitStart(ctx) {
		console.log(this.vector)
		console.log("Done")
	}

	exitTerm_op(ctx) {
		this.op_stack.push(ctx.getText())
	}

	exitTerm(ctx) {
		if (this.op_stack.peek() === "+" || this.op_stack.peek() === "-") {
			this.vector.push(this.op_stack.pop())
		}
	}

	exitFactor_op(ctx) {
		this.op_stack.push(ctx.getText())
	}


	exitFactor(ctx) {
		if (this.op_stack.peek() === "*" || this.op_stack.peek() === "/") {
			this.vector.push(this.op_stack.pop())
		}
	}


	exitAtom(ctx) {
		const num = parseFloat(ctx.getText())
		this.vector.push(num)
	}

    enterParen_exp(ctx) {
        this.op_stack.push("(")
    }

    exitParen_exp(ctx) {
        this.op_stack.pop()
    }

}