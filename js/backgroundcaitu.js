/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v1.0.1
 * GitHub: https://github.com/hustcc/ribbon.js
 **/
! function() {
    function e(e, t, n) { return Number(e.getAttribute(t)) || n }

    function t() { for (r.clearRect(0, 0, h, s), a = [{ x: 0, y: .7 * s + u }, { x: 0, y: .7 * s - u }]; a[1].x < h + u;) n(a[0], a[1]) }

    function n(e, t) {
        r.beginPath(), r.moveTo(e.x, e.y), r.lineTo(t.x, t.y);
        var n = t.x + (2 * p() - .25) * u,
            o = i(t.y);
        r.lineTo(n, o), r.closePath(), m -= x / -50, r.fillStyle = "#" + (127 * y(m) + 128 << 16 | 127 * y(m + x / 3) + 128 << 8 | 127 * y(m + x / 3 * 2) + 128).toString(16), r.fill(), a[0] = a[1], a[1] = { x: n, y: o }
    }

    function i(e) { return l = e + (2 * p() - 1.1) * u, l > s || l < 0 ? i(e) : l }
    var o = document.getElementsByTagName("script"),
        c = o[o.length - 1];
    config = { z: e(c, "zIndex", -1), a: e(c, "alpha", .6), s: e(c, "size", 90) };
    var a, l, d = document.createElement("canvas"),
        r = d.getContext("2d"),
        g = window.devicePixelRatio || 1,
        h = window.innerWidth,
        s = window.innerHeight,
        u = config.s,
        f = Math,
        m = 0,
        x = 2 * f.PI,
        y = f.cos,
        p = f.random;
    d.width = h * g, d.height = s * g, r.scale(g, g), r.globalAlpha = config.a, d.style.cssText = "position:fixed;top:0;left:0;z-index: " + config.z + ";width:100%;height:100%;pointer-events:none;opacity:0.5;", document.getElementsByTagName("body")[0].appendChild(d), document.onclick = t, document.ontouchstart = t, t()
}();