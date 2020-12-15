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


const funcName = ['z', 'L', 'Z'];

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

function Z(I, l) {
    I += l;
    return I.toString(36)
}

const visitor = {
    CallExpression: {
        enter: [
            replace_z,
        ]
    },

};


function findScopeVar(path, name) {
    let scope = path.scope;

    if(name in scope.bindings) {
        return true;
    }

    return false;
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


                let tt = path.find((path) => findScopeVar(path, arguments[i].name));

                // if (path.scope.hasBinding(arguments[i].name)) {
                let argName = arguments[i].name;
                var val_path = tt.scope.bindings[argName].path;

                if (val_path.node.init == undefined) {
                    return;
                }
                var value = val_path.node.init.value;

                let valNode = types.NumericLiteral(value);
                arguments[i] = valNode;

                // console.log(value);
                // console.log(tt.toString());
                // tt.replaceWith()
                
            }
        }
        let finVal = eval(path.toString());
        path.replaceWith(types.valueToNode(finVal));
        // let tt = path.findParent(path => path.isFunctionExpression());
        // console.log(tt.container)

    }

}


var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast, opts = {jsescOption:{"minimal":true}});

fs.writeFile(finPath, finCode.code, (err)=>{});

