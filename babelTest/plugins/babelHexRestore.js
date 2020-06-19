function hexRestorte(babel) {
    const { types: t, template } = babel;
    const visitor = {
        "StringLiteral"(path) {
            let {value, extra, type} = path.node
            // console.log(value);
            extra.raw = '"' + value + '"';
        },
        "NumericLiteral"(path) {
            let {value, extra, type} = path.node
            // console.log(value);
            extra.raw =  value ;
        }
    };
    return {visitor};
  }
  
module.exports = hexRestorte;