function j() {}
function nt(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function J(t) {
  return t();
}
function W() {
  return Object.create(null);
}
function $(t) {
  t.forEach(J);
}
function K(t) {
  return typeof t == "function";
}
function Nt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let S;
function St(t, e) {
  return S || (S = document.createElement("a")), (S.href = e), t === S.href;
}
function it(t) {
  return Object.keys(t).length === 0;
}
function rt(t, ...e) {
  if (t == null) return j;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function At(t, e, n) {
  t.$$.on_destroy.push(rt(e, n));
}
function jt(t, e, n, i) {
  if (t) {
    const r = Q(t, e, n, i);
    return t[0](r);
  }
}
function Q(t, e, n, i) {
  return t[1] && i ? nt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Mt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const u = [],
        s = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < s; o += 1) u[o] = e.dirty[o] | r[o];
      return u;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Ot(t, e, n, i, r, u) {
  if (r) {
    const s = Q(e, n, i, u);
    t.p(s, r);
  }
}
function Tt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function Ct(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Dt(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Lt(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function Pt(t) {
  return t ?? "";
}
let M = !1;
function st() {
  M = !0;
}
function ct() {
  M = !1;
}
function ot(t, e, n, i) {
  for (; t < e; ) {
    const r = t + ((e - t) >> 1);
    n(r) <= i ? (t = r + 1) : (e = r);
  }
  return t;
}
function lt(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const c = [];
    for (let l = 0; l < e.length; l++) {
      const a = e[l];
      a.claim_order !== void 0 && c.push(a);
    }
    e = c;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let c = 0; c < e.length; c++) {
    const l = e[c].claim_order,
      a =
        (r > 0 && e[n[r]].claim_order <= l
          ? r + 1
          : ot(1, r, (_) => e[n[_]].claim_order, l)) - 1;
    i[c] = n[a] + 1;
    const d = a + 1;
    (n[d] = c), (r = Math.max(d, r));
  }
  const u = [],
    s = [];
  let o = e.length - 1;
  for (let c = n[r] + 1; c != 0; c = i[c - 1]) {
    for (u.push(e[c - 1]); o >= c; o--) s.push(e[o]);
    o--;
  }
  for (; o >= 0; o--) s.push(e[o]);
  u.reverse(), s.sort((c, l) => c.claim_order - l.claim_order);
  for (let c = 0, l = 0; c < s.length; c++) {
    for (; l < u.length && s[c].claim_order >= u[l].claim_order; ) l++;
    const a = l < u.length ? u[l] : null;
    t.insertBefore(s[c], a);
  }
}
function ut(t, e) {
  if (M) {
    for (
      lt(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function qt(t, e, n) {
  M && !n
    ? ut(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function ft(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Bt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function at(t) {
  return document.createElement(t);
}
function _t(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function B(t) {
  return document.createTextNode(t);
}
function Ht() {
  return B(" ");
}
function zt() {
  return B("");
}
function Ft(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function U(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const dt = ["width", "height"];
function ht(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = e[i])
      : i === "__value"
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set && dt.indexOf(i) === -1
      ? (t[i] = e[i])
      : U(t, i, e[i]);
}
function mt(t, e) {
  Object.keys(e).forEach((n) => {
    pt(t, n, e[n]);
  });
}
function pt(t, e, n) {
  e in t ? (t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n) : U(t, e, n);
}
function Rt(t) {
  return /-/.test(t) ? mt : ht;
}
function Wt(t, e, n) {
  t.setAttributeNS("http://www.w3.org/1999/xlink", e, n);
}
function yt(t) {
  return Array.from(t.childNodes);
}
function gt(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function V(t, e, n, i, r = !1) {
  gt(t);
  const u = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const o = t[s];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          r || (t.claim_info.last_index = s),
          o
        );
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const o = t[s];
      if (e(o)) {
        const c = n(o);
        return (
          c === void 0 ? t.splice(s, 1) : (t[s] = c),
          r
            ? c === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = s),
          o
        );
      }
    }
    return i();
  })();
  return (
    (u.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    u
  );
}
function X(t, e, n, i) {
  return V(
    t,
    (r) => r.nodeName === e,
    (r) => {
      const u = [];
      for (let s = 0; s < r.attributes.length; s++) {
        const o = r.attributes[s];
        n[o.name] || u.push(o.name);
      }
      u.forEach((s) => r.removeAttribute(s));
    },
    () => i(e)
  );
}
function Gt(t, e, n) {
  return X(t, e, n, at);
}
function It(t, e, n) {
  return X(t, e, n, _t);
}
function xt(t, e) {
  return V(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => B(e),
    !0
  );
}
function Jt(t) {
  return xt(t, " ");
}
function Kt(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function Qt(t, e, n, i) {
  n == null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function Ut(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Vt(t, e) {
  const n = [];
  let i = 0;
  for (const r of e.childNodes)
    if (r.nodeType === 8) {
      const u = r.textContent.trim();
      u === `HEAD_${t}_END`
        ? ((i -= 1), n.push(r))
        : u === `HEAD_${t}_START` && ((i += 1), n.push(r));
    } else i > 0 && n.push(r);
  return n;
}
function Xt(t, e) {
  return new t(e);
}
let k;
function E(t) {
  k = t;
}
function H() {
  if (!k) throw new Error("Function called outside component initialization");
  return k;
}
function Yt(t) {
  H().$$.on_mount.push(t);
}
function Zt(t) {
  H().$$.after_update.push(t);
}
function te(t) {
  H().$$.on_destroy.push(t);
}
function ee(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const w = [],
  G = [];
let b = [];
const I = [],
  Y = Promise.resolve();
let P = !1;
function Z() {
  P || ((P = !0), Y.then(tt));
}
function ne() {
  return Z(), Y;
}
function q(t) {
  b.push(t);
}
const L = new Set();
let x = 0;
function tt() {
  if (x !== 0) return;
  const t = k;
  do {
    try {
      for (; x < w.length; ) {
        const e = w[x];
        x++, E(e), wt(e.$$);
      }
    } catch (e) {
      throw ((w.length = 0), (x = 0), e);
    }
    for (E(null), w.length = 0, x = 0; G.length; ) G.pop()();
    for (let e = 0; e < b.length; e += 1) {
      const n = b[e];
      L.has(n) || (L.add(n), n());
    }
    b.length = 0;
  } while (w.length);
  for (; I.length; ) I.pop()();
  (P = !1), L.clear(), E(t);
}
function wt(t) {
  if (t.fragment !== null) {
    t.update(), $(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(q);
  }
}
function bt(t) {
  const e = [],
    n = [];
  b.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (b = e);
}
const A = new Set();
let g;
function ie() {
  g = { r: 0, c: [], p: g };
}
function re() {
  g.r || $(g.c), (g = g.p);
}
function et(t, e) {
  t && t.i && (A.delete(t), t.i(e));
}
function $t(t, e, n, i) {
  if (t && t.o) {
    if (A.has(t)) return;
    A.add(t),
      g.c.push(() => {
        A.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
function se(t, e) {
  $t(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ce(t, e, n, i, r, u, s, o, c, l, a, d) {
  let _ = t.length,
    m = u.length,
    h = _;
  const O = {};
  for (; h--; ) O[t[h].key] = h;
  const v = [],
    T = new Map(),
    C = new Map(),
    z = [];
  for (h = m; h--; ) {
    const f = d(r, u, h),
      p = n(f);
    let y = s.get(p);
    y ? i && z.push(() => y.p(f, e)) : ((y = l(p, f)), y.c()),
      T.set(p, (v[h] = y)),
      p in O && C.set(p, Math.abs(h - O[p]));
  }
  const F = new Set(),
    R = new Set();
  function D(f) {
    et(f, 1), f.m(o, a), s.set(f.key, f), (a = f.first), m--;
  }
  for (; _ && m; ) {
    const f = v[m - 1],
      p = t[_ - 1],
      y = f.key,
      N = p.key;
    f === p
      ? ((a = f.first), _--, m--)
      : T.has(N)
      ? !s.has(y) || F.has(y)
        ? D(f)
        : R.has(N)
        ? _--
        : C.get(y) > C.get(N)
        ? (R.add(y), D(f))
        : (F.add(N), _--)
      : (c(p, s), _--);
  }
  for (; _--; ) {
    const f = t[_];
    T.has(f.key) || c(f, s);
  }
  for (; m; ) D(v[m - 1]);
  return $(z), v;
}
function oe(t, e) {
  const n = {},
    i = {},
    r = { $$scope: 1 };
  let u = t.length;
  for (; u--; ) {
    const s = t[u],
      o = e[u];
    if (o) {
      for (const c in s) c in o || (i[c] = 1);
      for (const c in o) r[c] || ((n[c] = o[c]), (r[c] = 1));
      t[u] = o;
    } else for (const c in s) r[c] = 1;
  }
  for (const s in i) s in n || (n[s] = void 0);
  return n;
}
function le(t) {
  t && t.c();
}
function ue(t, e) {
  t && t.l(e);
}
function Et(t, e, n, i) {
  const { fragment: r, after_update: u } = t.$$;
  r && r.m(e, n),
    i ||
      q(() => {
        const s = t.$$.on_mount.map(J).filter(K);
        t.$$.on_destroy ? t.$$.on_destroy.push(...s) : $(s),
          (t.$$.on_mount = []);
      }),
    u.forEach(q);
}
function kt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (bt(n.after_update),
    $(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function vt(t, e) {
  t.$$.dirty[0] === -1 && (w.push(t), Z(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function fe(t, e, n, i, r, u, s, o = [-1]) {
  const c = k;
  E(t);
  const l = (t.$$ = {
    fragment: null,
    ctx: [],
    props: u,
    update: j,
    not_equal: r,
    bound: W(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    callbacks: W(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root,
  });
  s && s(l.root);
  let a = !1;
  if (
    ((l.ctx = n
      ? n(t, e.props || {}, (d, _, ...m) => {
          const h = m.length ? m[0] : _;
          return (
            l.ctx &&
              r(l.ctx[d], (l.ctx[d] = h)) &&
              (!l.skip_bound && l.bound[d] && l.bound[d](h), a && vt(t, d)),
            _
          );
        })
      : []),
    l.update(),
    (a = !0),
    $(l.before_update),
    (l.fragment = i ? i(l.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      st();
      const d = yt(e.target);
      l.fragment && l.fragment.l(d), d.forEach(ft);
    } else l.fragment && l.fragment.c();
    e.intro && et(t.$$.fragment),
      Et(t, e.target, e.anchor, e.customElement),
      ct(),
      tt();
  }
  E(c);
}
class ae {
  $destroy() {
    kt(this, 1), (this.$destroy = j);
  }
  $on(e, n) {
    if (!K(n)) return j;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !it(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  Ct as $,
  Et as A,
  kt as B,
  jt as C,
  Ot as D,
  Tt as E,
  Mt as F,
  ut as G,
  Bt as H,
  Vt as I,
  _t as J,
  It as K,
  Wt as L,
  j as M,
  St as N,
  Ut as O,
  Ft as P,
  At as Q,
  $ as R,
  ae as S,
  ce as T,
  te as U,
  se as V,
  Pt as W,
  ee as X,
  Dt as Y,
  Lt as Z,
  nt as _,
  Ht as a,
  Rt as a0,
  oe as a1,
  qt as b,
  Jt as c,
  $t as d,
  zt as e,
  re as f,
  et as g,
  ft as h,
  fe as i,
  Zt as j,
  at as k,
  Gt as l,
  yt as m,
  U as n,
  Yt as o,
  Qt as p,
  B as q,
  xt as r,
  Nt as s,
  ne as t,
  Kt as u,
  ie as v,
  G as w,
  Xt as x,
  le as y,
  ue as z,
};
