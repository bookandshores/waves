#!/usr/bin/env python3
"""Book & Shores: flip the 2026 Booker pages to show the winner.

Usage (from the repo root):  python3 _booker-winner/apply_winner.py <slug>
Slugs: end-of-everything, disappearers, black-bag, may-we-feed-the-king,
       things-we-never-say, john-of-john
Edits booker-2026-shortlist.html and index.html in place. Every edit checks
its anchor text first and aborts without writing anything if the page has
changed in a way it doesn't recognise.
"""
import json, re, sys
from pathlib import Path

BOOKS = {
    "end-of-everything": dict(isbn="9798217438655", title="The End of Everything", author="M. John Harrison",
        img="booker26-end-of-everything.jpg",
        line="A beachcomber on the Kent coast, the world coming apart, and Harrison at his strangest and funniest. His first time on a Booker shortlist, and he takes the whole thing.",
        home="M. John Harrison takes the prize with The End of Everything, a slyly funny post-apocalyptic novel set on the Kent coast. His first time on the shortlist."),
    "disappearers": dict(isbn="9780593717202", title="The Disappearers", author="Marlon James",
        img="IMG_2779.jpg",
        line="1980s Kingston and a survivor set on payback. James won in 2015 with A Brief History of Seven Killings, and now joins Peter Carey, J. M. Coetzee, Hilary Mantel and Margaret Atwood as a two-time winner.",
        home="Marlon James wins his second Booker with The Disappearers, a revenge story set in 1980s Kingston. Only four writers had done it twice before him."),
    "black-bag": dict(isbn="9781638933380", title="Black Bag", author="Luke Kennard",
        img="booker26-black-bag.jpg",
        line="An out-of-work actor, a psychology experiment, and a black leather bag. A warped, very funny campus novel, and a first-time nominee beats two former winners.",
        home="Luke Kennard takes the prize with Black Bag, the campus novel about an actor zipped inside a leather bag. A first-time nominee beats two former winners."),
    "may-we-feed-the-king": dict(isbn="9798893380620", title="May We Feed the King", author="Rebecca Perry",
        img="booker26-may-we-feed-the-king.jpg",
        line="A curator lost in the court of a reluctant medieval king. A debut novel takes the Booker, and the US paperback is already out.",
        home="Rebecca Perry wins with her debut, May We Feed the King, a curator lost in a scheming medieval court. The US paperback is out now."),
    "things-we-never-say": dict(isbn="9798217154746", title="The Things We Never Say", author="Elizabeth Strout",
        img="n.jpg",
        line="A teacher in coastal Massachusetts and the secret she's been keeping for decades. Third time on a Booker list, and this time Strout wins.",
        home="Elizabeth Strout wins with The Things We Never Say, on her third time on a Booker list. Grief, friendship, and a secret finally said out loud."),
    "john-of-john": dict(isbn="9780802167194", title="John of John", author="Douglas Stuart",
        img="booker26-john-of-john.jpg",
        line="A son goes home to his strict father in the Outer Hebrides. Stuart won in 2020 with Shuggie Bain, and now joins Peter Carey, J. M. Coetzee, Hilary Mantel and Margaret Atwood as a two-time winner.",
        home="Douglas Stuart wins his second Booker with John of John, a son's return to his strict Hebridean father. Only four writers had done it twice before him."),
}

def sub1(text, old, new, label):
    n = text.count(old)
    if n != 1:
        sys.exit(f"ABORT: expected 1 match for [{label}], found {n}. Nothing written.")
    return text.replace(old, new)

def main():
    if len(sys.argv) != 2 or sys.argv[1] not in BOOKS:
        sys.exit("usage: apply_winner.py <" + "|".join(BOOKS) + ">")
    b = BOOKS[sys.argv[1]]
    isbn, t, a = b["isbn"], b["title"], b["author"]
    sp, ip = Path("booker-2026-shortlist.html"), Path("index.html")
    s, h = sp.read_text(), ip.read_text()
    if "booker-winner" in s or "booker-winner" in h:
        sys.exit("ABORT: winner already applied.")
    esc = lambda x: x.replace("&", "&amp;")

    # ---- shortlist page: title + meta
    s = sub1(s, "<title>Booker Prize 2026 Shortlist: All Six Books | Book &amp; Shores</title>",
             f"<title>Booker Prize 2026 Winner: {esc(t)} by {esc(a)} | Book &amp; Shores</title>", "title")
    s = sub1(s, 'property="og:title" content="Booker Prize 2026 Shortlist: All Six Books | Book &amp; Shores"',
             f'property="og:title" content="Booker Prize 2026 Winner: {esc(t)} by {esc(a)} | Book &amp; Shores"', "og:title")
    old_desc = "All six novels on the 2026 Booker Prize shortlist, in a sentence each, with links to buy from independent bookstores. The winner is announced November 9, 2026."
    new_desc = f"{esc(t)} by {esc(a)} wins the 2026 Booker Prize. The winner and all six shortlisted novels, in a sentence each, with links to buy from independent bookstores."
    if s.count(old_desc) != 2:
        sys.exit("ABORT: meta descriptions changed. Nothing written.")
    s = s.replace(old_desc, new_desc)

    # ---- JSON-LD: mark the winner
    s = sub1(s, f'"isbn": "{isbn}", "image"', f'"isbn": "{isbn}", "image"', "ld isbn")
    m = re.search(r'(<script type="application/ld\+json">)(.*?)(</script>)', s, re.S)
    ld = json.loads(m.group(2))
    ld["name"] = "Booker Prize 2026 winner and shortlist"
    for it in ld["itemListElement"]:
        if it["item"]["isbn"] == isbn:
            it["item"]["award"] = "Booker Prize 2026 (winner)"
    s = s[:m.start(2)] + json.dumps(ld) + s[m.end(2):]

    # ---- CSS
    css = """        /* B&S: booker-winner styling */
        .winner-banner { display:grid; grid-template-columns: 200px 1fr; gap:2rem; align-items:center; margin: 0 auto 3rem; max-width: 820px; padding: 1.8rem; background:#f5ecd4; border:4px solid var(--black); border-radius:12px; box-shadow: 8px 8px 0 #dd4522; }
        .winner-banner img { width:100%; aspect-ratio:2/3; object-fit:cover; border:3px solid var(--black); border-radius:8px; box-shadow:0 8px 24px rgba(0,0,0,0.25); }
        .winner-stamp { display:inline-block; background:var(--black); color:var(--yellow); font-family:'Oswald',sans-serif; font-weight:700; font-size:clamp(1.6rem,5vw,2.2rem); letter-spacing:0.08em; padding:0.1rem 0.9rem 0.2rem; transform:rotate(-2.5deg); box-shadow:5px 5px 0 #dd4522; margin-bottom:0.9rem; }
        .winner-banner h3 { font-family:'Oswald',sans-serif; font-size:clamp(1.8rem,5vw,2.6rem); line-height:1.05; margin-bottom:0.3rem; }
        .winner-banner .winner-meta { color:var(--gray); margin-bottom:0.9rem; font-size:0.95rem; }
        .winner-banner p { margin-bottom:1.1rem; }
        .book-card.is-winner .book-cover-frame { border-color:#dd4522; box-shadow:6px 6px 0 #dd4522; }
        .winner-tag { display:inline-block; background:#dd4522; color:#fff; font-family:'IBM Plex Mono',monospace; font-size:0.72rem; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; padding:0.1rem 0.5rem; border-radius:4px; margin-bottom:0.3rem; }
        @media (max-width:640px){ .winner-banner{ grid-template-columns:1fr; text-align:center; } .winner-banner img{ max-width:200px; margin:0 auto; } }
    </style>"""
    s = sub1(s, "    </style>", css, "style close")

    # ---- heading, intro, updated
    s = sub1(s, "<h2>The 2026 Booker Shortlist</h2>", "<h2>The 2026 Booker Winner</h2>", "h2")
    s = sub1(s, '<p class="intro-text">Six novels, one prize, and the winner is named November 9. Two past winners, a three-time nominee, and three first-timers. A sentence each, then go pick your horse.</p>',
             f'<p class="intro-text">Six novels, one prize, and the judges have picked. Here is the winner, then the whole shortlist in a sentence each.</p>', "intro")
    s = re.sub(r'<p class="updated">Updated [^<]+</p>', '<p class="updated">Updated November 9, 2026</p>', s, count=1)

    # ---- winner banner before the grid
    link = f"https://bookshop.org/a/125864/{isbn}"
    banner = f'''<!-- B&S: booker-winner banner -->
            <div class="winner-banner">
                <a href="{link}" target="_blank" rel="noopener sponsored"><img src="{b["img"]}" alt="{esc(t)} by {esc(a)}, winner of the 2026 Booker Prize"></a>
                <div>
                    <span class="winner-stamp">WINNER</span>
                    <h3>{esc(t)}</h3>
                    <p class="winner-meta">{esc(a)} &bull; Booker Prize 2026 &bull; Announced November 9 in London</p>
                    <p>{esc(b["line"])}</p>
                    <a href="{link}" class="payment-btn" style="width:auto; padding:0.75rem 1.8rem; font-family:'Oswald',sans-serif; font-size:1.15rem; letter-spacing:0.05em;" target="_blank" rel="noopener sponsored">Buy the Winner</a>
                </div>
            </div>
            <div class="books-grid">'''
    s = sub1(s, '<div class="books-grid">', banner, "grid open")

    # ---- winner card: move first, add tag
    cm = re.search(r'                <div class="book-card" id="' + isbn + r'">.*?\n                </div>\n', s, re.S)
    if not cm:
        sys.exit("ABORT: winner card not found. Nothing written.")
    card = cm.group(0)
    s = s[:cm.start()] + s[cm.end():]
    card = card.replace('<div class="book-card" id=', '<div class="book-card is-winner" id=', 1)
    card = sub1(card, '<div class="book-title">', '<div class="book-title"><span class="winner-tag">Winner</span><br>', "card title")
    s = sub1(s, '<div class="books-grid">\n', '<div class="books-grid">\n' + card, "grid insert")

    # ---- FAQ
    s = sub1(s, "<h3>When is the 2026 Booker Prize winner announced?</h3>", "<h3>Who won the 2026 Booker Prize?</h3>", "faq q")
    s = sub1(s, "<p>Monday, November 9, 2026, at a ceremony at Old Billingsgate in London. The winner gets £50,000 and each shortlisted author gets £2,500.</p>",
             f"<p>{esc(t)} by {esc(a)}, announced Monday, November 9, 2026, at a ceremony at Old Billingsgate in London. The winner gets £50,000 and each shortlisted author gets £2,500.</p>", "faq a")

    # ---- homepage: nav tag, teaser
    h = sub1(h, '<a href="booker-2026-shortlist.html" class="nav-tag">Announced Nov 9th</a>',
             '<a href="booker-2026-shortlist.html" class="nav-tag">Winner Announced</a>', "nav tag")
    h = sub1(h, '<!-- B&S: Booker 2026 shortlist teaser,', '<!-- B&S: booker-winner teaser (was shortlist teaser),', "home comment")
    sec = re.search(r'<section id="booker".*?</section>', h, re.S)
    if not sec:
        sys.exit("ABORT: homepage Booker section not found. Nothing written.")
    blk = sec.group(0)
    blk = sub1(blk, "<h2>The 2026 Booker Shortlist</h2>",
               '<h2>The 2026 Booker Winner</h2>', "home h2")
    blk = sub1(blk, "Six novels, one prize, and the winner is named November 9. Two past winners, a three-time nominee, and three first-timers.",
               esc(b["home"]), "home blurb")
    imgre = re.compile(r'(\s*)<img src="' + re.escape(b["img"]) + r'"[^>]*>')
    im = imgre.search(blk)
    if not im:
        sys.exit("ABORT: winner cover not in homepage teaser. Nothing written.")
    tag = im.group(0).strip().replace('border: 3px solid var(--black)', 'border: 3px solid #dd4522').replace('box-shadow: 0 8px 20px rgba(0,0,0,0.3)', 'box-shadow: 5px 5px 0 #dd4522')
    tag = tag.replace(f'alt="{t}', f'alt="Winner: {t}', 1)
    wrapped = im.group(1) + '<span style="position: relative; display: block;">' + tag + '<span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%) rotate(-3deg); background: var(--black); color: var(--yellow); font-family: \'Oswald\', sans-serif; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.1em; padding: 0 0.45rem; box-shadow: 3px 3px 0 #dd4522;">WINNER</span></span>'
    blk = blk[:im.start()] + blk[im.end():]
    grid_open = re.search(r'<div style="display: grid;[^>]*>', blk)
    blk = blk[:grid_open.end()] + wrapped + blk[grid_open.end():]
    blk = sub1(blk, '<span class="btn">See the Shortlist</span>', '<span class="btn">See the Winner</span>', "home btn")
    h = h[:sec.start()] + blk + h[sec.end():]

    sp.write_text(s); ip.write_text(h)
    print(f"Applied winner: {t} by {a}")

if __name__ == "__main__":
    main()
