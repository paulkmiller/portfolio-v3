import {
  S as G,
  i as q,
  s as E,
  k as o,
  a as N,
  q as S,
  l as w,
  m as k,
  c as C,
  r as F,
  h as v,
  n,
  N as I,
  O as y,
  p as _,
  b as M,
  G as m,
  u as O,
  M as b,
} from "./index.c7992fe2.js";
function z(a) {
  let l, e, r, u, h, g;
  return {
    c() {
      (l = o("figure")),
        (e = o("img")),
        (u = N()),
        (h = o("figcaption")),
        (g = S(a[1])),
        this.h();
    },
    l(s) {
      l = w(s, "FIGURE", { class: !0 });
      var i = k(l);
      (e = w(i, "IMG", {
        srcset: !0,
        src: !0,
        alt: !0,
        loading: !0,
        decoding: !0,
        class: !0,
      })),
        (u = C(i)),
        (h = w(i, "FIGCAPTION", { class: !0 }));
      var c = k(h);
      (g = F(c, a[1])), c.forEach(v), i.forEach(v), this.h();
    },
    h() {
      n(e, "srcset", a[5]()),
        I(e.src, (r = a[0])) || n(e, "src", r),
        n(e, "alt", a[1]),
        n(e, "loading", "lazy"),
        n(e, "decoding", "async"),
        n(e, "class", "svelte-kkiy50"),
        y(e, "full-bleed", a[2]),
        _(e, "width", a[3]),
        _(e, "height", a[4]),
        n(h, "class", "svelte-kkiy50"),
        n(l, "class", "svelte-kkiy50");
    },
    m(s, i) {
      M(s, l, i), m(l, e), m(l, u), m(l, h), m(h, g);
    },
    p(s, [i]) {
      i & 1 && !I(e.src, (r = s[0])) && n(e, "src", r),
        i & 2 && n(e, "alt", s[1]),
        i & 4 && y(e, "full-bleed", s[2]),
        i & 8 && _(e, "width", s[3]),
        i & 16 && _(e, "height", s[4]),
        i & 2 && O(g, s[1]);
    },
    i: b,
    o: b,
    d(s) {
      s && v(l);
    },
  };
}
function A(a, l, e) {
  let r,
    { src: u } = l,
    { alt: h } = l,
    { fullBleed: g = void 0 } = l,
    { width: s = void 0 } = l,
    { height: i = void 0 } = l,
    { formats: c = ["avif", "webp", "png"] } = l,
    { widths: d = void 0 } = l;
  function B() {
    let t = "";
    if (d)
      for (let f = 0; f < d.length; f++)
        (t += `${r}-${d[f]}.${c[0]} ${d[f]}w`), f < d.length - 1 && (t += ", ");
    else
      for (let f = 0; f < c.length; f++)
        (t += `${r}.${c[f]}`), f < c.length - 1 && (t += ", ");
    return t;
  }
  return (
    (a.$$set = (t) => {
      "src" in t && e(0, (u = t.src)),
        "alt" in t && e(1, (h = t.alt)),
        "fullBleed" in t && e(2, (g = t.fullBleed)),
        "width" in t && e(3, (s = t.width)),
        "height" in t && e(4, (i = t.height)),
        "formats" in t && e(6, (c = t.formats)),
        "widths" in t && e(7, (d = t.widths));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && (r = u.split(".")[0]);
    }),
    [u, h, g, s, i, B, c, d]
  );
}
class R extends G {
  constructor(l) {
    super(),
      q(this, l, A, z, E, {
        src: 0,
        alt: 1,
        fullBleed: 2,
        width: 3,
        height: 4,
        formats: 6,
        widths: 7,
      });
  }
}
export { R as I };
