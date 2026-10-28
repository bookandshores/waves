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
    // The "read me." mug (3D render) is every map marker. Swap atlas/mug3d-pin.png to change them all.
    function mugImg() { var im = el("img", "mug"); im.src = "atlas/mug3d-pin.png"; im.alt = ""; im.width = 44; im.height = 44; im.draggable = false; return im; }
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
        clearSearch();
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
        if (on) { clearSearch(); }
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
            m.querySelector(".rnum").textContent = on && i > -1 ? String(i + 1) : "";
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
            b.appendChild(mugImg());
            b.appendChild(el("span", "rnum"));
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


    /* ---------- Place search (Photon geocoder, free, no key; matching by distance + place/country/region names) ---------- */
    var PHOTON = "https://photon.komoot.io/api/";
    var MAIL = "readme@bookandshores.com";
    var CONTS = {
        "europe": { cont: "Europe", b: [[-25, 34], [45, 71]], label: "Europe" },
        "asia": { cont: "Asia", b: [[26, -10], [150, 55]], label: "Asia" },
        "africa": { cont: "Africa", b: [[-20, -35], [52, 37]], label: "Africa" },
        "north america": { cont: "North America", b: [[-168, 7], [-52, 72]], label: "North America" },
        "south america": { cont: "South America", b: [[-82, -56], [-34, 13]], label: "South America" },
        "oceania": { cont: "Oceania", b: [[110, -48], [180, 0]], label: "Oceania" },
        "australia": { cont: "Oceania", b: [[110, -48], [180, -9]], label: "Australia" }
    };
    var form = document.getElementById("place-search"), qIn = document.getElementById("place-q"), sugUl = document.getElementById("place-sug");
    var statusEl = document.getElementById("search-status"), panel = document.getElementById("search-results"), srBody = document.getElementById("sr-body"), srTitle = document.getElementById("sr-title");
    var sugs = [], sugIdx = -1, sugTimer = null, sugReq = 0, sugCtl = null, sugFor = "", geoDown = false;
    var searchOn = false, yahMarker = null, popTimer = null;

    function norm(s) { return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
    function km(aLng, aLat, bLng, bLat) {
        var r = Math.PI / 180, dLa = (bLat - aLat) * r, dLo = (bLng - aLng) * r;
        var h = Math.sin(dLa / 2) * Math.sin(dLa / 2) + Math.cos(aLat * r) * Math.cos(bLat * r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
        return 12742 * Math.asin(Math.min(1, Math.sqrt(h)));
    }
    function setStatus(t) { statusEl.textContent = t || ""; }

    function simplify(f) {
        var pr = f.properties || {}, c = f.geometry && f.geometry.coordinates;
        if (!pr.name || !c) { return null; }
        var ex = pr.extent, bounds = null;
        if (ex && ex.length === 4) { bounds = [[Math.min(ex[0], ex[2]), Math.min(ex[1], ex[3])], [Math.max(ex[0], ex[2]), Math.max(ex[1], ex[3])]]; }
        var sub = [pr.type === "city" || pr.type === "district" || pr.type === "locality" ? (pr.county && pr.county !== pr.name ? pr.county : "") : "", pr.state && pr.state !== pr.name ? pr.state : "", pr.country && pr.country !== pr.name ? pr.country : ""].filter(Boolean);
        return { label: pr.name, sub: sub.join(", "), lng: c[0], lat: c[1], type: pr.type || "other", cc: (pr.countrycode || "").toUpperCase(), bounds: bounds, name: pr.name, country: pr.country || "" };
    }
    function localConts(q) {
        var nq = norm(q), out = [];
        if (nq.length < 3) { return out; }
        Object.keys(CONTS).forEach(function (k) { if (k.indexOf(nq) === 0) { out.push({ label: CONTS[k].label, sub: "Continent", continent: CONTS[k], type: "continent" }); } });
        return out;
    }
    function fetchPlaces(q) {
        if (sugCtl) { try { sugCtl.abort(); } catch (e) { /* old browsers */ } }
        sugCtl = window.AbortController ? new AbortController() : null;
        var url = PHOTON + "?q=" + encodeURIComponent(q) + "&limit=6&lang=en&layer=city&layer=state&layer=country&layer=county&layer=district&layer=locality";
        return fetch(url, sugCtl ? { signal: sugCtl.signal } : {}).then(function (r) {
            if (!r.ok) { throw new Error("geocoder " + r.status); }
            return r.json();
        }).then(function (j) {
            var seen = {}, out = [];
            (j.features || []).forEach(function (f) {
                var s = simplify(f); if (!s) { return; }
                var key = s.label + "|" + s.sub + "|" + s.type; if (seen[key]) { return; } seen[key] = 1; out.push(s);
            });
            return out;
        });
    }

    function closeSug() { sugUl.hidden = true; sugUl.textContent = ""; qIn.setAttribute("aria-expanded", "false"); qIn.removeAttribute("aria-activedescendant"); sugIdx = -1; }
    function paintSug() {
        sugUl.textContent = "";
        sugs.forEach(function (s, i) {
            var li = el("li"); li.id = "sug-" + i; li.setAttribute("role", "option"); li.setAttribute("aria-selected", String(i === sugIdx));
            li.appendChild(document.createTextNode(s.label));
            if (s.sub) { li.appendChild(el("small", null, s.sub)); }
            li.addEventListener("mousedown", function (e) { e.preventDefault(); });
            li.addEventListener("click", function () { choose(s); });
            sugUl.appendChild(li);
        });
        sugUl.hidden = !sugs.length; qIn.setAttribute("aria-expanded", String(!!sugs.length));
        if (sugIdx >= 0) { qIn.setAttribute("aria-activedescendant", "sug-" + sugIdx); var a = document.getElementById("sug-" + sugIdx); if (a && a.scrollIntoView) { a.scrollIntoView({ block: "nearest" }); } } else { qIn.removeAttribute("aria-activedescendant"); }
    }
    function suggest(q) {
        var id = ++sugReq;
        setStatus("Looking…");
        return fetchPlaces(q).then(function (list) {
            if (id !== sugReq) { return null; }
            geoDown = false; sugFor = q;
            sugs = localConts(q).concat(list); sugIdx = -1; paintSug();
            setStatus(sugs.length ? sugs.length + (sugs.length === 1 ? " place" : " places") + " found. Use the arrow keys, then Enter." : "No place by that name. Try a bigger area or another spelling.");
            return sugs;
        }, function (err) {
            if (id !== sugReq || (err && err.name === "AbortError")) { return null; }
            geoDown = true; sugFor = q; sugs = localConts(q); sugIdx = -1; paintSug();
            setStatus("Place lookup isn't reachable right now. Press Go to match against our own pin names, or try again in a moment.");
            return sugs;
        });
    }
    qIn.addEventListener("input", function () {
        clearTimeout(sugTimer);
        var q = qIn.value.trim();
        if (q.length < 3) { sugReq++; sugs = []; closeSug(); setStatus(q ? "Keep typing (3 letters or more)." : ""); return; }
        sugTimer = setTimeout(function () { suggest(q); }, 350);
    });
    qIn.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            if (!sugs.length) { return; }
            e.preventDefault();
            sugIdx = e.key === "ArrowDown" ? (sugIdx + 1) % sugs.length : (sugIdx <= 0 ? sugs.length - 1 : sugIdx - 1);
            paintSug();
        } else if (e.key === "Escape" && !sugUl.hidden) { e.stopPropagation(); closeSug(); }
    });
    qIn.addEventListener("blur", function () { setTimeout(closeSug, 120); });
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearTimeout(sugTimer);
        var q = qIn.value.trim();
        if (q.length < 2) { setStatus("Type a place first."); qIn.focus(); return; }
        if (sugIdx >= 0 && sugs[sugIdx]) { choose(sugs[sugIdx]); return; }
        if (sugFor === q && sugs.length) { choose(sugs[0]); return; }
        var c = localConts(q).filter(function (s) { return norm(s.label) === norm(q); })[0];
        if (c) { choose(c); return; }
        suggest(q).then(function (list) {
            if (list === null) { return; }
            if (list.length) { choose(list[0]); } else if (geoDown) { landLocal(q); } else { landOn({ label: q, sub: "", type: "none", unknown: true }); }
        });
    });

    function choose(s) { qIn.value = s.label; closeSug(); sugs = []; landOn(s); }

    function reachFor(f) {
        var t = f.type;
        if (t === "state" || t === "county") {
            if (f.bounds) { var diag = km(f.bounds[0][0], f.bounds[0][1], f.bounds[1][0], f.bounds[1][1]); return Math.min(500, Math.max(60, diag / 2)); }
            return 150;
        }
        return 60;
    }
    function computeHits(f) {
        var out = [];
        if (f.continent) { PLACES.forEach(function (p) { if (p.cont === f.continent.cont) { out.push({ p: p, d: 0 }); } }); return out; }
        if (f.unknown || f.noGeo) { var nq = norm(f.label); PLACES.forEach(function (p) { if ((p.reg || []).indexOf(nq) > -1 || norm(p.name).indexOf(nq) > -1) { out.push({ p: p, d: 0 }); } }); return out; }
        var nm = norm(f.name), R = reachFor(f), isCountry = f.type === "country", isArea = f.type === "state" || f.type === "county";
        var regOnly = false;
        if (isArea && nm) { regOnly = PLACES.some(function (p) { return (p.reg || []).indexOf(nm) > -1 && (!f.cc || f.cc === p.cc); }); }
        if (isArea) { R = Math.min(R, 120); }
        PLACES.forEach(function (p) {
            var d = km(f.lng, f.lat, p.lng, p.lat), hit = false;
            if (regOnly) { if ((p.reg || []).indexOf(nm) > -1 && (!f.cc || f.cc === p.cc)) { out.push({ p: p, d: d }); } return; }
            if (isCountry) { hit = p.cc === f.cc || (p.reg || []).indexOf(nm) > -1; }
            else {
                if (nm && (p.reg || []).indexOf(nm) > -1 && (!f.cc || f.cc === p.cc)) { hit = true; }
                if (!hit && isArea && f.bounds) { var bw = (f.bounds[1][0] - f.bounds[0][0]) * 0.15, bh = (f.bounds[1][1] - f.bounds[0][1]) * 0.15; // inset: state bounding boxes spill into neighbours
                    if (p.lng >= f.bounds[0][0] + bw && p.lng <= f.bounds[1][0] - bw && p.lat >= f.bounds[0][1] + bh && p.lat <= f.bounds[1][1] - bh) { hit = true; } }
                if (!hit && d <= R + (p.area ? 20 : 0)) { hit = true; }
            }
            if (hit) { out.push({ p: p, d: d }); }
        });
        out.sort(function (a, b) { return a.d - b.d; });
        return out;
    }


    function claimExtras(subj, body) {
        var wrap = el("span", "claim-alt");
        var g = el("a", "claim-alt-link", "Open in Gmail");
        g.href = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(MAIL) + "&su=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
        g.target = "_blank"; g.rel = "noopener";
        var c = el("button", "claim-alt-link", "Copy " + MAIL);
        c.type = "button";
        c.addEventListener("click", function () {
            function done(ok) { c.textContent = ok ? "Copied. Paste it into any email." : "Email us at " + MAIL; }
            if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(MAIL).then(function () { done(true); }, function () { done(false); }); }
            else {
                var t = document.createElement("textarea"); t.value = MAIL; document.body.appendChild(t); t.select();
                var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
                document.body.removeChild(t); done(ok);
            }
        });
        wrap.appendChild(g); wrap.appendChild(document.createTextNode(" \u00b7 ")); wrap.appendChild(c);
        return wrap;
    }
    function bodyFor(place) {
        return "Book:\n\nAuthor:\n\nWhere it is set (place): " + place + "\n\nSource link (where the book says so, or a review/publisher page):\n\nCredit me as (optional, an @handle only; leave blank to stay unnamed):\n";
    }
    function mailtoFor(place) {
        var subj = "Atlas pin: " + place;
        var body = "Book:\n\nAuthor:\n\nWhere it is set (place): " + place + "\n\nSource link (where the book says so, or a review/publisher page):\n\nCredit me as (optional, an @handle only; leave blank to stay unnamed):\n";
        return "mailto:" + MAIL + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
    }
    function whereLabel(f) { return f.country && f.country !== f.label && !f.continent ? f.label + ", " + f.country : f.label; }
    function bookCard(h, b) {
        var li = el("li", "sr-card");
        var img = el("img"); img.src = b.cover; img.alt = "Cover of " + b.title + " by " + b.author; img.width = 72; img.height = 108; img.loading = "lazy"; li.appendChild(img);
        var col = el("div");
        col.appendChild(el("div", "sr-where", h.p.name));
        col.appendChild(el("div", "sr-title", b.title));
        col.appendChild(el("div", "sr-author", b.author + (b.year ? " · " + b.year : "")));
        var set = el("div", "sr-set"); set.appendChild(el("b", null, "Set in: ")); set.appendChild(document.createTextNode(b.setting)); col.appendChild(set);
        var act = el("div", "sr-actions");
        var buy = newTab(el("a", "buy", "Buy the book")); buy.href = buyUrl(b); buy.setAttribute("aria-label", "Buy " + b.title + " on Bookshop.org (opens in a new tab)"); act.appendChild(buy);
        var eu = ebookUrl(b);
        if (eu) { var eb = newTab(el("a", "alt", "Ebook")); eb.href = eu; eb.setAttribute("aria-label", "Buy the ebook of " + b.title + " on Bookshop.org (opens in a new tab)"); act.appendChild(eb); }
        if (map) {
            var on = el("button", null, "On the map"); on.type = "button"; on.setAttribute("aria-label", "Show " + h.p.name + " on the map");
            on.addEventListener("click", function () { showPlace(h.p.id, true); });
            act.appendChild(on);
        }
        col.appendChild(act);
        var pg;
        if (b.page) { pg = el("a", "sr-page", b.page.indexOf("book-") === 0 ? "Read our page →" : "See it in our shop →"); pg.href = b.page; }
        else { pg = newTab(el("a", "sr-page", "Where it's set: source →")); pg.rel = "noopener"; pg.href = b.srcUrl; }
        col.appendChild(pg);
        li.appendChild(col);
        return li;
    }
    function renderResults(f, hits) {
        var label = whereLabel(f), nBooks = 0;
        hits.forEach(function (h) { nBooks += h.p.books.length; });
        srBody.textContent = "";
        if (!hits.length) {
            srTitle.textContent = "No books pinned here yet";
            var p = el("p", "sr-empty");
            p.appendChild(document.createTextNode("No books pinned here yet. Know one? "));
            var a = el("a", null, "Email us."); a.href = mailtoFor(label); p.appendChild(a); p.appendChild(document.createTextNode(" ")); p.appendChild(claimExtras("Atlas pin: " + label, bodyFor(label)));
            srBody.appendChild(p);
            srBody.appendChild(el("p", "sr-more", "Tell us the book, where it's set and where it says so. We check it, then pin it."));
        } else {
            srTitle.textContent = plural(nBooks, "book") + (f.continent || f.type === "country" || f.type === "state" || f.type === "county" ? " in " : " near ") + label;
            var ul = el("ul", "sr-list");
            hits.forEach(function (h) { h.p.books.forEach(function (b) { ul.appendChild(bookCard(h, b)); }); });
            srBody.appendChild(ul);
            var more = el("p", "sr-more"); more.appendChild(document.createTextNode("Know another one here? ")); var ma = el("a", null, "Email us."); ma.href = mailtoFor(label); more.appendChild(ma); more.appendChild(document.createTextNode(" ")); more.appendChild(claimExtras("Atlas pin: " + label, bodyFor(label)));
            srBody.appendChild(more);
        }
        panel.hidden = false;
    }

    function clearSearchVisuals() {
        clearTimeout(popTimer);
        if (yahMarker) { yahMarker.remove(); yahMarker = null; }
        Object.keys(markers).forEach(function (k) { markers[k].el.classList.remove("hit", "pop", "faded"); markers[k].el.style.removeProperty("--d"); });
    }
    function clearSearch(keepInput) {
        if (!searchOn && panel.hidden) { return; }
        searchOn = false; clearSearchVisuals(); panel.hidden = true; srBody.textContent = ""; setStatus("");
        if (!keepInput) { qIn.value = ""; }
    }
    function yahNode(label) {
        var wrap = el("div", "yah-wrap"); wrap.setAttribute("role", "img"); wrap.setAttribute("aria-label", "You are here: " + label);
        var y = el("div", "yah"); y.appendChild(mugImg()); y.appendChild(el("span", "tag", "You are here")); wrap.appendChild(y);
        return wrap;
    }
    function landLocal(q) { landOn({ label: q, sub: "", type: "none", noGeo: true }); }

    function landOn(f) {
        if (routeOn) { setRoute(false); }
        if (popup) { popup.remove(); }
        clearSearchVisuals();
        Array.prototype.forEach.call(document.querySelectorAll("#regions button[data-region]"), function (b) { b.setAttribute("aria-pressed", "false"); });
        searchOn = true;
        var hits = computeHits(f), label = whereLabel(f);
        renderResults(f, hits);
        setStatus(f.unknown ? "We couldn't find that place on the map." : hits.length ? plural(hits.length, "pin") + " found." : "No pins here yet.");
        if (map) {
            var hitIds = {}; hits.forEach(function (h, i) { hitIds[h.p.id] = i; });
            Object.keys(markers).forEach(function (k) {
                var e = markers[k].el; e.classList.toggle("hit", hitIds[k] !== undefined); e.classList.toggle("faded", hitIds[k] === undefined);
                if (hitIds[k] !== undefined) { e.style.setProperty("--d", (Math.min(hitIds[k], 8) * 0.1 + 0.05).toFixed(2) + "s"); }
            });
            var small = mapEl.clientWidth < 600, pad = small ? 64 : 80, dur = reduce ? 0 : 1500;
            var b = new maplibregl.LngLatBounds(), have = false;
            if (f.continent) { b.extend(f.continent.b[0]); b.extend(f.continent.b[1]); have = true; }
            else if (!f.unknown && !f.noGeo) { b.extend([f.lng, f.lat]); have = true; }
            if (!f.continent) { hits.forEach(function (h) { b.extend([h.p.lng, h.p.lat]); have = true; }); }
            if (f.bounds && (f.type === "state" || f.type === "county" || f.type === "country") && !hits.length) { b.extend(f.bounds[0]); b.extend(f.bounds[1]); }
            if (have) {
                var maxZ = f.continent ? 5 : (f.type === "country" ? 5 : f.type === "state" || f.type === "county" ? 7 : 9);
                map.fitBounds(b, { padding: pad, maxZoom: maxZ, duration: dur });
            }
            var landed = false;
            function land() {
                if (landed || !searchOn) { return; } landed = true;
                if (!f.continent && !f.unknown && !f.noGeo) {
                    yahMarker = new maplibregl.Marker({ element: yahNode(label), anchor: "center" }).setLngLat([f.lng, f.lat]).addTo(map);
                }
                hits.forEach(function (h) { var e = markers[h.p.id].el, im = e.querySelector(".mug"); e.classList.remove("pop"); if (im) { void im.offsetWidth; } e.classList.add("pop"); });
            }
            if (dur === 0) { land(); } else { map.once("moveend", land); popTimer = setTimeout(land, dur + 500); }
        }
        // bring the results into view and announce them
        try { document.getElementById("place-search").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); srTitle.focus({ preventScroll: true }); } catch (e) { /* ignore */ }
    }
    document.getElementById("sr-clear").addEventListener("click", function () { clearSearch(); if (popup) { popup.remove(); } qIn.focus(); if (map) { goRegion("world"); } });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && popup && popup.isOpen()) {
            var id = activeId; popup.remove();
            if (id && markers[id]) { markers[id].el.focus(); }
        }
    });

    // Home-page search box hands us ?q=<place>
    function fromQuery() {
        var q = ""; try { q = new URLSearchParams(location.search).get("q") || ""; } catch (e) { return; }
        q = q.trim().slice(0, 80); if (q.length < 2) { return; }
        qIn.value = q; form.dispatchEvent(new Event("submit", { cancelable: true }));
    }
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
    fromQuery();
    var cb = document.getElementById("claim-btn");
    if (cb && cb.parentNode) {
        var cp = el("p", "claim-fallback");
        cp.appendChild(document.createTextNode("Button not opening an email? "));
        cp.appendChild(claimExtras("Atlas pin: [book title]", bodyFor("")));
        cb.parentNode.insertBefore(cp, cb.nextSibling);
    }
})();
