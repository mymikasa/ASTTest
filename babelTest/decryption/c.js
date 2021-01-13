a = function (t, e) {
  var r,
      a,
      i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  },
      o = n(2),
      c = ["csOmLcOXJX7DinE=", "w6xbwoc7wqs=", "aU56OljDoA==", "ZBDDoS7Dow==", "QQLDl3Bfw7vCn8OKwpw=", "w5BGwrzDtRQ=", "RwjDm3ZK", "aDzCl2kK", "wrXDlCIow4I=", "w7Vxw5XDk8O1", "w5lhw48G", "w6lVHmQdwp0Lew==", "DlHCvzTDvykewp1N", "w4F+wocDwo7ChcKsZnbDsA==", "Txgow6A=", "w4Buw4UZEA==", "I8O/wppXJsK+wos=", "Y8KLAzBnw4XDgQ==", "worCqHk0w4NXwoYzOHjDhBAmE8Kz", "OBw+w5hwwpjCtcO7IQ==", "TyIV", "bEXCpsOOwqzDlw==", "wrjDjFZ2wpw=", "SMOaScKXLMOmwpw0wpEIwqs=", "wrHDogpQNxLCm20CdMOXw4cqGmXDug==", "wrTDqQ1gLBLCm20=", "L3k5QxrDlVVvDg==", "dMOFw5ISw58jwoM=", "X8OFAMO3FE/DnA==", "wrXDqgt4JBnCgVAq", "w5xqw4gVKhg=", "XBYlw6h+bg==", "GBA7woRGwpXDgQ==", "VgDCgVg=", "RwPCi8ON", "VgzCm8OJdhR7Tg8=", "w4xFbcKo", "wqzDgW7DvVM=", "w7XDrsO1", "S3ATcjI=", "VcOHAMOm", "BsOZa25WwoxQw65tw5bDnQ==", "UMOaRMKY", "JMK3wqTChMOt", "wo7DvH3DjA==", "McO7w49Iwr7Do8KaUXnCqMO/", "w7FTw4nDs8O1Jg==", "w6MawptZ", "w7hFesKmCQ==", "ScOVTsKH", "T8K7GyVyw4BgwrdmwpJX", "cHUuw6U=", "wpfDs3fDk0o=", "HsOGwoVk", "NHMcwqnCkzx5w63Cqj8v", "B8OJwo97", "f8Kew4nDgMKX", "bMKAJSt7", "b8KdGis=", "SsOIccKHLg==", "ayvDqCnDqQ==", "w5spw7xpwpXDoGoeFg==", "woV5wrzCu3g=", "w4Ulw7t1wpzDqA==", "wqLCsF0Aw68=", "TRDCi0Ut", "wqhsOy/DsA==", "bRfCj8O2Yw==", "w59hw4sdKwMRREM1wp3DpA==", "UhQ4fgk=", "w6hdw47Dp8O1JQ54wpYq", "TxLCpsOqUg==", "H18ZawbDlEdnLcKXBm8yQQ==", "w5V3Bl4a", "wqvDh27Dn0E=", "RFfClcOuwoQ=", "e1XChMOlwoQ=", "EmcCwpfCjA==", "w7EvworCqsKM", "e8OZw6Ixw7M=", "DsOAwoDCpA==", "wp7Cpnkq", "akxrPg==", "w7VTw5jDv8Oe", "wp7Cpnkqw6A=", "Dh4qwqpp", "wqDDpw1+Dw==", "w4d8wpQ="];
  r = c, a = 458, function (t) {
    for (; --t;) r.push(r.shift());
  }(++a);
  u = "documentElement", f = "scrollTop", x = "now", l = "detail", h = "value", d = "handleEvent", p = "addEventListener", v = "document", m = "timestamp", w = "clientY", b = "clientX", g = "elementId", _ = "length", y = "concat", C = "forEach", k = "push", O = "data", D = 0, j = void 0, S = void 0;

  function E(t) {
    var e = {};
    return e["KSzEW"] = "ecl", o[e["KSzEW"]](t[_])[y](t);
  }

  ("undefined" == typeof window ? "undefined" : i(window)) !== "undefined" && (j = window, S = window["Date"]);
  var A = {};
  A["init"] = function () {
    this[O] = [];
  }, A["handleEvent"] = function () {
    var t = {},
        e = j[v][u][f] || j[v].body[f];
    (function (t, e) {
      return t > e;
    })(e, 0) && (t[f] = e, t[m] = function (t, e) {
      return t - e;
    }(S[x](), D), this[O][k](t)), function (t, e) {
      return t > e;
    }(this[O][_], 5) && this[O].shift();
  }, A["pack"] = function () {
    var t = [][y](o.es("zc"));
    return this[O][C](function (e) {
      t = t[y](o.en(e[f]), o.en(e[m]));
    }), E(t);
  }, A["packN"] = function () {
    if (!this[O][_]) return [];
    var t = [][y](o.ek(3, this[O]));
    return this[O][C](function (e) {
      t = t[y](o.va(e[f]), o.va(e[m]));
    }), t;
  };
  var K = {};
  K["init"] = function () {
    this[O] = [];
  }, K["handleEvent"] = function (t) {
    var e = "target",
        n = t || j.event,
        r = n[e].id || "",
        a = {};
    a[g] = r, a[b] = n[b], a[w] = n[w], a[m] = function (t, e) {
      return t - e;
    }(S[x](), D), this[O][k](a), function (t, e) {
      return t > e;
    }(this[O][_], 5) && this[O].shift();
  }, K["pack"] = function () {
    var t = [][y](o.es("wt"));
    return this[O][C](function (e) {
      t = t[y](o.en(e[b]), o.en(e[w]), o.es(e[g]), o.en(e[m]));
    }), E(t);
  }, K["packN"] = function () {
    if (!this[O][_]) return [];
    var t = [][y](o.ek(2, this[O]));
    return this[O][C](function (e) {
      t = t[y](o.va(e[b]), o.va(e[w]), o.va(e[m]), o.va(e[g][_]), o.sc(e[g]));
    }), t;
  };
  var M = {};
  M["init"] = function () {
    this[O] = [];
  }, M["handleEvent"] = function (t) {
    var e = t || window.event,
        n = e.keyCode || e.which;

    switch (n) {
      case 49:
      case 65:
      case 66:
      case 67:
        n = "P";
        break;

      case 50:
      case 68:
      case 69:
        n = "D";
        break;

      case 51:
      case 70:
      case 71:
      case 72:
        n = "E";
        break;

      case 52:
      case 73:
      case 74:
        n = "R";
        break;

      case 53:
      case 75:
      case 76:
      case 77:
        n = "2";
        break;

      case 54:
      case 78:
      case 79:
        n = "0";
        break;

      case 55:
      case 80:
      case 81:
        n = "1";
        break;

      case 56:
      case 82:
      case 83:
      case 84:
        n = "9";
        break;

      case 57:
      case 85:
      case 86:
      case 87:
        n = "G";
        break;

      case 48:
      case 88:
      case 89:
      case 90:
        n = "O";
        break;

      case 37:
      case 38:
      case 39:
      case 40:
      case 45:
      case 46:
      case 33:
      case 34:
      case 35:
      case 36:
        n = "F";
        break;

      case 32:
        n = "S";
        break;

      default:
        n = "";
    }

    var r = {};
    r[h] = n, r[m] = function (t, e) {
      return t - e;
    }(S[x](), D), this[O][k](r), function (t, e) {
      return t > e;
    }(this[O][_], 5) && this[O].shift();
  }, M["pack"] = function () {
    var t = [][y](o.es("mq"));
    return this[O][C](function (e) {
      t = t[y](o.es(e[h]), o.en(e[m]));
    }), E(t);
  }, M["packN"] = function () {
    if (!this[O][_]) return [];
    var t = [][y](o.ek(6, this[O]));
    return this[O][C](function (e) {
      t = t[y](o.va(e[h][_]), o.sc(e[h]), o.va(e[m]));
    }), t;
  };
  var T = {};
  T["init"] = function () {
    this[O] = [];
  }, T["handleEvent"] = function (t) {
    var e = function (t, e) {
      return t > e;
    },
        n = t || j.event,
        r = {},
        a = j[v][u][f] || j[v].body[f];

    if (function (t, e) {
      return t > e;
    }(a, 0)) {
      var i = n.wheelDelta ? function (t, e) {
        return t < e;
      }(n.wheelDelta, 0) ? 0 : 1 : n[l] ? e(n[l], 0) ? 0 : 1 : 2;
      r[f] = a, r[b] = n[b], r[w] = n[w], r.direction = i, r[m] = function (t, e) {
        return t - e;
      }(S[x](), D), this[O][k](r);
    }

    e(this[O][_], 5) && this[O].shift();
  }, T["pack"] = function () {
    var t = [][y](o.es("cz"));
    return this[O][C](function (e) {
      t = t[y](o.en(e[f]), o.en(e[b]), o.en(e[w]), o.en(e.direction), o.en(e[m]));
    }), E(t);
  }, T["packN"] = function () {
    if (!this[O][_]) return [];
    var t = [][y](o.ek(5, this[O]));
    return this[O][C](function (e) {
      t = t[y](o.va(e[b]), o.va(e[w]), o.va(e.direction), o.va(e[f]), o.va(e[m]));
    }), t;
  };

  var q = function () {};

  t["env"]["NODE_ENV"] && (q = function (t) {
    var e = {};

    switch (e["NIeYW"] = "scroll", e["ZwxID"] = "mousedown", e["pCnGe"] = "keyup", t.type) {
      case e["NIeYW"]:
        A[d](t);
        break;

      case e["ZwxID"]:
        K[d](t);
        break;

      case e["pCnGe"]:
        M[d](t);
    }
  });
  var z = {};
  z["init"] = function (t) {
    D = t;
  }, z["initInfo"] = function () {
    var t = {};
    t["jsVtn"] = "init", [A, K, M, T][C](function (e) {
      e[t["jsVtn"]]();
    });
  }, z["initEvent"] = function () {
    var t = {};
    t["ULqNN"] = "mousedown", t["LUzgE"] = "scroll", t["LwGAA"] = "keyup", t["suVJA"] = function (t, e) {
      return t in e;
    }, t["NupZs"] = "onmousewheel", t["sYZvj"] = "mousewheel", t["lpYFB"] = "DOMMouseScroll", j[v][p](t["ULqNN"], K, !0), j[v][p](t["LUzgE"], A, !0), j[v][p](t["LwGAA"], M, !0), t["suVJA"](t["NupZs"], j[v]) ? j[v][p](t["sYZvj"], T, !0) : j[v][p](t["lpYFB"], T, !0);
  }, z["clearCache"] = function () {
    [A, K, M, T][C](function (t) {
      t[O] = [];
    });
  }, z["pack"] = function () {
    return [][y](A["pack"](), K["pack"](), M["pack"](), T["pack"]());
  }, z["packN"] = function () {
    return [][y](A["packN"](), K["packN"](), M["packN"](), T["packN"]());
  }, z["swallow"] = q, e["exports"] = z;
};