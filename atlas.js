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
                var a = el("a", null, b.title); a.href = b.page; d.appendChild(a);
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
        if (p.area) head.appendChild(el("small", null, "Area pin · region, not an address"));
        root.appendChild(head);
        var body = el("div", "pp-body");
        p.books.forEach(function (b) {
            var row = el("div", "pp-book");
            var img = el("img"); img.src = b.cover; img.alt = "Cover of " + b.title + " by " + b.author; img.width = 72; img.height = 108; img.loading = "lazy";
            row.appendChild(img);
            var col = el("div");
            col.appendChild(el("div", "pp-title", b.title));
            col.appendChild(el("div", "pp-author", b.author));
            var set = el("div", "pp-set"); set.appendChild(el("b", null, "Set in: ")); set.appendChild(document.createTextNode(b.setting)); col.appendChild(set);
            if (b.note) col.appendChild(el("div", "pp-note", b.note));
            var act = el("div", "pp-actions");
            var buy = newTab(el("a", "buy", "Buy the book")); buy.href = buyUrl(b);
            buy.setAttribute("aria-label", "Buy " + b.title + " on Bookshop.org (opens in a new tab)");
            act.appendChild(buy);
            var eu = ebookUrl(b);
            if (eu) { var eb = newTab(el("a", "alt", "Ebook")); eb.href = eu; eb.setAttribute("aria-label", "Buy the ebook of " + b.title + " on Bookshop.org (opens in a new tab)"); act.appendChild(eb); }
            col.appendChild(act);
            var pg = el("a", "pp-page", b.page.indexOf("book-") === 0 ? "Read our page →" : "See it in our shop →");
            pg.href = b.page; col.appendChild(pg);
            row.appendChild(col);
            body.appendChild(row);
        });
        root.appendChild(body);
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
        var opts = { center: [p.lng, p.lat], offset: [0, Math.round(h * 0.22)], zoom: Math.max(map.getZoom(), p.area ? 4 : 5) };
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
        if (popup) { popup.remove(); }
        var small = mapEl.clientWidth < 600;
        map.fitBounds(r.bounds, { padding: small ? 14 : 46, duration: reduce ? 0 : 1100, maxZoom: key === "world" ? 3 : 6 });
        Array.prototype.forEach.call(document.querySelectorAll("#regions button"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-region") === key)); });
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
            markers[p.id] = { m: m, el: b };
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
    try {
        initMap();
        Array.prototype.forEach.call(document.querySelectorAll("#regions button"), function (b) {
            b.addEventListener("click", function () { goRegion(b.getAttribute("data-region")); });
        });
    } catch (err) {
        if (fallback) { fallback.hidden = false; }
        var rb = document.getElementById("regions"); if (rb) { rb.hidden = true; }
        Array.prototype.forEach.call(document.querySelectorAll(".pl-show"), function (b) { b.hidden = true; });
    }
})();
