! function (e) {
  var n = {};

  function o(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports
  }
  o.m = e, o.c = n, o.d = function (e, n, t) {
    o.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    })
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, o.t = function (e, n) {
    if (1 & n && (e = o(e)), 8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (o.r(t), Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e)
      for (var r in e) o.d(t, r, function (n) {
        return e[n]
      }.bind(null, r));
    return t
  }, o.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return o.d(n, "a", n), n
  }, o.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  }, o.p = "", o(o.s = 0)
}([function (e, n) {
  ! function (e, n, o) {
    "use strict";
    var t = n.querySelector("body"),
      r = o("header.header"),
      l = o(".menu-container");
    n.querySelector(".menu-trigger").addEventListener("click", (function () {
      l.toggle("show-menu")
    })), o(".menu-container li").on("click", (function () {
      l.toggle("show-menu")
    }));
    var a = o(window);
    a.on("scroll touchstart", (function () {
      a.scrollTop() > 150 ? (o("body").addClass("show-btn-bottom"), r.addClass("show-scroll")) : (o("body").removeClass("show-btn-bottom"), r.removeClass("show-scroll"))
    }));
    var i = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: "100%",
        offset: -90,
        triggerHook: "onLeave"
      }
    });
    new ScrollMagic.Scene({
      triggerElement: "#hero"
    }).setClassToggle("#navHome", "active").addTo(i), new ScrollMagic.Scene({
      triggerElement: "#about"
    }).setClassToggle("#navAbout", "active").addTo(i), new ScrollMagic.Scene({
      triggerElement: "#cases"
    }).setClassToggle("#navCases", "active").addTo(i), new ScrollMagic.Scene({
      triggerElement: "#faq"
    }).setClassToggle("#navFaq", "active").addTo(i), new ScrollMagic.Scene({
      triggerElement: "#testimonials"
    }).setClassToggle("#navTestimonials", "active").addTo(i), new ScrollMagic.Scene({
      triggerElement: "#footer"
    }).setClassToggle("#navFooter", "active").setClassToggle("#footer", "active").setClassToggle("#bodyElement", "show-footer-elements").addTo(i), o("header .navigation ul li a").on("click", (function () {
      t.classList.remove("show-mobile-nav")
    })), o(".open-menu").on("click", (function () {
      o(this).parent("div").next(".internal-nav").toggleClass("d-none")
    })), o(".internal-nav li button").on("click", (function () {
      o(this).closest(".internal-nav").toggleClass("d-none")
    }))
  }(window, document, jQuery)
}]);