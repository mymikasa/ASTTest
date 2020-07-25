const types = require('@babel/types');
const dirpath = require("path");
const parser = require('@babel/parser');

const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const fs = require('fs');
const { type } = require('os');

var filePath = dirpath.join(dirpath.resolve(__dirname, '../'), 'encryption/test01.js');
var finPath = dirpath.join(dirpath.resolve(__dirname, '../'), 'decryption/test01.js');
console.log(filePath);
var jscode = fs.readFileSync(filePath, {
    encoding: "utf-8"
});


const funcName = ['z', 'L'];

function L(I) {
    var l = arguments.length
      , O = [];
    for (var S = 1; S < l; ++S)
        O.push(arguments[S] - I);
    return String.fromCharCode.apply(String, O)
}

function z(I) {
    var l = arguments.length
      , O = []
      , S = 1;
    while (S < l)
        O[S - 1] = arguments[S++] - I;
    return String.fromCharCode.apply(String, O)
}


var nameArray = [];


const visitor = {
    // VariableDeclaration: {
    //     enter: [
    //         get_name_Array,
    //         del_DWV]
    // },
    CallExpression: {
        enter: [
            replace_z,
        ]
    },
    
    // StringLiteral: {
    //     enter: [
    //         replace_unicode,
    //     ]
    // },
    // ForStatement: {
    //     enter: [
    //         replaceForSwitch,
    //     ]
    // }
};


function isFindvarPath(path) {

}


function replace_z(path) {
    var node = path.node;
    if(node.callee == undefined) {
        return ;
    }
    
    if (node.callee.type != 'Identifier') return;
    
    if (funcName.find(obj => obj==node.callee.name)) {
        var arguments = node.arguments;
        
        if (arguments == undefined) return ;
        // console.log(path.toString())

        let scope = path.scope;
        // console.log(path.toString())
        if(path.toString() == 'z(l, 166, 197, 200, 198)') {
            console.log('aaa');
        }
        for (i = 0; i < arguments.length; i++) {
            if (arguments[i].type === 'Identifier') {
                if (path.scope.hasBinding(arguments[i].name)) {
                    let argName = arguments[i].name;
                    var val_path = scope.bindings[argName].path;

                    if (val_path.node.init == undefined) {
                        return;
                    }
                    var value = val_path.node.init.value;

                    console.log(value);
                }
            }
        }
        
        // let tt = path.findParent(path => path.isFunctionExpression());
        // console.log(tt.container)

    }

}

function replace_DWV(path) {

    var node = path.node;

    if ( node.callee == undefined || node.callee.property == undefined) {
        return ;
    }

    if (node.callee.property.name === 'DWV') {
        let index = node.arguments[0].value;
        let value = AVvBE.DWV(index);
        path.replaceInline(types.valueToNode(value))
    }
};

function get_name_Array(path) {
    
    let node = path.node;
    let declarations = node.declarations;

    if (declarations == undefined || declarations.length != 3
        || declarations[0].init == undefined 
        || declarations[0].init.property == undefined 
        || declarations[0].init.property.name != 'DWV') 
        return ;
    
    let arg1 = declarations[0].id.name;
    let arg2 = declarations[2].id.name;
    nameArray.push(arg1, arg2);
};

function replace_name_array(path) {
    var node = path.node;
    // let callee = path.get('callee');
    
    if (node.callee == undefined || node.callee.name == undefined) {
        return ;
    }
    if (nameArray.indexOf(node.callee.name) == -1){
        return ;
    }

    let arg = node.arguments[0].value;
    var value = AVvBE.DWV(arg);
    path.replaceInline(types.valueToNode(value));
};

function del_DWV(path) {
    let node = path.node;
    let declarations = path.get('declarations');

    if (declarations == undefined || declarations.length != 3)
        return

    let init = declarations[0].node.init;

    try {
        let propertyName = declarations[0].node.init.property.name;
        if (propertyName != 'DWV') return

        let nextPath = path.getNextSibling();
        let nnextPath = nextPath.getNextSibling();

        if (nextPath.type == 'ExpressionStatement' & nnextPath.type == 'VariableDeclaration'){
            path.remove();
            nextPath.remove();
            nnextPath.remove();
        }  
    }
    catch (err) {
        return;
    }
    // let propertyName = declarations[0].node.init.property.name;
      
}


function replace_unicode(path) {
    var node = path.node;
    if (node.extra == undefined) {
        return;
    };

    delete node.extra
}

function replaceForSwitch(path) {
    // console.log('111');
    let node = path.node;
    let allPreSiblings = path.getAllPrevSiblings();
    if (allPreSiblings.length !== 1) return;
    // if (!types.isVariableDeclarator(allPreSiblings[0])) return;

    let lastSibling = path.getPrevSibling();
    let Testing = lastSibling.toString();
    let ttt = `while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;`;

    if (ttt === Testing) {
        console.log(Testing)
    }
    console.log(Testing);   
    // console.log(generator(lastSibling).code)
    let { declarations } = lastSibling.node;
    if (!declarations) return;
    let { id, init } = declarations[0];

    // 获取首元素名
    let arrName = id.name;
    // 获取控制流初始值
    try {
        var lValue = init.object.property.value;
        var rValue = init.property.value;    
    } catch (error) {
        return ;
    }
    let originValue = AVvBE.Egx()[lValue][rValue];

    // 获取for循环中的参数值
    let {test, body} = node;
    let switchBody = body.body;
    
    if (!types.isMemberExpression(test.right)) return;
    let forExpression = generator(test.right).code;
    let breakArg = eval(forExpression);

    // 获取所有case
    let caseList = switchBody[0].cases;
    let resultBody = [];

    // caseList.forEach(forCase => {
    //     let test = forCase.test;
    //     let caseValue = eval(generator(test));
        

    //     for 
        
    // });

    var returnCase = false;
    for (; originValue != breakArg; ){
        if (returnCase) break;
        for (var i=0; i<caseList.length; i++) {
            let test = generator(caseList[i].test).code;
            let caseValue = eval(test);

            if (originValue === caseValue) {
                let caseBody = caseList[i].consequent;
                if (types.isBreakStatement(caseBody[caseBody.length - 1]) &&
                types.isExpressionStatement(caseBody[caseBody.length - 2]) &&
                caseBody[caseBody.length - 2].expression.right.object.object.callee.object.name === 'AVvBE') {
                    let expression = generator(caseBody[caseBody.length - 2].expression.right).code;

                    let value = eval(expression);
                    originValue = value;
                    caseBody.pop();
                    caseBody.pop();
                }
                else if (types.isReturnStatement(caseBody[caseBody.length - 2])) {
                    returnCase = true;
                    caseBody.pop();
                }

                else if (types.isBreakStatement(caseBody[caseBody.length - 1])) {
                    caseBody.pop();
                }
    
                resultBody = resultBody.concat(caseBody);
                break;
            }
            // else break;
        }
    }

    path.replaceWithMultiple(resultBody);
    lastSibling.remove();
    // if (!types.isSwitchStatement(switchBody[0])) return;
    // if (!types.isIdentifier(switchBody[0].discriminant)) return;
    
}
var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast, opts = {jsescOption:{"minimal":true}});

fs.writeFile(finPath, finCode.code, (err)=>{});

