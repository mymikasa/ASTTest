const types = require('@babel/types');
const dirpath = require("path");
const parser = require('@babel/parser');

const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const fs = require('fs');
const { type } = require('os');

var filePath = dirpath.join(dirpath.resolve(__dirname, '../'), 'encryption/c.js');
var finPath = dirpath.join(dirpath.resolve(__dirname, '../'), 'decryption/c.js');
console.log(filePath);
var jscode = fs.readFileSync(filePath, {
    encoding: "utf-8"
});

var c = ["worCqHk0w4NXwoYzOHjDhBAmE8Kz", "OBw+w5hwwpjCtcO7IQ==", "TyIV", "bEXCpsOOwqzDlw==", "wrjDjFZ2wpw=", "SMOaScKXLMOmwpw0wpEIwqs=", "wrHDogpQNxLCm20CdMOXw4cqGmXDug==", "wrTDqQ1gLBLCm20=", "L3k5QxrDlVVvDg==", "dMOFw5ISw58jwoM=", "X8OFAMO3FE/DnA==", "wrXDqgt4JBnCgVAq", "w5xqw4gVKhg=", "XBYlw6h+bg==", "GBA7woRGwpXDgQ==", "VgDCgVg=", "RwPCi8ON", "VgzCm8OJdhR7Tg8=", "w4xFbcKo", "wqzDgW7DvVM=", "w7XDrsO1", "S3ATcjI=", "VcOHAMOm", "BsOZa25WwoxQw65tw5bDnQ==", "UMOaRMKY", "JMK3wqTChMOt", "wo7DvH3DjA==", "McO7w49Iwr7Do8KaUXnCqMO/", "w7FTw4nDs8O1Jg==", "w6MawptZ", "w7hFesKmCQ==", "ScOVTsKH", "T8K7GyVyw4BgwrdmwpJX", "cHUuw6U=", "wpfDs3fDk0o=", "HsOGwoVk", "NHMcwqnCkzx5w63Cqj8v", "B8OJwo97", "f8Kew4nDgMKX", "bMKAJSt7", "b8KdGis=", "SsOIccKHLg==", "ayvDqCnDqQ==", "w5spw7xpwpXDoGoeFg==", "woV5wrzCu3g=", "w4Ulw7t1wpzDqA==", "wqLCsF0Aw68=", "TRDCi0Ut", "wqhsOy/DsA==", "bRfCj8O2Yw==", "w59hw4sdKwMRREM1wp3DpA==", "UhQ4fgk=", "w6hdw47Dp8O1JQ54wpYq", "TxLCpsOqUg==", "H18ZawbDlEdnLcKXBm8yQQ==", "w5V3Bl4a", "wqvDh27Dn0E=", "RFfClcOuwoQ=", "e1XChMOlwoQ=", "EmcCwpfCjA==", "w7EvworCqsKM", "e8OZw6Ixw7M=", "DsOAwoDCpA==", "wp7Cpnkq", "akxrPg==", "w7VTw5jDv8Oe", "wp7Cpnkqw6A=", "Dh4qwqpp", "wqDDpw1+Dw==", "w4d8wpQ=", "csOmLcOXJX7DinE=", "w6xbwoc7wqs=", "aU56OljDoA==", "ZBDDoS7Dow==", "QQLDl3Bfw7vCn8OKwpw=", "w5BGwrzDtRQ=", "RwjDm3ZK", "aDzCl2kK", "wrXDlCIow4I=", "w7Vxw5XDk8O1", "w5lhw48G", "w6lVHmQdwp0Lew==", "DlHCvzTDvykewp1N", "w4F+wocDwo7ChcKsZnbDsA==", "Txgow6A=", "w4Buw4UZEA==", "I8O/wppXJsK+wos=", "Y8KLAzBnw4XDgQ=="];

var s = function t(e, n) {
    var r = c[e -= 0];
    void 0 === t.tasYjU && (function() {
        var t;
        try {
            t = Function('return (function() {}.constructor("return this")( ));')()
        } catch (e) {
            t = window
        }
        t.atob || (t.atob = function(t) {
            for (var e, n, r = String(t).replace(/=+$/, ""), a = 0, i = 0, o = ""; n = r.charAt(i++); ~n && (e = a % 4 ? 64 * e + n : n,
            a++ % 4) ? o += String.fromCharCode(255 & e >> (-2 * a & 6)) : 0)
                n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
            return o
        }
        )
    }(),
    t.DuPSzy = function(t, e) {
        for (var n, r = [], a = 0, i = "", o = "", c = 0, s = (t = atob(t)).length; c < s; c++)
            o += "%" + ("00" + t.charCodeAt(c).toString(16)).slice(-2);
        t = decodeURIComponent(o);
        for (var u = 0; u < 256; u++)
            r[u] = u;
        for (u = 0; u < 256; u++)
            a = (a + r[u] + e.charCodeAt(u % e.length)) % 256,
            n = r[u],
            r[u] = r[a],
            r[a] = n;
        u = 0,
        a = 0;
        for (var f = 0; f < t.length; f++)
            a = (a + r[u = (u + 1) % 256]) % 256,
            n = r[u],
            r[u] = r[a],
            r[a] = n,
            i += String.fromCharCode(t.charCodeAt(f) ^ r[(r[u] + r[a]) % 256]);
        return i
    }
    ,
    t.JdsPIo = {},
    t.tasYjU = !0);
    var a = t.JdsPIo[e];
    return void 0 === a ? (void 0 === t.QsqjJN && (t.QsqjJN = !0),
    r = t.DuPSzy(r, n),
    t.JdsPIo[e] = r) : r = a,
    r
}
// console.log(s("0x12", "THQC"))

const visitor = {
    CallExpression: {
        enter: [
            replace_s,
        ]
    }

}

function replace_s(path){
    var node = path.node;

    if ( node.callee == undefined || node.callee.property != undefined) {
        return ;
    }

    if (node.callee.name === 's') {
        let left = node.arguments[0].value;
        let right = node.arguments[1].value;
        let value = s(left, right);
        path.replaceInline(types.valueToNode(value))
    }
}

var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast, opts = {jsescOption:{"minimal":true}});

fs.writeFile(finPath, finCode.code, (err)=>{});