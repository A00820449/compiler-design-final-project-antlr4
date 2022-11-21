import GrammarListener from "./lib/GrammarListener.js"
import Stack from "./my_stack.js"
import sematic_cube from "./sematic_cube.js"

/**
 * @typedef {{type: string, scope: string}} var_info
 */

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

	float_temp_counter = 0
	getTemp() {
		return `$temp_${this.float_temp_counter++}`
	}

	int_temp_counter = 0
	getTemp() {
		return `$temp_${this.int_temp_counter++}`
	}

	bool_temp_counter = 0
	getTemp() {
		return `$temp_${this.bool_temp_counter++}`
	}

	float_const_counter = 0
	getFloatConst() {
		return `$f_${this.float_const_counter++}`
	}

	int_const_counter = 0
	getIntConst() {
		return `$i_${this.int_const_counter++}`
	}
	
	bool_const_counter = 0
	getBoolConst() {
		return `$b_${this.bool_const_counter++}`
	}

	current_var_decl_type = "";
	current_var_decl_scope = "";

	/**
	 * @type {Object<string, var_info>}
	 */
	vars = {}

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
		const result = this.getTemp()

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

	exitPrint_stmt(ctx) {
		const operand = this.operand_stack.pop()

		this.quad_vector.push(getQuadruple("print", operand.value))
	}
	
	exitExp_float_literal(ctx) {
		const next_float = this.getFloatConst()
		this.quad_vector.push(getQuadruple("=", next_float, null, parseFloat(ctx.getText())))
		this.operand_stack.push({value: next_float, type: "float"})
	}

	exitExp_int_literal(ctx) {
		this.operand_stack.push({value: ctx.getText(), type: "int"})
	}

	exitExp_bool_literal(ctx) {
		this.operand_stack.push({value: ctx.getText().charAt(0), type: "bool"})
	}

	exitVar_access(ctx) {
		/**
		 * @type {string}
		 */
		const name = ctx.getText()

		const data = this.vars[name]
		if (!data) {
			throw new Error("Undeclared variable")
		}
		
		this.operand_stack.push({value: name, type: data.type})
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
	
	/*vars*/
	exitVar_decl_type(ctx) {
		this.current_var_decl_type = ctx.getText()
	}

	enterGlobal_vars(ctx) {
		this.current_var_decl_scope = "global"
	}

	exitVar_decl_name(ctx) {
		/**
		 * @type {string}
		 */
		const id = ctx.getText()

		if (this.vars[id]) {
			throw new Error("Variable declared twice")
		}
		this.vars[id] = {type: this.current_var_decl_type, scope: this.current_var_decl_type}
	}

	/* end of vars */

	exitAssignment_stmt(ctx) {
		const exp_val = this.operand_stack.pop()
		const varaccess = this.operand_stack.pop()
		
		this.quad_vector.push(getQuadruple("=", varaccess.value, null, exp_val.value))
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
