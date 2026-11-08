#!/usr/bin/env python3
"""Crawlable, server-rendered Atlas pages generated from atlas-data.js.

Writes (from repo root):  python3 scripts/build_atlas_pages.py
  - atlas-<place-id>.html  one static page per pin: the books, their stated setting, the cited source, schema.org JSON-LD
  - atlas-pins.html        "All the Pins": every pin as a card, with search and region/route filters (no map, fast on phones)
  - atlas-places.html      old index URL, now a redirect stub to atlas-pins.html
  - atlas.html             fills two marked blocks: Dataset + ItemList JSON-LD in <head>, and a static short pin list
                           (the SHORT picks; atlas.js rebuilds the same list when JavaScript runs) + the "See all N pins" count
  - sitemap-atlas.xml      sitemap for the generated pages (listed in robots.txt)
  - og/atlas-<id>.png, og/atlas-pins.png  link cards, only with --cards, or --card <id> ... for new pins (needs google-chrome).
                           Place cards show the actual book card: cover (og/covers/ hi-res if present), title/author, place.
Re-run after every atlas-data.js change. Needs node (to read the data file exactly as the browser does).
"""
import html, json, re, subprocess, datetime
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://bookandshores.com"
TODAY = datetime.date.today().isoformat()
e = html.escape

def load():
    js = "global.window={};require(process.argv[1]);console.log(JSON.stringify({p:window.bsAtlas,r:window.bsRoutes||[]}))"
    out = subprocess.run(["node", "-e", js, str(ROOT / "atlas-data.js")], capture_output=True, text=True, check=True).stdout
    d = json.loads(out)
    return d["p"], d["r"]

def base_css():
    src = (ROOT / "epicfest-2026.html").read_text()
    return src.split("<style>", 1)[1].split("/* B&S: book page additions */")[0]

EXTRA = """
        /* B&S: static Atlas pages */
        :root { --cream: #f5ecd4; }
        .crumbs { max-width: 1000px; margin: 0 auto 1.2rem; font-size: 0.9rem; }
        .crumbs a, .place a, .idx a, .src a { color: var(--black); }
        .place-hero { max-width: 1000px; margin: 0.5rem auto 2.5rem; padding: 2.2rem 1.4rem; text-align: center; background: var(--cream);
            border: 4px solid var(--black); border-radius: 14px; box-shadow: 8px 8px 0 var(--black); }
        .place-hero .eyebrow { font-size: 0.85rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; }
        .place-hero h2 { font-size: clamp(2.2rem, 7vw, 3.8rem); text-transform: uppercase; line-height: 1; margin: 0.5rem 0 0.8rem; }
        .pbook { display: grid; grid-template-columns: 150px 1fr; gap: 1.6rem; max-width: 1000px; margin: 0 auto 2rem; background: var(--cream);
            border: 3px solid var(--black); border-radius: 12px; padding: 1.3rem; box-shadow: 6px 6px 0 var(--black); }
        .pbook img { width: 150px; height: auto; border: 3px solid var(--black); border-radius: 6px; display: block; }
        .pbook h3 { font-family: 'Oswald', sans-serif; font-size: 1.7rem; line-height: 1.1; }
        .pbook .by { font-weight: 500; margin: 0.2rem 0 0.7rem; }
        .pbook dl { font-size: 0.95rem; } .pbook dt { font-weight: 600; margin-top: 0.5rem; } .pbook dd { margin: 0; }
        .pbook .btn { width: auto; margin-top: 0.9rem; margin-right: 0.5rem; }
        .idx { max-width: 1000px; margin: 0 auto 3rem; }
        .idx h3 { font-family: 'Oswald', sans-serif; font-size: 1.9rem; margin: 2rem 0 0.6rem; border-bottom: 3px solid var(--black); }
        .idx ul { list-style: none; } .idx li { margin: 0.45rem 0; }
        .idx .bk { font-size: 0.9rem; color: var(--gray); }
        @media (max-width: 640px) { .pbook { grid-template-columns: 1fr; } .pbook img { width: 140px; margin: 0 auto; } }
"""

def head(title, desc, url, ld, card, alt):
    img = f"{SITE}/og/{card}.png"
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="robots" content="max-image-preview:large">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="manifest" href="site.webmanifest">
    <title>{e(title)}</title>
    <meta name="description" content="{e(desc)}">
    <link rel="canonical" href="{url}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{e(title)}">
    <meta property="og:description" content="{e(desc)}">
    <meta property="og:url" content="{url}">
    <meta property="og:image" content="{img}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="{e(alt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="{img}">
    <meta name="twitter:image:alt" content="{e(alt)}">
    <meta name="twitter:site" content="@bookandshores">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <script type="application/ld+json">{json.dumps(ld, ensure_ascii=False).replace("</", "<\\/")}</script>
    <style>{CSS}{EXTRA}    </style>
</head>
<body>
    <header>
        <h1>BOOK &amp; SHORES</h1>
        <nav>
            <a href="index.html">← Home</a>
            <a href="bookstore.html">Bookstore</a>
            <a href="atlas.html">Atlas</a>
            <a href="atlas-pins.html">All pins</a>
        </nav>
    </header>
    <main>
"""

FOOT = """    </main>
    <footer>
        <div class="footer-content">
            <p style="margin-top: 2rem;">© 2026 Book &amp; Shores, an independent bookstore • Contact: <a href="mailto:readme@bookandshores.com" style="color: var(--black);">readme@bookandshores.com</a></p>
            <p style="font-size:0.85rem; color:var(--gray); margin-top:0.6rem;">Pins mark each book's stated setting, with the source cited. Map data © <a href="https://www.openstreetmap.org/copyright" style="color: var(--gray);" target="_blank" rel="noopener">OpenStreetMap contributors</a>.</p>
        </div>
    </footer>
    <!-- B&S: GoatCounter visitor counter (free, no cookies) -->
    <script data-goatcounter="https://bookandshores.goatcounter.com/count"
            async src="//gc.zgo.at/count.js"></script>
</body>
</html>
"""

ORG = {"@type": "Organization", "@id": SITE + "/#org", "name": "Book & Shores", "url": SITE + "/",
       "description": "An independent bookstore.", "email": "readme@bookandshores.com"}

def place_ld(p):
    pl = {"@type": "Place", "name": p["name"], "geo": {"@type": "GeoCoordinates", "latitude": p["lat"], "longitude": p["lng"]}}
    if p.get("cc"): pl["address"] = {"@type": "PostalAddress", "addressCountry": p["cc"]}
    return pl

def people(s):
    """'A, B and C (eds.)' -> editor; 'A (trans. B)' / 'A (translated by B)' -> author + translator."""
    names = lambda t: [{"@type": "Person", "name": n.strip()} for n in re.split(r"\s+and\s+|,\s+", t) if n.strip()]
    out = {}
    m = re.search(r"\((?:trans\.|translated by)\s+([^)]+)\)", s)
    if m: out["translator"] = names(m.group(1)); s = s[:m.start()]
    if re.search(r"\(eds?\.\)", s): out["editor"] = names(re.sub(r"\(eds?\.\)", "", s)); return out
    out["author"] = names(s)
    return out

def book_ld(b, p):
    d = {"@type": "Book", "name": b["title"]}
    d.update(people(b["author"]))
    d["contentLocation"] = place_ld(p)
    if b.get("isbn"): d["isbn"] = b["isbn"]
    if b.get("year"): d["datePublished"] = str(b["year"])
    if b.get("cover"): d["image"] = f"{SITE}/{b['cover']}"
    if b.get("page") and b["page"] != "bookstore.html": d["url"] = f"{SITE}/{b['page']}"
    if b.get("setting"): d["description"] = f"Setting: {b['setting']}"
    if b.get("srcUrl"): d["citation"] = b["srcUrl"]
    return d

def src_html(b):
    if b.get("srcUrl"):
        host = urlparse(b["srcUrl"]).netloc.replace("www.", "")
        return f'<a href="{e(b["srcUrl"])}" rel="noopener" target="_blank">{e(host)}</a>'
    if b.get("page") and b["page"] != "bookstore.html":
        return f'<a href="{e(b["page"])}">our page for the book</a>'
    return "Book &amp; Shores"

def card_alt(p):
    bs = p["books"]
    if len(bs) == 1:
        return f"Book card: {bs[0]['title']} by {bs[0]['author']}, pinned at {p['name']} on the Book & Shores Atlas. Go There. Read It."
    return f"Book card: {', '.join(b['title'] for b in bs)}, pinned at {p['name']} on the Book & Shores Atlas. Go There. Read It."

def place_page(p, routes):
    url = f"{SITE}/atlas-{p['id']}.html"
    n = len(p["books"])
    titles = ", ".join(b["title"] for b in p["books"])
    title = f"{p['heading']} · {p.get('sub', p['name'])} | Book & Shores Atlas · Go There. Read It." if p.get("heading") else f"Books Set in {p['name']} | Book & Shores Atlas · Go There. Read It."
    desc = f"{n} book{'s' if n != 1 else ''} on the Book & Shores Atlas set in {p['name']}: {titles}. Each setting is cited from the book, its publisher or a major review."
    if p.get("desc"): desc = p["desc"]
    if len(desc) > 300: desc = desc[:297].rsplit(" ", 1)[0] + "…"
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "@id": url, "url": url, "name": f"Books set in {p['name']}", "description": desc,
         "isPartOf": {"@type": "Dataset", "@id": SITE + "/atlas.html#dataset"}, "publisher": {"@id": SITE + "/#org"},
         "about": place_ld(p), "mainEntity": {"@type": "ItemList", "numberOfItems": n,
            "itemListElement": [{"@type": "ListItem", "position": i + 1, "item": book_ld(b, p)} for i, b in enumerate(p["books"])]}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Atlas", "item": SITE + "/atlas.html"},
            {"@type": "ListItem", "position": 2, "name": "All the pins", "item": SITE + "/atlas-pins.html"},
            {"@type": "ListItem", "position": 3, "name": p["name"], "item": url}]},
        ORG]}
    on_routes = [r for r in routes if p["id"] in r.get("stops", [])]
    out = [head(title, desc, url, ld, f"atlas-{p['id']}", card_alt(p))]
    out.append(f'        <p class="crumbs"><a href="atlas.html">Atlas</a> › <a href="atlas-pins.html">All the pins</a> › {e(p["name"])}</p>\n')
    out.append(f"""        <section class="place-hero">
            <p class="eyebrow">Book &amp; Shores Atlas · {e(p.get('cont', ''))}</p>
            <h2>{e(p['heading']) if p.get('heading') else 'Books set in ' + e(p['name'])}</h2>{('<p style="font-family:Oswald,sans-serif;font-weight:400;font-size:clamp(1.2rem,3.5vw,1.6rem);text-transform:none;margin:0 0 0.8rem;">' + e(p['sub']) + '</p>') if p.get('sub') else ''}
            <p>{(str(n) + ' issues pinned here.') if p.get('heading') else (str(n) + ' book' + ('s' if n != 1 else '') + ' pinned here.')} {'The book names a region, not an exact address, so the pin sits inside the area.' if p.get('area') else 'The pin marks the named place.'}</p>
            <p style="margin-top:1rem;"><a class="btn" style="width:auto;" href="atlas.html#{e(p['id'])}">See it on the map →</a></p>
        </section>
""")
    for b in p["books"]:
        yr = f" ({b['year']})" if b.get("year") else ""
        cover = f'<img src="{e(b["cover"])}" alt="Cover of {e(b["title"])}" width="150" loading="lazy">' if b.get("cover") else ""
        more = f'<a class="btn" href="{e(b["page"])}">Read our take →</a>' if b.get("page") and b["page"] != "bookstore.html" else '<a class="btn" href="bookstore.html">Find it in the bookstore →</a>'
        out.append(f"""        <article class="pbook">
            <div>{cover}</div>
            <div>
                <h3>{e(b['title'])}</h3>
                <p class="by">by {e(b['author'])}{yr}</p>
                <dl>
                    <dt>Setting</dt><dd>{e(b.get('setting', p['name']))}</dd>
                    {'<dt>About</dt><dd>' + e(b['note']) + '</dd>' if b.get('note') else ''}{'<dt>Partner pin</dt><dd>Paid placement from ' + e(b['partner']) + '. The setting is sourced like every other pin.</dd>' if b.get('partner') else ''}
                    <dt>Source</dt><dd class="src">{src_html(b)}</dd>
                    {'<dt>ISBN</dt><dd>' + e(b['isbn']) + '</dd>' if b.get('isbn') else ''}
                </dl>
                {more}
            </div>
        </article>
""")
    if on_routes:
        links = " · ".join(f'<a href="atlas.html#{e(r["id"])}">{e(r.get("name") or r.get("title") or r["id"].replace("-", " ").title())}</a>' for r in on_routes)
        out.append(f'        <p class="intro-text">On the reading route: {links}</p>\n')
    out.append(FOOT)
    return "".join(out)

SHORT = 6  # cards in the atlas.html short list

def short_picks(places, routes):
    """Same rule as atlas.js: Weekly Reads stops first (in route order), topped up with the newest pins (end of atlas-data.js)."""
    by = {p["id"]: p for p in places}
    wr = next((r for r in routes if r["id"] == "weekly-reads"), None)
    ids = [i for i in (wr["stops"] if wr else []) if i in by][:SHORT]
    for p in reversed(places):
        if len(ids) >= SHORT: break
        if p["id"] not in ids: ids.append(p["id"])
    return [by[i] for i in ids]

def count_books(places):
    return len({b.get("isbn") or (b["title"] + "|" + b["author"]) for p in places for b in p["books"]})

CONT_ORDER = ["North America", "Europe", "Asia", "Africa", "South America", "Atlantic Ocean"]

def book_line(b):
    t = f'<a href="{e(b["page"])}">{e(b["title"])}</a>' if b.get("page") and b["page"] != "bookstore.html" else e(b["title"])
    return f'<div class="pl-book">{t} by {e(b["author"])}</div>'

def strip_acc(t):
    import unicodedata
    return "".join(c for c in unicodedata.normalize("NFD", t) if unicodedata.category(c) != "Mn").lower()

PINS_CSS = """
        .crumbs { max-width:1000px; margin:0 auto 1rem; font-size:.9rem; } .crumbs a { color:var(--black); }
        .pins-hero { text-align:center; max-width:760px; margin:.6rem auto 1.6rem; }
        .pins-hero h1 { font-family:'Oswald',sans-serif; font-weight:700; text-transform:uppercase; font-size:clamp(2.4rem,8vw,4.4rem); line-height:1; margin:.4rem 0 .7rem; }
        .pins-hero p { font-size:.98rem; }
        .pins-hero .btn { margin-top:.9rem; }
        .pins-tools { max-width:1000px; margin:0 auto 1.2rem; }
        .pins-search { display:block; width:100%; font:inherit; font-size:1rem; padding:.75rem 1rem; border:3px solid var(--black); border-radius:8px; background:var(--cream); color:var(--black); }
        .pins-search::placeholder { color:#555; }
        .chip-group { display:flex; align-items:flex-start; gap:.5rem; margin-top:.8rem; }
        .chip-label { flex:none; min-width:4.2rem; padding-top:.6rem; font-size:.72rem; font-weight:600; letter-spacing:.14em; text-transform:uppercase; }
        .chip-group .region-bar { margin:0; justify-content:flex-start; }
        .region-bar button .n { opacity:.7; font-weight:500; }
        .pins-status { max-width:1000px; margin:0 auto .8rem; font-size:.9rem; color:var(--gray); }
        .pins-ul li[hidden] { display:none; }
        .pins-ul .pl-tags { display:flex; flex-wrap:wrap; gap:.3rem; margin:.1rem 0 .25rem; }
        .pins-ul .pl-tags span { font-size:.66rem; font-weight:600; letter-spacing:.1em; text-transform:uppercase; padding:.08rem .45rem; border:2px solid var(--black); border-radius:999px; }
        .pins-ul a.pl-show { text-decoration:none; display:inline-block; }
        .pins-empty { text-align:center; margin:1.5rem auto; font-weight:600; }
        .pins-empty button { font:inherit; background:none; border:0; text-decoration:underline; cursor:pointer; color:inherit; }
        .pins-claim { margin-top:2.5rem; }
        @media (max-width:600px) {
            .chip-group { flex-direction:column; gap:.3rem; } .chip-label { padding-top:0; }
            .chip-group .region-bar { flex-wrap:nowrap; overflow-x:auto; width:100%; padding-bottom:.3rem; -webkit-overflow-scrolling:touch; scrollbar-width:none; }
            .chip-group .region-bar::-webkit-scrollbar { display:none; }
            .chip-group .region-bar button { flex:none; font-size:.78rem; padding:.4rem .8rem; }
        }
"""

PINS_JS = r"""
(function () {
    var list = document.getElementById("pins-ul"); if (!list) return;
    var items = Array.prototype.slice.call(list.children);
    var q = document.getElementById("pins-q"), status = document.getElementById("pins-status"), empty = document.getElementById("pins-empty");
    var cont = "", route = "";
    document.getElementById("pins-tools").hidden = false;
    function norm(t) { return (t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
    function apply() {
        var words = norm(q.value).split(/\s+/).filter(Boolean), shown = 0;
        items.forEach(function (li) {
            var hay = li.getAttribute("data-q"), ok = (!cont || li.getAttribute("data-cont") === cont) &&
                (!route || (" " + li.getAttribute("data-routes") + " ").indexOf(" " + route + " ") > -1) &&
                words.every(function (w) { return hay.indexOf(w) > -1; });
            li.hidden = !ok; if (ok) shown++;
        });
        status.textContent = shown === items.length ? "Showing all " + items.length + " pins." : "Showing " + shown + " of " + items.length + " pins.";
        empty.hidden = shown > 0;
    }
    function group(id, set) {
        var btns = document.querySelectorAll("#" + id + " button");
        Array.prototype.forEach.call(btns, function (b) {
            b.addEventListener("click", function () {
                Array.prototype.forEach.call(btns, function (x) { x.setAttribute("aria-pressed", String(x === b)); });
                set(b.getAttribute("data-v")); apply();
            });
        });
    }
    group("f-cont", function (v) { cont = v; });
    group("f-route", function (v) { route = v; });
    q.addEventListener("input", apply);
    document.getElementById("pins-clear").addEventListener("click", function () {
        q.value = ""; cont = ""; route = "";
        Array.prototype.forEach.call(document.querySelectorAll(".chip-group button"), function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-v") === "")); });
        apply(); q.focus();
    });
    apply();
})();
"""

def pins_page(places, routes):
    url = f"{SITE}/atlas-pins.html"
    nb = count_books(places)
    title = "All the Pins · Book & Shores Atlas · Go There. Read It."
    desc = (f"All {len(places)} pins on the Book & Shores Atlas, a map of books at their stated settings from Book & Shores, an independent bookstore. "
            f"Search {nb} books by place, title or author, or filter by region or reading route.")
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "@id": url, "url": url, "name": "All the pins on the Book & Shores Atlas", "description": desc,
         "isPartOf": {"@id": SITE + "/atlas.html#dataset"}, "publisher": {"@id": SITE + "/#org"},
         "mainEntity": {"@type": "ItemList", "name": "Pins on the Book & Shores Atlas", "numberOfItems": len(places), "itemListElement": [
             {"@type": "ListItem", "position": i + 1, "url": f"{SITE}/atlas-{p['id']}.html", "name": f"Books set in {p['name']}"} for i, p in enumerate(places)]}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Atlas", "item": SITE + "/atlas.html"},
            {"@type": "ListItem", "position": 2, "name": "All the pins", "item": url}]},
        ORG]}
    img = f"{SITE}/og/atlas-pins.png"; alt = f"All the pins on the Book & Shores Atlas: {len(places)} places, {nb} books. Go There. Read It."
    conts = sorted({p.get("cont") for p in places if p.get("cont")}, key=lambda c: CONT_ORDER.index(c) if c in CONT_ORDER else 99)
    cbtn = "".join(f'<button type="button" aria-pressed="false" data-v="{e(c)}">{e(c)} <span class="n">{sum(1 for p in places if p.get("cont") == c)}</span></button>' for c in conts)
    rbtn = "".join(f'<button type="button" aria-pressed="false" data-v="{e(r["id"])}">{e(r["name"])} <span class="n">{len(r["stops"])}</span></button>' for r in routes)
    rname = {r["id"]: r["name"] for r in routes}
    cards = []
    for p in places:
        on = [r["id"] for r in routes if p["id"] in r.get("stops", [])]
        tags = "".join(f"<span>{e(rname[i])}</span>" for i in on)
        hay = strip_acc(" ".join([p["name"], p.get("cont", "")] + [b["title"] + " " + b["author"] + " " + b.get("setting", "") for b in p["books"]]))
        cards.append(f'                <li data-cont="{e(p.get("cont", ""))}" data-routes="{" ".join(on)}" data-q="{e(hay)}">'
                     f'<div class="pl-place"><a href="atlas-{e(p["id"])}.html">{e(p["name"])}</a></div>'
                     + (f'<div class="pl-tags">{tags}</div>' if tags else "")
                     + "".join(book_line(b) for b in p["books"])
                     + f'<a class="pl-show" href="atlas.html#{e(p["id"])}" aria-label="Show {e(p["name"])} on the map">Show on map</a></li>\n')
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="robots" content="max-image-preview:large">
    <link rel="icon" href="/favicon.ico?v=2" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=2">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">
    <link rel="manifest" href="site.webmanifest">
    <title>{e(title)}</title>
    <meta name="description" content="{e(desc)}">
    <link rel="canonical" href="{url}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{e(title)}">
    <meta property="og:description" content="{e(desc)}">
    <meta property="og:url" content="{url}">
    <meta property="og:image" content="{img}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="{e(alt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{e(title)}">
    <meta name="twitter:image" content="{img}">
    <meta name="twitter:image:alt" content="{e(alt)}">
    <meta name="twitter:site" content="@bookandshores">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="atlas.css">
    <style>{PINS_CSS}    </style>
    <script type="application/ld+json">{json.dumps(ld, ensure_ascii=False).replace("</", "<\\/")}</script>
</head>
<body>
    <header>
        <p class="site-name"><a href="index.html">Book &amp; Shores</a></p>
        <nav aria-label="Main">
            <a href="index.html">← Home</a>
            <a href="bookstore.html">Buy Books</a>
            <a href="atlas.html">Atlas</a>
        </nav>
    </header>

    <main>
        <!-- Generated by scripts/build_atlas_pages.py from atlas-data.js. Edit the data, then re-run the script. -->
        <p class="crumbs"><a href="atlas.html">Atlas</a> › All the pins</p>
        <section class="pins-hero" aria-labelledby="pins-title">
            <p class="eyebrow">Book &amp; Shores Atlas</p>
            <h1 id="pins-title">All the Pins</h1>
            <p>{len(places)} pins, {nb} books. Every pin is sourced to the book's stated setting. Search by place, book or author, or narrow it down by region or reading route.</p>
            <a class="btn" href="atlas.html">Open the map →</a>
        </section>

        <div class="pins-tools" id="pins-tools" hidden>
            <label class="eyebrow" for="pins-q" style="display:block;margin-bottom:.35rem;">Search the pins</label>
            <input class="pins-search" id="pins-q" type="search" placeholder="Place, book or author" autocomplete="off" enterkeyhint="search">
            <div class="chip-group"><span class="chip-label" id="l-cont">Region</span><div class="region-bar" id="f-cont" role="group" aria-labelledby="l-cont"><button type="button" aria-pressed="true" data-v="">All</button>{cbtn}</div></div>
            <div class="chip-group"><span class="chip-label" id="l-route">Route</span><div class="region-bar" id="f-route" role="group" aria-labelledby="l-route"><button type="button" aria-pressed="true" data-v="">All</button>{rbtn}</div></div>
        </div>
        <p class="pins-status" id="pins-status" aria-live="polite">Showing all {len(places)} pins.</p>

        <section class="pin-list" aria-labelledby="pins-title">
            <ul id="pins-ul" class="pins-ul">
{"".join(cards)}            </ul>
            <p class="pins-empty" id="pins-empty" hidden>No pins match yet. <button type="button" id="pins-clear">Clear the search and filters</button></p>
        </section>

        <section class="claim pins-claim" id="claim-a-pin" aria-labelledby="claim-title">
            <div class="postcard">
                <div class="pc-msg">
                    <p class="eyebrow">Wish you were here</p>
                    <h2 id="claim-title">Claim a pin</h2>
                    <p>Know a book that belongs on the map? Give it a permanent place on the Atlas.</p>
                    <a class="btn claim-btn" href="license-the-atlas.html">Claim your pin</a>
                    <p class="soon">We only pin what we can verify.</p>
                    <p class="soon">Publishers, authors, press, tourism boards, libraries or festivals? <a href="license-the-atlas.html">License the Atlas →</a></p>
                </div>
                <div class="pc-addr" aria-hidden="true">
                    <div class="pc-stamp"><span>Place<br>stamp<br>here</span></div>
                    <div class="line">To: A reader, anywhere</div>
                    <div class="line">Book:</div>
                    <div class="line">Place:</div>
                    <div class="line">Page:</div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <p>© 2026 Book &amp; Shores, an independent bookstore • Contact: <a href="mailto:readme@bookandshores.com">readme@bookandshores.com</a></p>
            <p class="fine">Each pin on the Book &amp; Shores Atlas marks a book's stated setting, with the source cited on its place page. Book &amp; Shores is an independent bookstore. When you buy through our links, we earn a small commission, and that supports the Atlas.</p>
        </div>
    </footer>
    <script>{PINS_JS}</script>
    <script data-goatcounter="https://bookandshores.goatcounter.com/count"
            async src="//gc.zgo.at/count.js"></script>
</body>
</html>
"""

def redirect_page():
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>All the Pins · Book &amp; Shores Atlas</title>
    <link rel="canonical" href="{SITE}/atlas-pins.html">
    <meta http-equiv="refresh" content="0; url=atlas-pins.html">
    <script>location.replace("atlas-pins.html");</script>
</head>
<body>
    <p>The list of every place on the Atlas has moved: <a href="atlas-pins.html">All the pins</a>.</p>
</body>
</html>
"""

def atlas_blocks(places, routes):
    nb = len({b.get("isbn") or b["title"] for p in places for b in p["books"]})
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Dataset", "@id": SITE + "/atlas.html#dataset", "name": "Book & Shores Atlas: books mapped to their stated settings", "alternateName": "Book and Shores Atlas",
         "description": f"Books are good for the world, so we pinned them to it. Every pin is sourced to the book's stated setting, and literary routes link them into journeys. {nb} books at {len(places)} places, every setting cited from the book, its publisher or a major review. Made by Book & Shores, an independent bookstore.",
         "url": SITE + "/atlas.html", "creator": {"@id": SITE + "/#org"}, "publisher": {"@id": SITE + "/#org"},
         "keywords": ["literary map", "books by setting", "book atlas", "literary geography", "literary travel"],
         "spatialCoverage": {"@type": "Place", "name": "World"}, "dateModified": TODAY, "isAccessibleForFree": True,
         "hasPart": [{"@type": "CollectionPage", "url": f"{SITE}/atlas-{p['id']}.html", "name": f"Books set in {p['name']}"} for p in places]},
        {"@type": "ItemList", "@id": SITE + "/atlas.html#pins", "name": "Pins on the Book & Shores Atlas", "numberOfItems": len(places),
         "itemListElement": [{"@type": "ListItem", "position": i + 1, "url": f"{SITE}/atlas-{p['id']}.html", "name": p["name"]} for i, p in enumerate(places)]},
        ORG]}
    ldtag = '    <!-- atlas-ld:start -->\n    <script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False).replace("</", "<\\/") + "</script>\n    <!-- atlas-ld:end -->"
    items = []
    for p in short_picks(places, routes):
        bk = "".join(book_line(b) for b in p["books"])
        items.append(f'<li><div class="pl-place"><a href="atlas-{e(p["id"])}.html">{e(p["name"])}</a></div>{bk}</li>')
    lst = "<!-- atlas-list:start -->" + "".join(items) + "<!-- atlas-list:end -->"
    return ldtag, lst

def sitemap(places):
    urls = [f"{SITE}/atlas-pins.html"] + [f"{SITE}/atlas-{p['id']}.html" for p in places]
    body = "".join(f"  <url>\n    <loc>{u}</loc>\n    <lastmod>{TODAY}</lastmod>\n  </url>\n" for u in urls)
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + "</urlset>\n"

def cover_src(b):
    """Hi-res cover for link cards: og/covers/<name> (publisher source, see atlas/CREDITS.txt) if present, else the Atlas thumbnail."""
    c = b.get("cover") or ""
    if not c: return ""
    hi = ROOT / "og" / "covers" / Path(c).name
    return f"file://{hi if hi.exists() else ROOT / c}"

def card_html(label, h1, by, big, small, covers=(), place=""):
    """Link card on #f6bd28. With covers: the actual book card (cover art, title/author in Oswald, place in IBM Plex Mono).
    Without covers (index card): the count box."""
    import sys; sys.path.insert(0, str(ROOT / "scripts")); from make_link_cards import FONTS
    covers = [c for c in covers if c][:3]
    size = 84 if len(h1) <= 22 else 68 if len(h1) <= 34 else 56
    if covers:
        n = len(covers); ch = {1: 470, 2: 430, 3: 400}[n]; step = {1: 0, 2: 120, 3: 95}[n]
        imgs = "".join(f'<img class="cv" src="{e(c)}" style="height:{ch}px;right:{92 + step * (n - 1 - i)}px;top:{80 + (470 - ch) // 2 + (12 * (n - 1 - i) if n > 1 else 0)}px;z-index:{i + 1}">'
                       for i, c in enumerate(covers))
        right = imgs
        place_html = f'<div class="place">&#9679; {e(place)}</div>' if place and n == 1 else ""
        by_html = f'<div class="auth" style="font-size:{34 if n == 1 else 26}px">{e(by)}</div>'
        if n > 1: size = min(size, 60)
        lw = 620 if n == 1 else 560
    else:
        right = f'<div class="box"><div class="big">{e(big)}</div><div class="small">{e(small)}</div></div>'
        place_html = ""; by_html = f'<div class="by">{e(by)}</div>'; lw = 660
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{FONTS}
*{{margin:0;padding:0;box-sizing:border-box}}html,body{{width:1200px;height:630px;overflow:hidden}}
body{{background:#f6bd28;color:#000;font-family:'IBM Plex Mono',monospace;position:relative}}
.frame{{position:absolute;inset:22px;border:4px solid #000}}
.left{{position:absolute;left:70px;top:62px;width:{lw}px;height:506px;display:flex;flex-direction:column}}
.mark{{font-family:Oswald;font-weight:700;font-size:40px;line-height:1}}
.label{{margin-top:44px;align-self:flex-start;background:#000;color:#f6bd28;font-weight:600;font-size:20px;letter-spacing:.14em;text-transform:uppercase;padding:8px 14px}}
h1{{margin-top:20px;font-family:Oswald;font-weight:700;font-size:{size}px;line-height:.95;letter-spacing:-0.02em;text-transform:uppercase}}
.auth{{flex-shrink:0;margin-top:14px;font-family:Oswald;font-weight:500;font-size:34px;line-height:1.1;text-transform:uppercase;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}}
.place{{margin-top:22px;font-size:22px;font-weight:500;letter-spacing:.06em;line-height:1.3;text-transform:uppercase}}
.by{{margin-top:18px;font-size:22px;font-weight:500;line-height:1.3;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}}
.foot{{margin-top:auto;border-top:3px solid #000;padding-top:16px;font-size:20px;font-weight:500;letter-spacing:.1em;text-transform:uppercase}}
.cv{{position:absolute;width:auto;max-width:340px;border:4px solid #000;box-shadow:14px 14px 0 #000;background:#fff}}
.box{{position:absolute;right:92px;top:108px;width:320px;height:400px;background:#000;color:#f6bd28;box-shadow:14px 14px 0 #000;
  display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:24px}}
.big{{font-family:Oswald;font-weight:700;font-size:120px;line-height:.9}}
.small{{margin-top:22px;border-top:3px solid #f6bd28;padding-top:14px;font-size:22px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}}
</style></head><body><div class="frame"></div>
<div class="left"><div class="mark">BOOK &amp; SHORES</div><div class="label">{e(label)}</div><h1>{e(h1)}</h1>{by_html}{place_html}
<div class="foot">bookandshores.com</div></div>
{right}</body></html>"""

def render_card(name, htm):
    out = ROOT / "og"; out.mkdir(exist_ok=True)
    tmp = out / f".tmp-{name}.html"; tmp.write_text(htm)
    subprocess.run(["google-chrome", "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
                    "--window-size=1200,630", "--force-device-scale-factor=1", "--virtual-time-budget=3000",
                    f"--screenshot={out / (name + '.png')}", f"file://{tmp}"], check=True, capture_output=True)
    tmp.unlink()

def place_card(p):
    bs = p["books"]; n = len(bs)
    if n == 1:
        b = bs[0]; h1, by = b["title"], "by " + b["author"]
        if len(h1) > 40 and ":" in h1: h1 = h1.split(":")[0]  # long subtitle pushes the footer off the card
    else:
        h1 = f"Books set in {p['name']}"; by = " · ".join(b["title"] for b in bs)
    if p.get("heading"): h1 = p["heading"]; by = p.get("cardBy", by)  # e.g. a magazine pin, not books
    return card_html(f"Book & Shores Atlas · {p.get('cont', '')}", h1, by, str(n), "book" + ("s" if n != 1 else "") + " pinned here",
                     covers=[cover_src(b) for b in bs], place=p["name"])

def cards(places, only=None):
    for p in places:
        if only and p["id"] not in only: continue
        render_card(f"atlas-{p['id']}", place_card(p))
    if not only: pins_card(places)

def pins_card(places):
    render_card("atlas-pins", card_html("Book & Shores Atlas · Index", "All the Pins",
                f"Go There. Read It. {count_books(places)} books at their stated settings, each one cited.", str(len(places)), "pins"))

if __name__ == "__main__":
    CSS = base_css()
    places, routes = load()
    routes = [r for r in routes if not r.get("hidden")]  # retired routes stay in atlas-data.js but aren't linked
    for p in places:
        (ROOT / f"atlas-{p['id']}.html").write_text(place_page(p, routes))
    (ROOT / "atlas-pins.html").write_text(pins_page(places, routes))
    (ROOT / "atlas-places.html").write_text(redirect_page())
    a = ROOT / "atlas.html"; s = a.read_text()
    ldtag, lst = atlas_blocks(places, routes)
    if "<!-- atlas-ld:start -->" in s:
        s = re.sub(r"    <!-- atlas-ld:start -->.*?<!-- atlas-ld:end -->", lambda m: ldtag, s, flags=re.S)
    else:
        s = s.replace("</head>", ldtag + "\n</head>", 1)
    if "<!-- atlas-list:start -->" in s:
        s = re.sub(r"<!-- atlas-list:start -->.*?<!-- atlas-list:end -->", lambda m: lst, s, flags=re.S)
    else:
        s = s.replace('<ul id="pins-ul" class="pins-ul"></ul>', '<ul id="pins-ul" class="pins-ul">' + lst + "</ul>", 1)
    s = re.sub(r'(<span id="pins-all-n">)\d+(</span>)', lambda m: m.group(1) + str(len(places)) + m.group(2), s)
    a.write_text(s)
    (ROOT / "sitemap-atlas.xml").write_text(sitemap(places))
    argv = __import__("sys").argv
    if "--cards" in argv:
        cards(places)
    elif "--card" in argv:  # --card <place-id> [<place-id> ...]: render just these (new pins)
        cards(places, set(argv[argv.index("--card") + 1:]))
    elif not (ROOT / "og" / "atlas-pins.png").exists():
        pins_card(places)
    print(f"{len(places)} place pages + atlas-pins.html (+ atlas-places.html redirect) + sitemap-atlas.xml; atlas.html blocks updated")
