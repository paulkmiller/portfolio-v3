import {
  S as ye,
  i as ve,
  s as pe,
  y as B,
  z as O,
  A as J,
  g as k,
  d as C,
  B as G,
  k as I,
  l as H,
  m as z,
  h as m,
  n as _,
  b as p,
  v as q,
  f as K,
  H as ge,
  C as he,
  e as Q,
  a as P,
  I as $e,
  c as F,
  G as W,
  D as Te,
  E as De,
  F as Me,
  q as L,
  r as Y,
  u as X,
} from "../chunks/index.c7992fe2.js";
import { H as be, F as Ne } from "../chunks/Footer.da83f564.js";
import {
  C as ke,
  B as we,
  T as Ie,
} from "../chunks/ContentSection.02ad503a.js";
import { t as R, s as j, k as He } from "../chunks/meta.b74a4754.js";
import { I as Ee } from "../chunks/Image.f2f50b72.js";
var Ae =
    /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,
  Se =
    /\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,
  Ce = /[^-+\dA-Z]/g;
function x(a, t, l, n) {
  if (
    (arguments.length === 1 &&
      typeof a == "string" &&
      !/\d/.test(a) &&
      ((t = a), (a = void 0)),
    (a = a || a === 0 ? a : new Date()),
    a instanceof Date || (a = new Date(a)),
    isNaN(a))
  )
    throw TypeError("Invalid date");
  t = String(te[t] || t || te.default);
  var e = t.slice(0, 4);
  (e === "UTC:" || e === "GMT:") &&
    ((t = t.slice(4)), (l = !0), e === "GMT:" && (n = !0));
  var o = function () {
      return l ? "getUTC" : "get";
    },
    i = function () {
      return a[o() + "Date"]();
    },
    f = function () {
      return a[o() + "Day"]();
    },
    s = function () {
      return a[o() + "Month"]();
    },
    T = function () {
      return a[o() + "FullYear"]();
    },
    g = function () {
      return a[o() + "Hours"]();
    },
    b = function () {
      return a[o() + "Minutes"]();
    },
    A = function () {
      return a[o() + "Seconds"]();
    },
    w = function () {
      return a[o() + "Milliseconds"]();
    },
    y = function () {
      return l ? 0 : a.getTimezoneOffset();
    },
    h = function () {
      return Pe(a);
    },
    c = function () {
      return Fe(a);
    },
    $ = {
      d: function () {
        return i();
      },
      dd: function () {
        return Z(i());
      },
      ddd: function () {
        return U.dayNames[f()];
      },
      DDD: function () {
        return ne({
          y: T(),
          m: s(),
          d: i(),
          _: o(),
          dayName: U.dayNames[f()],
          short: !0,
        });
      },
      dddd: function () {
        return U.dayNames[f() + 7];
      },
      DDDD: function () {
        return ne({
          y: T(),
          m: s(),
          d: i(),
          _: o(),
          dayName: U.dayNames[f() + 7],
        });
      },
      m: function () {
        return s() + 1;
      },
      mm: function () {
        return Z(s() + 1);
      },
      mmm: function () {
        return U.monthNames[s()];
      },
      mmmm: function () {
        return U.monthNames[s() + 12];
      },
      yy: function () {
        return String(T()).slice(2);
      },
      yyyy: function () {
        return Z(T(), 4);
      },
      h: function () {
        return g() % 12 || 12;
      },
      hh: function () {
        return Z(g() % 12 || 12);
      },
      H: function () {
        return g();
      },
      HH: function () {
        return Z(g());
      },
      M: function () {
        return b();
      },
      MM: function () {
        return Z(b());
      },
      s: function () {
        return A();
      },
      ss: function () {
        return Z(A());
      },
      l: function () {
        return Z(w(), 3);
      },
      L: function () {
        return Z(Math.floor(w() / 10));
      },
      t: function () {
        return g() < 12 ? U.timeNames[0] : U.timeNames[1];
      },
      tt: function () {
        return g() < 12 ? U.timeNames[2] : U.timeNames[3];
      },
      T: function () {
        return g() < 12 ? U.timeNames[4] : U.timeNames[5];
      },
      TT: function () {
        return g() < 12 ? U.timeNames[6] : U.timeNames[7];
      },
      Z: function () {
        return n ? "GMT" : l ? "UTC" : We(a);
      },
      o: function () {
        return (
          (y() > 0 ? "-" : "+") +
          Z(Math.floor(Math.abs(y()) / 60) * 100 + (Math.abs(y()) % 60), 4)
        );
      },
      p: function () {
        return (
          (y() > 0 ? "-" : "+") +
          Z(Math.floor(Math.abs(y()) / 60), 2) +
          ":" +
          Z(Math.floor(Math.abs(y()) % 60), 2)
        );
      },
      S: function () {
        return ["th", "st", "nd", "rd"][
          i() % 10 > 3 ? 0 : (((i() % 100) - (i() % 10) != 10) * i()) % 10
        ];
      },
      W: function () {
        return h();
      },
      WW: function () {
        return Z(h());
      },
      N: function () {
        return c();
      },
    };
  return t.replace(Ae, function (r) {
    return r in $ ? $[r]() : r.slice(1, r.length - 1);
  });
}
var te = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    paddedShortDate: "mm/dd/yyyy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
  },
  U = {
    dayNames: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    monthNames: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
  },
  Z = function (t) {
    var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    return String(t).padStart(l, "0");
  },
  ne = function (t) {
    var l = t.y,
      n = t.m,
      e = t.d,
      o = t._,
      i = t.dayName,
      f = t.short,
      s = f === void 0 ? !1 : f,
      T = new Date(),
      g = new Date();
    g.setDate(g[o + "Date"]() - 1);
    var b = new Date();
    b.setDate(b[o + "Date"]() + 1);
    var A = function () {
        return T[o + "Date"]();
      },
      w = function () {
        return T[o + "Month"]();
      },
      y = function () {
        return T[o + "FullYear"]();
      },
      h = function () {
        return g[o + "Date"]();
      },
      c = function () {
        return g[o + "Month"]();
      },
      $ = function () {
        return g[o + "FullYear"]();
      },
      r = function () {
        return b[o + "Date"]();
      },
      D = function () {
        return b[o + "Month"]();
      },
      N = function () {
        return b[o + "FullYear"]();
      };
    return y() === l && w() === n && A() === e
      ? s
        ? "Tdy"
        : "Today"
      : $() === l && c() === n && h() === e
      ? s
        ? "Ysd"
        : "Yesterday"
      : N() === l && D() === n && r() === e
      ? s
        ? "Tmw"
        : "Tomorrow"
      : i;
  },
  Pe = function (t) {
    var l = new Date(t.getFullYear(), t.getMonth(), t.getDate());
    l.setDate(l.getDate() - ((l.getDay() + 6) % 7) + 3);
    var n = new Date(l.getFullYear(), 0, 4);
    n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
    var e = l.getTimezoneOffset() - n.getTimezoneOffset();
    l.setHours(l.getHours() - e);
    var o = (l - n) / (864e5 * 7);
    return 1 + Math.floor(o);
  },
  Fe = function (t) {
    var l = t.getDay();
    return l === 0 && (l = 7), l;
  },
  We = function (t) {
    return (String(t).match(Se) || [""])
      .pop()
      .replace(Ce, "")
      .replace(/GMT\+0000/g, "UTC");
  };
function re(a, t, l) {
  const n = a.slice();
  return (n[1] = t[l]), n;
}
function le(a) {
  let t, l;
  return (
    (t = new we({
      props: {
        slug: a[1].slug,
        title: a[1].title,
        excerpt: a[1].excerpt,
        tags: a[1].tags,
        readingTime: a[1].readingTime,
        showImage: !1,
      },
    })),
    {
      c() {
        B(t.$$.fragment);
      },
      l(n) {
        O(t.$$.fragment, n);
      },
      m(n, e) {
        J(t, n, e), (l = !0);
      },
      p(n, e) {
        const o = {};
        e & 1 && (o.slug = n[1].slug),
          e & 1 && (o.title = n[1].title),
          e & 1 && (o.excerpt = n[1].excerpt),
          e & 1 && (o.tags = n[1].tags),
          e & 1 && (o.readingTime = n[1].readingTime),
          t.$set(o);
      },
      i(n) {
        l || (k(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        C(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        G(t, n);
      },
    }
  );
}
function Ue(a) {
  let t,
    l,
    n = a[0],
    e = [];
  for (let i = 0; i < n.length; i += 1) e[i] = le(re(a, n, i));
  const o = (i) =>
    C(e[i], 1, 1, () => {
      e[i] = null;
    });
  return {
    c() {
      t = I("div");
      for (let i = 0; i < e.length; i += 1) e[i].c();
      this.h();
    },
    l(i) {
      t = H(i, "DIV", { class: !0 });
      var f = z(t);
      for (let s = 0; s < e.length; s += 1) e[s].l(f);
      f.forEach(m), this.h();
    },
    h() {
      _(t, "class", "simple-grid svelte-ypk0wh");
    },
    m(i, f) {
      p(i, t, f);
      for (let s = 0; s < e.length; s += 1) e[s] && e[s].m(t, null);
      l = !0;
    },
    p(i, f) {
      if (f & 1) {
        n = i[0];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const T = re(i, n, s);
          e[s]
            ? (e[s].p(T, f), k(e[s], 1))
            : ((e[s] = le(T)), e[s].c(), k(e[s], 1), e[s].m(t, null));
        }
        for (q(), s = n.length; s < e.length; s += 1) o(s);
        K();
      }
    },
    i(i) {
      if (!l) {
        for (let f = 0; f < n.length; f += 1) k(e[f]);
        l = !0;
      }
    },
    o(i) {
      e = e.filter(Boolean);
      for (let f = 0; f < e.length; f += 1) C(e[f]);
      l = !1;
    },
    d(i) {
      i && m(t), ge(e, i);
    },
  };
}
function Ve(a) {
  let t, l;
  return (
    (t = new ke({
      props: {
        id: "related-posts",
        title: "Related Posts",
        $$slots: { default: [Ue] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        B(t.$$.fragment);
      },
      l(n) {
        O(t.$$.fragment, n);
      },
      m(n, e) {
        J(t, n, e), (l = !0);
      },
      p(n, [e]) {
        const o = {};
        e & 17 && (o.$$scope = { dirty: e, ctx: n }), t.$set(o);
      },
      i(n) {
        l || (k(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        C(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        G(t, n);
      },
    }
  );
}
function Ze(a, t, l) {
  let { posts: n } = t;
  return (
    (a.$$set = (e) => {
      "posts" in e && l(0, (n = e.posts));
    }),
    [n]
  );
}
class ze extends ye {
  constructor(t) {
    super(), ve(this, t, Ze, Ve, pe, { posts: 0 });
  }
}
function ie(a, t, l) {
  const n = a.slice();
  return (n[5] = t[l]), n;
}
function ae(a) {
  let t, l, n, e, o, i, f, s, T, g, b, A, w, y, h, c, $, r, D, N, v, d, S, V;
  document.title = c = a[1].title + " - " + R;
  let E = a[1].coverImage && oe(a);
  return {
    c() {
      (t = I("meta")),
        (n = P()),
        (e = I("meta")),
        (i = P()),
        (f = I("meta")),
        (T = P()),
        (g = I("meta")),
        (A = P()),
        (w = I("link")),
        (h = P()),
        ($ = P()),
        (r = I("meta")),
        (N = P()),
        (v = I("meta")),
        (S = P()),
        E && E.c(),
        (V = Q()),
        this.h();
    },
    l(u) {
      (t = H(u, "META", { name: !0, content: !0 })),
        (n = F(u)),
        (e = H(u, "META", { name: !0, content: !0 })),
        (i = F(u)),
        (f = H(u, "META", { property: !0, content: !0 })),
        (T = F(u)),
        (g = H(u, "META", { name: !0, content: !0 })),
        (A = F(u)),
        (w = H(u, "LINK", { rel: !0, href: !0 })),
        (h = F(u)),
        ($ = F(u)),
        (r = H(u, "META", { property: !0, content: !0 })),
        (N = F(u)),
        (v = H(u, "META", { name: !0, content: !0 })),
        (S = F(u)),
        E && E.l(u),
        (V = Q()),
        this.h();
    },
    h() {
      _(t, "name", "keywords"),
        _(t, "content", (l = a[0].join(", "))),
        _(e, "name", "description"),
        _(e, "content", (o = a[1].excerpt)),
        _(f, "property", "og:description"),
        _(f, "content", (s = a[1].excerpt)),
        _(g, "name", "twitter:description"),
        _(g, "content", (b = a[1].excerpt)),
        _(w, "rel", "canonical"),
        _(w, "href", (y = j + "/" + a[1].slug)),
        _(r, "property", "og:title"),
        _(r, "content", (D = a[1].title + " - " + R)),
        _(v, "name", "twitter:title"),
        _(v, "content", (d = a[1].title + " - " + R));
    },
    m(u, M) {
      p(u, t, M),
        p(u, n, M),
        p(u, e, M),
        p(u, i, M),
        p(u, f, M),
        p(u, T, M),
        p(u, g, M),
        p(u, A, M),
        p(u, w, M),
        p(u, h, M),
        p(u, $, M),
        p(u, r, M),
        p(u, N, M),
        p(u, v, M),
        p(u, S, M),
        E && E.m(u, M),
        p(u, V, M);
    },
    p(u, M) {
      M & 1 && l !== (l = u[0].join(", ")) && _(t, "content", l),
        M & 2 && o !== (o = u[1].excerpt) && _(e, "content", o),
        M & 2 && s !== (s = u[1].excerpt) && _(f, "content", s),
        M & 2 && b !== (b = u[1].excerpt) && _(g, "content", b),
        M & 2 && y !== (y = j + "/" + u[1].slug) && _(w, "href", y),
        M & 2 && c !== (c = u[1].title + " - " + R) && (document.title = c),
        M & 2 && D !== (D = u[1].title + " - " + R) && _(r, "content", D),
        M & 2 && d !== (d = u[1].title + " - " + R) && _(v, "content", d),
        u[1].coverImage
          ? E
            ? E.p(u, M)
            : ((E = oe(u)), E.c(), E.m(V.parentNode, V))
          : E && (E.d(1), (E = null));
    },
    d(u) {
      u && m(t),
        u && m(n),
        u && m(e),
        u && m(i),
        u && m(f),
        u && m(T),
        u && m(g),
        u && m(A),
        u && m(w),
        u && m(h),
        u && m($),
        u && m(r),
        u && m(N),
        u && m(v),
        u && m(S),
        E && E.d(u),
        u && m(V);
    },
  };
}
function oe(a) {
  let t, l, n, e, o;
  return {
    c() {
      (t = I("meta")), (n = P()), (e = I("meta")), this.h();
    },
    l(i) {
      (t = H(i, "META", { property: !0, content: !0 })),
        (n = F(i)),
        (e = H(i, "META", { name: !0, content: !0 })),
        this.h();
    },
    h() {
      _(t, "property", "og:image"),
        _(t, "content", (l = "" + (j + a[1].coverImage))),
        _(e, "name", "twitter:image"),
        _(e, "content", (o = "" + (j + a[1].coverImage)));
    },
    m(i, f) {
      p(i, t, f), p(i, n, f), p(i, e, f);
    },
    p(i, f) {
      f & 2 && l !== (l = "" + (j + i[1].coverImage)) && _(t, "content", l),
        f & 2 && o !== (o = "" + (j + i[1].coverImage)) && _(e, "content", o);
    },
    d(i) {
      i && m(t), i && m(n), i && m(e);
    },
  };
}
function se(a) {
  var $;
  let t,
    l = a[1].title + "",
    n,
    e,
    o,
    i,
    f = x(a[1].date, "UTC:dd mmmm yyyy") + "",
    s,
    T,
    g,
    b,
    A,
    w,
    y = a[1].updated && fe(a),
    h = a[1].readingTime && ue(a),
    c = (($ = a[1].tags) == null ? void 0 : $.length) && me(a);
  return {
    c() {
      (t = I("h1")),
        (n = L(l)),
        (e = P()),
        (o = I("div")),
        (i = L("Published on ")),
        (s = L(f)),
        (T = P()),
        y && y.c(),
        (g = P()),
        h && h.c(),
        (b = P()),
        c && c.c(),
        (A = Q()),
        this.h();
    },
    l(r) {
      t = H(r, "H1", {});
      var D = z(t);
      (n = Y(D, l)), D.forEach(m), (e = F(r)), (o = H(r, "DIV", { class: !0 }));
      var N = z(o);
      (i = Y(N, "Published on ")),
        (s = Y(N, f)),
        N.forEach(m),
        (T = F(r)),
        y && y.l(r),
        (g = F(r)),
        h && h.l(r),
        (b = F(r)),
        c && c.l(r),
        (A = Q()),
        this.h();
    },
    h() {
      _(o, "class", "note svelte-g9egsy");
    },
    m(r, D) {
      p(r, t, D),
        W(t, n),
        p(r, e, D),
        p(r, o, D),
        W(o, i),
        W(o, s),
        p(r, T, D),
        y && y.m(r, D),
        p(r, g, D),
        h && h.m(r, D),
        p(r, b, D),
        c && c.m(r, D),
        p(r, A, D),
        (w = !0);
    },
    p(r, D) {
      var N;
      (!w || D & 2) && l !== (l = r[1].title + "") && X(n, l),
        (!w || D & 2) &&
          f !== (f = x(r[1].date, "UTC:dd mmmm yyyy") + "") &&
          X(s, f),
        r[1].updated
          ? y
            ? y.p(r, D)
            : ((y = fe(r)), y.c(), y.m(g.parentNode, g))
          : y && (y.d(1), (y = null)),
        r[1].readingTime
          ? h
            ? h.p(r, D)
            : ((h = ue(r)), h.c(), h.m(b.parentNode, b))
          : h && (h.d(1), (h = null)),
        (N = r[1].tags) != null && N.length
          ? c
            ? (c.p(r, D), D & 2 && k(c, 1))
            : ((c = me(r)), c.c(), k(c, 1), c.m(A.parentNode, A))
          : c &&
            (q(),
            C(c, 1, 1, () => {
              c = null;
            }),
            K());
    },
    i(r) {
      w || (k(c), (w = !0));
    },
    o(r) {
      C(c), (w = !1);
    },
    d(r) {
      r && m(t),
        r && m(e),
        r && m(o),
        r && m(T),
        y && y.d(r),
        r && m(g),
        h && h.d(r),
        r && m(b),
        c && c.d(r),
        r && m(A);
    },
  };
}
function fe(a) {
  let t,
    l,
    n = x(a[1].updated, "UTC:dd mmmm yyyy") + "",
    e;
  return {
    c() {
      (t = I("div")), (l = L("Updated on ")), (e = L(n)), this.h();
    },
    l(o) {
      t = H(o, "DIV", { class: !0 });
      var i = z(t);
      (l = Y(i, "Updated on ")), (e = Y(i, n)), i.forEach(m), this.h();
    },
    h() {
      _(t, "class", "note svelte-g9egsy");
    },
    m(o, i) {
      p(o, t, i), W(t, l), W(t, e);
    },
    p(o, i) {
      i & 2 && n !== (n = x(o[1].updated, "UTC:dd mmmm yyyy") + "") && X(e, n);
    },
    d(o) {
      o && m(t);
    },
  };
}
function ue(a) {
  let t,
    l = a[1].readingTime + "",
    n;
  return {
    c() {
      (t = I("div")), (n = L(l)), this.h();
    },
    l(e) {
      t = H(e, "DIV", { class: !0 });
      var o = z(t);
      (n = Y(o, l)), o.forEach(m), this.h();
    },
    h() {
      _(t, "class", "note svelte-g9egsy");
    },
    m(e, o) {
      p(e, t, o), W(t, n);
    },
    p(e, o) {
      o & 2 && l !== (l = e[1].readingTime + "") && X(n, l);
    },
    d(e) {
      e && m(t);
    },
  };
}
function me(a) {
  let t,
    l,
    n = a[1].tags,
    e = [];
  for (let i = 0; i < n.length; i += 1) e[i] = ce(ie(a, n, i));
  const o = (i) =>
    C(e[i], 1, 1, () => {
      e[i] = null;
    });
  return {
    c() {
      t = I("div");
      for (let i = 0; i < e.length; i += 1) e[i].c();
      this.h();
    },
    l(i) {
      t = H(i, "DIV", { class: !0 });
      var f = z(t);
      for (let s = 0; s < e.length; s += 1) e[s].l(f);
      f.forEach(m), this.h();
    },
    h() {
      _(t, "class", "tags svelte-g9egsy");
    },
    m(i, f) {
      p(i, t, f);
      for (let s = 0; s < e.length; s += 1) e[s] && e[s].m(t, null);
      l = !0;
    },
    p(i, f) {
      if (f & 2) {
        n = i[1].tags;
        let s;
        for (s = 0; s < n.length; s += 1) {
          const T = ie(i, n, s);
          e[s]
            ? (e[s].p(T, f), k(e[s], 1))
            : ((e[s] = ce(T)), e[s].c(), k(e[s], 1), e[s].m(t, null));
        }
        for (q(), s = n.length; s < e.length; s += 1) o(s);
        K();
      }
    },
    i(i) {
      if (!l) {
        for (let f = 0; f < n.length; f += 1) k(e[f]);
        l = !0;
      }
    },
    o(i) {
      e = e.filter(Boolean);
      for (let f = 0; f < e.length; f += 1) C(e[f]);
      l = !1;
    },
    d(i) {
      i && m(t), ge(e, i);
    },
  };
}
function Le(a) {
  let t = a[5] + "",
    l;
  return {
    c() {
      l = L(t);
    },
    l(n) {
      l = Y(n, t);
    },
    m(n, e) {
      p(n, l, e);
    },
    p(n, e) {
      e & 2 && t !== (t = n[5] + "") && X(l, t);
    },
    d(n) {
      n && m(l);
    },
  };
}
function ce(a) {
  let t, l;
  return (
    (t = new Ie({
      props: { $$slots: { default: [Le] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        B(t.$$.fragment);
      },
      l(n) {
        O(t.$$.fragment, n);
      },
      m(n, e) {
        J(t, n, e), (l = !0);
      },
      p(n, e) {
        const o = {};
        e & 18 && (o.$$scope = { dirty: e, ctx: n }), t.$set(o);
      },
      i(n) {
        l || (k(t.$$.fragment, n), (l = !0));
      },
      o(n) {
        C(t.$$.fragment, n), (l = !1);
      },
      d(n) {
        G(t, n);
      },
    }
  );
}
function de(a) {
  let t, l, n;
  return (
    (l = new Ee({ props: { src: a[1].coverImage, alt: a[1].title } })),
    {
      c() {
        (t = I("div")), B(l.$$.fragment), this.h();
      },
      l(e) {
        t = H(e, "DIV", { class: !0 });
        var o = z(t);
        O(l.$$.fragment, o), o.forEach(m), this.h();
      },
      h() {
        _(t, "class", "cover-image svelte-g9egsy");
      },
      m(e, o) {
        p(e, t, o), J(l, t, null), (n = !0);
      },
      p(e, o) {
        const i = {};
        o & 2 && (i.src = e[1].coverImage),
          o & 2 && (i.alt = e[1].title),
          l.$set(i);
      },
      i(e) {
        n || (k(l.$$.fragment, e), (n = !0));
      },
      o(e) {
        C(l.$$.fragment, e), (n = !1);
      },
      d(e) {
        e && m(t), G(l);
      },
    }
  );
}
function _e(a) {
  let t, l, n;
  return (
    (l = new ze({ props: { posts: a[1].relatedPosts } })),
    {
      c() {
        (t = I("div")), B(l.$$.fragment), this.h();
      },
      l(e) {
        t = H(e, "DIV", { class: !0 });
        var o = z(t);
        O(l.$$.fragment, o), o.forEach(m), this.h();
      },
      h() {
        _(t, "class", "container");
      },
      m(e, o) {
        p(e, t, o), J(l, t, null), (n = !0);
      },
      p(e, o) {
        const i = {};
        o & 2 && (i.posts = e[1].relatedPosts), l.$set(i);
      },
      i(e) {
        n || (k(l.$$.fragment, e), (n = !0));
      },
      o(e) {
        C(l.$$.fragment, e), (n = !1);
      },
      d(e) {
        e && m(t), G(l);
      },
    }
  );
}
function Ye(a) {
  let t,
    l,
    n,
    e,
    o,
    i,
    f,
    s,
    T,
    g,
    b,
    A,
    w,
    y,
    h,
    c = a[1] && ae(a);
  e = new be({ props: { showBackground: !0 } });
  let $ = a[1] && se(a),
    r = a[1] && a[1].coverImage && de(a);
  const D = a[3].default,
    N = he(D, a, a[4], null);
  let v = a[1].relatedPosts && a[1].relatedPosts.length > 0 && _e(a);
  return (
    (y = new Ne({})),
    {
      c() {
        c && c.c(),
          (t = Q()),
          (l = P()),
          (n = I("div")),
          B(e.$$.fragment),
          (o = P()),
          (i = I("main")),
          (f = I("article")),
          (s = I("div")),
          $ && $.c(),
          (T = P()),
          r && r.c(),
          (g = P()),
          (b = I("div")),
          N && N.c(),
          (A = P()),
          v && v.c(),
          (w = P()),
          B(y.$$.fragment),
          this.h();
      },
      l(d) {
        const S = $e("svelte-1korl84", document.head);
        c && c.l(S),
          (t = Q()),
          S.forEach(m),
          (l = F(d)),
          (n = H(d, "DIV", { class: !0 }));
        var V = z(n);
        O(e.$$.fragment, V), (o = F(V)), (i = H(V, "MAIN", {}));
        var E = z(i);
        f = H(E, "ARTICLE", { id: !0, class: !0 });
        var u = z(f);
        s = H(u, "DIV", { class: !0 });
        var M = z(s);
        $ && $.l(M),
          M.forEach(m),
          (T = F(u)),
          r && r.l(u),
          (g = F(u)),
          (b = H(u, "DIV", { class: !0 }));
        var ee = z(b);
        N && N.l(ee),
          ee.forEach(m),
          u.forEach(m),
          (A = F(E)),
          v && v.l(E),
          E.forEach(m),
          (w = F(V)),
          O(y.$$.fragment, V),
          V.forEach(m),
          this.h();
      },
      h() {
        _(s, "class", "header svelte-g9egsy"),
          _(b, "class", "content svelte-g9egsy"),
          _(f, "id", "article-content"),
          _(f, "class", "svelte-g9egsy"),
          _(n, "class", "article-layout svelte-g9egsy");
      },
      m(d, S) {
        c && c.m(document.head, null),
          W(document.head, t),
          p(d, l, S),
          p(d, n, S),
          J(e, n, null),
          W(n, o),
          W(n, i),
          W(i, f),
          W(f, s),
          $ && $.m(s, null),
          W(f, T),
          r && r.m(f, null),
          W(f, g),
          W(f, b),
          N && N.m(b, null),
          W(i, A),
          v && v.m(i, null),
          W(n, w),
          J(y, n, null),
          (h = !0);
      },
      p(d, [S]) {
        d[1]
          ? c
            ? c.p(d, S)
            : ((c = ae(d)), c.c(), c.m(t.parentNode, t))
          : c && (c.d(1), (c = null)),
          d[1]
            ? $
              ? ($.p(d, S), S & 2 && k($, 1))
              : (($ = se(d)), $.c(), k($, 1), $.m(s, null))
            : $ &&
              (q(),
              C($, 1, 1, () => {
                $ = null;
              }),
              K()),
          d[1] && d[1].coverImage
            ? r
              ? (r.p(d, S), S & 2 && k(r, 1))
              : ((r = de(d)), r.c(), k(r, 1), r.m(f, g))
            : r &&
              (q(),
              C(r, 1, 1, () => {
                r = null;
              }),
              K()),
          N &&
            N.p &&
            (!h || S & 16) &&
            Te(N, D, d, d[4], h ? Me(D, d[4], S, null) : De(d[4]), null),
          d[1].relatedPosts && d[1].relatedPosts.length > 0
            ? v
              ? (v.p(d, S), S & 2 && k(v, 1))
              : ((v = _e(d)), v.c(), k(v, 1), v.m(i, null))
            : v &&
              (q(),
              C(v, 1, 1, () => {
                v = null;
              }),
              K());
      },
      i(d) {
        h ||
          (k(e.$$.fragment, d),
          k($),
          k(r),
          k(N, d),
          k(v),
          k(y.$$.fragment, d),
          (h = !0));
      },
      o(d) {
        C(e.$$.fragment, d),
          C($),
          C(r),
          C(N, d),
          C(v),
          C(y.$$.fragment, d),
          (h = !1);
      },
      d(d) {
        c && c.d(d),
          m(t),
          d && m(l),
          d && m(n),
          G(e),
          $ && $.d(),
          r && r.d(),
          N && N.d(d),
          v && v.d(),
          G(y);
      },
    }
  );
}
function Be(a, t, l) {
  let n,
    { $$slots: e = {}, $$scope: o } = t,
    { data: i } = t,
    f = He;
  return (
    (a.$$set = (s) => {
      "data" in s && l(2, (i = s.data)),
        "$$scope" in s && l(4, (o = s.$$scope));
    }),
    (a.$$.update = () => {
      var s, T;
      a.$$.dirty & 4 && l(1, ({ post: n } = i), n),
        a.$$.dirty & 3 &&
          ((s = n == null ? void 0 : n.tags) != null &&
            s.length &&
            l(0, (f = n.tags.concat(f))),
          (T = n == null ? void 0 : n.keywords) != null &&
            T.length &&
            l(0, (f = n.keywords.concat(f))));
    }),
    [f, n, i, e, o]
  );
}
class qe extends ye {
  constructor(t) {
    super(), ve(this, t, Be, Ye, pe, { data: 2 });
  }
}
export { qe as component };
