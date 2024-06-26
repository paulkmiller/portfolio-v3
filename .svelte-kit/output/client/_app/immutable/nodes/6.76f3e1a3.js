import {
  S as T,
  i as R,
  s as A,
  e as fe,
  b as w,
  v as ee,
  d as $,
  f as te,
  g as p,
  h,
  o as pe,
  C as ne,
  D as re,
  E as oe,
  F as ae,
  k as v,
  q as P,
  a as z,
  l as k,
  m as _,
  r as D,
  c as B,
  n as g,
  O as x,
  G as m,
  u as ue,
  p as X,
  P as he,
  M as q,
  R as ze,
  J as le,
  K as se,
  T as Re,
  U as Ae,
  y,
  z as E,
  A as I,
  B as j,
  V as Ne,
  W as ke,
  X as be,
  H as _e,
} from "../chunks/index.c7992fe2.js";
import { S as Oe, E as qe } from "../chunks/Socials.e586c758.js";
import { B as Be } from "../chunks/Button.6162fbd1.js";
import {
  C as Me,
  B as Fe,
  a as Ge,
  T as Je,
} from "../chunks/ContentSection.02ad503a.js";
import { I as Xe } from "../chunks/Image.f2f50b72.js";
function We(o) {
  let e;
  const l = o[4].default,
    t = ne(l, o, o[3], null);
  return {
    c() {
      t && t.c();
    },
    l(s) {
      t && t.l(s);
    },
    m(s, r) {
      t && t.m(s, r), (e = !0);
    },
    p(s, r) {
      t &&
        t.p &&
        (!e || r & 8) &&
        re(t, l, s, s[3], e ? ae(l, s[3], r, null) : oe(s[3]), null);
    },
    i(s) {
      e || (p(t, s), (e = !0));
    },
    o(s) {
      $(t, s), (e = !1);
    },
    d(s) {
      t && t.d(s);
    },
  };
}
function Ye(o) {
  let e, l, t, s, r, n;
  const i = o[4].default,
    a = ne(i, o, o[3], null);
  return {
    c() {
      (e = v("div")),
        (l = v("span")),
        (t = P(o[0])),
        (s = z()),
        (r = v("span")),
        a && a.c(),
        this.h();
    },
    l(c) {
      e = k(c, "DIV", { class: !0 });
      var f = _(e);
      l = k(f, "SPAN", { class: !0 });
      var u = _(l);
      (t = D(u, o[0])),
        u.forEach(h),
        (s = B(f)),
        (r = k(f, "SPAN", { class: !0 }));
      var d = _(r);
      a && a.l(d), d.forEach(h), f.forEach(h), this.h();
    },
    h() {
      g(l, "class", "tooltip svelte-ocg0nr"),
        x(l, "active", o[1]),
        g(r, "class", "tooltip-slot"),
        g(e, "class", "tooltip-wrapper svelte-ocg0nr");
    },
    m(c, f) {
      w(c, e, f),
        m(e, l),
        m(l, t),
        m(e, s),
        m(e, r),
        a && a.m(r, null),
        (n = !0);
    },
    p(c, f) {
      (!n || f & 1) && ue(t, c[0]),
        (!n || f & 2) && x(l, "active", c[1]),
        a &&
          a.p &&
          (!n || f & 8) &&
          re(a, i, c, c[3], n ? ae(i, c[3], f, null) : oe(c[3]), null);
    },
    i(c) {
      n || (p(a, c), (n = !0));
    },
    o(c) {
      $(a, c), (n = !1);
    },
    d(c) {
      c && h(e), a && a.d(c);
    },
  };
}
function Ke(o) {
  let e, l, t, s;
  const r = [Ye, We],
    n = [];
  function i(a, c) {
    return a[2] && a[0] ? 0 : 1;
  }
  return (
    (e = i(o)),
    (l = n[e] = r[e](o)),
    {
      c() {
        l.c(), (t = fe());
      },
      l(a) {
        l.l(a), (t = fe());
      },
      m(a, c) {
        n[e].m(a, c), w(a, t, c), (s = !0);
      },
      p(a, [c]) {
        let f = e;
        (e = i(a)),
          e === f
            ? n[e].p(a, c)
            : (ee(),
              $(n[f], 1, 1, () => {
                n[f] = null;
              }),
              te(),
              (l = n[e]),
              l ? l.p(a, c) : ((l = n[e] = r[e](a)), l.c()),
              p(l, 1),
              l.m(t.parentNode, t));
      },
      i(a) {
        s || (p(l), (s = !0));
      },
      o(a) {
        $(l), (s = !1);
      },
      d(a) {
        n[e].d(a), a && h(t);
      },
    }
  );
}
function Le(o, e, l) {
  let { $$slots: t = {}, $$scope: s } = e,
    { tip: r = "" } = e,
    { active: n = !1 } = e,
    i = !1;
  return (
    pe(() => l(2, (i = !0))),
    (o.$$set = (a) => {
      "tip" in a && l(0, (r = a.tip)),
        "active" in a && l(1, (n = a.active)),
        "$$scope" in a && l(3, (s = a.$$scope));
    }),
    [r, n, i, s, t]
  );
}
class Ue extends T {
  constructor(e) {
    super(), R(this, e, Le, Ke, A, { tip: 0, active: 1 });
  }
}
function Ze(o) {
  let e,
    l,
    t = `perspective(500px) ${o[0] ? "scale(1.1)" : ""} rotateX(${o[1]}deg)
    rotateY(${o[2]}deg)`,
    s,
    r;
  return {
    c() {
      (e = v("div")), (l = v("img")), this.h();
    },
    l(n) {
      e = k(n, "DIV", { class: !0 });
      var i = _(e);
      (l = k(i, "IMG", { alt: !0, class: !0 })), i.forEach(h), this.h();
    },
    h() {
      g(l, "alt", ""),
        g(l, "class", "img svelte-wu8m8g"),
        X(l, "background-image", "url(/images/pic1.gif)"),
        X(l, "transform", t),
        X(l, "align-self", "center"),
        g(e, "class", "img-container svelte-wu8m8g");
    },
    m(n, i) {
      w(n, e, i),
        m(e, l),
        s ||
          ((r = [he(l, "mousemove", o[3]), he(l, "mouseleave", o[4])]),
          (s = !0));
    },
    p(n, [i]) {
      i & 7 &&
        t !==
          (t = `perspective(500px) ${n[0] ? "scale(1.1)" : ""} rotateX(${
            n[1]
          }deg)
    rotateY(${n[2]}deg)`) &&
        X(l, "transform", t);
    },
    i: q,
    o: q,
    d(n) {
      n && h(e), (s = !1), ze(r);
    },
  };
}
function Qe(o, e, l) {
  let t, s, r;
  function n(a) {
    l(0, (t = !0));
    let c = a.target;
    l(2, (r = 13 * ((a.offsetX - c.clientHeight / 2) / c.clientWidth))),
      l(1, (s = -13 * ((a.offsetY - c.clientWidth / 2) / c.clientHeight)));
  }
  function i() {
    l(0, (t = !1)), l(2, (r = 0)), l(1, (s = 0));
  }
  return [t, s, r, n, i];
}
class xe extends T {
  constructor(e) {
    super(), R(this, e, Qe, Ze, A, {});
  }
}
function et(o) {
  let e, l, t;
  return {
    c() {
      (e = v("div")), (l = le("svg")), (t = le("path")), this.h();
    },
    l(s) {
      e = k(s, "DIV", { class: !0, style: !0 });
      var r = _(e);
      l = se(r, "svg", {
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0,
        class: !0,
      });
      var n = _(l);
      (t = se(n, "path", { d: !0, fill: !0 })),
        _(t).forEach(h),
        n.forEach(h),
        r.forEach(h),
        this.h();
    },
    h() {
      g(
        t,
        "d",
        "M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
      ),
        g(t, "fill", o[0]),
        g(l, "width", o[1]),
        g(l, "height", o[1]),
        g(l, "viewBox", "0 0 160 160"),
        g(l, "fill", "none"),
        g(l, "xmlns", "http://www.w3.org/2000/svg"),
        g(l, "class", "svelte-sixv8c"),
        g(e, "class", "wrapper svelte-sixv8c"),
        X(e, "top", o[2].top),
        X(e, "left", o[2].left);
    },
    m(s, r) {
      w(s, e, r), m(e, l), m(l, t);
    },
    p(s, [r]) {
      r & 1 && g(t, "fill", s[0]),
        r & 2 && g(l, "width", s[1]),
        r & 2 && g(l, "height", s[1]),
        r & 4 && X(e, "top", s[2].top),
        r & 4 && X(e, "left", s[2].left);
    },
    i: q,
    o: q,
    d(s) {
      s && h(e);
    },
  };
}
function tt(o, e, l) {
  let { color: t } = e,
    { size: s } = e,
    { style: r } = e;
  return (
    (o.$$set = (n) => {
      "color" in n && l(0, (t = n.color)),
        "size" in n && l(1, (s = n.size)),
        "style" in n && l(2, (r = n.style));
    }),
    [t, s, r]
  );
}
class lt extends T {
  constructor(e) {
    super(), R(this, e, tt, et, A, { color: 0, size: 1, style: 2 });
  }
}
function we(o, e, l) {
  const t = o.slice();
  return (t[7] = e[l]), t;
}
function ye(o, e) {
  let l, t, s;
  return (
    (t = new lt({
      props: { color: e[7].color, size: e[7].size, style: e[7].style },
    })),
    {
      key: o,
      first: null,
      c() {
        (l = fe()), y(t.$$.fragment), this.h();
      },
      l(r) {
        (l = fe()), E(t.$$.fragment, r), this.h();
      },
      h() {
        this.first = l;
      },
      m(r, n) {
        w(r, l, n), I(t, r, n), (s = !0);
      },
      p(r, n) {
        e = r;
        const i = {};
        n & 1 && (i.color = e[7].color),
          n & 1 && (i.size = e[7].size),
          n & 1 && (i.style = e[7].style),
          t.$set(i);
      },
      i(r) {
        s || (p(t.$$.fragment, r), (s = !0));
      },
      o(r) {
        $(t.$$.fragment, r), (s = !1);
      },
      d(r) {
        r && h(l), j(t, r);
      },
    }
  );
}
function st(o) {
  let e,
    l = [],
    t = new Map(),
    s,
    r,
    n,
    i = o[0];
  const a = (u) => u[7].id;
  for (let u = 0; u < i.length; u += 1) {
    let d = we(o, i, u),
      b = a(d);
    t.set(b, (l[u] = ye(b, d)));
  }
  const c = o[3].default,
    f = ne(c, o, o[2], null);
  return {
    c() {
      e = v("div");
      for (let u = 0; u < l.length; u += 1) l[u].c();
      (s = z()), (r = v("span")), f && f.c(), this.h();
    },
    l(u) {
      e = k(u, "DIV", { class: !0 });
      var d = _(e);
      for (let M = 0; M < l.length; M += 1) l[M].l(d);
      (s = B(d)), (r = k(d, "SPAN", { class: !0 }));
      var b = _(r);
      f && f.l(b), b.forEach(h), d.forEach(h), this.h();
    },
    h() {
      g(r, "class", "slot-wrapper svelte-exdx8u"),
        g(e, "class", "sparkle-wrapper svelte-exdx8u");
    },
    m(u, d) {
      w(u, e, d);
      for (let b = 0; b < l.length; b += 1) l[b] && l[b].m(e, null);
      m(e, s), m(e, r), f && f.m(r, null), (n = !0);
    },
    p(u, [d]) {
      d & 1 &&
        ((i = u[0]),
        ee(),
        (l = Re(l, d, a, 1, u, i, t, e, Ne, ye, s, we)),
        te()),
        f &&
          f.p &&
          (!n || d & 4) &&
          re(f, c, u, u[2], n ? ae(c, u[2], d, null) : oe(u[2]), null);
    },
    i(u) {
      if (!n) {
        for (let d = 0; d < i.length; d += 1) p(l[d]);
        p(f, u), (n = !0);
      }
    },
    o(u) {
      for (let d = 0; d < l.length; d += 1) $(l[d]);
      $(f, u), (n = !1);
    },
    d(u) {
      u && h(e);
      for (let d = 0; d < l.length; d += 1) l[d].d();
      f && f.d(u);
    },
  };
}
function nt(o, e, l) {
  let { $$slots: t = {}, $$scope: s } = e;
  const r = (f, u) => Math.floor(Math.random() * (u - f)) + f;
  let { color: n = "default" } = e;
  const i = () => ({
    id: String(r(1e4, 99999)),
    createdAt: Date.now(),
    color:
      n === "primary"
        ? "var(--color--primary)"
        : n === "secondary"
        ? "var(--color--secondary)"
        : "var(--color--yellow",
    size: r(10, 20),
    style: { top: r(-10, 80) + "%", left: r(0, 100) + "%" },
  });
  let a = [],
    c;
  return (
    pe(() => {
      c = setInterval(() => {
        const f = Date.now(),
          u = i(),
          d = a.filter((b) => f - b.createdAt < 1500);
        d.push(u), l(0, (a = d));
      }, 400);
    }),
    Ae(() => {
      clearInterval(c);
    }),
    (o.$$set = (f) => {
      "color" in f && l(1, (n = f.color)),
        "$$scope" in f && l(2, (s = f.$$scope));
    }),
    [a, n, s, t]
  );
}
class He extends T {
  constructor(e) {
    super(), R(this, e, nt, st, A, { color: 1 });
  }
}
function rt(o) {
  let e, l, t;
  const s = o[2].default,
    r = ne(s, o, o[3], null);
  return {
    c() {
      (e = v("strong")), r && r.c(), this.h();
    },
    l(n) {
      e = k(n, "STRONG", { class: !0 });
      var i = _(e);
      r && r.l(i), i.forEach(h), this.h();
    },
    h() {
      g(e, "class", (l = ke(o[0]) + " svelte-8f8x6d"));
    },
    m(n, i) {
      w(n, e, i), r && r.m(e, null), (t = !0);
    },
    p(n, i) {
      r &&
        r.p &&
        (!t || i & 8) &&
        re(r, s, n, n[3], t ? ae(s, n[3], i, null) : oe(n[3]), null),
        (!t || (i & 1 && l !== (l = ke(n[0]) + " svelte-8f8x6d"))) &&
          g(e, "class", l);
    },
    i(n) {
      t || (p(r, n), (t = !0));
    },
    o(n) {
      $(r, n), (t = !1);
    },
    d(n) {
      n && h(e), r && r.d(n);
    },
  };
}
function ot(o) {
  let e, l;
  return (
    (e = new He({
      props: { color: o[1], $$slots: { default: [rt] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, [s]) {
        const r = {};
        s & 2 && (r.color = t[1]),
          s & 9 && (r.$$scope = { dirty: s, ctx: t }),
          e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function at(o, e, l) {
  let { $$slots: t = {}, $$scope: s } = e,
    { color: r = "default" } = e,
    { sparkleColor: n = "default" } = e;
  return (
    (o.$$set = (i) => {
      "color" in i && l(0, (r = i.color)),
        "sparkleColor" in i && l(1, (n = i.sparkleColor)),
        "$$scope" in i && l(3, (s = i.$$scope));
    }),
    [r, n, t, s]
  );
}
class it extends T {
  constructor(e) {
    super(), R(this, e, at, ot, A, { color: 0, sparkleColor: 1 });
  }
}
function ct(o) {
  let e, l, t, s, r, n;
  const i = o[2].default,
    a = ne(i, o, o[1], null);
  return {
    c() {
      (e = v("button")), (l = v("div")), (t = z()), a && a.c(), this.h();
    },
    l(c) {
      e = k(c, "BUTTON", { class: !0 });
      var f = _(e);
      (l = k(f, "DIV", { class: !0 })),
        _(l).forEach(h),
        (t = B(f)),
        a && a.l(f),
        f.forEach(h),
        this.h();
    },
    h() {
      g(l, "class", "svelte-160e42u"),
        x(l, "side", o[0]),
        g(e, "class", "svelte-160e42u"),
        x(e, "button-with-side", o[0]);
    },
    m(c, f) {
      w(c, e, f),
        m(e, l),
        m(e, t),
        a && a.m(e, null),
        (s = !0),
        r || ((n = [he(e, "click", o[3]), he(e, "keypress", o[4])]), (r = !0));
    },
    p(c, [f]) {
      (!s || f & 1) && x(l, "side", c[0]),
        a &&
          a.p &&
          (!s || f & 2) &&
          re(a, i, c, c[1], s ? ae(i, c[1], f, null) : oe(c[1]), null),
        (!s || f & 1) && x(e, "button-with-side", c[0]);
    },
    i(c) {
      s || (p(a, c), (s = !0));
    },
    o(c) {
      $(a, c), (s = !1);
    },
    d(c) {
      c && h(e), a && a.d(c), (r = !1), ze(n);
    },
  };
}
function ft(o, e, l) {
  let { $$slots: t = {}, $$scope: s } = e,
    { side: r = !1 } = e;
  function n(a) {
    be.call(this, o, a);
  }
  function i(a) {
    be.call(this, o, a);
  }
  return (
    (o.$$set = (a) => {
      "side" in a && l(0, (r = a.side)),
        "$$scope" in a && l(1, (s = a.$$scope));
    }),
    [r, s, t, n, i]
  );
}
class ut extends T {
  constructor(e) {
    super(), R(this, e, ft, ct, A, { side: 0 });
  }
}
function ht(o) {
  let e;
  return {
    c() {
      e = P("Front End Developer!");
    },
    l(l) {
      e = D(l, "Front End Developer!");
    },
    m(l, t) {
      w(l, e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function gt(o) {
  let e, l;
  return {
    c() {
      (e = v("a")), (l = P("games")), this.h();
    },
    l(t) {
      e = k(t, "A", { href: !0, target: !0 });
      var s = _(e);
      (l = D(s, "games")), s.forEach(h), this.h();
    },
    h() {
      g(e, "href", "https://steamcommunity.com/id/Kahram/"),
        g(e, "target", "_blank");
    },
    m(t, s) {
      w(t, e, s), m(e, l);
    },
    p: q,
    d(t) {
      t && h(e);
    },
  };
}
function dt(o) {
  let e;
  return {
    c() {
      e = P("Discover my work ↓");
    },
    l(l) {
      e = D(l, "Discover my work ↓");
    },
    m(l, t) {
      w(l, e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function mt(o) {
  let e,
    l,
    t,
    s,
    r,
    n,
    i,
    a,
    c,
    f,
    u,
    d,
    b,
    M,
    C,
    V,
    N,
    L,
    F,
    J,
    U,
    ge,
    W,
    de,
    G,
    me,
    Y,
    ie;
  return (
    (a = new it({
      props: {
        color: "secondary",
        $$slots: { default: [ht] },
        $$scope: { ctx: o },
      },
    })),
    (V = new Ue({
      props: { tip: o[0], $$slots: { default: [gt] }, $$scope: { ctx: o } },
    })),
    (W = new Oe({})),
    (G = new ut({
      props: { side: !0, $$slots: { default: [dt] }, $$scope: { ctx: o } },
    })),
    G.$on("click", Ee),
    G.$on("keypress", Ee),
    (Y = new xe({})),
    {
      c() {
        (e = v("section")),
          (l = v("div")),
          (t = v("h1")),
          (s = P("Paul Miller")),
          (r = z()),
          (n = v("h2")),
          (i = P(`I am a cat dad, gamer, and...
      `)),
          y(a.$$.fragment),
          (c = z()),
          (f = v("p")),
          (u = P("Bringing Designs to Life ")),
          (d = v("span")),
          (b = P("&")),
          (M = v("br")),
          (C = P(`
      Probably playing `)),
          y(V.$$.fragment),
          (N = P(" or petting my cats.")),
          (L = z()),
          (F = v("div")),
          (J = v("span")),
          (U = P("Socials:")),
          (ge = z()),
          y(W.$$.fragment),
          (de = z()),
          y(G.$$.fragment),
          (me = z()),
          y(Y.$$.fragment),
          this.h();
      },
      l(S) {
        e = k(S, "SECTION", { id: !0, class: !0 });
        var H = _(e);
        l = k(H, "DIV", { class: !0 });
        var O = _(l);
        t = k(O, "H1", { class: !0 });
        var Z = _(t);
        (s = D(Z, "Paul Miller")),
          Z.forEach(h),
          (r = B(O)),
          (n = k(O, "H2", { class: !0 }));
        var Q = _(n);
        (i = D(
          Q,
          `I am a cat dad, gamer, and...
      `
        )),
          E(a.$$.fragment, Q),
          Q.forEach(h),
          (c = B(O)),
          (f = k(O, "P", { class: !0 }));
        var K = _(f);
        (u = D(K, "Bringing Designs to Life ")),
          (d = k(K, "SPAN", { class: !0 }));
        var $e = _(d);
        (b = D($e, "&")),
          $e.forEach(h),
          (M = k(K, "BR", {})),
          (C = D(
            K,
            `
      Probably playing `
          )),
          E(V.$$.fragment, K),
          (N = D(K, " or petting my cats.")),
          K.forEach(h),
          (L = B(O)),
          (F = k(O, "DIV", { class: !0 }));
        var ce = _(F);
        J = k(ce, "SPAN", { class: !0 });
        var ve = _(J);
        (U = D(ve, "Socials:")),
          ve.forEach(h),
          (ge = B(ce)),
          E(W.$$.fragment, ce),
          ce.forEach(h),
          (de = B(O)),
          E(G.$$.fragment, O),
          O.forEach(h),
          (me = B(H)),
          E(Y.$$.fragment, H),
          H.forEach(h),
          this.h();
      },
      h() {
        g(t, "class", "svelte-14zg98j"),
          g(n, "class", "svelte-14zg98j"),
          g(d, "class", "secondary svelte-14zg98j"),
          g(f, "class", "svelte-14zg98j"),
          g(J, "class", "svelte-14zg98j"),
          g(F, "class", "socials svelte-14zg98j"),
          g(l, "class", "info svelte-14zg98j"),
          g(e, "id", "hero"),
          g(e, "class", "svelte-14zg98j");
      },
      m(S, H) {
        w(S, e, H),
          m(e, l),
          m(l, t),
          m(t, s),
          m(l, r),
          m(l, n),
          m(n, i),
          I(a, n, null),
          m(l, c),
          m(l, f),
          m(f, u),
          m(f, d),
          m(d, b),
          m(f, M),
          m(f, C),
          I(V, f, null),
          m(f, N),
          m(l, L),
          m(l, F),
          m(F, J),
          m(J, U),
          m(F, ge),
          I(W, F, null),
          m(l, de),
          I(G, l, null),
          m(e, me),
          I(Y, e, null),
          (ie = !0);
      },
      p(S, [H]) {
        const O = {};
        H & 2 && (O.$$scope = { dirty: H, ctx: S }), a.$set(O);
        const Z = {};
        H & 1 && (Z.tip = S[0]),
          H & 2 && (Z.$$scope = { dirty: H, ctx: S }),
          V.$set(Z);
        const Q = {};
        H & 2 && (Q.$$scope = { dirty: H, ctx: S }), G.$set(Q);
      },
      i(S) {
        ie ||
          (p(a.$$.fragment, S),
          p(V.$$.fragment, S),
          p(W.$$.fragment, S),
          p(G.$$.fragment, S),
          p(Y.$$.fragment, S),
          (ie = !0));
      },
      o(S) {
        $(a.$$.fragment, S),
          $(V.$$.fragment, S),
          $(W.$$.fragment, S),
          $(G.$$.fragment, S),
          $(Y.$$.fragment, S),
          (ie = !1);
      },
      d(S) {
        S && h(e), j(a), j(V), j(W), j(G), j(Y);
      },
    }
  );
}
function Ee() {
  const o = document.querySelector("#projects");
  o && o.scrollIntoView(!0);
}
function pt(o, e, l) {
  let t;
  return l(0, (t = "Probably getting my butt kicked 🙃")), [t];
}
class _t extends T {
  constructor(e) {
    super(), R(this, e, pt, mt, A, {});
  }
}
function $t(o) {
  let e;
  return {
    c() {
      e = P("Contact Me");
    },
    l(l) {
      e = D(l, "Contact Me");
    },
    m(l, t) {
      w(l, e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function vt(o) {
  let e, l;
  return (
    (e = new qe({ props: { slot: "icon" } })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p: q,
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function kt(o) {
  let e, l;
  return (
    (e = new Be({
      props: {
        href: "mailto:paulkerrymiller@gmail.com",
        $$slots: { icon: [vt], default: [$t] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, s) {
        const r = {};
        s & 1 && (r.$$scope = { dirty: s, ctx: t }), e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function bt(o) {
  let e, l, t, s, r, n, i, a, c, f, u, d, b, M;
  return (
    (b = new He({
      props: { $$slots: { default: [kt] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (e = v("section")),
          (l = v("div")),
          (t = v("p")),
          (s =
            P(`Hey there! I'm Paul, a frontend developer who loves bringing designs to
      life through code. There's nothing quite like the thrill of transforming a
      static mockup into an interactive, engaging experience that users can
      enjoy.`)),
          (r = z()),
          (n = v("p")),
          (i =
            P(`Over the years, I've had the opportunity to work with a wide range of
      technologies, from JavaScript frameworks like React and Vue to backend
      systems like Ruby on Rails and PHP. More recently, I've been diving into
      Sveltekit and Go, along with headless CMS solutions like Strapi and
      Contentful.`)),
          (a = z()),
          (c = v("p")),
          (f =
            P(`If you're looking for a frontend developer who's equal parts creative and
      technical, I'd love to chat. Feel free to check out my blog if you want to
      see what I'm up too! And if you've got a design that you're dying to see
      brought to life, let's definitely talk!`)),
          (u = z()),
          (d = v("div")),
          y(b.$$.fragment),
          this.h();
      },
      l(C) {
        e = k(C, "SECTION", { id: !0, class: !0 });
        var V = _(e);
        l = k(V, "DIV", { class: !0 });
        var N = _(l);
        t = k(N, "P", {});
        var L = _(t);
        (s = D(
          L,
          `Hey there! I'm Paul, a frontend developer who loves bringing designs to
      life through code. There's nothing quite like the thrill of transforming a
      static mockup into an interactive, engaging experience that users can
      enjoy.`
        )),
          L.forEach(h),
          (r = B(N)),
          (n = k(N, "P", {}));
        var F = _(n);
        (i = D(
          F,
          `Over the years, I've had the opportunity to work with a wide range of
      technologies, from JavaScript frameworks like React and Vue to backend
      systems like Ruby on Rails and PHP. More recently, I've been diving into
      Sveltekit and Go, along with headless CMS solutions like Strapi and
      Contentful.`
        )),
          F.forEach(h),
          (a = B(N)),
          (c = k(N, "P", {}));
        var J = _(c);
        (f = D(
          J,
          `If you're looking for a frontend developer who's equal parts creative and
      technical, I'd love to chat. Feel free to check out my blog if you want to
      see what I'm up too! And if you've got a design that you're dying to see
      brought to life, let's definitely talk!`
        )),
          J.forEach(h),
          N.forEach(h),
          (u = B(V)),
          (d = k(V, "DIV", { class: !0 }));
        var U = _(d);
        E(b.$$.fragment, U), U.forEach(h), V.forEach(h), this.h();
      },
      h() {
        g(l, "class", "text svelte-jsmmw5"),
          g(d, "class", "ctas svelte-jsmmw5"),
          g(e, "id", "about"),
          g(e, "class", "wrapper svelte-jsmmw5");
      },
      m(C, V) {
        w(C, e, V),
          m(e, l),
          m(l, t),
          m(t, s),
          m(l, r),
          m(l, n),
          m(n, i),
          m(l, a),
          m(l, c),
          m(c, f),
          m(e, u),
          m(e, d),
          I(b, d, null),
          (M = !0);
      },
      p(C, [V]) {
        const N = {};
        V & 1 && (N.$$scope = { dirty: V, ctx: C }), b.$set(N);
      },
      i(C) {
        M || (p(b.$$.fragment, C), (M = !0));
      },
      o(C) {
        $(b.$$.fragment, C), (M = !1);
      },
      d(C) {
        C && h(e), j(b);
      },
    }
  );
}
class wt extends T {
  constructor(e) {
    super(), R(this, e, null, bt, A, {});
  }
}
function Ie(o, e, l) {
  const t = o.slice();
  return (t[1] = e[l]), t;
}
function je(o) {
  let e, l;
  return (
    (e = new Fe({
      props: {
        slug: o[1].slug,
        title: o[1].title,
        excerpt: o[1].excerpt,
        tags: o[1].tags,
        readingTime: o[1].readingTime,
        showImage: !1,
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, s) {
        const r = {};
        s & 1 && (r.slug = t[1].slug),
          s & 1 && (r.title = t[1].title),
          s & 1 && (r.excerpt = t[1].excerpt),
          s & 1 && (r.tags = t[1].tags),
          s & 1 && (r.readingTime = t[1].readingTime),
          e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function yt(o) {
  let e,
    l,
    t = o[0],
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = je(Ie(o, t, n));
  const r = (n) =>
    $(s[n], 1, 1, () => {
      s[n] = null;
    });
  return {
    c() {
      e = v("div");
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = k(n, "DIV", { class: !0 });
      var i = _(e);
      for (let a = 0; a < s.length; a += 1) s[a].l(i);
      i.forEach(h), this.h();
    },
    h() {
      g(e, "class", "grid svelte-1hdv5ie");
    },
    m(n, i) {
      w(n, e, i);
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(e, null);
      l = !0;
    },
    p(n, i) {
      if (i & 1) {
        t = n[0];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Ie(n, t, a);
          s[a]
            ? (s[a].p(c, i), p(s[a], 1))
            : ((s[a] = je(c)), s[a].c(), p(s[a], 1), s[a].m(e, null));
        }
        for (ee(), a = t.length; a < s.length; a += 1) r(a);
        te();
      }
    },
    i(n) {
      if (!l) {
        for (let i = 0; i < t.length; i += 1) p(s[i]);
        l = !0;
      }
    },
    o(n) {
      s = s.filter(Boolean);
      for (let i = 0; i < s.length; i += 1) $(s[i]);
      l = !1;
    },
    d(n) {
      n && h(e), _e(s, n);
    },
  };
}
function Et(o) {
  let e;
  return {
    c() {
      e = P("View More");
    },
    l(l) {
      e = D(l, "View More");
    },
    m(l, t) {
      w(l, e, t);
    },
    d(l) {
      l && h(e);
    },
  };
}
function It(o) {
  let e, l, t;
  return (
    (l = new Be({
      props: { href: "/blog", $$slots: { default: [Et] }, $$scope: { ctx: o } },
    })),
    {
      c() {
        (e = v("div")), y(l.$$.fragment), this.h();
      },
      l(s) {
        e = k(s, "DIV", { slot: !0 });
        var r = _(e);
        E(l.$$.fragment, r), r.forEach(h), this.h();
      },
      h() {
        g(e, "slot", "button");
      },
      m(s, r) {
        w(s, e, r), I(l, e, null), (t = !0);
      },
      p(s, r) {
        const n = {};
        r & 16 && (n.$$scope = { dirty: r, ctx: s }), l.$set(n);
      },
      i(s) {
        t || (p(l.$$.fragment, s), (t = !0));
      },
      o(s) {
        $(l.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && h(e), j(l);
      },
    }
  );
}
function jt(o) {
  let e, l;
  return (
    (e = new Me({
      props: {
        id: "recent-posts",
        title: "Blog posts",
        description:
          "I write about things that intrigue me, life events, and personal thoughts. Want to learn more about me? This is the spot!",
        align: "left",
        $$slots: { button: [It], default: [yt] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, [s]) {
        const r = {};
        s & 17 && (r.$$scope = { dirty: s, ctx: t }), e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function St(o, e, l) {
  let { posts: t } = e;
  return (
    (o.$$set = (s) => {
      "posts" in s && l(0, (t = s.posts));
    }),
    [t]
  );
}
class Pt extends T {
  constructor(e) {
    super(), R(this, e, St, jt, A, { posts: 0 });
  }
}
function Dt(o) {
  let e, l, t;
  return {
    c() {
      (e = le("svg")), (l = le("path")), (t = le("path")), this.h();
    },
    l(s) {
      e = se(s, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        fill: !0,
        "stroke-width": !0,
        color: !0,
      });
      var r = _(e);
      (l = se(r, "path", {
        stroke: !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        d: !0,
      })),
        _(l).forEach(h),
        (t = se(r, "path", { stroke: !0, "stroke-linecap": !0, d: !0 })),
        _(t).forEach(h),
        r.forEach(h),
        this.h();
    },
    h() {
      g(l, "stroke", "#f6d4d3"),
        g(l, "stroke-linecap", "round"),
        g(l, "stroke-linejoin", "round"),
        g(l, "d", "M21 3h-6m6 0-9 9m9-9v6"),
        g(t, "stroke", "#f6d4d3"),
        g(t, "stroke-linecap", "round"),
        g(t, "d", "M21 13v6l-2 2H5l-2-2V5l2-2h6"),
        g(e, "xmlns", "http://www.w3.org/2000/svg"),
        g(e, "width", "24"),
        g(e, "height", "24"),
        g(e, "fill", "none"),
        g(e, "stroke-width", "1.5"),
        g(e, "color", "#f6d4d3");
    },
    m(s, r) {
      w(s, e, r), m(e, l), m(e, t);
    },
    p: q,
    i: q,
    o: q,
    d(s) {
      s && h(e);
    },
  };
}
class Ct extends T {
  constructor(e) {
    super(), R(this, e, null, Dt, A, {});
  }
}
function Se(o, e, l) {
  const t = o.slice();
  return (t[5] = e[l]), t;
}
function Vt(o) {
  let e, l, t;
  return (
    (l = new Xe({
      props: { src: o[3], alt: "Picture describing the " + o[0] + " project" },
    })),
    {
      c() {
        (e = v("div")), y(l.$$.fragment), this.h();
      },
      l(s) {
        e = k(s, "DIV", { class: !0, slot: !0 });
        var r = _(e);
        E(l.$$.fragment, r), r.forEach(h), this.h();
      },
      h() {
        g(e, "class", "image"), g(e, "slot", "image");
      },
      m(s, r) {
        w(s, e, r), I(l, e, null), (t = !0);
      },
      p(s, r) {
        const n = {};
        r & 8 && (n.src = s[3]),
          r & 1 && (n.alt = "Picture describing the " + s[0] + " project"),
          l.$set(n);
      },
      i(s) {
        t || (p(l.$$.fragment, s), (t = !0));
      },
      o(s) {
        $(l.$$.fragment, s), (t = !1);
      },
      d(s) {
        s && h(e), j(l);
      },
    }
  );
}
function zt(o) {
  let e, l, t, s, r, n, i, a, c, f;
  return (
    (n = new Ct({})),
    {
      c() {
        (e = v("div")),
          (l = v("div")),
          (t = v("span")),
          (s = P(o[0])),
          (r = z()),
          y(n.$$.fragment),
          (i = z()),
          (a = v("h6")),
          (c = P(o[1])),
          this.h();
      },
      l(u) {
        e = k(u, "DIV", { class: !0, slot: !0 });
        var d = _(e);
        l = k(d, "DIV", { class: !0 });
        var b = _(l);
        t = k(b, "SPAN", {});
        var M = _(t);
        (s = D(M, o[0])),
          M.forEach(h),
          (r = B(b)),
          E(n.$$.fragment, b),
          b.forEach(h),
          (i = B(d)),
          (a = k(d, "H6", {}));
        var C = _(a);
        (c = D(C, o[1])), C.forEach(h), d.forEach(h), this.h();
      },
      h() {
        g(l, "class", "title svelte-1w50j5m"),
          g(e, "class", "content svelte-1w50j5m"),
          g(e, "slot", "content");
      },
      m(u, d) {
        w(u, e, d),
          m(e, l),
          m(l, t),
          m(t, s),
          m(l, r),
          I(n, l, null),
          m(e, i),
          m(e, a),
          m(a, c),
          (f = !0);
      },
      p(u, d) {
        (!f || d & 1) && ue(s, u[0]), (!f || d & 2) && ue(c, u[1]);
      },
      i(u) {
        f || (p(n.$$.fragment, u), (f = !0));
      },
      o(u) {
        $(n.$$.fragment, u), (f = !1);
      },
      d(u) {
        u && h(e), j(n);
      },
    }
  );
}
function Pe(o) {
  let e,
    l,
    t = o[4],
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = De(Se(o, t, n));
  const r = (n) =>
    $(s[n], 1, 1, () => {
      s[n] = null;
    });
  return {
    c() {
      e = v("div");
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = k(n, "DIV", { class: !0 });
      var i = _(e);
      for (let a = 0; a < s.length; a += 1) s[a].l(i);
      i.forEach(h), this.h();
    },
    h() {
      g(e, "class", "tags svelte-1w50j5m");
    },
    m(n, i) {
      w(n, e, i);
      for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(e, null);
      l = !0;
    },
    p(n, i) {
      if (i & 16) {
        t = n[4];
        let a;
        for (a = 0; a < t.length; a += 1) {
          const c = Se(n, t, a);
          s[a]
            ? (s[a].p(c, i), p(s[a], 1))
            : ((s[a] = De(c)), s[a].c(), p(s[a], 1), s[a].m(e, null));
        }
        for (ee(), a = t.length; a < s.length; a += 1) r(a);
        te();
      }
    },
    i(n) {
      if (!l) {
        for (let i = 0; i < t.length; i += 1) p(s[i]);
        l = !0;
      }
    },
    o(n) {
      s = s.filter(Boolean);
      for (let i = 0; i < s.length; i += 1) $(s[i]);
      l = !1;
    },
    d(n) {
      n && h(e), _e(s, n);
    },
  };
}
function Bt(o) {
  let e = o[5].label + "",
    l;
  return {
    c() {
      l = P(e);
    },
    l(t) {
      l = D(t, e);
    },
    m(t, s) {
      w(t, l, s);
    },
    p(t, s) {
      s & 16 && e !== (e = t[5].label + "") && ue(l, e);
    },
    d(t) {
      t && h(l);
    },
  };
}
function De(o) {
  let e, l;
  return (
    (e = new Je({
      props: {
        color: o[5].color,
        $$slots: { default: [Bt] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, s) {
        const r = {};
        s & 16 && (r.color = t[5].color),
          s & 272 && (r.$$scope = { dirty: s, ctx: t }),
          e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Mt(o) {
  let e,
    l,
    t = o[4] && o[4].length > 0 && Pe(o);
  return {
    c() {
      (e = v("div")), t && t.c(), this.h();
    },
    l(s) {
      e = k(s, "DIV", { class: !0, slot: !0 });
      var r = _(e);
      t && t.l(r), r.forEach(h), this.h();
    },
    h() {
      g(e, "class", "footer svelte-1w50j5m"), g(e, "slot", "footer");
    },
    m(s, r) {
      w(s, e, r), t && t.m(e, null), (l = !0);
    },
    p(s, r) {
      s[4] && s[4].length > 0
        ? t
          ? (t.p(s, r), r & 16 && p(t, 1))
          : ((t = Pe(s)), t.c(), p(t, 1), t.m(e, null))
        : t &&
          (ee(),
          $(t, 1, 1, () => {
            t = null;
          }),
          te());
    },
    i(s) {
      l || (p(t), (l = !0));
    },
    o(s) {
      $(t), (l = !1);
    },
    d(s) {
      s && h(e), t && t.d();
    },
  };
}
function Ht(o) {
  let e, l;
  return (
    (e = new Ge({
      props: {
        additionalClass: "project-card",
        href: o[2],
        $$slots: { footer: [Mt], content: [zt], image: [Vt] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, [s]) {
        const r = {};
        s & 4 && (r.href = t[2]),
          s & 283 && (r.$$scope = { dirty: s, ctx: t }),
          e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Tt(o, e, l) {
  let { name: t } = e,
    { description: s } = e,
    { link: r } = e,
    { image: n } = e,
    { tags: i } = e;
  return (
    (o.$$set = (a) => {
      "name" in a && l(0, (t = a.name)),
        "description" in a && l(1, (s = a.description)),
        "link" in a && l(2, (r = a.link)),
        "image" in a && l(3, (n = a.image)),
        "tags" in a && l(4, (i = a.tags));
    }),
    [t, s, r, n, i]
  );
}
class Rt extends T {
  constructor(e) {
    super(),
      R(this, e, Tt, Ht, A, {
        name: 0,
        description: 1,
        link: 2,
        image: 3,
        tags: 4,
      });
  }
}
function At(o) {
  let e;
  return {
    c() {
      (e = v("div")), this.h();
    },
    l(l) {
      (e = k(l, "DIV", { id: !0, class: !0 })), _(e).forEach(h), this.h();
    },
    h() {
      g(e, "id", "particles-js"), g(e, "class", "svelte-257e0z");
    },
    m(l, t) {
      w(l, e, t);
    },
    p: q,
    i: q,
    o: q,
    d(l) {
      l && h(e);
    },
  };
}
function Te() {
  typeof particlesJS < "u"
    ? particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: !0, value_area: 800 } },
          color: { value: ["#03dac6", "#ff0266", "#bda3a2", "#007888"] },
          shape: {
            type: "triangle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
          },
          size: {
            value: 10,
            random: !0,
            anim: { enable: !1, speed: 5, size_min: 0.1, sync: !1 },
          },
          line_linked: {
            enable: !1,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 4,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !0, mode: "repulse" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 100 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      })
    : setTimeout(Te, 100);
}
function Nt(o) {
  return (
    pe(() => {
      Te();
    }),
    []
  );
}
class Ot extends T {
  constructor(e) {
    super(), R(this, e, Nt, At, A, {});
  }
}
function Ce(o, e, l) {
  const t = o.slice();
  return (t[1] = e[l]), t;
}
function Ve(o) {
  let e, l;
  return (
    (e = new Rt({
      props: {
        name: o[1].name,
        description: o[1].description,
        link: o[1].link,
        image: o[1].image,
        tags: o[1].tags,
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, s) {
        const r = {};
        s & 1 && (r.name = t[1].name),
          s & 1 && (r.description = t[1].description),
          s & 1 && (r.link = t[1].link),
          s & 1 && (r.image = t[1].image),
          s & 1 && (r.tags = t[1].tags),
          e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function qt(o) {
  let e, l, t, s, r;
  e = new Ot({});
  let n = o[0],
    i = [];
  for (let c = 0; c < n.length; c += 1) i[c] = Ve(Ce(o, n, c));
  const a = (c) =>
    $(i[c], 1, 1, () => {
      i[c] = null;
    });
  return {
    c() {
      y(e.$$.fragment), (l = z()), (t = v("div")), (s = v("div"));
      for (let c = 0; c < i.length; c += 1) i[c].c();
      this.h();
    },
    l(c) {
      E(e.$$.fragment, c), (l = B(c)), (t = k(c, "DIV", { class: !0 }));
      var f = _(t);
      s = k(f, "DIV", { class: !0 });
      var u = _(s);
      for (let d = 0; d < i.length; d += 1) i[d].l(u);
      u.forEach(h), f.forEach(h), this.h();
    },
    h() {
      g(s, "class", "two-group-grid svelte-1ixyf5e"),
        g(t, "class", "projects-container svelte-1ixyf5e");
    },
    m(c, f) {
      I(e, c, f), w(c, l, f), w(c, t, f), m(t, s);
      for (let u = 0; u < i.length; u += 1) i[u] && i[u].m(s, null);
      r = !0;
    },
    p(c, f) {
      if (f & 1) {
        n = c[0];
        let u;
        for (u = 0; u < n.length; u += 1) {
          const d = Ce(c, n, u);
          i[u]
            ? (i[u].p(d, f), p(i[u], 1))
            : ((i[u] = Ve(d)), i[u].c(), p(i[u], 1), i[u].m(s, null));
        }
        for (ee(), u = n.length; u < i.length; u += 1) a(u);
        te();
      }
    },
    i(c) {
      if (!r) {
        p(e.$$.fragment, c);
        for (let f = 0; f < n.length; f += 1) p(i[f]);
        r = !0;
      }
    },
    o(c) {
      $(e.$$.fragment, c), (i = i.filter(Boolean));
      for (let f = 0; f < i.length; f += 1) $(i[f]);
      r = !1;
    },
    d(c) {
      j(e, c), c && h(l), c && h(t), _e(i, c);
    },
  };
}
function Ft(o) {
  let e, l;
  return (
    (e = new Me({
      props: {
        id: "projects",
        title: "<span style='color: #ff723f'>code</span>://work",
        description: "Here is some of my past work",
        $$slots: { default: [qt] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p(t, [s]) {
        const r = {};
        s & 17 && (r.$$scope = { dirty: s, ctx: t }), e.$set(r);
      },
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Gt(o, e, l) {
  let { projects: t } = e;
  return (
    (o.$$set = (s) => {
      "projects" in s && l(0, (t = s.projects));
    }),
    [t]
  );
}
class Jt extends T {
  constructor(e) {
    super(), R(this, e, Gt, Ft, A, { projects: 0 });
  }
}
function Xt(o) {
  let e, l;
  return (
    (e = new Pt({ props: { posts: o[1] } })),
    {
      c() {
        y(e.$$.fragment);
      },
      l(t) {
        E(e.$$.fragment, t);
      },
      m(t, s) {
        I(e, t, s), (l = !0);
      },
      p: q,
      i(t) {
        l || (p(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Wt(o) {
  let e, l, t, s, r, n, i, a;
  (l = new _t({})),
    (s = new wt({})),
    (n = new Jt({ props: { projects: o[0] } }));
  let c = o[1] && o[1].length > 0 && Xt(o);
  return {
    c() {
      (e = v("div")),
        y(l.$$.fragment),
        (t = z()),
        y(s.$$.fragment),
        (r = z()),
        y(n.$$.fragment),
        (i = z()),
        c && c.c(),
        this.h();
    },
    l(f) {
      e = k(f, "DIV", { class: !0 });
      var u = _(e);
      E(l.$$.fragment, u),
        (t = B(u)),
        E(s.$$.fragment, u),
        (r = B(u)),
        E(n.$$.fragment, u),
        (i = B(u)),
        c && c.l(u),
        u.forEach(h),
        this.h();
    },
    h() {
      g(e, "class", "container");
    },
    m(f, u) {
      w(f, e, u),
        I(l, e, null),
        m(e, t),
        I(s, e, null),
        m(e, r),
        I(n, e, null),
        m(e, i),
        c && c.m(e, null),
        (a = !0);
    },
    p(f, [u]) {
      f[1] && f[1].length > 0 && c.p(f, u);
    },
    i(f) {
      a ||
        (p(l.$$.fragment, f),
        p(s.$$.fragment, f),
        p(n.$$.fragment, f),
        p(c),
        (a = !0));
    },
    o(f) {
      $(l.$$.fragment, f),
        $(s.$$.fragment, f),
        $(n.$$.fragment, f),
        $(c),
        (a = !1);
    },
    d(f) {
      f && h(e), j(l), j(s), j(n), c && c.d();
    },
  };
}
function Yt(o, e, l) {
  let { data: t } = e,
    { projects: s, posts: r } = t;
  return (
    (o.$$set = (n) => {
      "data" in n && l(2, (t = n.data));
    }),
    [s, r, t]
  );
}
class xt extends T {
  constructor(e) {
    super(), R(this, e, Yt, Wt, A, { data: 2 });
  }
}
export { xt as component };
