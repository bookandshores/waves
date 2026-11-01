#!/usr/bin/env python3
"""Tell Bing (and the other IndexNow engines: Yandex, Naver, Seznam, Yep, Amazon) that pages changed.

Run only AFTER the change is merged and live, from the repo root:
    python3 scripts/indexnow_submit.py              # every URL in sitemap.xml + sitemap-atlas.xml
    python3 scripts/indexnow_submit.py --dry-run    # print what would be sent
    python3 scripts/indexnow_submit.py URL [URL...] # just these
The key file (<key>.txt at the site root) must be live first. HTTP 200 or 202 means accepted.
"""
import json, re, sys, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HOST = "bookandshores.com"
KEY = next(p.stem for p in ROOT.glob("*.txt") if re.fullmatch(r"[0-9a-f]{32}", p.stem) and p.read_text().strip() == p.stem)

def sitemap_urls():
    urls = []
    for f in ("sitemap.xml", "sitemap-atlas.xml"):
        p = ROOT / f
        if p.exists():
            urls += re.findall(r"<loc>([^<]+)</loc>", p.read_text())
    return list(dict.fromkeys(urls))

def main():
    args = [a for a in sys.argv[1:] if a != "--dry-run"]
    urls = args or sitemap_urls()
    body = {"host": HOST, "key": KEY, "keyLocation": f"https://{HOST}/{KEY}.txt", "urlList": urls}
    if "--dry-run" in sys.argv:
        print(json.dumps(body, indent=2)); return
    req = urllib.request.Request("https://api.indexnow.org/indexnow", data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json; charset=utf-8"}, method="POST")
    with urllib.request.urlopen(req, timeout=30) as r:
        print(r.status, f"{len(urls)} URLs submitted")

if __name__ == "__main__":
    main()
