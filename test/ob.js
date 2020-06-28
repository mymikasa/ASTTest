const fs = require('fs');

const parser = require('@babel/parser');
const t = require('@babel/types');
const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const jscode = fs.readFileSync('./demo/demoob.js', {
    encoding: 'utf-8'
});
const visitor = {
    "Program"(path)
    {
        replace_call_to_string(path)
    },
}

function replace_call_to_string(path) {
    
}