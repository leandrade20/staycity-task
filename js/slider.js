!(function (e, n) {
  if ("function" == typeof define && define.amd) define(["exports"], n);
  else if ("undefined" != typeof exports) n(exports);
  else {
    var t = {};
    n(t), (e.simpleslider = t);
  }
})(this, function (e) {
  "use strict";
  function q(e, n) {
    return null == e ? n : e;
  }
  function C(e) {
    return (e || []).length;
  }
  function L(e, n, t, i) {
    return (e /= i / 2) < 1
      ? (t / 2) * e * e * e + n
      : (t / 2) * ((e -= 2) * e * e + 2) + n;
  }
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getSlider = function (n) {
      var a = void 0,
        t = void 0,
        i = void 0,
        o = void 0,
        r = void 0,
        u = q(
          (n = n || {}).container,
          document.querySelector("*[data-simple-slider]")
        ),
        v = q(n.prop, "left"),
        d = 1e3 * q(n.duration, 1),
        c = 1e3 * q(n.delay, 5),
        p = q(n.unit, "%"),
        f = q(n.init, -100),
        s = q(n.show, 0),
        l = q(n.end, 100),
        e = n.paused,
        m = q(n.ease, L),
        y = q(n.onChange, 0),
        h = q(n.onChangeEnd, 0),
        x = Date.now;
      function I() {
        g() &&
          (t && clearTimeout(t),
          (function e() {
            (i = x()),
              (t = setTimeout(function () {
                (i = x()), (r = c), z(T()), e();
              }, r));
          })());
      }
      function g() {
        return !e && 1 < C(o);
      }
      function b() {
        g() && ((r = c - (x() - i)), clearTimeout(t), (t = 0));
      }
      function z(e) {
        for (var n = C(o); 0 <= --n; ) o[n].style.zIndex = 1;
        (o[e].style.zIndex = 3),
          (o[a].style.zIndex = 2),
          (function n(t, i, o, r, u, d, c, f, s, l) {
            function e(e, n, t) {
              e[v] = l(s - f, n, t - n, c) + p;
            }
            if (0 < f) {
              if (!(s - f < c))
                return (t[v] = o + p), (r[v] = d + p), void (h && h(a, T()));
              e(t, i, o), e(r, u, d);
            }
            requestAnimationFrame(function (e) {
              0 === f && (f = e), n(t, i, o, r, u, d, c, f, e, l);
            });
          })(o[a].style, s, l, o[e].style, f, s, d, 0, 0, m),
          (a = e),
          y && y(w(), a);
      }
      function T() {
        var e = a + 1;
        return e >= C(o) ? 0 : e;
      }
      function w() {
        var e = a - 1;
        return e < 0 ? C(o) - 1 : e;
      }
      function E() {
        document.hidden ? b() : I();
      }
      return (
        document.addEventListener("visibilitychange", E),
        (function () {
          if (0 < C(u.children)) {
            var e = u.style;
            (e.position = "relative"),
              (e.overflow = "hidden"),
              (e.display = "block"),
              (o = (function (e, n, t, i, o, r) {
                for (
                  var u = void 0, d = [], c = C((n = n || e.children));
                  0 <= --c;

                )
                  (d[c] = n[c]),
                    ((u = d[c].style).position = "absolute"),
                    (u.top = u.left = u.zIndex = 0),
                    (u[r] = i + t);
                return (u[r] = o + t), (u.zIndex = 1), d;
              })(u, n.children, p, f, s, v)),
              (a = 0),
              (r = c);
          }
        })(),
        1 < C(o) && I(),
        {
          currentIndex: function () {
            return a;
          },
          pause: b,
          resume: I,
          nextIndex: T,
          prevIndex: w,
          next: function () {
            z(T()), I();
          },
          prev: function () {
            z(w()), I();
          },
          change: z,
          reverse: function () {
            var e = f;
            (f = l), (l = e), (a = Math.abs(a - (C(o) - 1))), (o = o.reverse());
          },
          dispose: function () {
            clearTimeout(t),
              document.removeEventListener("visibilitychange", E),
              (o = u = t = v = d = c = f = l = e = a = r = y = h = null);
          },
        }
      );
    });
});
