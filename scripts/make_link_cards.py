#!/usr/bin/env python3
"""Branded 1200x630 link-preview cards for book pages (og:image / twitter:image).

Usage (from repo root):  python3 scripts/make_link_cards.py            # writes og/book-<slug>.png
                         python3 scripts/make_link_cards.py --tags     # also (re)writes the meta tags
                         python3 scripts/make_link_cards.py --events [--tags]   # event/list pages only: og/<page>.png (type-only, no cover)
Needs google-chrome (headless) and local Oswald + IBM Plex Mono fonts (FONT_DIR env to override).
Covers are the site's own real cover files; the cover is never upscaled past its native size.
"""
import html, os, pathlib, re, subprocess, sys
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "og"
SITE = "https://bookandshores.com"
F = os.environ.get("FONT_DIR", "/usr/share/fonts/truetype/sand-box/google")

BOOKS = [
    dict(slug="talented-mr-ripley", cover="weekly-ripley.jpg", label="Weekly Read",
         title="The Talented Mr. Ripley", author="Patricia Highsmith"),
    dict(slug="carol", cover="weekly-carol.jpg", label="Bonus Weekly Read",
         title="Carol", author="Patricia Highsmith"),
    dict(slug="the-end-of-everything", cover="weekly-end-of-everything.jpg", label="Booker Prize 2026 · Shortlist",
         title="The End of Everything", author="M. John Harrison"),
    dict(slug="all-them-dogs", cover="ALLTHEMDOGS.png", label="Booker Prize 2026 · Longlist",
         title="All Them Dogs", author="Djamel White"),
    dict(slug="helen-of-nowhere", cover="HELEN.png", label="Booker Prize 2026 · Longlist",
         title="Helen of Nowhere", author="Makenna Goodman"),
    dict(slug="switzy", cover="SWITZY.png", label="Booker Prize 2026 · Longlist",
         title="Switzy", author="Emma Cline"),
    dict(slug="ambivalence", cover="AMBIVALENCE.png", label="Memoir · Bookstore Pick",
         title="Ambivalence: An Education", author="Brian Dillon"),
    dict(slug="sound-within-sound", cover="9781419753565.jpg", label="Music History · Bookstore Pick",
         title="Sound Within Sound", author="Kate Molleson"),
    dict(slug="space-behind-the-face", cover="9798217061273.jpg", label="Memoir · Pre-order · Nov 3",
         title="The Space Behind the Face", author="Robert Wilson with Keith McDermott"),
    dict(slug="the-sandman", cover="9780525433057.jpg", label="Now Apple TV's Nocturne · Oct 30",
         title="The Sandman", author="Lars Kepler"),
    dict(slug="susan-sontag-collected-essays", cover="9781598538595.jpg", label="Library of America · Pre-order · Nov 3",
         title="The Collected Essays", author="Susan Sontag, ed. David Rieff"),
    dict(slug="mad-eden", cover="9780374620158.jpg", label="National Book Award 2026 · Fiction Finalist",
         title="Mad Eden", author="Morgan Thomas"),
    dict(slug="dey", cover="9780593803523.jpg", label="National Book Award 2026 · Fiction Finalist",
         title="Dèy", author="Edwidge Danticat"),
    dict(slug="huna", cover="9798217153602.jpg", label="National Book Award 2026 · Nonfiction Finalist",
         title="Huna", author="Abdelrahman ElGendy"),
    dict(slug="mother-tongue", cover="9780593241530.jpg", label="National Book Award 2026 · Nonfiction Finalist",
         title="Mother Tongue", author="Sara Nović"),
    dict(slug="pure-men", cover="9781635424706.jpg", label="National Book Award 2026 · Translated Literature Finalist",
         title="Pure Men", author="Mohamed Mbougar Sarr"),
    dict(slug="paradiso-17", cover="9780593804056.jpg", label="National Book Award 2026 · Fiction Finalist",
         title="Paradiso 17", author="Hannah Lillith Assadi"),
    dict(slug="pretend-youre-dead-and-i-carry-you", cover="9781324097204.jpg", label="National Book Award 2026 · Fiction Finalist",
         title="Pretend You’re Dead and I Carry You", author="Julián Delgado Lopera"),
    dict(slug="beginning-middle-end", cover="9798217208319.jpg", label="National Book Award 2026 · Fiction Finalist",
         title="Beginning Middle End", author="Valeria Luiselli"),
    dict(slug="let-the-poets-govern", cover="9780593242148.jpg", label="National Book Award 2026 · Nonfiction Finalist",
         title="Let the Poets Govern", author="Camonghne Felix"),
    dict(slug="spawning-season", cover="9781639737833.jpg", label="National Book Award 2026 · Nonfiction Finalist",
         title="Spawning Season", author="Joseph Osmundson"),
    dict(slug="your-presence-is-a-danger-to-your-life", cover="9781635426120.jpg", label="National Book Award 2026 · Translated Literature Finalist",
         title="Your Presence Is a Danger to Your Life", author="Samar Yazbek"),
    dict(slug="fictional-selves", cover="9798217086320.jpg", label="Memoir · Crown · Sept 29, 2026",
         title="Fictional Selves", author="Kyle MacLachlan"),
]

# Event / list pages: no cover image; the right side is a big type block with the date.
EVENTS = [
    dict(page="charlotte-verse-vino-2026", label="Charlotte · Sold Out", title="Verse & Vino 2026",
         by="Fitzgerald · Foley · Kuang · Mosley", big="NOV 12", small="Charlotte Convention Center",
         alt="Verse & Vino 2026 authors' books, a Book & Shores reading list"),
    dict(page="epicfest-2026", label="Charlotte · Free Kids' Festival", title="EpicFest 2026",
         by="8 visiting authors & illustrators", big="NOV 7", small="ImaginOn",
         alt="EpicFest 2026 authors' books, a Book & Shores reading list"),
]

FONTS = f"""
@font-face{{font-family:Oswald;src:url('file://{F}/Oswald/Oswald-VariableFont_wght.ttf');font-weight:200 700}}
@font-face{{font-family:'IBM Plex Mono';src:url('file://{F}/IBM Plex Mono/IBMPlexMono-Regular.ttf');font-weight:400}}
@font-face{{font-family:'IBM Plex Mono';src:url('file://{F}/IBM Plex Mono/IBMPlexMono-Medium.ttf');font-weight:500}}
@font-face{{font-family:'IBM Plex Mono';src:url('file://{F}/IBM Plex Mono/IBMPlexMono-SemiBold.ttf');font-weight:600}}
"""

def card_html(b):
    e = html.escape
    t = b["title"]
    size = 96 if len(t) <= 14 else 78 if len(t) <= 24 else 66
    cover = ROOT / b["cover"]
    h = min(500, Image.open(cover).size[1] - 8)  # never upscale (8 = border)
    top = 58 + (500 - h) // 2
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{FONTS}
*{{margin:0;padding:0;box-sizing:border-box}}html,body{{width:1200px;height:630px;overflow:hidden}}
body{{background:#f6bd28;color:#000;font-family:'IBM Plex Mono',monospace;position:relative}}
.frame{{position:absolute;inset:22px;border:4px solid #000}}
.left{{position:absolute;left:70px;top:62px;width:640px;height:506px;display:flex;flex-direction:column}}
.mark{{font-family:Oswald;font-weight:700;font-size:40px;letter-spacing:-0.01em;line-height:1}}
.label{{margin-top:58px;align-self:flex-start;background:#000;color:#f6bd28;font-weight:600;font-size:20px;
  letter-spacing:.14em;text-transform:uppercase;padding:8px 14px}}
h1{{margin-top:22px;font-family:Oswald;font-weight:700;font-size:{size}px;line-height:.95;letter-spacing:-0.02em;text-transform:uppercase}}
.by{{margin-top:22px;font-size:28px;font-weight:500;letter-spacing:.04em}}
.foot{{margin-top:auto;display:flex;justify-content:space-between;align-items:center;border-top:3px solid #000;padding-top:16px;
  font-size:20px;font-weight:500;letter-spacing:.1em;text-transform:uppercase}}
.cwrap{{position:absolute;right:92px;top:{top}px;width:390px;height:{h}px;display:flex;justify-content:center}}
.cover{{height:{h}px;border:4px solid #000;box-shadow:14px 14px 0 #000;display:block}}
</style></head><body><div class="frame"></div>
<div class="left"><div class="mark">BOOK &amp; SHORES</div>
<div class="label">{e(b['label'])}</div><h1>{e(t)}</h1><div class="by">by {e(b['author'])}</div>
<div class="foot"><span>bookandshores.com</span><span>Shop indie →</span></div></div>
<div class="cwrap"><img class="cover" src="file://{cover}"></div></body></html>"""

def render(b):
    OUT.mkdir(exist_ok=True)
    tmp = OUT / f".tmp-{b['slug']}.html"
    tmp.write_text(card_html(b))
    png = OUT / f"book-{b['slug']}.png"
    subprocess.run(["google-chrome", "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
                    "--allow-file-access-from-files", "--window-size=1200,630", "--force-device-scale-factor=1",
                    "--virtual-time-budget=3000", f"--screenshot={png}", f"file://{tmp}"], check=True, capture_output=True)
    tmp.unlink()
    return png

def event_html(ev):
    e = html.escape
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{FONTS}
*{{margin:0;padding:0;box-sizing:border-box}}html,body{{width:1200px;height:630px;overflow:hidden}}
body{{background:#f6bd28;color:#000;font-family:'IBM Plex Mono',monospace;position:relative}}
.frame{{position:absolute;inset:22px;border:4px solid #000}}
.left{{position:absolute;left:70px;top:62px;width:640px;height:506px;display:flex;flex-direction:column}}
.mark{{font-family:Oswald;font-weight:700;font-size:40px;letter-spacing:-0.01em;line-height:1}}
.label{{margin-top:58px;align-self:flex-start;background:#000;color:#f6bd28;font-weight:600;font-size:20px;
  letter-spacing:.14em;text-transform:uppercase;padding:8px 14px}}
h1{{margin-top:22px;font-family:Oswald;font-weight:700;font-size:84px;line-height:.95;letter-spacing:-0.02em;text-transform:uppercase}}
.by{{margin-top:22px;font-size:26px;font-weight:500;letter-spacing:.04em}}
.foot{{margin-top:auto;display:flex;justify-content:space-between;align-items:center;border-top:3px solid #000;padding-top:16px;
  font-size:20px;font-weight:500;letter-spacing:.1em;text-transform:uppercase}}
.date{{position:absolute;right:92px;top:108px;width:340px;height:400px;background:#000;color:#f6bd28;box-shadow:14px 14px 0 #000;
  border:4px solid #000;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:24px}}
.big{{font-family:Oswald;font-weight:700;font-size:104px;line-height:.95;letter-spacing:-0.01em;white-space:nowrap}}
.yr{{font-family:Oswald;font-weight:500;font-size:44px;margin-top:6px}}
.small{{margin-top:26px;border-top:3px solid #f6bd28;padding-top:14px;font-size:20px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}}
</style></head><body><div class="frame"></div>
<div class="left"><div class="mark">BOOK &amp; SHORES</div>
<div class="label">{e(ev['label'])}</div><h1>{e(ev['title'])}</h1><div class="by">{e(ev['by'])}</div>
<div class="foot"><span>bookandshores.com</span><span>Shop indie →</span></div></div>
<div class="date"><div class="big">{e(ev['big'])}</div><div class="yr">2026</div><div class="small">{e(ev['small'])}</div></div></body></html>"""

def render_event(ev):
    OUT.mkdir(exist_ok=True)
    tmp = OUT / f".tmp-{ev['page']}.html"
    tmp.write_text(event_html(ev))
    png = OUT / f"{ev['page']}.png"
    subprocess.run(["google-chrome", "--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
                    "--allow-file-access-from-files", "--window-size=1200,630", "--force-device-scale-factor=1",
                    "--virtual-time-budget=3000", f"--screenshot={png}", f"file://{tmp}"], check=True, capture_output=True)
    tmp.unlink()
    return png

def event_tags(ev):
    e = lambda s: html.escape(s, quote=True)
    url = f"{SITE}/og/{ev['page']}.png"
    alt = e(ev["alt"])
    return "\n".join([
        "    <!-- link-preview:start -->",
        f'    <meta property="og:image" content="{url}">',
        '    <meta property="og:image:width" content="1200">',
        '    <meta property="og:image:height" content="630">',
        f'    <meta property="og:image:alt" content="{alt}">',
        '    <meta name="twitter:card" content="summary_large_image">',
        '    <meta name="twitter:site" content="@bookandshores">',
        f'    <meta name="twitter:image" content="{url}">',
        f'    <meta name="twitter:image:alt" content="{alt}">',
        "    <!-- link-preview:end -->"])

def write_event_tags(ev):
    p = ROOT / f"{ev['page']}.html"
    s = p.read_text()
    s = re.sub(r"\n    <!-- link-preview:start -->.*?<!-- link-preview:end -->", "", s, flags=re.S)
    s = re.sub(r'\n\s*<meta (property|name)="(og:image[^"]*|twitter:[^"]*)"[^>]*>', "", s)
    s, n = re.subn(r'(<meta property="og:description"[^>]*>)', lambda m: m.group(1) + "\n" + event_tags(ev), s, count=1)
    assert n == 1, p
    p.write_text(s)

def tags(b):
    e = lambda s: html.escape(s, quote=True)
    url = f"{SITE}/og/book-{b['slug']}.png"
    alt = e(f"{b['title']} by {b['author']}: book cover on a Book & Shores card")
    return "\n".join([
        "    <!-- link-preview:start -->",
        f'    <meta property="og:image" content="{url}">',
        '    <meta property="og:image:width" content="1200">',
        '    <meta property="og:image:height" content="630">',
        f'    <meta property="og:image:alt" content="{alt}">',
        '    <meta name="twitter:card" content="summary_large_image">',
        '    <meta name="twitter:site" content="@bookandshores">',
        f'    <meta name="twitter:image" content="{url}">',
        f'    <meta name="twitter:image:alt" content="{alt}">',
        "    <!-- link-preview:end -->"])

def write_tags(b):
    p = ROOT / f"book-{b['slug']}.html"
    s = p.read_text()
    s = re.sub(r"\n    <!-- link-preview:start -->.*?<!-- link-preview:end -->", "", s, flags=re.S)
    s = re.sub(r'\n\s*<meta (property|name)="(og:image[^"]*|twitter:[^"]*)"[^>]*>', "", s)
    s, n = re.subn(r'(<meta property="og:description"[^>]*>)', lambda m: m.group(1) + "\n" + tags(b), s, count=1)
    assert n == 1, p
    p.write_text(s)

if __name__ == "__main__":
    if "--events" in sys.argv:
        for ev in EVENTS:
            print(render_event(ev).relative_to(ROOT))
            if "--tags" in sys.argv:
                write_event_tags(ev)
        sys.exit(0)
    for b in BOOKS:
        print(render(b).relative_to(ROOT))
        if "--tags" in sys.argv:
            write_tags(b)
