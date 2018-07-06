---
---

(function () {
    // lazyload
    window.addEventListener("load", function() {
        function a() {
            !1 === f && (f = !0, setTimeout(function() {
                for (var c = b.length - 1; 0 <= c; c--) {
                    var d = b[c];
                    if (d.getBoundingClientRect().top <= window.innerHeight && 0 <= d.getBoundingClientRect().bottom) {
                        if (d.tagName === "IMG") {
                            var img = new Image();
                            img.onload = function() { d.src = img.src, d.classList.add("loaded"); };
                            img.src = d.getAttribute("data-src");
                            b.splice(c, 1);
                        } else {
                            var vid = document.createElement("video");
                            vid.onload = function() { d.src = vid.src, d.classList.add("loaded"); }
                            vid.src = d.getAttribute("data-src");
                            b.splice(c, 1);
                        }
                    } 
                }
                0 === b.length && (document.removeEventListener("scroll", a), window.removeEventListener("resize", a), window.removeEventListener("orientationchange", a));
                f = !1
            }, 200))
        }
        var b = [].slice.call(document.getElementsByClassName("lazyload")),
            f = !1;
        document.addEventListener("scroll", a);
        window.addEventListener("resize", a);
        window.addEventListener("orientationchange", a);
        a();
    });

     // preload
    var p = document.getElementsByClassName("preload");
    for (g = 0; g < p.length; g++) {
        "style" === p[g].getAttribute("as") && (p[g].rel = "stylesheet");
        "script" === p[g].getAttribute("as") && (document.head.appendChild(
            document.createElement("script")).setAttribute("src", p[g].getAttribute("href")))
    }

    // smooth scroll
    for (var H, I = document.getElementsByTagName("a"), M = 0; M < I.length; M++) H = I[M], H.addEventListener("click", function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = this.getAttribute("href").replace("#", ""),
                b = document.getElementById(a);
            if (null !== b) return N(window.l(b), function () {
                b.focus();
                if (document.activeElement === b) return !1;
                b.setAttribute("tabindex", "-1");
                b.focus()
            }), !1
        }
    });
    var O = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1E3 / 60)
    };

    function N(a, b) {
        function f() {
            n += 20;
            var a = n;
            a /= c / 2;
            1 > a ? a = g / 2 * a * a + d : (a-- , a = -g / 2 * (a * (a - 2) - 1) + d);
            document.documentElement.scrollTop = a;
            document.body.parentNode.scrollTop = a;
            document.body.scrollTop = a;
            n < c ? O(f) : b && "function" === typeof b && b()
        }
        var c = 800,
            d = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop,
            g = a - d,
            n = 0;
        c = "undefined" === typeof c ? 500 : c;
        f()
    };

    {% if jekyll.environment == "production" %}
    if (navigator.serviceWorker)
        navigator.serviceWorker.register("{{ "/sw.js" | absolute_url }}", { scope: "{{ "/" | absolute_url }}" });
    {% endif %}
})();
