import GrammarListener from "./lib/GrammarListener.js"
import Stack from "./my_stack.js"
import sematic_cube from "./sematic_cube.js"

/**
 * @typedef {{type: string, scope: string}} var_info
 */

export default class MyListener extends GrammarListener {
	constructor() {
		super()
		this.quad_vector = []
		this.operator_stack = new Stack()
		this.operand_stack = new Stack()
		this.vars = {}
		this.consts = {"$false": false, "$true": true, "$int_default": 0, "$float_default": 0.0, "$bool_default": false}
		this.current_var_decl_type = ""
		this.current_var_decl_scope = ""
	}


	quad_vector
	/**
	 * @type {Stack<string>}
	 */
	operator_stack
	/**
	 * @type {Stack<{value: any, type: string}>}
	 */
	operand_stack = new Stack()

	float_temp_counter = 0
	getFloatTemp() {
		return `$ftemp_${this.float_temp_counter++}`
	}

	int_temp_counter = 0
	getIntTemp() {
		return `$itemp_${this.int_temp_counter++}`
	}

	bool_temp_counter = 0
	getBoolTemp() {
		return `$btemp_${this.bool_temp_counter++}`
	}

	float_const_counter = 0
	getFloatConst() {
		return `$float_${this.float_const_counter++}`
	}

	int_const_counter = 0
	getIntConst() {
		return `$int_${this.int_const_counter++}`
	}

	getTemp(type) {
		switch (type) {
			case "int":
				return this.getIntTemp()
				break
			case "float":
				return this.getFloatTemp()
				break
			default:
				return null
				break
		}	
	}

	current_var_decl_type
	current_var_decl_scope

	/**
	 * @type {Object<string, var_info>}
	 */
	vars

	/**
	 * @type {Object<string, number | boolean>}
	 */
	consts

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
		const result = this.getTemp(result_type)

		const quad = getQuadruple(operator, loperand.value, roperand.value, result)
		this.quad_vector.push(quad)
		this.operand_stack.push({value: result, type: result_type})
	}

	enterStart(ctx) {
		console.log("Starting")
	}
	exitStart(ctx) {
		console.log("Done")
	}

	exitPrint_stmt(ctx) {
		const operand = this.operand_stack.pop()

		this.quad_vector.push(getQuadruple("print", operand.value))
	}
	
	exitExp_float_literal(ctx) {
		const next_float = this.getFloatConst()
		this.consts[next_float] = parseFloat(ctx.getText())
		this.operand_stack.push({value: next_float, type: "float"})
	}

	exitExp_int_literal(ctx) {
		const next_int = this.getIntConst()
		this.consts[next_int] = parseFloat(ctx.getText())
		this.operand_stack.push({value: next_int, type: "int"})
	}

	exitExp_bool_literal(ctx) {
		const boolan_const = `$${ctx.getText()}`
		this.operand_stack.push({value: boolan_const, type: "bool"})
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
		this.quad_vector.push(getQuadruple("=", id, null, `$${this.current_var_decl_type}_default`))
	}

	/* end of vars */

	exitAssignment_stmt(ctx) {
		const exp_val = this.operand_stack.pop()
		const varaccess = this.operand_stack.pop()


		const valid = sematic_cube[varaccess.type]?.["="]?.[exp_val.value]
		if (!valid) {
			new Error("Type mismatch")
		}

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
