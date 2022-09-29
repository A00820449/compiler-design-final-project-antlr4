grammar Grammar;

start: program;

program: R_PROGRAM ID SEMICOLON vars? functions? main;

main: R_MAIN param_list SEMICOLON vars? block;

block: LBRACE statement* RBRACE;

vars: R_VAR var_declaration+;

var_declaration: type int_in_brack? int_in_brack? COLON var_list SEMICOLON;
int_in_brack: LBRACK C_INT RBRACK ;

functions: function_decl+;
function_decl: function_header SEMICOLON vars? block ;
function_header: R_FUNCTION (type | R_VOID) COLON ID param_list;
param_list: LPAREN (type ID (COMMA type ID)*)? RPAREN;

type: R_INT | R_FLOAT | R_BOOL ;

var_list: ID (COMMA ID)*;

statement: (assignment | conditional | fun_call | printing | reading | returning | while_loop) SEMICOLON;

printing: R_PRINT LPAREN C_STRING (COMMA expression)* RPAREN;

assignment: var_access ASSIGN expression;

conditional: R_IF LPAREN expression RPAREN block conditional_else? ;
conditional_else: R_ELSE block;

reading: R_INPUT LPAREN var_access_list RPAREN;
var_access_list: var_access (COMMA var_access)*;

returning: R_RETURN LPAREN expression RPAREN;

while_loop: R_WHILE LPAREN expression RPAREN block;

exp1: exp2 (plus_or_minus exp2)* ;

exp2: exp3 (mult_or_div exp3)*;

exp3: exp4 (POW exp4)*;

exp4: exp5 (comparison_op exp5)?;

exp5: exp6 (bool_op exp6)*;

exp6: plus_or_minus? (LPAREN exp1 RPAREN | value);

expression: exp1;

comparison_op: EQ | NOT_EQ | GT | GE | LT | LE ;
bool_op: AND | OR;
plus_or_minus: ADD | SUB;
mult_or_div: MUL | DIV;

value: literal| var_access | fun_call;
literal: C_INT | C_FLOAT | C_TRUE | C_FALSE;
fun_call: ID arg_list;
arg_list: LPAREN expression_list? RPAREN;
expression_list: expression (COMMA expression)*;
var_access: ID brack_access? brack_access?;
brack_access: LBRACK expression RBRACK;

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