const parser = require('@babel/parser');
const t = require('@babel/types');

const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;


const jscode = "var _2$SS = function(_SSz, _1111) { \
    var _l1L1 = [46222, '\x74\x61\x43\x61\x70\x74\x63\x68\x61\x42\x6c\x6f\x62', '\x74', '\x61', '\x73', '\x6c', '\x64', '\x69', .3834417654519915, '\x65\x6e\x63\x72\x79\x70\x74\x4a', '\x73\x6f', '\x6e', 49344];\
    var _2Szs = _l1L1[5] + _l1L1[7] + (_l1L1[4] + _l1L1[2]) \
      , _I1il1 = _l1L1[9] + (_l1L1[10] + _l1L1[11]); \
    var _0ooQoO = _l1L1[0]; \
    var _$Z22 = _l1L1[12] \
      , _2sS2 = _l1L1[8]; \
    return _l1L1[6] + _l1L1[3] + _l1L1[1]; \
};"


const visitor = {
    VariableDeclarator(path) {
        const {id, init} = path.node;
        // 判断是不是array类型以及元素的个数是否大于0
        if (!t.isArrayExpression(init) || init.elements.length === 0) return;

        // 获取array的所有元素
        let elements = init.elements;
        // 获取当前节点的作用域
        const binding = path.scope.getBinding(id.name);
        
        for (const refer_path of binding.referencePaths) {
            let member_path = refer_path.findParent(p=>p.isMemberExpression());
            let property = member_path.get('property');

            if (!property.isNumericLiteral()) {
                continue;
            }

            let index = property.node.value;
            let res = elements[index];
            member_path.replaceWith(res);
        }
    }

};

var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast);
console.log(finCode.code);