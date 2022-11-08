// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete listener for a parse tree produced by GrammarParser.
export default class GrammarListener extends antlr4.tree.ParseTreeListener {
	vector = Array(0)
	op_stack = Array(0)
	// Enter a parse tree produced by GrammarParser#start.
	enterStart(ctx) {
		console.log("Starting")
	}

	// Exit a parse tree produced by GrammarParser#start.
	exitStart(ctx) {
		console.log(this.vector, this.op_stack)
		console.log("Done")
	}


	// Enter a parse tree produced by GrammarParser#expression.
	enterExpression(ctx) {
	}

	// Exit a parse tree produced by GrammarParser#expression.
	exitExpression(ctx) {
	}


	// Enter a parse tree produced by GrammarParser#term_op.
	enterTerm_op(ctx) {
	}

	// Exit a parse tree produced by GrammarParser#term_op.
	exitTerm_op(ctx) {
		this.op_stack.unshift(ctx.getText())
	}


	// Enter a parse tree produced by GrammarParser#term.
	enterTerm(ctx) {
	}

	// Exit a parse tree produced by GrammarParser#term.
	exitTerm(ctx) {
		if (this.op_stack[0] === "+" || this.op_stack[0] === "-") {
			this.vector.push(this.op_stack.shift())
		}
	}


	// Enter a parse tree produced by GrammarParser#factor_op.
	enterFactor_op(ctx) {
	}

	// Exit a parse tree produced by GrammarParser#factor_op.
	exitFactor_op(ctx) {
		this.op_stack.unshift(ctx.getText())
	}


	// Enter a parse tree produced by GrammarParser#factor.
	enterFactor(ctx) {
	}

	// Exit a parse tree produced by GrammarParser#factor.
	exitFactor(ctx) {
		if (this.op_stack[0] === "*" || this.op_stack[0] === "/") {
			this.vector.push(this.op_stack.shift())
		}
	}


	// Enter a parse tree produced by GrammarParser#atom.
	enterAtom(ctx) {
	}

	// Exit a parse tree produced by GrammarParser#atom.
	exitAtom(ctx) {
		const num = parseFloat(ctx.getText())
		this.vector.push(num)
	}



}