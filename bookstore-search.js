// B&S: bookstore search. Our picks first (bookstore-search-index.js), then any book via the
// free Open Library search API. Every Bookshop link carries our affiliate ID (125864).
(function () {
    "use strict";
    var AFF = "https://bookshop.org/a/125864/";
    var OL = "https://openlibrary.org/search.json?fields=title,author_name,isbn,cover_i,language&limit=20&q=";
    var MAX_OURS = 8, MAX_OL = 8, DEBOUNCE = 300;

    var input = document.getElementById("bs-search-input");
    var list = document.getElementById("bs-search-results");
    var status = document.getElementById("bs-search-status");
    if (!input || !list) return;
    var index = window.bsSearchIndex || [];
    var timer = null, ctrl = null, seq = 0, dismissed = false;

    function norm(s) {
        return (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            .replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
    }
    var hay = index.map(function (b) { return norm(b.title + " " + b.author); });

    function isbn13ok(s) {
        if (!/^97[89]\d{10}$/.test(s)) return false;
        var sum = 0;
        for (var i = 0; i < 12; i++) sum += (+s[i]) * (i % 2 ? 3 : 1);
        return (10 - sum % 10) % 10 === +s[12];
    }
    function from10(s) {
        if (!/^\d{9}[\dX]$/i.test(s)) return null;
        var b = "978" + s.slice(0, 9), sum = 0;
        for (var i = 0; i < 12; i++) sum += (+b[i]) * (i % 2 ? 3 : 1);
        return b + ((10 - sum % 10) % 10);
    }
    // US editions only, so Bookshop (US) can find the book.
    // Known UK/Australian publisher ranges inside 978-0 and 978-1 (HarperCollins UK, Faber, Bloomsbury UK,
    // Penguin Random House UK, Hodder, Orion, Pan Macmillan, Little, Brown UK, and the 978-1-78/80/83/84-87/90/91 blocks).
    var NOT_US = /^(978000|978009|9780207|9780224|9780241|9780261|9780297|9780330|9780333|9780340|9780349|9780356|9780413|9780416|9780434|9780436|9780450|9780552|9780563|9780571|9780575|9780586|9780701|9780704|9780715|9780718|9780719|9780722|9780732|9780747|97807472|97807515|97807528|97807538|97807553|978178|978180|978183|978184|978185|978186|978187|978190|978191|9781035|9781398|9781399|9781405|9781408|9781409|9781447|9781471|9781472|9781473|9781474|9781509|9781526|9781529)/;
    // Big US houses and US university presses: picked first when a book has several editions.
    var US_HOUSE = /^(9780060|9780061|9780062|9780063|9780064|9780226|9780231|9780252|9780262|9780300|9780307|9780312|9780316|9780345|9780374|9780375|9780385|9780393|9780394|9780399|9780446|9780451|9780520|9780525|9780553|9780593|9780671|9780679|9780684|9780691|9780743|9780802|9780804|9780805|9780811|9780812|9780822|9781250|9781416|9781439|9781451|9781476|9781478|9781501|9781538|9781578|9781590|9781681|9781982|9781984|9780143)/;
    function usRank(s) {
        if (!/^978[01]|^9798/.test(s) || NOT_US.test(s)) return -1; // not a likely US edition
        return US_HOUSE.test(s) ? 0 : 1;
    }
    // Pick one likely-US ISBN-13; null if the book has none (the result is then dropped).
    function pickIsbn(arr) {
        var c = [];
        (arr || []).forEach(function (raw) {
            var s = String(raw).replace(/[^0-9X]/gi, "");
            if (s.length === 10) s = from10(s) || "";
            if (isbn13ok(s) && usRank(s) >= 0 && c.indexOf(s) < 0) c.push(s);
        });
        // US houses first; then the publisher with the most editions (usually the current one);
        // then the higher number, which is usually the newer edition.
        var pubs = {};
        c.forEach(function (s) { pubs[s.slice(0, 7)] = (pubs[s.slice(0, 7)] || 0) + 1; });
        c.sort(function (a, b) {
            return usRank(a) - usRank(b) || pubs[b.slice(0, 7)] - pubs[a.slice(0, 7)] || (a < b ? 1 : a > b ? -1 : 0);
        });
        return c[0] || null;
    }

    function authors(arr) {
        var out = [], last = {};
        (arr || []).forEach(function (a) {
            var k = norm(a).split(" ").pop();
            if (out.length < 2 && !last[k]) { last[k] = 1; out.push(a); }
        });
        return out.join(", ");
    }
    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text) e.textContent = text;
        return e;
    }
    function track(kind, isbn, title) {
        var gc = window.goatcounter;
        if (gc && typeof gc.count === "function") {
            gc.count({ path: "bookstore-search-" + kind + "-" + (isbn || "direct"), title: title, event: true });
        }
    }

    function row(b, ours) {
        var li = el("li", "bs-result" + (ours ? " bs-ours" : ""));
        var a = el("a", "bs-result-link");
        a.href = b.buy;
        a.target = "_blank";
        a.rel = b.aff ? "sponsored noopener" : "noopener";
        var thumb = el("span", "bs-thumb");
        if (b.cover) {
            var img = el("img");
            img.src = b.cover; img.alt = ""; img.loading = "lazy";
            img.onerror = function () { thumb.removeChild(img); };
            thumb.appendChild(img);
        }
        var txt = el("span", "bs-text");
        if (ours) txt.appendChild(el("span", "bs-badge", "Our pick"));
        txt.appendChild(el("span", "bs-title", b.title));
        if (b.author) txt.appendChild(el("span", "bs-author", b.author));
        a.appendChild(thumb); a.appendChild(txt);
        a.appendChild(el("span", "bs-go", "Buy \u2192"));
        a.setAttribute("aria-label", b.title + (b.author ? " by " + b.author : "") + (ours ? ", our pick" : "") + ", buy (opens in a new tab)");
        a.addEventListener("click", function () { track(ours ? "ours" : "any", b.isbn, b.title); });
        li.appendChild(a);
        if (ours && b.page && b.page !== "bookstore.html") {
            var take = el("a", "bs-take", "Our take");
            take.href = b.page;
            li.appendChild(take);
        }
        return li;
    }

    function setStatus(t) { status.textContent = t; }
    function open(on) {
        list.hidden = !on;
        input.setAttribute("aria-expanded", on ? "true" : "false");
    }
    function note(text, cls) {
        var li = el("li", "bs-note" + (cls ? " " + cls : ""), text);
        li.setAttribute("aria-hidden", "true");
        return li;
    }

    function search(q) {
        var my = ++seq;
        if (ctrl) ctrl.abort();
        list.innerHTML = "";
        var nq = norm(q);
        if (nq.length < 2) { open(false); setStatus(""); return; }
        var words = nq.split(" ");
        var matched = [];
        for (var i = 0; i < index.length; i++) {
            if (words.every(function (w) { return hay[i].indexOf(w) >= 0; })) matched.push(index[i]);
        }
        var ours = matched.slice(0, MAX_OURS);
        ours.forEach(function (b) { list.appendChild(row(b, true)); });
        var loading = note("Searching every bookstore\u2026", "bs-loading");
        list.appendChild(loading);
        open(true);
        setStatus(ours.length + " of our picks. Searching more books.");

        ctrl = window.AbortController ? new AbortController() : null;
        var t = setTimeout(function () { if (ctrl) ctrl.abort(); }, 8000);
        fetch(OL + encodeURIComponent(q), ctrl ? { signal: ctrl.signal } : {})
            .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
            .then(function (data) {
                if (my !== seq) return;
                var seenIsbn = {}, seenKey = {};
                matched.forEach(function (b) { if (b.isbn) seenIsbn[b.isbn] = 1; seenKey[norm(b.title).slice(0, 24)] = 1; });
                var more = [];
                (data.docs || []).forEach(function (d) {
                    if (more.length >= MAX_OL || !d.title) return;
                    if (d.language && d.language.length && d.language.indexOf("eng") < 0) return; // English only
                    var isbn = pickIsbn(d.isbn);
                    var key = norm(d.title).slice(0, 24) + "|" + norm((d.author_name || [])[0]);
                    if (!isbn || seenIsbn[isbn] || seenKey[key] || seenKey[norm(d.title).slice(0, 24)] && matched.length) return;
                    seenIsbn[isbn] = seenKey[key] = 1;
                    more.push({
                        title: d.title,
                        author: authors(d.author_name),
                        isbn: isbn,
                        cover: d.cover_i ? "https://covers.openlibrary.org/b/id/" + d.cover_i + "-S.jpg" : "",
                        buy: AFF + isbn,
                        aff: true
                    });
                });
                list.removeChild(loading);
                if (more.length && ours.length) list.appendChild(note("More from every bookstore", "bs-divider"));
                more.forEach(function (b) { list.appendChild(row(b, false)); });
                if (!ours.length && !more.length) list.appendChild(note("No matches yet. Try a title, an author, or check the spelling."));
                setStatus(ours.length + more.length ? (ours.length + " of our picks and " + more.length + " more books. Press the down arrow to choose.") : "No matches.");
            })
            .catch(function () {
                if (my !== seq) return;
                if (loading.parentNode) list.removeChild(loading);
                list.appendChild(note(ours.length ? "Couldn\u2019t reach the wider catalog right now. Our picks are above." : "Couldn\u2019t reach the wider catalog right now. Try again in a moment, or browse the shelf below."));
                setStatus(ours.length + " of our picks. The wider search is unavailable.");
            })
            .then(function () { clearTimeout(t); });
    }

    function links() { return Array.prototype.slice.call(list.querySelectorAll(".bs-result-link")); }
    function move(from, step) {
        var ls = links(), i = ls.indexOf(from) + step;
        if (i < 0) { input.focus(); return; }
        if (ls[i]) ls[i].focus();
    }

    input.addEventListener("input", function () {
        clearTimeout(timer);
        var q = input.value;
        dismissed = false;
        timer = setTimeout(function () { search(q); }, DEBOUNCE);
    });
    input.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown" && !list.hidden) { e.preventDefault(); var l = links()[0]; if (l) l.focus(); }
        else if (e.key === "Escape") { dismissed = true; open(false); }
        else if (e.key === "Enter") { e.preventDefault(); clearTimeout(timer); search(input.value); }
    });
    input.addEventListener("focus", function () { if (list.children.length && !dismissed) open(true); });
    list.addEventListener("keydown", function (e) {
        var a = document.activeElement;
        if (e.key === "ArrowDown") { e.preventDefault(); move(a.classList.contains("bs-take") ? a.previousSibling : a, 1); }
        else if (e.key === "ArrowUp") { e.preventDefault(); move(a.classList.contains("bs-take") ? a.previousSibling : a, -1); }
        else if (e.key === "Escape") { dismissed = true; open(false); input.focus(); }
    });
    document.addEventListener("click", function (e) {
        if (!e.target.closest || !e.target.closest(".bs-search")) open(false);
    });
    var form = document.getElementById("bs-search-form");
    if (form) form.addEventListener("submit", function (e) { e.preventDefault(); });
})();
