#!/usr/bin/env python3
"""Branded 1200x630 link-preview cards for book pages (og:image / twitter:image).

Usage (from repo root):  python3 scripts/make_link_cards.py            # writes og/book-<slug>.png
                         python3 scripts/make_link_cards.py --tags     # also (re)writes the meta tags
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
    for b in BOOKS:
        print(render(b).relative_to(ROOT))
        if "--tags" in sys.argv:
            write_tags(b)
