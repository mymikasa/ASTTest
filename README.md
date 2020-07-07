# ASTTest
一个练习AST的个人项目

src目录下是未经过转换的源代码
lib是目录存放的是转换之后的代码

转换命令`./node_modules/.bin/babel src/index.js --out-dir lib`,
或者`./node_modules/.bin/babel --plugins ./plugins/babelHexRestore.js index.js --out-dir lib`