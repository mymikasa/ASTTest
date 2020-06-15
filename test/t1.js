const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


let code = 'a + b + c;'
let visitor = {
    Identifier(path) {
        console.log("Visiting: " + path.node.name)
    }
};

let ast = parser.parse(code);
traverse(ast, visitor);
let {finCode} = generator(ast);
console.log(finCode);