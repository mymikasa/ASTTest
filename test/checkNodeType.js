const parser = require("@babel/parser");
const t = require('@babel/types');
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default

const code = 'var b = 1 + 2;'

const vistor = {
    BinaryExpression(path) {
        // console.log(path.node.left);  //得到一个AST节点的属性值
        // console.log(path.get('left'));  //访问到该属性内部的path、
        // if (t.isNumericLiteral(path.node.left)) {
        //     console.log(path.node.left);
        // };

        if (t.isNumericLiteral(path.node.left, { value: 1 })) {
            console.log('1111');
        }
    }
};

var astDemo = parser.parse(code);
traverse(astDemo, vistor);
var finCode = generator(astDemo);
// console.log()
