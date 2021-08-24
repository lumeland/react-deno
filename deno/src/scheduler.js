var D = Object.create;
var j = Object.defineProperty;
var z = Object.getOwnPropertyDescriptor;
var B = Object.getOwnPropertyNames;
var G = Object.getPrototypeOf, ee = Object.prototype.hasOwnProperty;
var ne = (e) => j(e, "__esModule", { value: !0 });
var H = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports);
var te = (e, n, t) => {
    if (n && typeof n == "object" || typeof n == "function") {
      for (let l of B(n)) {
        !ee.call(e, l) && l !== "default" && j(e, l, {
          get: () => n[l],
          enumerable: !(t = z(n, l)) || t.enumerable,
        });
      }
    }
    return e;
  },
  J = (e) =>
    te(
      ne(j(
        e != null
          ? D(G(e))
          : {},
        "default",
        e && e.__esModule && "default" in e
          ? { get: () => e.default, enumerable: !0 }
          : { value: e, enumerable: !0 },
      )),
      e,
    );
var $ = H((r) => {
  "use strict";
  var _, v, g, C;
  typeof performance == "object" && typeof performance.now == "function"
    ? (K = performance,
      r.unstable_now = function () {
        return K.now();
      })
    : (F = Date,
      Q = F.now(),
      r.unstable_now = function () {
        return F.now() - Q;
      });
  var K, F, Q;
  typeof window == "undefined" || typeof MessageChannel != "function"
    ? (y = null,
      L = null,
      N = function () {
        if (y !== null) {
          try {
            var e = r.unstable_now();
            y(!0, e), y = null;
          } catch (n) {
            throw setTimeout(N, 0), n;
          }
        }
      },
      _ = function (e) {
        y !== null ? setTimeout(_, 0, e) : (y = e, setTimeout(N, 0));
      },
      v = function (e, n) {
        L = setTimeout(e, n);
      },
      g = function () {
        clearTimeout(L);
      },
      r.unstable_shouldYield = function () {
        return !1;
      },
      C = r.unstable_forceFrameRate = function () {})
    : (S = window.setTimeout,
      X = window.clearTimeout,
      typeof console != "undefined" &&
      (Z = window.cancelAnimationFrame,
        typeof window.requestAnimationFrame != "function" &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        typeof Z != "function" &&
        console.error(
          "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        )),
      h = !1,
      w = null,
      P = -1,
      E = 5,
      R = 0,
      r.unstable_shouldYield = function () {
        return r.unstable_now() >= R;
      },
      C = function () {},
      r.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
          : E = 0 < e ? Math.floor(1e3 / e) : 5;
      },
      q = new MessageChannel(),
      x = q.port2,
      q.port1.onmessage = function () {
        if (w !== null) {
          var e = r.unstable_now();
          R = e + E;
          try {
            w(!0, e) ? x.postMessage(null) : (h = !1, w = null);
          } catch (n) {
            throw x.postMessage(null), n;
          }
        } else h = !1;
      },
      _ = function (e) {
        w = e, h || (h = !0, x.postMessage(null));
      },
      v = function (e, n) {
        P = S(function () {
          e(r.unstable_now());
        }, n);
      },
      g = function () {
        X(P), P = -1;
      });
  var y, L, N, S, X, Z, h, w, P, E, R, q, x;
  function Y(e, n) {
    var t = e.length;
    e.push(n);
    e:
    for (;;) {
      var l = t - 1 >>> 1, o = e[l];
      if (o !== void 0 && 0 < I(o, n)) e[l] = n, e[t] = o, t = l;
      else break e;
    }
  }
  function a(e) {
    return e = e[0], e === void 0 ? null : e;
  }
  function T(e) {
    var n = e[0];
    if (n !== void 0) {
      var t = e.pop();
      if (t !== n) {
        e[0] = t;
        e:
        for (var l = 0, o = e.length; l < o;) {
          var f = 2 * (l + 1) - 1, b = e[f], m = f + 1, d = e[m];
          if (b !== void 0 && 0 > I(b, t)) {
            d !== void 0 && 0 > I(d, b)
              ? (e[l] = d, e[m] = t, l = m)
              : (e[l] = b, e[f] = t, l = f);
          } else if (d !== void 0 && 0 > I(d, t)) e[l] = d, e[m] = t, l = m;
          else break e;
        }
      }
      return n;
    }
    return null;
  }
  function I(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return t !== 0 ? t : e.id - n.id;
  }
  var s = [], c = [], re = 1, u = null, i = 3, M = !1, p = !1, k = !1;
  function U(e) {
    for (var n = a(c); n !== null;) {
      if (n.callback === null) T(c);
      else if (n.startTime <= e) T(c), n.sortIndex = n.expirationTime, Y(s, n);
      else break;
      n = a(c);
    }
  }
  function W(e) {
    if (k = !1, U(e), !p) {
      if (a(s) !== null) p = !0, _(O);
      else {
        var n = a(c);
        n !== null && v(W, n.startTime - e);
      }
    }
  }
  function O(e, n) {
    p = !1, k && (k = !1, g()), M = !0;
    var t = i;
    try {
      for (
        U(n), u = a(s);
        u !== null &&
        (!(u.expirationTime > n) || e && !r.unstable_shouldYield());
      ) {
        var l = u.callback;
        if (typeof l == "function") {
          u.callback = null, i = u.priorityLevel;
          var o = l(u.expirationTime <= n);
          n = r.unstable_now(),
            typeof o == "function" ? u.callback = o : u === a(s) && T(s),
            U(n);
        } else T(s);
        u = a(s);
      }
      if (u !== null) var f = !0;
      else {
        var b = a(c);
        b !== null && v(W, b.startTime - n), f = !1;
      }
      return f;
    } finally {
      u = null, i = t, M = !1;
    }
  }
  var le = C;
  r.unstable_IdlePriority = 5;
  r.unstable_ImmediatePriority = 1;
  r.unstable_LowPriority = 4;
  r.unstable_NormalPriority = 3;
  r.unstable_Profiling = null;
  r.unstable_UserBlockingPriority = 2;
  r.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  r.unstable_continueExecution = function () {
    p || M || (p = !0, _(O));
  };
  r.unstable_getCurrentPriorityLevel = function () {
    return i;
  };
  r.unstable_getFirstCallbackNode = function () {
    return a(s);
  };
  r.unstable_next = function (e) {
    switch (i) {
      case 1:
      case 2:
      case 3:
        var n = 3;
        break;
      default:
        n = i;
    }
    var t = i;
    i = n;
    try {
      return e();
    } finally {
      i = t;
    }
  };
  r.unstable_pauseExecution = function () {};
  r.unstable_requestPaint = le;
  r.unstable_runWithPriority = function (e, n) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var t = i;
    i = e;
    try {
      return n();
    } finally {
      i = t;
    }
  };
  r.unstable_scheduleCallback = function (e, n, t) {
    var l = r.unstable_now();
    switch (
      typeof t == "object" && t !== null
        ? (t = t.delay, t = typeof t == "number" && 0 < t ? l + t : l)
        : t = l, e
    ) {
      case 1:
        var o = -1;
        break;
      case 2:
        o = 250;
        break;
      case 5:
        o = 1073741823;
        break;
      case 4:
        o = 1e4;
        break;
      default:
        o = 5e3;
    }
    return o = t + o,
      e = {
        id: re++,
        callback: n,
        priorityLevel: e,
        startTime: t,
        expirationTime: o,
        sortIndex: -1,
      },
      t > l
        ? (e.sortIndex = t,
          Y(c, e),
          a(s) === null && e === a(c) && (k ? g() : k = !0, v(W, t - l)))
        : (e.sortIndex = o, Y(s, e), p || M || (p = !0, _(O))),
      e;
  };
  r.unstable_wrapCallback = function (e) {
    var n = i;
    return function () {
      var t = i;
      i = n;
      try {
        return e.apply(this, arguments);
      } finally {
        i = t;
      }
    };
  };
});
var V = H((se, A) => {
  "use strict";
  A.exports = $();
});
var oe = J(V()),
  ie = J(V()),
  {
    unstable_now: ce,
    unstable_shouldYield: fe,
    unstable_forceFrameRate: be,
    unstable_IdlePriority: pe,
    unstable_ImmediatePriority: de,
    unstable_LowPriority: _e,
    unstable_NormalPriority: ye,
    unstable_Profiling: me,
    unstable_UserBlockingPriority: ve,
    unstable_cancelCallback: he,
    unstable_continueExecution: we,
    unstable_getCurrentPriorityLevel: ke,
    unstable_getFirstCallbackNode: ge,
    unstable_next: Pe,
    unstable_pauseExecution: xe,
    unstable_requestPaint: Te,
    unstable_runWithPriority: Ie,
    unstable_scheduleCallback: Me,
    unstable_wrapCallback: je,
  } = oe;
var export_default = ie.default;
export {
  _e as unstable_LowPriority,
  be as unstable_forceFrameRate,
  ce as unstable_now,
  de as unstable_ImmediatePriority,
  export_default as default,
  fe as unstable_shouldYield,
  ge as unstable_getFirstCallbackNode,
  he as unstable_cancelCallback,
  Ie as unstable_runWithPriority,
  je as unstable_wrapCallback,
  ke as unstable_getCurrentPriorityLevel,
  Me as unstable_scheduleCallback,
  me as unstable_Profiling,
  Pe as unstable_next,
  pe as unstable_IdlePriority,
  Te as unstable_requestPaint,
  ve as unstable_UserBlockingPriority,
  we as unstable_continueExecution,
  xe as unstable_pauseExecution,
  ye as unstable_NormalPriority,
};
