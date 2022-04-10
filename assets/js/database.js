! function (t) {
  var e = {};

  function n(a) {
    if (e[a]) return e[a].exports;
    var r = e[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return t[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = t, n.c = e, n.d = function (t, e, a) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: a
    })
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var a = Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var r in t) n.d(a, r, function (e) {
        return t[e]
      }.bind(null, r));
    return a
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 8)
}({
  8: function (t, e) {
    var n = new Array,
      a = document.createElement("div");
    $(a).addClass("result-item");
    var r = [],
      o = window.location.origin,
      c = window.location.pathname;
    console.log(o), console.log(c);
    var i = o + c;
    console.log(i);
    var s = window.location.href.replace(i, "");

    function l(t) {
      return document.querySelector(t)
    }

    function d(t) {
      return t = (t = (t = (t = (t = (t = (t = t.toLowerCase()).replace(new RegExp("[ÁÀÂÃ]", "gi"), "a")).replace(new RegExp("[ÉÈÊ]", "gi"), "e")).replace(new RegExp("[ÍÌÎ]", "gi"), "i")).replace(new RegExp("[ÓÒÔÕ]", "gi"), "o")).replace(new RegExp("[ÚÙÛ]", "gi"), "u")).replace(new RegExp("[Ç]", "gi"), "c")
    }
    "" != s && (console.log(!0), $('[data-bs-target="' + s + '"]').click()), console.log(s), $(".menu-container").find("li").each((function () {
      r.push("./" + $(this).find("a").attr("href"))
    })), console.log("pages", r), $.each(r, (function (t, e) {
      $.ajax({
        url: e,
        type: "GET",
        success: function (t) {
          $(t).find(".internal-content .internal-texts > .tab-content >.tab-pane").each((function () {
            var t = $(this),
              a = t.children("h2.title").text(),
              r = t.children("p").first().text(),
              o = t.attr("id"),
              c = t.closest("section.internal").find(".internal-title h2").text(),
              i = t.closest("section.internal").attr("id"),
              s = e,
              l = {};
            l.title = a, l.text = r, l.tabId = o, l.parentId = i, l.parentTitle = c, l.path = s, n.push(l)
          }))
        }
      })
    })), l(".search-form").addEventListener("submit", (function (t) {
      t.preventDefault(), $(".search-results").addClass("show");
      for (var e = l("#search-field").value, a = [], r = 0; r < n.length; r++) d(n[r].title.toLocaleLowerCase()).includes(d(e.toLocaleLowerCase())) || d(n[r].parentTitle.toLocaleLowerCase()).includes(d(e.toLocaleLowerCase())) ? (0 == a.length && (l(".search-results-inner .focus").innerHTML = ""), a.push(r), l(".search-results-inner .focus").innerHTML += '\n        <div class="result-item" data-tab-id="'.concat(n[r].tabId, '" data-parent-id="').concat(n[r].parentId, '">\n        <a href="').concat(n[r].path, "#").concat(n[r].tabId, '" class="name">\n        ').concat(n[r].title, "\n        </a>\n        </div></div>\n      "), $(".result-item").on("click", (function () {
        var t = $(this),
          e = $("html, body");
        return $("#" + t.attr("data-tab-id")).closest(".tab-content").attr("my-content", !0), $("#" + t.attr("data-tab-id")).closest(".tab-content").find(".tab-pane").each((function () {
          $(this).attr("data-search-closed", !0), $(this).removeClass("show"), $(this).removeClass("active")
        })), $("#" + t.attr("data-tab-id")).addClass("active"), $("#" + t.attr("data-tab-id")).addClass("show"), $("#" + t.attr("data-tab-id")).closest(".tab-content").closest(".internal-content").find(".nav-link").each((function () {
          $(this).removeClass("active")
        })), $("#" + t.attr("data-tab-id")).closest(".tab-content").closest(".internal-content").find('.nav-item button[data-bs-target="#' + t.attr("data-tab-id") + '"]').addClass("active"), $(".search-results").removeClass("show"), e.animate({
          scrollTop: $("#" + t.attr("data-parent-id")).offset().top
        }, 1e3), !1
      }))) : 0 == a.length && (l(".search-results-inner .focus").innerHTML = "", $(".search-results-inner .focus").prepend('\n          <div class="title">Nada encontrado</div>    \n        '))
    })), $(".search-results .close").on("click", (function () {
      $(".search-results").removeClass("show")
    }))
  }
});