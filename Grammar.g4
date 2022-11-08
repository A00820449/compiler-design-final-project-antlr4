grammar Grammar;

start: expression EOF;

expression: term (term_op term)*;

term_op: ADD | SUB;
term: factor (factor_op factor)*;

factor_op: MUL | DIV;
factor: atom | paren_exp;

paren_exp: LPAREN expression RPAREN;

atom: num_literal | ID;

num_literal: FLOAT_LITERAL | INT_LITERAL;

// TOKENS
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
LPAREN: '(';
RPAREN: ')';
FLOAT_LITERAL: [0-9]+'.'[0-9]+;
INT_LITERAL: [0-9]+;
ID: [a-zA-Z_][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;