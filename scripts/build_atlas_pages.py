#!/usr/bin/env python3
"""Crawlable, server-rendered Atlas pages generated from atlas-data.js.

Writes (from repo root):  python3 scripts/build_atlas_pages.py
  - atlas-<place-id>.html  one static page per pin: the books, their stated setting, the cited source, schema.org JSON-LD
  - atlas-places.html      a plain-HTML index of every place, grouped by continent
  - atlas.html             fills two marked blocks: Dataset + ItemList JSON-LD in <head>, and a static pin list
                           (atlas.js replaces the list when JavaScript runs)
  - sitemap-atlas.xml      sitemap for the generated pages (listed in robots.txt)
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

def head(title, desc, url, ld, img="https://bookandshores.com/og-image.png?v=2"):
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
    <meta name="twitter:card" content="summary_large_image">
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
            <a href="atlas-places.html">All places</a>
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

def place_page(p, routes):
    url = f"{SITE}/atlas-{p['id']}.html"
    n = len(p["books"])
    titles = ", ".join(b["title"] for b in p["books"])
    title = f"Books Set in {p['name']} | B&S Atlas | Book & Shores"
    desc = f"{n} book{'s' if n != 1 else ''} on the B&S Atlas set in {p['name']}: {titles}. Each setting is cited from the book, its publisher or a major review."
    if len(desc) > 300: desc = desc[:297].rsplit(" ", 1)[0] + "…"
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "@id": url, "url": url, "name": f"Books set in {p['name']}", "description": desc,
         "isPartOf": {"@type": "Dataset", "@id": SITE + "/atlas.html#dataset"}, "publisher": {"@id": SITE + "/#org"},
         "about": place_ld(p), "mainEntity": {"@type": "ItemList", "numberOfItems": n,
            "itemListElement": [{"@type": "ListItem", "position": i + 1, "item": book_ld(b, p)} for i, b in enumerate(p["books"])]}},
        {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Atlas", "item": SITE + "/atlas.html"},
            {"@type": "ListItem", "position": 2, "name": "All places", "item": SITE + "/atlas-places.html"},
            {"@type": "ListItem", "position": 3, "name": p["name"], "item": url}]},
        ORG]}
    on_routes = [r for r in routes if p["id"] in r.get("stops", [])]
    out = [head(title, desc, url, ld)]
    out.append(f'        <p class="crumbs"><a href="atlas.html">Atlas</a> › <a href="atlas-places.html">All places</a> › {e(p["name"])}</p>\n')
    out.append(f"""        <section class="place-hero">
            <p class="eyebrow">B&amp;S Atlas · {e(p.get('cont', ''))}</p>
            <h2>Books set in {e(p['name'])}</h2>
            <p>{n} book{'s' if n != 1 else ''} pinned here. {'The book names a region, not an exact address, so the pin sits inside the area.' if p.get('area') else 'The pin marks the named place.'}</p>
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
                    {'<dt>About</dt><dd>' + e(b['note']) + '</dd>' if b.get('note') else ''}
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

def index_page(places):
    url = f"{SITE}/atlas-places.html"
    nb = len({b.get("isbn") or b["title"] for p in places for b in p["books"]})
    ncc = len({p["cc"] for p in places if p.get("cc")})
    desc = f"Every place on the B&S Atlas, a map of books at their stated settings by Book & Shores, an independent bookstore: {len(places)} places, {nb} books, {ncc} countries, each setting cited."
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "@id": url, "url": url, "name": "B&S Atlas: all places", "description": desc,
         "isPartOf": {"@id": SITE + "/atlas.html#dataset"}, "publisher": {"@id": SITE + "/#org"},
         "mainEntity": {"@type": "ItemList", "numberOfItems": len(places), "itemListElement": [
             {"@type": "ListItem", "position": i + 1, "url": f"{SITE}/atlas-{p['id']}.html", "name": f"Books set in {p['name']}"} for i, p in enumerate(places)]}},
        ORG]}
    out = [head("All Places on the B&S Atlas: Books by Setting | Book & Shores", desc, url, ld)]
    out.append(f"""        <section class="place-hero">
            <p class="eyebrow">B&amp;S Atlas · Index</p>
            <h2>Every place on the Atlas</h2>
            <p>{len(places)} places, {nb} books, {ncc} countries. Each book is pinned at its stated setting, and every pin cites its source.</p>
            <p style="margin-top:1rem;"><a class="btn" style="width:auto;" href="atlas.html">Open the map →</a></p>
        </section>
        <div class="idx">
""")
    order = ["North America", "Europe", "Asia", "Africa", "South America", "Atlantic Ocean"]
    conts = sorted({p.get("cont", "Elsewhere") for p in places}, key=lambda c: order.index(c) if c in order else 99)
    for c in conts:
        out.append(f"            <h3>{e(c)}</h3>\n            <ul>\n")
        for p in sorted([p for p in places if p.get("cont", "Elsewhere") == c], key=lambda p: p["name"]):
            bk = "; ".join(f"{b['title']} by {b['author']}" for b in p["books"])
            out.append(f'                <li><a href="atlas-{e(p["id"])}.html">{e(p["name"])}</a><br><span class="bk">{e(bk)}</span></li>\n')
        out.append("            </ul>\n")
    out.append("        </div>\n")
    out.append(FOOT)
    return "".join(out)

def atlas_blocks(places):
    nb = len({b.get("isbn") or b["title"] for p in places for b in p["books"]})
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Dataset", "@id": SITE + "/atlas.html#dataset", "name": "B&S Atlas: books mapped to their stated settings",
         "description": f"A hand-checked map of {nb} books at {len(places)} places, each pinned at the book's stated setting with a cited source (the book, its publisher or a major review). Made by Book & Shores, an independent bookstore.",
         "url": SITE + "/atlas.html", "creator": {"@id": SITE + "/#org"}, "publisher": {"@id": SITE + "/#org"},
         "keywords": ["literary map", "books by setting", "book atlas", "literary geography", "literary travel"],
         "spatialCoverage": {"@type": "Place", "name": "World"}, "dateModified": TODAY, "isAccessibleForFree": True,
         "hasPart": [{"@type": "CollectionPage", "url": f"{SITE}/atlas-{p['id']}.html", "name": f"Books set in {p['name']}"} for p in places]},
        {"@type": "ItemList", "@id": SITE + "/atlas.html#pins", "name": "Pins on the B&S Atlas", "numberOfItems": len(places),
         "itemListElement": [{"@type": "ListItem", "position": i + 1, "url": f"{SITE}/atlas-{p['id']}.html", "name": p["name"]} for i, p in enumerate(places)]},
        ORG]}
    ldtag = '    <!-- atlas-ld:start -->\n    <script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False).replace("</", "<\\/") + "</script>\n    <!-- atlas-ld:end -->"
    items = []
    for p in places:
        bk = "".join(f'<div class="pl-book">{f"<a href=\"{e(b["page"])}\">{e(b["title"])}</a>" if b.get("page") and b["page"] != "bookstore.html" else e(b["title"])} by {e(b["author"])}</div>' for b in p["books"])
        items.append(f'<li><div class="pl-place"><a href="atlas-{e(p["id"])}.html">{e(p["name"])}</a></div>{bk}</li>')
    lst = "<!-- atlas-list:start -->" + "".join(items) + "<!-- atlas-list:end -->"
    return ldtag, lst

def sitemap(places):
    urls = [f"{SITE}/atlas-places.html"] + [f"{SITE}/atlas-{p['id']}.html" for p in places]
    body = "".join(f"  <url>\n    <loc>{u}</loc>\n    <lastmod>{TODAY}</lastmod>\n  </url>\n" for u in urls)
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + "</urlset>\n"

if __name__ == "__main__":
    CSS = base_css()
    places, routes = load()
    for p in places:
        (ROOT / f"atlas-{p['id']}.html").write_text(place_page(p, routes))
    (ROOT / "atlas-places.html").write_text(index_page(places))
    a = ROOT / "atlas.html"; s = a.read_text()
    ldtag, lst = atlas_blocks(places)
    if "<!-- atlas-ld:start -->" in s:
        s = re.sub(r"    <!-- atlas-ld:start -->.*?<!-- atlas-ld:end -->", lambda m: ldtag, s, flags=re.S)
    else:
        s = s.replace("</head>", ldtag + "\n</head>", 1)
    if "<!-- atlas-list:start -->" in s:
        s = re.sub(r"<!-- atlas-list:start -->.*?<!-- atlas-list:end -->", lambda m: lst, s, flags=re.S)
    else:
        s = s.replace('<ul id="pins-ul" class="pins-ul"></ul>', '<ul id="pins-ul" class="pins-ul">' + lst + "</ul>", 1)
    a.write_text(s)
    (ROOT / "sitemap-atlas.xml").write_text(sitemap(places))
    print(f"{len(places)} place pages + atlas-places.html + sitemap-atlas.xml; atlas.html blocks updated")
