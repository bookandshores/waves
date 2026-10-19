#!/usr/bin/env python3
"""B&S: enrich the 7 book pages for AI search with hidden JSON-LD only
(Book + description/genre/publisher/award + Offer -> Bookshop affiliate link + Review
built from each page's existing summary and curator note). No visible changes, no FAQPage
(Google requires FAQ content to be visible). Idempotent; also removes the earlier
visible 'Quick answers' block and its CSS if found."""
import html, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AFF = "https://bookshop.org/a/125864/"
PAGES = ["book-talented-mr-ripley.html", "book-carol.html", "book-the-end-of-everything.html",
         "book-all-them-dogs.html", "book-helen-of-nowhere.html", "book-switzy.html", "book-ambivalence.html"]

# CSS from the earlier visible block; kept only so re-runs can remove it
CSS = ("        /* B&S: ai-ready quick answers */\n"
       "        .bs-qa { margin-top:1.6rem; padding-top:1rem; border-top:2px solid var(--black); font-size:0.9rem; line-height:1.5; }\n"
       "        .bs-qa .bs-who { margin-bottom:0.8rem; }\n"
       "        .bs-qa h3 { font-family:'Oswald',sans-serif; font-size:1.1rem; letter-spacing:0.04em; text-transform:uppercase; margin-bottom:0.4rem; }\n"
       "        .bs-qa dt { font-weight:500; margin-top:0.5rem; }\n"
       "        .bs-qa dd { margin:0; color:var(--gray); }\n")

def text(fragment):
    t = re.sub(r"<[^>]+>", "", fragment)
    return re.sub(r"\s+", " ", html.unescape(t)).strip()

def build(path):
    src = path.read_text(encoding="utf-8")
    m = re.search(r'<script type="application/ld\+json">(.*?)</script>', src, re.S)
    data = json.loads(m.group(1))
    book = data["@graph"][0] if "@graph" in data else data
    book = {k: v for k, v in book.items() if k not in ("review", "offers", "description", "publisher", "genre", "award", "@context")}
    isbn = book["isbn"]
    detail = src[src.index('<div class="book-detail">'):]
    paras = re.findall(r"<p>(.*?)</p>", detail, re.S)
    summary = text(paras[0])
    note_html = re.search(r'<p class="curator-note">(.*?)</p>', detail, re.S).group(1)
    note = text(re.sub(r'\s*<a [^>]*>Get tickets</a>', '', note_html))
    note = re.sub(r"\s*See the full shortlist\.$", "", note)
    meta = [s.strip() for s in text(re.search(r'<p class="book-meta">(.*?)</p>', detail, re.S).group(1)).split("•")]
    book["description"] = summary
    book["genre"] = meta[1]
    pub = re.sub(r",? \d{4}$", "", meta[2]).replace(" paperback", "")
    book["publisher"] = {"@type": "Organization", "name": pub}
    award = [s for s in meta if "Booker" in s]
    if award:
        book["award"] = award[0]
    book["offers"] = {"@type": "Offer", "url": AFF + isbn,
                      "seller": {"@type": "Organization", "name": "Bookshop.org", "url": "https://bookshop.org"}}
    book["review"] = {"@type": "Review",
                      "author": {"@type": "Organization", "name": "Book & Shores", "url": "https://bookandshores.com/"},
                      "publisher": {"@type": "Organization", "name": "Book & Shores"},
                      "reviewBody": summary + " " + note,
                      "url": book["url"]}
    graph = {"@context": "https://schema.org", "@graph": [book]}
    new_ld = '<script type="application/ld+json">' + json.dumps(graph, ensure_ascii=False) + '</script>'
    src = src[:m.start()] + new_ld + src[m.end():]

    # Data only: no visible block. Strip any earlier visible block / its CSS if present.
    src = re.sub(r"\s*<!-- ai-ready:start -->.*?<!-- ai-ready:end -->", "", src, flags=re.S)
    src = src.replace(CSS, "")
    path.write_text(src, encoding="utf-8")
    print("updated", path.name)

if __name__ == "__main__":
    for name in PAGES:
        build(ROOT / name)
