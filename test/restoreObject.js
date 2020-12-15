const parser = require('@babel/parser');
const t = require('@babel/types');

const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;


const jscode = 'var a = {\
    "YJJox": "object",\
    "sbTga": function (b, c) {\
        return b | c;\
    },\
    "iwvEK": function (b, c) {\
        return b << c;\
    },\
    "HqkiD": function (b, c) {\
        return b(c);\
    },\
};\
b = a["iwvEK"](1, 3), c = a["sbTga"](111, 222), d = a["YJJox"], e = a["HqkiD"](String.fromCharCode, 49);'

const visitor = {
    VariableDeclarator(path) {
        const { id, init } = path.node;
        // 判断是不是array类型以及元素的个数是否大于0
        if (!t.isObjectExpression(init) || init.properties.length === 0) return;

        let name = id.name;
        let scope = path.scope;

        for (const property of init.properties) {
            let key = property.key.value;
            let value = property.value;

            if (key.length !== 5) return;

            if (t.isLiteral(value)) {
                scope.traverse(scope.block, {
                    MemberExpression(_path) {
                        let _node = path.node;
                        if (!t.isIdentifier(_node.object, { name: name })) return;
                        if (!t.isLiteral(_node.property, { value: key })) return;
                        _path.replaceWitch(value);
                    }
                })
            }
            else if (t.isFunctionExpression(value)) {
                let ret_state = value.body.body[0];
                var aa = generator(scope.path.node);
                //特征判断，如果不是return表达式
                if (!t.isReturnStatement(ret_state)) continue;
                scope.traverse(scope.block, {
                    CallExpression: function (_path) {
                        //遍历CallExpression
                        let { callee, arguments } = _path.node;
                        let tt = generator;
                        if (!t.isMemberExpression(callee)) return;
                        if (!t.isIdentifier(callee.object, { name: name })) return;
                        if (!t.isLiteral(callee.property, { value: key })) return;
                        if (t.isCallExpression(ret_state.argument) && arguments.length > 0) {
                            //构造节点
                            _path.replaceWith(t.CallExpression(arguments[0], arguments.slice(1)));
                        }
                        else if (t.isBinaryExpression(ret_state.argument) && arguments.length === 2) {
                            //构造节点
                            let replace_node = t.BinaryExpression(ret_state.argument.operator, arguments[0], arguments[1]);
                            _path.replaceWith(replace_node);
                        }
                        else if (t.isLogicalExpression(ret_state.argument) && arguments.length === 2) {
                            //构造节点
                            let replace_node = t.LogicalExpression(ret_state.argument.operator, arguments[0], arguments[1]);
                            _path.replaceWith(replace_node);
                        }
                    }
                })
            }
        }
    }
};

var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast);
console.log(finCode.code);