const parser = require('@babel/parser');
const t = require('@babel/types');
const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

var code = "(function(_0xf486e7, _0x2075d7) {  \
    var _0x5c3a18 = function(_0x5b65b1) {\
        while (--_0x5b65b1) {\
            _0xf486e7['push'](_0xf486e7['shift']());\
        }\
    };\
    _0x5c3a18(++_0x2075d7);\
}(_0x2075, 0xa4));"

const visitor = {
    Identifier(path) {
        if (path.node.name == '_0x2075') {
            let tt = path.findParent(path => path.isCallExpression());
            // console.log(tt.node.type);
            // console.log(path.inList);
            // console.log(path.key);
            console.log(path.listKey);
            // console.log(path.container)
            // console.log(tt);
        }
    }
}

var astDemo = parser.parse(code);
traverse(astDemo, visitor);
var finCode = generator(astDemo);
// console.log(finCode.code);
