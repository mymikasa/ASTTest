const parser = require('@babel/parser');
const t = require('@babel/types');
const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;


var jscode = 'var a=123, b;\
let c = 4 + 5;\
d = a + 12;'

const visitor = {
    VariableDeclarator(path)
    {
        const {id} = path.node;
        const binding = path.scope.getBinding(id.name);
        if (!binding || binding.constantViolations.length > 0)
        {//如果变量被修改过，则不能进行删除动作。
            return;
        }
        if (binding.referencePaths.length === 0)
        {//长度为0，说明变量没有被使用过。
            path.remove();
        }
    },
}
const ast = parser.parse(jscode);
traverse(ast, visitor);
finCode = generator(ast);
console.log(finCode.code);

