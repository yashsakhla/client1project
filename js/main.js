! function() {
    function e(e) {
        var n, t, i = this.id,
            r = this.href;
        switch (i) {
            case "cher-link-twitter":
                n = 500, t = 442;
                break;
            case "cher-link-linkedin":
                n = 500, t = 516;
                break;
            case "cher-link-googleplus":
                n = 400, t = 600;
                break;
            case "cher-link-pinterest":
                n = 752, t = 620;
                break;
            default:
                n = 550, t = 330
        }
        "cher-link-email" !== i && (e.preventDefault(), window.open(r, i, "status=no,height=" + t + ",width=" + n + ",resizable=yes,toolbar=no,menubar=no,scrollbars=no,location=no,directories=no"))
    }

    function n() {
        t = document.querySelectorAll(".cher-link");
        for (var n = 0; n < t.length; n++) t[n].addEventListener("click", e)
    }
    var t;
    document.addEventListener("DOMContentLoaded", function() {
        n()
    })
}();

! function(e, t) {
    if (!document.getElementById(e)) {
        var c = document.createElement("script");
        c.src = "https://js.hs-analytics.net/analytics/1675190400000/19879814.js", c.type = "text/javascript", c.id = e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(c, n)
    }
}("hs-analytics");
var _hsp = window._hsp = window._hsp || [];
_hsp.push(['addEnabledFeatureGates', []]);
! function(t, e, r) {
    if (!document.getElementById(t)) {
        var n = document.createElement("script");
        for (var a in n.src = "https://js.hs-banner.com/v2/19879814/banner.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(n, i)
    }
}("cookieBanner-19879814", 0, {
    "data-cookieconsent": "ignore",
    "data-hs-ignore": !0,
    "data-loader": "hs-scriptloader",
    "data-hsjs-portal": 19879814,
    "data-hsjs-env": "prod",
    "data-hsjs-hublet": "na1"
});
! function(t, e, r) {
    if (!document.getElementById(t)) {
        var n = document.createElement("script");
        for (var a in n.src = "https://js.hsleadflows.net/leadflows.js", n.type = "text/javascript", n.id = t, r) r.hasOwnProperty(a) && n.setAttribute(a, r[a]);
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(n, i)
    }
}("LeadFlows-19879814", 0, {
    "crossorigin": "anonymous",
    "data-leadin-portal-id": 19879814,
    "data-leadin-env": "prod",
    "data-loader": "hs-scriptloader",
    "data-hsjs-portal": 19879814,
    "data-hsjs-env": "prod",
    "data-hsjs-hublet": "na1"
})

document.addEventListener('DOMContentLoaded', function() {
    String.prototype.rot13 = function() {
        return this.replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
        })
    };
    var encoded = document.getElementsByClassName('rot13-encoded');
    Array.prototype.forEach.call(encoded, function(el, i) {
        var text = el.innerHTML.rot13();
        el.innerHTML = text
    })
})

(function(e) {
    if (!e.hasInitialised) {
        var t = {
            escapeRegExp: function(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            hasClass: function(e, t) {
                var i = " ";
                return 1 === e.nodeType && (i + e.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) >= 0
            },
            addClass: function(e, t) {
                e.className += " " + t
            },
            removeClass: function(e, t) {
                var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
                e.className = e.className.replace(i, "")
            },
            interpolateString: function(e, t) {
                var i = /{{([a-z][a-z0-9\-_]*)}}/gi;
                return e.replace(i, function(e) {
                    return t(arguments[1]) || ""
                })
            },
            getCookie: function(e) {
                var t = "; " + document.cookie,
                    i = t.split("; " + e + "=");
                return 2 != i.length ? void 0 : i.pop().split(";").shift()
            },
            setCookie: function(e, t, i, n, o) {
                var s = new Date;
                s.setDate(s.getDate() + (i || 365));
                var r = [e + "=" + t, "expires=" + s.toUTCString(), "path=" + (o || "/")];
                n && r.push("domain=" + n), document.cookie = r.join(";")
            },
            deepExtend: function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (i in e && this.isPlainObject(e[i]) && this.isPlainObject(t[i]) ? this.deepExtend(e[i], t[i]) : e[i] = t[i]);
                return e
            },
            throttle: function(e, t) {
                var i = !1;
                return function() {
                    i || (e.apply(this, arguments), i = !0, setTimeout(function() {
                        i = !1
                    }, t))
                }
            },
            hash: function(e) {
                var t, i, n, o = 0;
                if (0 === e.length) return o;
                for (t = 0, n = e.length; t < n; ++t) i = e.charCodeAt(t), o = (o << 5) - o + i, o |= 0;
                return o
            },
            normaliseHex: function(e) {
                return "#" == e[0] && (e = e.substr(1)), 3 == e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e
            },
            getContrast: function(e) {
                e = this.normaliseHex(e);
                var t = parseInt(e.substr(0, 2), 16),
                    i = parseInt(e.substr(2, 2), 16),
                    n = parseInt(e.substr(4, 2), 16),
                    o = (299 * t + 587 * i + 114 * n) / 1e3;
                return o >= 128 ? "#000" : "#fff"
            },
            getLuminance: function(e) {
                var t = parseInt(this.normaliseHex(e), 16),
                    i = 38,
                    n = (t >> 16) + i,
                    o = (t >> 8 & 255) + i,
                    s = (255 & t) + i,
                    r = (16777216 + 65536 * (n < 255 ? n < 1 ? 0 : n : 255) + 256 * (o < 255 ? o < 1 ? 0 : o : 255) + (s < 255 ? s < 1 ? 0 : s : 255)).toString(16).slice(1);
                return "#" + r
            },
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            },
            isPlainObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor == Object
            }
        };
        e.status = {
            deny: "deny",
            allow: "allow",
            dismiss: "dismiss"
        }, e.transitionEnd = function() {
            var e = document.createElement("div"),
                t = {
                    t: "transitionend",
                    OT: "oTransitionEnd",
                    msT: "MSTransitionEnd",
                    MozT: "transitionend",
                    WebkitT: "webkitTransitionEnd"
                };
            for (var i in t)
                if (t.hasOwnProperty(i) && void 0 !== e.style[i + "ransition"]) return t[i];
            return ""
        }(), e.hasTransition = !!e.transitionEnd;
        var i = Object.keys(e.status).map(t.escapeRegExp);
        e.customStyles = {}, e.Popup = function() {
            function n() {
                this.initialise.apply(this, arguments)
            }

            function o(e) {
                this.openingTimeout = null, t.removeClass(e, "cc-invisible")
            }

            function s(t) {
                t.style.display = "none", t.removeEventListener(e.transitionEnd, this.afterTransition), this.afterTransition = null
            }

            function r() {
                var t = this.options.onInitialise.bind(this);
                if (!window.navigator.cookieEnabled) return t(e.status.deny), !0;
                if (window.CookiesOK || window.navigator.CookiesOK) return t(e.status.allow), !0;
                var i = Object.keys(e.status),
                    n = this.getStatus(),
                    o = i.indexOf(n) >= 0;
                return o && t(n), o
            }

            function a() {
                var e = this.options.position.split("-"),
                    t = [];
                return e.forEach(function(e) {
                    t.push("cc-" + e)
                }), t
            }

            function c() {
                var e = this.options,
                    i = "top" == e.position || "bottom" == e.position ? "banner" : "floating";
                t.isMobile() && (i = "floating");
                var n = ["cc-" + i, "cc-type-" + e.type, "cc-theme-" + e.theme];
                e.static && n.push("cc-static"), n.push.apply(n, a.call(this));
                p.call(this, this.options.palette);
                return this.customStyleSelector && n.push(this.customStyleSelector), n
            }

            function l() {
                var e = {},
                    i = this.options;
                i.showLink || (i.elements.link = "", i.elements.messagelink = i.elements.message), Object.keys(i.elements).forEach(function(n) {
                    e[n] = t.interpolateString(i.elements[n], function(e) {
                        var t = i.content[e];
                        return e && "string" == typeof t && t.length ? t : ""
                    })
                });
                var n = i.compliance[i.type];
                n || (n = i.compliance.info), e.compliance = t.interpolateString(n, function(t) {
                    return e[t]
                });
                var o = i.layouts[i.layout];
                return o || (o = i.layouts.basic), t.interpolateString(o, function(t) {
                    return e[t]
                })
            }

            function u(i) {
                var n = this.options,
                    o = document.createElement("div"),
                    s = n.container && 1 === n.container.nodeType ? n.container : document.body;
                o.innerHTML = i;
                var r = o.children[0];
                return r.style.display = "none", t.hasClass(r, "cc-window") && e.hasTransition && t.addClass(r, "cc-invisible"), this.onButtonClick = h.bind(this), r.addEventListener("click", this.onButtonClick), n.autoAttach && (s.firstChild ? s.insertBefore(r, s.firstChild) : s.appendChild(r)), r
            }

            function h(n) {
                var o = n.target;
                if (t.hasClass(o, "cc-btn")) {
                    var s = o.className.match(new RegExp("\\bcc-(" + i.join("|") + ")\\b")),
                        r = s && s[1] || !1;
                    r && (this.setStatus(r), this.close(!0))
                }
                t.hasClass(o, "cc-close") && (this.setStatus(e.status.dismiss), this.close(!0)), t.hasClass(o, "cc-revoke") && this.revokeChoice()
            }

            function p(e) {
                var i = t.hash(JSON.stringify(e)),
                    n = "cc-color-override-" + i,
                    o = t.isPlainObject(e);
                return this.customStyleSelector = o ? n : null, o && d(i, e, "." + n), o
            }

            function d(i, n, o) {
                if (e.customStyles[i]) ++e.customStyles[i].references;
                else {
                    var s = {},
                        r = n.popup,
                        a = n.button,
                        c = n.highlight;
                    r && (r.text = r.text ? r.text : t.getContrast(r.background), r.link = r.link ? r.link : r.text, s[o + ".cc-window"] = ["color: " + r.text, "background-color: " + r.background], s[o + ".cc-revoke"] = ["color: " + r.text, "background-color: " + r.background], s[o + " .cc-link," + o + " .cc-link:active," + o + " .cc-link:visited"] = ["color: " + r.link], a && (a.text = a.text ? a.text : t.getContrast(a.background), a.border = a.border ? a.border : "transparent", s[o + " .cc-btn"] = ["color: " + a.text, "border-color: " + a.border, "background-color: " + a.background], "transparent" != a.background && (s[o + " .cc-btn:hover, " + o + " .cc-btn:focus"] = ["background-color: " + f(a.background)]), c ? (c.text = c.text ? c.text : t.getContrast(c.background), c.border = c.border ? c.border : "transparent", s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + c.text, "border-color: " + c.border, "background-color: " + c.background]) : s[o + " .cc-highlight .cc-btn:first-child"] = ["color: " + r.text]));
                    var l = document.createElement("style");
                    document.head.appendChild(l), e.customStyles[i] = {
                        references: 1,
                        element: l.sheet
                    };
                    var u = -1;
                    for (var h in s) s.hasOwnProperty(h) && l.sheet.insertRule(h + "{" + s[h].join(";") + "}", ++u)
                }
            }

            function f(e) {
                return e = t.normaliseHex(e), "000000" == e ? "#222" : t.getLuminance(e)
            }

            function v(i) {
                if (t.isPlainObject(i)) {
                    var n = t.hash(JSON.stringify(i)),
                        o = e.customStyles[n];
                    if (o && !--o.references) {
                        var s = o.element.ownerNode;
                        s && s.parentNode && s.parentNode.removeChild(s), e.customStyles[n] = null
                    }
                }
            }

            function m(e, t) {
                for (var i = 0, n = e.length; i < n; ++i) {
                    var o = e[i];
                    if (o instanceof RegExp && o.test(t) || "string" == typeof o && o.length && o === t) return !0
                }
                return !1
            }

            function b() {
                var t = this.setStatus.bind(this),
                    i = this.options.dismissOnTimeout;
                "number" == typeof i && i >= 0 && (this.dismissTimeout = window.setTimeout(function() {
                    t(e.status.dismiss)
                }, Math.floor(i)));
                var n = this.options.dismissOnScroll;
                if ("number" == typeof n && n >= 0) {
                    var o = function(i) {
                        window.pageYOffset > Math.floor(n) && (t(e.status.dismiss), window.removeEventListener("scroll", o), this.onWindowScroll = null)
                    };
                    this.onWindowScroll = o, window.addEventListener("scroll", o)
                }
            }

            function g() {
                if ("info" != this.options.type && (this.options.revokable = !0), t.isMobile() && (this.options.animateRevokable = !1), this.options.revokable) {
                    var e = a.call(this);
                    this.options.animateRevokable && e.push("cc-animate"), this.customStyleSelector && e.push(this.customStyleSelector);
                    var i = this.options.revokeBtn.replace("{{classes}}", e.join(" "));
                    this.revokeBtn = u.call(this, i);
                    var n = this.revokeBtn;
                    if (this.options.animateRevokable) {
                        var o = t.throttle(function(e) {
                            var i = !1,
                                o = 20,
                                s = window.innerHeight - 20;
                            t.hasClass(n, "cc-top") && e.clientY < o && (i = !0), t.hasClass(n, "cc-bottom") && e.clientY > s && (i = !0), i ? t.hasClass(n, "cc-active") || t.addClass(n, "cc-active") : t.hasClass(n, "cc-active") && t.removeClass(n, "cc-active")
                        }, 200);
                        this.onMouseMove = o, window.addEventListener("mousemove", o)
                    }
                }
            }
            var y = {
                enabled: !0,
                container: null,
                cookie: {
                    name: "cookieconsent_status",
                    path: "/",
                    domain: "",
                    expiryDays: 365
                },
                onPopupOpen: function() {},
                onPopupClose: function() {},
                onInitialise: function(e) {},
                onStatusChange: function(e, t) {},
                onRevokeChoice: function() {},
                content: {
                    header: "Cookies used on the website!",
                    message: "This website uses cookies to ensure you get the best experience on our website.",
                    dismiss: "Got it!",
                    allow: "Allow cookies",
                    deny: "Decline",
                    link: "Learn more",
                    href: "http://cookiesandyou.com",
                    close: "&#x274c;"
                },
                elements: {
                    header: '<span class="cc-header">{{header}}</span>&nbsp;',
                    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
                    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="_blank">{{link}}</a></span>',
                    dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
                    allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
                    deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
                    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
                    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'
                },
                window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
                revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',
                compliance: {
                    info: '<div class="cc-compliance">{{dismiss}}</div>',
                    "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
                    "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>'
                },
                type: "info",
                layouts: {
                    basic: "{{messagelink}}{{compliance}}",
                    "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                    "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
                },
                layout: "basic",
                position: "bottom",
                theme: "block",
                static: !1,
                palette: null,
                revokable: !1,
                animateRevokable: !0,
                showLink: !0,
                dismissOnScroll: !1,
                dismissOnTimeout: !1,
                autoOpen: !0,
                autoAttach: !0,
                whitelistPage: [],
                blacklistPage: [],
                overrideHTML: null
            };
            return n.prototype.initialise = function(e) {
                this.options && this.destroy(), t.deepExtend(this.options = {}, y), t.isPlainObject(e) && t.deepExtend(this.options, e), r.call(this) && (this.options.enabled = !1), m(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1), m(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
                var i = this.options.window.replace("{{classes}}", c.call(this).join(" ")).replace("{{children}}", l.call(this)),
                    n = this.options.overrideHTML;
                if ("string" == typeof n && n.length && (i = n), this.options.static) {
                    var o = u.call(this, '<div class="cc-grower">' + i + "</div>");
                    o.style.display = "", this.element = o.firstChild, this.element.style.display = "none", t.addClass(this.element, "cc-invisible")
                } else this.element = u.call(this, i);
                b.call(this), g.call(this), this.options.autoOpen && this.autoOpen()
            }, n.prototype.destroy = function() {
                this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick), this.onButtonClick = null), this.dismissTimeout && (clearTimeout(this.dismissTimeout), this.dismissTimeout = null), this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll), this.onWindowScroll = null), this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove), this.onMouseMove = null), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn), this.revokeBtn = null, v(this.options.palette), this.options = null
            }, n.prototype.open = function(t) {
                if (this.element) return this.isOpen() || (e.hasTransition ? this.fadeIn() : this.element.style.display = "", this.options.revokable && this.toggleRevokeButton(), this.options.onPopupOpen.call(this)), this
            }, n.prototype.close = function(t) {
                if (this.element) return this.isOpen() && (e.hasTransition ? this.fadeOut() : this.element.style.display = "none", t && this.options.revokable && this.toggleRevokeButton(!0), this.options.onPopupClose.call(this)), this
            }, n.prototype.fadeIn = function() {
                var i = this.element;
                if (e.hasTransition && i && (this.afterTransition && s.call(this, i), t.hasClass(i, "cc-invisible"))) {
                    if (i.style.display = "", this.options.static) {
                        var n = this.element.clientHeight;
                        this.element.parentNode.style.maxHeight = n + "px"
                    }
                    var r = 20;
                    this.openingTimeout = setTimeout(o.bind(this, i), r)
                }
            }, n.prototype.fadeOut = function() {
                var i = this.element;
                e.hasTransition && i && (this.openingTimeout && (clearTimeout(this.openingTimeout), o.bind(this, i)), t.hasClass(i, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""), this.afterTransition = s.bind(this, i), i.addEventListener(e.transitionEnd, this.afterTransition), t.addClass(i, "cc-invisible")))
            }, n.prototype.isOpen = function() {
                return this.element && "" == this.element.style.display && (!e.hasTransition || !t.hasClass(this.element, "cc-invisible"))
            }, n.prototype.toggleRevokeButton = function(e) {
                this.revokeBtn && (this.revokeBtn.style.display = e ? "" : "none")
            }, n.prototype.revokeChoice = function(e) {
                this.options.enabled = !0, this.clearStatus(), this.options.onRevokeChoice.call(this), e || this.autoOpen()
            }, n.prototype.hasAnswered = function(t) {
                return Object.keys(e.status).indexOf(this.getStatus()) >= 0
            }, n.prototype.hasConsented = function(t) {
                var i = this.getStatus();
                return i == e.status.allow || i == e.status.dismiss
            }, n.prototype.autoOpen = function(e) {
                !this.hasAnswered() && this.options.enabled && this.open()
            }, n.prototype.setStatus = function(i) {
                var n = this.options.cookie,
                    o = t.getCookie(n.name),
                    s = Object.keys(e.status).indexOf(o) >= 0;
                Object.keys(e.status).indexOf(i) >= 0 ? (t.setCookie(n.name, i, n.expiryDays, n.domain, n.path), this.options.onStatusChange.call(this, i, s)) : this.clearStatus()
            }, n.prototype.getStatus = function() {
                return t.getCookie(this.options.cookie.name)
            }, n.prototype.clearStatus = function() {
                var e = this.options.cookie;
                t.setCookie(e.name, "", -1, e.domain, e.path)
            }, n
        }(), e.Location = function() {
            function e(e) {
                t.deepExtend(this.options = {}, s), t.isPlainObject(e) && t.deepExtend(this.options, e), this.currentServiceIndex = -1
            }

            function i(e, t, i) {
                var n, o = document.createElement("script");
                o.type = "text/" + (e.type || "javascript"), o.src = e.src || e, o.async = !1, o.onreadystatechange = o.onload = function() {
                    var e = o.readyState;
                    clearTimeout(n), t.done || e && !/loaded|complete/.test(e) || (t.done = !0, t(), o.onreadystatechange = o.onload = null)
                }, document.body.appendChild(o), n = setTimeout(function() {
                    t.done = !0, t(), o.onreadystatechange = o.onload = null
                }, i)
            }

            function n(e, t, i, n, o) {
                var s = new(window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
                if (s.open(n ? "POST" : "GET", e, 1), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), Array.isArray(o))
                    for (var r = 0, a = o.length; r < a; ++r) {
                        var c = o[r].split(":", 2);
                        s.setRequestHeader(c[0].replace(/^\s+|\s+$/g, ""), c[1].replace(/^\s+|\s+$/g, ""))
                    }
                "function" == typeof t && (s.onreadystatechange = function() {
                    s.readyState > 3 && t(s)
                }), s.send(n)
            }

            function o(e) {
                return new Error("Error [" + (e.code || "UNKNOWN") + "]: " + e.error)
            }
            var s = {
                timeout: 5e3,
                services: ["freegeoip", "ipinfo", "maxmind"],
                serviceDefinitions: {
                    freegeoip: function() {
                        return {
                            url: "//freegeoip.net/json/?callback={callback}",
                            isScript: !0,
                            callback: function(e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return i.error ? o(i) : {
                                        code: i.country_code
                                    }
                                } catch (e) {
                                    return o({
                                        error: "Invalid response (" + e + ")"
                                    })
                                }
                            }
                        }
                    },
                    ipinfo: function() {
                        return {
                            url: "//ipinfo.io",
                            headers: ["Accept: application/json"],
                            callback: function(e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return i.error ? o(i) : {
                                        code: i.country
                                    }
                                } catch (e) {
                                    return o({
                                        error: "Invalid response (" + e + ")"
                                    })
                                }
                            }
                        }
                    },
                    ipinfodb: function(e) {
                        return {
                            url: "//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",
                            isScript: !0,
                            callback: function(e, t) {
                                try {
                                    var i = JSON.parse(t);
                                    return "ERROR" == i.statusCode ? o({
                                        error: i.statusMessage
                                    }) : {
                                        code: i.countryCode
                                    }
                                } catch (e) {
                                    return o({
                                        error: "Invalid response (" + e + ")"
                                    })
                                }
                            }
                        }
                    },
                    maxmind: function() {
                        return {
                            url: "//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",
                            isScript: !0,
                            callback: function(e) {
                                window.geoip2 ? geoip2.country(function(t) {
                                    try {
                                        e({
                                            code: t.country.iso_code
                                        })
                                    } catch (t) {
                                        e(o(t))
                                    }
                                }, function(t) {
                                    e(o(t))
                                }) : e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                            }
                        }
                    }
                }
            };
            return e.prototype.getNextService = function() {
                var e;
                do {
                    e = this.getServiceByIdx(++this.currentServiceIndex)
                } while (this.currentServiceIndex < this.options.services.length && !e);
                return e
            }, e.prototype.getServiceByIdx = function(e) {
                var i = this.options.services[e];
                if ("function" == typeof i) {
                    var n = i();
                    return n.name && t.deepExtend(n, this.options.serviceDefinitions[n.name](n)), n
                }
                return "string" == typeof i ? this.options.serviceDefinitions[i]() : t.isPlainObject(i) ? this.options.serviceDefinitions[i.name](i) : null
            }, e.prototype.locate = function(e, t) {
                var i = this.getNextService();
                i ? (this.callbackComplete = e, this.callbackError = t, this.runService(i, this.runNextServiceOnError.bind(this))) : t(new Error("No services to run"))
            }, e.prototype.setupUrl = function(e) {
                var t = this.getCurrentServiceOpts();
                return e.url.replace(/\{(.*?)\}/g, function(i, n) {
                    if ("callback" === n) {
                        var o = "callback" + Date.now();
                        return window[o] = function(t) {
                            e.__JSONP_DATA = JSON.stringify(t)
                        }, o
                    }
                    if (n in t.interpolateUrl) return t.interpolateUrl[n]
                })
            }, e.prototype.runService = function(e, t) {
                var o = this;
                if (e && e.url && e.callback) {
                    var s = e.isScript ? i : n,
                        r = this.setupUrl(e);
                    s(r, function(i) {
                        var n = i ? i.responseText : "";
                        e.__JSONP_DATA && (n = e.__JSONP_DATA, delete e.__JSONP_DATA), o.runServiceCallback.call(o, t, e, n)
                    }, this.options.timeout, e.data, e.headers)
                }
            }, e.prototype.runServiceCallback = function(e, t, i) {
                var n = this,
                    o = function(t) {
                        s || n.onServiceResult.call(n, e, t)
                    },
                    s = t.callback(o, i);
                s && this.onServiceResult.call(this, e, s)
            }, e.prototype.onServiceResult = function(e, t) {
                t instanceof Error || t && t.error ? e.call(this, t, null) : e.call(this, null, t)
            }, e.prototype.runNextServiceOnError = function(e, t) {
                if (e) {
                    this.logError(e);
                    var i = this.getNextService();
                    i ? this.runService(i, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
                } else this.completeService.call(this, this.callbackComplete, t)
            }, e.prototype.getCurrentServiceOpts = function() {
                var e = this.options.services[this.currentServiceIndex];
                return "string" == typeof e ? {
                    name: e
                } : "function" == typeof e ? e() : t.isPlainObject(e) ? e : {}
            }, e.prototype.completeService = function(e, t) {
                this.currentServiceIndex = -1, e && e(t)
            }, e.prototype.logError = function(e) {
                var t = this.currentServiceIndex,
                    i = this.getServiceByIdx(t);
                console.error("The service[" + t + "] (" + i.url + ") responded with the following error", e)
            }, e
        }(), e.Law = function() {
            function e(e) {
                this.initialise.apply(this, arguments)
            }
            var i = {
                regionalLaw: !0,
                hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
                revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
                explicitAction: ["HR", "IT", "ES"]
            };
            return e.prototype.initialise = function(e) {
                t.deepExtend(this.options = {}, i), t.isPlainObject(e) && t.deepExtend(this.options, e)
            }, e.prototype.get = function(e) {
                var t = this.options;
                return {
                    hasLaw: t.hasLaw.indexOf(e) >= 0,
                    revokable: t.revokable.indexOf(e) >= 0,
                    explicitAction: t.explicitAction.indexOf(e) >= 0
                }
            }, e.prototype.applyLaw = function(e, t) {
                var i = this.get(t);
                return i.hasLaw || (e.enabled = !1), this.options.regionalLaw && (i.revokable && (e.revokable = !0), i.explicitAction && (e.dismissOnScroll = !1, e.dismissOnTimeout = !1)), e
            }, e
        }(), e.initialise = function(t, i, n) {
            var o = new e.Law(t.law);
            i || (i = function() {}), n || (n = function() {}), e.getCountryCode(t, function(n) {
                delete t.law, delete t.location, n.code && (t = o.applyLaw(t, n.code)), i(new e.Popup(t))
            }, function(i) {
                delete t.law, delete t.location, n(i, new e.Popup(t))
            })
        }, e.getCountryCode = function(t, i, n) {
            if (t.law && t.law.countryCode) i({
                code: t.law.countryCode
            });
            else if (t.location) {
                var o = new e.Location(t.location);
                o.locate(function(e) {
                    i(e || {})
                }, n)
            } else i({})
        }, e.utils = t, e.hasInitialised = !0, window.cookieconsent = e
    }
})(window.cookieconsent || {});

(function() {
    function o() {
        window.cookieconsent.initialise(t)
    }
    var t = {
        palette: {
            popup: {
                background: "#000",
                text: "#fff"
            },
            button: {
                background: "#3fa2f7",
                text: "#fff"
            }
        },
        position: "bottom",
        showLink: !1,
        static: !1,
        content: {
            message: 'We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. To learn more, <a href="#">click here</a>. By continuing to use our site, you accept our use of cookies, <a href="#">Privacy Policy</a>, and <a href="#">Terms of Use</a>.',
            dismiss: "Allow Cookies",
            deny: ""
        },
        location: !1
    };
    VitalPrivacy.cookie_notice_pos && (t.position = VitalPrivacy.cookie_notice_pos, "top" === VitalPrivacy.cookie_notice_pos && (t.static = !0)), VitalPrivacy.cookie_notice_msg && (t.content.message = VitalPrivacy.cookie_notice_msg), VitalPrivacy.cookie_notice_accept_text && (t.content.dismiss = VitalPrivacy.cookie_notice_accept_text), VitalPrivacy.cookie_notice_accept_text_color && (t.palette.button.text = VitalPrivacy.cookie_notice_accept_text_color), VitalPrivacy.cookie_notice_accept_bg_color && (t.palette.button.background = VitalPrivacy.cookie_notice_accept_bg_color), VitalPrivacy.cookie_notice_color && (t.palette.popup.background = VitalPrivacy.cookie_notice_color), VitalPrivacy.cookie_notice_text_color && (t.palette.popup.text = VitalPrivacy.cookie_notice_text_color), document.addEventListener("DOMContentLoaded", function() {
        o()
    })
})();

/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-flexbox-flexboxlegacy-matchmedia-rgba-touchevents-addtest-classes-load-mq-printshiv-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */
;
(function(window, document, undefined) {
    var tests = [];
    var ModernizrProto = {
        _version: '3.3.1',
        _config: {
            'classPrefix': '',
            'enableClasses': !0,
            'enableJSClass': !0,
            'usePrefixes': !0
        },
        _q: [],
        on: function(test, cb) {
            var self = this;
            setTimeout(function() {
                cb(self[test])
            }, 0)
        },
        addTest: function(name, fn, options) {
            tests.push({
                name: name,
                fn: fn,
                options: options
            })
        },
        addAsyncTest: function(fn) {
            tests.push({
                name: null,
                fn: fn
            })
        }
    };
    var Modernizr = function() {};
    Modernizr.prototype = ModernizrProto;
    Modernizr = new Modernizr();
    var classes = [];

    function is(obj, type) {
        return typeof obj === type
    };

    function testRunner() {
        var featureNames;
        var feature;
        var aliasIdx;
        var result;
        var nameIdx;
        var featureName;
        var featureNameSplit;
        for (var featureIdx in tests) {
            if (tests.hasOwnProperty(featureIdx)) {
                featureNames = [];
                feature = tests[featureIdx];
                if (feature.name) {
                    featureNames.push(feature.name.toLowerCase());
                    if (feature.options && feature.options.aliases && feature.options.aliases.length) {
                        for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
                            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase())
                        }
                    }
                }
                result = is(feature.fn, 'function') ? feature.fn() : feature.fn;
                for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
                    featureName = featureNames[nameIdx];
                    featureNameSplit = featureName.split('.');
                    if (featureNameSplit.length === 1) {
                        Modernizr[featureNameSplit[0]] = result
                    } else {
                        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
                            Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]])
                        }
                        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result
                    }
                    classes.push((result ? '' : 'no-') + featureNameSplit.join('-'))
                }
            }
        }
    };
    var docElement = document.documentElement;
    var isSVG = docElement.nodeName.toLowerCase() === 'svg';

    function setClasses(classes) {
        var className = docElement.className;
        var classPrefix = Modernizr._config.classPrefix || '';
        if (isSVG) {
            className = className.baseVal
        }
        if (Modernizr._config.enableJSClass) {
            var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
            className = className.replace(reJS, '$1' + classPrefix + 'js$2')
        }
        if (Modernizr._config.enableClasses) {
            className += ' ' + classPrefix + classes.join(' ' + classPrefix);
            isSVG ? docElement.className.baseVal = className : docElement.className = className
        }
    };
    var hasOwnProp;
    (function() {
        var _hasOwnProperty = ({}).hasOwnProperty;
        if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
            hasOwnProp = function(object, property) {
                return _hasOwnProperty.call(object, property)
            }
        } else {
            hasOwnProp = function(object, property) {
                return ((property in object) && is(object.constructor.prototype[property], 'undefined'))
            }
        }
    })();
    ModernizrProto._l = {};
    ModernizrProto.on = function(feature, cb) {
        if (!this._l[feature]) {
            this._l[feature] = []
        }
        this._l[feature].push(cb);
        if (Modernizr.hasOwnProperty(feature)) {
            setTimeout(function() {
                Modernizr._trigger(feature, Modernizr[feature])
            }, 0)
        }
    };
    ModernizrProto._trigger = function(feature, res) {
        if (!this._l[feature]) {
            return
        }
        var cbs = this._l[feature];
        setTimeout(function() {
            var i, cb;
            for (i = 0; i < cbs.length; i++) {
                cb = cbs[i];
                cb(res)
            }
        }, 0);
        delete this._l[feature]
    };

    function addTest(feature, test) {
        if (typeof feature == 'object') {
            for (var key in feature) {
                if (hasOwnProp(feature, key)) {
                    addTest(key, feature[key])
                }
            }
        } else {
            feature = feature.toLowerCase();
            var featureNameSplit = feature.split('.');
            var last = Modernizr[featureNameSplit[0]];
            if (featureNameSplit.length == 2) {
                last = last[featureNameSplit[1]]
            }
            if (typeof last != 'undefined') {
                return Modernizr
            }
            test = typeof test == 'function' ? test() : test;
            if (featureNameSplit.length == 1) {
                Modernizr[featureNameSplit[0]] = test
            } else {
                if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
                    Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]])
                }
                Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test
            }
            setClasses([(!!test && test != !1 ? '' : 'no-') + featureNameSplit.join('-')]);
            Modernizr._trigger(feature, test)
        }
        return Modernizr
    }
    Modernizr._q.push(function() {
        ModernizrProto.addTest = addTest
    });
    var html5;
    if (!isSVG) {
        /**
         * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
         */
        ;
        (function(window, document) {
            var version = '3.7.3';
            var options = window.html5 || {};
            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
            var supportsHtml5Styles;
            var expando = '_html5shiv';
            var expanID = 0;
            var expandoData = {};
            var supportsUnknownElements;
            (function() {
                try {
                    var a = document.createElement('a');
                    a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);
                    supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
                        var frag = document.createDocumentFragment();
                        return (typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined')
                    }())
                } catch (e) {
                    supportsHtml5Styles = !0;
                    supportsUnknownElements = !0
                }
            }());

            function addStyleSheet(ownerDocument, cssText) {
                var p = ownerDocument.createElement('p'),
                    parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
                p.innerHTML = 'x<style>' + cssText + '</style>';
                return parent.insertBefore(p.lastChild, parent.firstChild)
            }

            function getElements() {
                var elements = html5.elements;
                return typeof elements == 'string' ? elements.split(' ') : elements
            }

            function addElements(newElements, ownerDocument) {
                var elements = html5.elements;
                if (typeof elements != 'string') {
                    elements = elements.join(' ')
                }
                if (typeof newElements != 'string') {
                    newElements = newElements.join(' ')
                }
                html5.elements = elements + ' ' + newElements;
                shivDocument(ownerDocument)
            }

            function getExpandoData(ownerDocument) {
                var data = expandoData[ownerDocument[expando]];
                if (!data) {
                    data = {};
                    expanID++;
                    ownerDocument[expando] = expanID;
                    expandoData[expanID] = data
                }
                return data
            }

            function createElement(nodeName, ownerDocument, data) {
                if (!ownerDocument) {
                    ownerDocument = document
                }
                if (supportsUnknownElements) {
                    return ownerDocument.createElement(nodeName)
                }
                if (!data) {
                    data = getExpandoData(ownerDocument)
                }
                var node;
                if (data.cache[nodeName]) {
                    node = data.cache[nodeName].cloneNode()
                } else if (saveClones.test(nodeName)) {
                    node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode()
                } else {
                    node = data.createElem(nodeName)
                }
                return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node
            }

            function createDocumentFragment(ownerDocument, data) {
                if (!ownerDocument) {
                    ownerDocument = document
                }
                if (supportsUnknownElements) {
                    return ownerDocument.createDocumentFragment()
                }
                data = data || getExpandoData(ownerDocument);
                var clone = data.frag.cloneNode(),
                    i = 0,
                    elems = getElements(),
                    l = elems.length;
                for (; i < l; i++) {
                    clone.createElement(elems[i])
                }
                return clone
            }

            function shivMethods(ownerDocument, data) {
                if (!data.cache) {
                    data.cache = {};
                    data.createElem = ownerDocument.createElement;
                    data.createFrag = ownerDocument.createDocumentFragment;
                    data.frag = data.createFrag()
                }
                ownerDocument.createElement = function(nodeName) {
                    if (!html5.shivMethods) {
                        return data.createElem(nodeName)
                    }
                    return createElement(nodeName, ownerDocument, data)
                };
                ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' + 'var n=f.cloneNode(),c=n.createElement;' + 'h.shivMethods&&(' + getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
                    data.createElem(nodeName);
                    data.frag.createElement(nodeName);
                    return 'c("' + nodeName + '")'
                }) + ');return n}')(html5, data.frag)
            }

            function shivDocument(ownerDocument) {
                if (!ownerDocument) {
                    ownerDocument = document
                }
                var data = getExpandoData(ownerDocument);
                if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
                    data.hasCSS = !!addStyleSheet(ownerDocument, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' + 'mark{background:#FF0;color:#000}' + 'template{display:none}')
                }
                if (!supportsUnknownElements) {
                    shivMethods(ownerDocument, data)
                }
                return ownerDocument
            }
            var html5 = {
                'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',
                'version': version,
                'shivCSS': (options.shivCSS !== !1),
                'supportsUnknownElements': supportsUnknownElements,
                'shivMethods': (options.shivMethods !== !1),
                'type': 'default',
                'shivDocument': shivDocument,
                createElement: createElement,
                createDocumentFragment: createDocumentFragment,
                addElements: addElements
            };
            window.html5 = html5;
            shivDocument(document);
            var reMedia = /^$|\b(?:all|print)\b/;
            var shivNamespace = 'html5shiv';
            var supportsShivableSheets = !supportsUnknownElements && (function() {
                var docEl = document.documentElement;
                return !(typeof document.namespaces == 'undefined' || typeof document.parentWindow == 'undefined' || typeof docEl.applyElement == 'undefined' || typeof docEl.removeNode == 'undefined' || typeof window.attachEvent == 'undefined')
            }());

            function addWrappers(ownerDocument) {
                var node, nodes = ownerDocument.getElementsByTagName('*'),
                    index = nodes.length,
                    reElements = RegExp('^(?:' + getElements().join('|') + ')$', 'i'),
                    result = [];
                while (index--) {
                    node = nodes[index];
                    if (reElements.test(node.nodeName)) {
                        result.push(node.applyElement(createWrapper(node)))
                    }
                }
                return result
            }

            function createWrapper(element) {
                var node, nodes = element.attributes,
                    index = nodes.length,
                    wrapper = element.ownerDocument.createElement(shivNamespace + ':' + element.nodeName);
                while (index--) {
                    node = nodes[index];
                    node.specified && wrapper.setAttribute(node.nodeName, node.nodeValue)
                }
                wrapper.style.cssText = element.style.cssText;
                return wrapper
            }

            function shivCssText(cssText) {
                var pair, parts = cssText.split('{'),
                    index = parts.length,
                    reElements = RegExp('(^|[\\s,>+~])(' + getElements().join('|') + ')(?=[[\\s,>+~#.:]|$)', 'gi'),
                    replacement = '$1' + shivNamespace + '\\:$2';
                while (index--) {
                    pair = parts[index] = parts[index].split('}');
                    pair[pair.length - 1] = pair[pair.length - 1].replace(reElements, replacement);
                    parts[index] = pair.join('}')
                }
                return parts.join('{')
            }

            function removeWrappers(wrappers) {
                var index = wrappers.length;
                while (index--) {
                    wrappers[index].removeNode()
                }
            }

            function shivPrint(ownerDocument) {
                var shivedSheet, wrappers, data = getExpandoData(ownerDocument),
                    namespaces = ownerDocument.namespaces,
                    ownerWindow = ownerDocument.parentWindow;
                if (!supportsShivableSheets || ownerDocument.printShived) {
                    return ownerDocument
                }
                if (typeof namespaces[shivNamespace] == 'undefined') {
                    namespaces.add(shivNamespace)
                }

                function removeSheet() {
                    clearTimeout(data._removeSheetTimer);
                    if (shivedSheet) {
                        shivedSheet.removeNode(!0)
                    }
                    shivedSheet = null
                }
                ownerWindow.attachEvent('onbeforeprint', function() {
                    removeSheet();
                    var imports, length, sheet, collection = ownerDocument.styleSheets,
                        cssText = [],
                        index = collection.length,
                        sheets = Array(index);
                    while (index--) {
                        sheets[index] = collection[index]
                    }
                    while ((sheet = sheets.pop())) {
                        if (!sheet.disabled && reMedia.test(sheet.media)) {
                            try {
                                imports = sheet.imports;
                                length = imports.length
                            } catch (er) {
                                length = 0
                            }
                            for (index = 0; index < length; index++) {
                                sheets.push(imports[index])
                            }
                            try {
                                cssText.push(sheet.cssText)
                            } catch (er) {}
                        }
                    }
                    cssText = shivCssText(cssText.reverse().join(''));
                    wrappers = addWrappers(ownerDocument);
                    shivedSheet = addStyleSheet(ownerDocument, cssText)
                });
                ownerWindow.attachEvent('onafterprint', function() {
                    removeWrappers(wrappers);
                    clearTimeout(data._removeSheetTimer);
                    data._removeSheetTimer = setTimeout(removeSheet, 500)
                });
                ownerDocument.printShived = !0;
                return ownerDocument
            }
            html5.type += ' print';
            html5.shivPrint = shivPrint;
            shivPrint(document);
            if (typeof module == 'object' && module.exports) {
                module.exports = html5
            }
        }(typeof window !== "undefined" ? window : this, document))
    };
    var err = function() {};
    var warn = function() {};
    if (window.console) {
        err = function() {
            var method = console.error ? 'error' : 'log';
            window.console[method].apply(window.console, Array.prototype.slice.call(arguments))
        };
        warn = function() {
            var method = console.warn ? 'warn' : 'log';
            window.console[method].apply(window.console, Array.prototype.slice.call(arguments))
        }
    }
    ModernizrProto.load = function() {
        if ('yepnope' in window) {
            warn('yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so weâ€™ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information.');
            window.yepnope.apply(window, [].slice.call(arguments, 0))
        } else {
            err('yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.')
        }
    };

    function createElement() {
        if (typeof document.createElement !== 'function') {
            return document.createElement(arguments[0])
        } else if (isSVG) {
            return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0])
        } else {
            return document.createElement.apply(document, arguments)
        }
    };

    function getBody() {
        var body = document.body;
        if (!body) {
            body = createElement(isSVG ? 'svg' : 'body');
            body.fake = !0
        }
        return body
    };

    function injectElementWithStyles(rule, callback, nodes, testnames) {
        var mod = 'modernizr';
        var style;
        var ret;
        var node;
        var docOverflow;
        var div = createElement('div');
        var body = getBody();
        if (parseInt(nodes, 10)) {
            while (nodes--) {
                node = createElement('div');
                node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
                div.appendChild(node)
            }
        }
        style = createElement('style');
        style.type = 'text/css';
        style.id = 's' + mod;
        (!body.fake ? div : body).appendChild(style);
        body.appendChild(div);
        if (style.styleSheet) {
            style.styleSheet.cssText = rule
        } else {
            style.appendChild(document.createTextNode(rule))
        }
        div.id = mod;
        if (body.fake) {
            body.style.background = '';
            body.style.overflow = 'hidden';
            docOverflow = docElement.style.overflow;
            docElement.style.overflow = 'hidden';
            docElement.appendChild(body)
        }
        ret = callback(div, rule);
        if (body.fake) {
            body.parentNode.removeChild(body);
            docElement.style.overflow = docOverflow;
            docElement.offsetHeight
        } else {
            div.parentNode.removeChild(div)
        }
        return !!ret
    };
    var mq = (function() {
        var matchMedia = window.matchMedia || window.msMatchMedia;
        if (matchMedia) {
            return function(mq) {
                var mql = matchMedia(mq);
                return mql && mql.matches || !1
            }
        }
        return function(mq) {
            var bool = !1;
            injectElementWithStyles('@media ' + mq + ' { #modernizr { position: absolute; } }', function(node) {
                bool = (window.getComputedStyle ? window.getComputedStyle(node, null) : node.currentStyle).position == 'absolute'
            });
            return bool
        }
    })();
    ModernizrProto.mq = mq;
    /*!
    {
      "name": "CSS rgba",
      "caniuse": "css3-colors",
      "property": "rgba",
      "tags": ["css"],
      "notes": [{
        "name": "CSSTricks Tutorial",
        "href": "https://css-tricks.com/rgba-browser-support/"
      }]
    }
    !*/
    Modernizr.addTest('rgba', function() {
        var style = createElement('a').style;
        style.cssText = 'background-color:rgba(150,255,150,.5)';
        return ('' + style.backgroundColor).indexOf('rgba') > -1
    });
    var omPrefixes = 'Moz O ms Webkit';
    var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
    ModernizrProto._cssomPrefixes = cssomPrefixes;

    function contains(str, substr) {
        return !!~('' + str).indexOf(substr)
    };
    var modElem = {
        elem: createElement('modernizr')
    };
    Modernizr._q.push(function() {
        delete modElem.elem
    });
    var mStyle = {
        style: modElem.elem.style
    };
    Modernizr._q.unshift(function() {
        delete mStyle.style
    });

    function domToCSS(name) {
        return name.replace(/([A-Z])/g, function(str, m1) {
            return '-' + m1.toLowerCase()
        }).replace(/^ms-/, '-ms-')
    };

    function nativeTestProps(props, value) {
        var i = props.length;
        if ('CSS' in window && 'supports' in window.CSS) {
            while (i--) {
                if (window.CSS.supports(domToCSS(props[i]), value)) {
                    return !0
                }
            }
            return !1
        } else if ('CSSSupportsRule' in window) {
            var conditionText = [];
            while (i--) {
                conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')')
            }
            conditionText = conditionText.join(' or ');
            return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
                return getComputedStyle(node, null).position == 'absolute'
            })
        }
        return undefined
    };

    function cssToDOM(name) {
        return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
            return m1 + m2.toUpperCase()
        }).replace(/^-/, '')
    };

    function testProps(props, prefixed, value, skipValueTest) {
        skipValueTest = is(skipValueTest, 'undefined') ? !1 : skipValueTest;
        if (!is(value, 'undefined')) {
            var result = nativeTestProps(props, value);
            if (!is(result, 'undefined')) {
                return result
            }
        }
        var afterInit, i, propsLength, prop, before;
        var elems = ['modernizr', 'tspan'];
        while (!mStyle.style) {
            afterInit = !0;
            mStyle.modElem = createElement(elems.shift());
            mStyle.style = mStyle.modElem.style
        }

        function cleanElems() {
            if (afterInit) {
                delete mStyle.style;
                delete mStyle.modElem
            }
        }
        propsLength = props.length;
        for (i = 0; i < propsLength; i++) {
            prop = props[i];
            before = mStyle.style[prop];
            if (contains(prop, '-')) {
                prop = cssToDOM(prop)
            }
            if (mStyle.style[prop] !== undefined) {
                if (!skipValueTest && !is(value, 'undefined')) {
                    try {
                        mStyle.style[prop] = value
                    } catch (e) {}
                    if (mStyle.style[prop] != before) {
                        cleanElems();
                        return prefixed == 'pfx' ? prop : !0
                    }
                } else {
                    cleanElems();
                    return prefixed == 'pfx' ? prop : !0
                }
            }
        }
        cleanElems();
        return !1
    };
    var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
    ModernizrProto._domPrefixes = domPrefixes;

    function fnBind(fn, that) {
        return function() {
            return fn.apply(that, arguments)
        }
    };

    function testDOMProps(props, obj, elem) {
        var item;
        for (var i in props) {
            if (props[i] in obj) {
                if (elem === !1) {
                    return props[i]
                }
                item = obj[props[i]];
                if (is(item, 'function')) {
                    return fnBind(item, elem || obj)
                }
                return item
            }
        }
        return !1
    };

    function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');
        if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
            return testProps(props, prefixed, value, skipValueTest)
        } else {
            props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
            return testDOMProps(props, prefixed, elem)
        }
    }
    ModernizrProto.testAllProps = testPropsAll;

    function testAllProps(prop, value, skipValueTest) {
        return testPropsAll(prop, undefined, undefined, value, skipValueTest)
    }
    ModernizrProto.testAllProps = testAllProps;
    /*!
    {
      "name": "Flexbox",
      "property": "flexbox",
      "caniuse": "flexbox",
      "tags": ["css"],
      "notes": [{
        "name": "The _new_ flexbox",
        "href": "http://dev.w3.org/csswg/css3-flexbox"
      }],
      "warnings": [
        "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
      ]
    }
    !*/
    Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', !0));
    /*!
    {
      "name": "Flexbox (legacy)",
      "property": "flexboxlegacy",
      "tags": ["css"],
      "polyfills": ["flexie"],
      "notes": [{
        "name": "The _old_ flexbox",
        "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
      }]
    }
    !*/
    Modernizr.addTest('flexboxlegacy', testAllProps('boxDirection', 'reverse', !0));
    var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : []);
    ModernizrProto._prefixes = prefixes;
    var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
    /*!
    {
      "name": "Touch Events",
      "property": "touchevents",
      "caniuse" : "touch",
      "tags": ["media", "attribute"],
      "notes": [{
        "name": "Touch Events spec",
        "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
      }],
      "warnings": [
        "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
      ],
      "knownBugs": [
        "False-positive on some configurations of Nokia N900",
        "False-positive on some BlackBerry 6.0 builds â€“ https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
      ]
    }
    !*/
    Modernizr.addTest('touchevents', function() {
        var bool;
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
            bool = !0
        } else {
            var query = ['@media (', prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
            testStyles(query, function(node) {
                bool = node.offsetTop === 9
            })
        }
        return bool
    });
    var atRule = function(prop) {
        var length = prefixes.length;
        var cssrule = window.CSSRule;
        var rule;
        if (typeof cssrule === 'undefined') {
            return undefined
        }
        if (!prop) {
            return !1
        }
        prop = prop.replace(/^@/, '');
        rule = prop.replace(/-/g, '_').toUpperCase() + '_RULE';
        if (rule in cssrule) {
            return '@' + prop
        }
        for (var i = 0; i < length; i++) {
            var prefix = prefixes[i];
            var thisRule = prefix.toUpperCase() + '_' + rule;
            if (thisRule in cssrule) {
                return '@-' + prefix.toLowerCase() + '-' + prop
            }
        }
        return !1
    };
    ModernizrProto.atRule = atRule;
    var prefixed = ModernizrProto.prefixed = function(prop, obj, elem) {
        if (prop.indexOf('@') === 0) {
            return atRule(prop)
        }
        if (prop.indexOf('-') != -1) {
            prop = cssToDOM(prop)
        }
        if (!obj) {
            return testPropsAll(prop, 'pfx')
        } else {
            return testPropsAll(prop, obj, elem)
        }
    };
    /*!
    {
      "name": "matchMedia",
      "property": "matchmedia",
      "caniuse" : "matchmedia",
      "tags": ["matchmedia"],
      "authors": ["Alberto Elias"],
      "notes": [{
        "name": "W3C CSSOM View Module",
        "href": "https://drafts.csswg.org/cssom-view/#the-mediaquerylist-interface"
      }, {
        "name": "MDN documentation",
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia"
      }],
      "polyfills": ["matchmediajs"]
    }
    !*/
    Modernizr.addTest('matchmedia', !!prefixed('matchMedia', window));
    testRunner();
    setClasses(classes);
    delete ModernizrProto.addTest;
    delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++) {
        Modernizr._q[i]()
    }
    window.Modernizr = Modernizr
})(window, document)


(function($) {
    $.fn.slickAnimation = function() {
        var currentSlickSlider = $(this);
        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
        var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');
        var animatedClass = 'animated';
        var visible = {
            opacity: '1'
        };
        var hidden = {
            opacity: '0'
        };

        function slickSetAnimationDefault(obj, type, animationIn, animatedClass, visibility) {
            visibility = typeof visibility !== 'undefined' ? visibility : !1;
            slickRemoveAnimation(obj, 'delay');
            slickRemoveAnimation(obj, 'duration');
            if (type.opacity == 1) {
                obj.addClass(animationIn);
                obj.addClass(animatedClass)
            } else {
                obj.removeClass(animationIn);
                obj.removeClass(animatedClass)
            }
            if (visibility) obj.css(type)
        }

        function getTimeout(delayIn, durationIn) {
            if (delayIn) {
                return delayIn * 1000 + 1000
            } else if (durationIn) {
                return durationIn * 1000
            } else if ((delayIn) || (durationIn)) {
                return (delayIn * 1000) + (durationIn * 1000)
            }
            return 1000
        }

        function slickAddAnimation(obj, animation, value) {
            var delayInAttr = ['animation-' + animation, '-webkit-animation-' + animation, '-moz-animation-' + animation, '-o-animation-' + animation, '-ms-animation-' + animation];
            var delayInAttributes = {};
            delayInAttr.forEach(function(entry) {
                delayInAttributes[entry] = value + 's'
            });
            obj.css(delayInAttributes)
        }

        function slickRemoveAnimation(obj, animation) {
            var delayInAttr = ['animation-' + animation, '-webkit-animation-' + animation, '-moz-animation-' + animation, '-o-animation-' + animation, '-ms-animation-' + animation];
            var delayInAttributes = {};
            delayInAttr.forEach(function(entry) {
                delayInAttributes[entry] = ''
            });
            obj.css(delayInAttributes)
        }
        slickItems.each(function() {
            var slickItem = $(this);
            slickItem.find('[data-animation-in]').each(function() {
                var self = $(this);
                self.css(hidden);
                var animationIn = self.attr('data-animation-in');
                var animationOut = self.attr('data-animation-out');
                var delayIn = self.attr('data-delay-in');
                var durationIn = self.attr('data-duration-in');
                var delayOut = self.attr('data-delay-out');
                var durationOut = self.attr('data-duration-out');
                if (animationOut) {
                    if (firstSlickItem.length > 0) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                            setTimeout(function() {
                                slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                                slickSetAnimationDefault(self, visible, animationOut, animatedClass);
                                if (delayOut) {
                                    slickAddAnimation(self, 'delay', delayOut)
                                }
                                if (durationOut) {
                                    slickAddAnimation(self, 'duration', durationOut)
                                }
                                setTimeout(function() {
                                    slickRemoveAnimation(self, 'delay');
                                    slickRemoveAnimation(self, 'duration')
                                }, getTimeout(delayOut, durationOut))
                            }, getTimeout(delayIn, durationIn))
                        }
                    }
                    currentSlickSlider.on('afterChange', function(event, slick, currentSlider) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                            setTimeout(function() {
                                slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                                slickSetAnimationDefault(self, visible, animationOut, animatedClass);
                                if (delayOut) {
                                    slickAddAnimation(self, 'delay', delayOut)
                                }
                                if (durationOut) {
                                    slickAddAnimation(self, 'duration', durationOut)
                                }
                                setTimeout(function() {
                                    slickRemoveAnimation(self, 'delay');
                                    slickRemoveAnimation(self, 'duration')
                                }, getTimeout(delayOut, durationOut))
                            }, getTimeout(delayIn, durationIn))
                        }
                    });
                    currentSlickSlider.on('beforeChange', function(event, slick, currentSlider) {
                        slickSetAnimationDefault(self, hidden, animationOut, animatedClass, !0)
                    })
                } else {
                    if (firstSlickItem.length > 0) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                        }
                    }
                    currentSlickSlider.on('afterChange', function(event, slick, currentSlider) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                        }
                    });
                    currentSlickSlider.on('beforeChange', function(event, slick, currentSlider) {
                        slickSetAnimationDefault(self, hidden, animationIn, animatedClass, !0)
                    })
                }
            })
        });
        return this
    }
})(jQuery)

(function($) {
    $.fn.slickAnimation = function() {
        var currentSlickSlider = $(this);
        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
        var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');
        var animatedClass = 'animated';
        var visible = {
            opacity: '1'
        };
        var hidden = {
            opacity: '0'
        };

        function slickSetAnimationDefault(obj, type, animationIn, animatedClass, visibility) {
            visibility = typeof visibility !== 'undefined' ? visibility : !1;
            slickRemoveAnimation(obj, 'delay');
            slickRemoveAnimation(obj, 'duration');
            if (type.opacity == 1) {
                obj.addClass(animationIn);
                obj.addClass(animatedClass)
            } else {
                obj.removeClass(animationIn);
                obj.removeClass(animatedClass)
            }
            if (visibility) obj.css(type)
        }

        function getTimeout(delayIn, durationIn) {
            if (delayIn) {
                return delayIn * 1000 + 1000
            } else if (durationIn) {
                return durationIn * 1000
            } else if ((delayIn) || (durationIn)) {
                return (delayIn * 1000) + (durationIn * 1000)
            }
            return 1000
        }

        function slickAddAnimation(obj, animation, value) {
            var delayInAttr = ['animation-' + animation, '-webkit-animation-' + animation, '-moz-animation-' + animation, '-o-animation-' + animation, '-ms-animation-' + animation];
            var delayInAttributes = {};
            delayInAttr.forEach(function(entry) {
                delayInAttributes[entry] = value + 's'
            });
            obj.css(delayInAttributes)
        }

        function slickRemoveAnimation(obj, animation) {
            var delayInAttr = ['animation-' + animation, '-webkit-animation-' + animation, '-moz-animation-' + animation, '-o-animation-' + animation, '-ms-animation-' + animation];
            var delayInAttributes = {};
            delayInAttr.forEach(function(entry) {
                delayInAttributes[entry] = ''
            });
            obj.css(delayInAttributes)
        }
        slickItems.each(function() {
            var slickItem = $(this);
            slickItem.find('[data-animation-in]').each(function() {
                var self = $(this);
                self.css(hidden);
                var animationIn = self.attr('data-animation-in');
                var animationOut = self.attr('data-animation-out');
                var delayIn = self.attr('data-delay-in');
                var durationIn = self.attr('data-duration-in');
                var delayOut = self.attr('data-delay-out');
                var durationOut = self.attr('data-duration-out');
                if (animationOut) {
                    if (firstSlickItem.length > 0) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                            setTimeout(function() {
                                slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                                slickSetAnimationDefault(self, visible, animationOut, animatedClass);
                                if (delayOut) {
                                    slickAddAnimation(self, 'delay', delayOut)
                                }
                                if (durationOut) {
                                    slickAddAnimation(self, 'duration', durationOut)
                                }
                                setTimeout(function() {
                                    slickRemoveAnimation(self, 'delay');
                                    slickRemoveAnimation(self, 'duration')
                                }, getTimeout(delayOut, durationOut))
                            }, getTimeout(delayIn, durationIn))
                        }
                    }
                    currentSlickSlider.on('afterChange', function(event, slick, currentSlider) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                            setTimeout(function() {
                                slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                                slickSetAnimationDefault(self, visible, animationOut, animatedClass);
                                if (delayOut) {
                                    slickAddAnimation(self, 'delay', delayOut)
                                }
                                if (durationOut) {
                                    slickAddAnimation(self, 'duration', durationOut)
                                }
                                setTimeout(function() {
                                    slickRemoveAnimation(self, 'delay');
                                    slickRemoveAnimation(self, 'duration')
                                }, getTimeout(delayOut, durationOut))
                            }, getTimeout(delayIn, durationIn))
                        }
                    });
                    currentSlickSlider.on('beforeChange', function(event, slick, currentSlider) {
                        slickSetAnimationDefault(self, hidden, animationOut, animatedClass, !0)
                    })
                } else {
                    if (firstSlickItem.length > 0) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                        }
                    }
                    currentSlickSlider.on('afterChange', function(event, slick, currentSlider) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, !0);
                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn)
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn)
                            }
                        }
                    });
                    currentSlickSlider.on('beforeChange', function(event, slick, currentSlider) {
                        slickSetAnimationDefault(self, hidden, animationIn, animatedClass, !0)
                    })
                }
            })
        });
        return this
    }
})(jQuery)

(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory)
    } else {
        factory(jQuery)
    }
})(this, function($) {
    var defaultSettings = {
        prefix: "imagelistexpander-"
    };
    var waitForFinalEvent = (function() {
        var timer = null;
        return function(callback, uniqueId) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(callback, 500)
        }
    })();
    var imageListExpander = function(list, _settings) {
        var
            settings = $.extend({}, defaultSettings, _settings),
            $list = $(list),
            $items = $list.find('.' + settings.prefix + 'item'),
            $trigger = $list.find('.' + settings.prefix + 'trigger'),
            $closeTrigger = $list.find('.' + settings.prefix + 'trigger-close'),
            initialize = function() {
                $(window).bind('resize', resizeWindow);
                $trigger.bind('click', clickItem);
                $closeTrigger.bind('click', clickCloseTrigger)
            },
            resizeWindow = function() {
                waitForFinalEvent(function() {
                    $items.filter('.active').each(function() {
                        var
                            $item = $(this),
                            $expanderContents = $item.find('.' + settings.prefix + 'expander-contents'),
                            $expander = $item.find('.' + settings.prefix + 'expander'),
                            expanderHeight = $expanderContents.outerHeight();
                        $item.css('height', $item.find('.' + settings.prefix + 'contents').outerHeight() + expanderHeight);
                        $expander.css('max-height', expanderHeight)
                    })
                })
            },
            clickItem = function() {
                var $item = $(this).parents('.' + settings.prefix + 'item');
                if ($item.hasClass('active')) {
                    hideItems($item)
                } else {
                    showItem($item)
                }
            },
            clickCloseTrigger = function() {
                hideItems($items)
            },
            showItem = function($item) {
                hideItems($item.siblings());
                var $expanderContents = $item.find('.' + settings.prefix + 'expander-contents'),
                    $expander = $item.find('.' + settings.prefix + 'expander'),
                    expanderHeight = $expanderContents.outerHeight();
                $item.addClass('active').css('height', $item.find('.' + settings.prefix + 'contents').outerHeight() + expanderHeight);
                $expander.css('max-height', expanderHeight)
            },
            hideItems = function($targetItems) {
                $targetItems = $targetItems.filter('.active');
                var $expanders = $targetItems.find('.' + settings.prefix + 'expander');
                $targetItems.each(function() {
                    var $item = $(this);
                    $item.css('height', $item.find('.' + settings.prefix + 'contents').outerHeight())
                });
                $targetItems.removeClass('active');
                $expanders.css('max-height', 0)
            };
        initialize()
    };
    $.fn.imagelistexpander = function(settings) {
        $(this).each(function() {
            imageListExpander(this, settings || {})
        })
    };
    return $
})