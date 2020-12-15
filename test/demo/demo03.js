// const parser = require('@babel/parser');
// const t = require('@babel/types');

// const generator = require('@babel/generator').default;
// const traverse = require('@babel/traverse').default;

// var jscode = `
// function test(u) {
//     return function (n, r, t) {
//         return (t = (r = n.B(0),n).B(1),u)(r, t)
//     }
// }
// `
// t = (r = n.B(0),n).B(1), u;
// t = (r)

// const visitor = {
//     SequenceExpression: {
        
//         exit(path) {
//             let expressions = path.get('expressions');
//             // let tt = generator;

//             for (expression of expressions) {
//                 if (t.isAssignmentExpression(expression)) {
                    
//                 }
//                 else if(t.isIdentifier) {

//                 }
//             } 
//         }
//     }

// }
// var ast = parser.parse(jscode);
// traverse(ast, visitor);

// var finCode = generator(ast);
// console.log(finCode.code);



// function test(u) {
//   return function (n, r, t) {
//     (r = n.B(0), t = n.B(1))
//     return u(r, t);
//   };
// }

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

const jscode = `
function test(u){
    return function(n,r, t){
      return (t = (n, r = n.B(0)).B(1),u)(r, t);
    }
  }
`
const ast = parser.parse(jscode);

traverse(ast,{
    SequenceExpression: {
        exit(path){
            let expressions = path.get('expressions');
            let last_expression = expressions.pop();
            let statement = path.getStatementParent();
            if(statement){
                for(expression of expressions){
                    statement.insertBefore(t.ExpressionStatement(expression=expression.node));
                }
                path.replaceInline(last_expression);
            }
        }
    }
});

const code = generator(ast).code;

console.log(code);