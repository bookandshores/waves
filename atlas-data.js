// B&S Atlas of Books: pin data. Edit this file to add or change pins; atlas.js reads it.
// RULES: every pin is a book's STATED setting (from our own book page/blurb or the publisher/major press, see "src").
// "area": true = the book names a region, not an exact address, so the pin sits inside the region (shown as a dashed ring).
// "page": our own page for the book. "bookstore.html" means the book only has a card in our bookstore (no dedicated page yet).
// "ebook": [Bookshop product path, ebook EAN] copied from zoltar-machine.js (format Bookshop uses for ebook share links). Omit if none.
// Buy link is always https://bookshop.org/a/125864/<ISBN13> (affiliate ID 125864).
window.bsAtlas = [
  { id: "dublin", name: "Dublin, Ireland", lng: -6.2603, lat: 53.3498, area: false, cc: "IE", cont: "Europe", reg: ["dublin", "leinster", "ireland"], books: [
    { title: "All Them Dogs", author: "Djamel White", isbn: "9798217046676", cover: "atlas/cover-all-them-dogs.jpg",
      setting: "West Dublin", note: "A gangland thriller. Longlisted for the 2026 Booker Prize.",
      page: "book-all-them-dogs.html", ebook: ["all-them-dogs-a-novel-djamel-white/6a6a2065023a0448", "9798217046690"],
      src: "book-all-them-dogs.html (\"West Dublin gangland\")" },
    { title: "Ambivalence: An Education", author: "Brian Dillon", isbn: "9798896231103", cover: "atlas/cover-ambivalence.jpg",
      setting: "Dublin, late 1980s and 1990s", note: "A memoir of growing up on books and ideas.",
      page: "book-ambivalence.html", ebook: ["ambivalence-brian-dillon/5a7de895b7f5d04a", "9798896231110"],
      src: "book-ambivalence.html (\"Dublin in the late 1980s and 1990s\")" }
  ]},
  { id: "zurich", name: "Zurich, Switzerland", lng: 8.5417, lat: 47.3769, area: false, cc: "CH", cont: "Europe", reg: ["zurich", "zürich", "switzerland"], books: [
    { title: "Switzy", author: "Emma Cline", isbn: "9780593595244", cover: "atlas/cover-switzy.jpg",
      setting: "Zurich (the last stop), after London and France", note: "A last pilgrimage across Europe. Longlisted for the 2026 Booker Prize.",
      page: "book-switzy.html", ebook: ["switzy-a-novel-emma-cline/f5a588e2ff0bd8e0", "9780593595251"],
      src: "book-switzy.html (flight to a clinic in Zurich; dinner in London; friend in France)" }
  ]},
  { id: "stockholm", name: "Stockholm, Sweden", lng: 18.0686, lat: 59.3293, area: true, cc: "SE", cont: "Europe", reg: ["stockholm"], books: [
    { title: "The Sandman", author: "Lars Kepler", isbn: "9780525433057", cover: "atlas/cover-the-sandman.jpg",
      setting: "Outside Stockholm", note: "Swedish crime thriller, translated by Neil Smith.",
      page: "book-the-sandman.html", ebook: ["the-sandman-a-novel-lars-kepler/acc92d0235b6be2d", "9781524732257"],
      src: "book-the-sandman.html (\"Late one night outside Stockholm\")" }
  ]},
  { id: "positano", name: "Mongibello, Italy (made up)", lng: 14.4850, lat: 40.6281, area: true, cc: "IT", cont: "Europe", reg: ["positano", "campania", "amalfi coast", "mongibello"], books: [
    { title: "The Talented Mr. Ripley", author: "Patricia Highsmith", isbn: "9780393332148", cover: "atlas/cover-talented-mr-ripley.jpg",
      setting: "Mongibello, a made-up Italian coastal town (modeled on Positano)", note: "The pin sits on Positano, the real town Highsmith borrowed.",
      page: "book-talented-mr-ripley.html", ebook: ["the-talented-mr-ripley-patricia-highsmith/ad6d888cfdc8d4fa", "9780393344721"],
      src: "book-talented-mr-ripley.html (\"the Italian coast\"); Mongibello fictional, based on Positano: NYT T Magazine 2021-03-24, Condé Nast Traveler" }
  ]},
  { id: "como", name: "Lake Como, Italy", lng: 9.2570, lat: 45.9936, area: true, cc: "IT", cont: "Europe", reg: ["como", "lake como", "lombardy", "lombardia"], books: [
    { title: "The Plunge", author: "Lila Raicek", isbn: "9780778310600", cover: "atlas/cover-the-plunge.jpg",
      setting: "Manhattan to Lake Como, one summer", note: "A summer thriller of desire and betrayal.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"Manhattan to Lake Como\"); Kirkus, Library Journal" }
  ]},
  { id: "london-east", name: "East London, England", lng: -0.0300, lat: 51.5150, area: true, cc: "GB", cont: "Europe", reg: ["london", "east london", "greater london", "england"], books: [
    { title: "Nova Scotia House", author: "Charlie Porter", isbn: "9781643622002", cover: "atlas/cover-nova-scotia-house.jpg",
      setting: "A London council block that never gets a real address", note: "Porter calls it \"a parallel universe\" very close to London. Tower Hamlets was his starting point.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"a London flat\"); Nightboat Books interview with Porter; World of Interiors (Dorset Estate, Tower Hamlets)" }
  ]},
  { id: "kent", name: "Kent coast, England", lng: 1.2000, lat: 51.1000, area: true, cc: "GB", cont: "Europe", reg: ["kent", "england"], books: [
    { title: "The End of Everything", author: "M. John Harrison", isbn: "9798217438655", cover: "atlas/cover-the-end-of-everything.jpg",
      setting: "The coast of Kent, where a beachcomber works the Channel", note: "Shortlisted for the 2026 Booker Prize.",
      page: "book-the-end-of-everything.html", ebook: ["the-end-of-everything-visionary-and-brilliant-china-mieville-m-john-harrison/fe6e357926af029c", "9798217438679"],
      src: "booker-2026-shortlist.html (\"the coast of Kent\"); book-the-end-of-everything.html (\"the Channel\")" }
  ]},
  { id: "hebrides", name: "Outer Hebrides, Scotland", lng: -6.9000, lat: 57.9000, area: true, cc: "GB", cont: "Europe", reg: ["outer hebrides", "hebrides", "western isles", "scotland"], books: [
    { title: "John of John", author: "Douglas Stuart", isbn: "9780802167194", cover: "atlas/cover-john-of-john.jpg",
      setting: "A Calvinist island community in the Outer Hebrides", note: "Shortlisted for the 2026 Booker Prize.",
      page: "booker-2026-shortlist.html#9780802167194",
      src: "booker-2026-shortlist.html (\"a Calvinist island community in the Outer Hebrides\")" }
  ]},
  { id: "manhattan", name: "Manhattan, New York", lng: -73.9855, lat: 40.7580, area: false, cc: "US", cont: "North America", reg: ["manhattan", "new york", "new york city", "nyc", "new york county"], books: [
    { title: "Carol", author: "Patricia Highsmith", isbn: "9780393325997", cover: "atlas/cover-carol.jpg",
      setting: "Midtown Manhattan, at a department store toy counter, 1950s", note: "First published in 1952 as The Price of Salt.",
      page: "book-carol.html", ebook: ["carol-patricia-highsmith/3d06ecb89c2ad4f7", "9780393345643"],
      src: "book-carol.html (department store clerk); Frankenberg's, Manhattan: Astra Magazine, Wikipedia (Carol film)" },
    { title: "Going Down in Gotham", author: "Zoe Hansen", isbn: "9798994335628", cover: "atlas/cover-going-down-in-gotham.jpg",
      setting: "Manhattan, 1980s, by way of London", note: "A memoir of MTV, heroin, and a madam's-eye view of the city.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"London to 1980s New York ... Manhattan\")" }
  ]},
  { id: "brooklyn", name: "Brooklyn, New York", lng: -73.9442, lat: 40.6782, area: false, cc: "US", cont: "North America", reg: ["brooklyn", "kings county", "new york", "new york city", "nyc"], books: [
    { title: "Pure Ox", author: "Mateo Askaripour", isbn: "9798217178995", cover: "atlas/cover-pure-ox.jpg",
      setting: "Brooklyn", note: "A sanitation worker, a secret manuscript, a book deal, and a strike.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"A Brooklyn sanitation worker\")" }
  ]},
  { id: "massachusetts", name: "Coastal Massachusetts, USA", lng: -70.7000, lat: 42.5000, area: true, cc: "US", cont: "North America", reg: ["massachusetts", "cape ann", "new england"], books: [
    { title: "The Things We Never Say", author: "Elizabeth Strout", isbn: "9798217154746", cover: "atlas/cover-the-things-we-never-say.jpg",
      setting: "Coastal Massachusetts", note: "Shortlisted for the 2026 Booker Prize. Our blurb names the coast, not the town.",
      page: "booker-2026-shortlist.html#9798217154746",
      src: "booker-2026-shortlist.html (\"coastal Massachusetts\")" }
  ]},
  { id: "oklahoma", name: "Rural Oklahoma, USA", lng: -97.5000, lat: 35.5000, area: true, cc: "US", cont: "North America", reg: ["oklahoma"], books: [
    { title: "The Housewives Underground", author: "Kaitlyn Tiffany", isbn: "9780593728628", cover: "atlas/cover-the-housewives-underground.jpg",
      setting: "Rural Oklahoma, where the book opens: the day the president was shot", note: "Nonfiction. The opening scene is two sisters at their TV trays.",
      page: "bookstore.html",
      src: "bookstore.html card excerpt (\"two sisters in rural Oklahoma\")" }
  ]},
  { id: "owens", name: "Owens Valley, California", lng: -118.2000, lat: 36.8000, area: true, cc: "US", cont: "North America", reg: ["owens valley", "inyo county", "california"], books: [
    { title: "Aqua", author: "Chiara Barzini", isbn: "9781961884908", cover: "atlas/cover-aqua.jpg",
      setting: "The Los Angeles Aqueduct, from Owens Valley to the Salton Sea", note: "Water, Hollywood, and California's lost dreams. The pin marks where the aqueduct begins.",
      page: "bookstore.html",
      src: "bookstore.html card blurb; Unnamed Press (publisher page)" }
  ]},
  { id: "lee", name: "Lee County, Virginia", lng: -83.1043, lat: 36.6826, area: true, cc: "US", cont: "North America", reg: ["lee county", "virginia", "appalachia"], books: [
    { title: "Demon Copperhead", author: "Barbara Kingsolver", isbn: "9780063251984", cover: "atlas/cover-demon-copperhead.jpg",
      setting: "Lee County, in the Appalachian mountains of southwest Virginia", note: "The pin sits on Jonesville, the county seat.",
      page: "bookstore.html", ebook: ["demon-copperhead-a-novel-barbara-kingsolver/685df5a3bfc2305a", "9780063251991"],
      src: "Wikipedia (Demon Copperhead); Boston Globe; barbarakingsolver.com (southern Appalachia)" }
  ]},
  { id: "kingston", name: "Kingston, Jamaica", lng: -76.7936, lat: 17.9712, area: false, cc: "JM", cont: "North America", reg: ["kingston", "jamaica", "caribbean"], books: [
    { title: "The Disappearers", author: "Marlon James", isbn: "9780593717202", cover: "atlas/cover-the-disappearers.jpg",
      setting: "Kingston, Jamaica, the 1980s", note: "Shortlisted for the 2026 Booker Prize.",
      page: "booker-2026-shortlist.html#9780593717202",
      src: "booker-2026-shortlist.html (\"Kingston, Jamaica, the 1980s\")" }
  ]},
  { id: "tokyo", name: "Tokyo, Japan", lng: 139.6890, lat: 35.6830, area: true, cc: "JP", cont: "Asia", reg: ["tokyo", "kanto", "yoyogi"], books: [
    { title: "A Quiet Place", author: "Seichō Matsumoto", isbn: "9780593979082", cover: "atlas/cover-a-quiet-place.jpg",
      setting: "Tokyo, in a hillside neighborhood called Yoyogi (it opens on a business trip in the Kansai region)", note: "A postwar mystery about a wife's secret life.",
      page: "bookstore.html",
      src: "Bitter Lemon Press, Penguin Random House, East Asian Literature in Translation (Yoyogi, Tokyo)" }
  ]},
  { id: "hiroshima", name: "Hiroshima, Japan", lng: 132.4553, lat: 34.3853, area: false, cc: "JP", cont: "Asia", reg: ["hiroshima"], books: [
    { title: "Hiroshima, 8:15: The Lost Memoir", author: "Kiyoshi Tanimoto", isbn: "9798217197972", cover: "atlas/cover-hiroshima-8-15.jpg",
      setting: "Hiroshima, the morning of August 6, 1945", note: "Nonfiction. A survivor's memoir of one morning.",
      page: "bookstore.html", ebook: ["what-divides-us-a-memoir-of-hiroshima-kiyoshi-tanimoto/ce9f3dc906283bdb", "9798217197996"],
      src: "bookstore.html card excerpt (\"The world's first atomic bomb had exploded in the sky above Hiroshima\")" }
  ]}
  ,
  /* ---- Gothic October route (see window.bsRoutes below) ----
     Classics have no page on our site yet, so they carry "srcUrl" (a setting source) instead of "page".
     Covers for the public-domain classics are real first-edition covers or title pages from Wikimedia Commons (public domain);
     filenames are listed in atlas/CREDITS.txt. Buy links point at a current Penguin Classics / OWC paperback ISBN. */
  { id: "otranto", name: "Otranto, Italy (the castle is made up)", lng: 18.4897, lat: 40.1469, area: true, cc: "IT", cont: "Europe", reg: ["otranto", "apulia", "puglia", "lecce"], books: [
    { title: "The Castle of Otranto", author: "Horace Walpole", year: 1764, isbn: "9780140437676", cover: "atlas/cover-otranto.jpg",
      setting: "A haunted castle at \"Otranto\" in the Kingdom of Naples", note: "Usually called the first Gothic novel. The castle is invented, Walpole took the name from a map of Naples.",
      srcUrl: "https://kids.britannica.com/scholars/article/The-Castle-of-Otranto/484203",
      src: "Britannica (Castle of Otranto): fictional castle named from a map of Naples; 1764. Cover: 1764 title page, Wikimedia Commons, public domain." }
  ]},
  { id: "geneva", name: "Geneva, Switzerland", lng: 6.1432, lat: 46.2044, area: false, cc: "CH", cont: "Europe", reg: ["geneva", "geneve", "genève", "switzerland"], books: [
    { title: "Frankenstein", author: "Mary Shelley", year: 1818, isbn: "9780141439471", cover: "atlas/cover-frankenstein.jpg",
      setting: "Geneva, Victor's family home, then Ingolstadt, the Alps and the Arctic", note: "Shelley began it near Geneva in the summer of 1816.",
      srcUrl: "https://www.britannica.com/topic/Frankenstein-novel",
      src: "Britannica (Frankenstein): Victor raised in Geneva; written at Lake Geneva 1816. Cover: 1818 title page, Wikimedia Commons, public domain." }
  ]},
  { id: "thornfield", name: "Derbyshire, England (Thornfield is made up)", lng: -1.6527, lat: 53.3277, area: true, cc: "GB", cont: "Europe", reg: ["derbyshire", "hathersage", "peak district", "england"], books: [
    { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, isbn: "9780141441146", cover: "atlas/cover-jane-eyre.jpg",
      setting: "Thornfield Hall, an invented house in the English Midlands", note: "The pin sits at Hathersage, near North Lees Hall, the model most often suggested. Other houses are suggested too.",
      srcUrl: "https://en.wikipedia.org/wiki/Thornfield_Hall",
      src: "Wikipedia (Thornfield Hall); Peak District National Park (North Lees Hall); Derbyshire HER. Fictional house, model is tradition not proof. Cover: 1847 title page, Wikimedia Commons, public domain." }
  ]},
  { id: "yorkshire", name: "Yorkshire moors, England", lng: -1.9600, lat: 53.8300, area: true, cc: "GB", cont: "Europe", reg: ["yorkshire", "west yorkshire", "north yorkshire", "haworth", "england"], books: [
    { title: "Wuthering Heights", author: "Emily Brontë", year: 1847, isbn: "9780141439556", cover: "atlas/cover-wuthering-heights.jpg",
      setting: "The Yorkshire moors, at Wuthering Heights and Thrushcross Grange", note: "Both houses are invented. The pin sits on the moors near Haworth, where the Brontës lived.",
      srcUrl: "https://en.wikipedia.org/wiki/Wuthering_Heights",
      src: "Wikipedia (Wuthering Heights): set on the Yorkshire moors; houses fictional. Cover: 1847 first edition, Houghton Library via Wikimedia Commons, public domain." }
  ]},
  { id: "london-gothic", name: "London, England", lng: -0.1365, lat: 51.5136, area: true, cc: "GB", cont: "Europe", reg: ["london", "greater london", "england"], books: [
    { title: "The Strange Case of Dr Jekyll and Mr Hyde", author: "Robert Louis Stevenson", year: 1886, isbn: "9780141439730", cover: "atlas/cover-jekyll-hyde.jpg",
      setting: "Fog-bound Victorian London", note: "Penguin's edition also has Olalla and The Body Snatcher.",
      srcUrl: "https://www.penguin.co.uk/books/54791/the-strange-case-of-dr-jekyll-and-mr-hyde-and-other-tales-of-terror-by-robert-louis-stevenson-ed--robert-mighall/9780141439730",
      src: "Penguin Classics page: \"the hunt through fog-bound London\". Cover: 1886 title page, UCLA copy via Wikimedia Commons, public domain." },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890, isbn: "9780141439570", cover: "atlas/cover-dorian-gray.jpg",
      setting: "Victorian London, from Mayfair drawing rooms to the docks", note: "Serialized in 1890, published as a book in 1891.",
      srcUrl: "https://en.wikipedia.org/wiki/The_Picture_of_Dorian_Gray",
      src: "Wikipedia (The Picture of Dorian Gray): set in London. Cover: 1891 book cover, Houghton Library via Wikimedia Commons, public domain." }
  ]},
  { id: "whitby", name: "Whitby, England", lng: -0.6206, lat: 54.4858, area: false, cc: "GB", cont: "Europe", reg: ["whitby", "north yorkshire", "yorkshire", "england"], books: [
    { title: "Dracula", author: "Bram Stoker", year: 1897, isbn: "9780141439846", cover: "atlas/cover-dracula.jpg",
      setting: "Whitby, where the Demeter runs aground (the book also opens in Transylvania)", note: "Stoker stayed in Whitby in the summer of 1890. Chapters VI to VIII are set there.",
      srcUrl: "https://whitbymuseum.org.uk/bram-stokers-signature-in-the-museum-visitor-book/",
      src: "Whitby Museum (Stoker's 1890 visit; chapters VI-VIII set in Whitby). Cover: 1897 first edition, Wikimedia Commons, public domain." }
  ]},
  { id: "kerry", name: "County Kerry, Ireland (Ballycrea is made up)", lng: -9.5500, lat: 52.1500, area: true, cc: "IE", cont: "Europe", reg: ["kerry", "county kerry", "munster", "ireland"], books: [
    { title: "Heap Earth Upon It", author: "Chloe Michelle Howarth", year: 2026, isbn: "9781685892531", cover: "atlas/cover-heap-earth-upon-it.jpg",
      setting: "Ballycrea, an invented village in County Kerry, January 1965", note: "A rural Gothic about siblings, secrets and a village that watches.",
      page: "bookstore.html",
      src: "Irish Times review (set in 1965 in Ballycrea, Co Kerry); GCN interview (\"rural Gothic\"); Penguin Random House page (\"Gothic, lush, and suspenseful\"). Cover: our own HEAP.png." }
  ]}
  ,
  /* ---- Added with the place search (v1.2). Same rules: stated settings only, sources cited in "src". ---- */
  { id: "orkney", name: "Orkney, Scotland", lng: -3.2976, lat: 58.9646, area: true, cc: "GB", cont: "Europe", reg: ["orkney","orkney islands","stromness","scotland"], books: [
    { title: "Air", author: "Christian Kracht (trans. Daniel Bowles)", year: 2026, isbn: "9781324094586", cover: "atlas/cover-air.jpg",
      setting: "A remote island in the Orkney archipelago (the narrator's home in Stromness); a data center near Stavanger, Norway, also figures", note: "A novel of data, isolation and the end of silence.",
      page: "bookstore.html",
      src: "Guardian review; W. W. Norton; WSJ review (Orkney home in Stromness). Pin sits on Orkney; the Norway data center is not pinned." }
  ]},
  { id: "sonora", name: "Sonora, Mexico", lng: -111.0, lat: 29.8, area: true, cc: "MX", cont: "North America", reg: ["sonora","sonoran desert","mexico","seri"], books: [
    { title: "The Ego Trip: Psychedelic Toads, a Trail of Deaths, and the Guru Who Peddled Transcendence", author: "Kimon de Greef", year: 2026, isbn: "9780385550246", cover: "atlas/cover-the-ego-trip.jpg",
      setting: "The Sonoran Desert of northern Mexico, where the guru's toad-venom ceremonies were held", note: "Nonfiction. Follows the psychedelic-toad trail and its dead.",
      page: "bookstore.html",
      src: "Penguin Random House page; The Border Chronicle; Guardian review (Sonora, Mexico)" }
  ]},
  { id: "monterey", name: "Monterey Bay, California", lng: -121.9017, lat: 36.6177, area: true, cc: "US", cont: "North America", reg: ["monterey","monterey bay","monterey county","california","cannery row","central coast"], books: [
    { title: "Tin Can Coast", author: "Joseph Ogilvy", isbn: "9781639736812", cover: "atlas/cover-tin-can-coast.jpg",
      setting: "The California coast around Monterey and its sardine canneries", note: "A history of the coast that fed, and then ate, its own fishery.",
      page: "bookstore.html",
      src: "Bloomsbury page; WSJ review (Monterey / Cannery Row, California coast)" }
  ]},
  { id: "congo", name: "Congo River, DR Congo", lng: 25.19, lat: 0.52, area: true, cc: "CD", cont: "Africa", reg: ["congo","congo river","democratic republic of the congo","dr congo","kisangani","stanley falls","africa"], books: [
    { title: "Heart of Darkness and the Congo Diary", author: "Joseph Conrad", year: 1899, isbn: "9780141441672", cover: "atlas/cover-heart-of-darkness.jpg",
      setting: "A steamer up the Congo River in the Congo Free State (the book never names the river; Conrad made the trip in 1890). The pin sits at Kisangani, near the Inner Station.", note: "A public-domain classic. Cover: the 1899 Blackwood's Magazine issue where it first ran.",
      srcUrl: "https://kids.britannica.com/scholars/article/Heart-of-Darkness/485080",
      src: "Britannica (Congo River, Belgian company); Read the Places (Matadi to Stanley Falls / Kisangani route); EBSCO Research Starters (Conrad's 1890 Congo trip). Penguin Classics ISBN checked on Open Library." }
  ]},
  { id: "tobago", name: "Orinoco delta, off Venezuela (Crusoe's island is made up)", lng: -60.7, lat: 11.2, area: true, cc: "TT", cont: "South America", reg: ["tobago","trinidad","trinidad and tobago","orinoco","venezuela","caribbean","brazil","bahia"], books: [
    { title: "Robinson Crusoe", author: "Daniel Defoe", year: 1719, isbn: "9780141439822", cover: "atlas/cover-robinson-crusoe.jpg",
      setting: "An uninhabited island \"on the coast of America, near the mouth of the great river Oroonoque\", with Trinidad to its west. Tobago is the usual real-world match. Crusoe's plantation years are in Brazil.", note: "A public-domain classic. Cover: the 1719 first-edition frontispiece and title page.",
      srcUrl: "https://kids.britannica.com/scholars/article/Robinson-Crusoe/486430",
      src: "Defoe's own title page and text (Orinoco, Trinidad to the W/NW); Britannica; Wikipedia, Tobago (\"roughly matches the island in Robinson Crusoe\")" }
  ]}
];

/* Seasonal routes. A route is an ordered list of place ids, drawn as a numbered path.
   Deep link: atlas.html#<id>. */
window.bsRoutes = [
  { id: "gothic-october", name: "Gothic October",
    blurb: "Seven stops, eight books, oldest to newest. Lock the door first.",
    stops: ["otranto", "geneva", "thornfield", "yorkshire", "london-gothic", "whitby", "kerry"] }
];
