const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;


let code = 'var a = "\x48\x65\x6c\x6c\x6f\x2c\x4e\x69\x67\x68\x74\x54\x65\x61\x6d\x21";'
let visitor = {
    StringLiteral(path) {
        let {value, extra, type} = path.node
        // console.log(value);
        extra.raw = '"' + value + '"';
    }
};

let ast = parser.parse(code);
traverse(ast, visitor);
let {finCode} = generator(ast);
console.log(finCode);