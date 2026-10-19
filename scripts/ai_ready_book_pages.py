#!/usr/bin/env python3
"""B&S: enrich the 7 book pages for AI search (JSON-LD Book + Review + Offer + FAQPage)
and add a short, visible 'Who it's for' line and Quick answers built ONLY from each
page's existing copy. Idempotent: re-running replaces the blocks between markers."""
import html, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AFF = "https://bookshop.org/a/125864/"
DISCLOSURE = ("On Bookshop.org, which supports independent bookstores. "
              "Book & Shores earns a small commission from Bookshop.org purchases.")

# Every answer below restates copy already on that page (summary, meta line, curator note, footer).
PAGES = {
    "book-talented-mr-ripley.html": {
        "who": "Anyone who wants to read it before Anton Corbijn's A Talent for Murder, in theaters October 23, 2026.",
        "faq": [
            ("Is it part of a series?", "Yes. It is the first of Patricia Highsmith's five Ripley novels."),
            ("Which edition does Book & Shores link to?", "The W. W. Norton paperback. The novel was first published in 1955."),
            ("Where can I buy it?", DISCLOSURE),
        ],
    },
    "book-carol.html": {
        "who": "Readers of The Talented Mr. Ripley: Carol is the bonus pick alongside it this week.",
        "faq": [
            ("Is Carol the same book as The Price of Salt?", "Yes. Patricia Highsmith first published it in 1952 as The Price of Salt."),
            ("Which edition does Book & Shores link to?", "The W. W. Norton paperback."),
            ("Where can I buy it?", DISCLOSURE),
        ],
    },
    "book-the-end-of-everything.html": {
        "who": None,
        "faq": [
            ("Is it on the 2026 Booker Prize shortlist?", "Yes. The winner is named November 9."),
            ("When did the US edition come out?", "The Riverhead Books hardcover came out October 13, 2026."),
            ("Where can I buy it?", DISCLOSURE),
        ],
    },
    "book-all-them-dogs.html": {
        "who": None,
        "faq": [
            ("Is it a debut?", "Yes. All Them Dogs is Djamel White's debut novel, published by Riverhead in 2026."),
            ("Is it on the 2026 Booker Prize list?", "Yes. It is longlisted for the 2026 Booker Prize."),
            ("Where can I buy it?", DISCLOSURE),
        ],
    },
    "book-helen-of-nowhere.html": {
        "who": None,
        "faq": [
            ("How long is it?", "Short. It is staged in six acts and brief enough for one sitting."),
            ("Is it on the 2026 Booker Prize list?", "Yes. It is longlisted for the 2026 Booker Prize."),
            ("Where can I buy it?", DISCLOSURE),
        ],
    },
    "book-switzy.html": {
        "who": None,
        "faq": [
            ("Who wrote it?", "Emma Cline, author of The Girls and The Guest."),
            ("Is it on the 2026 Booker Prize list?", "Yes. It is longlisted for the 2026 Booker Prize."),
            ("Where can I buy it?", DISCLOSURE),
        ],
    },
    "book-ambivalence.html": {
        "who": "Anyone who was raised by the books they found on their own.",
        "faq": [
            ("Is it fiction?", "No. It is a coming-of-age memoir of Dublin in the late 1980s and 1990s."),
            ("Who publishes it?", "New York Review Books, 2026."),
            ("Where can I buy it?", DISCLOSURE),
        ],
    },
}

CSS = ("        /* B&S: ai-ready quick answers */\n"
       "        .bs-qa { margin-top:1.6rem; padding-top:1rem; border-top:2px solid var(--black); font-size:0.9rem; line-height:1.5; }\n"
       "        .bs-qa .bs-who { margin-bottom:0.8rem; }\n"
       "        .bs-qa h3 { font-family:'Oswald',sans-serif; font-size:1.1rem; letter-spacing:0.04em; text-transform:uppercase; margin-bottom:0.4rem; }\n"
       "        .bs-qa dt { font-weight:500; margin-top:0.5rem; }\n"
       "        .bs-qa dd { margin:0; color:var(--gray); }\n")

def text(fragment):
    t = re.sub(r"<[^>]+>", "", fragment)
    return re.sub(r"\s+", " ", html.unescape(t)).strip()

def build(path, cfg):
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
    faq = {"@type": "FAQPage", "url": book["url"],
           "mainEntity": [{"@type": "Question", "name": q,
                           "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in cfg["faq"]]}
    graph = {"@context": "https://schema.org", "@graph": [book, faq]}
    new_ld = '<script type="application/ld+json">' + json.dumps(graph, ensure_ascii=False) + '</script>'
    src = src[:m.start()] + new_ld + src[m.end():]

    # visible block, after Buy + Tip, inside the text column
    block = ['<!-- ai-ready:start -->', '<div class="bs-qa">']
    if cfg["who"]:
        block.append('<p class="bs-who"><strong>Who it&rsquo;s for:</strong> ' + html.escape(cfg["who"], quote=False) + '</p>')
    block.append('<h3>Quick answers</h3>')
    block.append('<dl>' + ''.join('<dt>' + html.escape(q, quote=False) + '</dt><dd>' + html.escape(a, quote=False) + '</dd>'
                                  for q, a in cfg["faq"]) + '</dl>')
    block += ['</div>', '<!-- ai-ready:end -->']
    block = "\n                    ".join(block)
    src = re.sub(r"\s*<!-- ai-ready:start -->.*?<!-- ai-ready:end -->", "", src, flags=re.S)
    anchor = re.search(r'(<!-- B&S: Tip the Booktender -->.*?</a>)', src)
    src = src[:anchor.end()] + "\n                    " + block + src[anchor.end():]
    if "/* B&S: ai-ready quick answers */" not in src:
        src = src.replace("    </style>\n</head>", CSS + "    </style>\n</head>", 1)
    path.write_text(src, encoding="utf-8")
    print("updated", path.name)

if __name__ == "__main__":
    for name, cfg in PAGES.items():
        build(ROOT / name, cfg)
