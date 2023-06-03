var skwasm = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
    function (skwasm) {
      skwasm = skwasm || {};


      function e() {
        h.buffer != l && q(h.buffer);
        return aa
      }

      function r() {
        h.buffer != l && q(h.buffer);
        return ba
      }

      function u() {
        h.buffer != l && q(h.buffer);
        return ca
      }

      function ea() {
        h.buffer != l && q(h.buffer);
        return fa
      }

      function w() {
        h.buffer != l && q(h.buffer);
        return ha
      }

      function ia() {
        h.buffer != l && q(h.buffer);
        return ja
      }
      null;
      var y;
      y || (y = typeof skwasm !== 'undefined' ? skwasm : {});
      var ka = Object.assign,
        la, ma;
      y.ready = new Promise(function (a, b) {
        la = a;
        ma = b
      });
      var na = ka({}, y),
        oa = "./this.program",
        pa = (a, b) => {
          throw b;
        },
        qa = "object" === typeof window,
        z = "function" === typeof importScripts,
        A = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node,
        B = y.ENVIRONMENT_IS_PTHREAD || !1,
        D = "";

      function ra(a) {
        return y.locateFile ? y.locateFile(a, D) : D + a
      }
      var sa, ta, ua, fs, va, wa;
      if (A) {
        D = z ? require("path").dirname(D) + "/" : __dirname + "/";
        wa = () => {
          va || (fs = require("fs"), va = require("path"))
        };
        sa = function (b, c) {
          wa();
          b = va.normalize(b);
          return fs.readFileSync(b, c ? null : "utf8")
        };
        ua = b => {
          b = sa(b, !0);
          b.buffer || (b = new Uint8Array(b));
          return b
        };
        ta = (b, c, d) => {
          wa();
          b = va.normalize(b);
          fs.readFile(b, function (f, g) {
            f ? d(f) : c(g.buffer)
          })
        };
        1 < process.argv.length && (oa = process.argv[1].replace(/\\/g, "/"));
        process.argv.slice(2);
        process.on("uncaughtException", function (b) {
          if (!(b instanceof xa)) throw b;
        });
        process.on("unhandledRejection",
          function (b) {
            throw b;
          });
        pa = (b, c) => {
          if (ya()) throw process.exitCode = b, c;
          c instanceof xa || E("exiting due to exception: " + c);
          process.exit(b)
        };
        y.inspect = function () {
          return "[Emscripten Module object]"
        };
        let a;
        try {
          a = require("worker_threads")
        } catch (b) {
          throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'), b;
        }
        global.Worker = a.Worker
      } else if (qa || z) z ? D = self.location.href : "undefined" !== typeof document && document.currentScript && (D = document.currentScript.src),
        _scriptDir && (D = _scriptDir), 0 !== D.indexOf("blob:") ? D = D.substr(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1) : D = "", A || (sa = a => {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.send(null);
          return b.responseText
        }, z && (ua = a => {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.responseType = "arraybuffer";
          b.send(null);
          return new Uint8Array(b.response)
        }), ta = (a, b, c) => {
          var d = new XMLHttpRequest;
          d.open("GET", a, !0);
          d.responseType = "arraybuffer";
          d.onload = () => {
            200 == d.status || 0 == d.status && d.response ? b(d.response) : c()
          };
          d.onerror =
            c;
          d.send(null)
        });
      A && "undefined" === typeof performance && (global.performance = require("perf_hooks").performance);
      var za = console.log.bind(console),
        Aa = console.warn.bind(console);
      A && (wa(), za = a => fs.writeSync(1, a + "\n"), Aa = a => fs.writeSync(2, a + "\n"));
      var Ba = y.print || za,
        E = y.printErr || Aa;
      ka(y, na);
      na = null;
      y.thisProgram && (oa = y.thisProgram);
      y.quit && (pa = y.quit);
      var Ca, Da = 0,
        Ea;
      y.wasmBinary && (Ea = y.wasmBinary);
      var noExitRuntime = y.noExitRuntime || !0;
      "object" !== typeof WebAssembly && Fa("no native wasm support detected");
      var h, Ga, Ha = !1;

      function Ia(a) {
        var b = new TextDecoder(a);
        this.decode = c => {
          c.buffer instanceof SharedArrayBuffer && (c = new Uint8Array(c));
          return b.decode.call(b, c)
        }
      }
      var Ja = "undefined" !== typeof TextDecoder ? new Ia("utf8") : void 0;

      function Ka(a, b, c) {
        var d = b + c;
        for (c = b; a[c] && !(c >= d);) ++c;
        if (16 < c - b && a.subarray && Ja) return Ja.decode(a.subarray(b, c));
        for (d = ""; b < c;) {
          var f = a[b++];
          if (f & 128) {
            var g = a[b++] & 63;
            if (192 == (f & 224)) d += String.fromCharCode((f & 31) << 6 | g);
            else {
              var k = a[b++] & 63;
              f = 224 == (f & 240) ? (f & 15) << 12 | g << 6 | k : (f & 7) << 18 | g << 12 | k << 6 | a[b++] & 63;
              65536 > f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023))
            }
          } else d += String.fromCharCode(f)
        }
        return d
      }

      function F(a, b) {
        return a ? Ka(r(), a, b) : ""
      }

      function La(a, b, c, d) {
        if (!(0 < d)) return 0;
        var f = c;
        d = c + d - 1;
        for (var g = 0; g < a.length; ++g) {
          var k = a.charCodeAt(g);
          if (55296 <= k && 57343 >= k) {
            var n = a.charCodeAt(++g);
            k = 65536 + ((k & 1023) << 10) | n & 1023
          }
          if (127 >= k) {
            if (c >= d) break;
            b[c++] = k
          } else {
            if (2047 >= k) {
              if (c + 1 >= d) break;
              b[c++] = 192 | k >> 6
            } else {
              if (65535 >= k) {
                if (c + 2 >= d) break;
                b[c++] = 224 | k >> 12
              } else {
                if (c + 3 >= d) break;
                b[c++] = 240 | k >> 18;
                b[c++] = 128 | k >> 12 & 63
              }
              b[c++] = 128 | k >> 6 & 63
            }
            b[c++] = 128 | k & 63
          }
        }
        b[c] = 0;
        return c - f
      }

      function Ma(a, b, c) {
        return La(a, r(), b, c)
      }

      function Na(a) {
        for (var b = 0, c = 0; c < a.length; ++c) {
          var d = a.charCodeAt(c);
          55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | a.charCodeAt(++c) & 1023);
          127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4
        }
        return b
      }
      "undefined" !== typeof TextDecoder && new Ia("utf-16le");

      function Oa(a, b) {
        e().set(a, b)
      }
      var l, aa, ba, Pa, Qa, ca, fa, ha, ja;
      B && (l = y.buffer);

      function q(a) {
        l = a;
        y.HEAP8 = aa = new Int8Array(a);
        y.HEAP16 = Pa = new Int16Array(a);
        y.HEAP32 = ca = new Int32Array(a);
        y.HEAPU8 = ba = new Uint8Array(a);
        y.HEAPU16 = Qa = new Uint16Array(a);
        y.HEAPU32 = fa = new Uint32Array(a);
        y.HEAPF32 = ha = new Float32Array(a);
        y.HEAPF64 = ja = new Float64Array(a)
      }
      var Ra = y.INITIAL_MEMORY || 16777216;
      if (B) h = y.wasmMemory, l = y.buffer;
      else if (y.wasmMemory) h = y.wasmMemory;
      else if (h = new WebAssembly.Memory({
          initial: Ra / 65536,
          maximum: 32768,
          shared: !0
        }), !(h.buffer instanceof SharedArrayBuffer)) throw E("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), A && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"),
        Error("bad memory");
      h && (l = h.buffer);
      Ra = l.byteLength;
      q(l);
      var Sa, Ta = [],
        Ua = [],
        Va = [],
        Wa = 0;

      function ya() {
        return noExitRuntime || 0 < Wa
      }

      function Xa() {
        var a = y.preRun.shift();
        Ta.unshift(a)
      }
      var H = 0,
        Ya = null,
        Za = null;
      y.preloadedImages = {};
      y.preloadedAudios = {};

      function Fa(a) {
        if (B) postMessage({
          cmd: "onAbort",
          arg: a
        });
        else if (y.onAbort) y.onAbort(a);
        a = "Aborted(" + a + ")";
        E(a);
        Ha = !0;
        a = new WebAssembly.RuntimeError(a + ". Build with -s ASSERTIONS=1 for more info.");
        ma(a);
        throw a;
      }

      function $a() {
        return I.startsWith("data:application/octet-stream;base64,")
      }
      var I;
      I = "skwasm.wasm";
      $a() || (I = ra(I));

      function ab() {
        var a = I;
        try {
          if (a == I && Ea) return new Uint8Array(Ea);
          if (ua) return ua(a);
          throw "both async and sync fetching of the wasm failed";
        } catch (b) {
          Fa(b)
        }
      }

      function bb() {
        if (!Ea && (qa || z)) {
          if ("function" === typeof fetch && !I.startsWith("file://")) return fetch(I, {
            credentials: "same-origin"
          }).then(function (a) {
            if (!a.ok) throw "failed to load wasm binary file at '" + I + "'";
            return a.arrayBuffer()
          }).catch(function () {
            return ab()
          });
          if (ta) return new Promise(function (a, b) {
            ta(I, function (c) {
              a(new Uint8Array(c))
            }, b)
          })
        }
        return Promise.resolve().then(function () {
          return ab()
        })
      }
      var cb = {};

      function db(a) {
        for (; 0 < a.length;) {
          var b = a.shift();
          if ("function" == typeof b) b(y);
          else {
            var c = b.Ma;
            "number" === typeof c ? void 0 === b.A ? J(c)() : J(c)(b.A) : c(void 0 === b.A ? null : b.A)
          }
        }
      }

      function eb(a) {
        var b = K();
        a = a();
        L(b);
        return a
      }

      function fb(a) {
        var b = M.i[a];
        b && (u()[a >> 2] = 0, M.ea(b.worker))
      }
      var M = {
        j: [],
        D: [],
        U: [],
        sa: function () {
          for (var a = 0; 1 > a; ++a) M.W()
        },
        ta: function () {
          M.receiveObjectTransfer = M.wa;
          M.threadInit = M.ga;
          M.setExitStatus = M.ya
        },
        i: {},
        ya: function () {},
        fa: function () {
          for (var a in M.i) {
            var b = M.i[a];
            b && b.worker && M.ea(b.worker)
          }
          for (a = 0; a < M.j.length; ++a) M.j[a].terminate();
          M.j = []
        },
        ea: function (a) {
          M.xa(function () {
            delete M.i[a.s.T];
            M.j.push(a);
            M.D.splice(M.D.indexOf(a), 1);
            gb(a.s.T);
            a.s = void 0
          })
        },
        xa: function (a) {
          u()[hb >> 2] = 0;
          try {
            a()
          } finally {
            u()[hb >> 2] = 1
          }
        },
        wa: function (a) {
          if ("undefined" !== typeof ib) {
            for (var b in a.M) N[b] =
              a.M[b];
            !y.canvas && a.o && N[a.o] && (y.canvas = N[a.o].l, y.canvas.id = a.o)
          }
        },
        ga: function () {
          for (var a in M.U) M.U[a]()
        },
        aa: function (a, b) {
          a.onmessage = c => {
            c = c.data;
            var d = c.cmd;
            a.s && (M.la = a.s.T);
            if (c.targetThread && c.targetThread != jb()) {
              var f = M.i[c.Ta];
              f ? f.worker.postMessage(c, c.transferList) : E('Internal error! Worker sent a message "' + d + '" to target pthread ' + c.targetThread + ", but that thread no longer exists!")
            } else if ("processQueuedMainThreadWork" === d) kb();
            else if ("spawnThread" === d) lb(c);
            else if ("cleanupThread" ===
              d) fb(c.thread);
            else if ("killThread" === d) c = c.thread, u()[c >> 2] = 0, d = M.i[c], delete M.i[c], d.worker.terminate(), gb(c), M.D.splice(M.D.indexOf(d.worker), 1), d.worker.s = void 0;
            else if ("cancelThread" === d) M.i[c.thread].worker.postMessage({
              cmd: "cancel"
            });
            else if ("loaded" === d) a.loaded = !0, b && b(a), a.C && (a.C(), delete a.C);
            else if ("print" === d) Ba("Thread " + c.threadId + ": " + c.text);
            else if ("printErr" === d) E("Thread " + c.threadId + ": " + c.text);
            else if ("alert" === d) alert("Thread " + c.threadId + ": " + c.text);
            else if ("setimmediate" ===
              c.target) a.postMessage(c);
            else if ("onAbort" === d) {
              if (y.onAbort) y.onAbort(c.arg)
            } else E("worker sent an unknown command " + d);
            M.la = void 0
          };
          a.onerror = c => {
            E("worker sent an error! " + c.filename + ":" + c.lineno + ": " + c.message);
            throw c;
          };
          A && (a.on("message", function (c) {
            a.onmessage({
              data: c
            })
          }), a.on("error", function (c) {
            a.onerror(c)
          }), a.on("detachedExit", function () {}));
          a.postMessage({
            cmd: "load",
            urlOrBlob: y.mainScriptUrlOrBlob || _scriptDir,
            wasmMemory: h,
            wasmModule: Ga
          })
        },
        W: function () {
          var a = ra("skwasm.worker.js");
          M.j.push(new Worker(a))
        },
        oa: function () {
          0 == M.j.length && (M.W(), M.aa(M.j[0]));
          return M.j.pop()
        }
      };
      y.establishStackSpace = function () {
        var a = jb(),
          b = u()[a + 44 >> 2];
        a = u()[a + 48 >> 2];
        mb(b, b - a);
        L(b)
      };

      function nb(a) {
        if (B) return O(1, 0, a);
        try {
          ob(a)
        } catch (b) {
          b instanceof xa || "unwind" == b || pa(1, b)
        }
      }

      function J(a) {
        return Sa.get(a)
      }
      y.invokeEntryPoint = function (a, b) {
        return J(a)(b)
      };
      var pb;
      pb = A ? () => {
        var a = process.hrtime();
        return 1E3 * a[0] + a[1] / 1E6
      } : B ? () => performance.now() - y.__performance_now_clock_drift : () => performance.now();

      function qb(a) {
        this.B = a - 16;
        this.Da = function (b) {
          u()[this.B + 4 >> 2] = b
        };
        this.Aa = function (b) {
          u()[this.B + 8 >> 2] = b
        };
        this.Ba = function () {
          u()[this.B >> 2] = 0
        };
        this.za = function () {
          var b = 0;
          e()[this.B + 12 >> 0] = b
        };
        this.Ca = function () {
          var b = 0;
          e()[this.B + 13 >> 0] = b
        };
        this.qa = function (b, c) {
          this.Da(b);
          this.Aa(c);
          this.Ba();
          this.za();
          this.Ca()
        }
      }
      var rb = 0;

      function lb(a) {
        var b = M.oa();
        if (!b) return 6;
        M.D.push(b);
        var c = M.i[a.S] = {
          worker: b,
          T: a.S
        };
        b.s = c;
        var d = {
          cmd: "run",
          start_routine: a.Ea,
          arg: a.A,
          threadInfoStruct: a.S
        };
        d.o = a.o;
        d.M = a.M;
        b.C = () => {
          d.time = performance.now();
          b.postMessage(d, a.Ja)
        };
        b.loaded && (b.C(), delete b.C);
        return 0
      }
      var sb = {},
        tb = [null, [],
          []
        ],
        ub = {};

      function vb(a, b, c) {
        return B ? O(2, 1, a, b, c) : 0
      }

      function wb(a, b) {
        if (B) return O(3, 1, a, b)
      }

      function xb(a, b, c) {
        return B ? O(4, 1, a, b, c) : 0
      }

      function yb(a, b, c, d, f, g) {
        if (B) b = O(5, 1, a, b, c, d, f, g);
        else if (g <<= 12, 0 !== (d & 16) && 0 !== a % 65536) b = -28;
        else if (0 !== (d & 32)) {
          var k = 65536 * Math.ceil(b / 65536);
          (a = zb(65536, k)) ? r().fill(0, a, a + k): a = 0;
          a ? (sb[a] = {
            va: a,
            ua: b,
            ja: !0,
            fd: f,
            Qa: c,
            flags: d,
            offset: g
          }, b = a) : b = -48
        } else b = -52;
        return b
      }

      function Ab(a, b) {
        if (B) a = O(6, 1, a, b);
        else {
          var c = sb[a];
          0 !== b && c ? (b === c.ua && (sb[a] = null, c.ja && Bb(c.va)), a = 0) : a = -28
        }
        return a
      }

      function Cb(a, b, c) {
        if (B) return O(7, 1, a, b, c)
      }

      function Db(a) {
        var b = a.getExtension("ANGLE_instanced_arrays");
        b && (a.vertexAttribDivisor = function (c, d) {
          b.vertexAttribDivisorANGLE(c, d)
        }, a.drawArraysInstanced = function (c, d, f, g) {
          b.drawArraysInstancedANGLE(c, d, f, g)
        }, a.drawElementsInstanced = function (c, d, f, g, k) {
          b.drawElementsInstancedANGLE(c, d, f, g, k)
        })
      }

      function Eb(a) {
        var b = a.getExtension("OES_vertex_array_object");
        b && (a.createVertexArray = function () {
          return b.createVertexArrayOES()
        }, a.deleteVertexArray = function (c) {
          b.deleteVertexArrayOES(c)
        }, a.bindVertexArray = function (c) {
          b.bindVertexArrayOES(c)
        }, a.isVertexArray = function (c) {
          return b.isVertexArrayOES(c)
        })
      }

      function Fb(a) {
        var b = a.getExtension("WEBGL_draw_buffers");
        b && (a.drawBuffers = function (c, d) {
          b.drawBuffersWEBGL(c, d)
        })
      }
      var Gb = 1,
        Hb = [],
        P = [],
        Ib = [],
        Jb = [],
        Kb = [],
        Q = [],
        R = [],
        Lb = {},
        N = {},
        Mb = [],
        Nb = [],
        Ob = {},
        Pb = {},
        Qb = 4;

      function S(a) {
        Rb || (Rb = a)
      }

      function Sb(a) {
        for (var b = Gb++, c = a.length; c < b; c++) a[c] = null;
        return b
      }

      function Tb(a, b) {
        a.$ || (a.$ = a.getContext, a.getContext = function (d, f) {
          f = a.$(d, f);
          return "webgl" == d == f instanceof WebGLRenderingContext ? f : null
        });
        var c = 1 < b.ba ? a.getContext("webgl2", b) : a.getContext("webgl", b);
        return c ? Ub(c, b) : 0
      }

      function Ub(a, b) {
        var c = Vb(8);
        u()[c + 4 >> 2] = jb();
        var d = {
          Na: c,
          attributes: b,
          version: b.ba,
          v: a
        };
        a.canvas && (a.canvas.H = d);
        Lb[c] = d;
        ("undefined" === typeof b.Z || b.Z) && Wb(d);
        return c
      }

      function Wb(a) {
        a || (a = T);
        if (!a.ra) {
          a.ra = !0;
          var b = a.v;
          Db(b);
          Eb(b);
          Fb(b);
          b.X = b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");
          b.da = b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
          2 <= a.version && (b.Y = b.getExtension("EXT_disjoint_timer_query_webgl2"));
          if (2 > a.version || !b.Y) b.Y = b.getExtension("EXT_disjoint_timer_query");
          b.Pa = b.getExtension("WEBGL_multi_draw");
          (b.getSupportedExtensions() || []).forEach(function (c) {
            c.includes("lose_context") || c.includes("debug") || b.getExtension(c)
          })
        }
      }
      var ib = {},
        Rb, T, Xb = [];

      function Yb(a, b, c, d) {
        for (var f = 0; f < a; f++) {
          var g = U[c](),
            k = g && Sb(d);
          g ? (g.name = k, d[k] = g) : S(1282);
          u()[b + 4 * f >> 2] = k
        }
      }

      function Zb(a, b, c) {
        if (b) {
          var d = void 0;
          switch (a) {
            case 36346:
              d = 1;
              break;
            case 36344:
              0 != c && 1 != c && S(1280);
              return;
            case 34814:
            case 36345:
              d = 0;
              break;
            case 34466:
              var f = U.getParameter(34467);
              d = f ? f.length : 0;
              break;
            case 33309:
              if (2 > T.version) {
                S(1282);
                return
              }
              d = 2 * (U.getSupportedExtensions() || []).length;
              break;
            case 33307:
            case 33308:
              if (2 > T.version) {
                S(1280);
                return
              }
              d = 33307 == a ? 3 : 0
          }
          if (void 0 === d) switch (f = U.getParameter(a), typeof f) {
            case "number":
              d = f;
              break;
            case "boolean":
              d = f ? 1 : 0;
              break;
            case "string":
              S(1280);
              return;
            case "object":
              if (null ===
                f) switch (a) {
                case 34964:
                case 35725:
                case 34965:
                case 36006:
                case 36007:
                case 32873:
                case 34229:
                case 36662:
                case 36663:
                case 35053:
                case 35055:
                case 36010:
                case 35097:
                case 35869:
                case 32874:
                case 36389:
                case 35983:
                case 35368:
                case 34068:
                  d = 0;
                  break;
                default:
                  S(1280);
                  return
              } else {
                if (f instanceof Float32Array || f instanceof Uint32Array || f instanceof Int32Array || f instanceof Array) {
                  for (a = 0; a < f.length; ++a) switch (c) {
                    case 0:
                      u()[b + 4 * a >> 2] = f[a];
                      break;
                    case 2:
                      w()[b + 4 * a >> 2] = f[a];
                      break;
                    case 4:
                      e()[b + a >> 0] = f[a] ? 1 : 0
                  }
                  return
                }
                try {
                  d = f.name |
                    0
                } catch (g) {
                  S(1280);
                  E("GL_INVALID_ENUM in glGet" + c + "v: Unknown object returned from WebGL getParameter(" + a + ")! (error: " + g + ")");
                  return
                }
              }
              break;
            default:
              S(1280);
              E("GL_INVALID_ENUM in glGet" + c + "v: Native code calling glGet" + c + "v(" + a + ") and it returns " + f + " of type " + typeof f + "!");
              return
          }
          switch (c) {
            case 1:
              c = d;
              ea()[b >> 2] = c;
              ea()[b + 4 >> 2] = (c - ea()[b >> 2]) / 4294967296;
              break;
            case 0:
              u()[b >> 2] = d;
              break;
            case 2:
              w()[b >> 2] = d;
              break;
            case 4:
              e()[b >> 0] = d ? 1 : 0
          }
        } else S(1281)
      }

      function $b(a) {
        var b = Na(a) + 1,
          c = Vb(b);
        Ma(a, c, b);
        return c
      }

      function ac(a) {
        return "]" == a.slice(-1) && a.lastIndexOf("[")
      }

      function bc(a) {
        a -= 5120;
        0 == a ? a = e() : 1 == a ? a = r() : 2 == a ? (h.buffer != l && q(h.buffer), a = Pa) : 4 == a ? a = u() : 6 == a ? a = w() : 5 == a || 28922 == a || 28520 == a || 30779 == a || 30782 == a ? a = ea() : (h.buffer != l && q(h.buffer), a = Qa);
        return a
      }

      function cc(a, b, c, d, f) {
        a = bc(a);
        var g = 31 - Math.clz32(a.BYTES_PER_ELEMENT),
          k = Qb;
        return a.subarray(f >> g, f + d * (c * ({
          5: 3,
          6: 4,
          8: 2,
          29502: 3,
          29504: 4,
          26917: 2,
          26918: 2,
          29846: 3,
          29847: 4
        } [b - 6402] || 1) * (1 << g) + k - 1 & -k) >> g)
      }

      function V(a) {
        var b = U.ka;
        if (b) {
          var c = b.G[a];
          "number" === typeof c && (b.G[a] = c = U.getUniformLocation(b, b.ha[a] + (0 < c ? "[" + c + "]" : "")));
          return c
        }
        S(1282)
      }
      var W = [],
        dc = [];

      function O(a, b) {
        var c = arguments.length - 2,
          d = arguments;
        return eb(function () {
          for (var f = ec(8 * c), g = f >> 3, k = 0; k < c; k++) {
            var n = d[2 + k];
            ia()[g + k] = n
          }
          return fc(a, c, f, b)
        })
      }
      var gc = [];

      function hc(a, b, c, d) {
        eb(function () {
          var f = ec(12),
            g = 0;
          b && (g = $b(b));
          u()[f >> 2] = g;
          u()[f + 4 >> 2] = c;
          u()[f + 8 >> 2] = d;
          ic(a, 657457152, 0, g, f)
        })
      }

      function jc(a) {
        a = 2 < a ? F(a) : a;
        return N[a.substr(1)] || "canvas" == a && Object.keys(N)[0] || "undefined" !== typeof document && document.querySelector(a)
      }

      function kc(a, b, c) {
        var d = jc(a);
        if (!d) return -4;
        d.g && (u()[d.g >> 2] = b, u()[d.g + 4 >> 2] = c);
        if (d.l || !d.I) d.l && (d = d.l), a = !1, d.H && d.H.v && (a = d.H.v.getParameter(2978), a = 0 === a[0] && 0 === a[1] && a[2] === d.width && a[3] === d.height), d.width = b, d.height = c, a && d.H.v.viewport(0, 0, b, c);
        else return d.g ? (d = u()[d.g + 8 >> 2], a = a ? F(a) : "", hc(d, a, b, c), 1) : -4;
        return 0
      }

      function lc(a, b, c) {
        return B ? O(8, 1, a, b, c) : kc(a, b, c)
      }
      var mc = ["default", "low-power", "high-performance"];

      function nc(a, b) {
        b >>= 2;
        var c = u()[b + 6];
        b = {
          alpha: !!u()[b],
          depth: !!u()[b + 1],
          stencil: !!u()[b + 2],
          antialias: !!u()[b + 3],
          premultipliedAlpha: !!u()[b + 4],
          preserveDrawingBuffer: !!u()[b + 5],
          powerPreference: mc[c],
          failIfMajorPerformanceCaveat: !!u()[b + 7],
          ba: u()[b + 8],
          Oa: u()[b + 9],
          Z: u()[b + 10],
          na: u()[b + 11],
          Ra: u()[b + 12],
          Sa: u()[b + 13]
        };
        a = jc(a);
        if (!a) return 0;
        a.l && (a = a.l);
        if (b.na) {
          if (!(a.transferControlToOffscreen || "undefined" !== typeof OffscreenCanvas && a instanceof OffscreenCanvas)) return 0;
          if (a.transferControlToOffscreen) {
            if (!a.I) N[a.id] = {
              canvas: a.transferControlToOffscreen(),
              g: Vb(12),
              id: a.id
            }, a.I = !0;
            else if (!N[a.id]) return 0;
            a = N[a.id]
          }
        }
        return Tb(a, b)
      }
      var pc = {};

      function qc() {
        if (!rc) {
          var a = {
              USER: "web_user",
              LOGNAME: "web_user",
              PATH: "/",
              PWD: "/",
              HOME: "/home/web_user",
              LANG: ("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
              _: oa || "./this.program"
            },
            b;
          for (b in pc) void 0 === pc[b] ? delete a[b] : a[b] = pc[b];
          var c = [];
          for (b in a) c.push(b + "=" + a[b]);
          rc = c
        }
        return rc
      }
      var rc;

      function sc(a, b) {
        if (B) return O(9, 1, a, b);
        var c = 0;
        qc().forEach(function (d, f) {
          var g = b + c;
          f = u()[a + 4 * f >> 2] = g;
          for (g = 0; g < d.length; ++g) e()[f++ >> 0] = d.charCodeAt(g);
          e()[f >> 0] = 0;
          c += d.length + 1
        });
        return 0
      }

      function tc(a, b) {
        if (B) return O(10, 1, a, b);
        var c = qc();
        u()[a >> 2] = c.length;
        var d = 0;
        c.forEach(function (f) {
          d += f.length + 1
        });
        u()[b >> 2] = d;
        return 0
      }

      function uc(a) {
        return B ? O(11, 1, a) : 0
      }

      function vc(a, b, c, d, f, g) {
        if (B) return O(12, 1, a, b, c, d, f, g);
        a = ub.pa(a);
        b = ub.ma(a, b, c, d);
        u()[g >> 2] = b;
        return 0
      }

      function wc(a, b, c, d) {
        if (B) return O(13, 1, a, b, c, d);
        a = ub.pa(a);
        b = ub.ma(a, b, c);
        u()[d >> 2] = b;
        return 0
      }

      function xc(a, b, c, d, f) {
        if (B) return O(14, 1, a, b, c, d, f)
      }

      function yc(a, b, c, d) {
        if (B) return O(15, 1, a, b, c, d);
        for (var f = 0, g = 0; g < c; g++) {
          var k = u()[b >> 2],
            n = u()[b + 4 >> 2];
          b += 8;
          for (var p = 0; p < n; p++) {
            var t = r()[k + p],
              v = tb[a];
            0 === t || 10 === t ? ((1 === a ? Ba : E)(Ka(v, 0)), v.length = 0) : v.push(t)
          }
          f += n
        }
        u()[d >> 2] = f;
        return 0
      }

      function zc(a) {
        return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400)
      }

      function Ac(a, b) {
        for (var c = 0, d = 0; d <= b; c += a[d++]);
        return c
      }
      var Bc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Cc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      function Dc(a, b) {
        for (a = new Date(a.getTime()); 0 < b;) {
          var c = a.getMonth(),
            d = (zc(a.getFullYear()) ? Bc : Cc)[c];
          if (b > d - a.getDate()) b -= d - a.getDate() + 1, a.setDate(1), 11 > c ? a.setMonth(c + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
          else {
            a.setDate(a.getDate() + b);
            break
          }
        }
        return a
      }

      function Ec(a, b, c, d) {
        function f(m, x, C) {
          for (m = "number" === typeof m ? m.toString() : m || ""; m.length < x;) m = C[0] + m;
          return m
        }

        function g(m, x) {
          return f(m, x, "0")
        }

        function k(m, x) {
          function C(oc) {
            return 0 > oc ? -1 : 0 < oc ? 1 : 0
          }
          var da;
          0 === (da = C(m.getFullYear() - x.getFullYear())) && 0 === (da = C(m.getMonth() - x.getMonth())) && (da = C(m.getDate() - x.getDate()));
          return da
        }

        function n(m) {
          switch (m.getDay()) {
            case 0:
              return new Date(m.getFullYear() - 1, 11, 29);
            case 1:
              return m;
            case 2:
              return new Date(m.getFullYear(), 0, 3);
            case 3:
              return new Date(m.getFullYear(),
                0, 2);
            case 4:
              return new Date(m.getFullYear(), 0, 1);
            case 5:
              return new Date(m.getFullYear() - 1, 11, 31);
            case 6:
              return new Date(m.getFullYear() - 1, 11, 30)
          }
        }

        function p(m) {
          m = Dc(new Date(m.h + 1900, 0, 1), m.P);
          var x = new Date(m.getFullYear() + 1, 0, 4),
            C = n(new Date(m.getFullYear(), 0, 4));
          x = n(x);
          return 0 >= k(C, m) ? 0 >= k(x, m) ? m.getFullYear() + 1 : m.getFullYear() : m.getFullYear() - 1
        }
        var t = u()[d + 40 >> 2];
        d = {
          Ha: u()[d >> 2],
          Ga: u()[d + 4 >> 2],
          N: u()[d + 8 >> 2],
          F: u()[d + 12 >> 2],
          u: u()[d + 16 >> 2],
          h: u()[d + 20 >> 2],
          O: u()[d + 24 >> 2],
          P: u()[d + 28 >> 2],
          Ua: u()[d + 32 >>
            2],
          Fa: u()[d + 36 >> 2],
          Ia: t ? F(t) : ""
        };
        c = F(c);
        t = {
          "%c": "%a %b %d %H:%M:%S %Y",
          "%D": "%m/%d/%y",
          "%F": "%Y-%m-%d",
          "%h": "%b",
          "%r": "%I:%M:%S %p",
          "%R": "%H:%M",
          "%T": "%H:%M:%S",
          "%x": "%m/%d/%y",
          "%X": "%H:%M:%S",
          "%Ec": "%c",
          "%EC": "%C",
          "%Ex": "%m/%d/%y",
          "%EX": "%H:%M:%S",
          "%Ey": "%y",
          "%EY": "%Y",
          "%Od": "%d",
          "%Oe": "%e",
          "%OH": "%H",
          "%OI": "%I",
          "%Om": "%m",
          "%OM": "%M",
          "%OS": "%S",
          "%Ou": "%u",
          "%OU": "%U",
          "%OV": "%V",
          "%Ow": "%w",
          "%OW": "%W",
          "%Oy": "%y"
        };
        for (var v in t) c = c.replace(new RegExp(v, "g"), t[v]);
        var Y = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          G = "January February March April May June July August September October November December".split(" ");
        t = {
          "%a": function (m) {
            return Y[m.O].substring(0, 3)
          },
          "%A": function (m) {
            return Y[m.O]
          },
          "%b": function (m) {
            return G[m.u].substring(0, 3)
          },
          "%B": function (m) {
            return G[m.u]
          },
          "%C": function (m) {
            return g((m.h + 1900) / 100 | 0, 2)
          },
          "%d": function (m) {
            return g(m.F, 2)
          },
          "%e": function (m) {
            return f(m.F, 2, " ")
          },
          "%g": function (m) {
            return p(m).toString().substring(2)
          },
          "%G": function (m) {
            return p(m)
          },
          "%H": function (m) {
            return g(m.N, 2)
          },
          "%I": function (m) {
            m =
              m.N;
            0 == m ? m = 12 : 12 < m && (m -= 12);
            return g(m, 2)
          },
          "%j": function (m) {
            return g(m.F + Ac(zc(m.h + 1900) ? Bc : Cc, m.u - 1), 3)
          },
          "%m": function (m) {
            return g(m.u + 1, 2)
          },
          "%M": function (m) {
            return g(m.Ga, 2)
          },
          "%n": function () {
            return "\n"
          },
          "%p": function (m) {
            return 0 <= m.N && 12 > m.N ? "AM" : "PM"
          },
          "%S": function (m) {
            return g(m.Ha, 2)
          },
          "%t": function () {
            return "\t"
          },
          "%u": function (m) {
            return m.O || 7
          },
          "%U": function (m) {
            var x = new Date(m.h + 1900, 0, 1),
              C = 0 === x.getDay() ? x : Dc(x, 7 - x.getDay());
            m = new Date(m.h + 1900, m.u, m.F);
            return 0 > k(C, m) ? g(Math.ceil((31 - C.getDate() +
              (Ac(zc(m.getFullYear()) ? Bc : Cc, m.getMonth() - 1) - 31) + m.getDate()) / 7), 2) : 0 === k(C, x) ? "01" : "00"
          },
          "%V": function (m) {
            var x = new Date(m.h + 1901, 0, 4),
              C = n(new Date(m.h + 1900, 0, 4));
            x = n(x);
            var da = Dc(new Date(m.h + 1900, 0, 1), m.P);
            return 0 > k(da, C) ? "53" : 0 >= k(x, da) ? "01" : g(Math.ceil((C.getFullYear() < m.h + 1900 ? m.P + 32 - C.getDate() : m.P + 1 - C.getDate()) / 7), 2)
          },
          "%w": function (m) {
            return m.O
          },
          "%W": function (m) {
            var x = new Date(m.h, 0, 1),
              C = 1 === x.getDay() ? x : Dc(x, 0 === x.getDay() ? 1 : 7 - x.getDay() + 1);
            m = new Date(m.h + 1900, m.u, m.F);
            return 0 > k(C, m) ?
              g(Math.ceil((31 - C.getDate() + (Ac(zc(m.getFullYear()) ? Bc : Cc, m.getMonth() - 1) - 31) + m.getDate()) / 7), 2) : 0 === k(C, x) ? "01" : "00"
          },
          "%y": function (m) {
            return (m.h + 1900).toString().substring(2)
          },
          "%Y": function (m) {
            return m.h + 1900
          },
          "%z": function (m) {
            m = m.Fa;
            var x = 0 <= m;
            m = Math.abs(m) / 60;
            return (x ? "+" : "-") + String("0000" + (m / 60 * 100 + m % 60)).slice(-4)
          },
          "%Z": function (m) {
            return m.Ia
          },
          "%%": function () {
            return "%"
          }
        };
        for (v in t) c.includes(v) && (c = c.replace(new RegExp(v, "g"), t[v](d)));
        v = Fc(c);
        if (v.length > b) return 0;
        Oa(v, a);
        return v.length -
          1
      }
      B || M.sa();
      for (var U, X = 0; 32 > X; ++X) Xb.push(Array(X));
      var Gc = new Float32Array(288);
      for (X = 0; 288 > X; ++X) W[X] = Gc.subarray(0, X + 1);
      var Hc = new Int32Array(288);
      for (X = 0; 288 > X; ++X) dc[X] = Hc.subarray(0, X + 1);
      var Ic = [null, nb, vb, wb, xb, yb, Ab, Cb, lc, sc, tc, uc, vc, wc, xc, yc];

      function Fc(a) {
        var b = Array(Na(a) + 1);
        La(a, b, 0, b.length);
        return b
      }
      var bd = {
        __cxa_allocate_exception: function (a) {
          return Vb(a + 16) + 16
        },
        __cxa_throw: function (a, b, c) {
          (new qb(a)).qa(b, c);
          rb++;
          throw a;
        },
        __emscripten_init_main_thread_js: function (a) {
          Jc(a, !z, 1, !qa);
          M.ga()
        },
        __emscripten_thread_cleanup: function (a) {
          B ? postMessage({
            cmd: "cleanupThread",
            thread: a
          }) : fb(a)
        },
        __pthread_create_js: function (a, b, c, d) {
          if ("undefined" === typeof SharedArrayBuffer) return E("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
          var f = [],
            g = 0,
            k = b ? u()[b + 40 >> 2] : 0; - 1 ==
            k ? k = "#canvas" : k && (k = F(k).trim());
          k && (k = k.split(","));
          var n = {},
            p = y.canvas ? y.canvas.id : "",
            t;
          for (t in k) {
            var v = k[t].trim();
            try {
              if ("#canvas" == v) {
                if (!y.canvas) {
                  E('pthread_create: could not find canvas with ID "' + v + '" to transfer to thread!');
                  g = 28;
                  break
                }
                v = y.canvas.id
              }
              if (N[v]) {
                var Y = N[v];
                N[v] = null;
                y.canvas instanceof OffscreenCanvas && v === y.canvas.id && (y.canvas = null)
              } else if (!B) {
                var G = y.canvas && y.canvas.id === v ? y.canvas : document.querySelector(v);
                if (!G) {
                  E('pthread_create: could not find canvas with ID "' + v +
                    '" to transfer to thread!');
                  g = 28;
                  break
                }
                if (G.I) {
                  E('pthread_create: cannot transfer canvas with ID "' + v + '" to thread, since the current thread does not have control over it!');
                  g = 63;
                  break
                }
                if (G.transferControlToOffscreen) G.g || (G.g = Vb(12), u()[G.g >> 2] = G.width, u()[G.g + 4 >> 2] = G.height, u()[G.g + 8 >> 2] = 0), Y = {
                  l: G.transferControlToOffscreen(),
                  g: G.g,
                  id: G.id
                }, G.I = !0;
                else return E('pthread_create: cannot transfer control of canvas "' + v + '" to pthread, because current browser does not support OffscreenCanvas!'), E("pthread_create: Build with -s OFFSCREEN_FRAMEBUFFER=1 to enable fallback proxying of GL commands from pthread to main thread."),
                  52
              }
              Y && (f.push(Y.l), n[Y.id] = Y)
            } catch (m) {
              return E('pthread_create: failed to transfer control of canvas "' + v + '" to OffscreenCanvas! Error: ' + m), 28
            }
          }
          if (B && (0 === f.length || g)) return Kc(687865856, a, b, c, d);
          if (g) return g;
          for (t in n) u()[n[t].g + 8 >> 2] = a;
          a = {
            Ea: c,
            S: a,
            A: d,
            o: p,
            M: n,
            Ja: f
          };
          return B ? (a.Ka = "spawnThread", postMessage(a, f), 0) : lb(a)
        },
        __syscall_fcntl64: vb,
        __syscall_fstat64: wb,
        __syscall_ioctl: xb,
        __syscall_mmap2: yb,
        __syscall_munmap: Ab,
        __syscall_open: Cb,
        _emscripten_default_pthread_stack_size: function () {
          return 2097152
        },
        _emscripten_futex_wait_non_blocking: function (a, b, c) {
          var d = performance.now();
          c = d + c;
          for (Atomics.exchange(u(), Lc >> 2, a);;) {
            d = performance.now();
            if (d > c) return Atomics.exchange(u(), Lc >> 2, 0), -73;
            d = Atomics.exchange(u(), Lc >> 2, 0);
            if (0 == d) break;
            kb();
            if (Atomics.load(u(), a >> 2) != b) return -6;
            Atomics.exchange(u(), Lc >> 2, a)
          }
          return 0
        },
        _emscripten_notify_thread_queue: function (a, b) {
          if (a == b) postMessage({
            cmd: "processQueuedMainThreadWork"
          });
          else if (B) postMessage({
            targetThread: a,
            cmd: "processThreadQueue"
          });
          else {
            a = (a = M.i[a]) &&
              a.worker;
            if (!a) return;
            a.postMessage({
              cmd: "processThreadQueue"
            })
          }
          return 1
        },
        _emscripten_throw_longjmp: function () {
          throw "longjmp";
        },
        abort: function () {
          Fa("")
        },
        clock_gettime: function (a, b) {
          if (0 === a) a = Date.now();
          else if (1 === a || 4 === a) a = pb();
          else return u()[Mc() >> 2] = 28, -1;
          u()[b >> 2] = a / 1E3 | 0;
          u()[b + 4 >> 2] = a % 1E3 * 1E6 | 0;
          return 0
        },
        emscripten_check_blocking_allowed: function () {
          A || z || (Ca || (Ca = {}), Ca["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] ||
            (Ca["Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread"] = 1, E("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")))
        },
        emscripten_get_now: pb,
        emscripten_glActiveTexture: function (a) {
          U.activeTexture(a)
        },
        emscripten_glAttachShader: function (a, b) {
          U.attachShader(P[a], Q[b])
        },
        emscripten_glBindAttribLocation: function (a, b, c) {
          U.bindAttribLocation(P[a],
            b, F(c))
        },
        emscripten_glBindBuffer: function (a, b) {
          35051 == a ? U.R = b : 35052 == a && (U.m = b);
          U.bindBuffer(a, Hb[b])
        },
        emscripten_glBindFramebuffer: function (a, b) {
          U.bindFramebuffer(a, Ib[b])
        },
        emscripten_glBindRenderbuffer: function (a, b) {
          U.bindRenderbuffer(a, Jb[b])
        },
        emscripten_glBindSampler: function (a, b) {
          U.bindSampler(a, Mb[b])
        },
        emscripten_glBindTexture: function (a, b) {
          U.bindTexture(a, Kb[b])
        },
        emscripten_glBindVertexArray: function (a) {
          U.bindVertexArray(R[a])
        },
        emscripten_glBindVertexArrayOES: function (a) {
          U.bindVertexArray(R[a])
        },
        emscripten_glBlendColor: function (a, b, c, d) {
          U.blendColor(a, b, c, d)
        },
        emscripten_glBlendEquation: function (a) {
          U.blendEquation(a)
        },
        emscripten_glBlendFunc: function (a, b) {
          U.blendFunc(a, b)
        },
        emscripten_glBlitFramebuffer: function (a, b, c, d, f, g, k, n, p, t) {
          U.blitFramebuffer(a, b, c, d, f, g, k, n, p, t)
        },
        emscripten_glBufferData: function (a, b, c, d) {
          2 <= T.version ? c ? U.bufferData(a, r(), d, c, b) : U.bufferData(a, b, d) : U.bufferData(a, c ? r().subarray(c, c + b) : b, d)
        },
        emscripten_glBufferSubData: function (a, b, c, d) {
          2 <= T.version ? U.bufferSubData(a, b,
            r(), d, c) : U.bufferSubData(a, b, r().subarray(d, d + c))
        },
        emscripten_glCheckFramebufferStatus: function (a) {
          return U.checkFramebufferStatus(a)
        },
        emscripten_glClear: function (a) {
          U.clear(a)
        },
        emscripten_glClearColor: function (a, b, c, d) {
          U.clearColor(a, b, c, d)
        },
        emscripten_glClearStencil: function (a) {
          U.clearStencil(a)
        },
        emscripten_glClientWaitSync: function (a, b, c, d) {
          return U.clientWaitSync(Nb[a], b, (c >>> 0) + 4294967296 * d)
        },
        emscripten_glColorMask: function (a, b, c, d) {
          U.colorMask(!!a, !!b, !!c, !!d)
        },
        emscripten_glCompileShader: function (a) {
          U.compileShader(Q[a])
        },
        emscripten_glCompressedTexImage2D: function (a, b, c, d, f, g, k, n) {
          2 <= T.version ? U.m ? U.compressedTexImage2D(a, b, c, d, f, g, k, n) : U.compressedTexImage2D(a, b, c, d, f, g, r(), n, k) : U.compressedTexImage2D(a, b, c, d, f, g, n ? r().subarray(n, n + k) : null)
        },
        emscripten_glCompressedTexSubImage2D: function (a, b, c, d, f, g, k, n, p) {
          2 <= T.version ? U.m ? U.compressedTexSubImage2D(a, b, c, d, f, g, k, n, p) : U.compressedTexSubImage2D(a, b, c, d, f, g, k, r(), p, n) : U.compressedTexSubImage2D(a, b, c, d, f, g, k, p ? r().subarray(p, p + n) : null)
        },
        emscripten_glCopyBufferSubData: function (a,
          b, c, d, f) {
          U.copyBufferSubData(a, b, c, d, f)
        },
        emscripten_glCopyTexSubImage2D: function (a, b, c, d, f, g, k, n) {
          U.copyTexSubImage2D(a, b, c, d, f, g, k, n)
        },
        emscripten_glCreateProgram: function () {
          var a = Sb(P),
            b = U.createProgram();
          b.name = a;
          b.L = b.J = b.K = 0;
          b.V = 1;
          P[a] = b;
          return a
        },
        emscripten_glCreateShader: function (a) {
          var b = Sb(Q);
          Q[b] = U.createShader(a);
          return b
        },
        emscripten_glCullFace: function (a) {
          U.cullFace(a)
        },
        emscripten_glDeleteBuffers: function (a, b) {
          for (var c = 0; c < a; c++) {
            var d = u()[b + 4 * c >> 2],
              f = Hb[d];
            f && (U.deleteBuffer(f), f.name =
              0, Hb[d] = null, d == U.R && (U.R = 0), d == U.m && (U.m = 0))
          }
        },
        emscripten_glDeleteFramebuffers: function (a, b) {
          for (var c = 0; c < a; ++c) {
            var d = u()[b + 4 * c >> 2],
              f = Ib[d];
            f && (U.deleteFramebuffer(f), f.name = 0, Ib[d] = null)
          }
        },
        emscripten_glDeleteProgram: function (a) {
          if (a) {
            var b = P[a];
            b ? (U.deleteProgram(b), b.name = 0, P[a] = null) : S(1281)
          }
        },
        emscripten_glDeleteRenderbuffers: function (a, b) {
          for (var c = 0; c < a; c++) {
            var d = u()[b + 4 * c >> 2],
              f = Jb[d];
            f && (U.deleteRenderbuffer(f), f.name = 0, Jb[d] = null)
          }
        },
        emscripten_glDeleteSamplers: function (a, b) {
          for (var c = 0; c <
            a; c++) {
            var d = u()[b + 4 * c >> 2],
              f = Mb[d];
            f && (U.deleteSampler(f), f.name = 0, Mb[d] = null)
          }
        },
        emscripten_glDeleteShader: function (a) {
          if (a) {
            var b = Q[a];
            b ? (U.deleteShader(b), Q[a] = null) : S(1281)
          }
        },
        emscripten_glDeleteSync: function (a) {
          if (a) {
            var b = Nb[a];
            b ? (U.deleteSync(b), b.name = 0, Nb[a] = null) : S(1281)
          }
        },
        emscripten_glDeleteTextures: function (a, b) {
          for (var c = 0; c < a; c++) {
            var d = u()[b + 4 * c >> 2],
              f = Kb[d];
            f && (U.deleteTexture(f), f.name = 0, Kb[d] = null)
          }
        },
        emscripten_glDeleteVertexArrays: function (a, b) {
          for (var c = 0; c < a; c++) {
            var d = u()[b + 4 * c >>
              2];
            U.deleteVertexArray(R[d]);
            R[d] = null
          }
        },
        emscripten_glDeleteVertexArraysOES: function (a, b) {
          for (var c = 0; c < a; c++) {
            var d = u()[b + 4 * c >> 2];
            U.deleteVertexArray(R[d]);
            R[d] = null
          }
        },
        emscripten_glDepthMask: function (a) {
          U.depthMask(!!a)
        },
        emscripten_glDisable: function (a) {
          U.disable(a)
        },
        emscripten_glDisableVertexAttribArray: function (a) {
          U.disableVertexAttribArray(a)
        },
        emscripten_glDrawArrays: function (a, b, c) {
          U.drawArrays(a, b, c)
        },
        emscripten_glDrawArraysInstanced: function (a, b, c, d) {
          U.drawArraysInstanced(a, b, c, d)
        },
        emscripten_glDrawArraysInstancedBaseInstanceWEBGL: function (a,
          b, c, d, f) {
          U.X.drawArraysInstancedBaseInstanceWEBGL(a, b, c, d, f)
        },
        emscripten_glDrawBuffers: function (a, b) {
          for (var c = Xb[a], d = 0; d < a; d++) c[d] = u()[b + 4 * d >> 2];
          U.drawBuffers(c)
        },
        emscripten_glDrawElements: function (a, b, c, d) {
          U.drawElements(a, b, c, d)
        },
        emscripten_glDrawElementsInstanced: function (a, b, c, d, f) {
          U.drawElementsInstanced(a, b, c, d, f)
        },
        emscripten_glDrawElementsInstancedBaseVertexBaseInstanceWEBGL: function (a, b, c, d, f, g, k) {
          U.X.drawElementsInstancedBaseVertexBaseInstanceWEBGL(a, b, c, d, f, g, k)
        },
        emscripten_glDrawRangeElements: function (a,
          b, c, d, f, g) {
          U.drawElements(a, d, f, g)
        },
        emscripten_glEnable: function (a) {
          U.enable(a)
        },
        emscripten_glEnableVertexAttribArray: function (a) {
          U.enableVertexAttribArray(a)
        },
        emscripten_glFenceSync: function (a, b) {
          return (a = U.fenceSync(a, b)) ? (b = Sb(Nb), a.name = b, Nb[b] = a, b) : 0
        },
        emscripten_glFinish: function () {
          U.finish()
        },
        emscripten_glFlush: function () {
          U.flush()
        },
        emscripten_glFramebufferRenderbuffer: function (a, b, c, d) {
          U.framebufferRenderbuffer(a, b, c, Jb[d])
        },
        emscripten_glFramebufferTexture2D: function (a, b, c, d, f) {
          U.framebufferTexture2D(a,
            b, c, Kb[d], f)
        },
        emscripten_glFrontFace: function (a) {
          U.frontFace(a)
        },
        emscripten_glGenBuffers: function (a, b) {
          Yb(a, b, "createBuffer", Hb)
        },
        emscripten_glGenFramebuffers: function (a, b) {
          Yb(a, b, "createFramebuffer", Ib)
        },
        emscripten_glGenRenderbuffers: function (a, b) {
          Yb(a, b, "createRenderbuffer", Jb)
        },
        emscripten_glGenSamplers: function (a, b) {
          Yb(a, b, "createSampler", Mb)
        },
        emscripten_glGenTextures: function (a, b) {
          Yb(a, b, "createTexture", Kb)
        },
        emscripten_glGenVertexArrays: function (a, b) {
          Yb(a, b, "createVertexArray", R)
        },
        emscripten_glGenVertexArraysOES: function (a,
          b) {
          Yb(a, b, "createVertexArray", R)
        },
        emscripten_glGenerateMipmap: function (a) {
          U.generateMipmap(a)
        },
        emscripten_glGetBufferParameteriv: function (a, b, c) {
          c ? u()[c >> 2] = U.getBufferParameter(a, b) : S(1281)
        },
        emscripten_glGetError: function () {
          var a = U.getError() || Rb;
          Rb = 0;
          return a
        },
        emscripten_glGetFloatv: function (a, b) {
          Zb(a, b, 2)
        },
        emscripten_glGetFramebufferAttachmentParameteriv: function (a, b, c, d) {
          a = U.getFramebufferAttachmentParameter(a, b, c);
          if (a instanceof WebGLRenderbuffer || a instanceof WebGLTexture) a = a.name | 0;
          u()[d >>
            2] = a
        },
        emscripten_glGetIntegerv: function (a, b) {
          Zb(a, b, 0)
        },
        emscripten_glGetProgramInfoLog: function (a, b, c, d) {
          a = U.getProgramInfoLog(P[a]);
          null === a && (a = "(unknown error)");
          b = 0 < b && d ? Ma(a, d, b) : 0;
          c && (u()[c >> 2] = b)
        },
        emscripten_glGetProgramiv: function (a, b, c) {
          if (c)
            if (a >= Gb) S(1281);
            else if (a = P[a], 35716 == b) a = U.getProgramInfoLog(a), null === a && (a = "(unknown error)"), u()[c >> 2] = a.length + 1;
          else if (35719 == b) {
            if (!a.L)
              for (b = 0; b < U.getProgramParameter(a, 35718); ++b) a.L = Math.max(a.L, U.getActiveUniform(a, b).name.length + 1);
            u()[c >>
              2] = a.L
          } else if (35722 == b) {
            if (!a.J)
              for (b = 0; b < U.getProgramParameter(a, 35721); ++b) a.J = Math.max(a.J, U.getActiveAttrib(a, b).name.length + 1);
            u()[c >> 2] = a.J
          } else if (35381 == b) {
            if (!a.K)
              for (b = 0; b < U.getProgramParameter(a, 35382); ++b) a.K = Math.max(a.K, U.getActiveUniformBlockName(a, b).length + 1);
            u()[c >> 2] = a.K
          } else u()[c >> 2] = U.getProgramParameter(a, b);
          else S(1281)
        },
        emscripten_glGetRenderbufferParameteriv: function (a, b, c) {
          c ? u()[c >> 2] = U.getRenderbufferParameter(a, b) : S(1281)
        },
        emscripten_glGetShaderInfoLog: function (a, b, c,
          d) {
          a = U.getShaderInfoLog(Q[a]);
          null === a && (a = "(unknown error)");
          b = 0 < b && d ? Ma(a, d, b) : 0;
          c && (u()[c >> 2] = b)
        },
        emscripten_glGetShaderPrecisionFormat: function (a, b, c, d) {
          a = U.getShaderPrecisionFormat(a, b);
          u()[c >> 2] = a.rangeMin;
          u()[c + 4 >> 2] = a.rangeMax;
          u()[d >> 2] = a.precision
        },
        emscripten_glGetShaderiv: function (a, b, c) {
          c ? 35716 == b ? (a = U.getShaderInfoLog(Q[a]), null === a && (a = "(unknown error)"), a = a ? a.length + 1 : 0, u()[c >> 2] = a) : 35720 == b ? (a = (a = U.getShaderSource(Q[a])) ? a.length + 1 : 0, u()[c >> 2] = a) : u()[c >> 2] = U.getShaderParameter(Q[a],
            b) : S(1281)
        },
        emscripten_glGetString: function (a) {
          var b = Ob[a];
          if (!b) {
            switch (a) {
              case 7939:
                b = U.getSupportedExtensions() || [];
                b = b.concat(b.map(function (d) {
                  return "GL_" + d
                }));
                b = $b(b.join(" "));
                break;
              case 7936:
              case 7937:
              case 37445:
              case 37446:
                (b = U.getParameter(a)) || S(1280);
                b = b && $b(b);
                break;
              case 7938:
                b = U.getParameter(7938);
                b = 2 <= T.version ? "OpenGL ES 3.0 (" + b + ")" : "OpenGL ES 2.0 (" + b + ")";
                b = $b(b);
                break;
              case 35724:
                b = U.getParameter(35724);
                var c = b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
                null !== c && (3 == c[1].length &&
                  (c[1] += "0"), b = "OpenGL ES GLSL ES " + c[1] + " (" + b + ")");
                b = $b(b);
                break;
              default:
                S(1280)
            }
            Ob[a] = b
          }
          return b
        },
        emscripten_glGetStringi: function (a, b) {
          if (2 > T.version) return S(1282), 0;
          var c = Pb[a];
          if (c) return 0 > b || b >= c.length ? (S(1281), 0) : c[b];
          switch (a) {
            case 7939:
              return c = U.getSupportedExtensions() || [], c = c.concat(c.map(function (d) {
                return "GL_" + d
              })), c = c.map(function (d) {
                return $b(d)
              }), c = Pb[a] = c, 0 > b || b >= c.length ? (S(1281), 0) : c[b];
            default:
              return S(1280), 0
          }
        },
        emscripten_glGetUniformLocation: function (a, b) {
          b = F(b);
          if (a = P[a]) {
            var c =
              a,
              d = c.G,
              f = c.ia,
              g;
            if (!d)
              for (c.G = d = {}, c.ha = {}, g = 0; g < U.getProgramParameter(c, 35718); ++g) {
                var k = U.getActiveUniform(c, g);
                var n = k.name;
                k = k.size;
                var p = ac(n);
                p = 0 < p ? n.slice(0, p) : n;
                var t = c.V;
                c.V += k;
                f[p] = [k, t];
                for (n = 0; n < k; ++n) d[t] = n, c.ha[t++] = p
              }
            c = a.G;
            d = 0;
            f = b;
            g = ac(b);
            0 < g && (d = parseInt(b.slice(g + 1)) >>> 0, f = b.slice(0, g));
            if ((f = a.ia[f]) && d < f[0] && (d += f[1], c[d] = c[d] || U.getUniformLocation(a, b))) return d
          } else S(1281);
          return -1
        },
        emscripten_glInvalidateFramebuffer: function (a, b, c) {
          for (var d = Xb[b], f = 0; f < b; f++) d[f] = u()[c + 4 *
            f >> 2];
          U.invalidateFramebuffer(a, d)
        },
        emscripten_glInvalidateSubFramebuffer: function (a, b, c, d, f, g, k) {
          for (var n = Xb[b], p = 0; p < b; p++) n[p] = u()[c + 4 * p >> 2];
          U.invalidateSubFramebuffer(a, n, d, f, g, k)
        },
        emscripten_glIsSync: function (a) {
          return U.isSync(Nb[a])
        },
        emscripten_glIsTexture: function (a) {
          return (a = Kb[a]) ? U.isTexture(a) : 0
        },
        emscripten_glLineWidth: function (a) {
          U.lineWidth(a)
        },
        emscripten_glLinkProgram: function (a) {
          a = P[a];
          U.linkProgram(a);
          a.G = 0;
          a.ia = {}
        },
        emscripten_glMultiDrawArraysInstancedBaseInstanceWEBGL: function (a,
          b, c, d, f, g) {
          U.da.multiDrawArraysInstancedBaseInstanceWEBGL(a, u(), b >> 2, u(), c >> 2, u(), d >> 2, ea(), f >> 2, g)
        },
        emscripten_glMultiDrawElementsInstancedBaseVertexBaseInstanceWEBGL: function (a, b, c, d, f, g, k, n) {
          U.da.multiDrawElementsInstancedBaseVertexBaseInstanceWEBGL(a, u(), b >> 2, c, u(), d >> 2, u(), f >> 2, u(), g >> 2, ea(), k >> 2, n)
        },
        emscripten_glPixelStorei: function (a, b) {
          3317 == a && (Qb = b);
          U.pixelStorei(a, b)
        },
        emscripten_glReadBuffer: function (a) {
          U.readBuffer(a)
        },
        emscripten_glReadPixels: function (a, b, c, d, f, g, k) {
          if (2 <= T.version)
            if (U.R) U.readPixels(a,
              b, c, d, f, g, k);
            else {
              var n = bc(g);
              U.readPixels(a, b, c, d, f, g, n, k >> 31 - Math.clz32(n.BYTES_PER_ELEMENT))
            }
          else(k = cc(g, f, c, d, k)) ? U.readPixels(a, b, c, d, f, g, k) : S(1280)
        },
        emscripten_glRenderbufferStorage: function (a, b, c, d) {
          U.renderbufferStorage(a, b, c, d)
        },
        emscripten_glRenderbufferStorageMultisample: function (a, b, c, d, f) {
          U.renderbufferStorageMultisample(a, b, c, d, f)
        },
        emscripten_glSamplerParameterf: function (a, b, c) {
          U.samplerParameterf(Mb[a], b, c)
        },
        emscripten_glSamplerParameteri: function (a, b, c) {
          U.samplerParameteri(Mb[a], b,
            c)
        },
        emscripten_glSamplerParameteriv: function (a, b, c) {
          c = u()[c >> 2];
          U.samplerParameteri(Mb[a], b, c)
        },
        emscripten_glScissor: function (a, b, c, d) {
          U.scissor(a, b, c, d)
        },
        emscripten_glShaderSource: function (a, b, c, d) {
          for (var f = "", g = 0; g < b; ++g) {
            var k = d ? u()[d + 4 * g >> 2] : -1;
            f += F(u()[c + 4 * g >> 2], 0 > k ? void 0 : k)
          }
          U.shaderSource(Q[a], f)
        },
        emscripten_glStencilFunc: function (a, b, c) {
          U.stencilFunc(a, b, c)
        },
        emscripten_glStencilFuncSeparate: function (a, b, c, d) {
          U.stencilFuncSeparate(a, b, c, d)
        },
        emscripten_glStencilMask: function (a) {
          U.stencilMask(a)
        },
        emscripten_glStencilMaskSeparate: function (a, b) {
          U.stencilMaskSeparate(a, b)
        },
        emscripten_glStencilOp: function (a, b, c) {
          U.stencilOp(a, b, c)
        },
        emscripten_glStencilOpSeparate: function (a, b, c, d) {
          U.stencilOpSeparate(a, b, c, d)
        },
        emscripten_glTexImage2D: function (a, b, c, d, f, g, k, n, p) {
          if (2 <= T.version)
            if (U.m) U.texImage2D(a, b, c, d, f, g, k, n, p);
            else if (p) {
            var t = bc(n);
            U.texImage2D(a, b, c, d, f, g, k, n, t, p >> 31 - Math.clz32(t.BYTES_PER_ELEMENT))
          } else U.texImage2D(a, b, c, d, f, g, k, n, null);
          else U.texImage2D(a, b, c, d, f, g, k, n, p ? cc(n, k, d, f, p) :
            null)
        },
        emscripten_glTexParameterf: function (a, b, c) {
          U.texParameterf(a, b, c)
        },
        emscripten_glTexParameterfv: function (a, b, c) {
          c = w()[c >> 2];
          U.texParameterf(a, b, c)
        },
        emscripten_glTexParameteri: function (a, b, c) {
          U.texParameteri(a, b, c)
        },
        emscripten_glTexParameteriv: function (a, b, c) {
          c = u()[c >> 2];
          U.texParameteri(a, b, c)
        },
        emscripten_glTexStorage2D: function (a, b, c, d, f) {
          U.texStorage2D(a, b, c, d, f)
        },
        emscripten_glTexSubImage2D: function (a, b, c, d, f, g, k, n, p) {
          if (2 <= T.version)
            if (U.m) U.texSubImage2D(a, b, c, d, f, g, k, n, p);
            else if (p) {
            var t =
              bc(n);
            U.texSubImage2D(a, b, c, d, f, g, k, n, t, p >> 31 - Math.clz32(t.BYTES_PER_ELEMENT))
          } else U.texSubImage2D(a, b, c, d, f, g, k, n, null);
          else t = null, p && (t = cc(n, k, f, g, p)), U.texSubImage2D(a, b, c, d, f, g, k, n, t)
        },
        emscripten_glUniform1f: function (a, b) {
          U.uniform1f(V(a), b)
        },
        emscripten_glUniform1fv: function (a, b, c) {
          if (2 <= T.version) U.uniform1fv(V(a), w(), c >> 2, b);
          else {
            if (288 >= b)
              for (var d = W[b - 1], f = 0; f < b; ++f) d[f] = w()[c + 4 * f >> 2];
            else d = w().subarray(c >> 2, c + 4 * b >> 2);
            U.uniform1fv(V(a), d)
          }
        },
        emscripten_glUniform1i: function (a, b) {
          U.uniform1i(V(a),
            b)
        },
        emscripten_glUniform1iv: function (a, b, c) {
          if (2 <= T.version) U.uniform1iv(V(a), u(), c >> 2, b);
          else {
            if (288 >= b)
              for (var d = dc[b - 1], f = 0; f < b; ++f) d[f] = u()[c + 4 * f >> 2];
            else d = u().subarray(c >> 2, c + 4 * b >> 2);
            U.uniform1iv(V(a), d)
          }
        },
        emscripten_glUniform2f: function (a, b, c) {
          U.uniform2f(V(a), b, c)
        },
        emscripten_glUniform2fv: function (a, b, c) {
          if (2 <= T.version) U.uniform2fv(V(a), w(), c >> 2, 2 * b);
          else {
            if (144 >= b)
              for (var d = W[2 * b - 1], f = 0; f < 2 * b; f += 2) d[f] = w()[c + 4 * f >> 2], d[f + 1] = w()[c + (4 * f + 4) >> 2];
            else d = w().subarray(c >> 2, c + 8 * b >> 2);
            U.uniform2fv(V(a),
              d)
          }
        },
        emscripten_glUniform2i: function (a, b, c) {
          U.uniform2i(V(a), b, c)
        },
        emscripten_glUniform2iv: function (a, b, c) {
          if (2 <= T.version) U.uniform2iv(V(a), u(), c >> 2, 2 * b);
          else {
            if (144 >= b)
              for (var d = dc[2 * b - 1], f = 0; f < 2 * b; f += 2) d[f] = u()[c + 4 * f >> 2], d[f + 1] = u()[c + (4 * f + 4) >> 2];
            else d = u().subarray(c >> 2, c + 8 * b >> 2);
            U.uniform2iv(V(a), d)
          }
        },
        emscripten_glUniform3f: function (a, b, c, d) {
          U.uniform3f(V(a), b, c, d)
        },
        emscripten_glUniform3fv: function (a, b, c) {
          if (2 <= T.version) U.uniform3fv(V(a), w(), c >> 2, 3 * b);
          else {
            if (96 >= b)
              for (var d = W[3 * b - 1], f = 0; f < 3 *
                b; f += 3) d[f] = w()[c + 4 * f >> 2], d[f + 1] = w()[c + (4 * f + 4) >> 2], d[f + 2] = w()[c + (4 * f + 8) >> 2];
            else d = w().subarray(c >> 2, c + 12 * b >> 2);
            U.uniform3fv(V(a), d)
          }
        },
        emscripten_glUniform3i: function (a, b, c, d) {
          U.uniform3i(V(a), b, c, d)
        },
        emscripten_glUniform3iv: function (a, b, c) {
          if (2 <= T.version) U.uniform3iv(V(a), u(), c >> 2, 3 * b);
          else {
            if (96 >= b)
              for (var d = dc[3 * b - 1], f = 0; f < 3 * b; f += 3) d[f] = u()[c + 4 * f >> 2], d[f + 1] = u()[c + (4 * f + 4) >> 2], d[f + 2] = u()[c + (4 * f + 8) >> 2];
            else d = u().subarray(c >> 2, c + 12 * b >> 2);
            U.uniform3iv(V(a), d)
          }
        },
        emscripten_glUniform4f: function (a, b,
          c, d, f) {
          U.uniform4f(V(a), b, c, d, f)
        },
        emscripten_glUniform4fv: function (a, b, c) {
          if (2 <= T.version) U.uniform4fv(V(a), w(), c >> 2, 4 * b);
          else {
            if (72 >= b) {
              var d = W[4 * b - 1],
                f = w();
              c >>= 2;
              for (var g = 0; g < 4 * b; g += 4) {
                var k = c + g;
                d[g] = f[k];
                d[g + 1] = f[k + 1];
                d[g + 2] = f[k + 2];
                d[g + 3] = f[k + 3]
              }
            } else d = w().subarray(c >> 2, c + 16 * b >> 2);
            U.uniform4fv(V(a), d)
          }
        },
        emscripten_glUniform4i: function (a, b, c, d, f) {
          U.uniform4i(V(a), b, c, d, f)
        },
        emscripten_glUniform4iv: function (a, b, c) {
          if (2 <= T.version) U.uniform4iv(V(a), u(), c >> 2, 4 * b);
          else {
            if (72 >= b)
              for (var d = dc[4 * b - 1],
                  f = 0; f < 4 * b; f += 4) d[f] = u()[c + 4 * f >> 2], d[f + 1] = u()[c + (4 * f + 4) >> 2], d[f + 2] = u()[c + (4 * f + 8) >> 2], d[f + 3] = u()[c + (4 * f + 12) >> 2];
            else d = u().subarray(c >> 2, c + 16 * b >> 2);
            U.uniform4iv(V(a), d)
          }
        },
        emscripten_glUniformMatrix2fv: function (a, b, c, d) {
          if (2 <= T.version) U.uniformMatrix2fv(V(a), !!c, w(), d >> 2, 4 * b);
          else {
            if (72 >= b)
              for (var f = W[4 * b - 1], g = 0; g < 4 * b; g += 4) f[g] = w()[d + 4 * g >> 2], f[g + 1] = w()[d + (4 * g + 4) >> 2], f[g + 2] = w()[d + (4 * g + 8) >> 2], f[g + 3] = w()[d + (4 * g + 12) >> 2];
            else f = w().subarray(d >> 2, d + 16 * b >> 2);
            U.uniformMatrix2fv(V(a), !!c, f)
          }
        },
        emscripten_glUniformMatrix3fv: function (a,
          b, c, d) {
          if (2 <= T.version) U.uniformMatrix3fv(V(a), !!c, w(), d >> 2, 9 * b);
          else {
            if (32 >= b)
              for (var f = W[9 * b - 1], g = 0; g < 9 * b; g += 9) f[g] = w()[d + 4 * g >> 2], f[g + 1] = w()[d + (4 * g + 4) >> 2], f[g + 2] = w()[d + (4 * g + 8) >> 2], f[g + 3] = w()[d + (4 * g + 12) >> 2], f[g + 4] = w()[d + (4 * g + 16) >> 2], f[g + 5] = w()[d + (4 * g + 20) >> 2], f[g + 6] = w()[d + (4 * g + 24) >> 2], f[g + 7] = w()[d + (4 * g + 28) >> 2], f[g + 8] = w()[d + (4 * g + 32) >> 2];
            else f = w().subarray(d >> 2, d + 36 * b >> 2);
            U.uniformMatrix3fv(V(a), !!c, f)
          }
        },
        emscripten_glUniformMatrix4fv: function (a, b, c, d) {
          if (2 <= T.version) U.uniformMatrix4fv(V(a), !!c, w(),
            d >> 2, 16 * b);
          else {
            if (18 >= b) {
              var f = W[16 * b - 1],
                g = w();
              d >>= 2;
              for (var k = 0; k < 16 * b; k += 16) {
                var n = d + k;
                f[k] = g[n];
                f[k + 1] = g[n + 1];
                f[k + 2] = g[n + 2];
                f[k + 3] = g[n + 3];
                f[k + 4] = g[n + 4];
                f[k + 5] = g[n + 5];
                f[k + 6] = g[n + 6];
                f[k + 7] = g[n + 7];
                f[k + 8] = g[n + 8];
                f[k + 9] = g[n + 9];
                f[k + 10] = g[n + 10];
                f[k + 11] = g[n + 11];
                f[k + 12] = g[n + 12];
                f[k + 13] = g[n + 13];
                f[k + 14] = g[n + 14];
                f[k + 15] = g[n + 15]
              }
            } else f = w().subarray(d >> 2, d + 64 * b >> 2);
            U.uniformMatrix4fv(V(a), !!c, f)
          }
        },
        emscripten_glUseProgram: function (a) {
          a = P[a];
          U.useProgram(a);
          U.ka = a
        },
        emscripten_glVertexAttrib1f: function (a, b) {
          U.vertexAttrib1f(a,
            b)
        },
        emscripten_glVertexAttrib2fv: function (a, b) {
          U.vertexAttrib2f(a, w()[b >> 2], w()[b + 4 >> 2])
        },
        emscripten_glVertexAttrib3fv: function (a, b) {
          U.vertexAttrib3f(a, w()[b >> 2], w()[b + 4 >> 2], w()[b + 8 >> 2])
        },
        emscripten_glVertexAttrib4fv: function (a, b) {
          U.vertexAttrib4f(a, w()[b >> 2], w()[b + 4 >> 2], w()[b + 8 >> 2], w()[b + 12 >> 2])
        },
        emscripten_glVertexAttribDivisor: function (a, b) {
          U.vertexAttribDivisor(a, b)
        },
        emscripten_glVertexAttribIPointer: function (a, b, c, d, f) {
          U.vertexAttribIPointer(a, b, c, d, f)
        },
        emscripten_glVertexAttribPointer: function (a,
          b, c, d, f, g) {
          U.vertexAttribPointer(a, b, c, !!d, f, g)
        },
        emscripten_glViewport: function (a, b, c, d) {
          U.viewport(a, b, c, d)
        },
        emscripten_glWaitSync: function (a, b, c, d) {
          U.waitSync(Nb[a], b, (c >>> 0) + 4294967296 * d)
        },
        emscripten_receive_on_main_thread_js: function (a, b, c) {
          gc.length = b;
          c >>= 3;
          for (var d = 0; d < b; d++) gc[d] = ia()[c + d];
          return (0 > a ? cb[-a - 1] : Ic[a]).apply(null, gc)
        },
        emscripten_resize_heap: function (a) {
          var b = r().length;
          a >>>= 0;
          if (a <= b || 2147483648 < a) return !1;
          for (var c = 1; 4 >= c; c *= 2) {
            var d = b * (1 + .2 / c);
            d = Math.min(d, a + 100663296);
            d = Math.max(a,
              d);
            0 < d % 65536 && (d += 65536 - d % 65536);
            a: {
              try {
                h.grow(Math.min(2147483648, d) - l.byteLength + 65535 >>> 16);
                q(h.buffer);
                var f = 1;
                break a
              } catch (g) {}
              f = void 0
            }
            if (f) return !0
          }
          return !1
        },
        emscripten_set_canvas_element_size: function (a, b, c) {
          return jc(a) ? kc(a, b, c) : lc(a, b, c)
        },
        emscripten_unwind_to_js_event_loop: function () {
          throw "unwind";
        },
        emscripten_webgl_create_context: function (a, b) {
          return nc(a, b)
        },
        emscripten_webgl_init_context_attributes: function (a) {
          for (var b = a >> 2, c = 0; 14 > c; ++c) u()[b + c] = 0;
          u()[b] = u()[b + 1] = u()[b + 3] = u()[b + 4] =
            u()[b + 8] = u()[b + 10] = 1;
          z && (u()[a + 48 >> 2] = 1)
        },
        emscripten_webgl_make_context_current: function (a) {
          T = Lb[a];
          y.La = U = T && T.v;
          return !a || U ? 0 : -5
        },
        environ_get: sc,
        environ_sizes_get: tc,
        exit: function (a) {
          ob(a)
        },
        fd_close: uc,
        fd_pread: vc,
        fd_read: wc,
        fd_seek: xc,
        fd_write: yc,
        getTempRet0: function () {
          return Da
        },
        invoke_ii: Nc,
        invoke_iii: Oc,
        invoke_iiii: Pc,
        invoke_iiiii: Qc,
        invoke_iiiiii: Rc,
        invoke_iiiiiii: Sc,
        invoke_v: Tc,
        invoke_vi: Uc,
        invoke_vii: Vc,
        invoke_viii: Wc,
        invoke_viiii: Xc,
        invoke_viiiii: Yc,
        invoke_viiiiii: Zc,
        invoke_viiiiiii: $c,
        invoke_viiiiiiii: ad,
        memory: h || y.wasmMemory,
        setTempRet0: function (a) {
          Da = a
        },
        strftime_l: function (a, b, c, d) {
          return Ec(a, b, c, d)
        }
      };
      (function () {
        function a(f, g) {
          y.asm = f.exports;
          M.U.push(y.asm.emscripten_tls_init);
          Sa = y.asm.__indirect_function_table;
          Ua.unshift(y.asm.__wasm_call_ctors);
          Ga = g;
          if (!B) {
            var k = M.j.length;
            M.j.forEach(function (n) {
              M.aa(n, function () {
                if (!--k && (H--, y.monitorRunDependencies && y.monitorRunDependencies(H), 0 == H && (null !== Ya && (clearInterval(Ya), Ya = null), Za))) {
                  var p = Za;
                  Za = null;
                  p()
                }
              })
            })
          }
        }

        function b(f) {
          a(f.instance, f.module)
        }

        function c(f) {
          return bb().then(function (g) {
            return WebAssembly.instantiate(g, d)
          }).then(function (g) {
            return g
          }).then(f,
            function (g) {
              E("failed to asynchronously prepare wasm: " + g);
              Fa(g)
            })
        }
        var d = {
          env: bd,
          wasi_snapshot_preview1: bd
        };
        B || (H++, y.monitorRunDependencies && y.monitorRunDependencies(H));
        if (y.instantiateWasm) try {
          return y.instantiateWasm(d, a)
        } catch (f) {
          return E("Module.instantiateWasm callback failed with error: " + f), !1
        }(function () {
          return Ea || "function" !== typeof WebAssembly.instantiateStreaming || $a() || I.startsWith("file://") || "function" !== typeof fetch ? c(b) : fetch(I, {
            credentials: "same-origin"
          }).then(function (f) {
            return WebAssembly.instantiateStreaming(f,
              d).then(b, function (g) {
              E("wasm streaming compile failed: " + g);
              E("falling back to ArrayBuffer instantiation");
              return c(b)
            })
          })
        })().catch(ma);
        return {}
      })();
      y.___wasm_call_ctors = function () {
        return (y.___wasm_call_ctors = y.asm.__wasm_call_ctors).apply(null, arguments)
      };
      y._canvas_destroy = function () {
        return (y._canvas_destroy = y.asm.canvas_destroy).apply(null, arguments)
      };
      y._canvas_saveLayer = function () {
        return (y._canvas_saveLayer = y.asm.canvas_saveLayer).apply(null, arguments)
      };
      y._canvas_save = function () {
        return (y._canvas_save = y.asm.canvas_save).apply(null, arguments)
      };
      y._canvas_restore = function () {
        return (y._canvas_restore = y.asm.canvas_restore).apply(null, arguments)
      };
      y._canvas_restoreToCount = function () {
        return (y._canvas_restoreToCount = y.asm.canvas_restoreToCount).apply(null, arguments)
      };
      y._canvas_getSaveCount = function () {
        return (y._canvas_getSaveCount = y.asm.canvas_getSaveCount).apply(null, arguments)
      };
      y._canvas_translate = function () {
        return (y._canvas_translate = y.asm.canvas_translate).apply(null, arguments)
      };
      y._canvas_scale = function () {
        return (y._canvas_scale = y.asm.canvas_scale).apply(null, arguments)
      };
      y._canvas_rotate = function () {
        return (y._canvas_rotate = y.asm.canvas_rotate).apply(null, arguments)
      };
      y._canvas_skew = function () {
        return (y._canvas_skew = y.asm.canvas_skew).apply(null, arguments)
      };
      y._canvas_transform = function () {
        return (y._canvas_transform = y.asm.canvas_transform).apply(null, arguments)
      };
      y._canvas_clipRect = function () {
        return (y._canvas_clipRect = y.asm.canvas_clipRect).apply(null, arguments)
      };
      y._canvas_clipRRect = function () {
        return (y._canvas_clipRRect = y.asm.canvas_clipRRect).apply(null, arguments)
      };
      y._canvas_clipPath = function () {
        return (y._canvas_clipPath = y.asm.canvas_clipPath).apply(null, arguments)
      };
      y._canvas_drawColor = function () {
        return (y._canvas_drawColor = y.asm.canvas_drawColor).apply(null, arguments)
      };
      y._canvas_drawLine = function () {
        return (y._canvas_drawLine = y.asm.canvas_drawLine).apply(null, arguments)
      };
      y._canvas_drawPaint = function () {
        return (y._canvas_drawPaint = y.asm.canvas_drawPaint).apply(null, arguments)
      };
      y._canvas_drawRect = function () {
        return (y._canvas_drawRect = y.asm.canvas_drawRect).apply(null, arguments)
      };
      y._canvas_drawRRect = function () {
        return (y._canvas_drawRRect = y.asm.canvas_drawRRect).apply(null, arguments)
      };
      y._canvas_drawDRRect = function () {
        return (y._canvas_drawDRRect = y.asm.canvas_drawDRRect).apply(null, arguments)
      };
      y._canvas_drawOval = function () {
        return (y._canvas_drawOval = y.asm.canvas_drawOval).apply(null, arguments)
      };
      y._canvas_drawCircle = function () {
        return (y._canvas_drawCircle = y.asm.canvas_drawCircle).apply(null, arguments)
      };
      y._canvas_drawArc = function () {
        return (y._canvas_drawArc = y.asm.canvas_drawArc).apply(null, arguments)
      };
      y._canvas_drawPath = function () {
        return (y._canvas_drawPath = y.asm.canvas_drawPath).apply(null, arguments)
      };
      y._canvas_drawPicture = function () {
        return (y._canvas_drawPicture = y.asm.canvas_drawPicture).apply(null, arguments)
      };
      y._canvas_getTransform = function () {
        return (y._canvas_getTransform = y.asm.canvas_getTransform).apply(null, arguments)
      };
      y._canvas_getLocalClipBounds = function () {
        return (y._canvas_getLocalClipBounds = y.asm.canvas_getLocalClipBounds).apply(null, arguments)
      };
      y._canvas_getDeviceClipBounds = function () {
        return (y._canvas_getDeviceClipBounds = y.asm.canvas_getDeviceClipBounds).apply(null, arguments)
      };
      y._contourMeasureIter_create = function () {
        return (y._contourMeasureIter_create = y.asm.contourMeasureIter_create).apply(null, arguments)
      };
      y._contourMeasureIter_next = function () {
        return (y._contourMeasureIter_next = y.asm.contourMeasureIter_next).apply(null, arguments)
      };
      y._contourMeasure_dispose = function () {
        return (y._contourMeasure_dispose = y.asm.contourMeasure_dispose).apply(null, arguments)
      };
      y._contourMeasure_length = function () {
        return (y._contourMeasure_length = y.asm.contourMeasure_length).apply(null, arguments)
      };
      y._contourMeasure_isClosed = function () {
        return (y._contourMeasure_isClosed = y.asm.contourMeasure_isClosed).apply(null, arguments)
      };
      y._contourMeasure_getPosTan = function () {
        return (y._contourMeasure_getPosTan = y.asm.contourMeasure_getPosTan).apply(null, arguments)
      };
      y._contourMeasure_getSegment = function () {
        return (y._contourMeasure_getSegment = y.asm.contourMeasure_getSegment).apply(null, arguments)
      };
      y._paint_create = function () {
        return (y._paint_create = y.asm.paint_create).apply(null, arguments)
      };
      y._paint_destroy = function () {
        return (y._paint_destroy = y.asm.paint_destroy).apply(null, arguments)
      };
      y._paint_setBlendMode = function () {
        return (y._paint_setBlendMode = y.asm.paint_setBlendMode).apply(null, arguments)
      };
      y._paint_setStyle = function () {
        return (y._paint_setStyle = y.asm.paint_setStyle).apply(null, arguments)
      };
      y._paint_getStyle = function () {
        return (y._paint_getStyle = y.asm.paint_getStyle).apply(null, arguments)
      };
      y._paint_setStrokeWidth = function () {
        return (y._paint_setStrokeWidth = y.asm.paint_setStrokeWidth).apply(null, arguments)
      };
      y._paint_getStrokeWidth = function () {
        return (y._paint_getStrokeWidth = y.asm.paint_getStrokeWidth).apply(null, arguments)
      };
      y._paint_setStrokeCap = function () {
        return (y._paint_setStrokeCap = y.asm.paint_setStrokeCap).apply(null, arguments)
      };
      y._paint_getStrokeCap = function () {
        return (y._paint_getStrokeCap = y.asm.paint_getStrokeCap).apply(null, arguments)
      };
      y._paint_setStrokeJoin = function () {
        return (y._paint_setStrokeJoin = y.asm.paint_setStrokeJoin).apply(null, arguments)
      };
      y._paint_getStrokeJoin = function () {
        return (y._paint_getStrokeJoin = y.asm.paint_getStrokeJoin).apply(null, arguments)
      };
      y._paint_setAntiAlias = function () {
        return (y._paint_setAntiAlias = y.asm.paint_setAntiAlias).apply(null, arguments)
      };
      y._paint_getAntiAlias = function () {
        return (y._paint_getAntiAlias = y.asm.paint_getAntiAlias).apply(null, arguments)
      };
      y._paint_setColorInt = function () {
        return (y._paint_setColorInt = y.asm.paint_setColorInt).apply(null, arguments)
      };
      y._paint_getColorInt = function () {
        return (y._paint_getColorInt = y.asm.paint_getColorInt).apply(null, arguments)
      };
      y._paint_setMiterLimit = function () {
        return (y._paint_setMiterLimit = y.asm.paint_setMiterLimit).apply(null, arguments)
      };
      y._paint_getMiterLImit = function () {
        return (y._paint_getMiterLImit = y.asm.paint_getMiterLImit).apply(null, arguments)
      };
      y._path_create = function () {
        return (y._path_create = y.asm.path_create).apply(null, arguments)
      };
      y._path_destroy = function () {
        return (y._path_destroy = y.asm.path_destroy).apply(null, arguments)
      };
      y._path_copy = function () {
        return (y._path_copy = y.asm.path_copy).apply(null, arguments)
      };
      y._path_setFillType = function () {
        return (y._path_setFillType = y.asm.path_setFillType).apply(null, arguments)
      };
      y._path_getFillType = function () {
        return (y._path_getFillType = y.asm.path_getFillType).apply(null, arguments)
      };
      y._path_moveTo = function () {
        return (y._path_moveTo = y.asm.path_moveTo).apply(null, arguments)
      };
      y._path_relativeMoveTo = function () {
        return (y._path_relativeMoveTo = y.asm.path_relativeMoveTo).apply(null, arguments)
      };
      y._path_lineTo = function () {
        return (y._path_lineTo = y.asm.path_lineTo).apply(null, arguments)
      };
      y._path_relativeLineTo = function () {
        return (y._path_relativeLineTo = y.asm.path_relativeLineTo).apply(null, arguments)
      };
      y._path_quadraticBezierTo = function () {
        return (y._path_quadraticBezierTo = y.asm.path_quadraticBezierTo).apply(null, arguments)
      };
      y._path_relativeQuadraticBezierTo = function () {
        return (y._path_relativeQuadraticBezierTo = y.asm.path_relativeQuadraticBezierTo).apply(null, arguments)
      };
      y._path_cubicTo = function () {
        return (y._path_cubicTo = y.asm.path_cubicTo).apply(null, arguments)
      };
      y._path_relativeCubicTo = function () {
        return (y._path_relativeCubicTo = y.asm.path_relativeCubicTo).apply(null, arguments)
      };
      y._path_conicTo = function () {
        return (y._path_conicTo = y.asm.path_conicTo).apply(null, arguments)
      };
      y._path_relativeConicTo = function () {
        return (y._path_relativeConicTo = y.asm.path_relativeConicTo).apply(null, arguments)
      };
      y._path_arcToOval = function () {
        return (y._path_arcToOval = y.asm.path_arcToOval).apply(null, arguments)
      };
      y._path_arcToRotated = function () {
        return (y._path_arcToRotated = y.asm.path_arcToRotated).apply(null, arguments)
      };
      y._path_relativeArcToRotated = function () {
        return (y._path_relativeArcToRotated = y.asm.path_relativeArcToRotated).apply(null, arguments)
      };
      y._path_addRect = function () {
        return (y._path_addRect = y.asm.path_addRect).apply(null, arguments)
      };
      y._path_addOval = function () {
        return (y._path_addOval = y.asm.path_addOval).apply(null, arguments)
      };
      y._path_addArc = function () {
        return (y._path_addArc = y.asm.path_addArc).apply(null, arguments)
      };
      y._path_addPolygon = function () {
        return (y._path_addPolygon = y.asm.path_addPolygon).apply(null, arguments)
      };
      y._path_addRRect = function () {
        return (y._path_addRRect = y.asm.path_addRRect).apply(null, arguments)
      };
      y._path_addPath = function () {
        return (y._path_addPath = y.asm.path_addPath).apply(null, arguments)
      };
      y._path_close = function () {
        return (y._path_close = y.asm.path_close).apply(null, arguments)
      };
      y._path_reset = function () {
        return (y._path_reset = y.asm.path_reset).apply(null, arguments)
      };
      y._path_contains = function () {
        return (y._path_contains = y.asm.path_contains).apply(null, arguments)
      };
      y._path_transform = function () {
        return (y._path_transform = y.asm.path_transform).apply(null, arguments)
      };
      y._path_getBounds = function () {
        return (y._path_getBounds = y.asm.path_getBounds).apply(null, arguments)
      };
      y._path_combine = function () {
        return (y._path_combine = y.asm.path_combine).apply(null, arguments)
      };
      y._pictureRecorder_create = function () {
        return (y._pictureRecorder_create = y.asm.pictureRecorder_create).apply(null, arguments)
      };
      y._pictureRecorder_dispose = function () {
        return (y._pictureRecorder_dispose = y.asm.pictureRecorder_dispose).apply(null, arguments)
      };
      y._pictureRecorder_beginRecording = function () {
        return (y._pictureRecorder_beginRecording = y.asm.pictureRecorder_beginRecording).apply(null, arguments)
      };
      y._pictureRecorder_endRecording = function () {
        return (y._pictureRecorder_endRecording = y.asm.pictureRecorder_endRecording).apply(null, arguments)
      };
      y._picture_dispose = function () {
        return (y._picture_dispose = y.asm.picture_dispose).apply(null, arguments)
      };
      y._picture_approximateBytesUsed = function () {
        return (y._picture_approximateBytesUsed = y.asm.picture_approximateBytesUsed).apply(null, arguments)
      };
      y._surface_createFromCanvas = function () {
        return (y._surface_createFromCanvas = y.asm.surface_createFromCanvas).apply(null, arguments)
      };
      y._surface_destroy = function () {
        return (y._surface_destroy = y.asm.surface_destroy).apply(null, arguments)
      };
      y._surface_setCanvasSize = function () {
        return (y._surface_setCanvasSize = y.asm.surface_setCanvasSize).apply(null, arguments)
      };
      y._surface_renderPicture = function () {
        return (y._surface_renderPicture = y.asm.surface_renderPicture).apply(null, arguments)
      };
      var ic = y._emscripten_dispatch_to_thread_ = function () {
          return (ic = y._emscripten_dispatch_to_thread_ = y.asm.emscripten_dispatch_to_thread_).apply(null, arguments)
        },
        Mc = y.___errno_location = function () {
          return (Mc = y.___errno_location = y.asm.__errno_location).apply(null, arguments)
        },
        jb = y._pthread_self = function () {
          return (jb = y._pthread_self = y.asm.pthread_self).apply(null, arguments)
        },
        Bb = y._free = function () {
          return (Bb = y._free = y.asm.free).apply(null, arguments)
        },
        Vb = y._malloc = function () {
          return (Vb = y._malloc = y.asm.malloc).apply(null,
            arguments)
        };
      y._emscripten_tls_init = function () {
        return (y._emscripten_tls_init = y.asm.emscripten_tls_init).apply(null, arguments)
      };
      var kb = y._emscripten_main_thread_process_queued_calls = function () {
          return (kb = y._emscripten_main_thread_process_queued_calls = y.asm.emscripten_main_thread_process_queued_calls).apply(null, arguments)
        },
        Jc = y.__emscripten_thread_init = function () {
          return (Jc = y.__emscripten_thread_init = y.asm._emscripten_thread_init).apply(null, arguments)
        };
      y._emscripten_current_thread_process_queued_calls = function () {
        return (y._emscripten_current_thread_process_queued_calls = y.asm.emscripten_current_thread_process_queued_calls).apply(null, arguments)
      };
      var Kc = y._emscripten_sync_run_in_main_thread_4 = function () {
          return (Kc = y._emscripten_sync_run_in_main_thread_4 = y.asm.emscripten_sync_run_in_main_thread_4).apply(null, arguments)
        },
        fc = y._emscripten_run_in_main_runtime_thread_js = function () {
          return (fc = y._emscripten_run_in_main_runtime_thread_js = y.asm.emscripten_run_in_main_runtime_thread_js).apply(null, arguments)
        },
        gb = y.__emscripten_thread_free_data = function () {
          return (gb = y.__emscripten_thread_free_data = y.asm._emscripten_thread_free_data).apply(null, arguments)
        };
      y.__emscripten_thread_exit = function () {
        return (y.__emscripten_thread_exit = y.asm._emscripten_thread_exit).apply(null, arguments)
      };
      var zb = y._memalign = function () {
          return (zb = y._memalign = y.asm.memalign).apply(null, arguments)
        },
        Z = y._setThrew = function () {
          return (Z = y._setThrew = y.asm.setThrew).apply(null, arguments)
        },
        mb = y._emscripten_stack_set_limits = function () {
          return (mb = y._emscripten_stack_set_limits = y.asm.emscripten_stack_set_limits).apply(null, arguments)
        },
        K = y.stackSave = function () {
          return (K = y.stackSave = y.asm.stackSave).apply(null, arguments)
        },
        L = y.stackRestore = function () {
          return (L = y.stackRestore = y.asm.stackRestore).apply(null, arguments)
        },
        ec = y.stackAlloc = function () {
          return (ec = y.stackAlloc = y.asm.stackAlloc).apply(null, arguments)
        },
        Lc = y.__emscripten_main_thread_futex = 246984,
        hb = y.__emscripten_allow_main_runtime_queued_calls = 243904;

      function Vc(a, b, c) {
        var d = K();
        try {
          J(a)(b, c)
        } catch (f) {
          L(d);
          if (f !== f + 0 && "longjmp" !== f) throw f;
          Z(1, 0)
        }
      }

      function Oc(a, b, c) {
        var d = K();
        try {
          return J(a)(b, c)
        } catch (f) {
          L(d);
          if (f !== f + 0 && "longjmp" !== f) throw f;
          Z(1, 0)
        }
      }

      function ad(a, b, c, d, f, g, k, n, p) {
        var t = K();
        try {
          J(a)(b, c, d, f, g, k, n, p)
        } catch (v) {
          L(t);
          if (v !== v + 0 && "longjmp" !== v) throw v;
          Z(1, 0)
        }
      }

      function Tc(a) {
        var b = K();
        try {
          J(a)()
        } catch (c) {
          L(b);
          if (c !== c + 0 && "longjmp" !== c) throw c;
          Z(1, 0)
        }
      }

      function Nc(a, b) {
        var c = K();
        try {
          return J(a)(b)
        } catch (d) {
          L(c);
          if (d !== d + 0 && "longjmp" !== d) throw d;
          Z(1, 0)
        }
      }

      function Uc(a, b) {
        var c = K();
        try {
          J(a)(b)
        } catch (d) {
          L(c);
          if (d !== d + 0 && "longjmp" !== d) throw d;
          Z(1, 0)
        }
      }

      function Qc(a, b, c, d, f) {
        var g = K();
        try {
          return J(a)(b, c, d, f)
        } catch (k) {
          L(g);
          if (k !== k + 0 && "longjmp" !== k) throw k;
          Z(1, 0)
        }
      }

      function Pc(a, b, c, d) {
        var f = K();
        try {
          return J(a)(b, c, d)
        } catch (g) {
          L(f);
          if (g !== g + 0 && "longjmp" !== g) throw g;
          Z(1, 0)
        }
      }

      function Wc(a, b, c, d) {
        var f = K();
        try {
          J(a)(b, c, d)
        } catch (g) {
          L(f);
          if (g !== g + 0 && "longjmp" !== g) throw g;
          Z(1, 0)
        }
      }

      function Yc(a, b, c, d, f, g) {
        var k = K();
        try {
          J(a)(b, c, d, f, g)
        } catch (n) {
          L(k);
          if (n !== n + 0 && "longjmp" !== n) throw n;
          Z(1, 0)
        }
      }

      function Sc(a, b, c, d, f, g, k) {
        var n = K();
        try {
          return J(a)(b, c, d, f, g, k)
        } catch (p) {
          L(n);
          if (p !== p + 0 && "longjmp" !== p) throw p;
          Z(1, 0)
        }
      }

      function Rc(a, b, c, d, f, g) {
        var k = K();
        try {
          return J(a)(b, c, d, f, g)
        } catch (n) {
          L(k);
          if (n !== n + 0 && "longjmp" !== n) throw n;
          Z(1, 0)
        }
      }

      function Xc(a, b, c, d, f) {
        var g = K();
        try {
          J(a)(b, c, d, f)
        } catch (k) {
          L(g);
          if (k !== k + 0 && "longjmp" !== k) throw k;
          Z(1, 0)
        }
      }

      function Zc(a, b, c, d, f, g, k) {
        var n = K();
        try {
          J(a)(b, c, d, f, g, k)
        } catch (p) {
          L(n);
          if (p !== p + 0 && "longjmp" !== p) throw p;
          Z(1, 0)
        }
      }

      function $c(a, b, c, d, f, g, k, n) {
        var p = K();
        try {
          J(a)(b, c, d, f, g, k, n)
        } catch (t) {
          L(p);
          if (t !== t + 0 && "longjmp" !== t) throw t;
          Z(1, 0)
        }
      }
      y.keepRuntimeAlive = ya;
      y.PThread = M;
      y.PThread = M;
      y.wasmMemory = h;
      y.ExitStatus = xa;
      var cd;

      function xa(a) {
        this.name = "ExitStatus";
        this.message = "Program terminated with exit(" + a + ")";
        this.status = a
      }
      Za = function dd() {
        cd || ed();
        cd || (Za = dd)
      };

      function ed() {
        function a() {
          if (!cd && (cd = !0, y.calledRun = !0, !Ha)) {
            B || db(Ua);
            la(y);
            if (y.onRuntimeInitialized) y.onRuntimeInitialized();
            if (!B) {
              if (y.postRun)
                for ("function" == typeof y.postRun && (y.postRun = [y.postRun]); y.postRun.length;) {
                  var b = y.postRun.shift();
                  Va.unshift(b)
                }
              db(Va)
            }
          }
        }
        if (!(0 < H))
          if (B) la(y), B || db(Ua), postMessage({
            cmd: "loaded"
          });
          else {
            if (y.preRun)
              for ("function" == typeof y.preRun && (y.preRun = [y.preRun]); y.preRun.length;) Xa();
            db(Ta);
            0 < H || (y.setStatus ? (y.setStatus("Running..."), setTimeout(function () {
              setTimeout(function () {
                  y.setStatus("")
                },
                1);
              a()
            }, 1)) : a())
          }
      }
      y.run = ed;

      function ob(a) {
        if (B) throw nb(a), "unwind";
        ya() || B || M.fa();
        if (!ya()) {
          M.fa();
          if (y.onExit) y.onExit(a);
          Ha = !0
        }
        pa(a, new xa(a))
      }
      if (y.preInit)
        for ("function" == typeof y.preInit && (y.preInit = [y.preInit]); 0 < y.preInit.length;) y.preInit.pop()();
      B && (noExitRuntime = !1, M.ta());
      ed();


      return skwasm.ready
    }
  );
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = skwasm;
else if (typeof define === 'function' && define['amd'])
  define([], function () {
    return skwasm;
  });
else if (typeof exports === 'object')
  exports["skwasm"] = skwasm;