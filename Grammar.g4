grammar Grammar;

start: expression EOF;

expression: conjunction expression_aux;
expression_aux: (conjuction_op conjunction)*;
conjuction_op: AND;

conjunction: relation conjunction_aux;
conjunction_aux: (relation_op relation)*;
relation_op: OR;

relation: addition relation_aux;
relation_aux: (addition_op addition)*;
addition_op: EQ | NOT_EQ | GT | GE | LT | LE ;

addition: term addition_aux;
addition_aux: (term_op term)*;
term_op: ADD | SUB;

term: factor factor_aux;
factor_aux: (factor_op factor)*;
factor_op: MUL | DIV;

factor: exponent exponent_aux;
exponent_aux: (exponent_op exponent)*;
exponent_op: POW;

exponent: negation_op? (atom | paren_exp);
negation_op: NOT | SUB;

paren_exp: LPAREN expression RPAREN;
atom: exp_float_literal | exp_int_literal | exp_bool_literal | var_access;

var_access: ID;
exp_float_literal: FLOAT_LITERAL;
exp_int_literal: INT_LITERAL;
exp_bool_literal: TRUE_LITERAl | FALSE_LITERAL;

// TOKENS
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

TRUE_LITERAl: 'true';
FALSE_LITERAL: 'false';

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

FLOAT_LITERAL: [0-9]+'.'[0-9]+;
INT_LITERAL: [0-9]+;
STRING_LITERAL: '"'(~["\\]|'\\'.)*?'"' ;

WS: [ \r\n\t]+ -> skip;