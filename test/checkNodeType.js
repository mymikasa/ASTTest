const parser = require("@babel/parser");
const t = require('@babel/types');
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default

const code = 'var b = 1 + 2; var b = 2 + 1'

const vistor = {
    BinaryExpression(path) {
        // console.log(path.node.left);  //得到一个AST节点的属性值
        // console.log(path.get('left'));  //访问到该属性内部的path、
        // if (t.isNumericLiteral(path.node.left)) {
        //     console.log(path.node.left);
        // };

        
        // 检查 node 的类型
        if (t.isNumericLiteral(path.node.left, { value: 1 })) {
            console.log('1111');
        };
        // 检查 path 的类型
        if (path.get('left').isNumericLiteral({ value: 1})) {
            console.log('2222');
        };

    },
    // 检查标识符（Identifier）是否被引用，
    // path.isReferencedIdentifier() 内部调用了 isReferenced 
    Identifier(path) {
        if (path.isReferencedIdentifier()) {
            console.log('123');
        };
        if (t.isReferenced(path.node, path.parent)) {
            console.log('123');
        }

    }
};

var astDemo = parser.parse(code);
traverse(astDemo, vistor);
var finCode = generator(astDemo);
// console.log()
