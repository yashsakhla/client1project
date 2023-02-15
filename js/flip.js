! function() {
    "use strict";

    function c(t) {
        return "function" == typeof t || "[object Function]" === e.call(t)
    }

    function f(t) {
        var e, n = (e = Number(t), isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (0 < e ? 1 : -1) * Math.floor(Math.abs(e)) : e);
        return Math.min(Math.max(n, 0), r)
    }
    var e, r, i, o, a, u;
    Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
        value: function(t) {
            if (null == this) throw new TypeError("this is null or not defined");
            for (var e = Object(this), n = e.length >>> 0, r = arguments[1] >> 0, i = r < 0 ? Math.max(n + r, 0) : Math.min(r, n), o = arguments[2], a = void 0 === o ? n : o >> 0, u = a < 0 ? Math.max(n + a, 0) : Math.min(a, n); i < u;) e[i] = t, i++;
            return e
        }
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
            if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var e = Object(this), n = e.length >>> 0, r = arguments[1], i = 0; i !== n; i++)
                if (t.call(r, this[i], i, e)) return this[i]
        }
    }), Array.from || (Array.from = (e = Object.prototype.toString, r = Math.pow(2, 53) - 1, function(t, e, n) {
        var r = Object(t);
        if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var i, o = 1 < arguments.length ? e : void 0;
        if (void 0 !== o) {
            if (!c(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            2 < arguments.length && (i = n)
        }
        for (var a, u = f(r.length), l = c(this) ? Object(new this(u)) : new Array(u), s = 0; s < u;) a = r[s], l[s] = o ? void 0 === i ? o(a, s) : o.call(i, a, s) : a, s += 1;
        return l.length = u, l
    })), Array.prototype.includes = Array.prototype.includes || function(t, e) {
        if (!this) throw new TypeError("Array.prototype.includes called on null or undefined");
        if (void 0 === e) {
            for (var n = this.length; n--;)
                if (this[n] === t) return !0
        } else {
            n = e;
            for (var r = this.length; n++ !== r;)
                if (this[n] === t) return !0
        }
        return !1
    }, "function" != typeof Object.assign && (Object.assign = function(t, e) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(t), r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (null != i)
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
        }
        return n
    }), Object.keys || (Object.keys = (i = Object.prototype.hasOwnProperty, o = !{
        toString: null
    }.propertyIsEnumerable("toString"), u = (a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]).length, function(t) {
        if ("object" != typeof t && ("function" != typeof t || null === t)) throw new TypeError("Object.keys called on non-object");
        var e, n, r = [];
        for (e in t) i.call(t, e) && r.push(e);
        if (o)
            for (n = 0; n < u; n++) i.call(t, a[n]) && r.push(a[n]);
        return r
    }))
}(),
function(t) {
    "use strict";
    t.Tick || (t.Tick = []), t.Tick.push(["view", "flip", function() {
        if (!t) var t = {};
        "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function() {
            return this
        }), e.prototype.next = function(t) {
            return this._invoke("next", t)
        }, e.prototype.throw = function(t) {
            return this._invoke("throw", t)
        }, e.prototype.return = function(t) {
            return this._invoke("return", t)
        };

        function s(t) {
            this.value = t
        }

        function e(i) {
            var o, a;

            function u(t, e) {
                try {
                    var n = i[t](e),
                        r = n.value;
                    r instanceof s ? Promise.resolve(r.value).then(function(t) {
                        u("next", t)
                    }, function(t) {
                        u("throw", t)
                    }) : l(n.done ? "return" : "normal", n.value)
                } catch (t) {
                    l("throw", t)
                }
            }

            function l(t, e) {
                switch (t) {
                    case "return":
                        o.resolve({
                            value: e,
                            done: !0
                        });
                        break;
                    case "throw":
                        o.reject(e);
                        break;
                    default:
                        o.resolve({
                            value: e,
                            done: !1
                        })
                }(o = o.next) ? u(o.key, o.arg): a = null
            }
            this._invoke = function(r, i) {
                return new Promise(function(t, e) {
                    var n = {
                        key: r,
                        arg: i,
                        resolve: t,
                        reject: e,
                        next: null
                    };
                    a ? a = a.next = n : (o = a = n, u(r, i))
                })
            }, "function" != typeof i.return && (this.return = void 0)
        }
        var v = function(t, e, n) {
            return e && r(t.prototype, e), n && r(t, n), t
        };

        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        return t.exports = function(t) {
            function n(o) {
                if (o.isInitialValue()) {
                    o.root.textContent = "", o.spacer = s.create("span", "tick-flip-spacer"), o.root.appendChild(o.spacer);
                    var t = s.create("span", "tick-flip-shadow-top tick-flip-shadow tick-flip-front"),
                        e = s.create("span", "tick-flip-shadow-bottom tick-flip-shadow tick-flip-back");
                    o.root.appendChild(t), o.root.appendChild(e), o.shadowCard = s.create("span", "tick-flip-card-shadow"), o.root.appendChild(o.shadowCard)
                }
                if (o.spacer.textContent = o.value, o.isInitialValue() || s.visible(o.root)) {
                    var n = o.cards[o.cards.length - 1];
                    if (n && (n.waiting = !1, n.offset = l(), n.back = o.value), o.isInitialValue()) {
                        var r = new h;
                        r.back = o.value, r.offset = null, r.progress = 1, o.root.insertBefore(r.root, o.root.firstChild), o.cards.push(r)
                    }
                    var i = new h;
                    if (i.offset = null, i.progress = 0, i.visual_progress = 0, i.waiting = !0, i.front = o.value, i.rotate(0), o.root.insertBefore(i.root, o.root.firstChild), o.cards.push(i), !o.animating) {
                        o.animating = !0;
                        var a = u.getExtension(u.Type.EASING_FUNCTION, o.style.flipEasing);
                        ! function t() {
                            var r = o.cards.filter(function(t) {
                                return !t.done && !t.waiting
                            });
                            if (0 !== r.length) {
                                r.forEach(function(t) {
                                    null !== t.offset && (t.progress = (l() - t.offset) / o.style.flipDuration), 1 <= t.progress && (t.progress = 1, t.done = !0), t.visual_progress = a(t.progress)
                                });
                                r.reverse().forEach(function(t, e) {
                                    var n = r[e - 1];
                                    n && t.visual_progress <= n.visual_progress && (t.visual_progress = n.visual_progress + .01)
                                }), r.reverse(), o.cards.forEach(function(t, e) {
                                    var n = 1 - 2 * Math.abs(t.visual_progress - .5),
                                        r = 1 - (t.visual_progress - .5) / .5;
                                    t.shadowFront = n, t.highlightBack = r;
                                    var i = o.cards[e + 1];
                                    i && .5 < t.visual_progress && 0 < t.visual_progress && (t.shadowBack = f(i.visual_progress))
                                }), r.forEach(function(t, e) {
                                    var n = t.visual_progress;
                                    .5 < n && !t.done ? t.root.style.zIndex = 10 + e : t.root.style.removeProperty("z-index"), t.rotate(-180 * n)
                                });
                                var n = 0,
                                    i = 1;
                                r.forEach(function(t) {
                                    var e = Math.abs(t.visual_progress - .5);
                                    e < i && (i = e, n = t.visual_progress)
                                });
                                var e = d(n < .5 ? n / .5 : (1 - n) / .5);
                                o.shadowCard.style.opacity = e, s.transform(o.shadowCard, "scaleY", e), o.cards.filter(function(t) {
                                    return t.done
                                }).slice(0, -1).forEach(function(e) {
                                    o.cards = o.cards.filter(function(t) {
                                        return t !== e
                                    }), e.root.parentNode && o.root.removeChild(e.root)
                                }), requestAnimationFrame(t)
                            } else o.animating = !1
                        }()
                    }
                } else o.cards.forEach(function(t) {
                    t.back = o.value, t.front = o.value
                })
            }
            var s = t.DOM,
                u = (t.Animation.animate, t.Extension),
                l = t.Date.performance,
                e = t.View,
                r = e.rooter,
                i = e.destroyer,
                o = e.drawer,
                a = e.updater,
                c = e.styler,
                f = u.getExtension(u.Type.EASING_FUNCTION, "ease-out-cubic"),
                d = u.getExtension(u.Type.EASING_FUNCTION, "ease-out-sine"),
                h = (v(p, [{
                    key: "rotate",
                    value: function(t) {
                        this._front.style.transform = "rotateX(" + t + "deg)", this._back.style.transform = "rotateX(" + (-180 + t) + "deg)"
                    }
                }, {
                    key: "root",
                    get: function() {
                        return this._root
                    }
                }, {
                    key: "front",
                    set: function(t) {
                        this._frontValue = t, this._textFront.textContent = t
                    },
                    get: function() {
                        return this._frontValue
                    }
                }, {
                    key: "back",
                    set: function(t) {
                        this._backValue = t, this._textBack.textContent = t
                    },
                    get: function() {
                        return this._backValue
                    }
                }, {
                    key: "highlightBack",
                    set: function(t) {
                        this._highlightBack.style.opacity = t
                    }
                }, {
                    key: "shadowBack",
                    set: function(t) {
                        this._shadowBack.style.opacity = t
                    }
                }, {
                    key: "shadowFront",
                    set: function(t) {
                        this._shadowFront.style.opacity = t
                    }
                }]), p);

            function p() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, p), this._root = s.create("span", "tick-flip-card");
                var t = s.create("span", "tick-flip-panel-front tick-flip-front tick-flip-panel"),
                    e = s.create("span", "tick-flip-panel-front-text"),
                    n = s.create("span", "tick-flip-panel-text-wrapper");
                e.appendChild(n);
                var r = s.create("span", "tick-flip-panel-front-shadow");
                t.appendChild(e), t.appendChild(r);
                var i = s.create("span", "tick-flip-panel-back tick-flip-back tick-flip-panel"),
                    o = s.create("span", "tick-flip-panel-back-text"),
                    a = s.create("span", "tick-flip-panel-text-wrapper");
                o.appendChild(a);
                var u = s.create("span", "tick-flip-panel-back-highlight"),
                    l = s.create("span", "tick-flip-panel-back-shadow");
                i.appendChild(o), i.appendChild(u), i.appendChild(l), this._root.appendChild(t), this._root.appendChild(i), this._front = t, this._back = i, this._shadowFront = r, this._shadowBack = l, this._highlightBack = u, this._textBack = a, this._textFront = n, this._frontValue = null, this._backValue = null
            }
            return function(t) {
                var e = {
                    cards: [],
                    lastCard: null,
                    initialCard: null,
                    shadowAbove: null,
                    shadowBelow: null,
                    shadowCard: null,
                    currentValue: null,
                    lastValue: null,
                    front: null,
                    back: null
                };
                return Object.assign({}, r(e, t, "flip"), a(e), c(e, {
                    flipDuration: 800,
                    flipEasing: "ease-out-bounce"
                }), o(e, n), i(e))
            }
        }, t.exports.identifier = {
            name: "flip",
            type: "view"
        }, t.exports
    }()])
}(window),
function(t, e, cn) {
    "use strict";
    if (t && "MutationObserver" in t && "requestAnimationFrame" in t) {
        var n = function() {
            if (!t) var t = {};
            var s = {
                    FONT: "font",
                    VIEW: "view",
                    TRANSFORM: "transform",
                    EASING_FUNCTION: "easing-function",
                    TRANSITION: "transition"
                },
                r = {};
            r[s.FONT] = {}, r[s.VIEW] = {}, r[s.TRANSFORM] = {}, r[s.EASING_FUNCTION] = {}, r[s.TRANSITION] = {};

            function e(t, e) {
                if (r[t])
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (r[t][n]) return;
                            r[t][n] = e[n]
                        }
            }

            function i(t, e, n) {
                if (!r[t]) throw "Can't add extension with type of \"" + t + '", "' + t + '" is not a valid extension type. The following types are valid: ' + Ne(r);
                if (!/^[-a-z]+$/.test(e)) throw "Can't add extension with name \"" + e + '", "' + e + '" is contains invalid characters. Only lowercase alphabetical characters and dashes are allowed.';
                if (r[t][e]) throw "Can't add extension with name \"" + e + '", "' + e + '" is already added.';
                r[t][e] = n
            }

            function c(t, e) {
                if (!r[t]) throw "Can't get extension with type of \"" + t + '", "' + t + '" is not a valid extension type. The following types are available: ' + Ne(r);
                if (!r[t][e]) throw "Can't get extension with name \"" + e + '", "' + e + '" is not available. The following extensions are available: ' + Ne(r[t]);
                return r[t][e]
            }
            var h = {
                    Week: 6048e5,
                    Day: 864e5,
                    Hour: 36e5,
                    Minute: 6e4,
                    Second: 1e3,
                    Millisecond: 1,
                    Month: 2628e6,
                    Year: 31536e6
                },
                n = ["Januari", "Februari", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            for (var o in h)
                if (h.hasOwnProperty(o)) {
                    var a = h[o];
                    1 === a ? (h.mi = a, h.ms = a) : 2628e6 === a ? h.M = a : h[o.charAt(0).toLowerCase()] = a, h[o.toLowerCase()] = a, h[o.toLowerCase() + "s"] = a
                }
            function u(t) {
                return t instanceof Date
            }

            function f(t, e) {
                var n = e - t.getDay();
                return t.setDate(t.getDate() + n), t
            }

            function d(t, e) {
                var n = N(t.getMonth() + 1, t.getFullYear());
                return e = "last" === e ? n : Math.max(1, Math.min(n, e)), t.setDate(e), t
            }

            function p(t, e) {
                return t.setMonth(n.map(function(t) {
                    return t.toLowerCase()
                }).indexOf(e)), t
            }

            function v(t) {
                return new Date(Date.now() + t)
            }

            function m(t, e) {
                return t.toDateString() === e.toDateString()
            }

            function l(t) {
                return t.match(/(Z)|([+\-][0-9]{2}:?[0-9]*$)/g) ? new Date(t) : (t += -1 !== t.indexOf("T") ? "Z" : "", O(new Date(t)))
            }

            function g(r, t) {
                return t.map(function(t) {
                    var e = h[t],
                        n = Math.max(0, Math.floor(r / e));
                    return r %= e, n
                })
            }

            function y(t, e, n) {
                var i = e - t,
                    r = !1;
                if (i < 0) {
                    i = t - e;
                    var o = [e, t];
                    t = o[0], e = o[1], r = !0
                }
                var a = (n = n || ["d", "h", "m"]).indexOf("m");
                0 <= a && ("y" === n[a - 1] || "d" === n[a + 1]) && (n[a].key = "M");
                var u = void 0,
                    l = void 0,
                    s = void 0,
                    c = n.includes("y"),
                    f = n.includes("M");
                (f || c) && (u = new Date(t.valueOf() + i), l = T(u, t), s = f ? Math.floor(l) : 12 * Math.floor(l / 12), i = u.valueOf() - I(S(t), s).valueOf());
                var d = n.map(function(t) {
                    if ("y" === t || "M" === t) {
                        var e = Math.max(0, Math.floor(l / C[t]));
                        return l -= e * C[t], e
                    }
                    var n = h[t],
                        r = Math.max(0, Math.floor(i / n));
                    return i %= n, r
                });
                return r ? d.map(function(t) {
                    return 0 < t ? -t : t
                }) : d
            }

            function w() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                if ("number" != typeof e[0] || "string" != typeof e[1]) return u(e[0]) ? y.apply(cn, e) : "number" == typeof e[0] && Array.isArray(e[1]) ? g.apply(cn, e) : null;
                if (!h[e[1]]) throw '"' + e[1] + '" is not a valid amount.';
                return e[0] * h[e[1]]
            }

            function b() {
                return new Date
            }

            function _(t) {
                return {
                    destroy: function() {
                        t.destroyed = !0, t.frame && cancelAnimationFrame(t.frame), t.styleObserver && t.styleObserver.disconnect(), t.didResizeWindow && window.removeEventListener("resize", t.didResizeWindow), t.root && t.root.parentNode && t.root.parentNode.removeChild(t.root)
                    }
                }
            }

            function A(r) {
                var t = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : document.createElement("span"),
                    e = 2 < arguments.length && arguments[2] !== cn ? arguments[2] : null;
                return r.root = t, r.aligned = null, r.destroyed = !1, t && e && (r.root.classList.add("tick-" + e), r.root.setAttribute("data-view", e)), t && t.dataset.layout && (r.align = (t.dataset.layout.match(/left|right|center/) || [])[0] || "left"), {
                    appendTo: function(t, e) {
                        var n = 1 < arguments.length && e !== cn ? e : "last";
                        !r.root || r.root && r.root.parentNode || ("last" !== n ? ("first" === n && (0 === t.childNodes.length ? t.appendChild(r.root) : 0 === t.children.length && t.childNodes.length ? t.insertBefore(r.root, t.childNodes[t.childNodes.length - 1]) : t.insertBefore(r.root, t.children[0])), "string" != typeof n && t.insertBefore(r.root, n)) : t.childNodes.length && t.childNodes[t.childNodes.length - 1].nodeType === Node.TEXT_NODE ? t.insertBefore(r.root, t.childNodes[t.childNodes.length - 1]) : t.appendChild(r.root))
                    }
                }
            }

            function M(e, t) {
                return e.definition = t, {
                    setDefinition: function(t) {
                        e.definition = t
                    }
                }
            }

            function E(t, e, n, r) {
                return {
                    draw: function() {
                        if (t.dirty) return e(t, r), R(t), !(t.dirty = !1);
                        n && n(t) && R(t);
                        return !1
                    }
                }
            }

            function k(e) {
                return e.dirty = !0, e.value = null, e.valueUpdateCount = 0, e.isInitialValue = function() {
                    return e.valueUpdateCount <= 1
                }, {
                    reset: function() {
                        e.dirty = !0, e.value = null, e.valueUpdateCount = 0
                    },
                    update: function(t) {
                        ke(e.value, t) || (e.value = t, e.valueUpdateCount++, e.dirty = !0)
                    }
                }
            }

            function D(t) {
                t.didResizeWindow = function() {
                    t.dirty = !0
                }, window.addEventListener("resize", t.didResizeWindow)
            }
            var x = {
                    Monday: 1,
                    Tuesday: 2,
                    Wednesday: 3,
                    Thursday: 4,
                    Friday: 5,
                    Saturday: 6,
                    Sunday: 0
                },
                C = {
                    M: 1,
                    y: 12
                },
                N = function(t, e) {
                    return new Date(e, t, 0).getDate()
                },
                O = function(t) {
                    return new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
                },
                S = function(t) {
                    return new Date(t.valueOf())
                },
                I = function(t, e) {
                    return t.setMonth(t.getMonth() + e), t
                },
                T = function(t, e) {
                    var n = 12 * (e.getFullYear() - t.getFullYear()) + (e.getMonth() - t.getMonth()),
                        r = I(S(t), n);
                    return -(n + (e - r < 0 ? (e - r) / (r - I(S(t), n - 1)) : (e - r) / (I(S(t), 1 + n) - r)))
                },
                R = function(t) {
                    if (!t.fit) {
                        if (!t.root || !(t.root.getAttribute("data-layout") || "").match(/fit/)) return void(t.fit = !1);
                        var e = window.getComputedStyle(t.root, null);
                        t.fit = !0, t.fitInfo = {
                            currentFontSize: parseInt(e.getPropertyValue("font-size"), 10)
                        }
                    }
                    t.fitInfo.availableWidth = t.root.parentNode.clientWidth, t.fitInfo.currentWidth = t.root.scrollWidth;
                    var n = Math.min(Math.max(4, t.fitInfo.availableWidth / t.fitInfo.currentWidth * t.fitInfo.currentFontSize), 1024);
                    Math.abs(n - t.fitInfo.currentFontSize) <= 1 || (t.fitInfo.currentFontSize = n, t.root.style.fontSize = t.fitInfo.currentFontSize + "px")
                },
                L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
            "function" == typeof Symbol && Symbol.asyncIterator && (F.prototype[Symbol.asyncIterator] = function() {
                return this
            }), F.prototype.next = function(t) {
                return this._invoke("next", t)
            }, F.prototype.throw = function(t) {
                return this._invoke("throw", t)
            }, F.prototype.return = function(t) {
                return this._invoke("return", t)
            };

            function U(t) {
                this.value = t
            }

            function F(i) {
                var o, a;

                function u(t, e) {
                    try {
                        var n = i[t](e),
                            r = n.value;
                        r instanceof U ? Promise.resolve(r.value).then(function(t) {
                            u("next", t)
                        }, function(t) {
                            u("throw", t)
                        }) : l(n.done ? "return" : "normal", n.value)
                    } catch (t) {
                        l("throw", t)
                    }
                }

                function l(t, e) {
                    switch (t) {
                        case "return":
                            o.resolve({
                                value: e,
                                done: !0
                            });
                            break;
                        case "throw":
                            o.reject(e);
                            break;
                        default:
                            o.resolve({
                                value: e,
                                done: !1
                            })
                    }(o = o.next) ? u(o.key, o.arg): a = null
                }
                this._invoke = function(r, i) {
                    return new Promise(function(t, e) {
                        var n = {
                            key: r,
                            arg: i,
                            resolve: t,
                            reject: e,
                            next: null
                        };
                        a ? a = a.next = n : (o = a = n, u(r, i))
                    })
                }, "function" != typeof i.return && (this.return = cn)
            }
            var P = function(t, e, n) {
                return e && z(t.prototype, e), n && z(t, n), t
            };

            function z(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function j(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
                return Array.from(t)
            }

            function q(e, n) {
                var t = (e.definition || []).concat();
                "right" === e.align && t.reverse();
                var r = Array.isArray(e.value) ? e.value.concat() : "object" === L(e.value) ? _e(e.value) : e.value;
                t.forEach(function(t) {
                    if (!t.presenter) {
                        if (e.update = n(t), !t.presenter) return;
                        t.presenter.appendTo(e.root)
                    }
                }), t.filter(function(t) {
                    return t.presenter !== cn
                }).forEach(function(t) {
                    Array.isArray(r) && e.valueMapping ? e.update(t, "indexes" === e.valueMapping ? "right" === e.align ? r.pop() : r.shift() : r) : t.key && r[t.key] !== cn ? e.update(t, r[t.key]) : e.update(t, r)
                }), e.views = t, ot(e)
            }

            function G(r, i) {
                var t = Ae(Array.isArray(r.value) ? r.value : (r.value + "").split(""));
                if ("right" === r.align && t.reverse(), r.definitions.length > t.length)
                    for (; r.definitions.length > t.length;) {
                        r.definitions.pop().presenter.destroy()
                    }
                t.forEach(function(t, e) {
                    var n = r.definitions[e];
                    n || (n = r.definitions[e] = ie(r.definition), r.update = i(n), n.presenter.appendTo(r.root, "right" === r.align ? "first" : "last"))
                }), t.forEach(function(t, e) {
                    return r.update(r.definitions[e], t)
                }), r.views = t, at(r)
            }

            function W(t, e) {
                var n = document.createElement(t);
                return e && (n.className = e), n
            }

            function Y(n, r, i) {
                var t = new MutationObserver(function(e) {
                    r.forEach(function(t) {
                        e.filter(function(t) {
                            return r.includes(t.attributeName)
                        }).length && i(n.getAttribute(t))
                    })
                });
                return t.observe(n, {
                    attributes: !0
                }), t
            }

            function V(t) {
                return t instanceof HTMLElement
            }

            function B(t, e, n, r) {
                var i = 3 < arguments.length && r !== cn ? r : "";
                t.transforms || (t.transforms = []);
                var o = t.transforms.find(function(t) {
                    return t.name === e
                });
                o ? o.value = n : t.transforms.push({
                    name: e,
                    value: n,
                    unit: i
                }), lt(t, t.transforms)
            }

            function H(t) {
                var e = t.getBoundingClientRect();
                return !(e.bottom < 0) && !(e.top > window.scrollY + window.innerHeight)
            }

            function $(t) {
                return t.trim()
            }

            function X(t, e) {
                var n = e.toString();
                return st[n] || (st[n] = {}), st[n][t] || (st[n][t] = e(t)), st[n][t]
            }

            function Z(t) {
                return t ? parseFloat(t) * (/ms$/.test(t) ? 1 : 1e3) : 0
            }

            function J(t) {
                return t.match(/[a-z]+(?:\(.*?\))?\s?(?:origin\(.*?\))?\s?(?:[a-z]+\(.*?\))?[ .a-z-0-9]*/g).map(wt)
            }

            function K(t) {
                var e = t.match(/follow-gradient|horizontal-gradient|vertical-gradient/)[0];
                return {
                    type: e,
                    colors: t.substr(e.length).match(/(?:transparent|rgb\(.*?\)|hsl\(.*?\)|hsla\(.*?\)|rgba\(.*?\)|[a-z]+|#[abcdefABCDEF\d]+)\s?(?:[\d]{1,3}%?)?/g).map(_t)
                }
            }

            function Q(t) {
                return "string" != typeof t ? t : t.match(/([-.\d]+(?:%|ms|s|deg|cm|em|ch|ex|q|in|mm|pc|pt|px|vh|vw|vmin|vmax)?)|[%#A-Za-z0-9,.()]+/g)
            }

            function tt(t) {
                return t.trim().split("-").map(function(t, e) {
                    return 0 < e ? (n = t).charAt(0).toUpperCase() + n.slice(1) : t;
                    var n
                }).join("")
            }

            function et(t) {
                var e, n, r, i, o = t.split(":").map($),
                    a = tt(o[0]),
                    u = (e = o[1], n = o[0], ft.test(e) ? "string" == typeof(r = e) ? "true" === r : r : ct.test(e) ? parseInt(e, 10) : dt.test(e) ? parseFloat(e) : yt.test(e) ? 1 === (i = e.match(/url\((.*?)\)/g).map(function(t) {
                        return t.substring(4, t.length - 1)
                    })).length ? i[0] : i : ht.test(n) ? vt.test(e) ? X(e, K) : X(e, Et) : pt.test(n) ? X(e, Q) : gt.test(n) && "none" !== e ? X(e, J) : e);
                return a && null != u ? {
                    property: a,
                    value: u
                } : null
            }

            function nt(t) {
                return t
            }

            function rt(t) {
                return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
            }
            var it = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                },
                ot = function(t) {
                    var e = !1;
                    return t.views.filter(function(t) {
                        return t.presenter !== cn
                    }).forEach(function(t) {
                        t.presenter.draw() && (e = !0)
                    }), e
                },
                at = function(n) {
                    var r = !1;
                    return n.views.forEach(function(t, e) {
                        n.definitions[e].presenter.draw() && (r = !0)
                    }), r
                },
                ut = "undefined" == typeof document ? null : function() {
                    for (var t = ["webkit", "Moz", "ms", "O"], e = 0, n = t.length, r = document.createElement("div").style; e < n; e++)
                        if (t[e] + "Transform" in r) return t[e];
                    return null
                }(),
                lt = function(t, e) {
                    t.style.transform = e.map(function(t) {
                        return t.name + "(" + t.value + t.unit + ")"
                    }).join(" ")
                },
                st = {},
                ct = new RegExp("^[0-9]+$"),
                ft = new RegExp("^(true|false)$"),
                dt = new RegExp("^[0-9.]+$"),
                ht = new RegExp("color"),
                pt = new RegExp("shadow"),
                vt = new RegExp("^(follow-gradient|horizontal-gradient|vertical-gradient)"),
                mt = new RegExp("^[.0-9]+(?:ms|s){1}$"),
                gt = new RegExp("^transition-?(?:in|out)?$"),
                yt = new RegExp("^url\\("),
                wt = function(t) {
                    var e = t.match(/([a-z]+(?:\(.*?\))?)\s?(?:origin\((.*?)\))?\s?([a-z]+(?:\(.*?\))?)?\s?(?:([.0-9ms]+)?\s?(?:(ease-[a-z-]+))?\s?([.0-9ms]+)?)?/),
                        n = se(e[1]),
                        r = cn,
                        i = cn,
                        o = cn,
                        a = cn,
                        u = cn;
                    return e.slice(2).filter(function(t) {
                        return void 0 !== t
                    }).forEach(function(t) {
                        mt.test(t) ? void 0 === i ? i = Z(t) : a = Z(t) : / /.test(t) ? r = t : /^ease-[a-z-]+$/.test(t) ? o = t : /^[a-z]+/.test(t) && (u = se(t))
                    }), u && (o = i = cn), {
                        name: n.name,
                        parameters: n.parameters,
                        duration: i,
                        ease: o,
                        delay: a,
                        origin: r,
                        resolver: u
                    }
                },
                bt = /\s([\d]{1,3})%?$/,
                _t = function(t) {
                    var e = t.match(bt);
                    return {
                        offset: e ? parseFloat(e[1]) / 100 : null,
                        value: Et(t.replace(bt, ""))
                    }
                },
                At = [],
                Mt = "undefined" == typeof document ? function(t) {
                    return 0
                } : function(t) {
                    var e, n, r, i, o = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : document.body,
                        a = 2 < arguments.length && arguments[2] !== cn ? arguments[2] : null;
                    if (0 == t) return 0;
                    if (a) {
                        var u = (i = o, (At[r = a] ? At[r].find(function(t) {
                            return t.node.parentNode === i
                        }) : null) || {});
                        return u.node || (u.node = document.createElement("span"), u.node.style.cssText = "position:absolute;padding:0;visibility:hidden;", o.appendChild(u.node)), u.node.style.marginTop = t, u.style || (u.style = window.getComputedStyle(u.node)), n = u, At[e = a] || (At[e] = []), At[e].push(n), parseInt(u.style.marginTop, 10)
                    }
                    var l = document.createElement("span");
                    return l.style.cssText = "position:absolute;padding:0;visibility:hidden;margin-top:" + t, o.appendChild(l), requestAnimationFrame(function() {
                        l.parentNode.removeChild(l)
                    }), parseInt(window.getComputedStyle(l).marginTop, 10)
                },
                Et = "undefined" == typeof document ? function(t) {
                    return t
                } : function(t) {
                    if ("transparent" === t) return "rgba(0,0,0,0)";
                    var e = document.createElement("span");
                    return e.style.cssText = "position:absolute;visibility:hidden;color:" + t, document.body.appendChild(e), requestAnimationFrame(function() {
                        e.parentNode.removeChild(e)
                    }), window.getComputedStyle(e).getPropertyValue("color")
                },
                kt = {
                    "ease-linear": nt,
                    "ease-in-sine": function(t) {
                        return -1 * Math.cos(t * (Math.PI / 2)) + 1
                    },
                    "ease-out-sine": function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    "ease-in-out-sine": function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    "ease-in-cubic": function(t) {
                        return t * t * t
                    },
                    "ease-out-cubic": function(t) {
                        var e = t - 1;
                        return e * e * e + 1
                    },
                    "ease-in-out-cubic": function(t) {
                        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                    },
                    "ease-in-circ": function(t) {
                        var e = +t;
                        return -1 * (Math.sqrt(1 - e * t) - 1)
                    },
                    "ease-out-circ": function(t) {
                        var e = t - 1;
                        return Math.sqrt(1 - e * e)
                    },
                    "ease-in-out-circ": function(t) {
                        var e = 2 * t,
                            n = e - 2;
                        return e < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - n * n) + 1)
                    },
                    "ease-in-quad": function(t) {
                        return t * t
                    },
                    "ease-out-quad": function(t) {
                        return t * (2 - t)
                    },
                    "ease-in-out-quad": rt,
                    "ease-in-quart": function(t) {
                        return t * t * t * t
                    },
                    "ease-out-quart": function(t) {
                        return 1 - --t * t * t * t
                    },
                    "ease-in-out-quart": function(t) {
                        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
                    },
                    "ease-in-expo": function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    "ease-out-expo": function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    "ease-in-out-expo": function(t) {
                        if (0 === t || 1 === t) return t;
                        var e = 2 * t,
                            n = e - 1;
                        return e < 1 ? .5 * Math.pow(2, 10 * n) : .5 * (2 - Math.pow(2, -10 * n))
                    },
                    "ease-in-back": function(t, e) {
                        var n = 1 < arguments.length && e !== cn ? e : 1.70158,
                            r = +t;
                        return r * r * ((n + 1) * r - n)
                    },
                    "ease-out-back": function(t, e) {
                        var n = 1 < arguments.length && e !== cn ? e : 1.70158,
                            r = t - 1;
                        return r * r * ((n + 1) * r + n) + 1
                    },
                    "ease-in-out-back": function(t, e) {
                        var n = 2 * t,
                            r = n - 2,
                            i = 1.525 * (1 < arguments.length && e !== cn ? e : 1.70158);
                        return n < 1 ? .5 * n * n * ((1 + i) * n - i) : .5 * (r * r * ((1 + i) * r + i) + 2)
                    },
                    "ease-out-elastic": function(t, e) {
                        var n = 1 - (1 < arguments.length && e !== cn ? e : .7),
                            r = 2 * t;
                        if (0 === t || 1 === t) return t;
                        var i = n / (2 * Math.PI) * Math.asin(1);
                        return Math.pow(2, -10 * r) * Math.sin((r - i) * (2 * Math.PI) / n) + 1
                    },
                    "ease-out-bounce": function(t) {
                        var e = +t;
                        if (e < 1 / 2.75) return 7.5625 * e * e;
                        if (e < 2 / 2.75) {
                            var n = e - 1.5 / 2.75;
                            return 7.5625 * n * n + .75
                        }
                        if (e < 2.5 / 2.75) {
                            var r = e - 2.25 / 2.75;
                            return 7.5625 * r * r + .9375
                        }
                        var i = e - 2.625 / 2.75;
                        return 7.5625 * i * i + .984375
                    }
                };
            e(s.EASING_FUNCTION, kt);

            function Dt(e, t, n, r, i) {
                var o = 3 < arguments.length && r !== cn ? r : nt;
                return Tt(function(t) {
                    e(o(t))
                }, t, 2 < arguments.length && n !== cn ? n : 500, 4 < arguments.length && i !== cn ? i : 0)
            }

            function xt(t) {
                for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                var a, u, i = (u = {
                    velocity: 0,
                    origin: 0,
                    position: 0,
                    destination: 1
                }, {
                    getPosition: function() {
                        return u.position
                    },
                    cancel: l,
                    translate: function(r, t, e, i) {
                        l(), null === e ? u.destination = t : (u.position = t, u.destination = e, u.velocity = 0), u.origin = u.position;
                        var o = null;
                        ! function t(e) {
                            a = requestAnimationFrame(t);
                            var n = e - (o = o || e);
                            n <= 1e3 / 24 || (o = e - n % (1e3 / 24), i(u, l), r(u.position))
                        }(Me())
                    }
                });

                function l() {
                    cancelAnimationFrame(a)
                }
                var o = {
                    update: a = null,
                    cancel: i.cancel,
                    getPosition: i.getPosition
                };
                return "arrive" === t ? o.update = Rt.apply(cn, [i.translate].concat(n)) : "spring" === t ? o.update = Ut.apply(cn, [i.translate].concat(n)) : "step" === t && (o.update = Lt.apply(cn, [i.translate].concat(n))), o
            }

            function Ct(t) {
                var o = t.map(function(t) {
                    return zt(Pt(t.name, t.parameters, t.ease), t.origin, t.duration, t.delay)
                });
                return function(e, n, r) {
                    if (!V(e)) return !1;
                    var i = o.length;
                    o.forEach(function(t) {
                        t(e, n, function() {
                            !--i && r && r(e)
                        })
                    })
                }
            }

            function Nt(e) {
                var n = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : {};
                return e.lastAppliedStyles = null, jt(e, n, e.root.dataset.style), e.styleObserver = Y(e.root, ["data-style"], function(t) {
                    jt(e, n, t)
                }), {
                    setStyle: function(t) {
                        jt(e, n, t)
                    }
                }
            }

            function Ot(t) {
                return t[ut + "BackingStorePixelRatio"] || t.backingStorePixelRatio || 1
            }

            function St() {
                return window.devicePixelRatio || 1
            }

            function It(t) {
                t.getContext("2d").clearRect(0, 0, t.width, t.height)
            }
            var Tt = function(n, t, e, r) {
                    var i = 1 < arguments.length && t !== cn ? t : null,
                        o = 2 < arguments.length && e !== cn ? e : 500,
                        a = 3 < arguments.length && r !== cn ? r : 0;
                    if (!n) return null;
                    var u = null,
                        l = void 0,
                        s = null;
                    return function t(e) {
                            if (null === u && (u = e), (l = e - u - a) < o) return n(0 <= l ? l / o : 0), s = requestAnimationFrame(t), null;
                            n(1), i && i()
                        }(Me()),
                        function() {
                            cancelAnimationFrame(s)
                        }
                },
                Rt = function(e, t, n) {
                    var i = 1 < arguments.length && t !== cn ? t : 1,
                        o = 2 < arguments.length && n !== cn ? n : .01;
                    return function(t) {
                        e(t, 1 < arguments.length && arguments[1] !== cn ? arguments[1] : null, 2 < arguments.length && arguments[2] !== cn ? arguments[2] : null, function(t, e) {
                            var n = t.destination - t.position,
                                r = t.origin + .5 * (t.destination - t.origin);
                            t.velocity += 2 * (-(r - t.origin) + n) * o, t.position += t.velocity < 0 ? Math.max(t.velocity, -i) : Math.min(t.velocity, i), (t.origin < t.destination && t.position >= t.destination || t.origin >= t.destination && t.position <= t.destination) && (e(), t.velocity = 0, t.position = t.destination)
                        })
                    }
                },
                Lt = function(e, t) {
                    var n = 1 < arguments.length && t !== cn ? t : .01;
                    return function(t) {
                        e(t, 1 < arguments.length && arguments[1] !== cn ? arguments[1] : null, 2 < arguments.length && arguments[2] !== cn ? arguments[2] : null, function(t, e) {
                            t.velocity = n, t.position += t.velocity, (t.origin < t.destination && t.position >= t.destination || t.origin >= t.destination && t.position <= t.destination) && (e(), t.velocity = 0, t.position = t.destination)
                        })
                    }
                },
                Ut = function(e, t, n, r) {
                    var i = 1 < arguments.length && t !== cn ? t : .5,
                        o = 2 < arguments.length && n !== cn ? n : .75,
                        a = 3 < arguments.length && r !== cn ? r : 10;
                    return function(t) {
                        e(t, 1 < arguments.length && arguments[1] !== cn ? arguments[1] : null, 2 < arguments.length && arguments[2] !== cn ? arguments[2] : null, function(t, e) {
                            var n = -(t.position - t.destination) * i;
                            t.velocity += n / a, t.position += t.velocity, t.velocity *= o, Ft(t.position, t.destination, t.velocity) && (e(), t.position = t.destination, t.velocity = 0)
                        })
                    }
                },
                Ft = function(t, e, n, r) {
                    var i = 3 < arguments.length && r !== cn ? r : .001;
                    return Math.abs(t - e) < i && Math.abs(n) < i
                },
                Pt = function(t, r, e) {
                    var i = e ? c(s.EASING_FUNCTION, e) : e,
                        o = c(s.TRANSITION, t);
                    return function(t, e, n) {
                        o.apply(cn, [t, n, e, i].concat(j(r)))
                    }
                },
                zt = function(i, t, e, n) {
                    var o = 1 < arguments.length && t !== cn ? t : "50% 50% 0",
                        a = 2 < arguments.length && e !== cn ? e : 500,
                        u = n;
                    return function(e) {
                        var t, n = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 1,
                            r = arguments[2];
                        t = o, e.style.transformOrigin = t, Tt(function(t) {
                            i(e, n, t)
                        }, r, a, u)
                    }
                },
                jt = function(t, e, n) {
                    if (t.lastAppliedStyles !== n) {
                        t.lastAppliedStyles = n, t.style = n ? we(e, n.split(";").filter(function(t) {
                            return t.trim().length
                        }).map(et).filter(function(t) {
                            return null !== t
                        }).reduce(function(t, e) {
                            return t[e.property] = e.value, t
                        }, {})) : e;
                        var r = [],
                            i = [];
                        t.style.transitionIn && t.style.transitionIn.length ? (r = t.style.transitionIn, i = t.style.transitionOut) : t.style.transition && "none" !== t.style.transition && t.style.transition.forEach(function(t) {
                            var e, n = (e = t, c(s.TRANSITION, e.name).apply(cn, j(e.parameters || [])));
                            r = r.concat(n.intro), i = i.concat(n.outro)
                        }), r && i && (t.transitionIn = Ct(r), t.transitionOut = Ct(i), t.skipToTransitionInEnd = Ct(r.map(qt)), t.skipToTransitionOutEnd = Ct(i.map(qt))), t.dirty = !0
                    }
                },
                qt = function(t) {
                    var e = _e(t);
                    return e.duration = 0, e.delay = 0, e
                },
                Gt = {
                    text: function() {
                        return function(t) {
                            var e = {};
                            return Object.assign({}, A(e, t, "text"), k(e), E(e, function(t) {
                                var e, n, r;
                                t.root.setAttribute("data-value", t.value), e = t.root, n = t.value, (r = e.childNodes[0]) ? n !== r.nodeValue && (r.nodeValue = n) : (r = document.createTextNode(n), e.appendChild(r))
                            }), _(e))
                        }
                    }
                };
            e(s.VIEW, Gt);

            function Wt(t, e, n) {
                return function(t, e, n) {
                    var r = {
                        valueMapping: null
                    };
                    if (t && t.dataset.valueMapping) {
                        var i = t.dataset.valueMapping;
                        r.valueMapping = -1 !== ["none", "indexes"].indexOf(i) ? i : null
                    }
                    return Object.assign({}, A(r, t), D(r), k(r), M(r, e), E(r, q, ot, n), _(r))
                }(t, e, n)
            }

            function Yt(t, e, n) {
                return r = t, i = e, o = n, a = {
                    definitions: []
                }, Object.assign({}, A(a, r), k(a), M(a, i), E(a, G, at, o), _(a));
                var r, i, o, a
            }

            function Vt(t, e, n) {
                var r = c(s.VIEW, t);
                return r ? r({
                    Extension: {
                        Type: s,
                        getExtension: c
                    },
                    Utils: {
                        toPixels: Mt,
                        toColor: Et
                    },
                    Canvas: {
                        clear: It,
                        getDevicePixelRatio: St,
                        getBackingStoreRatio: Ot
                    },
                    DOM: {
                        visible: H,
                        create: W,
                        transform: B
                    },
                    Animation: {
                        animate: Dt
                    },
                    Data: {
                        request: Ee
                    },
                    Date: {
                        performance: Me
                    },
                    View: {
                        rooter: A,
                        drawer: E,
                        updater: k,
                        styler: Nt,
                        grouper: M,
                        resizer: D,
                        destroyer: _
                    }
                })(e, n) : null
            }

            function Bt(t) {
                return 0 !== t.trim().length
            }

            function Ht(t, e) {
                return t.push(e.trim())
            }

            function $t(t, e) {
                return Bt(e) ? (Ht(t, e), "") : e
            }

            function Xt(t, e) {
                return t.length && e.push(1 < t.length ? t.concat() : t[0]), []
            }

            function Zt(t) {
                var e = [];
                return function t(e, n, r) {
                    for (var i, o, a, u = "", l = [], s = null, c = !1; e < n.length;) {
                        var f = n[e];
                        if ("(" === f) {
                            c = !1;
                            var d = [u.trim()];
                            f = n[e = t(e + 1, n, d)], l.push(d), u = ""
                        } else {
                            if (")" === f) return c && u.trim().length && (l.push([u.trim()]), u = "", c = !1), Bt(u) && Ht(l, u), l = Xt(l, r), e + 1;
                            null !== s && f !== s ? u += f : f === s ? (l.push(u), u = "", s = null) : "'" === (a = f) || '"' === a ? (u = "", s = f) : "-" === (i = n)[o = e] && ">" === i[o + 1] ? (c = !0, u.trim().length && (l.push([u.trim()]), u = ""), e += 2) : "," === f ? (c && u.trim().length && (l.push([u.trim()]), u = "", c = !1), l = Xt(l, r), u = $t(r, u)) : u += f, e++
                        }
                    }
                    return (c && u.trim().length || !c && u.trim().length && !l.length) && (l.push([u.trim()]), u = ""), Xt(l, r), $t(r, u), e
                }(0, t, e), e
            }

            function Jt(a) {
                function u(e, t) {
                    e.transform(t, function(t) {
                        e.presenter.update(t)
                    }, a), n || (n = !0, r())
                }
                var n = !1,
                    r = function t() {
                        a.baseDefinition.presenter.draw(), requestAnimationFrame(t)
                    };
                return function t(e) {
                    var n, r, i, o;
                    return e.presenter = (r = t, o = void 0, (n = e).repeat ? o = Yt(n.root, n.repeat, r) : "string" == typeof n.view ? o = Vt(n.view, n.root, n.style) : (i = n).children && i.children.length && (o = Wt(n.root, n.children, r)), o), e.transform = ue(e.transform, a), u
                }(a.baseDefinition)
            }

            function Kt(i) {
                for (var t = arguments.length, o = Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) o[e - 1] = arguments[e];
                return function(t, r) {
                    ! function t(e, n) {
                        o.length <= e ? r(n) : o[e](n, ae(t, [e + 1]), i)
                    }(0, t)
                }
            }

            function Qt(t) {
                return t.substring(1, t.length - 1)
            }

            function te(t) {
                var e = (t + "").match(/(-?[.\d]+)(%|ms|s|deg|cm|em|ch|ex|q|in|mm|pc|pt|px|vh|vw|vmin|vmax)?/);
                return {
                    value: parseFloat(e[1]),
                    units: e[2]
                }
            }

            function ee(t) {
                var n = window,
                    r = t.split(".");
                return r.forEach(function(t, e) {
                    n[r[e]] && (n = n[r[e]])
                }), n !== window ? n : null
            }

            function ne(t) {
                return /^(?:[\w]+\s?:\s?[\w.]+,\s?)+(?:[\w]+\s?:\s?[\w.]+)$/g.test(t) ? t.match(/(?:(\w+)\s?:\s?([\w.]+))/g).reduce(function(t, e) {
                    var n = e.split(":");
                    return t[n[0]] = ye(n[1]), t
                }, {}) : ye(t)
            }

            function re(t) {
                return parseInt(t, 10)
            }
            var ie = function t(e) {
                    var n = {};
                    for (var r in e) e.hasOwnProperty(r) && (n[r] = "root" !== r ? "children" !== r ? "repeat" !== r ? e[r] : null === e[r] ? null : t(e[r]) : null === e[r] ? null : e[r].map(t) : e[r].cloneNode());
                    return n.presenter = null, n
                },
                oe = {
                    root: null,
                    key: null,
                    view: null,
                    overlay: null,
                    presenter: null,
                    transform: null,
                    layout: null,
                    style: null,
                    repeat: null,
                    children: null,
                    className: null
                },
                ae = function(e, t, n) {
                    var r = 1 < arguments.length && t !== cn ? t : [],
                        i = n;
                    return function() {
                        var t = Array.from(r);
                        return Array.prototype.push.apply(t, arguments), e.apply(i, t)
                    }
                },
                ue = function(t, e) {
                    if (!t) return function(t, e) {
                        return e(t)
                    };
                    if ("function" == typeof t) return t;
                    var n = Zt("transform(" + (/^[a-z]+$/.test(t) ? t + "()" : t) + ")");
                    return le(n, e)
                },
                le = function i(t, o) {
                    var e = t.map(function(t) {
                        var e = t.shift(),
                            n = c(s.TRANSFORM, e) || function(t, e, n) {
                                e(t)
                            },
                            r = t.map(function(t) {
                                return Array.isArray(t) ? "string" == typeof t[0] ? i([t], o) : i(t, o) : ye(t)
                            });
                        return n.apply(cn, j(r))
                    });
                    return Kt.apply(cn, [o].concat(j(e)))
                },
                se = function(t) {
                    var e = t.match(/[a-z]+/)[0];
                    return {
                        name: e,
                        parameters: ce(t.substring(e.length))
                    }
                },
                ce = function(t) {
                    return (t.match(/('.+?')|(".+?")|(\[.+?])|([.:\-\d\sa-zA-Z]+%?)/g) || []).map(be).filter(function(t) {
                        return t.length
                    }).map(ye)
                },
                fe = /^([\d]{4}-[\d]{1,2}-[\d]{1,2})/,
                de = /^(true|false)$/,
                he = /^[\a-zA-Z]+$/,
                pe = /^0[\d]+/,
                ve = /^('|")/,
                me = /^-?(?:\d+)?(?:\.|0\.)?[\d]+$/,
                ge = /^(\[)/,
                ye = function(t) {
                    return de.test(t) ? "true" === t : ge.test(t) ? ce(Qt(t)) : fe.test(t) ? l(t) : ve.test(t) ? Qt(t) : !he.test(t) && !pe.test(t) && me.test(t) ? parseFloat(t) : t
                },
                we = function(t, e) {
                    var n = 1 < arguments.length && e !== cn ? e : {},
                        r = void 0,
                        i = {};
                    for (r in t) t.hasOwnProperty(r) && (i[r] = void 0 === n[r] ? t[r] : n[r]);
                    return i
                },
                be = function(t) {
                    return t.trim()
                },
                _e = function(t) {
                    return "object" === (void 0 === t ? "undefined" : L(t)) && null !== t ? JSON.parse(JSON.stringify(t)) : t
                },
                Ae = function(t) {
                    return t.slice()
                },
                Me = function() {
                    return window.performance.now()
                },
                Ee = function(t, e, n, r) {
                    var i = new XMLHttpRequest;
                    r && r(i), i.open("GET", t, !0), i.onload = function() {
                        e(i.response)
                    }, n && (i.onerror = function() {
                        n(i, i.status)
                    }), i.send()
                },
                ke = function(t, e) {
                    return De(t) ? xe(t, e) : Array.isArray(t) ? Ce(t, e) : t === e
                },
                De = function(t) {
                    return t === Object(t)
                },
                xe = function(t, e) {
                    for (var n in t)
                        if (!e.hasOwnProperty(n) || t[n] !== e[n]) return !1;
                    return !0
                },
                Ce = function(t, n) {
                    return t.length == n.length && t.every(function(t, e) {
                        return t === n[e]
                    })
                },
                Ne = function(t) {
                    return Object.keys(t).map(function(t) {
                        return '"' + t + '"'
                    }).join(", ")
                },
                Oe = (P(Se, [{
                    key: "isRootElement",
                    value: function(t) {
                        return this._element === t
                    }
                }, {
                    key: "setConstant",
                    value: function(t, e) {
                        this._constants[t] = e
                    }
                }, {
                    key: "getConstants",
                    value: function() {
                        return this._constants
                    }
                }, {
                    key: "getConstant",
                    value: function(t) {
                        return this._constants[t]
                    }
                }, {
                    key: "setPreset",
                    value: function(t, e) {
                        this._presets[t] = e
                    }
                }, {
                    key: "getPreset",
                    value: function(t) {
                        return this._presets[t]
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._willDestroy(this), this._observer.disconnect(), this.baseDefinition.presenter.destroy(), this._didDestroy(this)
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        this.baseDefinition && this.baseDefinition.presenter && (this.baseDefinition.presenter.reset(), this.baseDefinition.presenter.draw(), this._updater(this.baseDefinition, this._value))
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var e = this;
                        this._viewDefinition = this._options.view, this._willDestroy = this._options.willDestroy, this._didDestroy = this._options.didDestroy, this._didInit = this._options.didInit, this._didUpdate = this._options.didUpdate, this._value = this._options.value, this._presets = this._options.presets, this._constants = this._options.constants, this._element.classList.contains("tick") || this._element.classList.add("tick"), this._observer = Y(this._element, ["data-value"], function(t) {
                            e.value = t
                        }), this._viewDefinition.root !== this._element && (Array.from(this._viewDefinition.root.children).forEach(function(t) {
                            e._element.appendChild(t)
                        }), this._viewDefinition.root = this._element), this._viewDefinition.view || this._viewDefinition.children || (this._viewDefinition.view = "text"), this._updater = Jt(this), null !== this.value && this._update(this.value), this._element.dataset.state = "initialised", this._didInit(this, this.value)
                    }
                }, {
                    key: "_update",
                    value: function(t) {
                        this._updater(this.baseDefinition, t), this._didUpdate(this, t)
                    }
                }, {
                    key: "baseDefinition",
                    get: function() {
                        return this._viewDefinition
                    }
                }, {
                    key: "root",
                    get: function() {
                        return this._element
                    }
                }, {
                    key: "value",
                    get: function() {
                        return this._value
                    },
                    set: function(t) {
                        this._value = "string" == typeof t ? ne(t) : t, this._update(t)
                    }
                }], [{
                    key: "options",
                    value: function() {
                        return {
                            constants: Ve(),
                            presets: Be(),
                            value: null,
                            view: null,
                            didInit: function() {},
                            didUpdate: function() {},
                            willDestroy: function() {},
                            didDestroy: function() {}
                        }
                    }
                }]), Se);

            function Se() {
                var t = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : {},
                    e = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : document.createElement("div");
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, Se), this._options = we(Se.options(), t), this._element = e, this._value = null, this._observer = null, this._viewDefinition = null, this._constants = null, this._presets = null, this._updater = null, this._didInit = null, this._didDestroy = null, this._willDestroy = null, this._didUpdate = null, this._init()
            }

            function Ie(t, e, n, r) {
                return {
                    label: 1 === t ? e : n,
                    progress: t / r,
                    value: t
                }
            }

            function Te(e) {
                var t = Ye.filter(function(t) {
                    return t.isRootElement(e)
                });
                return t ? t[0] : null
            }

            function Re(t) {
                return function() {
                    setTimeout(t, 0)
                }
            }

            function Le() {
                return Date.now()
            }

            function Ue(r, t, e) {
                function n() {
                    return m
                }

                function i() {
                    return null !== d
                }

                function o() {
                    return document.hidden
                }

                function a() {
                    var t = Le(),
                        e = f - t,
                        n = s + e;
                    f = t + n, r(t - d - p + e), g = setTimeout(a, n)
                }

                function u() {
                    n() ? y() : i() || (d = Le(), setTimeout(function() {
                        r(0)
                    }, 0), M(), o() ? _() : (f = Le() + s, g = setTimeout(function() {
                        a()
                    }, s)))
                }

                function l() {
                    clearTimeout(g), p = 0, v = h = f = d = g = null, m = !1, A()
                }
                var s = 1 < arguments.length && t !== cn ? t : 1e3,
                    c = we({
                        autostart: !0
                    }, 2 < arguments.length && e !== cn ? e : {}),
                    f = null,
                    d = null,
                    h = null,
                    p = 0,
                    v = null,
                    m = !1,
                    g = null,
                    y = function() {
                        n() && i() && !o() && (m = !1, M(), b())
                    },
                    w = function() {
                        clearTimeout(g), h = Le(), v = f - h
                    },
                    b = function() {
                        p += Le() - h, h = null, f = Le() + v, g = setTimeout(function() {
                            a()
                        }, v)
                    },
                    _ = function() {
                        w()
                    },
                    A = function() {
                        document.removeEventListener("visibilitychange", E)
                    },
                    M = function() {
                        document.addEventListener("visibilitychange", E)
                    },
                    E = function() {
                        o() ? _() : i() && b()
                    };
                return c.autostart && u(), {
                    start: u,
                    stop: Re(l),
                    reset: Re(function() {
                        l(), u()
                    }),
                    pause: Re(function() {
                        i() && !o() && (m = !0, A(), w())
                    }),
                    resume: y
                }
            }

            function Fe(t) {
                /^[\d]+/.test(t) || (t = "1 " + t);
                var e = t.split(" ");
                return parseFloat(e[0]) * h[e[1].toLowerCase()]
            }

            function Pe(t, e) {
                return n = t, r = e.split(":").map(re), n.setHours(r[0] || 0, r[1] || 0, r[2] || 0, r[3] || 0), n;
                var n, r
            }

            function ze(r, e) {
                var t = e.match(/(?:mon|tues|wednes|thurs|fri|satur|sun)day|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);
                if (1 < t.length) {
                    var n = "";
                    t.forEach(function(t) {
                        n = e.split(t)[1] || ""
                    });
                    var i = n.trim().match(/wait\s[\d]+\s[a-z]+/);
                    i && t.push(i[0])
                }
                var o = t.reduce(function(t, e) {
                    var n;
                    return /(?:mon|tues|wednes|thurs|fri|satur|sun)day/.test(e) && (t.day = x[(n = e).charAt(0).toUpperCase() + n.slice(1)]), /^at/.test(e) ? t.time = Pe(S(r), e.substr(3)) : /wait/.test(e) && (t.idle = Fe(e.substr(5))), t
                }, {
                    idle: null,
                    day: null,
                    time: null,
                    date: null,
                    dist: null,
                    wait: !1
                });
                if (o.time) {
                    o.time = f(o.time, o.day);
                    var a = o.time - r;
                    if (a < 0 && (o.time.setDate(o.time.getDate() + 7), a = o.time - r), null !== o.idle && a >= h.Week - o.idle) return o.wait = !0, o;
                    o.dist = a
                } else {
                    o.time = f(S(r), o.day);
                    var u = Je(o.time, e);
                    if (u.wait) return o;
                    o.time = S(m(r, o.time) && u.date ? u.date : u.from);
                    var l = o.time - r;
                    l < 0 && o.time.setDate(o.time.getDate() + 7), o.dist = l
                }
                return o.date = S(o.time), o
            }

            function je(t, e) {
                return /januari|februari|march|april|may|june|july|august|september|october|november|december/.test(e) ? function(n, e) {
                    var t = e.match(/januari|februari|march|april|may|june|july|august|september|october|november|december|[\d]+th|\dst|\dnd|first|last|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);
                    if (1 < t.length) {
                        var r = "";
                        t.forEach(function(t) {
                            r = e.split(t)[1] || ""
                        });
                        var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);
                        i && t.push(i[0])
                    }
                    var o = t.reduce(function(t, e) {
                        return /([\d]+th|\dst|\dnd|first|last)/.test(e) && (t.day = /^[\d]/.test(e) ? parseInt(e, 10) : "first" === e ? 1 : e), /^at/.test(e) ? t.time = Pe(S(n), e.substr(3)) : /wait/.test(e) ? t.idle = Fe(e.substr(5)) : /^[\a-zA-Z]+$/.test(e) && (t.month = e), t
                    }, {
                        idle: null,
                        day: null,
                        month: null,
                        time: null,
                        date: null,
                        dist: null,
                        wait: !1
                    });
                    if (o.time) {
                        o.time.setDate(1), o.time = p(o.time, o.month), o.time = d(o.time, o.day);
                        var a = o.time - n,
                            u = 0;
                        if (a < 0 && (u = a, o.time.setFullYear(o.time.getFullYear() + 1), a = o.time - n), null !== o.idle && 0 < u + o.idle) return o.wait = !0, o;
                        o.dist = a
                    } else {
                        o.time = S(n), o.time.setDate(1), o.time = p(o.time, o.month), o.time = d(o.time, o.day);
                        var l = Je(o.time, e);
                        if (l.wait) return o;
                        o.time = S(m(n, o.time) && l.date ? l.date : l.from);
                        var s = o.time - n;
                        s < 0 && (o.time = S(l.from), o.time.setFullYear(o.time.getFullYear() + 1), s = o.time - n), o.dist = s
                    }
                    return o.date = S(o.time), o
                }(t, e) : /month/.test(e) ? function(n, e) {
                    var t = e.match(/[\d]+th|\dst|\dnd|first|last|at\s[\d]+(?::[\d]+)?(?::[\d]+)?/g);
                    if (1 < t.length) {
                        var r = "";
                        t.forEach(function(t) {
                            r = e.split(t)[1] || ""
                        });
                        var i = r.trim().match(/wait\s[\d]+\s[a-z]+/);
                        i && t.push(i[0])
                    }
                    var o = t.reduce(function(t, e) {
                        return /([\d]+th|\dst|\dnd|first|last)/.test(e) && (t.day = /^[\d]/.test(e) ? parseInt(e, 10) : "first" === e ? 1 : e), /^at/.test(e) ? t.time = Pe(S(n), e.substr(3)) : /wait/.test(e) && (t.idle = Fe(e.substr(5))), t
                    }, {
                        idle: null,
                        day: null,
                        time: null,
                        date: null,
                        dist: null,
                        wait: !1
                    });
                    if (o.time) {
                        o.time = d(o.time, o.day);
                        var a = o.time - n,
                            u = 0;
                        if (a < 0 && (u = a, o.time.setDate(1), o.time.setMonth(o.time.getMonth() + 1), d(o.time, o.day), a = o.time - n), null !== o.idle && 0 < u + o.idle) return o.wait = !0, o;
                        o.dist = a
                    } else {
                        o.time = d(S(n), o.day);
                        var l = Je(o.time, e);
                        if (l.wait) return o;
                        o.time = S(m(n, o.time) && l.date ? l.date : l.from);
                        var s = o.time - n;
                        s < 0 && (o.time = S(l.from), o.time.setDate(1), o.time.setMonth(o.time.getMonth() + 1), d(o.time, o.day), s = o.time - n), o.dist = s
                    }
                    return o.date = S(o.time), o
                }(t, e) : /(?:mon|tues|wednes|thurs|fri|satur|sun)day/.test(e) ? ze(t, e) : /day at/.test(e) || /^at /.test(e) ? (n = t, r = e.match(/([\d]+(?::[\d]+)?(?::[\d]+)?)|(wait\s[\d]+\s[a-z]+)/g).reduce(function(t, e) {
                    return /^[\d]/.test(e) ? t.time = Pe(S(n), e) : /wait/.test(e) && (t.idle = Fe(e.substr(5))), t
                }, {
                    idle: null,
                    time: null,
                    date: null,
                    wait: !1,
                    dist: null
                }), (i = r.time - n) < 0 && (r.time.setDate(r.time.getDate() + 1), i = r.time - n), null !== r.idle && i >= h.Day - r.idle ? r.wait = !0 : (r.dist = i, r.date = S(r.time)), r) : /hours|hour|minutes|minute|seconds|second/.test(e) ? Je(t, e) : null;
                var n, r, i
            }

            function qe(t, e) {
                if (!0 === t) return n = function(t) {
                    e(t.getTime() - b().getTime())
                }, r = new XMLHttpRequest, i = Date.now(), r.open("HEAD", window.location + "?noCache=" + i), r.setRequestHeader("Content-Type", "text/html"), r.setRequestHeader("Cache-Control", "no-cache"), r.onload = function() {
                    var t = .5 * (i - Date.now()),
                        e = new Date(r.getResponseHeader("Date"));
                    n(new Date(e.getTime() + t))
                }, void r.send();
                var n, r, i;
                "string" != typeof t ? setTimeout(function() {
                    e(0)
                }, 0) : setTimeout(function() {
                    e(l(t).getTime() - b().getTime())
                }, 0)
            }

            function Ge(t) {
                return it({
                    complete: !1,
                    offset: null,
                    value: null,
                    timer: null,
                    onload: function() {},
                    onupdate: function() {}
                }, t)
            }

            function We() {
                var n = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : 0,
                    r = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 100;
                return function(t, e) {
                    return e((parseFloat(t) - n) / (r - n))
                }
            }
            var Ye = [],
                Ve = function() {
                    return He
                },
                Be = function() {
                    return $e
                },
                He = {
                    YEAR_PLURAL: "Years",
                    YEAR_SINGULAR: "Year",
                    MONTH_PLURAL: "Months",
                    MONTH_SINGULAR: "Month",
                    WEEK_PLURAL: "Weeks",
                    WEEK_SINGULAR: "Week",
                    DAY_PLURAL: "Days",
                    DAY_SINGULAR: "Day",
                    HOUR_PLURAL: "Hours",
                    HOUR_SINGULAR: "Hour",
                    MINUTE_PLURAL: "Minutes",
                    MINUTE_SINGULAR: "Minute",
                    SECOND_PLURAL: "Seconds",
                    SECOND_SINGULAR: "Second",
                    MILLISECOND_PLURAL: "Milliseconds",
                    MILLISECOND_SINGULAR: "Millisecond"
                },
                $e = {
                    y: function(t, e) {
                        return Ie(t, e.YEAR_SINGULAR, e.YEAR_PLURAL, 10)
                    },
                    M: function(t, e) {
                        return Ie(t, e.MONTH_SINGULAR, e.MONTH_PLURAL, 12)
                    },
                    w: function(t, e) {
                        return Ie(t, e.WEEK_SINGULAR, e.WEEK_PLURAL, 52)
                    },
                    d: function(t, e) {
                        return Ie(t, e.DAY_SINGULAR, e.DAY_PLURAL, 365)
                    },
                    h: function(t, e) {
                        return Ie(t, e.HOUR_SINGULAR, e.HOUR_PLURAL, 24)
                    },
                    m: function(t, e) {
                        return Ie(t, e.MINUTE_SINGULAR, e.MINUTE_PLURAL, 60)
                    },
                    s: function(t, e) {
                        return Ie(t, e.SECOND_SINGULAR, e.SECOND_PLURAL, 60)
                    },
                    mi: function(t, e) {
                        return Ie(t, e.MILLISECOND_SINGULAR, e.MILLISECOND_PLURAL, 1e3)
                    }
                },
                Xe = {
                    value: ne,
                    didInit: ee,
                    didUpdate: ee,
                    didDestroy: ee,
                    willDestroy: ee
                },
                Ze = function(t, e) {
                    var n = 0 < arguments.length && t !== cn ? t : cn,
                        r = 1 < arguments.length && e !== cn ? e : cn;
                    if (n && !V(n) && (r = n, n = cn), !n || !Te(n)) {
                        r && r.view && (r.view = function t(e) {
                            return e.map(function(e) {
                                return "string" == typeof(e = we(oe, e)).root ? e.root = document.createElement(e.root) : e.root = document.createElement("span"), e.transform && (e.root.dataset.transform = e.transform), e.className && (e.root.className = e.className), e.overlay && (e.root.dataset.overlay = e.overlay), e.view ? (e.root.dataset.view = e.view, e.style && (e.root.dataset.style = e.style), e.repeat = null) : (e.layout && (e.root.dataset.layout = e.layout), e.repeat ? (e.root.dataset.repeat = !0, e.repeat = t(e.children).pop()) : e.children && (e.children = t(e.children), e.children.forEach(function(t) {
                                    e.root.appendChild(t.root)
                                }))), e
                            })
                        }([r.view])[0]), !r && n && (r = function(t, e, n) {
                            var r = 1 < arguments.length && e !== cn ? e : {},
                                i = 2 < arguments.length && n !== cn ? n : {},
                                o = t.dataset,
                                a = {
                                    meta: {}
                                };
                            for (var u in o)
                                if (o.hasOwnProperty(u)) {
                                    var l = r[u],
                                        s = o[u];
                                    l && (s = null === (s = l(s)) ? _e(i[u]) : s, a[u] = s)
                                } return a
                        }(n, Xe, it({}, Oe.options(), {
                            constants: it({}, He),
                            presets: it({}, $e)
                        }))), n && ((r = r || {}).view || (r.view = function r(t) {
                            return Array.from(t).map(function(t) {
                                var e = we(oe, {
                                    root: t
                                });
                                for (var n in t.dataset) t.dataset.hasOwnProperty(n) && void 0 !== e[n] && (e[n] = t.dataset[n]);
                                return e.repeat ? (e.repeat = r(t.children).pop(), Array.from(t.children).forEach(function(t) {
                                    t.parentNode.removeChild(t)
                                })) : t.children.length && (e.children = r(t.children)), e
                            })
                        }([n])[0]));
                        var i = new Oe(r, n);
                        return Ye.push(i), i
                    }
                },
                Je = function(t, e) {
                    var n = e.match(/((?:[\d]+\s)?(?:hours|hour|minutes|minute|seconds|second))|((?:from|till)\s[\d]+(?::[\d]+)?(?::[\d]+)?)|(wait\s[\d]+\s[a-z]+)/g).reduce(function(t, e) {
                        return /from/.test(e) ? t.from = Pe(t.from, e.split(" ")[1]) : /till/.test(e) ? t.till = Pe(t.till, e.split(" ")[1]) : /wait/.test(e) ? t.idle = Fe(e.substr(5)) : /hours|hour|minutes|minute|seconds|second/.test(e) && (t.interval = Fe(e)), t
                    }, {
                        idle: null,
                        interval: null,
                        date: null,
                        dist: null,
                        wait: !1,
                        from: Pe(S(t), "0"),
                        till: Pe(S(t), "23:59:59:999")
                    });
                    if (t < n.from || t >= n.till) return n;
                    if (n.interval > n.till - n.from) return n;
                    var r = t - n.from,
                        i = n.interval - r % n.interval;
                    return null !== n.idle && i >= n.interval - n.idle ? n.wait = !0 : (n.dist = i, n.date = new Date(t.getTime() + n.dist)), n
                },
                Ke = {
                    format: ["d", "h", "m", "s"],
                    cascade: !0,
                    server: null,
                    interval: 1e3
                },
                Qe = function(t, e, n, r) {
                    e[t] = n[t], r(Ae(e))
                },
                tn = {
                    ascii: function() {
                        return function(t, e) {
                            return e((t + "").charCodeAt(0))
                        }
                    },
                    char: function(t) {
                        var r = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : "",
                            i = t ? new RegExp("[^" + t + "]", "g") : null;
                        return function(t, e) {
                            var n = String.fromCharCode(t);
                            i && (n = n.replace(i, r)), e(n)
                        }
                    },
                    tween: function(i) {
                        var t = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : "ease-linear",
                            o = arguments[2];
                        i = Z(i);
                        var a = c(s.EASING_FUNCTION, t),
                            u = null,
                            l = null;
                        return function(t, e) {
                            if (t = parseFloat(t), u && u(), null !== l && t !== l) {
                                var n = l,
                                    r = t - n;
                                u = Dt(function(t) {
                                    e(n + t * r)
                                }, function() {
                                    u = null
                                }, i, a, o), l = t
                            } else e(l = t)
                        }
                    },
                    value: function(n) {
                        return function(t, e) {
                            return e(n)
                        }
                    },
                    input: function() {
                        return function(t, e) {
                            return e(t)
                        }
                    },
                    rotate: function() {
                        for (var t = arguments.length, a = Array(t), e = 0; e < t; e++) a[e] = arguments[e];
                        return function(t, n) {
                            var r = Array.isArray(t) ? t : [t],
                                i = [],
                                o = a.length;
                            r.forEach(function(t, e) {
                                a[e % o](t, function(t) {
                                    i[e] = t, e === r.length - 1 && n(i)
                                })
                            })
                        }
                    },
                    map: function(o) {
                        return function(t, n) {
                            var r = [],
                                i = t;
                            i.forEach(function(t, e) {
                                o(t, function(t) {
                                    r[e] = t, e === i.length - 1 && n(r.concat())
                                })
                            })
                        }
                    },
                    transform: function() {
                        for (var t = arguments.length, o = Array(t), e = 0; e < t; e++) o[e] = arguments[e];
                        return function(t, n) {
                            var r = [],
                                i = t;
                            o.forEach(function(t, e) {
                                t(i, function(t) {
                                    r[e] = t, e === o.length - 1 && n(1 === r.length ? r[0] : r)
                                })
                            })
                        }
                    },
                    upper: function() {
                        return function(t, e) {
                            return e((t + "").toUpperCase())
                        }
                    },
                    lower: function() {
                        return function(t, e) {
                            return e((t + "").toLowerCase())
                        }
                    },
                    abs: function() {
                        return function(t, e) {
                            return e(Math.abs(t))
                        }
                    },
                    add: function(n) {
                        return function(t, e) {
                            return e(t + n)
                        }
                    },
                    subtract: function(n) {
                        return function(t, e) {
                            return e(t - n)
                        }
                    },
                    modulus: function(n) {
                        return function(t, e) {
                            return e(t % n)
                        }
                    },
                    pad: function() {
                        var n = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : "",
                            r = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : "left";
                        return function(t, e) {
                            return e(n.length > ("" + t).length ? "left" === r ? ("" + n + t).slice(-n.length) : ("" + t + n).substring(0, n.length) : t)
                        }
                    },
                    number: function() {
                        var r = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : ".",
                            i = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : ",",
                            n = 2 < arguments.length && arguments[2] !== cn ? arguments[2] : 2;
                        return function(t, e) {
                            e((t < 0 ? "-" : "") + parseFloat(Math.abs(t)).toFixed(n).replace(/./g, function(t, e, n) {
                                return "." === t ? r : e && (n.length - e) % 3 == 0 ? i + t : t
                            }))
                        }
                    },
                    replace: function(n, r) {
                        return function(t, e) {
                            return e((t + "").replace(new RegExp("." === n ? "\\" + n : n, "g"), r))
                        }
                    },
                    round: function() {
                        var n = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : 0;
                        return function(t, e) {
                            return e(n ? t.toFixed(n) : Math.round(t))
                        }
                    },
                    ceil: function() {
                        return function(t, e) {
                            return e(Math.ceil(t))
                        }
                    },
                    floor: function() {
                        return function(t, e) {
                            return e(Math.floor(t))
                        }
                    },
                    fraction: We,
                    percentage: function() {
                        var n = We(0 < arguments.length && arguments[0] !== cn ? arguments[0] : 0, 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 100);
                        return function(t, e) {
                            n(t, function(t) {
                                e(100 * t)
                            })
                        }
                    },
                    multiply: function(n) {
                        return function(t, e) {
                            return e(t * n)
                        }
                    },
                    divide: function(n) {
                        return function(t, e) {
                            return e(t / n)
                        }
                    },
                    split: function() {
                        var n = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : "";
                        return function(t, e) {
                            return e((t + "").split(n))
                        }
                    },
                    format: function(n) {
                        return function(t, e) {
                            return e(n.replace(/\$0/gi, t))
                        }
                    },
                    plural: function(n, r) {
                        return function(t, e) {
                            return e(1 === t ? n : r)
                        }
                    },
                    limit: function() {
                        var n = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : 0,
                            r = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 1;
                        return function(t, e) {
                            return e(Math.min(Math.max(t, n), r))
                        }
                    },
                    reverse: function() {
                        return function(t, e) {
                            return e(Array.isArray(t) ? t.reverse() : (t + "").split("").reverse().join(""))
                        }
                    },
                    arrive: function(n, r) {
                        var i = 2 < arguments.length && arguments[2] !== cn && arguments[2],
                            o = !(3 < arguments.length && arguments[3] !== cn) || arguments[3],
                            a = null,
                            u = null,
                            l = null;
                        return function(t, e) {
                            if (t = parseFloat(t), null !== a) {
                                if (i && null !== u && a === t && (l.cancel(), l = null), o && null !== u && 1 < t - l.getPosition()) return l.cancel(), u = l = null, void e(a = t);
                                l ? l.update(e, t) : (l = xt("arrive", n, r)).update(e, a, t), u = t
                            } else e(a = t)
                        }
                    },
                    spring: function(n, r, i) {
                        var o = null,
                            a = null;
                        return function(t, e) {
                            t = parseFloat(t), null !== o ? a ? a.update(e, t) : (a = xt("spring", n, r, i)).update(e, o, t) : e(o = t)
                        }
                    },
                    delay: function() {
                        var t = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : "rtl",
                            i = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 50,
                            o = 2 < arguments.length && arguments[2] !== cn ? arguments[2] : 50,
                            a = null;
                        return function(e, n) {
                            if (!a) return a = Ae(e), void n(Ae(a));
                            a = "rtl" === t ? a.slice(a.length - e.length, a.length) : a.slice(0, e.length);
                            var r = function(t) {
                                for (var e = [], n = 0; n < t; n++) e.push(n);
                                return e
                            }(e.length);
                            "random" === t && function(t) {
                                for (var e = t.length; e; e--) {
                                    var n = Math.floor(Math.random() * e),
                                        r = [t[n], t[e - 1]];
                                    t[e - 1] = r[0], t[n] = r[1]
                                }
                            }(r), "rtl" === t && r.reverse();
                            ! function t() {
                                Qe(r.shift(), a, e, n), r.length && setTimeout(t, function(t, e) {
                                    var n = 0 < arguments.length && t !== cn ? t : 0,
                                        r = 1 < arguments.length && e !== cn ? e : 1;
                                    return n + Math.random() * (r - n)
                                }(i, o))
                            }()
                        }
                    },
                    step: function(n) {
                        var r = null,
                            i = null,
                            o = null;
                        return function(t, e) {
                            t = parseFloat(t), null !== r ? (null !== i && r === t && (o.cancel(), o = null), o ? o.update(e, t) : (o = xt("step", n)).update(e, r, t), i = t) : e(r = t)
                        }
                    },
                    keys: function() {
                        for (var t = arguments.length, r = Array(t), e = 0; e < t; e++) r[e] = arguments[e];
                        return function(t, e) {
                            var n = {};
                            t.forEach(function(t, e) {
                                n[r[e]] = t
                            }), e(n)
                        }
                    },
                    duration: function() {
                        for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                        return function(t, e) {
                            return e(g(t, n))
                        }
                    },
                    substring: function(n, r) {
                        return function(t, e) {
                            return e((t + "").substring(n, r))
                        }
                    },
                    preset: function() {
                        for (var t = arguments.length, r = Array(t), e = 0; e < t; e++) r[e] = arguments[e];
                        return function(t, e, n) {
                            return e(t.map(function(t, e) {
                                return n.getPreset(r[e])(t, n.getConstants(), n)
                            }))
                        }
                    }
                };
            e(s.TRANSFORM, tn);

            function en(t, e, n) {
                return t + (e - t) * n
            }
            var nn = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ"
                },
                rn = {
                    x: "rotateX",
                    y: "rotateY",
                    z: "rotateZ"
                },
                on = {
                    both: "scale",
                    x: "scaleX",
                    y: "scaleY"
                },
                an = {
                    fade: function(t, e, n, r, i, o) {
                        var a = 3 < arguments.length && r !== cn ? r : rt,
                            u = 4 < arguments.length && i !== cn ? i : 0,
                            l = 5 < arguments.length && o !== cn ? o : 1;
                        if (n < 0) {
                            var s = [l, u];
                            u = s[0], l = s[1]
                        }
                        t.style.opacity = en(u, l, a(e))
                    },
                    move: function(t, e, n, r, i, o, a) {
                        var u = 3 < arguments.length && r !== cn ? r : rt,
                            l = 4 < arguments.length && i !== cn ? i : "0",
                            s = 5 < arguments.length && o !== cn ? o : "100%",
                            c = 6 < arguments.length && a !== cn ? a : "y";
                        if (n < 0) {
                            var f = [s, l];
                            l = f[0], s = f[1]
                        }
                        var d = X(l, te),
                            h = X(s, te);
                        B(t, nn[c], en(d.value, h.value, u(e)), d.units || h.units)
                    },
                    rotate: function(t, e, n, r, i, o, a) {
                        var u = 3 < arguments.length && r !== cn ? r : rt,
                            l = 4 < arguments.length && i !== cn ? i : "0",
                            s = 5 < arguments.length && o !== cn ? o : "90deg",
                            c = 6 < arguments.length && a !== cn ? a : "x";
                        if (n < 0) {
                            var f = [s, l];
                            l = f[0], s = f[1]
                        }
                        var d = X(l, te),
                            h = X(s, te);
                        B(t, rn[c], en(d.value, h.value, u(e)), d.units || h.units)
                    },
                    scale: function(t, e, n, r, i, o, a) {
                        var u = 4 < arguments.length && i !== cn ? i : 0,
                            l = 5 < arguments.length && o !== cn ? o : 1;
                        if (n < 0) {
                            var s = [l, u];
                            u = s[0], l = s[1]
                        }
                        B(t, on[6 < arguments.length && a !== cn ? a : "both"], en(u, l, (3 < arguments.length && r !== cn ? r : rt)(e)))
                    },
                    crossfade: function() {
                        var t = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : 1,
                            e = arguments[2];
                        return {
                            intro: [{
                                name: "fade",
                                parameters: [0, 1],
                                duration: 1e3 * t,
                                delay: Z(arguments[1])
                            }],
                            outro: [{
                                name: "fade",
                                parameters: [1, 0],
                                duration: 1e3 * t,
                                delay: Z(e)
                            }]
                        }
                    },
                    swap: function() {
                        var t = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : "y",
                            e = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 1,
                            n = 2 < arguments.length && arguments[2] !== cn ? arguments[2] : 1,
                            r = arguments[4];
                        return {
                            intro: [{
                                name: "move",
                                parameters: ["" + 100 * -e, "0%", t],
                                duration: 1e3 * n,
                                delay: Z(arguments[3])
                            }],
                            outro: [{
                                name: "move",
                                parameters: ["0%", "" + 100 * e, t],
                                duration: 1e3 * n,
                                delay: Z(r)
                            }]
                        }
                    },
                    revolve: function() {
                        var t = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : "y",
                            e = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 1,
                            n = 2 < arguments.length && arguments[2] !== cn ? arguments[2] : 1,
                            r = arguments[4];
                        return {
                            intro: [{
                                name: "rotate",
                                parameters: [90 * -e + "deg", "0deg", t],
                                duration: 1e3 * n,
                                delay: Z(arguments[3])
                            }],
                            outro: [{
                                name: "rotate",
                                parameters: ["0deg", 90 * e + "deg", t],
                                duration: 1e3 * n,
                                delay: Z(r)
                            }]
                        }
                    },
                    zoom: function() {
                        var t = 0 < arguments.length && arguments[0] !== cn ? arguments[0] : 0,
                            e = 1 < arguments.length && arguments[1] !== cn ? arguments[1] : 1,
                            n = arguments[3];
                        return {
                            intro: [{
                                name: "scale",
                                parameters: [t, 1],
                                duration: 1e3 * e,
                                delay: Z(arguments[2])
                            }],
                            outro: [{
                                name: "scale",
                                parameters: [1, t],
                                duration: 1e3 * e,
                                delay: Z(n)
                            }]
                        }
                    }
                };
            e(s.TRANSITION, an);

            function un(n) {
                if (!s.hasOwnProperty(n)) return "continue";
                ln.plugin[("add-" + s[n]).replace(/-./g, function(t) {
                    return t.charAt(1).toUpperCase()
                })] = function(t, e) {
                    i(s[n], t, e)
                }
            }
            var ln = {
                supported: function() {
                    var e = window;
                    if (void 0 === e) return !1;
                    var t = e.CSS && e.CSS.supports,
                        n = !!e.MSInputMethodContext && !!document.documentMode,
                        r = t && CSS.supports("transform", "translateX(0)");
                    return n || t && r && !!["MutationObserver", "requestAnimationFrame"].filter(function(t) {
                        return t in e
                    }).length
                }(),
                options: {
                    setConstant: function(t, e) {
                        He[t] = e
                    },
                    setPreset: function(t, e) {
                        $e[t] = e
                    }
                },
                helper: {
                    interval: Ue,
                    date: function(t) {
                        return t ? l(t) : b()
                    },
                    duration: w
                },
                data: {
                    request: Ee,
                    poll: function(t, e, n) {
                        return Ue(function() {
                            Ee(t, e)
                        }, 2 < arguments.length && n !== cn ? n : 6e4)
                    }
                },
                DOM: {
                    create: Ze,
                    destroy: function(t) {
                        var e = function(t, e) {
                            for (var n = 0, r = t.length; n < r; n++)
                                if (t[n].isRootElement(e)) return n;
                            return -1
                        }(Ye, t);
                        return !(e < 0) && (Ye[e].destroy(), Ye.splice(e, 1), !0)
                    },
                    parse: function(t) {
                        var e, n = void 0,
                            r = void 0,
                            i = [];
                        for (r = (e = t.querySelectorAll(".tick:not([data-state])")).length; r--;) n = e[r], i.push(Ze(n));
                        return i
                    },
                    find: Te
                },
                count: {
                    down: function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        if ("number" != typeof e[0] || "string" != typeof e[1]) return "string" == typeof e[0] || u(e[0]) ? function(t, e) {
                            var n = 1 < arguments.length && e !== cn ? e : {};
                            if (void 0 === t) throw 'Can\'t start counter, the "due" parameter is required';
                            n = we(Ke, n);
                            var r = u(t) ? t : l(t),
                                i = Ge({
                                    due: S(r),
                                    onended: function() {}
                                });
                            return qe(n.server, function(e) {
                                i.offset = e;
                                i.timer = Ue(function() {
                                    var t = v(e);
                                    if (r - t <= 0) return i.value = new Array(n.format.length).fill(0), i.onupdate(i.value), i.timer.stop(), void i.onended();
                                    i.value = y(t, r, n.format, n.cascade), i.onupdate(i.value)
                                }, n.interval, {
                                    autostart: !1
                                }), i.complete = !0, i.onload(), i.timer.start()
                            }), i
                        }.apply(cn, e) : null;
                        var r = e[0],
                            i = e[1].toLowerCase();
                        return e.shift(), e[0] = w(r, i), e[1] = e[1] || {}, e[1].units = i,
                            function(e, t) {
                                var n = 1 < arguments.length && t !== cn ? t : {};
                                if ("number" != typeof e) throw 'Can\'t start counter, the "milliseconds" parameter is required';
                                var r = (n = we({
                                        units: "seconds",
                                        target: 0,
                                        amount: 1e3,
                                        interval: 1e3
                                    }, n)).target,
                                    i = e,
                                    o = Ge({
                                        target: r,
                                        onended: function() {}
                                    });
                                return setTimeout(function() {
                                    o.timer = Ue(function(t) {
                                        if ((i = e - t / n.interval * n.amount) <= r) return o.value = n.target, o.onupdate(o.value / h[n.units]), o.timer.stop(), void o.onended();
                                        o.value = i, o.onupdate(o.value / h[n.units])
                                    }, n.interval, {
                                        autostart: !1
                                    }), o.complete = !0, o.onload(), o.timer.start()
                                }, 0), o
                            }.apply(cn, e)
                    },
                    up: function(t, e) {
                        var n = 1 < arguments.length && e !== cn ? e : {};
                        if (void 0 === t) throw 'Can\'t start counter, the "since" parameter is required';
                        n = we(Ke, n);
                        var r = u(t) ? t : l(t),
                            i = Ge({
                                since: S(r)
                            });
                        return qe(n.server, function(e) {
                            i.offset = e;
                            i.timer = Ue(function() {
                                var t = v(e);
                                i.value = y(r, t, n.format, n.cascade), i.onupdate(i.value)
                            }, n.interval, {
                                autostart: !1
                            }), i.complete = !0, i.onload(), i.timer.start()
                        }), i
                    },
                    schedule: function(i, t) {
                        var o = 1 < arguments.length && t !== cn ? t : {};
                        if ("string" != typeof i) throw 'Can\'t start scheduler, "schedule" is a required parameter';
                        var a = (o = we(it({}, Ke, {
                                timezone: null
                            }), o)).timezone ? function(t) {
                                var e = 6e4 * (new Date).getTimezoneOffset();
                                if ("Z" === t) return e;
                                var n = t.match(/\+|-|[\d]{2}|[\d]{2}/g);
                                return ("-" === n.shift() ? -1 : 1) * (36e5 * parseInt(n[0], 10) + 6e4 * parseInt(n[1], 10)) + e
                            }(o.timezone) : null,
                            u = Ge({
                                waiting: null,
                                nextScheduledDate: null,
                                previouslyScheduledDate: null,
                                onrepeat: function() {},
                                onresume: function() {},
                                onwait: function() {}
                            }),
                            l = cn,
                            s = null;
                        return qe(o.server, function(r) {
                            u.offset = r;
                            u.timer = Ue(function() {
                                var t, e, n = v(r);
                                if (null !== a && (t = a, n = new Date(n.getTime() + t)), s = function(e, t) {
                                        for (var n = t.split(",").map(be).map(function(t) {
                                                return je(e, t)
                                            }), r = null, i = 0; i < n.length; i++) {
                                            var o = n[i];
                                            if (null === r && o.wait) return null;
                                            (null === r || null === r.dist && null !== o.dist || null !== o.dist && o.dist < r.dist) && (r = o)
                                        }
                                        return r.date
                                    }(n, i), u.waiting = null === s, u.waiting) return l === cn && (l = null), u.value = new Array(o.format.length).fill(0), u.nextScheduledDate && (u.previouslyScheduledDate = S(u.nextScheduledDate)), u.nextScheduledDate = null === s ? null : S(s), void u.onwait(u.previouslyScheduledDate ? S(u.previouslyScheduledDate) : null);
                                u.nextScheduledDate = S(s), null === l && u.onresume(S(s)), (null === l || l !== cn && (e = s, l.getTime() !== e.getTime())) && (u.onrepeat(S(s), l ? S(l) : null), l && (u.previouslyScheduledDate = S(l))), l = S(s), u.value = y(n, s, o.format, o.cascade), u.onupdate(u.value)
                            }, o.interval, {
                                autostart: !1
                            }), u.complete = !0, u.onload(), u.timer.start()
                        }), u
                    }
                },
                plugin: {
                    add: function(t, e, n) {
                        if ("function" != typeof t) return i(t, e, n);
                        return i(t.identifier.type, t.identifier.name, t)
                    }
                }
            };
            for (var sn in s) un(sn);
            return t.exports = ln, t.exports
        }();
        n.push = r, e.forEach(r), t.Tick = n, "loading" !== document.readyState ? setTimeout(function() {
            i()
        }, 0) : document.addEventListener("DOMContentLoaded", i)
    }

    function r(t) {
        n.plugin.add.apply(null, t)
    }

    function i() {
        n.DOM.parse(document)
    }
}(window, window.Tick || []);