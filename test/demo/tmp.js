const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;


// 
const jscode = `
function test(u){
    return function(n,r, t){
        return (t = (r = n.B(0),n).B(1),u)(r, t);
    }
  }
`
const ast = parser.parse(jscode);

const visitor = {
    SequenceExpression: {
        exit(path) {
            let expressions = path.get('expressions');
            let lastExpression = expressions.pop();
            let parentPath = path.findParent((path) => path.isReturnStatement());

            if (parentPath) {
                for (expression of expressions) {
                    parentPath.insertBefore(t.ExpressionStatement(expression=expression.node));
                }
                path.replaceWith(lastExpression);
            }
        }
    }
};

traverse(ast, visitor);



// traverse(ast,{
//     SequenceExpression: {
//         exit(path){
//             console.log(path.toString());
//             let expressions = path.get('expressions');
//             let last_expression = expressions.pop();
//             let statement = path.getStatementParent();
//             if(statement){
//                 // for(expression of expressions){
//                 //     statement.insertBefore(t.ExpressionStatement(expression=expression.node));
//                 // }
//                 path.replaceWith(last_expression);
//                 console.log(path.toString());
//             }
//         }
//     }
// });

const code = generator(ast).code;

console.log(code);