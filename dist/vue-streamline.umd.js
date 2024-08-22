(function(L,F){typeof exports=="object"&&typeof module<"u"?F(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],F):(L=typeof globalThis<"u"?globalThis:L||self,F(L.VueStreamline={},L.Vue))})(this,function(L,F){"use strict";function ye(e,t){return function(){return e.apply(t,arguments)}}const{toString:tt}=Object.prototype,{getPrototypeOf:Y}=Object,$=(e=>t=>{const n=tt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>$(t)===e),J=e=>t=>typeof t===e,{isArray:k}=Array,M=J("undefined");function nt(e){return e!==null&&!M(e)&&e.constructor!==null&&!M(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const we=A("ArrayBuffer");function rt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&we(e.buffer),t}const st=J("string"),T=J("function"),be=J("number"),v=e=>e!==null&&typeof e=="object",ot=e=>e===!0||e===!1,V=e=>{if($(e)!=="object")return!1;const t=Y(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},it=A("Date"),at=A("File"),ct=A("Blob"),ut=A("FileList"),lt=e=>v(e)&&T(e.pipe),ft=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||T(e.append)&&((t=$(e))==="formdata"||t==="object"&&T(e.toString)&&e.toString()==="[object FormData]"))},dt=A("URLSearchParams"),[pt,ht,mt,yt]=["ReadableStream","Request","Response","Headers"].map(A),wt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const U=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Se=e=>!M(e)&&e!==U;function ee(){const{caseless:e}=Se(this)&&this||{},t={},n=(r,s)=>{const o=e&&Ee(t,s)||s;V(t[o])&&V(r)?t[o]=ee(t[o],r):V(r)?t[o]=ee({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const bt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&T(s)?e[o]=ye(s,n):e[o]=s},{allOwnKeys:r}),e),Et=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),St=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Y(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Rt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ot=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Tt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Y(Uint8Array)),At=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},xt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Pt=A("HTMLFormElement"),Ct=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Nt=A("RegExp"),Re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ft=e=>{Re(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},_t=()=>{},Ut=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,te="abcdefghijklmnopqrstuvwxyz",Oe="0123456789",Te={DIGIT:Oe,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+Oe},Dt=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Bt(e){return!!(e&&T(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jt=e=>{const t=new Array(10),n=(r,s)=>{if(v(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return H(r,(i,c)=>{const d=n(i,s+1);!M(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},kt=A("AsyncFunction"),qt=e=>e&&(v(e)||T(e))&&T(e.then)&&T(e.catch),Ae=((e,t)=>e?setImmediate:t?((n,r)=>(U.addEventListener("message",({source:s,data:o})=>{s===U&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),U.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",T(U.postMessage)),Mt=typeof queueMicrotask<"u"?queueMicrotask.bind(U):typeof process<"u"&&process.nextTick||Ae,a={isArray:k,isArrayBuffer:we,isBuffer:nt,isFormData:ft,isArrayBufferView:rt,isString:st,isNumber:be,isBoolean:ot,isObject:v,isPlainObject:V,isReadableStream:pt,isRequest:ht,isResponse:mt,isHeaders:yt,isUndefined:M,isDate:it,isFile:at,isBlob:ct,isRegExp:Nt,isFunction:T,isStream:lt,isURLSearchParams:dt,isTypedArray:Tt,isFileList:ut,forEach:H,merge:ee,extend:bt,trim:wt,stripBOM:Et,inherits:St,toFlatObject:gt,kindOf:$,kindOfTest:A,endsWith:Rt,toArray:Ot,forEachEntry:At,matchAll:xt,isHTMLForm:Pt,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Re,freezeMethods:Ft,toObjectSet:Lt,toCamelCase:Ct,noop:_t,toFiniteNumber:Ut,findKey:Ee,global:U,isContextDefined:Se,ALPHABET:Te,generateString:Dt,isSpecCompliantForm:Bt,toJSONObject:jt,isAsyncFn:kt,isThenable:qt,setImmediate:Ae,asap:Mt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xe=m.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}}),Object.defineProperties(m,Pe),Object.defineProperty(xe,"isAxiosError",{value:!0}),m.from=(e,t,n,r,s,o)=>{const i=Object.create(xe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ht=null;function ne(e){return a.isPlainObject(e)||a.isArray(e)}function Ce(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ne(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ce(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function It(e){return a.isArray(e)&&!e.some(ne)}const zt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!a.isUndefined(p[y])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function u(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!d&&a.isBlob(h))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?d&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,y,p){let R=h;if(h&&!p&&typeof h=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&It(h)||(a.isFileList(h)||a.endsWith(y,"[]"))&&(R=a.toArray(h)))return y=Ce(y),R.forEach(function(w,P){!(a.isUndefined(w)||w===null)&&t.append(i===!0?Ne([y],P,o):i===null?y:y+"[]",u(w))}),!1}return ne(h)?!0:(t.append(Ne(p,y,o),u(h)),!1)}const f=[],b=Object.assign(zt,{defaultVisitor:l,convertValue:u,isVisitable:ne});function E(h,y){if(!a.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(h),a.forEach(h,function(R,S){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(S)?S.trim():S,y,b))===!0&&E(R,y?y.concat(S):[S])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&W(e,this,t)}const Le=re.prototype;Le.append=function(t,n){this._pairs.push([t,n])},Le.toString=function(t){const n=t?function(r){return t.call(this,r,Fe)}:Fe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function $t(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||$t,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Ue{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jt={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:re,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},se=typeof window<"u"&&typeof document<"u",vt=(e=>se&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Vt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Wt=se&&window.location.href||"http://localhost",x={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:se,hasStandardBrowserEnv:vt,hasStandardBrowserWebWorkerEnv:Vt,origin:Wt},Symbol.toStringTag,{value:"Module"})),...Jt};function Kt(e,t){return W(e,new x.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return x.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Xt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Gt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Be(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Gt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Xt(r),s,n,0)}),n}return null}function Qt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const I={transitional:De,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return W(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Qt(t)):t}],transformResponse:[function(t){const n=this.transitional||I.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:x.classes.FormData,Blob:x.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{I.headers[e]={}});const Zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&Zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},je=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function K(e){return e===!1||e==null?e:a.isArray(e)?e.map(K):String(e)}function en(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const tn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oe(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function nn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class O{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,u){const l=z(d);if(!l)throw new Error("header name must be a non-empty string");const f=a.findKey(s,l);(!f||s[f]===void 0||u===!0||u===void 0&&s[f]!==!1)&&(s[f||d]=K(c))}const i=(c,d)=>a.forEach(c,(u,l)=>o(u,l,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!tn(t))i(Yt(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return en(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=z(i),i){const c=a.findKey(r,i);c&&(!n||oe(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||oe(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=K(s),delete n[o];return}const c=t?nn(o):String(o).trim();c!==o&&delete n[o],n[c]=K(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[je]=this[je]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=z(i);r[c]||(rn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}O.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),a.reduceDescriptors(O.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}}),a.freezeMethods(O);function ie(e,t){const n=this||I,r=t||n,s=O.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ke(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,m,{__CANCEL__:!0});function qe(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function on(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const u=Date.now(),l=r[o];i||(i=u),n[s]=d,r[s]=u;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),u-i<t)return;const E=l&&u-l;return E?Math.round(b*1e3/E):void 0}}function an(e,t){let n=0,r=1e3/t,s,o;const i=(u,l=Date.now())=>{n=l,s=null,o&&(clearTimeout(o),o=null),e.apply(null,u)};return[(...u)=>{const l=Date.now(),f=l-n;f>=r?i(u,l):(s=u,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const X=(e,t,n=3)=>{let r=0;const s=on(50,250);return an(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,u=s(d),l=i<=c;r=i;const f={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:u||void 0,estimated:u&&c&&l?(c-i)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(f)},n)},Me=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},He=e=>(...t)=>a.asap(()=>e(...t)),cn=x.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),un=x.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ln(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function fn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!ln(t)?fn(e,t):t}const ze=e=>e instanceof O?{...e}:e;function D(e,t){t=t||{};const n={};function r(u,l,f){return a.isPlainObject(u)&&a.isPlainObject(l)?a.merge.call({caseless:f},u,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(u,l,f){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u,f)}else return r(u,l,f)}function o(u,l){if(!a.isUndefined(l))return r(void 0,l)}function i(u,l){if(a.isUndefined(l)){if(!a.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function c(u,l,f){if(f in t)return r(u,l);if(f in e)return r(void 0,u)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(u,l)=>s(ze(u),ze(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const f=d[l]||s,b=f(e[l],t[l],l);a.isUndefined(b)&&f!==c||(n[l]=b)}),n}const $e=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=O.from(i),t.url=_e(Ie(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(x.hasStandardBrowserEnv||x.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[u,...l]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...l].join("; "))}}if(x.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&cn(t.url))){const u=s&&o&&un.read(o);u&&i.set(s,u)}return t},dn=typeof XMLHttpRequest<"u"&&function(e){return new Promise(function(n,r){const s=$e(e);let o=s.data;const i=O.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:u}=s,l,f,b,E,h;function y(){E&&E(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(l),s.signal&&s.signal.removeEventListener("abort",l)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function R(){if(!p)return;const w=O.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),j={data:!c||c==="text"||c==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:w,config:e,request:p};qe(function(N){n(N),y()},function(N){r(N),y()},j),p=null}"onloadend"in p?p.onloadend=R:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(R)},p.onabort=function(){p&&(r(new m("Request aborted",m.ECONNABORTED,e,p)),p=null)},p.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,p)),p=null},p.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const j=s.transitional||De;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new m(P,j.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,p)),p=null},o===void 0&&i.setContentType(null),"setRequestHeader"in p&&a.forEach(i.toJSON(),function(P,j){p.setRequestHeader(j,P)}),a.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),c&&c!=="json"&&(p.responseType=s.responseType),u&&([b,h]=X(u,!0),p.addEventListener("progress",b)),d&&p.upload&&([f,E]=X(d),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(l=w=>{p&&(r(!w||w.type?new q(null,e,p):w),p.abort(),p=null)},s.cancelToken&&s.cancelToken.subscribe(l),s.signal&&(s.signal.aborted?l():s.signal.addEventListener("abort",l)));const S=sn(s.url);if(S&&x.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}p.send(o||null)})},pn=(e,t)=>{let n=new AbortController,r;const s=function(d){if(!r){r=!0,i();const u=d instanceof Error?d:this.reason;n.abort(u instanceof m?u:new q(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{s(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d&&(d.removeEventListener?d.removeEventListener("abort",s):d.unsubscribe(s))}),e=null)};e.forEach(d=>d&&d.addEventListener&&d.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},hn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},mn=async function*(e,t,n){for await(const r of e)yield*hn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Je=(e,t,n,r,s)=>{const o=mn(e,t,s);let i=0,c,d=u=>{c||(c=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:l,value:f}=await o.next();if(l){d(),u.close();return}let b=f.byteLength;if(n){let E=i+=b;n(E)}u.enqueue(new Uint8Array(f))}catch(l){throw d(l),l}},cancel(u){return d(u),o.return()}},{highWaterMark:2})},G=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ve=G&&typeof ReadableStream=="function",ae=G&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ve=(e,...t)=>{try{return!!e(...t)}catch{return!1}},yn=ve&&Ve(()=>{let e=!1;const t=new Request(x.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),We=64*1024,ce=ve&&Ve(()=>a.isReadableStream(new Response("").body)),Q={stream:ce&&(e=>e.body)};G&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Q[t]&&(Q[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const wn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ae(e)).byteLength},bn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??wn(t)},ue={http:Ht,xhr:dn,fetch:G&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:b}=$e(e);u=u?(u+"").toLowerCase():"text";let[E,h]=s||o||i?pn([s,o],i):[],y,p;const R=()=>{!y&&setTimeout(()=>{E&&E.unsubscribe()}),y=!0};let S;try{if(d&&yn&&n!=="get"&&n!=="head"&&(S=await bn(l,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),N;if(a.isFormData(r)&&(N=C.headers.get("content-type"))&&l.setContentType(N),C.body){const[me,Z]=Me(S,X(He(d)));r=Je(C.body,We,me,Z,ae)}}a.isString(f)||(f=f?"include":"omit"),p=new Request(t,{...b,signal:E,method:n.toUpperCase(),headers:l.normalize().toJSON(),body:r,duplex:"half",credentials:f});let w=await fetch(p);const P=ce&&(u==="stream"||u==="response");if(ce&&(c||P)){const C={};["status","statusText","headers"].forEach(et=>{C[et]=w[et]});const N=a.toFiniteNumber(w.headers.get("content-length")),[me,Z]=c&&Me(N,X(He(c),!0))||[];w=new Response(Je(w.body,We,me,()=>{Z&&Z(),P&&R()},ae),C)}u=u||"text";let j=await Q[a.findKey(Q,u)||"text"](w,e);return!P&&R(),h&&h(),await new Promise((C,N)=>{qe(C,N,{data:j,headers:O.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:p})})}catch(w){throw R(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}})};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ke=e=>`- ${e}`,En=e=>a.isFunction(e)||e===null||e===!1,Xe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!En(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ke).join(`
`):" "+Ke(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function le(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Ge(e){return le(e),e.headers=O.from(e.headers),e.data=ie.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Xe.getAdapter(e.adapter||I.adapter)(e).then(function(r){return le(e),r.data=ie.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return ke(r)||(le(e),r&&r.response&&(r.response.data=ie.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const Qe="1.7.4",fe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ze={};fe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Qe+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ze[i]&&(Ze[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Sn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const de={assertOptions:Sn,validators:fe},_=de.validators;class B{constructor(t){this.defaults=t,this.interceptors={request:new Ue,response:new Ue}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&de.assertOptions(r,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:de.assertOptions(s,{encode:_.function,serialize:_.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=O.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(d=d&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,f=0,b;if(!d){const h=[Ge.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,u),b=h.length,l=Promise.resolve(n);f<b;)l=l.then(h[f++],h[f++]);return l}b=c.length;let E=n;for(f=0;f<b;){const h=c[f++],y=c[f++];try{E=h(E)}catch(p){y.call(this,p);break}}try{l=Ge.call(this,E)}catch(h){return Promise.reject(h)}for(f=0,b=u.length;f<b;)l=l.then(u[f++],u[f++]);return l}getUri(t){t=D(this.defaults,t);const n=Ie(t.baseURL,t.url);return _e(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){B.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}}),a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}B.prototype[t]=n(),B.prototype[t+"Form"]=n(!0)});class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}function gn(e){return function(n){return e.apply(null,n)}}function Rn(e){return a.isObject(e)&&e.isAxiosError===!0}const he={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(he).forEach(([e,t])=>{he[t]=e});function Ye(e){const t=new B(e),n=ye(B.prototype.request,t);return a.extend(n,B.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ye(D(e,s))},n}const g=Ye(I);g.Axios=B,g.CanceledError=q,g.CancelToken=pe,g.isCancel=ke,g.VERSION=Qe,g.toFormData=W,g.AxiosError=m,g.Cancel=g.CanceledError,g.all=function(t){return Promise.all(t)},g.spread=gn,g.isAxiosError=Rn,g.mergeConfig=D,g.AxiosHeaders=O,g.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e),g.getAdapter=Xe.getAdapter,g.HttpStatusCode=he,g.default=g;const On=(e,...t)=>{let n={};const r=F.ref(!1),s=F.inject("streamlineUrl"),o=F.inject("streamlineHeaders"),i=g.create({headers:{...o}}),c=F.reactive({}),d=async()=>{try{r.value=!0;const f=await i.post(s,{action:"onMounted",stream:e,params:t});u(f.data)}catch(f){throw console.error(`Error fetching properties for stream ${e}`,f),f}finally{r.value=!1}},u=f=>{Object.assign(c,f.properties);const b=f.methods;for(const E of b)c[E]=async(...h)=>{try{return(await i.post(s,{action:E,stream:e,...n,params:h})).data}catch(y){throw console.error(`Error calling ${E} on stream ${e}`,y),y}}},l=new Proxy(c,{get(f,b){return b in f?f[b]:(...E)=>{if(["setFormData","setData"].includes(b))return n=E[0],l;if(["getMethods","getActions","getFunctions","getServiceMethods"].includes(b))return Object.keys(l).filter(S=>{if(typeof l[S]=="function")return S});const p={action:b,stream:e,...n};if(["getUrl","getFullUrl","getActionUrl"].includes(b)){p.action=E[0];const S=E.slice(1);return S.length>0&&(p.params=S),s+"?"+new URLSearchParams(p).toString()}return p.params=E,i.post(s,p).then(S=>S.data).catch(S=>{throw console.error(`Error calling ${b} on stream ${e}`,S),S})}}});return d(),{...F.toRefs(c),service:l,loading:r}},Tn={install(e,t){e.provide("streamlineUrl",t.streamlineUrl),e.provide("streamlineHeaders",t.streamlineHeaders)}};L.streamline=Tn,L.useStreamline=On,Object.defineProperty(L,Symbol.toStringTag,{value:"Module"})});
