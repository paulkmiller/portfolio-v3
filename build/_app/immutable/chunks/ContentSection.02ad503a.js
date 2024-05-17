import {
  S as A,
  i as F,
  s as L,
  C as H,
  k as p,
  l as I,
  m as E,
  h as d,
  n as v,
  b as C,
  D as B,
  E as S,
  F as q,
  g,
  d as k,
  e as K,
  Y as Q,
  Z as de,
  _ as R,
  $ as he,
  a as V,
  c as T,
  a0 as W,
  O as X,
  G as D,
  v as w,
  f as P,
  a1 as me,
  y as U,
  z as Y,
  A as Z,
  B as j,
  q as N,
  r as M,
  u as O,
  H as ge,
} from "./index.c7992fe2.js";
import { H as ve } from "./regex.7dfa9b23.js";
import { I as be } from "./Image.f2f50b72.js";
function ke(a) {
  let e, i, t;
  const l = a[2].default,
    s = H(l, a, a[1], null);
  return {
    c() {
      (e = p("div")), s && s.c(), this.h();
    },
    l(n) {
      e = I(n, "DIV", { class: !0 });
      var f = E(e);
      s && s.l(f), f.forEach(d), this.h();
    },
    h() {
      v(e, "class", (i = "tag " + a[0] + " svelte-1xh8qlg"));
    },
    m(n, f) {
      C(n, e, f), s && s.m(e, null), (t = !0);
    },
    p(n, [f]) {
      s &&
        s.p &&
        (!t || f & 2) &&
        B(s, l, n, n[1], t ? q(l, n[1], f, null) : S(n[1]), null),
        (!t || (f & 1 && i !== (i = "tag " + n[0] + " svelte-1xh8qlg"))) &&
          v(e, "class", i);
    },
    i(n) {
      t || (g(s, n), (t = !0));
    },
    o(n) {
      k(s, n), (t = !1);
    },
    d(n) {
      n && d(e), s && s.d(n);
    },
  };
}
function pe(a, e, i) {
  let { $$slots: t = {}, $$scope: l } = e,
    { color: s = "primary" } = e;
  return (
    (a.$$set = (n) => {
      "color" in n && i(0, (s = n.color)),
        "$$scope" in n && i(1, (l = n.$$scope));
    }),
    [s, l, t]
  );
}
class Ie extends A {
  constructor(e) {
    super(), F(this, e, pe, ke, L, { color: 0 });
  }
}
const Ee = (a) => ({}),
  y = (a) => ({}),
  Ce = (a) => ({}),
  $ = (a) => ({}),
  De = (a) => ({}),
  x = (a) => ({});
function ee(a) {
  let e, i;
  const t = a[9].image,
    l = H(t, a, a[8], x);
  return {
    c() {
      (e = p("div")), l && l.c(), this.h();
    },
    l(s) {
      e = I(s, "DIV", { class: !0 });
      var n = E(e);
      l && l.l(n), n.forEach(d), this.h();
    },
    h() {
      v(e, "class", "image svelte-1h3ghvu");
    },
    m(s, n) {
      C(s, e, n), l && l.m(e, null), (i = !0);
    },
    p(s, n) {
      l &&
        l.p &&
        (!i || n & 256) &&
        B(l, t, s, s[8], i ? q(t, s[8], n, De) : S(s[8]), x);
    },
    i(s) {
      i || (g(l, s), (i = !0));
    },
    o(s) {
      k(l, s), (i = !1);
    },
    d(s) {
      s && d(e), l && l.d(s);
    },
  };
}
function te(a) {
  let e, i;
  const t = a[9].footer,
    l = H(t, a, a[8], y);
  return {
    c() {
      (e = p("div")), l && l.c(), this.h();
    },
    l(s) {
      e = I(s, "DIV", { class: !0 });
      var n = E(e);
      l && l.l(n), n.forEach(d), this.h();
    },
    h() {
      v(e, "class", "footer");
    },
    m(s, n) {
      C(s, e, n), l && l.m(e, null), (i = !0);
    },
    p(s, n) {
      l &&
        l.p &&
        (!i || n & 256) &&
        B(l, t, s, s[8], i ? q(t, s[8], n, Ee) : S(s[8]), y);
    },
    i(s) {
      i || (g(l, s), (i = !0));
    },
    o(s) {
      k(l, s), (i = !1);
    },
    d(s) {
      s && d(e), l && l.d(s);
    },
  };
}
function G(a) {
  let e,
    i,
    t,
    l,
    s,
    n,
    f,
    o = a[4].image && ee(a);
  const c = a[9].content,
    r = H(c, a, a[8], $);
  let u = a[4].footer && te(a),
    h = [
      { class: (n = "card " + a[0]) },
      a[1],
      { "data-sveltekit-preload-data": "" },
      a[3],
    ],
    b = {};
  for (let _ = 0; _ < h.length; _ += 1) b = R(b, h[_]);
  return {
    c() {
      (e = p(a[2])),
        o && o.c(),
        (i = V()),
        (t = p("div")),
        (l = p("div")),
        r && r.c(),
        (s = V()),
        u && u.c(),
        this.h();
    },
    l(_) {
      e = I(_, (a[2] || "null").toUpperCase(), {
        class: !0,
        "data-sveltekit-preload-data": !0,
      });
      var m = E(e);
      o && o.l(m), (i = T(m)), (t = I(m, "DIV", { class: !0 }));
      var z = E(t);
      l = I(z, "DIV", { class: !0 });
      var J = E(l);
      r && r.l(J),
        J.forEach(d),
        (s = T(z)),
        u && u.l(z),
        z.forEach(d),
        m.forEach(d),
        this.h();
    },
    h() {
      v(l, "class", "content svelte-1h3ghvu"),
        v(t, "class", "body svelte-1h3ghvu"),
        W(a[2])(e, b),
        X(e, "svelte-1h3ghvu", !0);
    },
    m(_, m) {
      C(_, e, m),
        o && o.m(e, null),
        D(e, i),
        D(e, t),
        D(t, l),
        r && r.m(l, null),
        D(t, s),
        u && u.m(t, null),
        (f = !0);
    },
    p(_, m) {
      _[4].image
        ? o
          ? (o.p(_, m), m & 16 && g(o, 1))
          : ((o = ee(_)), o.c(), g(o, 1), o.m(e, i))
        : o &&
          (w(),
          k(o, 1, 1, () => {
            o = null;
          }),
          P()),
        r &&
          r.p &&
          (!f || m & 256) &&
          B(r, c, _, _[8], f ? q(c, _[8], m, Ce) : S(_[8]), $),
        _[4].footer
          ? u
            ? (u.p(_, m), m & 16 && g(u, 1))
            : ((u = te(_)), u.c(), g(u, 1), u.m(t, null))
          : u &&
            (w(),
            k(u, 1, 1, () => {
              u = null;
            }),
            P()),
        W(_[2])(
          e,
          (b = me(h, [
            (!f || (m & 1 && n !== (n = "card " + _[0]))) && { class: n },
            m & 2 && _[1],
            { "data-sveltekit-preload-data": "" },
            m & 8 && _[3],
          ]))
        ),
        X(e, "svelte-1h3ghvu", !0);
    },
    i(_) {
      f || (g(o), g(r, _), g(u), (f = !0));
    },
    o(_) {
      k(o), k(r, _), k(u), (f = !1);
    },
    d(_) {
      _ && d(e), o && o.d(), r && r.d(_), u && u.d();
    },
  };
}
function Ve(a) {
  let e = a[2],
    i,
    t,
    l = a[2] && G(a);
  return {
    c() {
      l && l.c(), (i = K());
    },
    l(s) {
      l && l.l(s), (i = K());
    },
    m(s, n) {
      l && l.m(s, n), C(s, i, n), (t = !0);
    },
    p(s, [n]) {
      s[2]
        ? e
          ? L(e, s[2])
            ? (l.d(1), (l = G(s)), (e = s[2]), l.c(), l.m(i.parentNode, i))
            : l.p(s, n)
          : ((l = G(s)), (e = s[2]), l.c(), l.m(i.parentNode, i))
        : e && (l.d(1), (l = null), (e = s[2]));
    },
    i(s) {
      t || (g(l), (t = !0));
    },
    o(s) {
      k(l), (t = !1);
    },
    d(s) {
      s && d(i), l && l.d(s);
    },
  };
}
function Te(a, e, i) {
  let t, l;
  const s = ["additionalClass", "href", "target", "rel"];
  let n = Q(e, s),
    { $$slots: f = {}, $$scope: o } = e;
  const c = de(f);
  let { additionalClass: r = void 0 } = e,
    { href: u = void 0 } = e;
  const h = !!u && ve.test(u);
  let { target: b = h ? "_blank" : "_self" } = e,
    { rel: _ = h ? "noopener noreferrer" : void 0 } = e;
  return (
    (a.$$set = (m) => {
      (e = R(R({}, e), he(m))),
        i(3, (n = Q(e, s))),
        "additionalClass" in m && i(0, (r = m.additionalClass)),
        "href" in m && i(5, (u = m.href)),
        "target" in m && i(6, (b = m.target)),
        "rel" in m && i(7, (_ = m.rel)),
        "$$scope" in m && i(8, (o = m.$$scope));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 32 && i(2, (t = u ? "a" : "article")),
        a.$$.dirty & 224 && i(1, (l = { href: u, target: b, rel: _ }));
    }),
    [r, l, t, n, c, u, b, _, o, f]
  );
}
class we extends A {
  constructor(e) {
    super(),
      F(this, e, Te, Ve, L, { additionalClass: 0, href: 5, target: 6, rel: 7 });
  }
}
function le(a, e, i) {
  const t = a.slice();
  return (t[7] = e[i]), t;
}
function se(a) {
  let e, i;
  return (
    (e = new be({
      props: { src: a[1], alt: "Cover image of this blog post" },
    })),
    {
      c() {
        U(e.$$.fragment);
      },
      l(t) {
        Y(e.$$.fragment, t);
      },
      m(t, l) {
        Z(e, t, l), (i = !0);
      },
      p(t, l) {
        const s = {};
        l & 2 && (s.src = t[1]), e.$set(s);
      },
      i(t) {
        i || (g(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        k(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Pe(a) {
  let e,
    i,
    t = a[1] && se(a);
  return {
    c() {
      (e = p("div")), t && t.c(), this.h();
    },
    l(l) {
      e = I(l, "DIV", { class: !0, slot: !0 });
      var s = E(e);
      t && t.l(s), s.forEach(d), this.h();
    },
    h() {
      v(e, "class", "image"), v(e, "slot", "image");
    },
    m(l, s) {
      C(l, e, s), t && t.m(e, null), (i = !0);
    },
    p(l, s) {
      l[1]
        ? t
          ? (t.p(l, s), s & 2 && g(t, 1))
          : ((t = se(l)), t.c(), g(t, 1), t.m(e, null))
        : t &&
          (w(),
          k(t, 1, 1, () => {
            t = null;
          }),
          P());
    },
    i(l) {
      i || (g(t), (i = !0));
    },
    o(l) {
      k(t), (i = !1);
    },
    d(l) {
      l && d(e), t && t.d();
    },
  };
}
function ie(a) {
  let e, i;
  return {
    c() {
      (e = p("div")), (i = N(a[5])), this.h();
    },
    l(t) {
      e = I(t, "DIV", { class: !0 });
      var l = E(e);
      (i = M(l, a[5])), l.forEach(d), this.h();
    },
    h() {
      v(e, "class", "note svelte-1v62nxu");
    },
    m(t, l) {
      C(t, e, l), D(e, i);
    },
    p(t, l) {
      l & 32 && O(i, t[5]);
    },
    d(t) {
      t && d(e);
    },
  };
}
function ne(a) {
  let e, i;
  return {
    c() {
      (e = p("p")), (i = N(a[2])), this.h();
    },
    l(t) {
      e = I(t, "P", { class: !0 });
      var l = E(e);
      (i = M(l, a[2])), l.forEach(d), this.h();
    },
    h() {
      v(e, "class", "text svelte-1v62nxu");
    },
    m(t, l) {
      C(t, e, l), D(e, i);
    },
    p(t, l) {
      l & 4 && O(i, t[2]);
    },
    d(t) {
      t && d(e);
    },
  };
}
function He(a) {
  let e,
    i,
    t,
    l,
    s,
    n = a[5] && ie(a),
    f = a[2] && ne(a);
  return {
    c() {
      (e = p("div")),
        (i = p("p")),
        (t = N(a[0])),
        (l = V()),
        n && n.c(),
        (s = V()),
        f && f.c(),
        this.h();
    },
    l(o) {
      e = I(o, "DIV", { class: !0, slot: !0 });
      var c = E(e);
      i = I(c, "P", { class: !0 });
      var r = E(i);
      (t = M(r, a[0])),
        r.forEach(d),
        (l = T(c)),
        n && n.l(c),
        (s = T(c)),
        f && f.l(c),
        c.forEach(d),
        this.h();
    },
    h() {
      v(i, "class", "title svelte-1v62nxu"),
        v(e, "class", "content svelte-1v62nxu"),
        v(e, "slot", "content");
    },
    m(o, c) {
      C(o, e, c),
        D(e, i),
        D(i, t),
        D(e, l),
        n && n.m(e, null),
        D(e, s),
        f && f.m(e, null);
    },
    p(o, c) {
      c & 1 && O(t, o[0]),
        o[5]
          ? n
            ? n.p(o, c)
            : ((n = ie(o)), n.c(), n.m(e, s))
          : n && (n.d(1), (n = null)),
        o[2]
          ? f
            ? f.p(o, c)
            : ((f = ne(o)), f.c(), f.m(e, null))
          : f && (f.d(1), (f = null));
    },
    d(o) {
      o && d(e), n && n.d(), f && f.d();
    },
  };
}
function ae(a) {
  let e,
    i,
    t = a[4].slice(0, 2),
    l = [];
  for (let n = 0; n < t.length; n += 1) l[n] = oe(le(a, t, n));
  const s = (n) =>
    k(l[n], 1, 1, () => {
      l[n] = null;
    });
  return {
    c() {
      e = p("div");
      for (let n = 0; n < l.length; n += 1) l[n].c();
      this.h();
    },
    l(n) {
      e = I(n, "DIV", { class: !0 });
      var f = E(e);
      for (let o = 0; o < l.length; o += 1) l[o].l(f);
      f.forEach(d), this.h();
    },
    h() {
      v(e, "class", "tags svelte-1v62nxu");
    },
    m(n, f) {
      C(n, e, f);
      for (let o = 0; o < l.length; o += 1) l[o] && l[o].m(e, null);
      i = !0;
    },
    p(n, f) {
      if (f & 16) {
        t = n[4].slice(0, 2);
        let o;
        for (o = 0; o < t.length; o += 1) {
          const c = le(n, t, o);
          l[o]
            ? (l[o].p(c, f), g(l[o], 1))
            : ((l[o] = oe(c)), l[o].c(), g(l[o], 1), l[o].m(e, null));
        }
        for (w(), o = t.length; o < l.length; o += 1) s(o);
        P();
      }
    },
    i(n) {
      if (!i) {
        for (let f = 0; f < t.length; f += 1) g(l[f]);
        i = !0;
      }
    },
    o(n) {
      l = l.filter(Boolean);
      for (let f = 0; f < l.length; f += 1) k(l[f]);
      i = !1;
    },
    d(n) {
      n && d(e), ge(l, n);
    },
  };
}
function Be(a) {
  let e = a[7] + "",
    i;
  return {
    c() {
      i = N(e);
    },
    l(t) {
      i = M(t, e);
    },
    m(t, l) {
      C(t, i, l);
    },
    p(t, l) {
      l & 16 && e !== (e = t[7] + "") && O(i, e);
    },
    d(t) {
      t && d(i);
    },
  };
}
function oe(a) {
  let e, i;
  return (
    (e = new Ie({
      props: { $$slots: { default: [Be] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        U(e.$$.fragment);
      },
      l(t) {
        Y(e.$$.fragment, t);
      },
      m(t, l) {
        Z(e, t, l), (i = !0);
      },
      p(t, l) {
        const s = {};
        l & 1040 && (s.$$scope = { dirty: l, ctx: t }), e.$set(s);
      },
      i(t) {
        i || (g(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        k(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Se(a) {
  var l;
  let e,
    i,
    t = ((l = a[4]) == null ? void 0 : l.length) && ae(a);
  return {
    c() {
      (e = p("div")), t && t.c(), this.h();
    },
    l(s) {
      e = I(s, "DIV", { class: !0, slot: !0 });
      var n = E(e);
      t && t.l(n), n.forEach(d), this.h();
    },
    h() {
      v(e, "class", "footer svelte-1v62nxu"), v(e, "slot", "footer");
    },
    m(s, n) {
      C(s, e, n), t && t.m(e, null), (i = !0);
    },
    p(s, n) {
      var f;
      (f = s[4]) != null && f.length
        ? t
          ? (t.p(s, n), n & 16 && g(t, 1))
          : ((t = ae(s)), t.c(), g(t, 1), t.m(e, null))
        : t &&
          (w(),
          k(t, 1, 1, () => {
            t = null;
          }),
          P());
    },
    i(s) {
      i || (g(t), (i = !0));
    },
    o(s) {
      k(t), (i = !1);
    },
    d(s) {
      s && d(e), t && t.d();
    },
  };
}
function qe(a) {
  let e, i;
  return (
    (e = new we({
      props: {
        href: "/" + a[3],
        target: "_self",
        additionalClass: "blog-post-card " + (!a[6] || !a[1] ? "no-image" : ""),
        $$slots: { footer: [Se], content: [He], image: [Pe] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        U(e.$$.fragment);
      },
      l(t) {
        Y(e.$$.fragment, t);
      },
      m(t, l) {
        Z(e, t, l), (i = !0);
      },
      p(t, [l]) {
        const s = {};
        l & 8 && (s.href = "/" + t[3]),
          l & 66 &&
            (s.additionalClass =
              "blog-post-card " + (!t[6] || !t[1] ? "no-image" : "")),
          l & 1079 && (s.$$scope = { dirty: l, ctx: t }),
          e.$set(s);
      },
      i(t) {
        i || (g(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        k(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        j(e, t);
      },
    }
  );
}
function Le(a, e, i) {
  let { title: t } = e,
    { coverImage: l = void 0 } = e,
    { excerpt: s } = e,
    { slug: n } = e,
    { tags: f } = e,
    { readingTime: o = void 0 } = e,
    { showImage: c = !0 } = e;
  return (
    (a.$$set = (r) => {
      "title" in r && i(0, (t = r.title)),
        "coverImage" in r && i(1, (l = r.coverImage)),
        "excerpt" in r && i(2, (s = r.excerpt)),
        "slug" in r && i(3, (n = r.slug)),
        "tags" in r && i(4, (f = r.tags)),
        "readingTime" in r && i(5, (o = r.readingTime)),
        "showImage" in r && i(6, (c = r.showImage));
    }),
    [t, l, s, n, f, o, c]
  );
}
class Ge extends A {
  constructor(e) {
    super(),
      F(this, e, Le, qe, L, {
        title: 0,
        coverImage: 1,
        excerpt: 2,
        slug: 3,
        tags: 4,
        readingTime: 5,
        showImage: 6,
      });
  }
}
const Ne = (a) => ({}),
  fe = (a) => ({});
function re(a) {
  let e,
    i,
    t = a[1] && ce(a),
    l = a[2] && ue(a);
  return {
    c() {
      (e = p("div")), t && t.c(), (i = V()), l && l.c(), this.h();
    },
    l(s) {
      e = I(s, "DIV", { class: !0 });
      var n = E(e);
      t && t.l(n), (i = T(n)), l && l.l(n), n.forEach(d), this.h();
    },
    h() {
      v(e, "class", "text svelte-1snaw8w");
    },
    m(s, n) {
      C(s, e, n), t && t.m(e, null), D(e, i), l && l.m(e, null);
    },
    p(s, n) {
      s[1]
        ? t
          ? t.p(s, n)
          : ((t = ce(s)), t.c(), t.m(e, i))
        : t && (t.d(1), (t = null)),
        s[2]
          ? l
            ? l.p(s, n)
            : ((l = ue(s)), l.c(), l.m(e, null))
          : l && (l.d(1), (l = null));
    },
    d(s) {
      s && d(e), t && t.d(), l && l.d();
    },
  };
}
function ce(a) {
  let e;
  return {
    c() {
      e = p("h2");
    },
    l(i) {
      e = I(i, "H2", {});
      var t = E(e);
      t.forEach(d);
    },
    m(i, t) {
      C(i, e, t), (e.innerHTML = a[1]);
    },
    p(i, t) {
      t & 2 && (e.innerHTML = i[1]);
    },
    d(i) {
      i && d(e);
    },
  };
}
function ue(a) {
  let e, i;
  return {
    c() {
      (e = p("p")), (i = N(a[2]));
    },
    l(t) {
      e = I(t, "P", {});
      var l = E(e);
      (i = M(l, a[2])), l.forEach(d);
    },
    m(t, l) {
      C(t, e, l), D(e, i);
    },
    p(t, l) {
      l & 4 && O(i, t[2]);
    },
    d(t) {
      t && d(e);
    },
  };
}
function _e(a) {
  let e, i;
  const t = a[6].button,
    l = H(t, a, a[5], fe);
  return {
    c() {
      (e = p("div")), l && l.c(), this.h();
    },
    l(s) {
      e = I(s, "DIV", { class: !0 });
      var n = E(e);
      l && l.l(n), n.forEach(d), this.h();
    },
    h() {
      v(e, "class", "button");
    },
    m(s, n) {
      C(s, e, n), l && l.m(e, null), (i = !0);
    },
    p(s, n) {
      l &&
        l.p &&
        (!i || n & 32) &&
        B(l, t, s, s[5], i ? q(t, s[5], n, Ne) : S(s[5]), fe);
    },
    i(s) {
      i || (g(l, s), (i = !0));
    },
    o(s) {
      k(l, s), (i = !1);
    },
    d(s) {
      s && d(e), l && l.d(s);
    },
  };
}
function Me(a) {
  let e,
    i,
    t,
    l,
    s,
    n,
    f,
    o = (a[1] || a[2]) && re(a),
    c = a[4].button && _e(a);
  const r = a[6].default,
    u = H(r, a, a[5], null);
  return {
    c() {
      (e = p("section")),
        (i = p("div")),
        o && o.c(),
        (t = V()),
        c && c.c(),
        (l = V()),
        (s = p("div")),
        u && u.c(),
        this.h();
    },
    l(h) {
      e = I(h, "SECTION", { id: !0, class: !0 });
      var b = E(e);
      i = I(b, "DIV", { class: !0 });
      var _ = E(i);
      o && o.l(_),
        (t = T(_)),
        c && c.l(_),
        _.forEach(d),
        (l = T(b)),
        (s = I(b, "DIV", { class: !0 }));
      var m = E(s);
      u && u.l(m), m.forEach(d), b.forEach(d), this.h();
    },
    h() {
      v(i, "class", "title-area svelte-1snaw8w"),
        v(s, "class", "content-area svelte-1snaw8w"),
        v(e, "id", a[0]),
        v(e, "class", (n = "content-section " + a[3] + " svelte-1snaw8w"));
    },
    m(h, b) {
      C(h, e, b),
        D(e, i),
        o && o.m(i, null),
        D(i, t),
        c && c.m(i, null),
        D(e, l),
        D(e, s),
        u && u.m(s, null),
        (f = !0);
    },
    p(h, [b]) {
      h[1] || h[2]
        ? o
          ? o.p(h, b)
          : ((o = re(h)), o.c(), o.m(i, t))
        : o && (o.d(1), (o = null)),
        h[4].button
          ? c
            ? (c.p(h, b), b & 16 && g(c, 1))
            : ((c = _e(h)), c.c(), g(c, 1), c.m(i, null))
          : c &&
            (w(),
            k(c, 1, 1, () => {
              c = null;
            }),
            P()),
        u &&
          u.p &&
          (!f || b & 32) &&
          B(u, r, h, h[5], f ? q(r, h[5], b, null) : S(h[5]), null),
        (!f || b & 1) && v(e, "id", h[0]),
        (!f ||
          (b & 8 &&
            n !== (n = "content-section " + h[3] + " svelte-1snaw8w"))) &&
          v(e, "class", n);
    },
    i(h) {
      f || (g(c), g(u, h), (f = !0));
    },
    o(h) {
      k(c), k(u, h), (f = !1);
    },
    d(h) {
      h && d(e), o && o.d(), c && c.d(), u && u.d(h);
    },
  };
}
function Oe(a, e, i) {
  let { $$slots: t = {}, $$scope: l } = e;
  const s = de(t);
  let { id: n = void 0 } = e,
    { title: f = void 0 } = e,
    { description: o = void 0 } = e,
    { align: c = "top" } = e;
  return (
    (a.$$set = (r) => {
      "id" in r && i(0, (n = r.id)),
        "title" in r && i(1, (f = r.title)),
        "description" in r && i(2, (o = r.description)),
        "align" in r && i(3, (c = r.align)),
        "$$scope" in r && i(5, (l = r.$$scope));
    }),
    [n, f, o, c, s, l, t]
  );
}
class Re extends A {
  constructor(e) {
    super(),
      F(this, e, Oe, Me, L, { id: 0, title: 1, description: 2, align: 3 });
  }
}
export { Ge as B, Re as C, Ie as T, we as a };
