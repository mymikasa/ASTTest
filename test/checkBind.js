const parser = require('@babel/parser');
const t = require('@babel/types');
const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const code = ' \
function square(n, a, b) { \
    return n * n; \
  } \
'

const visitor = {
    FunctionDeclaration(path) {
        if (path.scope.hasBinding('n')) {
            console.log('ttt');
        };

        if (path.scope.hasOwnBinding('n')){
            console.log('rrr');
        }
    }
};

var astDemo = parser.parse(code);
traverse(astDemo, visitor);
var finCode = generator(astDemo);
