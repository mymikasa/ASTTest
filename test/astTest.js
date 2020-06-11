const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require("@babel/types");
const generate = require("@babel/generator").default;
const fs = require("fs");

let code = "function square(n) {return n * n;}"


const MyVisitor = {
    Identifier() {
      console.log("Called!");
    }
  };

let ast = parse(code);
traverse(ast, MyVisitor)



