import GrammarListener from "./lib/GrammarListener.js"
import Stack from "./my_stack.js"
import sematic_cube from "./sematic_cube.js"

export default class MyListener extends GrammarListener {
	quad_vector = []
	/**
	 * @type {Stack<string>}
	 */
	operator_stack = new Stack()
	/**
	 * @type {Stack<{value: any, type: string}>}
	 */
	operand_stack = new Stack()

	mem_counter = 0

    constructor() {
        super()
    }

	/**
	 * 
	 * @param  {...string} operators 
	 * @returns 
	 */
	quadrupleHandler(...operators) {
		if (!operators.includes(this.operator_stack.peek())) { return; }

		const roperand = this.operand_stack.pop()
		const loperand = this.operand_stack.pop()
		const operator = this.operator_stack.pop()
		const result_type = sematic_cube[roperand.type]?.[operator]?.[loperand.type]

		if (!result_type) {
			throw new Error("Type mismatch")
		}
		const result = `t${this.mem_counter++}`

		const quad = getQuadruple(operator, loperand.value, roperand.value, result)
		this.quad_vector.push(quad)
		this.operand_stack.push({value: result, type: result_type})
	}

	enterStart(ctx) {
		console.log("Starting")
	}
	exitStart(ctx) {
		console.log(this.quad_vector)
		console.log("Done")
	}

	exitExp_stmt(ctx) {
		const operand = this.operand_stack.pop()

		console.log("Result:", operand)
	}
	
	exitExp_float_literal(ctx) {
		this.operand_stack.push({value: ctx.getText(), type: "float"})
	}

	exitExp_int_literal(ctx) {
		this.operand_stack.push({value: ctx.getText(), type: "int"})
	}

	exitExp_bool_literal(ctx) {
		this.operand_stack.push({value: ctx.getText().charAt(0), type: "bool"})
	}

	exitVar_access(ctx) {
		this.operand_stack.push({value: ctx.getText(), type: "float"})
	}

	exitConjuction_op(ctx) {
		this.operator_stack.push(ctx.getText())
	}

	exitRelation_op(ctx) {
		this.operator_stack.push(ctx.getText())
	}

	exitAddition_op(ctx) {
		this.operator_stack.push(ctx.getText())
	}

	exitTerm_op(ctx) {
		this.operator_stack.push(ctx.getText())
	}

	exitFactor_op(ctx) {
		this.operator_stack.push(ctx.getText())
	}

	exitExponent_op(ctx) {
		this.operator_stack.push(ctx.getText())
	}

	exitConjunction(ctx) {
		this.quadrupleHandler("&")
	}

	exitRelation(ctx) {
		this.quadrupleHandler("|")
	}

	exitAddition(ctx) {
		this.quadrupleHandler("<", ">", "<=", ">=", "==", "!=")
	}

	exitTerm(ctx) {
		this.quadrupleHandler("+", "-")
	}

	exitFactor(ctx) {
		this.quadrupleHandler("*", "/")
	}

	exitExponent(ctx) {
		this.quadrupleHandler("^")
	}

	enterParen_exp(ctx) {
		this.operator_stack.push(null)
	}

	exitParen_exp(ctx) {
		this.operator_stack.pop()
	}
}

/**
 * @param {string} elem1 
 * @param {string} elem2 
 * @param {string} elem4 
 * @param {string} elem3 
 * @returns {(string|null)[]}
 */
 export function getQuadruple(elem1, elem2, elem3, elem4) {
    const output = [null, null, null, null]
    output[0] = elem1 || null
    output[1] = elem2 || null
    output[2] = elem3 || null
    output[3] = elem4 || null
    return output
}
