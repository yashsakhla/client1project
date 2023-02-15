/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */ ! function() {
    function e(e, n, t) {
        "use strict";
        var o = window.document.createElement("link"),
            r = n || window.document.getElementsByTagName("script")[0],
            i = window.document.styleSheets;
        return o.rel = "stylesheet", o.href = e, o.media = "only x", r.parentNode.insertBefore(o, r), o.onloadcssdefined = function(e) {
            for (var n, t = 0; t < i.length; t++) i[t].href && i[t].href === o.href && (n = !0);
            n ? e() : setTimeout(function() {
                o.onloadcssdefined(e)
            })
        }, o.onloadcssdefined(function() {
            o.media = t || "all"
        }), o
    }

    function n(e, n) {
        e.onload =
            function() {
                e.onload = null, n && n.call(e)
            }, "isApplicationInstalled" in navigator && "onloadcssdefined" in e && e.onloadcssdefined(n)
    }! function(t) {
        var o = function(r, i) {
            "use strict";
            if (r && 3 === r.length) {
                var a = t.navigator,
                    c = t.document,
                    s = t.Image,
                    d = !(!c.createElementNS || !c.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || !c.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || t.opera && -1 === a.userAgent.indexOf("Chrome") || -1 !== a.userAgent.indexOf("Series40")),
                    u = new s;
                u.onerror = function() {
                    o.method = "png", o.href = r[2], e(r[2])
                }, u.onload = function() {
                    var t = 1 === u.width && 1 === u.height,
                        a = r[t && d ? 0 : t ? 1 : 2];
                    t && d ? o.method = "svg" : t ? o.method = "datapng" : o.method = "png", o.href = a, n(e(a), i)
                }, u.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", c.documentElement.className += " grunticon"
            }
        };
        o.loadCSS = e, o.onloadCSS = n, t.grunticon = o
    }(this),
    function(e, n) {
        "use strict";
        var t = n.document,
            o = "grunticon:",
            r = function(e) {
                if (t.attachEvent ? "complete" === t.readyState : "loading" !== t.readyState) e();
                else {
                    var n = !1;
                    t.addEventListener("readystatechange", function() {
                        n || (n = !0, e())
                    }, !1)
                }
            },
            i = function(e) {
                return n.document.querySelector('link[href$="' + e + '"]')
            },
            a = function(e) {
                var n, t, r, i, a, c, s = {};
                if (n = e.sheet, !n) return s;
                t = n.cssRules ? n.cssRules : n.rules;
                for (var d = 0; d < t.length; d++) r = t[d].cssText, i = o + t[d].selectorText, a = r.split(");")[0].match(/US\-ASCII\,([^"']+)/), a && a[1] && (c = decodeURIComponent(a[1]), s[i] = c);
                return s
            },
            c = function(e) {
                var n, r, i, a;
                i = "data-grunticon-embed";
                for (var c in e) {
                    a = c.slice(o.length);
                    try {
                        n = t.querySelectorAll(a)
                    } catch (s) {
                        continue
                    }
                    r = [];
                    for (var d = 0; d < n.length; d++) null !== n[d].getAttribute(i) && r.push(n[d]);
                    if (r.length)
                        for (d = 0; d < r.length; d++) r[d].innerHTML = e[c], r[d].style.backgroundImage = "none", r[d].removeAttribute(i)
                }
                return r
            },
            s = function(n) {
                "svg" === e.method && r(function() {
                    c(a(i(e.href))), "function" == typeof n && n()
                })
            };
        e.embedIcons = c, e.getCSS = i, e.getIcons = a, e.ready = r, e.svgLoadedCallback = s, e.embedSVG = s
    }(grunticon, this),
    function(e, n) {
        "use strict";
        var t = n.document,
            o = function(e, t) {
                var o = new n.XMLHttpRequest;
                return "withCredentials" in o ? o.open("GET", e, !0) : "undefined" != typeof n.XDomainRequest && (o = new n.XDomainRequest, o.open("GET", e)), t && (o.onload = t), o.send(), o
            },
            r = function(n) {
                "svg" === e.method && e.ready(function() {
                    o(e.href, function() {
                        var o = t.createElement("style");
                        o.innerHTML = this.responseText;
                        var r = e.getCSS(e.href);
                        r && (r.parentNode.insertBefore(o, r), r.parentNode.removeChild(r), e.embedIcons(e.getIcons(o)), "function" == typeof n && n())
                    })
                })
            };
        e.ajaxGet = o, e.svgLoadedCORSCallback = r, e.embedSVGCors = r
    }(grunticon, this)
}()