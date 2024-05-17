import {
  S as J,
  i as K,
  s as Q,
  k as B,
  J as _,
  q as L,
  l as S,
  m as u,
  K as $,
  r as j,
  h as n,
  p as ee,
  n as e,
  O as X,
  b as z,
  G as l,
  M as A,
  a as V,
  c as R,
  P as ae,
  Q as le,
  y as F,
  z as H,
  A as q,
  g as O,
  d as P,
  B as N,
} from "./index.c7992fe2.js";
import { S as ne } from "./Socials.e586c758.js";
import { w as ie } from "./index.12c3ab83.js";
function oe(v) {
  let t, r, s, a, i, o;
  return {
    c() {
      (t = B("div")),
        (r = _("svg")),
        (s = _("text")),
        (a = _("tspan")),
        (i = _("tspan")),
        (o = L("PM")),
        this.h();
    },
    l(h) {
      t = S(h, "DIV", { class: !0 });
      var c = u(t);
      r = $(c, "svg", {
        id: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var k = u(r);
      s = $(k, "text", { "xml:space": !0, id: !0, transform: !0, class: !0 });
      var m = u(s);
      a = $(m, "tspan", { x: !0, y: !0, id: !0 });
      var x = u(a);
      i = $(x, "tspan", { style: !0, id: !0 });
      var p = u(i);
      (o = j(p, "PM")),
        p.forEach(n),
        x.forEach(n),
        m.forEach(n),
        k.forEach(n),
        c.forEach(n),
        this.h();
    },
    h() {
      ee(i, "font-size", "106.667px"),
        ee(i, "font-family", "YoungSerif"),
        e(i, "id", "tspan1317"),
        e(a, "x", "275.57227"),
        e(a, "y", "292.17088"),
        e(a, "id", "tspan1319"),
        e(s, "xml:space", "preserve"),
        e(s, "id", "text"),
        e(s, "transform", "translate(-278.77228,-206.83728)"),
        e(s, "class", "svelte-qu2viy"),
        e(r, "id", "logo-text"),
        e(r, "width", "723.84009"),
        e(r, "height", "116.720268"),
        e(r, "viewBox", "0 0 723.84009 116.720269"),
        e(r, "fill", "none"),
        e(r, "xmlns", "http://www.w3.org/2000/svg"),
        e(r, "class", "svelte-qu2viy"),
        e(t, "class", "logo svelte-qu2viy"),
        X(t, "animated", v[0]);
    },
    m(h, c) {
      z(h, t, c), l(t, r), l(r, s), l(s, a), l(a, i), l(i, o);
    },
    p(h, [c]) {
      c & 1 && X(t, "animated", h[0]);
    },
    i: A,
    o: A,
    d(h) {
      h && n(t);
    },
  };
}
function ue(v, t, r) {
  let { animated: s = !0 } = t;
  return (
    (v.$$set = (a) => {
      "animated" in a && r(0, (s = a.animated));
    }),
    [s]
  );
}
class ce extends J {
  constructor(t) {
    super(), K(this, t, ue, oe, Q, { animated: 0 });
  }
}
function he() {
  let v;
  v = localStorage.getItem("theme-preference") || "auto";
  const { subscribe: t, set: r } = ie(v);
  return {
    subscribe: t,
    set: (s) => {
      var a;
      localStorage.setItem("theme-preference", s),
        (a = document.firstElementChild) == null ||
          a.setAttribute("data-theme", s),
        r(s);
    },
  };
}
const W = he();
function fe(v) {
  let t, r, s, a, i, o, h, c, k, m, x, p, E, f, d, y, I, w, M, T, Y;
  return {
    c() {
      (t = V()),
        (r = B("button")),
        (s = _("svg")),
        (a = _("mask")),
        (i = _("rect")),
        (o = _("circle")),
        (h = _("circle")),
        (c = _("g")),
        (k = _("line")),
        (m = _("line")),
        (x = _("line")),
        (p = _("line")),
        (E = _("line")),
        (f = _("line")),
        (d = _("line")),
        (y = _("line")),
        (I = V()),
        (w = B("span")),
        (M = L("Auto")),
        this.h();
    },
    l(g) {
      (t = R(g)),
        (r = S(g, "BUTTON", { class: !0, title: !0, "data-theme": !0 }));
      var b = u(r);
      s = $(b, "svg", {
        "aria-hidden": !0,
        width: !0,
        height: !0,
        viewBox: !0,
      });
      var G = u(s);
      a = $(G, "mask", { id: !0, class: !0 });
      var D = u(a);
      (i = $(D, "rect", {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        fill: !0,
        class: !0,
      })),
        u(i).forEach(n),
        (o = $(D, "circle", { cx: !0, cy: !0, r: !0, fill: !0, class: !0 })),
        u(o).forEach(n),
        D.forEach(n),
        (h = $(G, "circle", {
          id: !0,
          cx: !0,
          cy: !0,
          r: !0,
          mask: !0,
          class: !0,
        })),
        u(h).forEach(n),
        (c = $(G, "g", { id: !0, class: !0 }));
      var C = u(c);
      (k = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(k).forEach(n),
        (m = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(m).forEach(n),
        (x = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(x).forEach(n),
        (p = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(p).forEach(n),
        (E = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(E).forEach(n),
        (f = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(f).forEach(n),
        (d = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(d).forEach(n),
        (y = $(C, "line", { x1: !0, y1: !0, x2: !0, y2: !0, class: !0 })),
        u(y).forEach(n),
        C.forEach(n),
        G.forEach(n),
        (I = R(b)),
        (w = S(b, "SPAN", { class: !0 }));
      var Z = u(w);
      (M = j(Z, "Auto")), Z.forEach(n), b.forEach(n), this.h();
    },
    h() {
      e(i, "x", "0"),
        e(i, "y", "0"),
        e(i, "width", "100%"),
        e(i, "height", "100%"),
        e(i, "fill", "white"),
        e(i, "class", "svelte-niuf71"),
        e(o, "cx", "40"),
        e(o, "cy", "8"),
        e(o, "r", "11"),
        e(o, "fill", "black"),
        e(o, "class", "svelte-niuf71"),
        e(a, "id", "moon"),
        e(a, "class", "svelte-niuf71"),
        e(h, "id", "sun"),
        e(h, "cx", "12"),
        e(h, "cy", "12"),
        e(h, "r", "11"),
        e(h, "mask", "url(#moon)"),
        e(h, "class", "svelte-niuf71"),
        e(k, "x1", "12"),
        e(k, "y1", "1"),
        e(k, "x2", "12"),
        e(k, "y2", "3"),
        e(k, "class", "svelte-niuf71"),
        e(m, "x1", "12"),
        e(m, "y1", "21"),
        e(m, "x2", "12"),
        e(m, "y2", "23"),
        e(m, "class", "svelte-niuf71"),
        e(x, "x1", "4.22"),
        e(x, "y1", "4.22"),
        e(x, "x2", "5.64"),
        e(x, "y2", "5.64"),
        e(x, "class", "svelte-niuf71"),
        e(p, "x1", "18.36"),
        e(p, "y1", "18.36"),
        e(p, "x2", "19.78"),
        e(p, "y2", "19.78"),
        e(p, "class", "svelte-niuf71"),
        e(E, "x1", "1"),
        e(E, "y1", "12"),
        e(E, "x2", "3"),
        e(E, "y2", "12"),
        e(E, "class", "svelte-niuf71"),
        e(f, "x1", "21"),
        e(f, "y1", "12"),
        e(f, "x2", "23"),
        e(f, "y2", "12"),
        e(f, "class", "svelte-niuf71"),
        e(d, "x1", "4.22"),
        e(d, "y1", "19.78"),
        e(d, "x2", "5.64"),
        e(d, "y2", "18.36"),
        e(d, "class", "svelte-niuf71"),
        e(y, "x1", "18.36"),
        e(y, "y1", "5.64"),
        e(y, "x2", "19.78"),
        e(y, "y2", "4.22"),
        e(y, "class", "svelte-niuf71"),
        e(c, "id", "sun-beams"),
        e(c, "class", "svelte-niuf71"),
        e(s, "aria-hidden", "true"),
        e(s, "width", "24"),
        e(s, "height", "24"),
        e(s, "viewBox", "0 0 24 24"),
        e(w, "class", "label svelte-niuf71"),
        e(r, "class", "theme-toggle svelte-niuf71"),
        e(r, "title", "Toggle between light and dark theme"),
        e(r, "data-theme", v[0]);
    },
    m(g, b) {
      z(g, t, b),
        z(g, r, b),
        l(r, s),
        l(s, a),
        l(a, i),
        l(a, o),
        l(s, h),
        l(s, c),
        l(c, k),
        l(c, m),
        l(c, x),
        l(c, p),
        l(c, E),
        l(c, f),
        l(c, d),
        l(c, y),
        l(r, I),
        l(r, w),
        l(w, M),
        T || ((Y = ae(r, "click", v[1])), (T = !0));
    },
    p(g, [b]) {
      b & 1 && e(r, "data-theme", g[0]);
    },
    i: A,
    o: A,
    d(g) {
      g && n(t), g && n(r), (T = !1), Y();
    },
  };
}
function de(v, t, r) {
  let s;
  le(v, W, (i) => r(0, (s = i)));
  function a() {
    s === "auto"
      ? W.set("light")
      : s === "light"
      ? W.set("dark")
      : W.set("auto");
  }
  return [s, a];
}
class re extends J {
  constructor(t) {
    super(), K(this, t, de, fe, Q, {});
  }
}
function ve(v) {
  let t, r, s, a;
  return {
    c() {
      (t = _("svg")),
        (r = _("path")),
        (s = _("path")),
        (a = _("path")),
        this.h();
    },
    l(i) {
      t = $(i, "svg", {
        width: !0,
        height: !0,
        "stroke-width": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
      });
      var o = u(t);
      (r = $(o, "path", {
        d: !0,
        stroke: !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
      })),
        u(r).forEach(n),
        (s = $(o, "path", {
          d: !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        u(s).forEach(n),
        (a = $(o, "path", {
          d: !0,
          stroke: !0,
          "stroke-linecap": !0,
          "stroke-linejoin": !0,
        })),
        u(a).forEach(n),
        o.forEach(n),
        this.h();
    },
    h() {
      e(r, "d", "M12 19C12 14.8 9.2 12 5 12"),
        e(r, "stroke", "currentColor"),
        e(r, "stroke-linecap", "round"),
        e(r, "stroke-linejoin", "round"),
        e(s, "d", "M19 19C19 10.6 13.4 5 5 5"),
        e(s, "stroke", "currentColor"),
        e(s, "stroke-linecap", "round"),
        e(s, "stroke-linejoin", "round"),
        e(a, "d", "M5 19.01L5.01 18.9989"),
        e(a, "stroke", "currentColor"),
        e(a, "stroke-linecap", "round"),
        e(a, "stroke-linejoin", "round"),
        e(t, "width", "100%"),
        e(t, "height", "100%"),
        e(t, "stroke-width", "1.5"),
        e(t, "viewBox", "0 0 24 24"),
        e(t, "fill", "none"),
        e(t, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(i, o) {
      z(i, t, o), l(t, r), l(t, s), l(t, a);
    },
    p: A,
    i: A,
    o: A,
    d(i) {
      i && n(t);
    },
  };
}
class ge extends J {
  constructor(t) {
    super(), K(this, t, null, ve, Q, {});
  }
}
function me(v) {
  let t, r, s;
  return (
    (r = new ge({})),
    {
      c() {
        (t = B("a")), F(r.$$.fragment), this.h();
      },
      l(a) {
        t = S(a, "A", { href: !0, target: !0, rel: !0, title: !0, class: !0 });
        var i = u(t);
        H(r.$$.fragment, i), i.forEach(n), this.h();
      },
      h() {
        e(t, "href", "/rss.xml"),
          e(t, "target", "_blank"),
          e(t, "rel", "noopener noreferrer"),
          e(t, "title", "Subscribe to my RSS Feed"),
          e(t, "class", "svelte-1llmev");
      },
      m(a, i) {
        z(a, t, i), q(r, t, null), (s = !0);
      },
      p: A,
      i(a) {
        s || (O(r.$$.fragment, a), (s = !0));
      },
      o(a) {
        P(r.$$.fragment, a), (s = !1);
      },
      d(a) {
        a && n(t), N(r);
      },
    }
  );
}
class se extends J {
  constructor(t) {
    super(), K(this, t, null, me, Q, {});
  }
}
function xe(v) {
  let t, r, s, a, i, o, h, c, k, m, x, p, E;
  return (
    (a = new ce({})),
    (m = new se({})),
    (p = new re({})),
    {
      c() {
        (t = B("header")),
          (r = B("nav")),
          (s = B("a")),
          F(a.$$.fragment),
          (i = V()),
          (o = B("div")),
          (h = B("a")),
          (c = L("Blog")),
          (k = V()),
          F(m.$$.fragment),
          (x = V()),
          F(p.$$.fragment),
          this.h();
      },
      l(f) {
        t = S(f, "HEADER", { class: !0 });
        var d = u(t);
        r = S(d, "NAV", { class: !0 });
        var y = u(r);
        s = S(y, "A", { class: !0, href: !0, "aria-label": !0 });
        var I = u(s);
        H(a.$$.fragment, I),
          I.forEach(n),
          (i = R(y)),
          (o = S(y, "DIV", { class: !0 }));
        var w = u(o);
        h = S(w, "A", { href: !0, class: !0 });
        var M = u(h);
        (c = j(M, "Blog")),
          M.forEach(n),
          (k = R(w)),
          H(m.$$.fragment, w),
          (x = R(w)),
          H(p.$$.fragment, w),
          w.forEach(n),
          y.forEach(n),
          d.forEach(n),
          this.h();
      },
      h() {
        e(s, "class", "logo svelte-1gvg2a4"),
          e(s, "href", "/"),
          e(s, "aria-label", "Site logo"),
          e(h, "href", "/blog"),
          e(h, "class", "svelte-1gvg2a4"),
          e(o, "class", "links svelte-1gvg2a4"),
          e(r, "class", "container svelte-1gvg2a4"),
          e(t, "class", "svelte-1gvg2a4"),
          X(t, "has-background", v[0]);
      },
      m(f, d) {
        z(f, t, d),
          l(t, r),
          l(r, s),
          q(a, s, null),
          l(r, i),
          l(r, o),
          l(o, h),
          l(h, c),
          l(o, k),
          q(m, o, null),
          l(o, x),
          q(p, o, null),
          (E = !0);
      },
      p(f, [d]) {
        (!E || d & 1) && X(t, "has-background", f[0]);
      },
      i(f) {
        E ||
          (O(a.$$.fragment, f),
          O(m.$$.fragment, f),
          O(p.$$.fragment, f),
          (E = !0));
      },
      o(f) {
        P(a.$$.fragment, f), P(m.$$.fragment, f), P(p.$$.fragment, f), (E = !1);
      },
      d(f) {
        f && n(t), N(a), N(m), N(p);
      },
    }
  );
}
function pe(v, t, r) {
  let { showBackground: s = !1 } = t;
  return (
    (v.$$set = (a) => {
      "showBackground" in a && r(0, (s = a.showBackground));
    }),
    [s]
  );
}
class be extends J {
  constructor(t) {
    super(), K(this, t, pe, xe, Q, { showBackground: 0 });
  }
}
function _e(v) {
  let t, r;
  return {
    c() {
      (t = _("svg")), (r = _("path")), this.h();
    },
    l(s) {
      t = $(s, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        style: !0,
        xmlns: !0,
        preserveAspectRatio: !0,
        class: !0,
      });
      var a = u(t);
      (r = $(a, "path", { d: !0, fill: !0 })),
        u(r).forEach(n),
        a.forEach(n),
        this.h();
    },
    h() {
      e(
        r,
        "d",
        "M0 0L48 8.875C96 17.9167 192 35.4167 288 53.3333C384 71.25 480 88.75 576 82.2083C672 75.4167 768 44.5833 864 26.6667C960 8.75 1056 4.58333 1152 11.125C1248 17.9167 1344 35.4167 1392 44.4583L1440 53.3333V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
      ),
        e(r, "fill", "var(--body-background-color)"),
        e(t, "width", "100%"),
        e(t, "height", "120"),
        e(t, "viewBox", "0 0 1440 120"),
        e(t, "fill", "none"),
        ee(t, "transform", "scale(-1,-1)"),
        e(t, "xmlns", "http://www.w3.org/2000/svg"),
        e(t, "preserveAspectRatio", "xMidYMid slice"),
        e(t, "class", "footer__wave");
    },
    m(s, a) {
      z(s, t, a), l(t, r);
    },
    p: A,
    i: A,
    o: A,
    d(s) {
      s && n(t);
    },
  };
}
class $e extends J {
  constructor(t) {
    super(), K(this, t, null, _e, Q, {});
  }
}
function ye(v) {
  let t, r, s, a, i, o, h, c, k, m, x, p, E, f, d, y, I, w, M, T, Y;
  return (
    (s = new $e({})),
    (y = new ne({})),
    (w = new se({})),
    (T = new re({})),
    {
      c() {
        (t = B("footer")),
          (r = B("div")),
          F(s.$$.fragment),
          (a = V()),
          (i = B("div")),
          (o = B("div")),
          (h = L("Site powered by ")),
          (c = B("a")),
          (k = L("Svelte")),
          (m = L(`,
      `)),
          (x = B("a")),
          (p = L("Iconoir")),
          (E = L(" and ☕")),
          (f = V()),
          (d = B("div")),
          F(y.$$.fragment),
          (I = V()),
          F(w.$$.fragment),
          (M = V()),
          F(T.$$.fragment),
          this.h();
      },
      l(g) {
        t = S(g, "FOOTER", { class: !0 });
        var b = u(t);
        r = S(b, "DIV", { class: !0 });
        var G = u(r);
        H(s.$$.fragment, G),
          G.forEach(n),
          (a = R(b)),
          (i = S(b, "DIV", { class: !0 }));
        var D = u(i);
        o = S(D, "DIV", { class: !0 });
        var C = u(o);
        (h = j(C, "Site powered by ")),
          (c = S(C, "A", { href: !0, class: !0 }));
        var Z = u(c);
        (k = j(Z, "Svelte")),
          Z.forEach(n),
          (m = j(
            C,
            `,
      `
          )),
          (x = S(C, "A", { href: !0, class: !0 }));
        var te = u(x);
        (p = j(te, "Iconoir")),
          te.forEach(n),
          (E = j(C, " and ☕")),
          C.forEach(n),
          (f = R(D)),
          (d = S(D, "DIV", { class: !0 }));
        var U = u(d);
        H(y.$$.fragment, U),
          (I = R(U)),
          H(w.$$.fragment, U),
          (M = R(U)),
          H(T.$$.fragment, U),
          U.forEach(n),
          D.forEach(n),
          b.forEach(n),
          this.h();
      },
      h() {
        e(r, "class", "wave"),
          e(c, "href", "https://kit.svelte.dev/"),
          e(c, "class", "svelte-ihsxy7"),
          e(x, "href", "https://iconoir.com/"),
          e(x, "class", "svelte-ihsxy7"),
          e(o, "class", "credits svelte-ihsxy7"),
          e(d, "class", "socials svelte-ihsxy7"),
          e(i, "class", "content svelte-ihsxy7"),
          e(t, "class", "svelte-ihsxy7");
      },
      m(g, b) {
        z(g, t, b),
          l(t, r),
          q(s, r, null),
          l(t, a),
          l(t, i),
          l(i, o),
          l(o, h),
          l(o, c),
          l(c, k),
          l(o, m),
          l(o, x),
          l(x, p),
          l(o, E),
          l(i, f),
          l(i, d),
          q(y, d, null),
          l(d, I),
          q(w, d, null),
          l(d, M),
          q(T, d, null),
          (Y = !0);
      },
      p: A,
      i(g) {
        Y ||
          (O(s.$$.fragment, g),
          O(y.$$.fragment, g),
          O(w.$$.fragment, g),
          O(T.$$.fragment, g),
          (Y = !0));
      },
      o(g) {
        P(s.$$.fragment, g),
          P(y.$$.fragment, g),
          P(w.$$.fragment, g),
          P(T.$$.fragment, g),
          (Y = !1);
      },
      d(g) {
        g && n(t), N(s), N(y), N(w), N(T);
      },
    }
  );
}
class Ce extends J {
  constructor(t) {
    super(), K(this, t, null, ye, Q, {});
  }
}
export { Ce as F, be as H };
