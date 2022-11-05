const GrammarVisitor = require("./lib/grammar/GrammarVisitor").default
const GrammarListener = require("./lib/grammar/GrammarListener").default

const visitor = new GrammarVisitor()
visitor.visitStart()