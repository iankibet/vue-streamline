import { ref as me, inject as ye, reactive as tt, onMounted as nt, toRefs as rt } from "vue";
function _e(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: st } = Object.prototype, { getPrototypeOf: le } = Object, V = /* @__PURE__ */ ((e) => (t) => {
  const n = st.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), P = (e) => (e = e.toLowerCase(), (t) => V(t) === e), W = (e) => (t) => typeof t === e, { isArray: B } = Array, q = W("undefined");
function ot(e) {
  return e !== null && !q(e) && e.constructor !== null && !q(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Le = P("ArrayBuffer");
function it(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Le(e.buffer), t;
}
const at = W("string"), T = W("function"), Ue = W("number"), K = (e) => e !== null && typeof e == "object", ct = (e) => e === !0 || e === !1, z = (e) => {
  if (V(e) !== "object")
    return !1;
  const t = le(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, lt = P("Date"), ut = P("File"), ft = P("Blob"), dt = P("FileList"), pt = (e) => K(e) && T(e.pipe), ht = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = V(e)) === "formdata" || // detect form-data instance
  t === "object" && T(e.toString) && e.toString() === "[object FormData]"));
}, mt = P("URLSearchParams"), [yt, wt, Et, bt] = ["ReadableStream", "Request", "Response", "Headers"].map(P), gt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function M(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), B(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function De(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const L = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Be = (e) => !q(e) && e !== L;
function ne() {
  const { caseless: e } = Be(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && De(t, s) || s;
    z(t[o]) && z(r) ? t[o] = ne(t[o], r) : z(r) ? t[o] = ne({}, r) : B(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && M(arguments[r], n);
  return t;
}
const Rt = (e, t, n, { allOwnKeys: r } = {}) => (M(t, (s, o) => {
  n && T(s) ? e[o] = _e(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), St = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ot = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Tt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && le(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, At = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, xt = (e) => {
  if (!e) return null;
  if (B(e)) return e;
  let t = e.length;
  if (!Ue(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Pt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && le(Uint8Array)), Ct = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Nt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ft = P("HTMLFormElement"), _t = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), we = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Lt = P("RegExp"), ke = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  M(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Ut = (e) => {
  ke(e, (t, n) => {
    if (T(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (T(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Dt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return B(e) ? r(e) : r(String(e).split(t)), n;
}, Bt = () => {
}, kt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Z = "abcdefghijklmnopqrstuvwxyz", Ee = "0123456789", je = {
  DIGIT: Ee,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + Ee
}, jt = (e = 16, t = je.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function qt(e) {
  return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Mt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = B(r) ? [] : {};
        return M(r, (i, c) => {
          const d = n(i, s + 1);
          !q(d) && (o[c] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ht = P("AsyncFunction"), It = (e) => e && (K(e) || T(e)) && T(e.then) && T(e.catch), qe = ((e, t) => e ? setImmediate : t ? ((n, r) => (L.addEventListener("message", ({ source: s, data: o }) => {
  s === L && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), L.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  T(L.postMessage)
), zt = typeof queueMicrotask < "u" ? queueMicrotask.bind(L) : typeof process < "u" && process.nextTick || qe, a = {
  isArray: B,
  isArrayBuffer: Le,
  isBuffer: ot,
  isFormData: ht,
  isArrayBufferView: it,
  isString: at,
  isNumber: Ue,
  isBoolean: ct,
  isObject: K,
  isPlainObject: z,
  isReadableStream: yt,
  isRequest: wt,
  isResponse: Et,
  isHeaders: bt,
  isUndefined: q,
  isDate: lt,
  isFile: ut,
  isBlob: ft,
  isRegExp: Lt,
  isFunction: T,
  isStream: pt,
  isURLSearchParams: mt,
  isTypedArray: Pt,
  isFileList: dt,
  forEach: M,
  merge: ne,
  extend: Rt,
  trim: gt,
  stripBOM: St,
  inherits: Ot,
  toFlatObject: Tt,
  kindOf: V,
  kindOfTest: P,
  endsWith: At,
  toArray: xt,
  forEachEntry: Ct,
  matchAll: Nt,
  isHTMLForm: Ft,
  hasOwnProperty: we,
  hasOwnProp: we,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ke,
  freezeMethods: Ut,
  toObjectSet: Dt,
  toCamelCase: _t,
  noop: Bt,
  toFiniteNumber: kt,
  findKey: De,
  global: L,
  isContextDefined: Be,
  ALPHABET: je,
  generateString: jt,
  isSpecCompliantForm: qt,
  toJSONObject: Mt,
  isAsyncFn: Ht,
  isThenable: It,
  setImmediate: qe,
  asap: zt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Me = m.prototype, He = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  He[e] = { value: e };
});
Object.defineProperties(m, He);
Object.defineProperty(Me, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Me);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const vt = null;
function re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ie(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function be(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ie(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Jt(e) {
  return a.isArray(e) && !e.some(re);
}
const $t = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function G(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, p) {
    return !a.isUndefined(p[y]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (!d && a.isBlob(h))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, y, p) {
    let S = h;
    if (h && !p && typeof h == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && Jt(h) || (a.isFileList(h) || a.endsWith(y, "[]")) && (S = a.toArray(h)))
        return y = Ie(y), S.forEach(function(w, A) {
          !(a.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? be([y], A, o) : i === null ? y : y + "[]",
            l(w)
          );
        }), !1;
    }
    return re(h) ? !0 : (t.append(be(p, y, o), l(h)), !1);
  }
  const f = [], E = Object.assign($t, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: re
  });
  function b(h, y) {
    if (!a.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      f.push(h), a.forEach(h, function(S, g) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(g) ? g.trim() : g,
          y,
          E
        )) === !0 && b(S, y ? y.concat(g) : [g]);
      }), f.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function ge(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ue(e, t) {
  this._pairs = [], e && G(e, this, t);
}
const ze = ue.prototype;
ze.append = function(t, n) {
  this._pairs.push([t, n]);
};
ze.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ge);
  } : ge;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Vt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ve(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Vt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ue(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Re {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Je = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wt = typeof URLSearchParams < "u" ? URLSearchParams : ue, Kt = typeof FormData < "u" ? FormData : null, Gt = typeof Blob < "u" ? Blob : null, Xt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wt,
    FormData: Kt,
    Blob: Gt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fe = typeof window < "u" && typeof document < "u", Qt = ((e) => fe && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Zt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yt = fe && window.location.href || "http://localhost", en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fe,
  hasStandardBrowserEnv: Qt,
  hasStandardBrowserWebWorkerEnv: Zt,
  origin: Yt
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...en,
  ...Xt
};
function tn(e, t) {
  return G(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function nn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function rn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function $e(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = rn(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(nn(r), s, n, 0);
    }), n;
  }
  return null;
}
function sn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const H = {
  transitional: Je,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify($e(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return tn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return G(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), sn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || H.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: x.classes.FormData,
    Blob: x.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  H.headers[e] = {};
});
const on = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), an = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && on[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Se = Symbol("internals");
function j(e) {
  return e && String(e).trim().toLowerCase();
}
function v(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(v) : String(e);
}
function cn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ln = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Y(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function un(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function fn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class O {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, d, l) {
      const u = j(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = a.findKey(s, u);
      (!f || s[f] === void 0 || l === !0 || l === void 0 && s[f] !== !1) && (s[f || d] = v(c));
    }
    const i = (c, d) => a.forEach(c, (l, u) => o(l, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !ln(t))
      i(an(t), n);
    else if (a.isHeaders(t))
      for (const [c, d] of t.entries())
        o(d, c, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = j(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return cn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = j(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Y(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = j(i), i) {
        const c = a.findKey(r, i);
        c && (!n || Y(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Y(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = v(s), delete n[o];
        return;
      }
      const c = t ? un(o) : String(o).trim();
      c !== o && delete n[o], n[c] = v(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Se] = this[Se] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = j(i);
      r[c] || (fn(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
O.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(O.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(O);
function ee(e, t) {
  const n = this || H, r = t || n, s = O.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ve(e) {
  return !!(e && e.__CANCEL__);
}
function k(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(k, m, {
  __CANCEL__: !0
});
function We(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function dn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function pn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const l = Date.now(), u = r[o];
    i || (i = l), n[s] = d, r[s] = l;
    let f = o, E = 0;
    for (; f !== s; )
      E += n[f++], f = f % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - i < t)
      return;
    const b = u && l - u;
    return b ? Math.round(E * 1e3 / b) : void 0;
  };
}
function hn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (l, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - n;
    f >= r ? i(l, u) : (s = l, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - f)));
  }, () => s && i(s)];
}
const J = (e, t, n = 3) => {
  let r = 0;
  const s = pn(50, 250);
  return hn((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, d = i - r, l = s(d), u = i <= c;
    r = i;
    const f = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: d,
      rate: l || void 0,
      estimated: l && c && u ? (c - i) / l : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Oe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Te = (e) => (...t) => a.asap(() => e(...t)), mn = x.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), yn = x.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function wn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function En(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ke(e, t) {
  return e && !wn(t) ? En(e, t) : t;
}
const Ae = (e) => e instanceof O ? { ...e } : e;
function D(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, f) {
    return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({ caseless: f }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(l, u, f) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l, f);
    } else return r(l, u, f);
  }
  function o(l, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, f) {
    if (f in t)
      return r(l, u);
    if (f in e)
      return r(void 0, l);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (l, u) => s(Ae(l), Ae(u), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = d[u] || s, E = f(e[u], t[u], u);
    a.isUndefined(E) && f !== c || (n[u] = E);
  }), n;
}
const Ge = (e) => {
  const t = D({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = O.from(i), t.url = ve(Ke(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(n)) {
    if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [l, ...u] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (x.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && mn(t.url))) {
    const l = s && o && yn.read(o);
    l && i.set(s, l);
  }
  return t;
}, bn = typeof XMLHttpRequest < "u", gn = bn && function(e) {
  return new Promise(function(n, r) {
    const s = Ge(e);
    let o = s.data;
    const i = O.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s, u, f, E, b, h;
    function y() {
      b && b(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function S() {
      if (!p)
        return;
      const w = O.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), _ = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: w,
        config: e,
        request: p
      };
      We(function(N) {
        n(N), y();
      }, function(N) {
        r(N), y();
      }, _), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (r(new m("Request aborted", m.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let A = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || Je;
      s.timeoutErrorMessage && (A = s.timeoutErrorMessage), r(new m(
        A,
        _.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        p
      )), p = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && a.forEach(i.toJSON(), function(A, _) {
      p.setRequestHeader(_, A);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), l && ([E, h] = J(l, !0), p.addEventListener("progress", E)), d && p.upload && ([f, b] = J(d), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", b)), (s.cancelToken || s.signal) && (u = (w) => {
      p && (r(!w || w.type ? new k(null, e, p) : w), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const g = dn(s.url);
    if (g && x.protocols.indexOf(g) === -1) {
      r(new m("Unsupported protocol " + g + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(o || null);
  });
}, Rn = (e, t) => {
  let n = new AbortController(), r;
  const s = function(d) {
    if (!r) {
      r = !0, i();
      const l = d instanceof Error ? d : this.reason;
      n.abort(l instanceof m ? l : new k(l instanceof Error ? l.message : l));
    }
  };
  let o = t && setTimeout(() => {
    s(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((d) => {
      d && (d.removeEventListener ? d.removeEventListener("abort", s) : d.unsubscribe(s));
    }), e = null);
  };
  e.forEach((d) => d && d.addEventListener && d.addEventListener("abort", s));
  const { signal: c } = n;
  return c.unsubscribe = i, [c, () => {
    o && clearTimeout(o), o = null;
  }];
}, Sn = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, On = async function* (e, t, n) {
  for await (const r of e)
    yield* Sn(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, xe = (e, t, n, r, s) => {
  const o = On(e, t, s);
  let i = 0, c, d = (l) => {
    c || (c = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: f } = await o.next();
        if (u) {
          d(), l.close();
          return;
        }
        let E = f.byteLength;
        if (n) {
          let b = i += E;
          n(b);
        }
        l.enqueue(new Uint8Array(f));
      } catch (u) {
        throw d(u), u;
      }
    },
    cancel(l) {
      return d(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, X = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Xe = X && typeof ReadableStream == "function", se = X && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Qe = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Tn = Xe && Qe(() => {
  let e = !1;
  const t = new Request(x.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Pe = 64 * 1024, oe = Xe && Qe(() => a.isReadableStream(new Response("").body)), $ = {
  stream: oe && ((e) => e.body)
};
X && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !$[t] && ($[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const An = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await se(e)).byteLength;
}, xn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? An(t);
}, Pn = X && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: l,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: E
  } = Ge(e);
  l = l ? (l + "").toLowerCase() : "text";
  let [b, h] = s || o || i ? Rn([s, o], i) : [], y, p;
  const S = () => {
    !y && setTimeout(() => {
      b && b.unsubscribe();
    }), y = !0;
  };
  let g;
  try {
    if (d && Tn && n !== "get" && n !== "head" && (g = await xn(u, r)) !== 0) {
      let C = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), N;
      if (a.isFormData(r) && (N = C.headers.get("content-type")) && u.setContentType(N), C.body) {
        const [Q, I] = Oe(
          g,
          J(Te(d))
        );
        r = xe(C.body, Pe, Q, I, se);
      }
    }
    a.isString(f) || (f = f ? "include" : "omit"), p = new Request(t, {
      ...E,
      signal: b,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: f
    });
    let w = await fetch(p);
    const A = oe && (l === "stream" || l === "response");
    if (oe && (c || A)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((he) => {
        C[he] = w[he];
      });
      const N = a.toFiniteNumber(w.headers.get("content-length")), [Q, I] = c && Oe(
        N,
        J(Te(c), !0)
      ) || [];
      w = new Response(
        xe(w.body, Pe, Q, () => {
          I && I(), A && S();
        }, se),
        C
      );
    }
    l = l || "text";
    let _ = await $[a.findKey($, l) || "text"](w, e);
    return !A && S(), h && h(), await new Promise((C, N) => {
      We(C, N, {
        data: _,
        headers: O.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: p
      });
    });
  } catch (w) {
    throw S(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, p),
      {
        cause: w.cause || w
      }
    ) : m.from(w, w && w.code, e, p);
  }
}), ie = {
  http: vt,
  xhr: gn,
  fetch: Pn
};
a.forEach(ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ce = (e) => `- ${e}`, Cn = (e) => a.isFunction(e) || e === null || e === !1, Ze = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Cn(n) && (r = ie[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Ce).join(`
`) : " " + Ce(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ie
};
function te(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new k(null, e);
}
function Ne(e) {
  return te(e), e.headers = O.from(e.headers), e.data = ee.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ze.getAdapter(e.adapter || H.adapter)(e).then(function(r) {
    return te(e), r.data = ee.call(
      e,
      e.transformResponse,
      r
    ), r.headers = O.from(r.headers), r;
  }, function(r) {
    return Ve(r) || (te(e), r && r.response && (r.response.data = ee.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = O.from(r.response.headers))), Promise.reject(r);
  });
}
const Ye = "1.7.4", de = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  de[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fe = {};
de.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ye + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Fe[i] && (Fe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function Nn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], d = c === void 0 || i(c, o, e);
      if (d !== !0)
        throw new m("option " + o + " must be " + d, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ae = {
  assertOptions: Nn,
  validators: de
}, F = ae.validators;
class U {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Re(),
      response: new Re()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = D(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && ae.assertOptions(r, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ae.assertOptions(s, {
      encode: F.function,
      serialize: F.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = O.concat(i, o);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (d = d && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u, f = 0, E;
    if (!d) {
      const h = [Ne.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, l), E = h.length, u = Promise.resolve(n); f < E; )
        u = u.then(h[f++], h[f++]);
      return u;
    }
    E = c.length;
    let b = n;
    for (f = 0; f < E; ) {
      const h = c[f++], y = c[f++];
      try {
        b = h(b);
      } catch (p) {
        y.call(this, p);
        break;
      }
    }
    try {
      u = Ne.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, E = l.length; f < E; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = D(this.defaults, t);
    const n = Ke(t.baseURL, t.url);
    return ve(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  U.prototype[t] = function(n, r) {
    return this.request(D(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(D(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  U.prototype[t] = n(), U.prototype[t + "Form"] = n(!0);
});
class pe {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new k(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new pe(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function Fn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function _n(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ce = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ce).forEach(([e, t]) => {
  ce[t] = e;
});
function et(e) {
  const t = new U(e), n = _e(U.prototype.request, t);
  return a.extend(n, U.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return et(D(e, s));
  }, n;
}
const R = et(H);
R.Axios = U;
R.CanceledError = k;
R.CancelToken = pe;
R.isCancel = Ve;
R.VERSION = Ye;
R.toFormData = G;
R.AxiosError = m;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = Fn;
R.isAxiosError = _n;
R.mergeConfig = D;
R.AxiosHeaders = O;
R.formToJSON = (e) => $e(a.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = Ze.getAdapter;
R.HttpStatusCode = ce;
R.default = R;
const Un = (e, ...t) => {
  let n = {};
  me(!1);
  const r = me(!1), s = ye("streamlineUrl"), o = ye("streamlineHeaders"), i = R.create({
    headers: {
      ...o
    }
  }), c = tt({
    initialized: !1
  }), d = async () => {
    try {
      r.value = !0;
      const f = await i.post(s, {
        action: "onMounted",
        stream: e,
        params: t
      });
      l(f.data), r.value = !1, setTimeout(() => {
        c.initialized = !0, r.value = !1;
      }, 300);
    } catch (f) {
      throw console.error(`Error fetching properties for stream ${e}`, f), f;
    } finally {
      r.value = !1, setTimeout(() => {
        c.initialized = !0, r.value = !1;
      }, 300);
    }
  }, l = (f) => {
    Object.assign(c, f.properties);
    const E = f.methods;
    for (const b of E)
      c[b] = async (...h) => {
        try {
          return (await i.post(s, {
            action: b,
            stream: e,
            ...n,
            params: h
          })).data;
        } catch (y) {
          throw console.error(`Error calling ${b} on stream ${e}`, y), y;
        }
      };
  }, u = new Proxy(c, {
    get(f, E) {
      return E in f ? f[E] : (...b) => {
        if (E === "initialize") {
          d();
          return;
        }
        if (["setFormData", "setData"].includes(E))
          return n = b[0], u;
        if (["getMethods", "getActions", "getFunctions", "getServiceMethods"].includes(E))
          return Object.keys(u).filter((g) => {
            if (typeof u[g] == "function")
              return g;
          });
        const p = {
          action: E,
          stream: e,
          ...n
        };
        if (["getUrl", "getFullUrl", "getActionUrl"].includes(E)) {
          p.action = b[0];
          const g = b.slice(1);
          return g.length > 0 && (p.params = g), s + "?" + new URLSearchParams(p).toString();
        }
        return p.params = b, i.post(s, p).then((g) => g.data).catch((g) => {
          throw console.error(`Error calling ${E} on stream ${e}`, g), g;
        });
      };
    }
  });
  return nt(() => {
    r.value = !0, setTimeout(() => {
      u.initialize();
    }, 1);
  }), {
    ...rt(c),
    // Spread the reactive service properties and return as refs for reactivity
    service: u,
    // Return the proxy service for method calls
    loading: r
  };
}, Dn = {
  install(e, t) {
    e.provide("streamlineUrl", t.streamlineUrl), e.provide("streamlineHeaders", t.streamlineHeaders);
  }
};
export {
  Dn as streamline,
  Un as useStreamline
};
