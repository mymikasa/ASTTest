const parser = require('@babel/parser');
const t = require('@babel/types');

const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;


const jscode = `
var arr = "3|0|1|2|4".split("|");
var cnt = 0;
while (true) {
    switch (arr[cnt++]) {
    case "0":
        console.log("This is case-block 0")
        continue;
    case "1":
        console.log("This is case-block 1");
        continue;
    case "2":
        console.log("This is case-block 2");
        continue;
    case "3":
        console.log("This is case-block 3");
        continue;
    case "4":
        console.log("This is case-block 4");
        continue;
    }
    break;
}`


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

function whileSwitch(path) {
    let {test, body} = path.node;

    if (!t.isSwitchStatement(body.body[0])) return;

    let { discriminant,cases} = body.body[0];

    if(!t.isMemberExpression(discriminant)||!t.isUpdateExpression(discriminant.property)) return;

    let arrName = discriminant.object.name;
    let arr = [];
        

    
}

var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast);
console.log(finCode.code);