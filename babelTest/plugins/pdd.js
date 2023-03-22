const types = require('@babel/types');
const dirpath = require("path");
const parser = require('@babel/parser');

const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const fs = require('fs');
const { type } = require('os');

var filePath = dirpath.join(dirpath.resolve(__dirname, '../'), 'encryption/pddSource.js');
var finPath = dirpath.join(dirpath.resolve(__dirname, '../'), 'decryption/pddSource.js');
console.log(filePath);
var jscode = fs.readFileSync(filePath, {
    encoding: "utf-8"
});

var x = ["KsOfdjLCn0bChcOGYA==","w7JDw4USeA==","EcODfcK8w7PCqMO0Wg==","woLCgcKNwrTDhk4wRA==","wphAwqHDj8KJDw==","OcKyXA==","LVzDiMKVw5rClcKMWhgqwpo=","wrHCvk7DhDPDnmjDsGs=","w4V2Pw==","UMOxwrtMwopc","ScO1w44YPD3Cr8KRMG4=","wpHCj8KQwqzDimI=","wpBqQnMqCMOkL0TDusKswrgmw6nCt8Ks","wqbCpE/DgirDiW/Dqg==","BMOaT8Khw63CicO/VEPDh8KT","woYYw61iwpnDr8K0NsO5wpQ=","wq0IMMKIJAA=","RwnCoMK3","SH8XRQ==","w5l2Kx9ZwrbDjGE=","Jm0SaxJIGsOuZg==","wo9NwrrDjcKCD3Q=","Q8O5woAZVMOBWA==","HzF/AivDqcO9VsKN","w6VFwqVAwpfCuA==","NMKyRQMmw4w=","I1LDlMK0w5fCk8Kh","UsOlwqZA","eRTCtEM=","w5F4PB8=","LMOSYDjClUPCv8OMdA==","w4HCnMOLwrvCkXtuTMO9","Nk3DisKYw4I=","w6Y2bHM=","IsKlOcKXB8KrSMK0X8K9wq9k","Y2zCqkA=","K1zDkMKYw5HCkcK9Qw8=","w4UEbFDClA==","wqtUYXIz","wrsiTiNTLQ==","GMOERSnCvg==","w5E9YVjChA==","wqY3w4Vxwrg=","GMORcTDCksKGL8KSw5k=","c0PCtlUv","w7gNSELCqQ==","wqQ4YBNF","w4vClCQxdA==","w4ZAKTp1","wop8bA44","woY5w57Dv8OA","w6t/wqZPIg==","wqIcw75kwoc=","wrLCunXDlCQ=","D8K5JMKZHMOocMKmXsKw","FsOSVAXCvQ==","wo/Crl/DlmfDo2fDuF/DlEgUw7nDog==","Zx7CjMOKwpg=","wplvT0QwBMOkPg==","w73Cq8Oqw7TDhw==","w7daLjlG","wqwmw7HDisOX","OsKuL8KcAMKhVsKiWQ==","XlfCsEc+","UEAgdcOt","wpzCs8KLwozDqQ==","wovCmMOOcFTCq3PDmyUdbg==","wr00w4tPwpo=","w6TDksOUNk8=","KkjDksKUw4TCp8KgSAks","A8OmQxnCnA==","w5/CtcOGw4PDmA==","w6vCrDoubMOdQG7Ci8Oewqw=","w6dhwrRxAw==","NMOTCcKewqliw5Uww7zDug==","fVnCiW/CjA==","MWUTYjFUGsOtYsOqwq8=","wpQOajt7","w57Dj8OIDVA=","w5PDikbDuMKRw7bDnsK1","SsOYwqvDrcOt","PzvDnlHCuA==","wpjCqsOZwoRscg==","E102dCw=","AV4vVxY=","MsKwQhQ=","FsKEYhoK","RgnCkcKRfg==","RBbCs8K0Yw==","ZlTCl183","AsKGJ8KCGA==","w7vDn0zDvcKNw6vDh8K9wok=","YyPCvHPCvQ==","UwnCv8KCeMOPwoFEQhDCvwE6","w4B2w6ULUA==","w6Zrwo1lwrk=","wo3ColN3wpnCrXbCrk3DucK0w5x/AsKnJMKnMMK9HT9ww68=","YcOMwqAGdw==","AyrDiErClQ==","b8OWbMKwAiPCmAFc","WMO5w5IK","w6xhw6ApRQ==","InYQeg5IAsOzcw==","wrwCLMKJ","wpULw7xnwpTDm8K4","b8O2woZiwok=","P0ozVjk=","HcONeiHCm8KbOMKHw5g=","wqwOMsKBIA0e","csKGMDdr","wqU7ViZfMcKh","OMKWbSId","RwrCp8KkZMOVwp0=","ZMOKwqTDlcO6","TsOxwrtPwpBQw5vCtsOQ","T8Oewq8+YA==","Vw5UwrbDv8KG","ejzCrMOcwr4=","VWjCsEEfw6LCmnQ=","b2Mie8Ov","csKPBxh1w518w6DCqQ==","amLCukAIw77ClnzCoA==","wpxdX0MZ","wogRw7/DpMOK","w4g/anTCszo=","wrDCo8KZwoDDiA==","w6FIwpZoAQ==","BcOeZhrCg8KBEcKFw5JjIcOTFMOS","wrZfRVsT","IsO8E8KZwp8=","wpTCoMOoQ2o=","wrw6eiZk","N2cT","woIaw4vDgMOK","w6E8Vn/Cnw==","w6/DkmjDtMKe","w6vDhsKjwrzClg==","VcOPTcKgLA==","wofChcObe0HChnLDpi0AeUQfw5I=","cxLCm1rChA==","JMK1QgYz","SmfClXM2","wpQew6BiwoE=","wqY4TiQ=","woJ+Sl8o","w6bDlUfDtw==","wpkSw6LDi8O5w5jDtw==","UMO1wqVEwoRSw5k=","alnCu3rCmg==","w6fDnsKvwqY=","DcONQMKsw63CpMOfS0HDgcKT","PcKqLsKT","e8OgwoHDvMOu","SWMbVw==","V8KBDRlrw5ZQw6zCvsOdwps=","J8K8SAs=","UMO0wooXdA==","w4I5cW8=","wrhKdRk=","b8OFYMKvIw==","PsKzQhQ=","HADDrWM=","UsOxwrZDwqs=","BQ/Dp3w=","wqrCvsOcwok=","wpnCrF1dwqI=","wo3Cg8OTYQ==","V2zCvU4=","woIZw7vDkw==","w7TCuC0g","PCPDpsObwog=","S8O+wrxc","cwPCpMKqbsOewqFbSgHCuBo1bcKoTsO1LwApFU4=","bMKDw4PDhQ==","w7zDm03DssKx","VsKOCgk=","PkhbHsKRRidmw4rDq8OrGmPDkwU0ew==","woFvRV0=","HADDrWPCgQ==","JSzDrMOE","w7lBwqhM","w7rDoMODFks=","fsOywofDpcOhOG/Ctlc=","wpVWSSc=","T8KBABZJ","MsOIFMKP","NVzDhcKa","worCjMOUennCgHnDnSkcf3Mcw5E=","ZCzCm8OQwoLDmMOkRT8Iw45qKwDCiA==","bMKDw4PDhcO5","N8OdajLCrEnCvsOGe287wqVaw4A=","wp9vSFkDHsO+NHrDssK4wqkcw6HCog==","MMOSbSk=","UsOxwrZD","w5x3IQo=","e8OlwobDiMOVLG/Cqnwyw4w=","w7zDm03Dsg==","SsOxw58FFw==","E0NEAw==","w4dpwpxaO1TDoA==","eizClsOU","wqrCvsOcwolH","U8O+w5UaECHCncKX","wrQhL8KuNQ==","worCoVdVwoc=","w6Y2XVHClw==","VGIHQMOJSgPDo8Kqwos=","B8O1eBbCgA==","b8OxwpBiwqw=","XgjCu8K3SMONwotHVw==","JlHDg8KQw4TCs8KoTxUh","w6NNwoZOPQ==","w7rCosOkw4LDuMKLViPDr8Kww6DDkcK1w7bCoA==","w6obV1rCtg==","w5vDgsOvDG8=","woZYYHg7","YlnCrW4J","wqDCpEjDjg==","DMKHAsK5Gg==","w63CrsO1w5jDucKCbDjDmg==","DjR3Cj3Ds8OocsKZ","w73Dl8OmM2I=","DGXDg8KUw7o=","a8KnNh9V","wqTCuUPDmgTDhGDDrE/DmF4U","WMOUwqTDn8Ot","wp7CuMOjUGU=","w5BhOwh7","FcOZR8KKw6s=","asOKcMKsBDHClQ==","wpXCg8OJfn4=","ZCHCt8OawpA=","ZcO4wrPDo8O5","wq96ZD/DhA==","agR7wprDuw==","U8KqMj9P","WgzCiWHCow==","UwPCtMKvbMOPwos=","wqvCqcOUbH8=","V8Oxw4w=","woXClcOyTVQ=","wrx0alM0","wr7DkcKp","QcOlwoFlwpc=","w7vCo8Okw5jDscKL","wo0+BMKlDA==","w6TCmMOew7LDlg==","T8KBABY=","acONwowZdg==","bsO5wpHDocO2","blXCu0A2","wq0bLsKENQ==","c1g0a8Os","w7lVwqJlwok=","TWLCt0s=","w4R3OxV1","csKOw6LDi8O6","ccOdUsKwNA==","CsOuZxjCmw==","w4fDlW/DkcKU","fhbCn1LCqA==","wqwBw41Dwp4=","IAjDlMOywo4=","B8K9GcKuNA==","wqQzw7zDnsOB","wpHCgcKTwqs=","DcO7UT/CoQ==","w6hYwoN/wpE=","RzfCucOawrU=","wqteQj/DmQ==","wo9YQyI=","w47DqMOHDGg=","cF7CmU3CjA==","w7nDlErDvMKZw6vDn8K9wp8=","DSbDu1DCgg==","w6xUMgl9","w4rDmcKhwqPCjw==","w7vDl0fDuMKl","Dy1+DjrDosOaesKbwr7CmcKGw7VqU0s=","fcKlw5XDtsO6","wqvCrcKFwrDDsw==","YAjCskPCisO+wodNw6A=","acKSw4TDj8ODCTHDu8KtwpcrSV7Dq8OcwoI=","wpnCv1FCwoPCrWDCs0k=","w6fCtSsqbMOWRGTChMOT","SsOiw5MaNjvCgsKIOA==","AQTDvXvCrsOPw77DssOawpsH","wrA2w79Twq0=","dcOIwqZwwr0=","wqUlTDVZK8KrM3k=","woYSw6HDlMO5w5zDtwx+w6p5w5NFUhY=","OsK5JsKREQ==","KX7DqcK0w7o=","TcOiw5cHOg==","wrbCnMOwwqdF","esOKdQ==","woZkUjfDtFgyRg==","w6rDlcKwwrfCjhXDhGPDqV3CgQ==","wpsFw73Dk8O3w4/Dqyx6","dETCkUDCuhjCjw==","wp8hWgBc","RGHCt0YR","SjwDJcOo","wpDCqcOGwqNj","w4HDnnvDg8Kz","UcOnwrREwolew4s=","KMKzPcKXAMK8Uw==","OMK7KcKZBsKtc8KiWcKqwrhiwoPDqmJX"]

var l = function t(e, n) {
    var r, a = x[e -= 0];
    void 0 === t.aLLsVD && ((r = function() {
        var t;
        try {
            t = Function('return (function() {}.constructor("return this")( ));')()
        } catch (e) {
            t = window
        }
        return t
    }()).atob || (r.atob = function(t) {
        for (var e, n, r = String(t).replace(/=+$/, ""), a = 0, i = 0, o = ""; n = r.charAt(i++); ~n && (e = a % 4 ? 64 * e + n : n,
        a++ % 4) ? o += String.fromCharCode(255 & e >> (-2 * a & 6)) : 0)
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
        return o
    }
    ),
    t.xrUmOe = function(t, e) {
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
    t.KUKVOf = {},
    t.aLLsVD = !0);
    var i = t.KUKVOf[e];
    return void 0 === i ? (void 0 === t.hpDhXX && (t.hpDhXX = !0),
    a = t.xrUmOe(a, n),
    t.KUKVOf[e] = a) : a = i,
    a
}

const visitor = {
    CallExpression: {
        enter: [
            replace_l,
        ]
    }

}

function replace_l(path){
    var node = path.node;

    if ( node.callee == undefined || node.callee.property != undefined) {
        return ;
    }

    if (node.callee.name === 'l') {
        let left = node.arguments[0].value;
        let right = node.arguments[1].value;
        let value = l(left, right);
        path.replaceInline(types.valueToNode(value))
    }
}

var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast, opts = {jsescOption:{"minimal":true}});

fs.writeFile(finPath, finCode.code, (err)=>{});