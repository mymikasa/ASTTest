const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require("fs");

var jscode  ='var a = 12345678;'


const vistor = {
    NumericLiteral(path) {
        let value = path.node.value;
        const left =0 - Math.floor(Math.random() * 100000000 + 100000000);
        const right = value ^ left;
        const operator = '^';
        path.replaceWith(t.BinaryExpression(operator, t.NumericLiteral(left), t.NumericLiteral(right)));
        console.log(typeof(t.NumericLiteral(left)));
        console.log(typeof(left))
        path.stop();
    }
}

let astDemo = parse(jscode);
traverse(astDemo, vistor);
let finCode  = generator(astDemo);
console.log(finCode.code);


