function babelTese(babel) {
    // insertBefore 在节点前插入， insertAfter 在节点后插入
    const { types: t, template } = babel;
    const visitor = {
        VariableDeclarator(path)
        {
            const operator = '=';
            const left = t.Identifier('b');
            const right = t.NumericLiteral(456);
            path.insertBefore(t.Identifier('b'));
            
        }
    };
        
    return {visitor};
  }
  
module.exports = babelTese;