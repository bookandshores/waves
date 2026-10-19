#!/usr/bin/env python3
"""B&S: accessibility / AI-agent labels. No visual change. Idempotent.
- Bookshop Buy links: aria-label "Buy <title> on Bookshop.org (opens in a new tab)", rel="noopener sponsored"
- Tip links: aria-label; new-tab links get rel=noopener
- Spin Brigitte: type=button, aria-label, aria-controls; result region is aria-live
- KCRW <audio>: aria-label
- shop-posters modal close: real button semantics; poster cards keyboard-operable"""
import html, re
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
PAGES = ["index.html", "bookstore.html", "author-of-the-month.html", "booker-2026-longlist.html",
         "booker-2026-shortlist.html"] + sorted(p.name for p in ROOT.glob("book-*.html"))

def clean(t):
    t = re.sub(r"<span[^>]*>[^<]*</span>\s*<br\s*/?>", "", t)  # drop badges like "Bonus"<br>
    t = re.sub(r"<br\s*/?>", " ", t)
    t = re.sub(r"<[^>]+>", "", t)
    return re.sub(r"\s+", " ", html.unescape(t)).strip()

TITLE_RES = [r'class="book-title"[^>]*>(.*?)</div>', r'<h2[^>]*>(.*?)</h2>', r'<h3[^>]*>(.*?)</h3>',
             r'class="book-cover-frame"[^>]*>\s*(?:<a [^>]*>)?\s*<img [^>]*alt="([^"]+)"']

# card titles where "Title – X" is not "Title by Author"
TITLE_OVERRIDES = {"We Jazz Issue 19 — Milestones": "We Jazz Issue 19: Milestones"}

def title_before(src, pos):
    window = src[max(0, pos - 2500):pos]
    best = None
    for rx in TITLE_RES:
        for m in re.finditer(rx, window, re.S):
            if best is None or m.start() > best[0]:
                best = (m.start(), clean(m.group(1)))
    if not best: return None
    t = best[1]
    return TITLE_OVERRIDES.get(t, t)

def set_attr(tag, name, value):
    if re.search(r'\s%s="' % name, tag):
        return re.sub(r'\s%s="[^"]*"' % name, ' %s="%s"' % (name, value), tag, count=1)
    return tag[:-1] + ' %s="%s">' % (name, value)

def fix_rel(tag, want):
    m = re.search(r'\srel="([^"]*)"', tag)
    have = m.group(1).split() if m else []
    for w in want:
        if w not in have: have.append(w)
    return set_attr(tag, "rel", " ".join(have))

missing = []
def process(name):
    p = ROOT / name; src = p.read_text(encoding="utf-8"); out = []; i = 0
    for m in re.finditer(r'<a\s[^>]*>', src):
        tag = m.group(0); new = tag
        end = src.find("</a>", m.end()); inner = clean(src[m.end():end]) if end > 0 else ""
        newtab = 'target="_blank"' in tag
        if re.search(r'href="https://bookshop\.org/a/125864/\d+"', tag) and inner.lower().startswith("buy"):
            t = title_before(src, m.start())
            if t:
                t = re.sub(r"\s+[–—-]\s+", " by ", t, count=1) if (" by " not in t and t not in TITLE_OVERRIDES.values()) else t
                new = set_attr(new, "aria-label", html.escape("Buy %s on Bookshop.org (opens in a new tab)" % t))
            else:
                missing.append((name, tag))
            new = fix_rel(new, ["noopener", "sponsored"])
        elif newtab and inner.lower().startswith("buy"):
            t = title_before(src, m.start()); host = re.search(r'href="https?://(?:www\.)?([^/"]+)', tag)
            if t and host:
                t = re.sub(r"\s+[–—-]\s+", " by ", t, count=1) if (" by " not in t and t not in TITLE_OVERRIDES.values()) else t
                new = set_attr(new, "aria-label", html.escape("Buy %s from %s (opens in a new tab)" % (t, host.group(1))))
            new = fix_rel(new, ["noopener"])
        elif "paypal.com/donate" in tag:
            new = set_attr(new, "aria-label", "Tip the Booktender on PayPal (opens in a new tab)")
            new = fix_rel(new, ["noopener"])
        elif newtab and 'rel="' not in tag:
            new = fix_rel(new, ["noopener"])
        out.append(src[i:m.start()]); out.append(new); i = m.end()
    out.append(src[i:]); src = "".join(out)
    if name == "index.html":
        src = src.replace('<button class="spin-button" onclick="spinBardot()">Spin Brigitte</button>',
                          '<button type="button" class="spin-button" onclick="spinBardot()" aria-controls="bookPick" aria-label="Spin Brigitte for a random book pick and a line from it">Spin Brigitte</button>')
        src = src.replace('<div id="bookPick" style="display:none;', '<div id="bookPick" aria-live="polite" style="display:none;')
        src = src.replace('<img src="BB.jpg" alt="Brigitte Bardot" id="brigitteImg">',
                          '<img src="BB.jpg" alt="Brigitte Bardot, the spinner for the random book pick" id="brigitteImg">')
        src = src.replace("""'<img src="' + bsEsc(b.cover) + '" alt="' + name + '" """,
                          """'<img src="' + bsEsc(b.cover) + '" alt="Cover of ' + bsEsc(b.title) + (b.author ? ' by ' + bsEsc(b.author) : '') + '" """)
        src = src.replace("""rel="noopener" class="btn">Buy Now</a>' +""",
                          """rel="noopener sponsored" class="btn" aria-label="Buy ' + bsEsc(b.title) + ' on Bookshop.org (opens in a new tab)">Buy Now</a>' +""")
        src = src.replace("""target="_blank" rel="noopener" class="tip-btn">Tip the Booktender</a>';""",
                          """target="_blank" rel="noopener" class="tip-btn" aria-label="Tip the Booktender on PayPal (opens in a new tab)">Tip the Booktender</a>';""")
        src = src.replace('<audio controls preload="none" src="https://streams.kcrw.com/e24_mp3"',
                          '<audio controls preload="none" aria-label="KCRW Eclectic24 live stream player" src="https://streams.kcrw.com/e24_mp3"')
    p.write_text(src, encoding="utf-8")

for n in PAGES: process(n)

# shop-posters: semantics only
sp = ROOT / "shop-posters.html"; s = sp.read_text(encoding="utf-8")
s = s.replace('<span class="close" onclick="closeModal()">×</span>',
              '<span class="close" role="button" tabindex="0" aria-label="Close enlarged print" onclick="closeModal()" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();closeModal();}">×</span>')
s = s.replace('<div id="modal" class="modal" onclick=', '<div id="modal" class="modal" role="dialog" aria-modal="true" aria-label="Enlarged print" onclick=')
s = re.sub(r'<div class="poster-card" onclick="openModal\(this\)">',
           '<div class="poster-card" onclick="openModal(this)" role="button" tabindex="0" aria-label="View larger" onkeydown="if((event.key===\'Enter\'||event.key===\' \')&amp;&amp;event.target===this){event.preventDefault();openModal(this);}">', s)
sp.write_text(s, encoding="utf-8")
print("unlabelled buy links:", missing)
