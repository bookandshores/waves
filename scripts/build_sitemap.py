#!/usr/bin/env python3
"""Regenerate sitemap.xml for bookandshores.com.

Lists every public top-level *.html page, using the .html URL form that the
existing canonical tags use (the homepage is "/"). <lastmod> is the date of the
last git commit that touched each page.

Excluded: dl-*.html private download pages, google*.html Search Console
verification files, 404 pages, the legacy BookandShores/ folder, and any page
carrying a robots noindex meta tag.

Usage (from the repo root):  python3 scripts/build_sitemap.py
"""
import re
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape

SITE = "https://bookandshores.com"
ROOT = Path(__file__).resolve().parent.parent
NOINDEX = re.compile(r'<meta[^>]+name=["\']robots["\'][^>]+noindex', re.I)


def excluded(p: Path) -> bool:
    n = p.name
    if n.startswith("dl-") or n.startswith("google") or n.startswith("404"):
        return True
    return bool(NOINDEX.search(p.read_text(encoding="utf-8", errors="ignore")))


def lastmod(p: Path) -> str:
    out = subprocess.run(
        ["git", "log", "-1", "--format=%cs", "--", p.name],
        cwd=ROOT, capture_output=True, text=True,
    ).stdout.strip()
    return out


def main() -> None:
    pages = sorted(p for p in ROOT.glob("*.html") if not excluded(p))
    # Homepage first, then the rest alphabetically.
    pages.sort(key=lambda p: (p.name != "index.html", p.name))
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for p in pages:
        loc = f"{SITE}/" if p.name == "index.html" else f"{SITE}/{p.name}"
        lines.append("  <url>")
        lines.append(f"    <loc>{escape(loc)}</loc>")
        mod = lastmod(p)
        if mod:
            lines.append(f"    <lastmod>{mod}</lastmod>")
        lines.append("  </url>")
    lines.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"sitemap.xml: {len(pages)} URLs")


if __name__ == "__main__":
    main()
