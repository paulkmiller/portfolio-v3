import {
  S as R,
  i as j,
  s as F,
  k as d,
  q as B,
  a as v,
  y as O,
  l as m,
  m as _,
  r as S,
  h as c,
  c as u,
  z as P,
  n as I,
  b as H,
  G as n,
  A as z,
  g as A,
  d as C,
  B as G,
} from "../chunks/index.c7992fe2.js";
import { B as J } from "../chunks/Button.6162fbd1.js";
import { E as K } from "../chunks/error.b7fe2859.js";
function L($) {
  let t;
  return {
    c() {
      t = B("Start over");
    },
    l(e) {
      t = S(e, "Start over");
    },
    m(e, o) {
      H(e, t, o);
    },
    d(e) {
      e && c(t);
    },
  };
}
function M($) {
  let t, e, o, g, x, p, l, b, f, w, y, E, q, r, h;
  return (
    (l = new K({})),
    (r = new J({
      props: { href: "/", $$slots: { default: [L] }, $$scope: { ctx: $ } },
    })),
    {
      c() {
        (t = d("div")),
          (e = d("div")),
          (o = d("h1")),
          (g = B("Oh no! 404!")),
          (x = v()),
          (p = d("div")),
          O(l.$$.fragment),
          (b = v()),
          (f = d("p")),
          (w =
            B(`It seems like coffee was spilled all over this page, and now it can't be
      displayed.`)),
          (y = v()),
          (E = d("br")),
          (q = v()),
          O(r.$$.fragment),
          this.h();
      },
      l(a) {
        t = m(a, "DIV", { class: !0 });
        var i = _(t);
        e = m(i, "DIV", { class: !0 });
        var s = _(e);
        o = m(s, "H1", {});
        var k = _(o);
        (g = S(k, "Oh no! 404!")),
          k.forEach(c),
          (x = u(s)),
          (p = m(s, "DIV", { class: !0 }));
        var D = _(p);
        P(l.$$.fragment, D), D.forEach(c), (b = u(s)), (f = m(s, "P", {}));
        var V = _(f);
        (w = S(
          V,
          `It seems like coffee was spilled all over this page, and now it can't be
      displayed.`
        )),
          V.forEach(c),
          (y = u(s)),
          (E = m(s, "BR", {})),
          (q = u(s)),
          P(r.$$.fragment, s),
          s.forEach(c),
          i.forEach(c),
          this.h();
      },
      h() {
        I(p, "class", "svg-wrapper svelte-gnq28x"),
          I(e, "class", "container svelte-gnq28x"),
          I(t, "class", "error-page svelte-gnq28x");
      },
      m(a, i) {
        H(a, t, i),
          n(t, e),
          n(e, o),
          n(o, g),
          n(e, x),
          n(e, p),
          z(l, p, null),
          n(e, b),
          n(e, f),
          n(f, w),
          n(e, y),
          n(e, E),
          n(e, q),
          z(r, e, null),
          (h = !0);
      },
      p(a, [i]) {
        const s = {};
        i & 1 && (s.$$scope = { dirty: i, ctx: a }), r.$set(s);
      },
      i(a) {
        h || (A(l.$$.fragment, a), A(r.$$.fragment, a), (h = !0));
      },
      o(a) {
        C(l.$$.fragment, a), C(r.$$.fragment, a), (h = !1);
      },
      d(a) {
        a && c(t), G(l), G(r);
      },
    }
  );
}
class U extends R {
  constructor(t) {
    super(), j(this, t, null, M, F, {});
  }
}
export { U as component };
