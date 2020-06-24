const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;


let code = 'var a = 123;';
const visitor = 
{
  VariableDeclaration(path)
  {
    const operator = '='; //赋值语句的运算符是 =
    const left     = t.Identifier('b'); //新建赋值语句左边的节点;
    const right    = t.NumericLiteral(456);//新建赋值语句右边的节点;
    
    const new_assign  = t.AssignmentExpression(operator,left,right) //构造一个赋值语句节点
    const new_express = t.ExpressionStatement(new_assign); //再构造成表达式语句
    path.insertAfter(new_express); //在变量声明语句后面插入
  }
}

let ast = parser.parse(code);
traverse(ast, visitor);
let finCode = generator(ast);
console.log(code)
console.log(finCode.code);