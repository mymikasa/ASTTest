const fs = require('fs');
const dirpath = require("path");

const parser = require('@babel/parser');
const t = require('@babel/types');
const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;


var filePath = dirpath.join(dirpath.resolve(__dirname, '.'), 'demo/demoob.js');
// console.log(filePath);
var jscode = fs.readFileSync(filePath, {
    encoding: "utf-8"
});
// console.log(jscode);
const visitor = {
    "Program"(path)
    {
        replace_call_to_string(path);
    },
}


function replace_call_to_string(path) {
    let arr_path = path.get('body.0');
    let code = arr_path.toString();
    let shift_path = path.get('body.1');
    // console.log(shift_path.toString());
    code  += '!' + shift_path.toString();
    let call_path  = path.get('body.2');
    code  += call_path.toString();
    let funcName = call_path.get('declarations.0.id').toString();
    eval(code);

    let can_be_delete = true;

    path.traverse({
        CallExpression: function(_path) {
            let callee = _path.get('callee');
            if (callee.toString() != funcName) {
                return ;
            }

            try {
                let value = eval(_path.toString());
                _path.replaceWith(t.valueToNode(value));
            }
            catch(e) {
                can_be_delete = false;
            }
        },
    });

    for (let i = 0; can_be_delete && i < 3; i++) {
        path.get('body.0').remove();
    }
    
};

let ast = parser.parse(jscode);
traverse(ast, visitor);
var finCode = generator(ast);
console.log(finCode.code)