// B&S Atlas of Books v1. Map: MapLibre GL + free OpenFreeMap vector tiles, styled in our own palette (below).
// Pins come from atlas-data.js. No backend, no keys, no cost.
(function () {
    "use strict";
    var PLACES = window.bsAtlas || [];
    var AFF = "https://bookshop.org/a/125864/";
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    var mapEl = document.getElementById("map");
    var fallback = document.getElementById("map-fallback");
    var map = null, popup = null, activeId = null, markers = {};
    var ROUTES = window.bsRoutes || [];
    var ROUTE = ROUTES[0] || null;
    var routeStops = ROUTE ? ROUTE.stops.slice() : [];
    var routeOn = false, mapReady = false;

    function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
    function plural(n, w) { return n + " " + w + (n === 1 ? "" : "s"); }
    function buyUrl(b) { return AFF + b.isbn; }
    function ebookUrl(b) { return b.ebook ? "https://bookshop.org/p/books/" + b.ebook[0] + "?ean=" + b.ebook[1] + "&digital=t&affiliate=125864" : null; }
    function newTab(a) { a.target = "_blank"; a.rel = "noopener sponsored"; return a; }

    /* ---------- Pin list (static-friendly, also the keyboard/no-map path) ---------- */
    function renderList() {
        var ul = document.getElementById("pins-ul"), total = 0;
        PLACES.forEach(function (p) {
            total += p.books.length;
            var li = el("li");
            li.appendChild(el("div", "pl-place", p.name));
            p.books.forEach(function (b) {
                var d = el("div", "pl-book");
                var a = el("a", null, b.title); a.href = b.page || b.srcUrl; if (!b.page) { newTab(a); a.rel = "noopener"; } d.appendChild(a);
                d.appendChild(document.createTextNode(" by " + b.author));
                li.appendChild(d);
            });
            var btn = el("button", "pl-show", "Show on map");
            btn.type = "button";
            btn.setAttribute("aria-label", "Show " + p.name + " on the map");
            btn.addEventListener("click", function () { showPlace(p.id, true); });
            li.appendChild(btn);
            ul.appendChild(li);
        });
        document.getElementById("pin-count").textContent = plural(PLACES.length, "pin") + ", " + plural(total, "book") + ". More on the way.";
    }

    /* ---------- Popup ---------- */
    function popupNode(p) {
        var root = el("div", "pp");
        var head = el("div", "pp-head", p.name);
        var stopNo = routeOn ? routeStops.indexOf(p.id) + 1 : 0;
        if (stopNo) head.appendChild(el("small", "pp-stop", "Stop " + stopNo + " of " + routeStops.length));
        if (p.area) head.appendChild(el("small", null, "Area pin · region, not an address"));
        root.appendChild(head);
        var body = el("div", "pp-body");
        p.books.forEach(function (b) {
            var row = el("div", "pp-book");
            var img = el("img"); img.src = b.cover; img.alt = "Cover of " + b.title + " by " + b.author; img.width = 72; img.height = 108; img.loading = "lazy";
            row.appendChild(img);
            var col = el("div");
            col.appendChild(el("div", "pp-title", b.title));
            col.appendChild(el("div", "pp-author", b.author + (b.year ? " · " + b.year : "")));
            var set = el("div", "pp-set"); set.appendChild(el("b", null, "Set in: ")); set.appendChild(document.createTextNode(b.setting)); col.appendChild(set);
            if (b.note) col.appendChild(el("div", "pp-note", b.note));
            var act = el("div", "pp-actions");
            var buy = newTab(el("a", "buy", "Buy the book")); buy.href = buyUrl(b);
            buy.setAttribute("aria-label", "Buy " + b.title + " on Bookshop.org (opens in a new tab)");
            act.appendChild(buy);
            var eu = ebookUrl(b);
            if (eu) { var eb = newTab(el("a", "alt", "Ebook")); eb.href = eu; eb.setAttribute("aria-label", "Buy the ebook of " + b.title + " on Bookshop.org (opens in a new tab)"); act.appendChild(eb); }
            col.appendChild(act);
            var pg;
            if (b.page) { pg = el("a", "pp-page", b.page.indexOf("book-") === 0 ? "Read our page →" : "See it in our shop →"); pg.href = b.page; }
            else { pg = newTab(el("a", "pp-page", "Where it's set: source →")); pg.rel = "noopener"; pg.href = b.srcUrl; }
            col.appendChild(pg);
            row.appendChild(col);
            body.appendChild(row);
        });
        root.appendChild(body);
        if (stopNo) {
            var nav = el("div", "pp-route");
            var prev = el("button", "pp-step", "← Stop " + (stopNo - 1)); prev.type = "button";
            var next = el("button", "pp-step", "Stop " + (stopNo + 1) + " →"); next.type = "button";
            if (stopNo > 1) { prev.addEventListener("click", function () { showPlace(routeStops[stopNo - 2], false); }); } else { prev.disabled = true; prev.textContent = "Start"; }
            if (stopNo < routeStops.length) { next.addEventListener("click", function () { showPlace(routeStops[stopNo], false); }); } else { next.disabled = true; next.textContent = "The end"; }
            nav.appendChild(prev); nav.appendChild(next); root.appendChild(nav);
        }
        return root;
    }

    function setActive(id) {
        Object.keys(markers).forEach(function (k) { markers[k].el.classList.toggle("on", k === id); });
        activeId = id;
    }

    function showPlace(id, scroll) {
        var p = PLACES.filter(function (x) { return x.id === id; })[0];
        if (!p || !map) { return; }
        if (scroll) { mapEl.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }); }
        if (popup) popup.remove();
        popup = new maplibregl.Popup({ offset: 24, maxWidth: "none", closeButton: true, closeOnMove: false, focusAfterOpen: true })
            .setLngLat([p.lng, p.lat]).setDOMContent(popupNode(p)).addTo(map);
        popup.on("close", function () { if (activeId === id) { setActive(null); } });
        setActive(id);
        var h = mapEl.clientHeight;
        var opts = { center: [p.lng, p.lat], offset: [0, Math.round(h * 0.3)], zoom: Math.max(map.getZoom(), p.area ? 4 : 5) };
        if (reduce) { map.jumpTo(opts); } else { map.easeTo(Object.assign(opts, { duration: 900 })); }
    }

    /* ---------- Regions ---------- */
    var REGIONS = {
        world: { bounds: [[-128, 12], [148, 62]] },
        na: { bounds: [[-128, 18], [-62, 52]] },
        europe: { bounds: [[-12, 36], [24, 62]] },
        asia: { bounds: [[100, 14], [150, 46]] }
    };
    function goRegion(key) {
        var r = REGIONS[key]; if (!r || !map) { return; }
        if (routeOn) { setRoute(false); }
        if (popup) { popup.remove(); }
        var small = mapEl.clientWidth < 600;
        map.fitBounds(r.bounds, { padding: small ? 14 : 46, duration: reduce ? 0 : 1100, maxZoom: key === "world" ? 3 : 6 });
        Array.prototype.forEach.call(document.querySelectorAll("#regions button"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-region") === key)); });
    }

    /* ---------- Seasonal route (Gothic October) ---------- */
    function place(id) { return PLACES.filter(function (x) { return x.id === id; })[0]; }
    // Curved "airmail" arc between two stops so the path reads as a route, not a ruler line.
    function arc(a, b) {
        var pts = [], n = 28, dx = b[0] - a[0], dy = b[1] - a[1], k = 0.16;
        for (var i = 0; i <= n; i++) {
            var t = i / n, bulge = Math.sin(Math.PI * t) * k;
            pts.push([a[0] + dx * t - dy * bulge, a[1] + dy * t + dx * bulge]);
        }
        return pts;
    }
    function routeGeo() {
        var coords = [];
        for (var i = 0; i < routeStops.length - 1; i++) {
            var A = place(routeStops[i]), B = place(routeStops[i + 1]);
            var seg = arc([A.lng, A.lat], [B.lng, B.lat]);
            coords = coords.concat(i ? seg.slice(1) : seg);
        }
        return { type: "Feature", properties: {}, geometry: { type: "LineString", coordinates: coords } };
    }
    function routeBounds() {
        var b = new maplibregl.LngLatBounds();
        routeStops.forEach(function (id) { var p = place(id); b.extend([p.lng, p.lat]); });
        return b;
    }
    function ensureRouteLayers() {
        if (map.getSource("route")) { return; }
        map.addSource("route", { type: "geojson", data: routeGeo() });
        map.addLayer({ id: "route-halo", type: "line", source: "route", layout: { "line-cap": "round", "line-join": "round" },
            paint: { "line-color": "#f4e9d3", "line-width": 7, "line-opacity": 0, "line-opacity-transition": { duration: reduce ? 0 : 500 } } });
        map.addLayer({ id: "route-line", type: "line", source: "route", layout: { "line-cap": "round", "line-join": "round" },
            paint: { "line-color": "#4a0f22", "line-width": 3, "line-dasharray": [1.6, 1.4], "line-opacity": 0, "line-opacity-transition": { duration: reduce ? 0 : 500 } } });
    }
    function paintRoute() {
        if (!map || !mapReady) { return; }
        ensureRouteLayers();
        map.setPaintProperty("route-halo", "line-opacity", routeOn ? 0.85 : 0);
        map.setPaintProperty("route-line", "line-opacity", routeOn ? 1 : 0);
    }
    function setRoute(on, silent, instant) {
        if (!ROUTE || !map) { return; }
        routeOn = on;
        if (popup) { popup.remove(); }
        document.getElementById("map").classList.toggle("moody", on);
        document.querySelector(".airmail").classList.toggle("moody", on);
        var chip = document.getElementById("route-chip");
        if (chip) { chip.setAttribute("aria-pressed", String(on)); }
        var banner = document.getElementById("route-banner"); if (banner) { banner.hidden = !on; }
        var rl = document.getElementById("route-list"); if (rl) { rl.hidden = !on; }
        Object.keys(markers).forEach(function (id) {
            var i = routeStops.indexOf(id), m = markers[id].el;
            m.classList.toggle("route", on && i > -1);
            m.classList.toggle("dim", on && i === -1);
            m.disabled = on && i === -1;
            if (on && i > -1) { m.setAttribute("data-n", String(i + 1)); } else { m.removeAttribute("data-n"); }
            var base = markers[id].label;
            m.setAttribute("aria-label", on && i > -1 ? "Gothic October stop " + (i + 1) + " of " + routeStops.length + ". " + base : base);
        });
        if (on) {
            Array.prototype.forEach.call(document.querySelectorAll("#regions button[data-region]"), function (b) { b.setAttribute("aria-pressed", "false"); });
            var small = mapEl.clientWidth < 600;
            map.fitBounds(routeBounds(), { padding: small ? { top: 30, bottom: 30, left: 24, right: 24 } : 70, duration: (reduce || instant) ? 0 : 1100, maxZoom: 6 });
        }
        paintRoute();
        if (!silent) {
            try { history.replaceState(null, "", on ? "#" + ROUTE.id : location.pathname + location.search); } catch (e) { /* file:// etc. */ }
        }
    }
    function renderRoute() {
        if (!ROUTE) { return; }
        var ol = document.getElementById("route-ol");
        routeStops.forEach(function (id, i) {
            var p = place(id), li = el("li");
            li.appendChild(el("span", "rn", String(i + 1)));
            var box = el("div", "rb");
            box.appendChild(el("div", "rp", p.name));
            p.books.forEach(function (b) { box.appendChild(el("div", "rt", b.title + " · " + b.author + (b.year ? ", " + b.year : ""))); });
            var btn = el("button", "pl-show", "Show stop " + (i + 1)); btn.type = "button";
            btn.setAttribute("aria-label", "Show stop " + (i + 1) + ", " + p.name + ", on the map");
            btn.addEventListener("click", function () { if (!routeOn) { setRoute(true); } showPlace(id, true); });
            box.appendChild(btn);
            li.appendChild(box); ol.appendChild(li);
        });
        var books = 0; routeStops.forEach(function (id) { books += place(id).books.length; });
        document.getElementById("route-blurb").textContent = plural(routeStops.length, "stop") + ", " + plural(books, "book") + ", oldest to newest. " + (ROUTE.blurb.split(". ").slice(1).join(". ") || "");
        var chip = document.getElementById("route-chip");
        chip.addEventListener("click", function () { setRoute(!routeOn); });
        var cp = document.getElementById("route-copy"), st = document.getElementById("route-copy-status");
        cp.addEventListener("click", function () {
            var url = location.origin && location.origin !== "null" ? location.origin + location.pathname + "#" + ROUTE.id : "https://bookandshores.com/atlas.html#" + ROUTE.id;
            function done(m) { st.textContent = m; setTimeout(function () { st.textContent = ""; }, 3500); }
            if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(url).then(function () { done("Link copied: " + url); }, function () { done(url); }); }
            else { done(url); }
        });
        window.addEventListener("hashchange", function () {
            var want = location.hash === "#" + ROUTE.id;
            if (want !== routeOn) { setRoute(want, true); }
        });
    }

    /* ---------- Map ---------- */
    function style() {
        var F = ["Noto Sans Regular"], FB = ["Noto Sans Bold"], FI = ["Noto Sans Italic"];
        var NAME = ["coalesce", ["get", "name:en"], ["get", "name"]];
        var poly = ["match", ["geometry-type"], ["Polygon", "MultiPolygon"], true, false];
        var halo = { "text-halo-color": "#f4e9d3", "text-halo-width": 1.4 };
        return {
            version: 8,
            glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
            sources: { omt: { type: "vector", url: "https://tiles.openfreemap.org/planet" } },
            layers: [
                { id: "bg", type: "background", paint: { "background-color": "#f4e9d3" } },
                { id: "wood", type: "fill", source: "omt", "source-layer": "landcover", filter: ["==", ["get", "class"], "wood"], minzoom: 5, paint: { "fill-color": "#e3ddb0", "fill-opacity": 0.8 } },
                { id: "grass", type: "fill", source: "omt", "source-layer": "landcover", filter: ["==", ["get", "class"], "grass"], minzoom: 7, paint: { "fill-color": "#ebe3bb", "fill-opacity": 0.7 } },
                { id: "ice", type: "fill", source: "omt", "source-layer": "landcover", filter: ["in", ["get", "class"], ["literal", ["ice", "glacier"]]], paint: { "fill-color": "#fbf6ea" } },
                { id: "park", type: "fill", source: "omt", "source-layer": "park", minzoom: 8, paint: { "fill-color": "#d9e0b4", "fill-opacity": 0.8 } },
                { id: "water", type: "fill", source: "omt", "source-layer": "water", filter: poly, paint: { "fill-color": "#6fb5d6" } },
                { id: "waterway", type: "line", source: "omt", "source-layer": "waterway", minzoom: 6, paint: { "line-color": "#6fb5d6", "line-width": ["interpolate", ["linear"], ["zoom"], 6, 0.5, 12, 2] } },
                { id: "building", type: "fill", source: "omt", "source-layer": "building", minzoom: 14, paint: { "fill-color": "#e6d8b2", "fill-outline-color": "#cdbb8a" } },
                { id: "road-minor", type: "line", source: "omt", "source-layer": "transportation", minzoom: 12, filter: ["in", ["get", "class"], ["literal", ["minor", "service", "tertiary"]]], paint: { "line-color": "#fffaf0", "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.5, 16, 4] } },
                { id: "road-major", type: "line", source: "omt", "source-layer": "transportation", minzoom: 6, filter: ["in", ["get", "class"], ["literal", ["motorway", "trunk", "primary", "secondary"]]], paint: { "line-color": "#e8a838", "line-width": ["interpolate", ["linear"], ["zoom"], 6, 0.4, 12, 1.6, 16, 6] } },
                { id: "admin1", type: "line", source: "omt", "source-layer": "boundary", minzoom: 4, filter: ["all", ["==", ["get", "admin_level"], 4], ["!=", ["get", "maritime"], 1]], paint: { "line-color": "#111", "line-opacity": 0.28, "line-width": 0.7, "line-dasharray": [2, 2] } },
                { id: "admin0", type: "line", source: "omt", "source-layer": "boundary", filter: ["all", ["==", ["get", "admin_level"], 2], ["!=", ["get", "maritime"], 1]], paint: { "line-color": "#111", "line-opacity": 0.7, "line-width": ["interpolate", ["linear"], ["zoom"], 1, 0.6, 6, 1.4], "line-dasharray": [3, 2] } },
                { id: "water-label", type: "symbol", source: "omt", "source-layer": "water_name", layout: { "text-field": NAME, "text-font": FI, "text-size": 12, "text-letter-spacing": 0.15 }, paint: { "text-color": "#1f5c78", "text-halo-color": "#6fb5d6", "text-halo-width": 1 } },
                { id: "country", type: "symbol", source: "omt", "source-layer": "place", filter: ["==", ["get", "class"], "country"], layout: { "text-field": NAME, "text-font": FB, "text-size": ["interpolate", ["linear"], ["zoom"], 1, 9, 5, 15], "text-transform": "uppercase", "text-letter-spacing": 0.14, "text-max-width": 7 }, paint: Object.assign({ "text-color": "#111" }, halo) },
                { id: "state", type: "symbol", source: "omt", "source-layer": "place", minzoom: 4.5, filter: ["==", ["get", "class"], "state"], layout: { "text-field": NAME, "text-font": FI, "text-size": 11, "text-transform": "uppercase", "text-letter-spacing": 0.1, "text-max-width": 7 }, paint: Object.assign({ "text-color": "#555" }, halo) },
                { id: "city", type: "symbol", source: "omt", "source-layer": "place", minzoom: 3, filter: ["in", ["get", "class"], ["literal", ["city"]]], layout: { "text-field": NAME, "text-font": F, "text-size": ["interpolate", ["linear"], ["zoom"], 3, 10, 10, 15], "text-max-width": 8, "text-anchor": "top", "text-offset": [0, 0.4] }, paint: Object.assign({ "text-color": "#111" }, halo) },
                { id: "town", type: "symbol", source: "omt", "source-layer": "place", minzoom: 7, filter: ["in", ["get", "class"], ["literal", ["town", "village", "suburb"]]], layout: { "text-field": NAME, "text-font": F, "text-size": 11, "text-max-width": 8 }, paint: Object.assign({ "text-color": "#333" }, halo) }
            ]
        };
    }

    function initMap() {
        if (!window.maplibregl || !mapEl) { throw new Error("no maplibre"); }
        var w = mapEl.clientWidth;
        map = new maplibregl.Map({
            container: mapEl, style: style(), bounds: REGIONS.world.bounds, fitBoundsOptions: { padding: w < 600 ? 10 : 46, maxZoom: 3 }, minZoom: -1, maxZoom: 14,
            renderWorldCopies: true, attributionControl: { compact: true }, dragRotate: false, pitchWithRotate: false,
            cooperativeGestures: true,
            locale: { "CooperativeGesturesHandler.WindowsHelpText": "Hold Ctrl and scroll to zoom the map", "CooperativeGesturesHandler.MacHelpText": "Hold ⌘ and scroll to zoom the map", "CooperativeGesturesHandler.MobileHelpText": "Use two fingers to move the map" }
        });
        map.touchZoomRotate.disableRotation();
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
        function sizeVars() { mapEl.style.setProperty("--map-h", mapEl.clientHeight + "px"); mapEl.style.setProperty("--map-w", mapEl.clientWidth + "px"); }
        sizeVars(); window.addEventListener("resize", sizeVars);
        PLACES.forEach(function (p) {
            var b = el("button", "pin" + (p.area ? " area" : ""));
            b.type = "button";
            b.setAttribute("aria-label", p.name + ": " + p.books.map(function (x) { return x.title; }).join(", ") + (p.area ? " (area pin)" : ""));
            if (p.books.length > 1) { b.appendChild(el("span", "n", String(p.books.length))); }
            b.addEventListener("click", function (e) { e.stopPropagation(); showPlace(p.id, false); });
            var m = new maplibregl.Marker({ element: b, anchor: "center" }).setLngLat([p.lng, p.lat]).addTo(map);
            markers[p.id] = { m: m, el: b, label: b.getAttribute("aria-label") };
        });
        map.on("load", function () {
            mapReady = true; paintRoute();
            if (ROUTE && location.hash === "#" + ROUTE.id && !routeOn) {
                setRoute(true, true, true);
                var rb = document.getElementById("regions"); if (rb) { rb.scrollIntoView({ block: "start" }); }
            }
        });
        map.on("error", function (e) { if (e && e.error && /Failed to fetch|NetworkError|ERR_/.test(String(e.error.message || e.error))) { /* tiles offline: pins still work */ } });
        // Pins are the product. Keep them even if tiles fail.
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && popup && popup.isOpen()) {
            var id = activeId; popup.remove();
            if (id && markers[id]) { markers[id].el.focus(); }
        }
    });

    renderList();
    renderRoute();
    try {
        initMap();
        Array.prototype.forEach.call(document.querySelectorAll("#regions button"), function (b) {
            b.addEventListener("click", function () { goRegion(b.getAttribute("data-region")); });
        });
    } catch (err) {
        if (fallback) { fallback.hidden = false; }
        var rb = document.getElementById("regions"); if (rb) { rb.hidden = true; }
        var rc = document.getElementById("route-chip"); if (rc) { rc.hidden = true; }
        Array.prototype.forEach.call(document.querySelectorAll(".pl-show"), function (b) { b.hidden = true; });
    }
})();
