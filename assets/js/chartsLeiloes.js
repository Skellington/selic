! function (e) {
  var t = {};

  function o(r) {
    if (t[r]) return t[r].exports;
    var a = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, o), a.l = !0, a.exports
  }
  o.m = e, o.c = t, o.d = function (e, t, r) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (o.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var a in e) o.d(r, a, function (t) {
        return e[t]
      }.bind(null, a));
    return r
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return o.d(t, "a", t), t
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, o.p = "", o(o.s = 4)
}({
  4: function (e, t) {
    function o(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e
    }! function (e, t, r) {
      "use strict";
      var a, i, n, s, l, c = (o(a = {
          colors: ["#002E59", "#DBC476", "#cccccc"],
          fill: {
            opacity: 1,
            colors: ["#002E59", "#DBC476", "#cccccc"]
          },
          series: [{
            name: "Título",
            data: [0.40, 0.59, 0.38, 0.65, 0.45]
          }, {
            name: "Swap",
            data: [0.28, 0.66, 0.48, 0.43, 0.44]
          }, {
            name: "Compromissada",
            data: [0.36, 0.36, 0.47, 0.46, 0.42]
          }],
          chart: {
            stacked: !0,
            type: "bar",
            height: 350
          },
          stroke: {
            show: true,
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
            categories: ["2017", "2018", "2019", "2020", "2021"],
          },
          yaxis: {
            title: {
              text: "Quantidade (milhares)"
            },
            decimalsInFloat: 1
          },
          dataLabels: {
            enabled: !1
          }
        }, "stroke", {
          width: 1,
          curve: "straight",
          dashArray: [0, 0]
        }), o(a, "legend", {
          show: !0,
          position: "top",
          containerMargin: {
            top: 30
          }
        }), a),
        d = (o(i = {
          colors: ["#002E59"],
          fill: {
            opacity: 1,
            colors: ["#002E59"]
          },
          series: [{
            name: "Valor financeiro",
            data: ["  5.999.972.353.000 ", "  3.284.183.538.000 ", "  2.827.658.330.000 ", "  3.884.721.340.000 ", "  3.287.420.695.000 ", "  3.827.154.472.000 ", "  5.190.339.208.000 ", "  3.615.507.410.000 ", "  5.136.646.369.000 ", "  5.908.870.512.000 ", "  2.105.185.617.000 ", "  4.105.878.067.000 ", "  5.872.827.666.000 ", "  4.757.134.659.000 ", "  5.170.975.184.000 ", "  2.985.743.694.000 ", "  3.395.228.043.000 ", "  4.607.139.073.000 ", "  7.182.622.218.000 ", "  7.104.248.640.000 ", "  7.258.152.647.000 ", "  7.056.911.478.000 ", "  5.447.085.688.000 ", "  4.353.970.511.000 ", "  5.750.947.406.000 ", "  3.925.084.520.000 ", "  4.475.951.583.000 ", "  5.346.301.077.000 ", "  6.547.971.880.000 ", "  4.785.507.761.000 ", "  4.881.619.598.000 ", "  6.309.055.928.000 ", "  4.837.051.329.000 ", "  5.149.886.730.000 ", "  3.783.552.379.000 ", "  3.682.029.148.000 ", "  4.052.135.767.000 ", "  2.839.258.849.000 ", "  6.257.712.574.000 ", "  9.097.964.836.000 ", "  9.032.010.433.000 ", "  8.955.043.565.000 ", "  12.991.218.495.000 ", "  10.559.113.002.000 ", "  11.314.695.124.000 ", "  11.517.581.983.000 ", "  13.524.550.906.000 ", "  17.201.285.643.000 ", "  19.859.943.450.000 ", "  16.152.418.315.000 ", "  20.784.542.062.000 ", "  21.029.900.460.000 ", "  20.940.496.014.000 ", "  19.372.907.562.000 ", "  21.846.617.290.000 ", "  19.791.326.753.000 ", "  21.764.843.429.000 ", "  23.421.440.367.000 ", "  20.623.655.463.000 ", "  21.148.818.806.000 "]
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
            categories: ["JAN/17", "FEV/17", "MAR/17", "ABR/17", "MAI/17", "JUN/17", "JUL/17", "AGO/17", "SET/17", "OUT/17", "NOV/17", "DEZ/17", "JAN/18", "FEV/18", "MAR/18", "ABR/18", "MAI/18", "JUN/18", "JUL/18", "AGO/18", "SET/18", "OUT/18", "NOV/18", "DEZ/18", "JAN/19", "FEV/19", "MAR/19", "ABR/19", "MAI/19", "JUN/19", "JUL/19", "AGO/19", "SET/19", "OUT/19", "NOV/19", "DEZ/19", "JAN/20", "FEV/20", "MAR/20", "ABR/20", "MAI/20", "JUN/20", "JUL/20", "AGO/20", "SET/20", "OUT/20", "NOV/20", "DEZ/20", "JAN/21", "FEV/21", "MAR/21", "ABR/21", "MAI/21", "JUN/21", "JUL/21", "AGO/21", "SET/21", "OUT/21", "NOV/21", "DEZ/21"],
            tickAmount: 20,
            labels: {
              hideOverlappingLabels: true,
            }
          },
          yaxis: {
            title: {
              text: "Valor financeiro (R$ trilhões)"
            },
            decimalsInFloat: false
          },
          dataLabels: {
            enabled: !1
          }
        }, "stroke", {
          width: 1,
          curve: "straight",
          dashArray: [0, 0]
        }), o(i, "legend", {
          show: !0,
          position: "top",
          containerMargin: {
            top: 30
          }
        }), i),
        A = (o(n = {
          colors: ["#002E59"],
          fill: {
            opacity: 1,
            colors: ["#002E59"]
          },
          series: [{
            name: "Valor financeiro",
            data: ["66.200.533.975", "75.562.590.102", "72.900.904.324", "60.525.855.197", "50.534.689.206", "71.441.104.809", "63.493.364.584", "49.895.409.606", "55.049.725.415", "55.298.103.324", "44.444.320.206", "32.048.968.602", "49.535.105.580", "45.944.031.428", "76.414.411.885", "91.029.690.341", "35.129.036.767", "40.354.802.060", "60.528.746.305", "73.742.004.764", "55.496.820.200", "54.128.057.218", "51.238.869.928", "28.849.664.463", "58.321.396.368", "53.661.687.843", "69.325.965.421", "53.915.449.600", "76.375.223.044", "68.079.601.785", "66.577.517.030", "56.886.750.228", "64.592.356.267", "57.082.946.617", "52.867.991.723", "27.811.233.479", "61.143.261.788", "42.492.687.584", "53.610.712.012", "35.905.807.564", "84.484.623.534", "99.391.062.370", "155.140.854.183", "111.539.573.447", "153.115.200.297", "170.465.317.521", "158.918.480.799", "181.843.014.194", "152.932.643.359", "167.736.522.607", "161.095.247.590", "171.237.375.547", "154.609.718.376", "133.140.982.950", "127.483.917.322", "67.186.568.457", "141.390.285.965", "142.831.228.938", "95.127.359.976", "72.034.212.357 "]
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
            categories: ["JAN/17", "FEV/17", "MAR/17", "ABR/17", "MAI/17", "JUN/17", "JUL/17", "AGO/17", "SET/17", "OUT/17", "NOV/17", "DEZ/17", "JAN/18", "FEV/18", "MAR/18", "ABR/18", "MAI/18", "JUN/18", "JUL/18", "AGO/18", "SET/18", "OUT/18", "NOV/18", "DEZ/18", "JAN/19", "FEV/19", "MAR/19", "ABR/19", "MAI/19", "JUN/19", "JUL/19", "AGO/19", "SET/19", "OUT/19", "NOV/19", "DEZ/19", "JAN/20", "FEV/20", "MAR/20", "ABR/20", "MAI/20", "JUN/20", "JUL/20", "AGO/20", "SET/20", "OUT/20", "NOV/20", "DEZ/20", "JAN/21", "FEV/21", "MAR/21", "ABR/21", "MAI/21", "JUN/21", "JUL/21", "AGO/21", "SET/21", "OUT/21", "NOV/21", "DEZ/21"],
            tickAmount: 20,
            labels: {
              hideOverlappingLabels: true,
            }
          },
          yaxis: {
            title: {
              text: "Valor financeiro (R$ bilhões)"
            },
            decimalsInFloat: false
          },
          dataLabels: {
            enabled: !1
          }
        }, "stroke", {
          width: 1,
          curve: "straight",
          dashArray: [0, 0]
        }), o(n, "legend", {
          show: !0,
          position: "top",
          containerMargin: {
            top: 30
          }
        }), n),
        h = (o(s = {
          colors: ["#002E59", "#DBC476"],
          fill: {
            opacity: 1,
            colors: ["#002E59", "#DBC476"]
          },
          series: [{
            name: "Posição vendedora",
            data: [" - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", "2.97 ", "11.01 ", "8.43 ", "3.53 ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - ", " - "]
          }, {
            name: " Posição compradora",
            data: ["6,40", "2,40", "5,50", "6,39", "14,44", "6,94", "6,19", "-", "6,00", "-", "-", "9,64", "-", "6,16", "9,03", "2,57", "12,90", "45,13", "14,02", "6,76", "9,80", "8,03", "12,22", "10,37", "13,40", "9,81", "12,32", "5,34", "5,56", "4,53", "0,62", "8,58", "0,61", "3,08", "7,78", "7,45", "-", "14,39", "7,84", "15,12", "11,86", "9,61", "6,04", "11,61", "5,12", "10,84", "12,23", "15,20", "14,82", "15,75", "23,53", "11,69", "14,77", "14,94", "15,40", "10,40", "17,37", "22,65", "5,60", "13,88"]
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
            categories: ["JAN/17", "FEV/17", "MAR/17", "ABR/17", "MAI/17", "JUN/17", "JUL/17", "AGO/17", "SET/17", "OUT/17", "NOV/17", "DEZ/17", "JAN/18", "FEV/18", "MAR/18", "ABR/18", "MAI/18", "JUN/18", "JUL/18", "AGO/18", "SET/18", "OUT/18", "NOV/18", "DEZ/18", "JAN/19", "FEV/19", "MAR/19", "ABR/19", "MAI/19", "JUN/19", "JUL/19", "AGO/19", "SET/19", "OUT/19", "NOV/19", "DEZ/19", "JAN/20", "FEV/20", "MAR/20", "ABR/20", "MAI/20", "JUN/20", "JUL/20", "AGO/20", "SET/20", "OUT/20", "NOV/20", "DEZ/20", "JAN/21", "FEV/21", "MAR/21", "ABR/21", "MAI/21", "JUN/21", "JUL/21", "AGO/21", "SET/21", "OUT/21", "NOV/21", "DEZ/21"],
            tickAmount: 20,
            labels: {
              hideOverlappingLabels: true,
            }
          },
          yaxis: {
            title: {
              text: "Valor financeiro (US$ bilhões)"
            },
            decimalsInFloat: 0
          },
          dataLabels: {
            enabled: !1
          }
        }, "stroke", {
          width: 1,
          curve: "straight",
          dashArray: [0, 0]
        }), o(s, "legend", {
          show: !0,
          position: "top",
          containerMargin: {
            top: 30
          }
        }), s),
        u = (o(l = {
          colors: ["#002E59", "#DBC476"],
          fill: {
            opacity: 1,
            colors: ["#002E59", "#DBC476"]
          },
          series: [{
            name: "Quantidade",
            data: ["  1,55 ", "  2,10 ", "  2,96 "]
          }, {
            name: "Financeiro",
            data: ["0,64", "4,90", "7,42"]
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
            categories: ["OUT/21", "NOV/21", "DEZ/21"],
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
        }), o(l, "legend", {
          show: !0,
          position: "top",
          containerMargin: {
            top: 30
          }
        }), l);
      new ApexCharts(document.querySelector("#LeiloesChart4_1_1"), c).render(), new ApexCharts(document.querySelector("#LeiloesChart4_2_1"), d).render(), new ApexCharts(document.querySelector("#LeiloesChart4_3_1"), A).render(), new ApexCharts(document.querySelector("#LeiloesChart4_4_1"), h).render(), new ApexCharts(document.querySelector("#LeiloesChart4_5_1"), u).render()
    }(window, document, jQuery)
  }
});