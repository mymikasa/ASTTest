const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


let code = 'var a = 123'
let visitor = {
    VariableDeclarator(path) {
        let {value, extra, type} = path.node;
        path.insertAfter(types.identifier('b'));
        // console.log(value);
        // extra.raw = '"' + value + '"';
    }
};

let ast = parser.parse(code);
traverse(ast, visitor);
let {finCode} = generator(ast);
console.log(finCode);