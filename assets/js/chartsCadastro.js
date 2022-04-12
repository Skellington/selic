! function (e) {
  var t = {};

  function n(a) {
    if (t[a]) return t[a].exports;
    var o = t[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, a) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var a = Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(a, o, function (t) {
        return e[t]
      }.bind(null, o));
    return a
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 1)
}([, function (e, t) {
  function n(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }! function (e, t, a) {
    "use strict";
    var o, r, i, c, d;

    function s(e, t) {
      e.zoomX(new Date("01 Jan ".concat(t)).getTime(), new Date("31 Dec ".concat(t)).getTime()), e.updateOptions({
        xaxis: {
          tickAmount: 12
        }
      })
    }

    function u(e, t) {
      e.zoomX(new Date("01 Jan 2017").getTime(), new Date("31 Dec 2021").getTime()), e.updateOptions({
        xaxis: {
          tickAmount: 60
        }
      })
    }
    var l = [new Date("01 Jan 2017").getTime(), new Date("01 Feb 2017").getTime(), new Date("01 Mar 2017").getTime(), new Date("01 Apr 2017").getTime(), new Date("01 May 2017").getTime(), new Date("01 Jun 2017").getTime(), new Date("01 Jul 2017").getTime(), new Date("01 Aug 2017").getTime(), new Date("01 Sep 2017").getTime(), new Date("01 Oct 2017").getTime(), new Date("01 Nov 2017").getTime(), new Date("01 Dec 2017").getTime(), new Date("01 Jan 2018").getTime(), new Date("01 Feb 2018").getTime(), new Date("01 Mar 2018").getTime(), new Date("01 Apr 2018").getTime(), new Date("01 May 2018").getTime(), new Date("01 Jun 2018").getTime(), new Date("01 Jul 2018").getTime(), new Date("01 Aug 2018").getTime(), new Date("01 Sep 2018").getTime(), new Date("01 Oct 2018").getTime(), new Date("01 Nov 2018").getTime(), new Date("01 Dec 2018").getTime(), new Date("01 Jan 2019").getTime(), new Date("01 Feb 2019").getTime(), new Date("01 Mar 2019").getTime(), new Date("01 Apr 2019").getTime(), new Date("01 May 2019").getTime(), new Date("01 Jun 2019").getTime(), new Date("01 Jul 2019").getTime(), new Date("01 Aug 2019").getTime(), new Date("01 Sep 2019").getTime(), new Date("01 Oct 2019").getTime(), new Date("01 Nov 2019").getTime(), new Date("01 Dec 2019").getTime(), new Date("01 Jan 2020").getTime(), new Date("01 Feb 2020").getTime(), new Date("01 Mar 2020").getTime(), new Date("01 Apr 2020").getTime(), new Date("01 May 2020").getTime(), new Date("01 Jun 2020").getTime(), new Date("01 Jul 2020").getTime(), new Date("01 Aug 2020").getTime(), new Date("01 Sep 2020").getTime(), new Date("01 Oct 2020").getTime(), new Date("01 Nov 2020").getTime(), new Date("01 Dec 2020").getTime(), new Date("01 Jan 2021").getTime(), new Date("01 Feb 2021").getTime(), new Date("01 Mar 2021").getTime(), new Date("01 Apr 2021").getTime(), new Date("01 May 2021").getTime(), new Date("01 Jun 2021").getTime(), new Date("01 Jul 2021").getTime(), new Date("01 Aug 2021").getTime(), new Date("01 Sep 2021").getTime(), new Date("01 Oct 2021").getTime(), new Date("01 Nov 2021").getTime(), new Date("01 Dec 2021").getTime()],
      m = [12, 12, 11, 11, 11, 11, 12, 12, 11, 11, 11, 11, 12, 12, 11, 11, 11, 11, 12, 12, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 13, 13, 12, 13, 13, 13, 13, 13, 12, 12, 12, 12, 13, 13, 12, 12, 12, 12],
      f = [14, 14, 14, 13, 13, 13, 14, 14, 14, 13, 13, 13, 14, 15, 15, 14, 14, 14, 15, 15, 15, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 13, 13, 13, 14, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 12, 12, 12, 11, 11, 11, 10, 10, 10],
      p = [92, 92, 92, 92, 89, 89, 89, 88, 88, 88, 87, 87, 129, 129, 129, 129, 148, 148, 148, 145, 145, 145, 144, 144, 144, 143, 143, 143, 140, 140, 140, 139, 139, 139, 138, 138, 139, 138, 138, 138, 138, 138, 138, 135, 135, 135, 134, 134, 134, 133, 133, 133, 130, 130, 131, 130, 130, 130, 129, 129],
      g = [3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      y = [23, 23, 23, 23, 23, 23, 22, 22, 22, 22, 22, 22, 21, 21, 21, 21, 21, 21, 20, 20, 20, 20, 20, 20, 18, 18, 18, 18, 18, 18, 17, 17, 17, 26, 26, 26, 26, 26, 26, 26, 26, 26, 25, 25, 25, 25, 25, 26, 24, 24, 24, 24, 24, 24, 23, 23, 23, 23, 23, 23],
      h = [190, 190, 189, 188, 188, 187, 187, 186, 185, 184, 183, 182, 181, 181, 180, 179, 180, 179, 180, 181, 180, 179, 178, 179, 178, 177, 177, 176, 175, 174, 174, 185, 184, 192, 191, 191, 190, 189, 188, 188, 188, 188, 187, 186, 185, 185, 184, 183, 185, 184, 184, 183, 182, 183, 182, 182, 181, 181, 181, 180],
      w = [10, 11, 10, 9, 9, 9, 10, 9, 9, 9, 9, 9, 9, 10, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6],
      _ = (n(o = {
        colors: ["#002E59", "#397FBF", "#224C73", "#E1D9C4", "#A89560", "#DBC27D"],
        fill: {
          opacity: 1,
          colors: ["#002E59", "#397FBF", "#224C73", "#E1D9C4", "#A89560", "#DBC27D"]
        },
        series: [{
          name: "LFT",
          data: l.map((function (e, t) {
            return [e, m[t]]
          }))
        }, {
          name: "LTN",
          data: l.map((function (e, t) {
            return [e, f[t]]
          }))
        }, {
          name: "NTN-B",
          data: l.map((function (e, t) {
            return [e, p[t]]
          }))
        }, {
          name: "NTN-C",
          data: l.map((function (e, t) {
            return [e, g[t]]
          }))
        }, {
          name: "NTN-F",
          data: l.map((function (e, t) {
            return [e, y[t]]
          }))
        }, {
          name: "NTN-I",
          data: l.map((function (e, t) {
            return [e, h[t]]
          }))
        }, {
          name: "Outros",
          data: l.map((function (e, t) {
            return [e, w[t]]
          }))
        }],
        chart: {
          width: "100%",
          type: "bar",
          height: 450,
          stacked: !0,
          animations: {
            enabled: !1
          }
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
          type: "datetime",
          tickPlacement: "on",
          tickAmount: 60,
          labels: {
            show: !0,
            rotate: -90,
            rotateAlways: !0,
            trim: !1,
            hideOverlappingLabels: !1,
            showDuplicates: !0,
            format: "MMM/yy",
            minHeight: 55,
            formatter: function (e, t, n) {
              return moment(t).format("MMM/YY")
            },
            style: {
              fontSize: "13px",
              fontFamily: "'Exo', sans-serif"
            }
          },
          tooltip: {
            enabled: !1
          }
        }
      }, "stroke", {
        show: !1,
        width: 0
      }), n(o, "yaxis", {
        min: 0,
        max: 450,
        tickAmount: 9,
        title: {
          text: "Quantidade",
          style: {
            fontWeight: 400,
            fontSize: "14px"
          }
        },
        labels: {
          formatter: function (e, t) {
            return isNaN(t) ? e : e.toFixed(0)
          }
        },
        tooltip: {
          enabled: !1,
          formatter: void 0,
          offsetY: 0,
          style: {
            fontSize: 0,
            fontFamily: 0
          }
        }
      }), n(o, "dataLabels", {
        enabled: !1
      }), n(o, "stroke", {
        width: [5, 5],
        curve: "straight",
        dashArray: [0, 0]
      }), n(o, "legend", {
        show: !0,
        position: "top",
        containerMargin: {
          top: 30
        }
      }), o),
      D = [1.3891, 1.4716, 1.4556, 1.4848, 1.5072, 1.5559, 1.5882, 1.6324, 1.6135, 1.6375, 1.6581, 1.6784, 1.7184, 1.6845, 1.7369, 1.7742, 1.7941, 1.8224, 1.8912, 1.8748, 1.9331, 1.9845, 2.0147, 2.0495, 2.1396, 2.0757, 2.1159, 2.1594, 2.2018, 2.2327, 2.2757, 2.3069, 2.3433, 2.3747, 2.4054, 2.41, 2.4328, 2.4434, 2.2956, 2.3387, 2.3791, 2.3727, 2.4061, 2.4386, 2.3227, 2.348, 2.3681, 2.4125, 2.4565, 2.5848, 2.5226, 2.5662, 2.5931, 2.6348, 2.7033, 2.7608, 2.5315, 2.6507, 2.7255, 2.7838],
      T = [1.0991, 1.1639, 1.1383, 1.1819, 1.2112, 1.1542, 1.2068, 1.283, 1.216, 1.2467, 1.2785, 1.1931, 1.2489, 1.2857, 1.2413, 1.3255, 1.3376, 1.2026, 1.2687, 1.2889, 1.1906, 1.2361, 1.2684, 1.1469, 1.2081, 1.2448, 1.1403, 1.188, 1.2361, 1.1658, 1.2336, 1.2545, 1.1603, 1.2027, 1.2548, 1.1777, 1.2315, 1.2681, 1.2851, 1.2066, 1.258, 1.3184, 1.1717, 1.2679, 1.4104, 1.4368, 1.539, 1.6483, 1.7345, 1.8229, 1.8463, 1.6378, 1.7148, 1.7661, 1.6956, 1.6958, 1.7485, 1.4469, 1.4847, 1.5326],
      b = [1.4476, 1.5077, 1.5155, 1.5134, 1.4015, 1.414, 1.473, 1.473, 1.5128, 1.5108, 1.4945, 1.5061, 1.5769, 1.5737, 1.5928, 1.5995, 1.5293, 1.5185, 1.5623, 1.4375, 1.4467, 1.5527, 1.5532, 1.5765, 1.6528, 1.6562, 1.6936, 1.7232, 1.6566, 1.7189, 1.7615, 1.7365, 1.8021, 1.8639, 1.808, 1.8412, 1.879, 1.9535, 1.7939, 1.8312, 1.8396, 1.8344, 1.9569, 1.8087, 1.773, 1.8079, 1.8549, 1.9934, 2.0079, 2.0001, 2.0001, 2.1095, 2.055, 2.1025, 2.1322, 2.0879, 2.1321, 2.0886, 2.1702, 2.1947],
      v = [.5883, .6161, .6314, .6375, .6376, .6531, .6522, .6624, .6813, .6879, .6912, .6641, .6783, .6946, .7126, .7214, .691, .6771, .6648, .6467, .673, .7214, .7363, .7445, .726, .7475, .7555, .7631, .7883, .8209, .8102, .8145, .8443, .8724, .8708, .8861, .8728, .8855, .8692, .9041, .9213, .9272, .922, .9106, .917, .9382, .9533, .9946, .7881, .7858, .7762, .7973, .8119, .8311, .7946, .776, .7829, .7484, .7752, .8076],
      S = [.1169, .1191, .1213, .1202, .1186, .1063, .1064, .107, .1091, .1084, .1086, .1085, .11, .1117, .1128, .1131, .113, .1132, .1139, .1164, .1163, .12, .1214, .1231, .1209, .1223, .1239, .1251, .1282, .1323, .1321, .1348, .1364, .1365, .1368, .1345, .1375, .14, .1356, .1378, .1417, .145, .1462, .1497, .1522, .1563, .1568, .1585, .1617, .1681, .1682, .1216, .126, .1299, .1274, .1242, .1244, .1243, .1254, .1232],
      x = (n(r = {
        colors: ["#002E59", "#cccccc", "#82734A", "#00B0F0", "#cccccc"],
        fill: {
          opacity: 1,
          colors: ["#002E59", "#cccccc", "#82734A", "#00B0F0", "#cccccc"]
        },
        series: [{
          name: " LFT",
          data: l.map((function (e, t) {
            return [e, D[t]]
          }))
        }, {
          name: " LTN",
          data: l.map((function (e, t) {
            return [e, T[t]]
          }))
        }, {
          name: " NTN-B",
          data: l.map((function (e, t) {
            return [e, b[t]]
          }))
        }, {
          name: " NTN-F",
          data: l.map((function (e, t) {
            return [e, v[t]]
          }))
        }, {
          name: " Outros",
          data: l.map((function (e, t) {
            return [e, S[t]]
          }))
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
          type: "datetime",
          tickPlacement: "on",
          tickAmount: 60,
          labels: {
            show: !0,
            rotate: -90,
            rotateAlways: !0,
            trim: !1,
            hideOverlappingLabels: !1,
            showDuplicates: !0,
            format: "MMM/yy",
            minHeight: 55,
            formatter: function (e, t, n) {
              return moment(t).format("MMM/YY")
            },
            style: {
              fontSize: "13px",
              fontFamily: "'Exo', sans-serif"
            }
          },
          tooltip: {
            enabled: !1
          }
        },
        yaxis: {
          min: 0,
          max: 8,
          tickAmount: 8,
          title: {
            text: "Volume financeiro (R$ trilhões)",
            style: {
              fontWeight: 400,
              fontSize: "14px"
            }
          },
          labels: {
            formatter: function (e, t) {
              return isNaN(t) ? e : e.toFixed(0)
            }
          },
          tooltip: {
            enabled: !1,
            formatter: void 0,
            offsetY: 0,
            style: {
              fontSize: 0,
              fontFamily: 0
            }
          }
        },
        dataLabels: {
          enabled: !1
        }
      }, "stroke", {
        width: [5, 5],
        curve: "straight",
        dashArray: [0, 0]
      }), n(r, "legend", {
        show: !0,
        position: "top",
        containerMargin: {
          top: 30
        }
      }), r),
      k = (n(i = {
        colors: ["#002E59", "#cccccc", "#82734A", "#00B0F0", "#97A9B8", "#96A8B8"],
        fill: {
          opacity: 1,
          colors: ["#002E59", "#cccccc", "#82734A", "#00B0F0", "#97A9B8", "#96A8B8"]
        },
        series: [{
          name: "Bancos",
          data: [169, 162, 162, 169, 170]
        }, {
          name: "CFI",
          data: [30, 31, 31, 34, 34]
        }, {
          name: "Coop. de crédito",
          data: [59, 64, 61, 66, 68]
        }, {
          name: "CTVM",
          data: [71, 65, 61, 59, 59]
        }, {
          name: "DTVM",
          data: [70, 68, 68, 73, 74]
        }, {
          name: "Outros",
          data: [74, 71, 75, 85, 92]
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
          categories: [2017, 2018, 2019, 2020, 2021],
          labels: {
            rotate: -90
          }
        },
        yaxis: {
          min: 0,
          max: 450,
          tickAmount: 9,
          title: {
            text: "Quantidade",
            style: {
              fontWeight: 400,
              fontSize: "14px"
            }
          },
          labels: {
            formatter: function (e, t) {
              return isNaN(t) ? e : e.toFixed(0)
            }
          },
          tooltip: {
            enabled: !1,
            formatter: void 0,
            offsetY: 0,
            style: {
              fontSize: 0,
              fontFamily: 0
            }
          }
        },
        dataLabels: {
          enabled: !1
        }
      }, "stroke", {
        width: [5, 5],
        curve: "straight",
        dashArray: [0, 0]
      }), n(i, "legend", {
        show: !0,
        position: "top",
        containerMargin: {
          top: 30
        }
      }), i),
      C = (n(c = {
        colors: ["#002E59", "#cccccc", "#82734A", "#00B0F0"],
        fill: {
          opacity: 1,
          colors: ["#002E59", "#cccccc", "#82734A", "#00B0F0"]
        },
        series: [{
          name: " Outros",
          data: l.map((function (e, t) {
            return [e, [3323, 3370, 3445, 3522, 3602, 3623, 3649, 3690, 3721, 3853, 3887, 3926, 3963, 3995, 4097, 4064, 4091, 4123, 4161, 4197, 4227, 4264, 4274, 4306, 4308, 4057, 4154, 4175, 4188, 4202, 4254, 4286, 4329, 4393, 4428, 4412, 4461, 4479, 4524, 4540, 4567, 4605, 4654, 4682, 4726, 4797, 4845, 4881, 4906, 4946, 4989, 5033, 5056, 5092, 4930, 4925, 4951, 4987, 4989, 5036][t]]
          }))
        }, {
          name: "  Fundo regulamentado pela CVM",
          data: l.map((function (e, t) {
            return [e, [15077, 15175, 15332, 15442, 15535, 15756, 15894, 16030, 16182, 16294, 16404, 16581, 16699, 16775, 16833, 16986, 17135, 17265, 17359, 17490, 17568, 17785, 17899, 18012, 17851, 17977, 18126, 18288, 18420, 18546, 18736, 18979, 19210, 19458, 19669, 19942, 20238, 20499, 20826, 21073, 21330, 21624, 21948, 22804, 23190, 23600, 23961, 24394, 24767, 25155, 25694, 26121, 26598, 27095, 25658, 25804, 26158, 26431, 26644, 27012][t]]
          }))
        }, {
          name: "Pessoa física",
          data: l.map((function (e, t) {
            return [e, [337, 349, 359, 538, 555, 697, 703, 779, 1428, 27371, 68939, 89241, 90101, 90880, 91690, 92434, 93414, 95126, 96849, 102134, 104769, 106246, 107316, 108670, 109636, 110625, 111634, 113952, 119783, 121700, 123410, 125716, 133136, 137777, 139531, 141931, 143839, 145438, 153516, 162483, 177021, 187912, 193290, 223159, 253213, 281426, 307843, 318586, 325193, 328107, 335550, 340681, 346761, 351543, 300772, 308283, 313519, 259249, 242450, 252620][t]]
          }))
        }, {
          name: " Pessoa jurídica não financeira",
          data: l.map((function (e, t) {
            return [e, [184, 191, 196, 226, 240, 260, 272, 287, 640, 3490, 3597, 6153, 6196, 6249, 6315, 6363, 6455, 6585, 6673, 6843, 6967, 7065, 7143, 7212, 7309, 7385, 7471, 7609, 7766, 7873, 7967, 8117, 8245, 8565, 8730, 8919, 9063, 9185, 9723, 10390, 11056, 11932, 12336, 12836, 13385, 13923, 14388, 14935, 15425, 15736, 16338, 16815, 17288, 17743, 13344, 13958, 14503, 15136, 15206, 15916][t]]
          }))
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
          type: "datetime",
          tickPlacement: "on",
          tickAmount: 60,
          labels: {
            show: !0,
            rotate: -90,
            rotateAlways: !0,
            trim: !1,
            hideOverlappingLabels: !1,
            showDuplicates: !0,
            format: "MMM/yy",
            minHeight: 55,
            formatter: function (e, t, n) {
              return moment(t).format("MMM/YY")
            },
            style: {
              fontSize: "13px",
              fontFamily: "'Exo', sans-serif"
            }
          },
          tooltip: {
            enabled: !1
          }
        },
        yaxis: {
          min: 0,
          max: 45e4,
          tickAmount: 10,
          title: {
            text: "Quantidade (milhares)",
            style: {
              fontWeight: 400,
              fontSize: "14px"
            }
          },
          labels: {
            formatter: function (e, t) {
              return isNaN(t) ? e : e.toFixed(0)
            }
          },
          tooltip: {
            enabled: !1,
            formatter: void 0,
            offsetY: 0,
            style: {
              fontSize: 0,
              fontFamily: 0
            }
          }
        },
        dataLabels: {
          enabled: !1
        }
      }, "stroke", {
        width: [5, 5],
        curve: "straight",
        dashArray: [0, 0]
      }), n(c, "legend", {
        show: !0,
        position: "top",
        containerMargin: {
          top: 30
        }
      }), c),
      A = (n(d = {
        colors: ["#002E59", "#cccccc", "#82734A"],
        fill: {
          opacity: 1,
          colors: ["#002E59", "#cccccc", "#82734A"]
        },
        series: [{
          name: " Outros",
          data: l.map((function (e, t) {
            return [e, [13609, 13527, 13550, 13476, 13502, 12987, 12931, 12859, 13230, 14847, 45278, 54188, 55302, 55592, 55674, 55767, 55938, 56166, 56309, 55945, 56042, 56274, 56299, 56439, 56537, 56672, 56916, 57433, 57665, 58166, 58677, 60109, 62423, 63878, 64938, 68028, 70660, 71833, 74099, 75771, 82631, 86972, 89658, 118025, 148338, 176304, 200866, 209510, 217670, 217959, 219844, 221826, 223131, 225306, 33889, 35662, 37686, 39584, 41253, 42673][t]]
          }))
        }, {
          name: "Livre Movimentação",
          data: l.map((function (e, t) {
            return [e, [16486, 16412, 16567, 16903, 17071, 17339, 17454, 17656, 18676, 47654, 89523, 113295, 114275, 115210, 114535, 114888, 116069, 117809, 119741, 125394, 128254, 129952, 131201, 132767, 134117, 135221, 136525, 139134, 146557, 148669, 150563, 153263, 160862, 166075, 168191, 170934, 173279, 175235, 184738, 196282, 212024, 227326, 234318, 267982, 300987, 331916, 359407, 371533, 379232, 379089, 388224, 394234, 401515, 319394, 195140, 203587, 212188, 222946, 234180, 245600][t]]
          }))
        }, {
          name: "Outros",
          data: l.map((function (e, t) {
            return [e, [2230, 2232, 2236, 2236, 2243, 2244, 2249, 2247, 2254, 2223, 2099, 2119, 2117, 2108, 2115, 2119, 2123, 2121, 2129, 1966, 1977, 1982, 1991, 2010, 2021, 2041, 2056, 2061, 2088, 2099, 1994, 2091, 2118, 2156, 2174, 2195, 2219, 2249, 2283, 2311, 2352, 2423, 2506, 2592, 2726, 2826, 2935, 3034, 3151, 3079, 3203, 3294, 3367, 3452, 3535, 3583, 3651, 3725, 3796, 3879][t]]
          }))
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
          type: "datetime",
          tickPlacement: "on",
          tickAmount: 60,
          labels: {
            show: !0,
            rotate: -90,
            rotateAlways: !0,
            trim: !1,
            hideOverlappingLabels: !1,
            showDuplicates: !0,
            format: "MMM/yy",
            minHeight: 55,
            formatter: function (e, t, n) {
              return moment(t).format("MMM/YY")
            },
            style: {
              fontSize: "13px",
              fontFamily: "'Exo', sans-serif"
            }
          },
          tooltip: {
            enabled: !1
          }
        },
        yaxis: {
          min: 0,
          max: 665e3,
          tickAmount: 10,
          title: {
            text: "Quantidade (milhares)",
            style: {
              fontWeight: 400,
              fontSize: "14px"
            }
          },
          labels: {
            formatter: function (e, t) {
              return isNaN(t) ? e : e.toFixed(0)
            }
          },
          tooltip: {
            enabled: !1,
            formatter: void 0,
            offsetY: 0,
            style: {
              fontSize: 0,
              fontFamily: 0
            }
          }
        },
        dataLabels: {
          enabled: !1
        }
      }, "stroke", {
        width: [5, 5],
        curve: "straight",
        dashArray: [0, 0]
      }), n(d, "legend", {
        show: !0,
        position: "top",
        containerMargin: {
          top: 30
        }
      }), d),
      M = new ApexCharts(document.querySelector("#CadastroChart1_1_1"), _);
    M.render()
    
    document.querySelector(".Cadastro1_1_1_2017").addEventListener("click", () => {
      document.getElementById('numberExpiredTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('numberExpiredTitleTypeDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_1').style.display = 'block';
      s(M, 2017)
    }), 
    document.querySelector(".Cadastro1_1_1_2018").addEventListener("click", () => {
      document.getElementById('numberExpiredTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('numberExpiredTitleTypeDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_1').style.display = 'block';
      s(M, 2018)
    }), 
    document.querySelector(".Cadastro1_1_1_2019").addEventListener("click", () => {
      document.getElementById('numberExpiredTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('numberExpiredTitleTypeDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_1').style.display = 'block';
      s(M, 2019)
    }), 
    document.querySelector(".Cadastro1_1_1_2020").addEventListener("click", () => {
      document.getElementById('numberExpiredTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('numberExpiredTitleTypeDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_1').style.display = 'block';
      s(M, 2020)
    }), 
    document.querySelector(".Cadastro1_1_1_2021").addEventListener("click", () => {
      document.getElementById('numberExpiredTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('numberExpiredTitleTypeDiv').classList.add('invisible');
      document.getElementById('numberExpiredTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_1').style.display = 'block';
      s(M, 2021)
    }), 
    document.querySelector(".Cadastro1_1_1_all").addEventListener("click", (function () {
      document.getElementById('numberExpiredTitleTypeMobileDiv').classList.remove('invisible');
      document.getElementById('numberExpiredTitleTypeMobileDiv').style.height = 'auto';
      document.getElementById('numberExpiredTitleTypeDiv').classList.remove('invisible');
      document.getElementById('numberExpiredTitleTypeDiv').style.height = 'auto';
      document.getElementById('CadastroChart1_1_1').style.display = 'none';
    }));
    
    var E = new ApexCharts(document.querySelector("#CadastroChart1_1_2"), x);
    E.render(), 
    document.querySelector(".Cadastro1_1_2_2017").addEventListener("click", (function () {
      document.getElementById('valueByTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('valueByTitleTypeDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_2').style.display = 'block';
      s(E, 2017)
    })), 
    document.querySelector(".Cadastro1_1_2_2018").addEventListener("click", (function () {
      document.getElementById('valueByTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('valueByTitleTypeDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_2').style.display = 'block';
      s(E, 2018)
    })), 
    document.querySelector(".Cadastro1_1_2_2019").addEventListener("click", (function () {
      document.getElementById('valueByTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('valueByTitleTypeDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_2').style.display = 'block';
      s(E, 2019)
    })), 
    document.querySelector(".Cadastro1_1_2_2020").addEventListener("click", (function () {
      document.getElementById('valueByTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('valueByTitleTypeDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_2').style.display = 'block';
      s(E, 2020)
    })), 
    document.querySelector(".Cadastro1_1_2_2021").addEventListener("click", (function () {
      document.getElementById('valueByTitleTypeMobileDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeMobileDiv').style.height = '0px';
      document.getElementById('valueByTitleTypeDiv').classList.add('invisible');
      document.getElementById('valueByTitleTypeDiv').style.height = '0px';
      document.getElementById('CadastroChart1_1_2').style.display = 'block';
      s(E, 2021)
    })), 
    document.querySelector(".Cadastro1_1_2_all").addEventListener("click", (function () {
      document.getElementById('valueByTitleTypeMobileDiv').classList.remove('invisible');
      document.getElementById('valueByTitleTypeMobileDiv').style.height = 'auto';
      document.getElementById('valueByTitleTypeDiv').classList.remove('invisible');
      document.getElementById('valueByTitleTypeDiv').style.height = 'auto';
      document.getElementById('CadastroChart1_1_2').style.display = 'none';
      u(E)
    })), new ApexCharts(document.querySelector("#CadastroChart1_2_1"), k).render();
    var L = new ApexCharts(document.querySelector("#CadastroChart1_3_1"), C);
    L.render(), document.querySelector(".Cadastro1_3_1_2017").addEventListener("click", (function () {
      s(L, 2017)
    })), document.querySelector(".Cadastro1_3_1_2018").addEventListener("click", (function () {
      s(L, 2018)
    })), document.querySelector(".Cadastro1_3_1_2019").addEventListener("click", (function () {
      s(L, 2019)
    })), document.querySelector(".Cadastro1_3_1_2020").addEventListener("click", (function () {
      s(L, 2020)
    })), document.querySelector(".Cadastro1_3_1_2021").addEventListener("click", (function () {
      s(L, 2021)
    })), document.querySelector(".Cadastro1_3_1_all").addEventListener("click", (function () {
      u(L)
    }));
    var F = new ApexCharts(document.querySelector("#CadastroChart1_4_1"), A);
    F.render(), document.querySelector(".Cadastro1_4_1_2017").addEventListener("click", (function () {
      s(F, 2017)
    })), document.querySelector(".Cadastro1_4_1_2018").addEventListener("click", (function () {
      s(F, 2018)
    })), document.querySelector(".Cadastro1_4_1_2019").addEventListener("click", (function () {
      s(F, 2019)
    })), document.querySelector(".Cadastro1_4_1_2020").addEventListener("click", (function () {
      s(F, 2020)
    })), document.querySelector(".Cadastro1_4_1_2021").addEventListener("click", (function () {
      s(F, 2021)
    })), document.querySelector(".Cadastro1_4_1_all").addEventListener("click", (function () {
      u(F)
    }))
  }(window, document, jQuery)
}]);