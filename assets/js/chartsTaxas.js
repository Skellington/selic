! function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }
  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) r.d(n, o, function (t) {
        return e[t]
      }.bind(null, o));
    return n
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "", r(r.s = 6)
}({
  6: function (e, t) {
    function r(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }! function (e, t, n) {
      "use strict";
      var o;
      r(o = {
        colors: ["#002E59", "#DBC476"],
        fill: {
          opacity: 1,
          colors: ["#002E59", "#DBC476"]
        },
        series: [{
          name: "Financeiro",
          type: "column",
          data: ["834,09", "1357,90", "1283,63", "4075,24", "4350,37", "6706,79", "11989,48", "14959,46", "15237,52", "13836,40", "16611,67", "17293,47", "18745,82", "18997,06", "19756,00", "16990,22", "17401,64", "17051,48", "19018,34", "21680,51", "17666,31", "17430,50", "16403,80", "15402,19", "15331,17", "15383,63", "17217,21", "19550,13", "19745,08"]
        }, {
          name: "Quantidade",
          type: "line",
          data: [64, 77, 91, 114, 122, 122, 133, 119, 125, 141, 185, 236, 289, 388, 445, 505, 581, 604, 575, 667, 720, 750, 788, 769, 811, 807, 826, 863, 863]
        }],
        chart: {
          stacked: !0,
          type: "bar",
          height: 350
        },
        stroke: {
          show: !0,
          curve: "smooth",
          lineCap: "butt",
          colors: void 0,
          width: 2,
          dashArray: 0
        },
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        xaxis: {
          categories: ["AGO/19", "SET/19", "OUT/19", "NOV/19", "DEZ/19", "JAN/20", "FEV/20", "MAR/20", "ABR/20", "MAI/20", "JUN/20", "JUL/20", "AGO/20", "SET/20", "OUT/20", "NOV/20", "DEZ/20", "JAN/21", "FEV/21", "MAR/21", "ABR/21", "MAI/21", "JUN/21", "JUL/21", "AGO/21", "SET/21", "OUT/21", "NOV/21", "DEZ/21"],
          labels: {
            rotate: -90
          }
        },
        yaxis: {
          title: {
            text: "Valor Financeiro ( trilhóes)"
          },
          decimalsInFloat: 3
        },
        dataLabels: {
          enabled: !1
        }
      }, "stroke", {
        width: [5, 5],
        curve: "straight",
        dashArray: [0, 0]
      }), r(o, "legend", {
        show: !0,
        position: "top",
        containerMargin: {
          top: 30
        }
      });
      new ApexCharts(document.querySelector("#TaxasChart6_1_1"), TaxasChart6_1_1).render()
    }(window, document, jQuery)
  }
});