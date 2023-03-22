function hexRestorte(babel) {
    const { types: t, template } = babel;
    const visitor = {
        // "StringLiteral"(path) {
        //     let {value, extra, type} = path.node;
        //     console.log(extra);
        //     if (typeof extra != 'undefined') {
        //         extra.raw = '"' + value + '"';
        //     }
            
        // },
        // "NumericLiteral"(path) {
        //     let {value, extra, type} = path.node
        //     // console.log(value);
        //     extra.raw =  value ;
        // }
        "StringLiteral|NumericLiteral"(path) {
            delete path.node.extra
        }
    };
        
    return {visitor};
  }
  
module.exports = hexRestorte;