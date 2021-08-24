const __object_assign$ = Object.assign;
import __react$ from "../react.ts";
var Re = Object.create;
var B = Object.defineProperty;
var Ve = Object.getOwnPropertyDescriptor;
var Le = Object.getOwnPropertyNames;
var We = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty;
var qe = (e) => B(e, "__esModule", { value: !0 });
var ae = (e) => {
  if (typeof require != "undefined") return require(e);
  throw new Error('Dynamic require of "' + e + '" is not supported');
};
var ce = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
var Ue = (e, r, t) => {
    if (r && typeof r == "object" || typeof r == "function") {
      for (let n of Le(r)) {
        !je.call(e, n) && n !== "default" && B(e, n, {
          get: () => r[n],
          enumerable: !(t = Ve(r, n)) || t.enumerable,
        });
      }
    }
    return e;
  },
  fe = (e) =>
    Ue(
      qe(B(
        e != null
          ? Re(We(e))
          : {},
        "default",
        e && e.__esModule && "default" in e
          ? { get: () => e.default, enumerable: !0 }
          : { value: e, enumerable: !0 },
      )),
      e,
    );
var ze = ce((z) => {
  "use strict";
  var E = __object_assign$, C = __react$;
  function p(e) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    ) {
      r += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var X = 60106,
    j = 60107,
    Y = 60108,
    Q = 60114,
    q = 60109,
    G = 60110,
    K = 60112,
    U = 60113,
    J = 60120,
    ee = 60115,
    te = 60116,
    pe = 60121,
    he = 60117,
    de = 60119,
    me = 60129,
    ye = 60131;
  typeof Symbol == "function" && Symbol.for &&
    (d = Symbol.for,
      X = d("react.portal"),
      j = d("react.fragment"),
      Y = d("react.strict_mode"),
      Q = d("react.profiler"),
      q = d("react.provider"),
      G = d("react.context"),
      K = d("react.forward_ref"),
      U = d("react.suspense"),
      J = d("react.suspense_list"),
      ee = d("react.memo"),
      te = d("react.lazy"),
      pe = d("react.block"),
      he = d("react.fundamental"),
      de = d("react.scope"),
      me = d("react.debug_trace_mode"),
      ye = d("react.legacy_hidden"));
  var d;
  function T(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case X:
        return "Portal";
      case Q:
        return "Profiler";
      case Y:
        return "StrictMode";
      case U:
        return "Suspense";
      case J:
        return "SuspenseList";
    }
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case G:
          return (e.displayName || "Context") + ".Consumer";
        case q:
          return (e._context.displayName || "Context") + ".Provider";
        case K:
          var r = e.render;
          return r = r.displayName || r.name || "",
            e.displayName || (r !== ""
              ? "ForwardRef(" + r + ")"
              : "ForwardRef");
        case ee:
          return T(e.type);
        case pe:
          return T(e._render);
        case te:
          r = e._payload, e = e._init;
          try {
            return T(e(r));
          } catch (t) {}
      }
    }
    return null;
  }
  var Ae = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = {};
  function R(e, r) {
    for (var t = e._threadCount | 0; t <= r; t++) {
      e[t] = e._currentValue2, e._threadCount = t + 1;
    }
  }
  function $e(e, r, t, n) {
    if (n && (n = e.contextType, typeof n == "object" && n !== null)) {
      return R(n, t), n[t];
    }
    if (e = e.contextTypes) {
      t = {};
      for (var u in e) t[u] = r[u];
      r = t;
    } else r = ve;
    return r;
  }
  for (m = new Uint16Array(16), V = 0; 15 > V; V++) m[V] = V + 1;
  var m, V;
  m[15] = 0;
  var He =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    we = Object.prototype.hasOwnProperty,
    xe = {},
    ge = {};
  function Se(e) {
    return we.call(ge, e)
      ? !0
      : we.call(xe, e)
      ? !1
      : He.test(e)
      ? ge[e] = !0
      : (xe[e] = !0, !1);
  }
  function Ze(e, r, t, n) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return n
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Be(e, r, t, n) {
    if (r === null || typeof r == "undefined" || Ze(e, r, t, n)) return !0;
    if (n) return !1;
    if (t !== null) {
      switch (t.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    }
    return !1;
  }
  function x(e, r, t, n, u, i, l) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4,
      this.attributeName = n,
      this.attributeNamespace = u,
      this.mustUseProperty = t,
      this.propertyName = e,
      this.type = r,
      this.sanitizeURL = i,
      this.removeEmptyString = l;
  }
  var y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ").forEach(function (e) {
      y[e] = new x(e, 0, !1, e, null, !1, !1);
    });
  [["acceptCharset", "accept-charset"], ["className", "class"], [
    "htmlFor",
    "for",
  ], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var r = e[0];
    y[r] = new x(r, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    y[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"]
    .forEach(function (e) {
      y[e] = new x(e, 2, !1, e, null, !1, !1);
    });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ").forEach(function (e) {
      y[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    y[e] = new x(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    y[e] = new x(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    y[e] = new x(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    y[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var re = /[\-:]([a-z])/g;
  function ne(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ").forEach(function (e) {
      var r = e.replace(re, ne);
      y[r] = new x(r, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ").forEach(function (e) {
      var r = e.replace(re, ne);
      y[r] = new x(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var r = e.replace(re, ne);
    y[r] = new x(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    y[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  y.xlinkHref = new x(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1,
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    y[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  var Xe = /["'&<>]/;
  function O(e) {
    if (typeof e == "boolean" || typeof e == "number") return "" + e;
    e = "" + e;
    var r = Xe.exec(e);
    if (r) {
      var t = "", n, u = 0;
      for (n = r.index; n < e.length; n++) {
        switch (e.charCodeAt(n)) {
          case 34:
            r = "&quot;";
            break;
          case 38:
            r = "&amp;";
            break;
          case 39:
            r = "&#x27;";
            break;
          case 60:
            r = "&lt;";
            break;
          case 62:
            r = "&gt;";
            break;
          default:
            continue;
        }
        u !== n && (t += e.substring(u, n)), u = n + 1, t += r;
      }
      e = u !== n ? t + e.substring(u, n) : t;
    }
    return e;
  }
  function Ye(e, r) {
    var t = y.hasOwnProperty(e) ? y[e] : null, n;
    return (n = e !== "style") &&
      (n = t !== null
        ? t.type === 0
        : !(!(2 < e.length) || e[0] !== "o" && e[0] !== "O" ||
          e[1] !== "n" && e[1] !== "N")),
      n || Be(e, r, t, !1)
        ? ""
        : t !== null
        ? (e = t.attributeName,
          n = t.type,
          n === 3 || n === 4 && r === !0
            ? e + '=""'
            : (t.sanitizeURL && (r = "" + r), e + '="' + (O(r) + '"')))
        : Se(e)
        ? e + '="' + (O(r) + '"')
        : "";
  }
  function Qe(e, r) {
    return e === r && (e !== 0 || 1 / e == 1 / r) || e !== e && r !== r;
  }
  var Ge = typeof Object.is == "function" ? Object.is : Qe,
    D = null,
    A = null,
    c = null,
    L = !1,
    $ = !1,
    _ = null,
    H = 0;
  function P() {
    if (D === null) throw Error(p(321));
    return D;
  }
  function ke() {
    if (0 < H) throw Error(p(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function oe() {
    return c === null
      ? A === null ? (L = !1, A = c = ke()) : (L = !0, c = A)
      : c.next === null
      ? (L = !1, c = c.next = ke())
      : (L = !0, c = c.next),
      c;
  }
  function Fe(e, r, t, n) {
    for (; $;) $ = !1, H += 1, c = null, t = e(r, n);
    return Ie(), t;
  }
  function Ie() {
    D = null, $ = !1, A = null, H = 0, c = _ = null;
  }
  function Ee(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  function De(e, r, t) {
    if (D = P(), c = oe(), L) {
      var n = c.queue;
      if (r = n.dispatch, _ !== null && (t = _.get(n), t !== void 0)) {
        _.delete(n), n = c.memoizedState;
        do n = e(n, t.action), t = t.next; while (t !== null);
        return c.memoizedState = n, [n, r];
      }
      return [c.memoizedState, r];
    }
    return e = e === Ee
      ? typeof r == "function" ? r() : r
      : t !== void 0
      ? t(r)
      : r,
      c.memoizedState = e,
      e = c.queue = { last: null, dispatch: null },
      e = e.dispatch = Ke.bind(null, D, e),
      [c.memoizedState, e];
  }
  function Ce(e, r) {
    if (D = P(), c = oe(), r = r === void 0 ? null : r, c !== null) {
      var t = c.memoizedState;
      if (t !== null && r !== null) {
        var n = t[1];
        e:
        if (n === null) n = !1;
        else {
          for (var u = 0; u < n.length && u < r.length; u++) {
            if (!Ge(r[u], n[u])) {
              n = !1;
              break e;
            }
          }
          n = !0;
        }
        if (n) return t[0];
      }
    }
    return e = e(), c.memoizedState = [e, r], e;
  }
  function Ke(e, r, t) {
    if (!(25 > H)) throw Error(p(301));
    if (e === D) {
      if (
        $ = !0,
          e = { action: t, next: null },
          _ === null && (_ = new Map()),
          t = _.get(r),
          t === void 0
      ) {
        _.set(r, e);
      } else {
        for (r = t; r.next !== null;) r = r.next;
        r.next = e;
      }
    }
  }
  function ie() {}
  var b = null,
    Je = {
      readContext: function (e) {
        var r = b.threadID;
        return R(e, r), e[r];
      },
      useContext: function (e) {
        P();
        var r = b.threadID;
        return R(e, r), e[r];
      },
      useMemo: Ce,
      useReducer: De,
      useRef: function (e) {
        D = P(), c = oe();
        var r = c.memoizedState;
        return r === null ? (e = { current: e }, c.memoizedState = e) : r;
      },
      useState: function (e) {
        return De(Ee, e);
      },
      useLayoutEffect: function () {},
      useCallback: function (e, r) {
        return Ce(function () {
          return e;
        }, r);
      },
      useImperativeHandle: ie,
      useEffect: ie,
      useDebugValue: ie,
      useDeferredValue: function (e) {
        return P(), e;
      },
      useTransition: function () {
        return P(), [function (e) {
          e();
        }, !1];
      },
      useOpaqueIdentifier: function () {
        return (b.identifierPrefix || "") + "R:" + (b.uniqueID++).toString(36);
      },
      useMutableSource: function (e, r) {
        return P(), r(e._source);
      },
    },
    Ne = {
      html: "http://www.w3.org/1999/xhtml",
      mathml: "http://www.w3.org/1998/Math/MathML",
      svg: "http://www.w3.org/2000/svg",
    };
  function _e(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  var Me = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
    et = E({ menuitem: !0 }, Me),
    W = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    tt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(W).forEach(function (e) {
    tt.forEach(function (r) {
      r = r + e.charAt(0).toUpperCase() + e.substring(1), W[r] = W[e];
    });
  });
  var rt = /([A-Z])/g,
    nt = /^ms-/,
    M = C.Children.toArray,
    le = Ae.ReactCurrentDispatcher,
    ot = { listing: !0, pre: !0, textarea: !0 },
    it = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
    Oe = {},
    ue = {};
  function lt(e) {
    if (e == null) return e;
    var r = "";
    return C.Children.forEach(e, function (t) {
      t != null && (r += t);
    }),
      r;
  }
  var ut = Object.prototype.hasOwnProperty,
    st = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null,
      suppressHydrationWarning: null,
    };
  function Pe(e, r) {
    if (e === void 0) throw Error(p(152, T(r) || "Component"));
  }
  function at(e, r, t) {
    function n(l, s) {
      var o = s.prototype && s.prototype.isReactComponent,
        S = $e(s, r, t, o),
        h = [],
        g = !1,
        f = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {
            if (h === null) return null;
          },
          enqueueReplaceState: function (Z, v) {
            g = !0, h = [v];
          },
          enqueueSetState: function (Z, v) {
            if (h === null) return null;
            h.push(v);
          },
        };
      if (o) {
        if (
          o = new s(l.props, S, f),
            typeof s.getDerivedStateFromProps == "function"
        ) {
          var a = s.getDerivedStateFromProps.call(null, l.props, o.state);
          a != null && (o.state = E({}, o.state, a));
        }
      } else if (
        D = {},
          o = s(l.props, S, f),
          o = Fe(s, l.props, o, S),
          o == null || o.render == null
      ) {
        e = o, Pe(e, s);
        return;
      }
      if (
        o.props = l.props,
          o.context = S,
          o.updater = f,
          f = o.state,
          f === void 0 && (o.state = f = null),
          typeof o.UNSAFE_componentWillMount == "function" ||
          typeof o.componentWillMount == "function"
      ) {
        if (
          typeof o.componentWillMount == "function" &&
          typeof s.getDerivedStateFromProps != "function" &&
          o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" &&
            typeof s.getDerivedStateFromProps != "function" &&
            o.UNSAFE_componentWillMount(),
            h.length
        ) {
          f = h;
          var w = g;
          if (h = null, g = !1, w && f.length === 1) o.state = f[0];
          else {
            a = w ? f[0] : o.state;
            var N = !0;
            for (w = w ? 1 : 0; w < f.length; w++) {
              var k = f[w];
              k = typeof k == "function" ? k.call(o, a, l.props, S) : k,
                k != null && (N ? (N = !1, a = E({}, a, k)) : E(a, k));
            }
            o.state = a;
          }
        } else h = null;
      }
      if (
        e = o.render(),
          Pe(e, s),
          typeof o.getChildContext == "function" &&
          (l = s.childContextTypes, typeof l == "object")
      ) {
        var F = o.getChildContext();
        for (var I in F) {
          if (!(I in l)) throw Error(p(108, T(s) || "Unknown", I));
        }
      }
      F && (r = E({}, r, F));
    }
    for (; C.isValidElement(e);) {
      var u = e, i = u.type;
      if (typeof i != "function") break;
      n(u, i);
    }
    return { child: e, context: r };
  }
  var be = function () {
    function e(t, n, u) {
      C.isValidElement(t)
        ? t.type !== j
          ? t = [t]
          : (t = t.props.children, t = C.isValidElement(t) ? [t] : M(t))
        : t = M(t),
        t = {
          type: null,
          domNamespace: Ne.html,
          children: t,
          childIndex: 0,
          context: ve,
          footer: "",
        };
      var i = m[0];
      if (i === 0) {
        var l = m;
        i = l.length;
        var s = 2 * i;
        if (!(65536 >= s)) throw Error(p(304));
        var o = new Uint16Array(s);
        for (o.set(l), m = o, m[0] = i + 1, l = i; l < s - 1; l++) m[l] = l + 1;
        m[s - 1] = 0;
      } else m[0] = m[i];
      this.threadID = i,
        this.stack = [t],
        this.exhausted = !1,
        this.currentSelectValue = null,
        this.previousWasTextNode = !1,
        this.makeStaticMarkup = n,
        this.suspenseDepth = 0,
        this.contextIndex = -1,
        this.contextStack = [],
        this.contextValueStack = [],
        this.uniqueID = 0,
        this.identifierPrefix = u && u.identifierPrefix || "";
    }
    var r = e.prototype;
    return r.destroy = function () {
      if (!this.exhausted) {
        this.exhausted = !0, this.clearProviders();
        var t = this.threadID;
        m[t] = m[0], m[0] = t;
      }
    },
      r.pushProvider = function (t) {
        var n = ++this.contextIndex, u = t.type._context, i = this.threadID;
        R(u, i);
        var l = u[i];
        this.contextStack[n] = u,
          this.contextValueStack[n] = l,
          u[i] = t.props.value;
      },
      r.popProvider = function () {
        var t = this.contextIndex,
          n = this.contextStack[t],
          u = this.contextValueStack[t];
        this.contextStack[t] = null,
          this.contextValueStack[t] = null,
          this.contextIndex--,
          n[this.threadID] = u;
      },
      r.clearProviders = function () {
        for (var t = this.contextIndex; 0 <= t; t--) {
          this.contextStack[t][this.threadID] = this.contextValueStack[t];
        }
      },
      r.read = function (t) {
        if (this.exhausted) return null;
        var n = b;
        b = this;
        var u = le.current;
        le.current = Je;
        try {
          for (var i = [""], l = !1; i[0].length < t;) {
            if (this.stack.length === 0) {
              this.exhausted = !0;
              var s = this.threadID;
              m[s] = m[0], m[0] = s;
              break;
            }
            var o = this.stack[this.stack.length - 1];
            if (l || o.childIndex >= o.children.length) {
              var S = o.footer;
              if (
                S !== "" && (this.previousWasTextNode = !1),
                  this.stack.pop(),
                  o.type === "select"
              ) {
                this.currentSelectValue = null;
              } else if (
                o.type != null && o.type.type != null &&
                o.type.type.$$typeof === q
              ) {
                this.popProvider(o.type);
              } else if (o.type === U) {
                this.suspenseDepth--;
                var h = i.pop();
                if (l) {
                  l = !1;
                  var g = o.fallbackFrame;
                  if (!g) throw Error(p(303));
                  this.stack.push(g), i[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else i[this.suspenseDepth] += h;
              }
              i[this.suspenseDepth] += S;
            } else {
              var f = o.children[o.childIndex++], a = "";
              try {
                a += this.render(f, o.context, o.domNamespace);
              } catch (w) {
                throw w != null && typeof w.then == "function"
                  ? Error(p(294))
                  : w;
              } finally {
              }
              i.length <= this.suspenseDepth && i.push(""),
                i[this.suspenseDepth] += a;
            }
          }
          return i[0];
        } finally {
          le.current = u, b = n, Ie();
        }
      },
      r.render = function (t, n, u) {
        if (typeof t == "string" || typeof t == "number") {
          return u = "" + t,
            u === "" ? "" : this.makeStaticMarkup
              ? O(u)
              : this.previousWasTextNode
              ? "<!-- -->" + O(u)
              : (this.previousWasTextNode = !0, O(u));
        }
        if (
          n = at(t, n, this.threadID),
            t = n.child,
            n = n.context,
            t === null || t === !1
        ) {
          return "";
        }
        if (!C.isValidElement(t)) {
          if (t != null && t.$$typeof != null) {
            throw u = t.$$typeof,
              Error(u === X ? p(257) : p(258, u.toString()));
          }
          return t = M(t),
            this.stack.push({
              type: null,
              domNamespace: u,
              children: t,
              childIndex: 0,
              context: n,
              footer: "",
            }),
            "";
        }
        var i = t.type;
        if (typeof i == "string") return this.renderDOM(t, n, u);
        switch (i) {
          case ye:
          case me:
          case Y:
          case Q:
          case J:
          case j:
            return t = M(t.props.children),
              this.stack.push({
                type: null,
                domNamespace: u,
                children: t,
                childIndex: 0,
                context: n,
                footer: "",
              }),
              "";
          case U:
            throw Error(p(294));
          case de:
            throw Error(p(343));
        }
        if (typeof i == "object" && i !== null) {
          switch (i.$$typeof) {
            case K:
              D = {};
              var l = i.render(t.props, t.ref);
              return l = Fe(i.render, t.props, l, t.ref),
                l = M(l),
                this.stack.push({
                  type: null,
                  domNamespace: u,
                  children: l,
                  childIndex: 0,
                  context: n,
                  footer: "",
                }),
                "";
            case ee:
              return t = [C.createElement(i.type, E({ ref: t.ref }, t.props))],
                this.stack.push({
                  type: null,
                  domNamespace: u,
                  children: t,
                  childIndex: 0,
                  context: n,
                  footer: "",
                }),
                "";
            case q:
              return i = M(t.props.children),
                u = {
                  type: t,
                  domNamespace: u,
                  children: i,
                  childIndex: 0,
                  context: n,
                  footer: "",
                },
                this.pushProvider(t),
                this.stack.push(u),
                "";
            case G:
              i = t.type, l = t.props;
              var s = this.threadID;
              return R(i, s),
                i = M(l.children(i[s])),
                this.stack.push({
                  type: t,
                  domNamespace: u,
                  children: i,
                  childIndex: 0,
                  context: n,
                  footer: "",
                }),
                "";
            case he:
              throw Error(p(338));
            case te:
              return i = t.type,
                l = i._init,
                i = l(i._payload),
                t = [C.createElement(i, E({ ref: t.ref }, t.props))],
                this.stack.push({
                  type: null,
                  domNamespace: u,
                  children: t,
                  childIndex: 0,
                  context: n,
                  footer: "",
                }),
                "";
          }
        }
        throw Error(p(130, i == null ? i : typeof i, ""));
      },
      r.renderDOM = function (t, n, u) {
        var i = t.type.toLowerCase();
        if (u === Ne.html && _e(i), !Oe.hasOwnProperty(i)) {
          if (!it.test(i)) throw Error(p(65, i));
          Oe[i] = !0;
        }
        var l = t.props;
        if (i === "input") {
          l = E({ type: void 0 }, l, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: l.value != null ? l.value : l.defaultValue,
            checked: l.checked != null ? l.checked : l.defaultChecked,
          });
        } else if (i === "textarea") {
          var s = l.value;
          if (s == null) {
            s = l.defaultValue;
            var o = l.children;
            if (o != null) {
              if (s != null) throw Error(p(92));
              if (Array.isArray(o)) {
                if (!(1 >= o.length)) throw Error(p(93));
                o = o[0];
              }
              s = "" + o;
            }
            s == null && (s = "");
          }
          l = E({}, l, { value: void 0, children: "" + s });
        } else if (i === "select") {
          this.currentSelectValue = l.value != null ? l.value : l.defaultValue,
            l = E({}, l, { value: void 0 });
        } else if (i === "option") {
          o = this.currentSelectValue;
          var S = lt(l.children);
          if (o != null) {
            var h = l.value != null ? l.value + "" : S;
            if (s = !1, Array.isArray(o)) {
              for (var g = 0; g < o.length; g++) {
                if ("" + o[g] === h) {
                  s = !0;
                  break;
                }
              }
            } else s = "" + o === h;
            l = E({ selected: void 0, children: void 0 }, l, {
              selected: s,
              children: S,
            });
          }
        }
        if (s = l) {
          if (
            et[i] && (s.children != null || s.dangerouslySetInnerHTML != null)
          ) {
            throw Error(p(137, i));
          }
          if (s.dangerouslySetInnerHTML != null) {
            if (s.children != null) throw Error(p(60));
            if (
              !(typeof s.dangerouslySetInnerHTML == "object" &&
                "__html" in s.dangerouslySetInnerHTML)
            ) {
              throw Error(p(61));
            }
          }
          if (s.style != null && typeof s.style != "object") throw Error(p(62));
        }
        s = l,
          o = this.makeStaticMarkup,
          S = this.stack.length === 1,
          h = "<" + t.type;
        e:
        if (i.indexOf("-") === -1) g = typeof s.is == "string";
        else {
          switch (i) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              g = !1;
              break e;
            default:
              g = !0;
          }
        }
        for (v in s) {
          if (ut.call(s, v)) {
            var f = s[v];
            if (f != null) {
              if (v === "style") {
                var a = void 0, w = "", N = "";
                for (a in f) {
                  if (f.hasOwnProperty(a)) {
                    var k = a.indexOf("--") === 0, F = f[a];
                    if (F != null) {
                      if (k) var I = a;
                      else if (I = a, ue.hasOwnProperty(I)) I = ue[I];
                      else {
                        var Z = I.replace(rt, "-$1").toLowerCase().replace(
                          nt,
                          "-ms-",
                        );
                        I = ue[I] = Z;
                      }
                      w += N + I + ":",
                        N = a,
                        k = F == null || typeof F == "boolean" || F === "" ? ""
                        : k || typeof F != "number" || F === 0 ||
                            W.hasOwnProperty(N) && W[N]
                          ? ("" + F).trim()
                          : F + "px",
                        w += k,
                        N = ";";
                    }
                  }
                }
                f = w || null;
              }
              a = null,
                g
                  ? st.hasOwnProperty(v) || (a = v,
                    a = Se(a) && f != null
                      ? a + '="' + (O(f) + '"')
                      : "")
                  : a = Ye(v, f),
                a && (h += " " + a);
            }
          }
        }
        o || S && (h += ' data-reactroot=""');
        var v = h;
        s = "",
          Me.hasOwnProperty(i) ? v += "/>"
          : (v += ">", s = "</" + t.type + ">");
        e: {
          if (o = l.dangerouslySetInnerHTML, o != null) {
            if (o.__html != null) {
              o = o.__html;
              break e;
            }
          } else if (
            o = l.children, typeof o == "string" || typeof o == "number"
          ) {
            o = O(o);
            break e;
          }
          o = null;
        }
        return o != null
          ? (l = [],
            ot.hasOwnProperty(i) && o.charAt(0) === `
` &&
            (v += `
`),
            v += o)
          : l = M(l.children),
          t = t.type,
          u = u == null || u === "http://www.w3.org/1999/xhtml" ? _e(t)
          : u === "http://www.w3.org/2000/svg" && t === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : u,
          this.stack.push({
            domNamespace: u,
            type: i,
            children: l,
            childIndex: 0,
            context: n,
            footer: s,
          }),
          this.previousWasTextNode = !1,
          v;
      },
      e;
  }();
  z.renderToNodeStream = function () {
    throw Error(p(207));
  };
  z.renderToStaticMarkup = function (e, r) {
    e = new be(e, !0, r);
    try {
      return e.read(1 / 0);
    } finally {
      e.destroy();
    }
  };
  z.renderToStaticNodeStream = function () {
    throw Error(p(208));
  };
  z.renderToString = function (e, r) {
    e = new be(e, !1, r);
    try {
      return e.read(1 / 0);
    } finally {
      e.destroy();
    }
  };
  z.version = "17.0.2";
});
var se = ce((dt, Te) => {
  "use strict";
  Te.exports = ze();
});
var ct = fe(se()),
  ft = fe(se()),
  {
    renderToNodeStream: mt,
    renderToStaticMarkup: yt,
    renderToStaticNodeStream: vt,
    renderToString: wt,
    version: xt,
  } = ct;
var export_default = ft.default;
export {
  export_default as default,
  mt as renderToNodeStream,
  vt as renderToStaticNodeStream,
  wt as renderToString,
  xt as version,
  yt as renderToStaticMarkup,
};
