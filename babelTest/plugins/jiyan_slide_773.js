const types = require('@babel/types');
const dirpath = require("path");
const parser = require('@babel/parser');

const generator = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const fs = require('fs');
const { type } = require('os');

var filePath = dirpath.join(dirpath.resolve(__dirname, '../'), 'encryption/jiyan_slide_7_7_3.js');
var finPath = dirpath.join(dirpath.resolve(__dirname, '../'), 'decryption/jiyan_slide_7_7_3.js');
console.log(filePath);
var jscode = fs.readFileSync(filePath, {
    encoding: "utf-8"
});

KBBji.$_AN = function() {
    var $_DBFGf = 2;
    for (; $_DBFGf !== 1; ) {
        switch ($_DBFGf) {
        case 2:
            return {
                $_DBFHG: function($_DBFIT) {
                    var $_DBFJq = 2;
                    for (; $_DBFJq !== 14; ) {
                        switch ($_DBFJq) {
                        case 5:
                            $_DBFJq = $_DBGA_ < $_DBGBt.length ? 4 : 7;
                            break;
                        case 2:
                            var $_DBGCn = ''
                              , $_DBGBt = decodeURI('6/#%22R%0F-$#%19F%033-&$Q81%20)#%5B%0B%1D%144%22F%25%22-+%05U%05(%0455%5B%14%1D%E5%92%86%E5%92%A1%EF%BC%99%E6%80%9E%E7%88%8F%E5%91%80%E4%BB%87%E6%8A%BB%E5%9A%B9%14Uc%E7%A6%93%E5%91%89%E9%86%8A%E8%AF%A18%E6%8A%95%E5%8B%A9%E5%B6%A1%E8%BF%BE%E6%BB%A5%E5%9C%B1%E5%AF%8F%E6%89%91%E4%B9%8D%E6%97%BE%E6%8B%88%E5%9A%98%1D44%22F9&35(F87.%01.L%03\'%1Fqw%008mn24Q%14%20%20++V%07%20*h%19%0E84(#3%5C8g%1E4%13M%1F/$%19r%04C%1D).#P%03-%1F%E8%AE%B0%E5%84%B4%E9%97%99%E9%AB%AA%E8%AE%82%E9%86%8C%E8%AE%92%19V%09,-%22&Z863+o%168\'3&0%7D%0B%22&%22%19R%13-%223.%5B%08%1De%18%0Eq%0F%1D%E7%95%B0%E6%9F%86%E9%AB%8B%E6%8F%A4%E4%BF%BD%E6%8B%83%E6%9D%AE%E6%95%A8%E6%8D%86j%E5%84%95%E9%96%AE%E9%AB%8D%E8%AE%86%19%109%0B%04%16%19%5C%070%0E0)d%14,1%225@%1F%1D&%223%7D%0B%22&%22%03U%12%22%1F.*S8$$3%0A%5D%0865%224j%131-o%19%1D8&35(F9rqw%19%E4%BC%94%E7%BA%BF!()#%7B%08%E6%8F%A6%E5%8E%A2%E7%9B%83%E5%8E%85%E6%95%84%E6%9D%AF%E8%AE%AC%EF%BD%9B%E5%8E%AD%E6%8F%A2%E5%8F%A3%0F\'%E9%81%88%E6%8A%AE%E5%98%AF%E5%92%B8%22%0C%0C%E5%84%84%E7%B5%A7%EF%BC%B8%E5%B8%90%E4%B9%97%E9%9D%81%E4%BE%9A%E8%AE%86%E5%85%82%E5%AC%BE%E5%9D%AB%E4%BB%8F%E9%A0%B2%E9%9C%A5%E4%B8%998q%25%19.Z%1665%19%22F%14,3%18$%5B%02&%1F#.B8,#-%22W%12%1D&%223p%077$%194X%0F%20$%194@%07744%19%109%0B%09%03%19S%037%072+X?&%205%19S%037%15.*Q8g%1E%0E%03m8ya%19$U%085%204%19s%03&5%224@F1$62%5D%14&2g&%14%11*/#(CF4(3/%14%07c%25($A%0B&/3%19G%121()%20j%0E&(%20/@8g%1E%0F%0E%608%E5%8B%A3%E8%BC%BC%E4%B9%AAi%1AH%1D%06%22%22@%0305%025F%091%1Fg%19%109%0A%031%19W%14&%203%22q%0A&,%22)@8$$3%04%5B%087$?3j%12:1%22%19%109%0A%08,%19%109%0B%061%19B%07/4%22%08R8f%1Fw%19P%037%20.+j%086,%25%22F8%1D2%22$%14%E7%A6%B4%E7%9B%87%E9%81%9E%E5%BB%A1%E8%B7%82%E8%BF%B3F0%22(5QCc%E7%9B%85%E7%95%AF%E6%89%B0j%153-.3j%0313(5j%09--(&P8g%1E%0F%0DA8343%0EY%07$$%03&@%07%1D%25&3U%5C*,&%20QI4$%257%0F%04%222%22q%00J%16*+%00f%0Fw%00%06%06v%3E%11%14%0D%16b%0A%02u%13%04q\'%02%00%061u3%02%00%02%05%0C%11%02(%0A0u%01%10%12%093G%03l%22%1F-L%1F%00%02*5m(%14%110*%7C4%0Bx-0y\'%1D%E4%BD%A1%E7%BA%9E&D%16&/#%13%5B%E6%8F%83%E5%8E%A0%E7%9B%85%E5%8E%85%E6%94%B7%E6%9C%BD%E8%AE%89%EF%BD%99%E5%8E%AB%E6%8F%A2%E5%8E%90%5D%02%E9%81%8A%E6%8A%A8%E5%98%AF%E5%93%8Bp)%0E%E5%84%82%E7%B5%A7%EF%BD%8B%E5%B9%82%E4%B9%B2%E9%9D%83%E4%BE%9C%E8%AE%86%E5%84%B1%E5%AD%AC%E5%9D%8E%E4%BB%8D%E9%A0%B4%E9%9C%A5%E4%B9%AAj%E5%B9%88%E5%8B%AA%E5%8E%8C%E9%A7%8F%19Y%15$%1F7?jCc%1FenjK%1D1(4@8\'.$2Y%03-5%19%20Q%12%0B.25G833(3%5B%05,-%19g%198g%1E%0E%04N8,/%225F%091%1F%E8%A6%81%E8%A6%8E%E9%9A%A8%E7%A3%AB%1D%E6%8A%97%E5%8B%AF%E6%BA%96%E5%9D%A3%E5%B1%A0%E6%83%AF%E6%B4%AF%E5%9A%B9%E5%82%88%E6%AD%97%E7%A0%88%E6%8A%BF%E5%91%89%194F%05%1De%18%0Fr%1E%1D&%223y%09-5/%19P%077%20%19ij%01&5%14%22W%09-%254%19R%14%22&*%22Z%12%1D$?7%5B%1472%19ck/%04/%19ck/%0B;%19%E5%89%B0%E6%96%84%E9%AB%AA%E8%AE%82%1Fc%18%7D\'%14%1Fc%18~#%09%1F$/U%14%025%19%22F%14,3%18v%04W%1D%7C%19%22F%14,3%18v%05S%1D$55%5B%14%1Cpwsj%E9%AB%AA%E8%AE%82%E7%9B%85-4%E5%9C%84%E5%9C%A6%E4%B9%8E%E5%AC%99%E5%9D%AF%19Q%141.5%18%05Vz%1F%225F%091%1Evw%078%224#.%5B8&35(F9rpt%19%1B%14&\'5%22G%0Em1/7%E8%AF%83%E6%B0%A4%E6%8B%A6%E9%95%98%EF%BD%9Dv%1A%E8%AE%91%E4%BE%9E%E6%8D%80%E7%BC%96%E7%BA%9B%E7%95%B1%E9%81%BC%EF%BD%98si%E5%89%B0%E6%96%84%E6%AD%87%E6%94%B3%E6%9D%AD%E8%BB%AC%E6%9D%8E%E9%99%A4%E5%89%90%EF%BD%8Bpw%E6%AD%A6%E4%BB%91%E5%87%A3%EF%BD%8A%EF%BD%8D%E8%B7%82%E8%BE%80%E9%99%A4%E5%89%90%E8%AE%B4%E5%89%B6%E6%97%B7%E6%94%B3%E4%B8%9E%E9%A0%93%E9%9C%A1%E5%87%8C%E8%AE%92%19%E7%94%9C%E6%89%91%E5%9A%9D%E8%B1%82%E5%86%BA%E6%94%B7%E6%89%93%E8%A0%AA%E5%BD%81%E5%B9%B9%19%22F%14,3%18v%04S%1D%0F%223C%091*g!U%0F/45%22jI$$3iD%0E3%E8%AE%B6%E6%B0%85%E6%8B%A2%E9%94%AD%EF%BD%BCro%E8%AE%B0%E4%BE%9A%E6%8C%B5%E7%BC%B7%E7%BA%9F%E7%94%84%E9%81%9D%EF%BD%9C%06H%E6%A2%83%E6%9E%A4%E5%89%9A%E5%A6%8C%E5%8C%A2%E6%96%90%E4%BD%A3%E5%84%A4%E7%9B%83%E9%84%8A%E7%BD%9A%E5%8E%A4%E6%94%B3&3%E5%93%8BW%0E%22-+%22Z%01&%1F%225F%091%1Evv%038$5%194@%1F/$%194@%1F/$4/Q%037%1F35U%080(3.%5B%08%1D&%22%22@%0305%18%19Q%141.5%18%05Wu%1Fc%18~%22%19%1F+&Z%01%1D$55%5B%14%1Cpvuj%E7%B7%94%E7%B4%A2%E4%B9%8C%E7%B4%A1%E5%8B%9Cj%0313(5kWss%195%5B%13-%25%19+%5D%08(%1F%E9%AB%8B%E8%AE%86%E5%9B%8A%E7%88%A1%E5%8B%A3%E8%BC%BC%E5%A5%B6%E8%B5%A2%EF%BC%AEWm%E8%AE%B6%E4%BE%9A%E6%8D%86%E7%BD%A5%E7%BA%BA%E7%94%86%E9%81%9B%EF%BD%9Cu%1A%E8%AE%91%E8%80%97%E7%B2%BA%E6%9F%86%E9%AB%8B%E5%AE%AC%E7%BC%B7%E5%AF%A1%E6%9D%8C%19%E7%9B%A9%E8%82%90%E5%8B%86%E8%BC%BE%E5%A5%B0%E8%B5%A2%EF%BD%9D%05H%E8%AE%B4%E4%BE%9C%E6%8D%86%E7%BC%96%E7%BB%A8%E7%94%A3%E9%81%99%EF%BD%9Aui%E8%AF%83%E8%80%B2%E7%B2%B8%E6%9F%80%E9%AB%8B%E5%AF%9F%E7%BD%A5%E5%AF%84%E6%9D%8E%1F%225F%091%1Evv%058%E7%BC%92%E7%BA%9D%E4%B9%8A%E7%BA%9E%E5%8A%AF8%16%15%01j%0C8+*%19%00Q%03%04%15%19%E6%96%A7%E6%AD%90%E7%B0%9D%E9%95%9A%E8%AE%AE%E7%B0%BC%E5%9F%8Cj%0313(5kWsw%19%E9%84%8A%E7%BD%9A%E9%8D%89%E8%AB%A7%1F&)%5B%08:,(2G801+.W%03%1D-(&P%03\'%1F=/jB%1C%08%0D1jB%1C%0B%053j%15%203.7@87$43j%05+%205%04%5B%02&%003%19%E9%85%B9%E7%BC%88%E5%8E%81%E6%94%B1%203%E6%9C%BD%E8%AE%89%EF%BD%99%E8%AE%B6%E6%A2%87%E6%9E%A2%E5%88%A9%E5%A6%AD%E5%8D%95%E6%96%B7%E4%BD%A7%E5%84%A2%E7%9A%B0%E9%84%AB%E7%BC%AD%E5%8E%83%E6%94%B7%20@%EF%BD%AE%E5%AE%BA%E5%BB%95%E7%95%B4%E8%AE%B0%E6%97%82%E7%9B%A2%0A%05%EF%BD%8E%19%E9%85%B9%E7%BC%88%E9%95%9A%E8%AE%AE%19aj%05/$&5%60%0F.$(2@8%E9%84%8E%E7%BC%AF%E5%8E%85%E6%94%B7U%14&%20%E6%9D%8E%E8%AE%A8%EF%BC%AE%E5%8E%8C%E6%8F%A6%E5%8E%96.#%E9%80%BD%E6%8A%8F%E5%98%AB%E5%93%8D%03%08y%E5%84%A5%E7%B5%A3%EF%BD%8D%E5%B8%B1%E4%B9%93%E9%9C%B4%E4%BE%BB%E8%AE%82%E5%84%B7%E5%AC%9F%E5%9D%AF%E4%BA%BA%E9%A0%93%E9%9C%A1%E4%B9%AC%19(R%00/()%22j%12*,%22(A%12%1D5(%0B%5B%11&3%04&G%03%1D,(=%60%14%22/4.@%0F,/%19$%5C%07/-%22)S%03%1D$55%5B%14%1CpvwjK%20/%19&D%0F0$51Q%14%1Dl30j%05,%25%22%19A%08(/(0Z80$3%13%5D%0B&.23j%E8%AE%8B%E9%9E%B0%E6%97%86%E4%BA%B1%E5%8B%A7%E8%BD%89%E5%A5%97%E8%B5%A6%EF%BD%9Bvi%E8%AF%83%E4%BE%BB%E6%8D%82%E7%BC%90%E7%BA%9B%E7%94%82%E9%80%AE%EF%BD%BDqo%E8%AE%B0%E8%80%93%E7%B3%8F%E6%9F%A7%E9%AB%8F%E5%AF%99%E7%BC%96%E5%AF%A5%E6%9C%B98%E9%AB%8F%E8%AE%80%E7%9B%83-G%E5%9D%96%E5%9C%83%E6%96%A1%E6%B2%92%E5%8B%A7%E8%BD%8984$%25,%5D%12%173&)G%0F7(()jB%1C%0B%063j%073(%184Q%145$5%19%5E%15%1D%22&+X%04%22%22,%19%1B8*/.3s%03&5%224@%E9%86%AA%E9%9C%A1%E7%9B%85%203%E6%88%A2%E8%81%A3%20)&+X%03-&%22%E5%8E%85%E6%95%84%E7%BD%9C%E5%B1%92%7Bg%E8%AE%B0%E6%A3%B4%E6%9E%83%E5%89%9E%E5%A6%8A%E5%8D%91%E5%8E%85%E6%95%848%25(+%22Z%07.$%19%04%5B%08%25(%202F%077(()%14#13(5j%03-%1F43Q%16%1D124%5C8%2024%19%0B8*1%19%22F%14,3%18v%04Q%1D$55%5B%14%1Cpw%7FjB%1C%0B%04%06jI1$4%22@H3)7%E8%AE%B0%E6%B1%B6%E6%8B%83%E9%95%9A%EF%BD%9Bvi%E8%AF%83%E4%BE%BB%E6%8D%82%E7%BC%90%E7%BA%9B%E7%94%82%E9%80%AE%EF%BD%BDqo%E8%AE%B0%E8%80%93%E7%B3%8F%E6%9F%A7%E9%AB%8F%E5%AF%99%E7%BC%96%E5%AF%A5%E6%9C%B989)j$Z8*/#%22L)%25%1F73j%0A&/%203%5C876%19hU%0C%229i7%5C%16%E8%AE%B4%E6%B0%83%E6%8B%A2%E9%95%9E%EF%BC%AEWm%E8%AE%B6%E4%BE%9A%E6%8D%86%E7%BD%A5%E7%BA%BA%E7%94%86%E9%81%9B%EF%BD%9Cu%1A%E8%AE%91%E8%80%97%E7%B2%BA%E6%9F%86%E9%AB%8B%E5%AE%AC%E7%BC%B7%E5%AF%A1%E6%9D%8C%19&j%14&%20#%3Eg%12%225%22%19W%09.1+%22@%03%1D%E4%BD%A1%E7%BA%9E%E5%91%83%E5%9B%AA%E8%B1%A5%E7%9B%87%E5%8E%83%E6%94%B7%E4%B9%8A%E6%98%9B%E5%86%9B%E6%94%B3%E7%B0%BA%E5%9F%8C%EF%BD%9D%E8%AF%83%E4%BD%86%E5%84%A6%E5%86%BC%E6%94%B7%E7%B0%BC%E5%9E%BF%E5%8E%A4%E6%94%B3%1F*4%60%14%22/4.@%0F,/%19%22F%14,3%18v%05R%1D%E6%9D%8C%E5%8B%A6%E7%AA%A8R%091#.#P%03-%EF%BD%9Bg%E8%AE%B0%E8%81%A0%E7%B2%9D%E6%9F%82%E9%AB%8D%E5%AF%9F%E7%BC%96%E5%AE%96%E6%9D%AB%1De%18%05u%20%1B%1F4%22Z%02%1Dn*(Z%0F7.5hG%03-%25%19tj%11*5/%04F%03\'$)3%5D%07/2%19(Z%14&%20#%3EG%12%225%22$%5C%07-&%22%19Y%07;%1F*%22G%15%22&%22%19%109%01%02%01%0EjB%1C%03%06%0EF8g%1E%05%05~%15%1D1&%20Q%15+.0%19Y%0F;%08)%19%109%01%00%05!j%05%22/$%22X\'-(*&@%0F,/%015U%0B&%1F.)%5D%12%1D#(#M8g%1E%02%0E%7F8..).@%091o%20%22Q%12&23iW%09.n*(Z%0F7.5hG%03-%25%19q%04U%1De%18%05v%20%17%1F24Q%14%02&%22)@8g%1E%0D%00a8g%1E%05%04v2%1D23&W%0D%1D3%224D%09-2%22%13Q%1E7%1F%225FVsp%197Q%140(43Q%02%1D%19%0A%0B%7C%1271%15%22E%13&23%19X%09%20%203.%5B%08%1D%00)#F%09*%25%19%1Fp%09.%20.)f%0324%224@8-%201.S%077.5%19%109%01%03%00%0CjB%1C%03%06%04y87.%143F%0F-&%194Q%12%0A5%22*jB%1C%0B%0E%1Dj%05,,7&@+,%25%22%19%5B%16&/%19ck$%00%04,%19%109%01%03%0F%04j%04%25%22&$%5C%03%1C%25%223Q%057%1F75%5B%12,5%3E7Q8/(%25%19%5B%087(*%22%5B%137%1F3%22L%12l1+&%5D%08x%22/&F%15&5z2@%00ny%19/Q%07\'%1Fc%18v\'%07%04%190Q%04((3%15Q%176$43u%08*,&3%5D%09-%075&Y%03%1D%06%22%22w%0E%22-+%22Z%01&%1F7&F%15&%1Fc%18v\'%0B5%19ck$%01%02%3E%19%109%01%03%021j%0313ww%06805&3A%15ya%19%06W%05&13%19X%09%20%20+%14@%091%20%20%22j%051$&3Q8g%1E%05%04u*%1D)33D%15ynh*%5B%08*5(5%1A%01&$3%22G%12m%22(*%1B%0B,/.3%5B%14l2%22)P8%00.)3Q%087l%13%3ED%03%1De%18%0D~(%1D235%5D%08$(!%3EjB%1C%03%04%03%7B8%01%204%22j%22%225%22%19%109%09%091%19%10%1561%225j%11,3#4jIl%1Fc%18v\'%02;%19ck$%01%03%0D%19Y%099%02&)W%03/%13%226A%0305%06)%5D%0B%225.(Z%201%20*%22j%0C0%225&Y%04/$5%19Y%09-(3(FH$$%223Q%157o$(Y8%09%12%08%09jB%1C%03%05%0EE8%253(*w%0E%223%04(P%03%1DwwujB%1C%03%06%00~81$62Q%157%00).Y%077(()r%14%22,%22%19P%09%204*%22Z%12%06-%22*Q%087%1F%0A&@%0E%1D2%223f%0324%224@.&%20#%22F8%105&5@F%20.)3F%09/%07+(C%20/%2033Q%08*/%20%19U%163-.$U%12*.)h%5E%15,/%195Q%15%1D%2077X%1F%1D2.%20v%1F7$4%19v%07%20*%04(Y%16%225%19%20Q%12%06-%22*Q%0872%05%3E%60%07$%0F&*Q8%02%03%04%03q%20%04%09%0E%0D%7F*%0E%0F%08%17e4%10%15%12%11c%3E%1A%1B&%25W%02&\'%20/%5D%0C(-*)%5B%162343A%1049%3E=%04Wqrsr%02Q%7Bxonj%0B,;%15%22E%13&23%06Z%0F.%203.%5B%08%053&*Q8%14.5#u%141%20%3E%19Q%08\'%1F0%22V%0D*5%04&Z%05&-%15%22E%13&23%06Z%0F.%203.%5B%08%053&*Q8%13%0E%14%13j%05/%20*7jB%1C%03%02%0F%5B8g%1E%05%04~%10%1D,7%19Y%0962%22*%5B%10&%1F!.Z%07/(=%22jB%1C%03%02%00a8g%1E%05%02q-%1D$)$F%1F35%05+%5B%05(%1F*(P%03%1D$)$F%1F35%197U%02\'()%20j%14&2%223j%001.*%0EZ%12%1De%18%05p/%05%1F%03%11j%0775&$%5C#5$)3jB%1C%03%03%04f8g%1E%05%02~%1E%1D3%22*%5B%10&%041%22Z%12%0F(43Q%08&3%19&D%16%0D%20*%22j#-%25%19%20Q%12%11%20)#%5B%0B%15%20+2Q%15%1D%03+(W%0D%00(7/Q%14%0E.#%22j%04/.$,g%0F9$%19w%05Tpurq%03%5Ez%20%25$P%03%25&/.%5E%0D/,)(D%171232B%11;8=%19w%0F3)%225d%071%20*4j%05*1/%22F%12&93%19%109%01%07%05%0Fj\'%1D8%19ck$%07%0B%13%19Y%16+%1F%03%0AjB%1C%03%02%0E%5B8g%1E%05%03v%13%1D\'(5Y%077%1F%0A.W%14,2(!@F%0A/3%22F%08&5g%02L%16/.5%22F8&/$%19%5E8%10$5.U%0A*;&%25X%03%00(7/Q%14%1D%22()W%077%1F7&P8%06/$5M%167.5%19%5D%10%1De%18%05p!%22%1F#%19D%094%1F%0B&@%0F-p%19$Q%0F/%1F7%19u#%10%1Fc%18v%22%021%19(Z%0B,44%22Y%095$%19%01%058%0D$34W%073$%19%01%068-$?3v%1F7$4%19%5D8%20\'%20%19Y8sqww%04Vsqww%04VsqwwjB%1C%03%03%0FB8%00(7/Q%14%1D5%19%22j%001.*%09A%0B!$5%19W%14:13(j%25%01%02%19%05A%00%25$5%22P$/.$,u%0A$.5.@%0E.%1F.)B%22*&.3j%13.%1F%05+%5B%05(%02.7%5C%031%1F%123R%5E%1De%18%05q%220%1F!5%5B%0B%1055.Z%01%1D%12%19&Y8%05%17%19ck$%07%04%14%19W%14&%203%22q%08%203%3E7@%091%1Fc%18v#%059%19ck$%06%036%19L8g%1E%05%01u%25%1D%05%05%19Z8g%1E%05%03p.%1D%20##q%10&/3%0B%5D%157$)%22F8g%1E%05%03r*%1D\'+(%5B%14%1D%22&+X8g%1E%05%02w#%1D%20+%20%5B8-$?3j%02&5&$%5C#5$)3j6(%224pj%0B*/%19*D%0A%1D15(W%0302%05+%5B%05(%1F*3%068%20.)1Q%147%1F#%22V%13$%1Fc%18v.%0A&%19#Y%17r%1Fc%18v%20%0A%08%193%5C%03-%1F$+Q%071%1F%22?D8002&F%03%17.%19%0AQ%150%20%20%22%14%12,.g+%5B%08$a!(FF%11%12%06%19F%03\'4$%22j4%06%0B%02%04%60#%07%1Fc%18v!%078%197%5B%0F-5%225P%094/%19cj%25%22/)(@F%20.)1Q%147a2)P%03%25()%22PF,3g)A%0A/a3(%14%09!+%22$@8!(3%0BQ%08$5/%19%04V%00p%02t%0DUw%05vq%05Rwwr%05%07Ustt%02%03%20wy%02%02%00#%00yp%05%05R%01xr%02r%5E%7Bxsp%03Wp%05urq#%00%03%01%01%03#tu%04p%0DQt%05wup%25r%05~s%01W%05v~%03pS%07p%04v%04%25qx%06%04vP%02x%05spP%05%03p%03%04\'ssp~vPtp~%02%05Qtsrq%01%20sx%06%01%02Ttvvr%0DWzsuvu#%05xv%7F%0D_%00%00%02w%0C%25s%05q%7F%02%22tu%7F%05%06V%02rqw%07$%06stv%0C%25%02w%05%04%06$vxpw%02Szs%06~%06Wz%05w%05rVv%02~%01%02Ssst%06%06W%07stt%04%5Esvur%06\'%06qwq%02%22vx%04%02q%20%02t%01u%03R%7B%04%06%7F%04$%02%03%7Fvj%0B,%25%17(C/-5%19ck$%04%03.%19%109%01%02%0E%1Ej%0B6-%13(j%0B,44%22P%094/%19%14@%0715%19%0Ag6,()3Q%14%07.0)jB%1C%03%01%01Y8%0C%0F%02%19%109%01%07%0D.j%00,3%02&W%0E%1Dinm%18Kmnwv%06Uwtqp%0C_y~%07%06v%25%07%04%01%00%7C/%09%0A%0B%0Az)%13%10%15%14%603%15%16%1F%1En9%22#$#Q%00$).-_%0A./(7E%14%1De%18%05%7C$%0F%1F5&W%03%1D%22(7M2,%1F%15%02g)%0F%17%02%03j%3C%06%13%08%19%109%01%07%0F5j%156#%13(j%05,$!!jB%1C%03%0F%0Df8g%1E%05%00u%22%1D,(#j%15/(#%22j%07/-%192G%031%1E$&X%0A!%20$,j%0702.%20Z8/%12/.R%12%17.%19!%5D%0A7$5%19G%12670?M%1C=%1F%00%22Q%12&23%19%109%01%07%02%0Cj6%06%0F%03%0Ez!%1D2/%22X%0A%1D(4%02Y%1678%196jB%1C%03%0F%02_8g%1E%05%00%7D6%1D+(.Z8&%20$/jB%1C%03%00%00G8-$%20&@%03%1D$)6A%036$%19!F%09.%13&#%5D%1E%1D3%221Q%147%1F&%25G80%1Fc%18v.%00%11%19)%5B%25,/!+%5D%057%1F3(A%05+,(1Q8*2%065F%07:%1Fffj%15&5%172V%0A*%22%195g%0E*\'3%13%5B8%18.%25-Q%057a%065F%07:%1C%19#%5D%10%11$*%13%5B8b%1FM%19G%13!235j%021%12/.R%12%17.%19ck$%05%05$%19%109%01%06%0F,j%05,,7&F%03%17.%19#%5B66#+.W8g%1E%05%00q0%1D%25*7%058g%1E%05%01s.%1De%18%05s%209%1F%0E)B%07/(#gf5%02a72V%0A*%22g,Q%1F%1D265%60%09%1De%18%05s%25%20%1F%22+Q87.%15&P%0F;%1F42V%1573.)S824%222QF*2g%22Y%1678%19#X5+(!3%60%09%1Dpww%04W%1D%25%226A%036$%19.G#5$)%19@%096%22/4@%0715%19*A%0A7(7+M2,%1F*&D8a%7B%192Z%0A,%20#%19%109%01%08%0E%02j%176$5%3Eg%03/$$3%5B%14%1D%1A%194@%1F/$%14/Q%037%1F()j%05/.)%22z%09\'$%194@%093%115(D%07$%203.%5B%08%1D%2225F%03-5%13.Y%03%1D\'($A%15%1D3%224%5D%1C&%1F5%22Y%095$%063@%14*#23Q83..)@%03147%19X%03%255%19$X%0702%09&Y%03%1Dc%19%20Q%12%06-%22*Q%087%03%3E%0EP83-&%3Ej%05%22/$%22X%07!-%22%19%109%01%08%05%16j%1B%1De%18%05~%22%13%1F%25(@%12,,%19%0Ag6,()3Q%14%0E.1%22j%095$5!X%094%1F$5Q%077$%13%22L%12%0D.#%22j%0F\'%1F5%22@%131/%11&X%13&%1Fd%19W%0A*$)3%60%093%1F-%16A%0318%19%20Q%12%133(7Q%1478%11&X%13&%1F%02%0Bq+%06%0F%13%18z)%07%04%19$X%0F%20*%19ck$%0A%073%19G%037%0033F%0F!43%22j%15%22/#%25%5B%1E%1D2$5%5B%0A/%1F%20%22@\'755.V%137$%19$%5C%0F/%25%09(P%030%1F7&A%15&%1F4$F%09/-%13(D8%20-.%22Z%12%1A%1F)(P%03%1787%22j%0B,44%22Q%087$5%19W%0A*$)3l8g%1E%05%0Fu7%1D%0C%14%17%5B%0F-5%225a%16%1D5(%0B%5B%05%22-%22%0B%5B%11&3%04&G%03%1De%18%04u#%22%1F%20%22@$,4)#%5D%08$%02+.Q%087%13%22$@88%1F(2@%031%09%13%0Ax8!-($_8+3%22!j%161$1%22Z%12%07$!&A%0A7%1F%20%22@%25,,72@%03\'%123%3EX%03%1D5(2W%0E%20%20)$Q%0A%1D%1De%19D%071$)3z%09\'$%19ck$%09%08#%19B%07/4%22%19Z%09-$%19(R%000$3%0BQ%007%1F&7D%03-%25%04/%5D%0A\'%1F%25+A%14%1D5(7j%0D&827j%12%22&%09&Y%03%1D1&%20Q%3E%0C\'!4Q%12%1D\'($A%15*/%19(R%000$3%17U%14&/3%19%109%01%08%04!j%0B,44%22A%16%1D2$5%5B%0A/%0D%22!@8!$!(F%036/+(U%02%1D.5.S%0F-%1E%19$A%141$)3g%12:-%22%19_%03:%25(0Z8*/4%22F%12%01$!(F%03%1De%18%04u%22%0B%1F7(%5D%087$5*%5B%10&%1F3(A%05+$)#jB%1C%02%06%04r8..24Q%0A&%201%22j%14*&/3jJ%1D%22/.X%021$)%19F%03..1%22w%0E*-#%19W%0E%22/%20%22P2,4$/Q%15%1D%1C%191%5D%15*#+%22j%03-%25%22#j%09%25\'4%22@2,1%197U%01&%18%08!R%15&5%19.Z%08&3%0F%13y*%1D%22+.Q%087%0D%22!@8%2024%13Q%1E7%1F)2X%0A%1D1(7A%16%1D%25(*U%0F-%0D((_%133%123&F%12%1D6%22%25j:7%1F4%22W%131$%04(Z%08&%223.%5B%08%105&5@8%25$3$%5C57%2053j%16&3!(F%0B%22/$%22j:%1F%1F%20%22@3%17%02%0A(Z%12+%1F#(Y/-5%225U%057(1%22j:%25%1Fc%18w%25%09%06%193%5B,%10%0E%09%19Y%0962%22%02B%03-5%19*%5B%10&%1F+(U%02%1D%1AM%19U%0462%22%19%109%00%02%01%1Fj%14&%20#%3Ej%157%2032G9%20)&)S%03%1D22$W%0302%19%25Q%12%22%1F%20%22@3%17%02%14%22W%09-%254%19%109%00%05%06%10jB%1C%02%04%0EG8%20.))Q%057%123&F%12%1D&%223a2%00%09(2F%15%1D%1D2%19X%09%20*%19%1BV8%17%1Fo%19~5%0C%0Fi4@%14*/%20.R%1F%1De%18%04w.1%1F$(Z%08&%223%02Z%02%1De%18%04w!%20%1Fc%18v%25%0B%13%19i%5D%03%7B%1F%07%19U%0A3)&%19X%09%22%25%021Q%087%04)#j%02&#2%20w%09-\'.%20j%14&,%19#%5B%0B%22()%0B%5B%09(47%02Z%02%1Do/(X%02&3i%19P%09.%02(*D%0A&5%22%19@%0F.()%20j%14&,%12)%5D%12%1D3%224D%09-2%22%14@%0715%19%20Q%12%16%15%04%03U%12&%1F#%22B%0F%20$(5%5D%03-5&3%5D%09-%1F/3@%160%1F$+%5B%15&%1F%20%22@3%17%02%012X%0A%1A$&5jJI%1F5%22E%13&23%14@%0715%19qkWr%1Ep%18%05V%1Cu%18v%069p%1Ev%18%049v%1Eu%18%0D9%7B%1F%1B)j(&50(F%0Dc%0455%5B%14%1D:M%19A%08/.&#q%10&/3%14@%0715%19ck%25%07%03%0C%19%109%00%05%0E#j%00%22(+%19%109%00%05%00%05jB%1C%02%03%04r8%19%1F5%22R%14&2/%19%109%00%05%02=jB%1C%02%03%0FV8%09%12%08%09%1A%16%2234%22j%0A,%20#%02B%03-5%143U%147%1F!(F%04*%25#%22Z84$%25%18Y%09!(+%22j%05+%20)%20Q8%1F3%19%20U%0B.%20%195Q%02*3%22$@#-%25%19+U%157%08)#Q%1E%1D%1E%19#%5B%0B%00.)3Q%087%0D(&P%03\'%041%22Z%12%06/#%19%5DW%7B/%18+U%04&-4%19F%03\'(5%22W%12%105&5@8%18%1C%19#%5B%0B%0F.&#%5D%08$%1F)&B%0F$%203.%5B%08%105&5@8sqwwjH$$%223Q%157%1E/(X%02&3i%20Q%037$43k%0B,#.+QH$$%223Q%157%1E&)@%1D4(#3%5C%5Cqv%7F7L%1Bm&%22%22@%0305%18/%5B%0A\'$5iS%03&5%224@9..%25.X%03m&%22%22@%0305%18&Z%12co%20%22Q%12&23%18C%0F\'&%223%14H$$%223Q%157%1E0.Z%02,6g&%1A%01&$3%22G%12%1C-.)_Fm&%22%22@%0305%18#%5D%10%1C\'2+X%04$a#.BJm&%22%22@%0305%18/%5B%0A\'$5iS%03&5%224@9..%25.X%03m&%22%22@%0305%18&Z%12co%20%22Q%12&23%18C%0F\'&%223%14H$$%223Q%157%1E0.Z%02,6g&%1A%01&$3%22G%12%1C-.)_Fm&%22%22@%0305%18#%5D%10%1C#%20gP%0F5:0.P%12+%7BvwD%1E%3Eo%20%22Q%12&23%18%5C%09/%25%225%1A%01&$3%22G%12%1C,(%25%5D%0A&o%20%22Q%12&23%18U%087ai%20Q%037$43k%11*%25%20%22@Fm&%22%22@%0305%180%5D%08\'.0g%1A%01&$3%22G%12%1C\'+&G%0Ey%7B&!@%031:5.S%0E7%7Bju%0CV39%7C0%5D%027)%7Dv%00V39%7C/Q%0F$)3%7D%00Vs1?:t%0D&8!5U%0B&2g*%5B%10&%15(jX%03%255%3Cw%11%1D1(%20/@%5Cns%7FwD%1E%3Epww%11%1D1(%20/@%5Cquw7L%1B%3E%01j0Q%04((3j_%03:\'5&Y%030a*(B%03%17.j+Q%007:wbO%14*&/3%0EKqyw7L%1BrqwbO%14*&/3%0ETwq7?I%1Bm&%22%22@%0305%18/%5B%0A\'$5iS%03&5%224@9..%25.X%03m&%22%22@%0305%18&Z%12co%20%22Q%12&23%18C%0F\'&%223%14H$$%223Q%157%1E0.Z%02,6giS%03&5%224@9/.&#%5D%08$ai%20Q%037$43k%0A,%20#.Z%01%1C($(Z%1D4(#3%5C%5Cpu7?%0F%0E&(%20/@%5Cqw7?IH$$%223Q%157%1E/(X%02&3i%20Q%037$43k%0B,#.+QH$$%223Q%157%1E&)@Fm&%22%22@%0305%180%5D%02$$3g%1A%01&$3%22G%12%1C6.)P%094ai%20Q%037$43k%0A,%20#.Z%01co%20%22Q%12&23%18X%09%22%25.)S97(7%3CR%09-5j4%5D%1C&%7BvsD%1E%3Eo%20%22Q%12&23%18%5C%09/%25%225%1A%01&$3%22G%12%1C,(%25%5D%0A&o%20%22Q%12&23%18U%087ai%20Q%037$43k%11*%25%20%22@Fm&%22%22@%0305%180%5D%08\'.0g%1A%01&$3%22G%12%1C3%224A%0A7:%25(@%12,,%7Dj%06S39%7C/Q%0F$)3%7D%06R39:iS%03&5%224@9+.+#Q%14m&%22%22@%0305%18*%5B%04*-%22iS%03&5%224@9%22/3g%1A%01&$3%22G%12%1C6.#S%037ai%20Q%037$43k%11*/#(CFm&%22%22@%0305%185Q%156-3g%1A%01&$3%22G%12%1C3%224A%0A7%1E$(Z%12&/3%3C@%03;5j.Z%02&/3%7D%05P39%7C!%5B%087l4.N%03yps7L%5D/()%22%19%0E&(%20/@%5Cqu7?%0F%0E&(%20/@%5Cqu7?IH$$%223Q%157%1E/(X%02&3i%20Q%037$43k%0B,#.+QH$$%223Q%157%1E&)@Fm&%22%22@%0305%180%5D%02$$3g%1A%01&$3%22G%12%1C6.)P%094ai%20Q%037$43k%14&22+@Fm&%22%22@%0305%185%5D%01+5%184D%07%20$%3C7U%02\'()%20%19%14*&/3%0EWu1?:%1A%01&$3%22G%12%1C)(+P%031o%20%22Q%12&23%18Y%09!(+%22%1A%01&$3%22G%12%1C%20)3%14H$$%223Q%157%1E0.P%01&5giS%03&5%224@94()#%5B%11co%20%22Q%12&23%18Y%13/5.%18X%0F-$%3C/Q%0F$)3%7D%00%5E39:iS%03&5%224@9+.+#Q%14m&%22%22@%0305%18*%5B%04*-%22iS%03&5%224@9%22/3g%1A%01&$3%22G%12%1C6.#S%037ai%20Q%037$43k%11*/#(CFm&%22%22@%0305%18*A%0A7(%18+%5D%08&ai%20Q%037$43k%14&22+@9%20.)3Q%087:7&P%02*/%20jX%03%255%7Dv%02%16;%3Ci%20Q%037$43k%0E,-#%22FH$$%223Q%157%1E*(V%0F/$i%20Q%037$43k%07-5giS%03&5%224@94(#%20Q%12co%20%22Q%12&23%18C%0F-%25(0%14H$$%223Q%157%1E4/%5B%11%17(7%3CV%0975(*%0EV39:iS%03&5%224@9+.+#Q%14m&%22%22@%0305%18*%5B%04*-%22iS%03&5%224@9%22/3g%1A%01&$3%22G%12%1C2+.P%031ai%20Q%037$43k%15/(#%22F973&$_%1D+$.%20%5C%12yr%7F7L%5D.%205%20%5D%08ylv~D%1Ecqgw%14V%3Eo%20%22Q%12&23%18%5C%09/%25%225%1A%01&$3%22G%12%1C,(%25%5D%0A&o%20%22Q%12&23%18U%087ai%20Q%037$43k%15/(#%22FFm&%22%22@%0305%184X%0F\'$5%18@%14%22%22,g%1A%01&$3%22G%12%1C2+.P%031%1E3.D%1D/()%22%19%0E&(%20/@%5Cpy7?%0F%00,/3jG%0F9$%7Dv%00%16;%3Ci%20Q%037$43k%0E,-#%22FH$$%223Q%157%1E*(V%0F/$i%20Q%037$43k%07-5giS%03&5%224@90-.#Q%14co%20%22Q%12&23%18G%0A*%25%225k%121%20$,%14H$$%223Q%157%1E4+%5D%02&3%183%5D%16m&%22%22@%0305%18*A%0A7(%184X%0F\'$%3C+%5D%08&l/%22%5D%01+5%7Dv%0C%16;%3Ci%20Q%037$43k%0E,-#%22FH$$%223Q%157%1E*(V%0F/$i%20Q%037$43k%07-5giS%03&5%224@93%20)%22X%1D!.5#Q%14n5(7%0EW39g4%5B%0A*%25gdq#%06%04%02%02IH$$%223Q%157%1E/(X%02&3i%20Q%037$43k%0B,#.+QH$$%223Q%157%1E&)@Fm&%22%22@%0305%187U%08&-giS%03&5%224@9%20-(4Q97(7k%1A%01&$3%22G%12%1C)(+P%031o%20%22Q%12&23%18Y%09!(+%22%1A%01&$3%22G%12%1C%20)3%14H$$%223Q%157%1E7&Z%03/ai%20Q%037$43k%00&$#%25U%05(%1E3.DJm&%22%22@%0305%18/%5B%0A\'$5iS%03&5%224@9..%25.X%03m&%22%22@%0305%18&Z%12co%20%22Q%12&23%18D%07-$+g%1A%01&$3%22G%12%1C3%22!F%030)%183%5D%16oo%20%22Q%12&23%18%5C%09/%25%225%1A%01&$3%22G%12%1C,(%25%5D%0A&o%20%22Q%12&23%18U%087ai%20Q%037$43k%16%22/%22+%14H$$%223Q%157%1E1(%5D%05&%1E3.D%1D7.7%7D%19Uq1?%7CX%03%255%7Dv%04%16;z%25(F%02&3j5U%02*44%7D%06%16;z7&P%02*/%20%7D%04Fw1?%7C%5C%03*&/3%0ETq1?%7CY%0F-l0.P%12+%7BrwD%1Ex-.)QK+$.%20%5C%12ysu7L%1Bm&%22%22@%0305%18/%5B%0A\'$5iS%03&5%224@9..%25.X%03m&%22%22@%0305%18&Z%12co%20%22Q%12&23%18D%07-$+g%1A%01&$3%22G%12%1C%22+(G%03%1C5.7%0E%04&\'(5QJm&%22%22@%0305%18/%5B%0A\'$5iS%03&5%224@9..%25.X%03m&%22%22@%0305%18&Z%12co%20%22Q%12&23%18D%07-$+g%1A%01&$3%22G%12%1C\'%22%22P%04%22%22,%18@%0F3%7B%25%22R%091$kiS%03&5%224@9+.+#Q%14m&%22%22@%0305%18*%5B%04*-%22iS%03&5%224@9%22/3g%1A%01&$3%22G%12%1C1&)Q%0Aco%20%22Q%12&23%18F%03%253%224%5C97(7%7DV%03%25.5%22%18H$$%223Q%157%1E/(X%02&3i%20Q%037$43k%0B,#.+QH$$%223Q%157%1E&)@Fm&%22%22@%0305%187U%08&-giS%03&5%224@95..$Q97(7%7DV%03%25.5%22O%04,53(Y%5Cnw7?%0F%04,3#%22FK4(#3%5C%5Cw1?g%02%16;%3Ci%20Q%037$43k%0E,-#%22FH$$%223Q%157%1E*(V%0F/$i%20Q%037$43k%07-5giS%03&5%224@93%20)%22XFm&%22%22@%0305%18$%5B%16:3.%20%5C%12co%20%22Q%12&23%18X%09$.%3C0%5D%027)%7Dv%05%16;z/%22%5D%01+5%7Dv%05%16;%3Ci%20Q%037$43k%0E,-#%22FH$$%223Q%157%1E*(V%0F/$i%20Q%037$43k%07-5giS%03&5%224@93%20)%22XFm&%22%22@%0305%18$%5B%16:3.%20%5C%12co%20%22Q%12&23%18W%09385.S%0E7%1E3.D%1D.%205%20%5D%08yqgw%14Vcu7?%0F%0A*/%22j%5C%03*&/3%0EWr1?%7CR%09-5j4%5D%1C&%7BvuD%1E%3E%01,%22M%001%20*%22GF$$%223Q%157%1E4/U%0D&:ur%11%1D.%205%20%5D%08n-%22!@%5Cnw7?IQvd%3C*U%14$()jX%03%255%7DqD%1E%3Epww%11%1D.%205%20%5D%08n-%22!@%5Cs%3C:%07%19%11&#,.@K($%3E!F%07.$4gS%03&5%224@90)&,Q%1Dqtb%3CY%071&.)%19%0A&\'3%7D%19P39:p%01C8,&5S%0F-l+%22R%12yw7?IWsqb%3CY%071&.)%19%0A&\'3%7D%04%1B%3Eo%20%22Q%12&23%18%5C%09/%25%225%1A%01&$3%22G%12%1C,(%25%5D%0A&o%20%22Q%12&23%18U%087o%20%22Q%12&23%18D%09347g%1A%01&$3%22G%12%1C1(7A%16%1C#(?O%11*%253/%0ETty7?%0F%0B*/j0%5D%027)%7Du%07V39%7C*U%1En6.#@%0Eysp%7FD%1Ex#(5P%031%7Bv7LF0.+.PF%60%25v#%05%02rz*&F%01*/j+Q%007%7Bjv%07_39%7C*U%14$()j@%093%7Bjv%00U39:%19O%1B%1D15(P%13%205%19#%5B%0B%00.)3Q%087%0D(&P%03\'%041%22Z%12%105&5@87)%22*Q8g%1E%04%03p%07%1D4)+%5B%07\'%041%22Z%12%06/#%19F%0301()G%03%06/#%19@%096%22/%02B%03-5%19%20Q%12%16%15%04%0A%5D%0865%224j%0E7574%0EIl%1Fc%18w%22%05%12%192F%0A%1C%20-&L8g%1E%04%00w9%1Do7&Z%03/%1E%20/%5B%157%1Fc%18w#%01.%19%25S9%20.+(F8%25-(&@8?%1Fc%18w!%097%19ck%25%06%00%22%19%109%00%07%0E%20jB%1C%02%02%03x8g%1E%04%01%7C%1E%1D#%20%19%1A%14&22+@805&3%5D%050$51Q%140%1F5%22G%13/5%19ck%25%05%0B%00%19%1A%16,127j%143%1Fc%18w/%00%15%19ck%25%05%04%10%19D%14,&.#%0E%22%1B%08*&S%03%173&)G%00,3*iy%0F%203(4%5B%007o%06+D%0E%22%08*&S%03%0F.&#Q%14k25$%09D%1De%18%04r%25%06%1F!&P%03%1De%18%04q.%07%1Fi5Q%156-3%18@%0F7-%22%19H%0C,3#&Z87%25%19i%5C%09/%25%225%1A%0B,#.+QH%1De%18%04p,%04%1Fi5Q%156-3%18W%09-5%22)@83%2044@%0F.$%19iR%0A,%203%19A%14/%1E%20%22@80%22(5Q8g%1E%04%0Eq%04%1D.)%00Q%037$43x%09%22%25%22#jB%1C%02%00%06n80$3%14@%1F/$4%19W%09.,()jB%1C%02%0F%04p8m+7%20jB%1C%02%00%05g863+%18D%0F%20525Q80$51Q%14%1C\'(5V%0F\'%25%22)j%157%203.W90$51Q%140%1F*(V%0F/$%19$A%157.*%19%109%00%09%00%18jB%1C%02%00%0FZ8g%1E%04%00%7D,%1D5%22*D%0A%225%22%19W%0A&%205%15Q%057%1Fc%18w!%05%15%19hU%0C%229i7%5C%16%1D&3%18W%1305(*k%07)%20?%19Q%0B!$#%19%109%00%09%03%22j%10%22-.#U%12&%1Fi5Q%156-3%18%5D%05,/%19ck$%0A%0B)%19%109%00%09%01=jH&,%25%22P8+537%0EIl%1F43U%12*%22i%20Q%037$43%1A%05,,%19.G6%00%1Fi7%5B%1661%18%20%5C%0905%19ck$%09%00%18%19%109%00%07%03%08jB%1C%02%01%05x8$5%18$A%157.*%18F%03%253%224%5C8*2%18)Q%1E7%1F&7%5DH$$%223Q%157o$(Y8topi%078g%1E%04%0Fu%01%1D&3%18W%1305(*k%0313(5jB%1C%02%02%00y8l&%223%1A%16+1%19ck%25%05%07+%19B%09*%22%22%19%109%01%03%066jH3.72D9!.?%19%109%00%09%027jB%1C%02%0F%0F%5D8g%1E%04%02%7D0%1De%18%04%7C$%0F%1Fc%18w!%044%19iC%03!1%19ck%25%00%04%0B%19%109%00%08%060jB%1C%02%02%04n8g%1E%04%0Ev%07%1De%18%04s#;%1Fc%18w#%068%19ck%25%04%056%19%109%00%09%0D%01jB%1C%03%00%0Dp8g%1E%04%02r\'%1D%20%254%5B%0A65%22%19R%13/-%25%20jB%1C%05%05%05n8g%1E%04%06v/%1Do5%22R%14&2/%18@%0F3%1Fc%18w\'%049%19?D%090%1F3.D873&)G%00,3*%19M%16,2%19#ZK05&3%5D%05\'.0)%1A%17!.?iY%03%1De%18%04u,9%1Fc%18w/%04.%193%5B$/.%25%19%109%07%00%01%08jB%1C%03%04%00N8+537%0EIl600%1A%01&$3%22G%12m%22(*%1B%00*343k%16%22&%22%19Y%13/5.%18X%0F-$%19iR%13/-%25%20j%07-5%19ck%25%09%09%17%19%109%07%03%04%18jB%1C%02%0E%01Z8g%1E%04%0E%7C%00%1D6%22%25_%0F7%155&Z%15%25.5*jB%1C%05%06%0Fq8g%1E%03%05p%13%1DmgwD%1Ej%1F4/U%0D&%1Fc%18w/%07%25%19ck%22%02%00%03%19%109%00%03%0E%20jB%1C%02%0D%0El87.%03&@%07%16%13%0B%19%109%07%00%04%3EjH\'(1%18%5D%0B$%1F&5Q%07%1D\'2)W%12*.)g@%09%01-(%25%1COc:g%1CZ%077(1%22%14%05,%25%22%1A%14%1B%1De%18%03u#%16%1F!2Z%057(()%14%12,%05&3U3%11%0Don%14%1Dc%1A)&@%0F5$g$%5B%02&%1Cg:j%15+.0%18P%03/%20%3E%19%109%00%07%06*jB%1C%03%0D%05U8m%22&)B%070%1E4+%5D%05&%1Fc%18p\'%09%10%19iW%07-7&4k%0F.&%19!X%0F%20*%225jB%1C%02%0D%02D8nsqwD%1E%1De%18%04~%22%01%1Fv%19%109%07%00%03,j%0E*%25%22%18P%03/%20%3E%19%1A%15/($%22jH%25-&4%5C%0A*&/3jH\'(1%18G%0A*%22%22%19%1A%0A,%20#.Z%01%1Do7&Z%03/%1Fc%18p\'%04,%19iG%0A*%25%225k%04653(Z8g%1E%04%0E~%10%1Do$&Z%10%222%18%25S8g%1E%04%0Dv6%1D\'2)W%12*.)g@%09%1055.Z%01khg%3C%14=-%203.B%03c%22(#Q;c%3C%19ck%25%01%0B%0A%19U%08*,&3Q8g%1E%03%05u%15%1Do/(X%02&3%19iC%0F-%25(0j%0E*%25%22%14A%05%20$44jH7(7%18W%09-5%22)@80-.#QU%1Do#.B9!&%19%22Z%12&3%19ck%25%09%0B%0D%19%1A%11*%25%20%22@8roui%008g%1E%03%06%7D,%1Do#.B9%254++V%01%1De%18%04~!4%1Fi5Q%156-3%18V%09;%1F35U%080-&3QN%1D)33D%5Cln00CH$$%223Q%157o$(YI%20.)3U%057%1F+(S%09%1Dlv%19G%0E,6%13.D8/$&1Q8g%1E%04%0Dw\'%1Do5%22R%14&2/%19%109%01%0B%015jB%1C%02%02%0D%5D8g%1E%03%06v%0E%1De%18%04~\'%04%1Fc%18p$%06%0D%19!Q%03\'#&$_8g%1E%04%06r%09%1Ds~wD%1E%1Do%25%20jH%20%20)1U%15%1C\'2+X%04$%1F!+U%15+%1F4/%5B%11%1DsqwD%1E%1De%18%03p.%01%1F+&G%12%13..)@8g%1E%03%04%7D%3C%1Dn%25%20%1B8g%1E%03%03~/%1Do7(D%133%1E$+%5B%15&%1Fc%18w$%0B%16%193%5C%03.$%181Q%140(()jI3($3A%14&2h%20@I%1D45+k%14&\'5%22G%0E%1D()+%5D%08&l%25+%5B%05(%1Fc%18p%25%0B%17%19!U815+%19%109%07%05%01%1Dj%0A,%20#.Z%01%1D%1E/3@%160%1F4,%5D%08%1C1&3%5C8g%1E%05%0Fr%07%1Do+(S%09%1D3&)PW%1D%25(0Z8g%1E%03%04v,%1Dn43U%12*%22%19ck%22%00%0B7%19%1B%1578+%22jB%1C%02%06%0EA8g%1E%04%04v%11%1De%18%03v!%13%1F?%18D%090%1F.0jH%20.7%3EF%0F$)3%19%109%01%02%04=jB%1C%02%0F%0E~863%19$j%133%1Fi+%5D%08(%1Fi5Q%001$4/kW%1De%18%04v%20%15%1Fh4@%077($hjH0-.#Q%14%1C55&W%0D%1D3.%20%5C%12%1C27&W%03%1De%18%04%7D/%04%1F,%22M%25,%25%22%19%109%07%05%0E*j%12%223%20%22@8l2+.W%03l%1Fi7Z%01%1De%18%04~%20/%1Fi4X%0F\'$5%19%109%07%02%00&jH%20-(4Q97(7%19%109%00%02%06%1EjB%1C%02%05%02X8m\'%22%22P%04%22%22,%18@%0F3%1Fc%18v.%04%0D%19$U%08%20$+%19%109%07%05%064jB%1C%05%05%01Z8%223%19*A%0A7(%184X%0F\'$%19ck%25%00%02%09%19%109%07%02%04%16jH%20.7%3EF%0F$)3%18@%0F3%1F&7%5D9%2217%22Z%02%17.%19%25A%127.)%19%1A%10,($%22k%12*1%19ck%22%00%07%22%19%1A%0A,%20#.Z%01%1C5.7jB%1C%03%06%0Dc8g%1E%03%03w,%1D%1E%25+U%08(%1Fpw%118g%1E%03%03v%0E%1D)(*Q%16%22&%22%19%1B%14&\'5%22G%0Em1/7j%12&93hW%150%1Fc%18p%25%063%19iG%0A*%25%225k%12*1%197%5B%1661%18!%5D%08*2/%19U%16*%1E%25.Z%02%0C/%195U%08\'q%19iG%0B%22-+%19%5E%075%204$F%0F35%7D%7CjB%1C%05%04%03G8m1(7A%16%1C5.7jB%1C%05%05%0Ew8g%1E%03%05%7C%20%1De%18%03p!4%1Fi1%5B%0F%20$%19iR%03&%25%25&W%0D%1Do$4G8m65&D8g%1E%03%04u%07%1De%18%05~!/%1F4/%5B%11%1C7(.W%03%1De%18%03p%22%06%1Fi$X%090$%19ck%25%05%067%19j8%1D%1F%19%19j80.%19%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19%19D%1Eoajv%04%16;h%19ck$%0B%09%11%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19%19j839kg%04%16;h%19%19j8%1D%1F%19%19j8%1D%1F%19%19j8%1D%1F%19');
                            $_DBFJq = 1;
                            break;
                        case 1:
                            var $_DBGA_ = 0
                              , $_DBGDK = 0;
                            $_DBFJq = 5;
                            break;
                        case 4:
                            $_DBFJq = $_DBGDK === $_DBFIT.length ? 3 : 9;
                            break;
                        case 8:
                            $_DBGA_++,
                            $_DBGDK++;
                            $_DBFJq = 5;
                            break;
                        case 3:
                            $_DBGDK = 0;
                            $_DBFJq = 9;
                            break;
                        case 9:
                            $_DBGCn += String.fromCharCode($_DBGBt.charCodeAt($_DBGA_) ^ $_DBFIT.charCodeAt($_DBGDK));
                            $_DBFJq = 8;
                            break;
                        case 7:
                            $_DBGCn = $_DBGCn.split('^');
                            return function($_DBGEk) {
                                var $_DBGF_ = 2;
                                for (; $_DBGF_ !== 1; ) {
                                    switch ($_DBGF_) {
                                    case 2:
                                        return $_DBGCn[$_DBGEk];
                                        break;
                                    }
                                }
                            }
                            ;
                            break;
                        }
                    }
                }('CAGG4f')
            };
            break;
        }
    }
}();
KBBji.$_BJ = function() {
    var $_DBGGd = 2;
    for (; $_DBGGd !== 1; ) {
        switch ($_DBGGd) {
        case 2:
            return {
                $_DBGHt: function $_DBGIa($_DBGJQ, $_DBHAm) {
                    var $_DBHBF = 2;
                    for (; $_DBHBF !== 10; ) {
                        switch ($_DBHBF) {
                        case 4:
                            $_DBHCu[($_DBHDD + $_DBHAm) % $_DBGJQ] = [];
                            $_DBHBF = 3;
                            break;
                        case 13:
                            $_DBHEc -= 1;
                            $_DBHBF = 6;
                            break;
                        case 9:
                            var $_DBHFc = 0;
                            $_DBHBF = 8;
                            break;
                        case 8:
                            $_DBHBF = $_DBHFc < $_DBGJQ ? 7 : 11;
                            break;
                        case 12:
                            $_DBHFc += 1;
                            $_DBHBF = 8;
                            break;
                        case 6:
                            $_DBHBF = $_DBHEc >= 0 ? 14 : 12;
                            break;
                        case 1:
                            var $_DBHDD = 0;
                            $_DBHBF = 5;
                            break;
                        case 2:
                            var $_DBHCu = [];
                            $_DBHBF = 1;
                            break;
                        case 3:
                            $_DBHDD += 1;
                            $_DBHBF = 5;
                            break;
                        case 14:
                            $_DBHCu[$_DBHFc][($_DBHEc + $_DBHAm * $_DBHFc) % $_DBGJQ] = $_DBHCu[$_DBHEc];
                            $_DBHBF = 13;
                            break;
                        case 5:
                            $_DBHBF = $_DBHDD < $_DBGJQ ? 4 : 9;
                            break;
                        case 7:
                            var $_DBHEc = $_DBGJQ - 1;
                            $_DBHBF = 6;
                            break;
                        case 11:
                            return $_DBHCu;
                            break;
                        }
                    }
                }(36, 9)
            };
            break;
        }
    }
}();
KBBji.$_Co = function() {
    return typeof KBBji.$_AN.$_DBFHG === 'function' ? KBBji.$_AN.$_DBFHG.apply(KBBji.$_AN, arguments) : KBBji.$_AN.$_DBFHG;
}
;
KBBji.$_DJ = function() {
    return typeof KBBji.$_BJ.$_DBGHt === 'function' ? KBBji.$_BJ.$_DBGHt.apply(KBBji.$_BJ, arguments) : KBBji.$_BJ.$_DBGHt;
}
;
function KBBji() {};
var nameArray = [];


const visitor = {
    VariableDeclaration: {
        enter: [
            get_name_Array,
            del_$_Co]
    },
    CallExpression: {
        enter: [
            replace_name_array,
            replace_$_Co]
    },
    
    StringLiteral: {
        enter: [
            replace_unicode, //  unicode 编码转换
        ]
    },
    ForStatement: {
        enter: [
            replaceForSwitch,
        ]
    }
};

function replace_$_Co(path) {

    var node = path.node;

    if ( node.callee == undefined || node.callee.property == undefined) {
        return ;
    }

    if (node.callee.property.name === '$_Co') {
        let index = node.arguments[0].value;
        let value = KBBji.$_Co(index);
        path.replaceInline(types.valueToNode(value))
    }
};

function get_name_Array(path) {
    
    let node = path.node;
    let declarations = node.declarations;

    if (declarations == undefined || declarations.length != 3
        || declarations[0].init == undefined 
        || declarations[0].init.property == undefined 
        || declarations[0].init.property.name != '$_Co') 
        return ;
    
    let arg1 = declarations[0].id.name;
    let arg2 = declarations[2].id.name;
    nameArray.push(arg1, arg2);
};

function replace_name_array(path) {
    var node = path.node;
    // let callee = path.get('callee');
    
    if (node.callee == undefined || node.callee.name == undefined) {
        return ;
    }
    if (nameArray.indexOf(node.callee.name) == -1){
        return ;
    }

    let arg = node.arguments[0].value;
    var value = KBBji.$_Co(arg);
    path.replaceInline(types.valueToNode(value));
};

function del_$_Co(path) {
    let node = path.node;
    let declarations = path.get('declarations');

    if (declarations == undefined || declarations.length != 3)
        return

    let init = declarations[0].node.init;

    try {
        let propertyName = declarations[0].node.init.property.name;
        if (propertyName != '$_Co') return

        let nextPath = path.getNextSibling();
        let nnextPath = nextPath.getNextSibling();

        if (nextPath.type == 'ExpressionStatement' & nnextPath.type == 'VariableDeclaration'){
            path.remove();
            nextPath.remove();
            nnextPath.remove();
        }  
    }
    catch (err) {
        return;
    }
    // let propertyName = declarations[0].node.init.property.name;
      
}


function replace_unicode(path) {
    var node = path.node;
    if (node.extra == undefined) {
        return;
    };

    delete node.extra
}

function replaceForSwitch(path) {
    // console.log('111');
    let node = path.node;
    let allPreSiblings = path.getAllPrevSiblings();
    if (allPreSiblings.length !== 1) return;
    // if (!types.isVariableDeclarator(allPreSiblings[0])) return;

    let lastSibling = path.getPrevSibling();
    let Testing = lastSibling.toString();
    let ttt = `while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;`;

    if (ttt === Testing) {
        console.log(Testing)
    }
    console.log(Testing);   
    // console.log(generator(lastSibling).code)
    let { declarations } = lastSibling.node;
    if (!declarations) return;
    let { id, init } = declarations[0];

    // 获取首元素名
    let arrName = id.name;
    // 获取控制流初始值
    try {
        var lValue = init.object.property.value;
        var rValue = init.property.value;    
    } catch (error) {
        return ;
    }
    let originValue = KBBji.$_DJ()[lValue][rValue];

    // 获取for循环中的参数值
    let {test, body} = node;
    let switchBody = body.body;
    
    if (!types.isMemberExpression(test.right)) return;
    let forExpression = generator(test.right).code;
    let breakArg = eval(forExpression);

    // 获取所有case
    let caseList = switchBody[0].cases;
    let resultBody = [];

    // caseList.forEach(forCase => {
    //     let test = forCase.test;
    //     let caseValue = eval(generator(test));
        

    //     for 
        
    // });

    var returnCase = false;
    for (; originValue != breakArg; ){
        if (returnCase) break;
        for (var i=0; i<caseList.length; i++) {
            let test = generator(caseList[i].test).code;
            let caseValue = eval(test);

            if (originValue === caseValue) {
                let caseBody = caseList[i].consequent;
                if (types.isBreakStatement(caseBody[caseBody.length - 1]) &&
                types.isExpressionStatement(caseBody[caseBody.length - 2]) &&
                caseBody[caseBody.length - 2].expression.right.object.object.callee.object.name === 'KBBji') {
                    let expression = generator(caseBody[caseBody.length - 2].expression.right).code;

                    let value = eval(expression);
                    originValue = value;
                    caseBody.pop();
                    caseBody.pop();
                }
                else if (types.isReturnStatement(caseBody[caseBody.length - 2])) {
                    returnCase = true;
                    caseBody.pop();
                }

                else if (types.isBreakStatement(caseBody[caseBody.length - 1])) {
                    caseBody.pop();
                }
    
                resultBody = resultBody.concat(caseBody);
                break;
            }
            // else break;
        }
    }

    path.replaceWithMultiple(resultBody);
    lastSibling.remove();
    // if (!types.isSwitchStatement(switchBody[0])) return;
    // if (!types.isIdentifier(switchBody[0].discriminant)) return;
    
}
var ast = parser.parse(jscode);
traverse(ast, visitor);

var finCode = generator(ast, opts = {jsescOption:{"minimal":true}});

fs.writeFile(finPath, finCode.code, (err)=>{});

