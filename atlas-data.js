// B&S Atlas of Books: pin data. Edit this file to add or change pins; atlas.js reads it.
// RULES: every pin is a book's STATED setting (from our own book page/blurb or the publisher/major press, see "src").
// "area": true = the book names a region, not an exact address, so the pin sits inside the region (shown as a dashed ring).
// "page": our own page for the book. "bookstore.html" means the book only has a card in our bookstore (no dedicated page yet).
// "ebook": [Bookshop product path, ebook EAN] copied from zoltar-machine.js (format Bookshop uses for ebook share links). Omit if none.
// Buy link is always https://bookshop.org/a/125864/<ISBN13> (affiliate ID 125864).
window.bsAtlas = [
  { id: "dublin", name: "Dublin, Ireland", lng: -6.2603, lat: 53.3498, area: false, books: [
    { title: "All Them Dogs", author: "Djamel White", isbn: "9798217046676", cover: "atlas/cover-all-them-dogs.jpg",
      setting: "West Dublin", note: "A gangland thriller. Longlisted for the 2026 Booker Prize.",
      page: "book-all-them-dogs.html", ebook: ["all-them-dogs-a-novel-djamel-white/6a6a2065023a0448", "9798217046690"],
      src: "book-all-them-dogs.html (\"West Dublin gangland\")" },
    { title: "Ambivalence: An Education", author: "Brian Dillon", isbn: "9798896231103", cover: "atlas/cover-ambivalence.jpg",
      setting: "Dublin, late 1980s and 1990s", note: "A memoir of growing up on books and ideas.",
      page: "book-ambivalence.html", ebook: ["ambivalence-brian-dillon/5a7de895b7f5d04a", "9798896231110"],
      src: "book-ambivalence.html (\"Dublin in the late 1980s and 1990s\")" }
  ]},
  { id: "zurich", name: "Zurich, Switzerland", lng: 8.5417, lat: 47.3769, area: false, books: [
    { title: "Switzy", author: "Emma Cline", isbn: "9780593595244", cover: "atlas/cover-switzy.jpg",
      setting: "Zurich (the last stop), after London and France", note: "A last pilgrimage across Europe. Longlisted for the 2026 Booker Prize.",
      page: "book-switzy.html", ebook: ["switzy-a-novel-emma-cline/f5a588e2ff0bd8e0", "9780593595251"],
      src: "book-switzy.html (flight to a clinic in Zurich; dinner in London; friend in France)" }
  ]},
  { id: "stockholm", name: "Stockholm, Sweden", lng: 18.0686, lat: 59.3293, area: true, books: [
    { title: "The Sandman", author: "Lars Kepler", isbn: "9780525433057", cover: "atlas/cover-the-sandman.jpg",
      setting: "Outside Stockholm", note: "Swedish crime thriller, translated by Neil Smith.",
      page: "book-the-sandman.html", ebook: ["the-sandman-a-novel-lars-kepler/acc92d0235b6be2d", "9781524732257"],
      src: "book-the-sandman.html (\"Late one night outside Stockholm\")" }
  ]},
  { id: "positano", name: "Mongibello, Italy (made up)", lng: 14.4850, lat: 40.6281, area: true, books: [
    { title: "The Talented Mr. Ripley", author: "Patricia Highsmith", isbn: "9780393332148", cover: "atlas/cover-talented-mr-ripley.jpg",
      setting: "Mongibello, a made-up Italian coastal town (modeled on Positano)", note: "The pin sits on Positano, the real town Highsmith borrowed.",
      page: "book-talented-mr-ripley.html", ebook: ["the-talented-mr-ripley-patricia-highsmith/ad6d888cfdc8d4fa", "9780393344721"],
      src: "book-talented-mr-ripley.html (\"the Italian coast\"); Mongibello fictional, based on Positano: NYT T Magazine 2021-03-24, Condé Nast Traveler" }
  ]},
  { id: "como", name: "Lake Como, Italy", lng: 9.2570, lat: 45.9936, area: true, books: [
    { title: "The Plunge", author: "Lila Raicek", isbn: "9780778310600", cover: "atlas/cover-the-plunge.jpg",
      setting: "Manhattan to Lake Como, one summer", note: "A summer thriller of desire and betrayal.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"Manhattan to Lake Como\"); Kirkus, Library Journal" }
  ]},
  { id: "london-east", name: "East London, England", lng: -0.0300, lat: 51.5150, area: true, books: [
    { title: "Nova Scotia House", author: "Charlie Porter", isbn: "9781643622002", cover: "atlas/cover-nova-scotia-house.jpg",
      setting: "A London council block that never gets a real address", note: "Porter calls it \"a parallel universe\" very close to London. Tower Hamlets was his starting point.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"a London flat\"); Nightboat Books interview with Porter; World of Interiors (Dorset Estate, Tower Hamlets)" }
  ]},
  { id: "kent", name: "Kent coast, England", lng: 1.2000, lat: 51.1000, area: true, books: [
    { title: "The End of Everything", author: "M. John Harrison", isbn: "9798217438655", cover: "atlas/cover-the-end-of-everything.jpg",
      setting: "The coast of Kent, where a beachcomber works the Channel", note: "Shortlisted for the 2026 Booker Prize.",
      page: "book-the-end-of-everything.html", ebook: ["the-end-of-everything-visionary-and-brilliant-china-mieville-m-john-harrison/fe6e357926af029c", "9798217438679"],
      src: "booker-2026-shortlist.html (\"the coast of Kent\"); book-the-end-of-everything.html (\"the Channel\")" }
  ]},
  { id: "hebrides", name: "Outer Hebrides, Scotland", lng: -6.9000, lat: 57.9000, area: true, books: [
    { title: "John of John", author: "Douglas Stuart", isbn: "9780802167194", cover: "atlas/cover-john-of-john.jpg",
      setting: "A Calvinist island community in the Outer Hebrides", note: "Shortlisted for the 2026 Booker Prize.",
      page: "booker-2026-shortlist.html#9780802167194",
      src: "booker-2026-shortlist.html (\"a Calvinist island community in the Outer Hebrides\")" }
  ]},
  { id: "manhattan", name: "Manhattan, New York", lng: -73.9855, lat: 40.7580, area: false, books: [
    { title: "Carol", author: "Patricia Highsmith", isbn: "9780393325997", cover: "atlas/cover-carol.jpg",
      setting: "Midtown Manhattan, at a department store toy counter, 1950s", note: "First published in 1952 as The Price of Salt.",
      page: "book-carol.html", ebook: ["carol-patricia-highsmith/3d06ecb89c2ad4f7", "9780393345643"],
      src: "book-carol.html (department store clerk); Frankenberg's, Manhattan: Astra Magazine, Wikipedia (Carol film)" },
    { title: "Going Down in Gotham", author: "Zoe Hansen", isbn: "9798994335628", cover: "atlas/cover-going-down-in-gotham.jpg",
      setting: "Manhattan, 1980s, by way of London", note: "A memoir of MTV, heroin, and a madam's-eye view of the city.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"London to 1980s New York ... Manhattan\")" }
  ]},
  { id: "brooklyn", name: "Brooklyn, New York", lng: -73.9442, lat: 40.6782, area: false, books: [
    { title: "Pure Ox", author: "Mateo Askaripour", isbn: "9798217178995", cover: "atlas/cover-pure-ox.jpg",
      setting: "Brooklyn", note: "A sanitation worker, a secret manuscript, a book deal, and a strike.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"A Brooklyn sanitation worker\")" }
  ]},
  { id: "massachusetts", name: "Coastal Massachusetts, USA", lng: -70.7000, lat: 42.5000, area: true, books: [
    { title: "The Things We Never Say", author: "Elizabeth Strout", isbn: "9798217154746", cover: "atlas/cover-the-things-we-never-say.jpg",
      setting: "Coastal Massachusetts", note: "Shortlisted for the 2026 Booker Prize. Our blurb names the coast, not the town.",
      page: "booker-2026-shortlist.html#9798217154746",
      src: "booker-2026-shortlist.html (\"coastal Massachusetts\")" }
  ]},
  { id: "oklahoma", name: "Rural Oklahoma, USA", lng: -97.5000, lat: 35.5000, area: true, books: [
    { title: "The Housewives Underground", author: "Kaitlyn Tiffany", isbn: "9780593728628", cover: "atlas/cover-the-housewives-underground.jpg",
      setting: "Rural Oklahoma, where the book opens: the day the president was shot", note: "Nonfiction. The opening scene is two sisters at their TV trays.",
      page: "bookstore.html",
      src: "bookstore.html card excerpt (\"two sisters in rural Oklahoma\")" }
  ]},
  { id: "owens", name: "Owens Valley, California", lng: -118.2000, lat: 36.8000, area: true, books: [
    { title: "Aqua", author: "Chiara Barzini", isbn: "9781961884908", cover: "atlas/cover-aqua.jpg",
      setting: "The Los Angeles Aqueduct, from Owens Valley to the Salton Sea", note: "Water, Hollywood, and California's lost dreams. The pin marks where the aqueduct begins.",
      page: "bookstore.html",
      src: "bookstore.html card blurb; Unnamed Press (publisher page)" }
  ]},
  { id: "lee", name: "Lee County, Virginia", lng: -83.1043, lat: 36.6826, area: true, books: [
    { title: "Demon Copperhead", author: "Barbara Kingsolver", isbn: "9780063251984", cover: "atlas/cover-demon-copperhead.jpg",
      setting: "Lee County, in the Appalachian mountains of southwest Virginia", note: "The pin sits on Jonesville, the county seat.",
      page: "bookstore.html", ebook: ["demon-copperhead-a-novel-barbara-kingsolver/685df5a3bfc2305a", "9780063251991"],
      src: "Wikipedia (Demon Copperhead); Boston Globe; barbarakingsolver.com (southern Appalachia)" }
  ]},
  { id: "kingston", name: "Kingston, Jamaica", lng: -76.7936, lat: 17.9712, area: false, books: [
    { title: "The Disappearers", author: "Marlon James", isbn: "9780593717202", cover: "atlas/cover-the-disappearers.jpg",
      setting: "Kingston, Jamaica, the 1980s", note: "Shortlisted for the 2026 Booker Prize.",
      page: "booker-2026-shortlist.html#9780593717202",
      src: "booker-2026-shortlist.html (\"Kingston, Jamaica, the 1980s\")" }
  ]},
  { id: "tokyo", name: "Tokyo, Japan", lng: 139.6890, lat: 35.6830, area: true, books: [
    { title: "A Quiet Place", author: "Seichō Matsumoto", isbn: "9780593979082", cover: "atlas/cover-a-quiet-place.jpg",
      setting: "Tokyo, in a hillside neighborhood called Yoyogi (it opens on a business trip in the Kansai region)", note: "A postwar mystery about a wife's secret life.",
      page: "bookstore.html",
      src: "Bitter Lemon Press, Penguin Random House, East Asian Literature in Translation (Yoyogi, Tokyo)" }
  ]},
  { id: "hiroshima", name: "Hiroshima, Japan", lng: 132.4553, lat: 34.3853, area: false, books: [
    { title: "Hiroshima, 8:15: The Lost Memoir", author: "Kiyoshi Tanimoto", isbn: "9798217197972", cover: "atlas/cover-hiroshima-8-15.jpg",
      setting: "Hiroshima, the morning of August 6, 1945", note: "Nonfiction. A survivor's memoir of one morning.",
      page: "bookstore.html", ebook: ["what-divides-us-a-memoir-of-hiroshima-kiyoshi-tanimoto/ce9f3dc906283bdb", "9798217197996"],
      src: "bookstore.html card excerpt (\"The world's first atomic bomb had exploded in the sky above Hiroshima\")" }
  ]}
];
