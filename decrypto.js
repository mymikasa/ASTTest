
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require('fs');

var jscode = fs.readFileSync("./test.js", {
    encoding: "utf-8"
});