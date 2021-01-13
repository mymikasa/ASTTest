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
}
`


const visitor = {
    WhileStatement: {
        enter: [
            whileSwitch,
        ]
    }
};

function whileSwitch(path) {
    const {test,body} = path.node;
    if (!t.isBooleanLiteral(test) || test.value !== true) return;
    if (body.body.length === 0  || !t.isSwitchStatement(body.body[0])) return;
    let switch_state = body.body[0];
    let {discriminant,cases} = switch_state;
    if (!t.isMemberExpression(discriminant) || !t.isUpdateExpression(discriminant.property)) return;
    let arr_name = discriminant.object.name;
    let arr = [];
    let all_pre_siblings = path.getAllPrevSiblings();

    if (all_pre_siblings.length !== 2) return;
    all_pre_siblings.forEach(pre_path => {
        let { declarations } = pre_path.node;
        let { id, init } = declarations[0];

        if (arr_name === id.name) {
            // let tt = traverse(init);
            let tt = generator(init);
            arr = eval(tt.code);
        }
        pre_path.remove()
    });

    let retBody = [];

    arr.forEach(index => {
        let caseBody = cases[index].consequent;
        if (t.isContinueStatement(caseBody[caseBody.length - 1])) {
            caseBody.pop()
        }
        retBody = retBody.concat(caseBody)
    });

    path.replaceInline(retBody);

}

var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast);
console.log(finCode.code);