const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require("@babel/types");
const generate = require("@babel/generator").default;
const fs = require("fs");

var jscode  = "!function(a, b){c=a|b;}(111,222);"


const vistor = {
    ""
}

function traverse_all_unaryExpression(ast) {
    traverse(ast, {
        UnaryExpression: {
            enter: [visitor],
        }
    })
}


let ast = parse(jscode);
traverse_all_unaryExpression(ast);