#!/usr/bin/env python3
"""Parse every JSON-LD block and check @type / properties against the schema.org vocabulary
(including inherited properties). Usage: validate_jsonld.py schemaorg-current-https.jsonld *.html"""
import json, re, sys
voc = json.load(open(sys.argv[1]))["@graph"]
def ids(x): return [i["@id"] if isinstance(i, dict) else i for i in (x if isinstance(x, list) else [x])] if x else []
parents, domains, classes = {}, {}, set()
for n in voc:
    t = ids(n.get("@type")); i = n["@id"]
    if "rdfs:Class" in t: classes.add(i); parents[i] = ids(n.get("rdfs:subClassOf"))
    if "rdf:Property" in t:
        for d in ids(n.get("schema:domainIncludes")): domains.setdefault(i, set()).add(d)
def ancestors(c, seen=None):
    seen = seen or set()
    for p in parents.get(c, []):
        if p not in seen: seen.add(p); ancestors(p, seen)
    return seen | {c}
errors = 0
def check(node, where):
    global errors
    if isinstance(node, list):
        for x in node: check(x, where)
        return
    if not isinstance(node, dict): return
    if "@graph" in node: check(node["@graph"], where); return
    t = node.get("@type")
    if t:
        c = "schema:" + t
        if c not in classes: print(f"{where}: unknown type {t}"); errors += 1; return
        anc = ancestors(c)
        for k, v in node.items():
            if k.startswith("@"): continue
            p = "schema:" + k
            if p not in domains: print(f"{where}: unknown property {k}"); errors += 1
            elif not (domains[p] & anc): print(f"{where}: {k} not valid on {t}"); errors += 1
            check(v, where)
blocks = 0
for f in sys.argv[2:]:
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', open(f).read(), re.S):
        blocks += 1
        try: check(json.loads(m.group(1)), f)
        except json.JSONDecodeError as e: print(f, "PARSE ERROR", e); errors += 1
print(f"{blocks} JSON-LD blocks, {errors} problems"); sys.exit(1 if errors else 0)
