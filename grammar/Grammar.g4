grammar Grammar;

start: program;

program: R_PROGRAM ID SEMICOLON vars? functions? main;

main: R_MAIN param_list SEMICOLON vars? block;

block: LBRACE statement* RBRACE;

vars: R_VAR COLON var_declaration+;

var_declaration: type int_in_brack? int_in_brack? var_list SEMICOLON;
int_in_brack: LBRACK C_INT RBRACK ;

functions: function_decl+;
function_decl: function_header SEMICOLON vars? block ;
function_header: R_FUNCTION (type | R_VOID) COLON ID param_list;
param_list: LPAREN (type ID (COMMA type ID)*)? RPAREN;

type: R_INT | R_FLOAT | R_BOOL ;

var_list: ID (COMMA ID)*;

statement: assignment | conditional | fun_call_stmt | print_stmt | input_stmt | read_stmt | return_stmt | while_loop;

print_stmt: R_PRINT LPAREN C_STRING (COMMA expression)* RPAREN SEMICOLON;

fun_call_stmt: fun_call SEMICOLON;

assignment: var_access ASSIGN expression SEMICOLON;

conditional: R_IF LPAREN expression RPAREN block conditional_else? SEMICOLON;
conditional_else: R_ELSE block;

input_stmt: R_INPUT LPAREN var_access_list RPAREN SEMICOLON;
var_access_list: var_access (COMMA var_access)*;

read_stmt: R_READ LPAREN C_STRING RPAREN SEMICOLON;

return_stmt: R_RETURN LPAREN expression RPAREN SEMICOLON;

while_loop: R_WHILE LPAREN expression RPAREN block SEMICOLON;

expression: conjunction (AND conjunction)*;

conjunction: relation (OR relation)*;

relation: addition (comparison_op relation)*;

addition: term (term_op term)*;

term: factor (factor_op factor)*;

factor: exponent (POW exponent)*;

exponent: negation_op? (LPAREN expression RPAREN | atom);

comparison_op: EQ | NOT_EQ | GT | GE | LT | LE ;
bool_op: AND | OR;
term_op: ADD | SUB;
factor_op: MUL | DIV;

atom: literal | var_access | fun_call;
literal: C_INT | C_FLOAT | C_TRUE | C_FALSE;
fun_call: ID arg_list;
arg_list: LPAREN expression_list? RPAREN;
expression_list: expression (COMMA expression)*;
var_access: ID brack_access? brack_access?;
brack_access: LBRACK expression RBRACK;
negation_op: NOT | SUB;

/* TOKENS */
R_INT : 'int' ;
R_FLOAT : 'float' ;
R_VOID : 'void';
R_BOOL: 'bool';
R_PROGRAM: 'program';
R_VAR: 'var';
R_IF: 'if';
R_ELSE: 'else';
R_FUNCTION: 'function';
R_MAIN: 'main';
R_PRINT: 'print';
R_INPUT: 'input';
R_RETURN: 'return';
R_WHILE: 'while';
R_READ: 'read';

C_TRUE: 'true';
C_FALSE: 'false';

COMMENT: '/*'.*?'*/' -> skip;

NOT_EQ: '!=';
EQ: '==';
GE: '>=';
LE: '<=';
GT: '>';
LT: '<';
NOT: '!';

LBRACE: '{' ;
RBRACE : '}' ;
COLON : ':' ;
SEMICOLON: ';';
COMMA : ',' ;
LPAREN : '(' ;
RPAREN : ')' ;
ADD : '+' ;
SUB : '-' ;
MUL : '*' ;
DIV : '/' ;
ASSIGN: '=';
LBRACK : '[' ;
RBRACK : ']' ;
POW: '^';
AND: '&';
OR: '|';

ID: [A-Za-z_][A-Za-z0-9_]*;

C_FLOAT: [0-9]+'.'[0-9]+;
C_INT: [0-9]+;
C_STRING: '"'(~["\\]|'\\'.)*?'"' ;

WS: [ \r\n\t]+ -> skip;