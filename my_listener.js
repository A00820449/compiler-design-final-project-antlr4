import GrammarListener from "./lib/GrammarListener.js"

export default class MyListener extends GrammarListener {
	vector = Array(0)
	op_stack = Array(0)

    constructor() {
        super()
    }

    enterStart(ctx) {
		console.log("Starting")
	}

	exitStart(ctx) {
		console.log(this.vector, this.op_stack)
		console.log("Done")
	}

	exitTerm_op(ctx) {
		this.op_stack.unshift(ctx.getText())
	}

	exitTerm(ctx) {
		if (this.op_stack[0] === "+" || this.op_stack[0] === "-") {
			this.vector.push(this.op_stack.shift())
		}
	}

	exitFactor_op(ctx) {
		this.op_stack.unshift(ctx.getText())
	}


	exitFactor(ctx) {
		if (this.op_stack[0] === "*" || this.op_stack[0] === "/") {
			this.vector.push(this.op_stack.shift())
		}
	}


	exitAtom(ctx) {
		const num = parseFloat(ctx.getText())
		this.vector.push(num)
	}

    enterParen_exp(ctx) {
        this.op_stack.unshift("(")
    }

    exitParen_exp(ctx) {
        this.op_stack.shift()
    }

}