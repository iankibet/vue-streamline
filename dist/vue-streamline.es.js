import { inject as me } from "vue";
function Fe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: et } = Object.prototype, { getPrototypeOf: ue } = Object, v = /* @__PURE__ */ ((e) => (t) => {
  const n = et.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), C = (e) => (e = e.toLowerCase(), (t) => v(t) === e), W = (e) => (t) => typeof t === e, { isArray: U } = Array, q = W("undefined");
function tt(e) {
  return e !== null && !q(e) && e.constructor !== null && !q(e.constructor) && T(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _e = C("ArrayBuffer");
function nt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _e(e.buffer), t;
}
const rt = W("string"), T = W("function"), Le = W("number"), K = (e) => e !== null && typeof e == "object", st = (e) => e === !0 || e === !1, z = (e) => {
  if (v(e) !== "object")
    return !1;
  const t = ue(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ot = C("Date"), it = C("File"), at = C("Blob"), ct = C("FileList"), ut = (e) => K(e) && T(e.pipe), lt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || T(e.append) && ((t = v(e)) === "formdata" || // detect form-data instance
  t === "object" && T(e.toString) && e.toString() === "[object FormData]"));
}, ft = C("URLSearchParams"), [dt, pt, ht, mt] = ["ReadableStream", "Request", "Response", "Headers"].map(C), yt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function H(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), U(e))
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
    z(t[o]) && z(r) ? t[o] = ne(t[o], r) : z(r) ? t[o] = ne({}, r) : U(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && H(arguments[r], n);
  return t;
}
const wt = (e, t, n, { allOwnKeys: r } = {}) => (H(t, (s, o) => {
  n && T(s) ? e[o] = Fe(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), bt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Et = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Rt = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && ue(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, St = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, gt = (e) => {
  if (!e) return null;
  if (U(e)) return e;
  let t = e.length;
  if (!Le(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ot = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ue(Uint8Array)), Tt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, At = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, xt = C("HTMLFormElement"), Ct = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), ye = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Nt = C("RegExp"), Ue = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  H(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Pt = (e) => {
  Ue(e, (t, n) => {
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
}, Ft = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return U(e) ? r(e) : r(String(e).split(t)), n;
}, _t = () => {
}, Lt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Z = "abcdefghijklmnopqrstuvwxyz", we = "0123456789", ke = {
  DIGIT: we,
  ALPHA: Z,
  ALPHA_DIGIT: Z + Z.toUpperCase() + we
}, Dt = (e = 16, t = ke.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Bt(e) {
  return !!(e && T(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ut = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (K(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = U(r) ? [] : {};
        return H(r, (i, c) => {
          const f = n(i, s + 1);
          !q(f) && (o[c] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, kt = C("AsyncFunction"), jt = (e) => e && (K(e) || T(e)) && T(e.then) && T(e.catch), je = ((e, t) => e ? setImmediate : t ? ((n, r) => (L.addEventListener("message", ({ source: s, data: o }) => {
  s === L && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), L.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  T(L.postMessage)
), qt = typeof queueMicrotask < "u" ? queueMicrotask.bind(L) : typeof process < "u" && process.nextTick || je, a = {
  isArray: U,
  isArrayBuffer: _e,
  isBuffer: tt,
  isFormData: lt,
  isArrayBufferView: nt,
  isString: rt,
  isNumber: Le,
  isBoolean: st,
  isObject: K,
  isPlainObject: z,
  isReadableStream: dt,
  isRequest: pt,
  isResponse: ht,
  isHeaders: mt,
  isUndefined: q,
  isDate: ot,
  isFile: it,
  isBlob: at,
  isRegExp: Nt,
  isFunction: T,
  isStream: ut,
  isURLSearchParams: ft,
  isTypedArray: Ot,
  isFileList: ct,
  forEach: H,
  merge: ne,
  extend: wt,
  trim: yt,
  stripBOM: bt,
  inherits: Et,
  toFlatObject: Rt,
  kindOf: v,
  kindOfTest: C,
  endsWith: St,
  toArray: gt,
  forEachEntry: Tt,
  matchAll: At,
  isHTMLForm: xt,
  hasOwnProperty: ye,
  hasOwnProp: ye,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ue,
  freezeMethods: Pt,
  toObjectSet: Ft,
  toCamelCase: Ct,
  noop: _t,
  toFiniteNumber: Lt,
  findKey: De,
  global: L,
  isContextDefined: Be,
  ALPHABET: ke,
  generateString: Dt,
  isSpecCompliantForm: Bt,
  toJSONObject: Ut,
  isAsyncFn: kt,
  isThenable: jt,
  setImmediate: je,
  asap: qt
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
const qe = m.prototype, He = {};
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
Object.defineProperty(qe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(qe);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Ht = null;
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
function It(e) {
  return a.isArray(e) && !e.some(re);
}
const Mt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function G(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, d) {
    return !a.isUndefined(d[y]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (!f && a.isBlob(h))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? f && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, y, d) {
    let S = h;
    if (h && !d && typeof h == "object") {
      if (a.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && It(h) || (a.isFileList(h) || a.endsWith(y, "[]")) && (S = a.toArray(h)))
        return y = Ie(y), S.forEach(function(w, A) {
          !(a.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? be([y], A, o) : i === null ? y : y + "[]",
            u(w)
          );
        }), !1;
    }
    return re(h) ? !0 : (t.append(be(d, y, o), u(h)), !1);
  }
  const p = [], b = Object.assign(Mt, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: re
  });
  function E(h, y) {
    if (!a.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      p.push(h), a.forEach(h, function(S, O) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(O) ? O.trim() : O,
          y,
          b
        )) === !0 && E(S, y ? y.concat(O) : [O]);
      }), p.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function Ee(e) {
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
function le(e, t) {
  this._pairs = [], e && G(e, this, t);
}
const Me = le.prototype;
Me.append = function(t, n) {
  this._pairs.push([t, n]);
};
Me.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ee);
  } : Ee;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ze(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || zt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new le(t, n).toString(r), o) {
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
}, Jt = typeof URLSearchParams < "u" ? URLSearchParams : le, Vt = typeof FormData < "u" ? FormData : null, $t = typeof Blob < "u" ? Blob : null, vt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jt,
    FormData: Vt,
    Blob: $t
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fe = typeof window < "u" && typeof document < "u", Wt = ((e) => fe && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Kt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gt = fe && window.location.href || "http://localhost", Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fe,
  hasStandardBrowserEnv: Wt,
  hasStandardBrowserWebWorkerEnv: Kt,
  origin: Gt
}, Symbol.toStringTag, { value: "Module" })), x = {
  ...Xt,
  ...vt
};
function Qt(e, t) {
  return G(e, new x.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return x.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Zt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Yt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ve(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Yt(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Zt(r), s, n, 0);
    }), n;
  }
  return null;
}
function en(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const I = {
  transitional: Je,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Ve(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qt(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return G(
          c ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), en(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || I.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  I.headers[e] = {};
});
const tn = a.toObjectSet([
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
]), nn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && tn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Se = Symbol("internals");
function j(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(J) : String(e);
}
function rn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const sn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function on(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function an(e, t) {
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
class g {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, u) {
      const l = j(f);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, l);
      (!p || s[p] === void 0 || u === !0 || u === void 0 && s[p] !== !1) && (s[p || f] = J(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => o(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !sn(t))
      i(nn(t), n);
    else if (a.isHeaders(t))
      for (const [c, f] of t.entries())
        o(f, c, r);
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
          return rn(s);
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
        n[i] = J(s), delete n[o];
        return;
      }
      const c = t ? on(o) : String(o).trim();
      c !== o && delete n[o], n[c] = J(s), r[c] = !0;
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
      r[c] || (an(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
g.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(g.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(g);
function ee(e, t) {
  const n = this || I, r = t || n, s = g.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function $e(e) {
  return !!(e && e.__CANCEL__);
}
function k(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(k, m, {
  __CANCEL__: !0
});
function ve(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function cn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function un(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), l = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let p = o, b = 0;
    for (; p !== s; )
      b += n[p++], p = p % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const E = l && u - l;
    return E ? Math.round(b * 1e3 / E) : void 0;
  };
}
function ln(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, l = Date.now()) => {
    n = l, s = null, o && (clearTimeout(o), o = null), e.apply(null, u);
  };
  return [(...u) => {
    const l = Date.now(), p = l - n;
    p >= r ? i(u, l) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - p)));
  }, () => s && i(s)];
}
const V = (e, t, n = 3) => {
  let r = 0;
  const s = un(50, 250);
  return ln((o) => {
    const i = o.loaded, c = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), l = i <= c;
    r = i;
    const p = {
      loaded: i,
      total: c,
      progress: c ? i / c : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && c && l ? (c - i) / u : void 0,
      event: o,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(p);
  }, n);
}, ge = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Oe = (e) => (...t) => a.asap(() => e(...t)), fn = x.hasStandardBrowserEnv ? (
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
), dn = x.hasStandardBrowserEnv ? (
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
function pn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function We(e, t) {
  return e && !pn(t) ? hn(e, t) : t;
}
const Te = (e) => e instanceof g ? { ...e } : e;
function B(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, p) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: p }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, p) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, p);
    } else return r(u, l, p);
  }
  function o(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, p) {
    if (p in t)
      return r(u, l);
    if (p in e)
      return r(void 0, u);
  }
  const f = {
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
    headers: (u, l) => s(Te(u), Te(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const p = f[l] || s, b = p(e[l], t[l], l);
    a.isUndefined(b) && p !== c || (n[l] = b);
  }), n;
}
const Ke = (e) => {
  const t = B({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: c } = t;
  t.headers = i = g.from(i), t.url = ze(We(t.baseURL, t.url), e.params, e.paramsSerializer), c && i.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (x.hasStandardBrowserEnv || x.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...l] = f ? f.split(";").map((p) => p.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...l].join("; "));
    }
  }
  if (x.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && fn(t.url))) {
    const u = s && o && dn.read(o);
    u && i.set(s, u);
  }
  return t;
}, mn = typeof XMLHttpRequest < "u", yn = mn && function(e) {
  return new Promise(function(n, r) {
    const s = Ke(e);
    let o = s.data;
    const i = g.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s, l, p, b, E, h;
    function y() {
      E && E(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let d = new XMLHttpRequest();
    d.open(s.method.toUpperCase(), s.url, !0), d.timeout = s.timeout;
    function S() {
      if (!d)
        return;
      const w = g.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), _ = {
        data: !c || c === "text" || c === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: w,
        config: e,
        request: d
      };
      ve(function(P) {
        n(P), y();
      }, function(P) {
        r(P), y();
      }, _), d = null;
    }
    "onloadend" in d ? d.onloadend = S : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, d.onabort = function() {
      d && (r(new m("Request aborted", m.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let A = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || Je;
      s.timeoutErrorMessage && (A = s.timeoutErrorMessage), r(new m(
        A,
        _.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        d
      )), d = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in d && a.forEach(i.toJSON(), function(A, _) {
      d.setRequestHeader(_, A);
    }), a.isUndefined(s.withCredentials) || (d.withCredentials = !!s.withCredentials), c && c !== "json" && (d.responseType = s.responseType), u && ([b, h] = V(u, !0), d.addEventListener("progress", b)), f && d.upload && ([p, E] = V(f), d.upload.addEventListener("progress", p), d.upload.addEventListener("loadend", E)), (s.cancelToken || s.signal) && (l = (w) => {
      d && (r(!w || w.type ? new k(null, e, d) : w), d.abort(), d = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const O = cn(s.url);
    if (O && x.protocols.indexOf(O) === -1) {
      r(new m("Unsupported protocol " + O + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, wn = (e, t) => {
  let n = new AbortController(), r;
  const s = function(f) {
    if (!r) {
      r = !0, i();
      const u = f instanceof Error ? f : this.reason;
      n.abort(u instanceof m ? u : new k(u instanceof Error ? u.message : u));
    }
  };
  let o = t && setTimeout(() => {
    s(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
  }, t);
  const i = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((f) => {
      f && (f.removeEventListener ? f.removeEventListener("abort", s) : f.unsubscribe(s));
    }), e = null);
  };
  e.forEach((f) => f && f.addEventListener && f.addEventListener("abort", s));
  const { signal: c } = n;
  return c.unsubscribe = i, [c, () => {
    o && clearTimeout(o), o = null;
  }];
}, bn = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, En = async function* (e, t, n) {
  for await (const r of e)
    yield* bn(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Ae = (e, t, n, r, s) => {
  const o = En(e, t, s);
  let i = 0, c, f = (u) => {
    c || (c = !0, r && r(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: l, value: p } = await o.next();
        if (l) {
          f(), u.close();
          return;
        }
        let b = p.byteLength;
        if (n) {
          let E = i += b;
          n(E);
        }
        u.enqueue(new Uint8Array(p));
      } catch (l) {
        throw f(l), l;
      }
    },
    cancel(u) {
      return f(u), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, X = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ge = X && typeof ReadableStream == "function", se = X && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Xe = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Rn = Ge && Xe(() => {
  let e = !1;
  const t = new Request(x.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), xe = 64 * 1024, oe = Ge && Xe(() => a.isReadableStream(new Response("").body)), $ = {
  stream: oe && ((e) => e.body)
};
X && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !$[t] && ($[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new m(`Response type '${t}' is not supported`, m.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Sn = async (e) => {
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
}, gn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? Sn(t);
}, On = X && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: c,
    onUploadProgress: f,
    responseType: u,
    headers: l,
    withCredentials: p = "same-origin",
    fetchOptions: b
  } = Ke(e);
  u = u ? (u + "").toLowerCase() : "text";
  let [E, h] = s || o || i ? wn([s, o], i) : [], y, d;
  const S = () => {
    !y && setTimeout(() => {
      E && E.unsubscribe();
    }), y = !0;
  };
  let O;
  try {
    if (f && Rn && n !== "get" && n !== "head" && (O = await gn(l, r)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      if (a.isFormData(r) && (P = N.headers.get("content-type")) && l.setContentType(P), N.body) {
        const [Q, M] = ge(
          O,
          V(Oe(f))
        );
        r = Ae(N.body, xe, Q, M, se);
      }
    }
    a.isString(p) || (p = p ? "include" : "omit"), d = new Request(t, {
      ...b,
      signal: E,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: p
    });
    let w = await fetch(d);
    const A = oe && (u === "stream" || u === "response");
    if (oe && (c || A)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((he) => {
        N[he] = w[he];
      });
      const P = a.toFiniteNumber(w.headers.get("content-length")), [Q, M] = c && ge(
        P,
        V(Oe(c), !0)
      ) || [];
      w = new Response(
        Ae(w.body, xe, Q, () => {
          M && M(), A && S();
        }, se),
        N
      );
    }
    u = u || "text";
    let _ = await $[a.findKey($, u) || "text"](w, e);
    return !A && S(), h && h(), await new Promise((N, P) => {
      ve(N, P, {
        data: _,
        headers: g.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: d
      });
    });
  } catch (w) {
    throw S(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new m("Network Error", m.ERR_NETWORK, e, d),
      {
        cause: w.cause || w
      }
    ) : m.from(w, w && w.code, e, d);
  }
}), ie = {
  http: Ht,
  xhr: yn,
  fetch: On
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
const Ce = (e) => `- ${e}`, Tn = (e) => a.isFunction(e) || e === null || e === !1, Qe = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Tn(n) && (r = ie[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
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
  return te(e), e.headers = g.from(e.headers), e.data = ee.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Qe.getAdapter(e.adapter || I.adapter)(e).then(function(r) {
    return te(e), r.data = ee.call(
      e,
      e.transformResponse,
      r
    ), r.headers = g.from(r.headers), r;
  }, function(r) {
    return $e(r) || (te(e), r && r.response && (r.response.data = ee.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = g.from(r.response.headers))), Promise.reject(r);
  });
}
const Ze = "1.7.4", de = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  de[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Pe = {};
de.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Ze + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !Pe[i] && (Pe[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function An(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ae = {
  assertOptions: An,
  validators: de
}, F = ae.validators;
class D {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = B(this.defaults, n);
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
    ), n.headers = g.concat(i, o);
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (f = f && y.synchronous, c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l, p = 0, b;
    if (!f) {
      const h = [Ne.bind(this), void 0];
      for (h.unshift.apply(h, c), h.push.apply(h, u), b = h.length, l = Promise.resolve(n); p < b; )
        l = l.then(h[p++], h[p++]);
      return l;
    }
    b = c.length;
    let E = n;
    for (p = 0; p < b; ) {
      const h = c[p++], y = c[p++];
      try {
        E = h(E);
      } catch (d) {
        y.call(this, d);
        break;
      }
    }
    try {
      l = Ne.call(this, E);
    } catch (h) {
      return Promise.reject(h);
    }
    for (p = 0, b = u.length; p < b; )
      l = l.then(u[p++], u[p++]);
    return l;
  }
  getUri(t) {
    t = B(this.defaults, t);
    const n = We(t.baseURL, t.url);
    return ze(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  D.prototype[t] = function(n, r) {
    return this.request(B(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(B(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  D.prototype[t] = n(), D.prototype[t + "Form"] = n(!0);
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
function xn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Cn(e) {
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
function Ye(e) {
  const t = new D(e), n = Fe(D.prototype.request, t);
  return a.extend(n, D.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ye(B(e, s));
  }, n;
}
const R = Ye(I);
R.Axios = D;
R.CanceledError = k;
R.CancelToken = pe;
R.isCancel = $e;
R.VERSION = Ze;
R.toFormData = G;
R.AxiosError = m;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = xn;
R.isAxiosError = Cn;
R.mergeConfig = B;
R.AxiosHeaders = g;
R.formToJSON = (e) => Ve(a.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = Qe.getAdapter;
R.HttpStatusCode = ce;
R.default = R;
const Pn = (e) => {
  let t = {};
  const n = me("streamlineUrl"), r = me("streamlineHeaders"), s = new Proxy({}, {
    get(o, i) {
      return o[i] ? o[i] : (...c) => {
        if (["setFormData", "setData"].includes(i))
          return t = c[0], s;
        const u = {
          headers: {
            ...r
          }
        }, l = R.create({
          headers: {
            ...u.headers
          }
        });
        return window.streamlineAxios = l, l.post(n, {
          action: i,
          stream: e,
          ...t,
          params: {
            ...c
          }
        });
      };
    }
  });
  return {
    service: s
  };
}, Fn = {
  install(e, t) {
    e.provide("streamlineUrl", t.streamlineUrl), e.provide("streamlineHeaders", t.streamlineHeaders);
  }
};
export {
  Fn as streamLine,
  Pn as useStreamline
};
