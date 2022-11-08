grammar Grammar;

start: expression EOF;

expression: term (term_op term)*;

term_op: ADD | SUB;
term: factor (factor_op factor)*;

factor_op: MUL | DIV;
factor: atom | paren_exp;

paren_exp: LPAREN expression RPAREN;

atom: NUM_LITERAL;

// TOKENS
ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';
LPAREN: '(';
RPAREN: ')';
NUM_LITERAL: [0-9]+('.'[0-9]+)?;
WS: [ \t\r\n]+ -> skip;