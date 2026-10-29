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
      src: "bookstore.html card blurb (\"London to 1980s New York ... Manhattan\")" },
    { title: "Office Politics", author: "Wilfrid Sheed", year: 1966, isbn: "9781961341180", cover: "atlas/cover-office-politics.jpg",
      setting: "A drab office on the east side of Manhattan: the staff of The Outsider, a small highbrow weekly, 1960s", note: "A McNally Editions reissue of the 1966 novel, and one of the books Jonathan Lethem champions as our Author of the Month for November 2026.",
      page: "author-of-the-month.html#9781961341180",
      src: "author-of-the-month.html (Lethem's Office Politics pick); Electric Literature, \"Wilfrid Sheed's Office Politics Reconsidered\" (the office is \"somewhere on the east side of Manhattan\"); McNally Editions (publisher page: a satire of 1960s intellectual New York, set at the magazine The Outsider)" }
  ]},
  { id: "brooklyn", name: "Brooklyn, New York", lng: -73.9442, lat: 40.6782, area: false, cc: "US", cont: "North America", reg: ["brooklyn", "kings county", "new york", "new york city", "nyc"], books: [
    { title: "Pure Ox", author: "Mateo Askaripour", isbn: "9798217178995", cover: "atlas/cover-pure-ox.jpg",
      setting: "Brooklyn", note: "A sanitation worker, a secret manuscript, a book deal, and a strike.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"A Brooklyn sanitation worker\")" },
    { title: "US v. THEM", author: "Ronen Givony", year: 2026, isbn: "9781419775260", cover: "atlas/cover-us-v-them.jpg",
      setting: "Brooklyn, mainly the Williamsburg and Greenpoint waterfront scene, 2004\u20132014", note: "Nonfiction: an oral-style history of the indie-music decade in New York. Pinned because the book is about one place, Brooklyn.",
      page: "bookstore.html",
      src: "Abrams (publisher page: Us v. Them, the Brooklyn indie-music scene 2004\u20132014); Brooklyn Magazine interview (Mar. 24, 2026); Library Journal review" },
    { title: "Motherless Brooklyn", author: "Jonathan Lethem", year: 1999, isbn: "9780375724831", cover: "atlas/cover-motherless-brooklyn.jpg",
      setting: "Brooklyn: a Tourettic private eye and the orphans of Frank Minna's agency", note: "Won the 1999 National Book Critics Circle Award for fiction. Jonathan Lethem is our Author of the Month for November 2026.",
      page: "author-of-the-month.html",
      src: "author-of-the-month.html (\"a Brooklyn orphan with Tourette's\"); Wikipedia (Motherless Brooklyn): Lionel Essrog and the Minna Men are orphans from Brooklyn; NBCC Award 1999" }
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
  ]},
  /* ---- Added with the bookstore-catalog batch (branch bs/atlas-prize-pins). Same rules: stated settings only, sources cited in "src". ---- */
  { id: "iowa-city", name: "Iowa City, Iowa", lng: -91.5302, lat: 41.6611, area: false, cc: "US", cont: "North America", reg: ["iowa city", "iowa", "johnson county", "midwest"], books: [
    { title: "Small Rain", author: "Garth Greenwell", year: 2024, isbn: "9781250397508", cover: "atlas/cover-small-rain.jpg",
      setting: "Iowa City, in a hospital ER and ICU, six months into the Covid pandemic", note: "A poet's two weeks in intensive care, told with tenderness and a partner waiting at home.",
      page: "bookstore.html",
      src: "The Atlantic review (a hospital in Iowa City); WSJ review (a poet in Iowa City, six months into the pandemic); Guardian review (first Greenwell novel set in the US, a hospital in Iowa)" }
  ]},
  { id: "hollywood", name: "Hollywood, Los Angeles", lng: -118.3267, lat: 34.1016, area: true, cc: "US", cont: "North America", reg: ["hollywood", "los angeles", "la", "california", "los angeles county"], books: [
    { title: "Black Dahlia", author: "William J. Mann", year: 2026, isbn: "9781668075906", cover: "atlas/cover-black-dahlia.jpg",
      setting: "Los Angeles, 1946 to 1947: the Hollywood streets where Elizabeth Short struggled, and the vacant lot where she was found", note: "True crime that gives the victim her dignity back and takes apart the old lesbian-murder myth.",
      page: "bookstore.html",
      src: "Simon & Schuster (publisher page: the 1947 murder, midcentury Hollywood); Kirkus review (January 15, 1947, Los Angeles; the seedier streets of Hollywood in the '40s); Cinesaurus Rex interview with Mann (the \"lesbian theory\" as homophobic myth)" }
  ]},
  { id: "harlem", name: "Harlem, New York", lng: -73.9465, lat: 40.8116, area: true, cc: "US", cont: "North America", reg: ["harlem", "sugar hill", "new york", "new york city", "nyc", "manhattan"], books: [
    { title: "Cool Machine", author: "Colson Whitehead", year: 2026, isbn: "9780385550505", cover: "atlas/cover-cool-machine.jpg",
      setting: "Harlem, 1981 to 1986, roving across the whole city from Windows on the World to Sugar Hill", note: "Last of the Harlem Trilogy. A Kirkus Prize finalist.",
      page: "bookstore.html",
      src: "Penguin Random House page (1980s New York, \"up in Harlem\"); Wikipedia (Cool Machine: set in Harlem, NYC); Penn Libraries catalog (Harlem (New York, N.Y.)--Fiction); Kirkus (Kirkus Prize finalist)" }
  ]},
  { id: "upper-east-side", name: "Upper East Side, Manhattan", lng: -73.9566, lat: 40.7736, area: true, cc: "US", cont: "North America", reg: ["upper east side", "manhattan", "new york", "new york city", "nyc"], books: [
    { title: "Chronic City", author: "Jonathan Lethem", year: 2009, isbn: "9780307277527", cover: "atlas/cover-chronic-city.jpg",
      setting: "The Upper East Side of Manhattan, in a foggy, surreal city with a tiger on the loose", note: "A former child star and a paranoid pop-culture critic wander a strange New York.",
      page: "author-of-the-month.html",
      src: "author-of-the-month.html (\"a foggy, surreal Manhattan with a tiger on the loose\"); Wikipedia (Chronic City): Lethem said it is \"set on the Upper East Side of Manhattan\"" }
  ]},
  { id: "boerum-hill", name: "Boerum Hill, Brooklyn", lng: -73.9857, lat: 40.686, area: true, cc: "US", cont: "North America", reg: ["boerum hill", "dean street", "gowanus", "brooklyn", "kings county", "new york", "new york city", "nyc"], books: [
    { title: "The Fortress of Solitude", author: "Jonathan Lethem", year: 2003, isbn: "9780375724886", cover: "atlas/cover-fortress-of-solitude.jpg",
      setting: "Boerum Hill, Brooklyn, in the 1970s: two boys on the same block", note: "Funk, graffiti, superheroes and a friendship that breaks your heart a little.",
      page: "author-of-the-month.html",
      src: "author-of-the-month.html (\"the same 1970s Brooklyn block\"); Wikipedia (The Fortress of Solitude; Jonathan Lethem): the two friends grow up on the same block in Boerum Hill" },
    { title: "Brooklyn Crime Novel", author: "Jonathan Lethem", year: 2023, isbn: "9780062938817", cover: "atlas/cover-brooklyn-crime-novel.jpg",
      setting: "Dean Street, Brooklyn, over more than fifty years", note: "One block, fifty years, and the kids who grew up on it. The pin sits in Boerum Hill, where Dean Street runs.",
      page: "author-of-the-month.html",
      src: "author-of-the-month.html (\"more than fifty years of one Brooklyn neighborhood\"); HarperCollins page (blurb: \"If Dean Street could talk, Brooklyn Crime Novel would be its voice ... a half-century of Brooklyn's dirt\")" }
  ]},
  { id: "oakland", name: "Oakland, California", lng: -122.2712, lat: 37.8044, area: true, cc: "US", cont: "North America", reg: ["oakland", "san francisco", "bay area", "alameda county", "california"], books: [
    { title: "Gun, with Occasional Music", author: "Jonathan Lethem", year: 1994, isbn: "9780156028974", cover: "atlas/cover-gun-occasional-music.jpg",
      setting: "A near-future version of Oakland and San Francisco", note: "Noir, but weirder: a private eye, a rabbit in his waiting room and a kangaroo on his tail.",
      page: "author-of-the-month.html",
      src: "author-of-the-month.html (\"a private eye in near-future Oakland\"); Wikipedia (Gun, with Occasional Music): a futuristic San Francisco and Oakland" }
  ]},
  { id: "ithaca", name: "Ithaca, New York", lng: -76.4966, lat: 42.444, area: false, cc: "US", cont: "North America", reg: ["ithaca", "tompkins county", "finger lakes", "new york", "upstate new york"], books: [
    { title: "Moosewood Cookbook", author: "Mollie Katzen", year: 1977, isbn: "9781607747390", cover: "atlas/cover-moosewood.jpg",
      setting: "Moosewood Restaurant, Ithaca, where the recipes were cooked", note: "A cookbook, not a novel. Hand-lettered recipes from a collective kitchen in Ithaca.",
      page: "bookstore.html", ebook: ["the-moosewood-cookbook-40th-anniversary-edition-mollie-katzen/6981e1bb1d37ef2e", "9781607747406"],
      src: "Wikipedia (Mollie Katzen; Moosewood Restaurant): Katzen helped build Moosewood Restaurant in Ithaca in 1972-73 and The Moosewood Cookbook grew out of it; the restaurant is in Ithaca, New York" }
  ]},
  { id: "somerset", name: "Somerset, England", lng: -2.8, lat: 51.1, area: true, cc: "GB", cont: "Europe", reg: ["somerset", "west country", "england", "bristol"], books: [
    { title: "The Land in Winter", author: "Andrew Miller", year: 2024, isbn: "9798889661566", cover: "atlas/cover-land-in-winter.jpg",
      setting: "Somerset, in the West Country, December 1962 to February 1963 (the Big Freeze)", note: "Two neighboring couples, one dairy farm and a winter that will not end. Shortlisted for the 2025 Booker Prize.",
      page: "bookstore.html",
      src: "The Booker Prizes (book page: December 1962, the West Country; shortlisted for the Booker Prize 2025); Booker reading guide (Bill and Rita Simmons moved to Somerset from London); Hachette UK (Somerset, Bristol)" }
  ]},
  { id: "london-thames", name: "London, along the Thames", lng: -0.1, lat: 51.505, area: true, cc: "GB", cont: "Europe", reg: ["london", "greater london", "thames", "england"], books: [
    { title: "The Palm House", author: "Gwendoline Riley", year: 2026, isbn: "9798896230526", cover: "atlas/cover-palm-house.jpg",
      setting: "London: a pub by the Thames and the literary magazine offices around it", note: "Longlisted for the 2026 Booker Prize. Friends, grief and a hostile takeover of a magazine.",
      page: "bookstore.html",
      src: "The Booker Prizes (book page: long evenings in an ancient pub by the Thames; judges: \"rarefied London intellectual spaces\"; longlisted for the Booker Prize 2026)" },
    { title: "1984", author: "George Orwell", year: 1949, isbn: "9780451524935", cover: "atlas/cover-1984.jpg",
      setting: "London, chief city of Airstrip One, where Winston Smith works at the Ministry of Truth", note: "Britain renamed Airstrip One, in the superstate of Oceania.",
      page: "bookstore.html",
      src: "Wikipedia (Nineteen Eighty-Four): Winston Smith works at the Ministry of Truth in London; Great Britain is now Airstrip One, a province of Oceania" }
  ]},
  { id: "north-atlantic", name: "The North Atlantic (the transatlantic cable)", lng: -32, lat: 50.2, area: true, cc: "", cont: "Atlantic Ocean", reg: ["north atlantic", "north atlantic ocean", "atlantic", "atlantic ocean", "transatlantic", "at sea"], books: [
    { title: "The Great Eastern", author: "Howard A. Rodman", year: 2019, isbn: "9781644285541", cover: "atlas/cover-the-great-eastern.jpg",
      setting: "The North Atlantic, with scenes in New York, London, Paris and India (1850s-1870s). The pin sits on the open ocean along the transatlantic cable route", note: "Captain Nemo versus Captain Ahab, with the engineer Brunel caught between. An anticolonial sea adventure.",
      page: "bookstore.html",
      srcUrl: "https://howardrodman.com/the-great-eastern/",
      src: "Howard Rodman's own book page (\"set in the 1850s-1870s in New York, London, Paris, India, and the North Atlantic\"); Melville House / Penguin Random House blurb (Nemo's fight against the laying of the Transatlantic cable); Walter Mosley blurb (the ship's mission to lay the Transatlantic cable). The novel moves between several places, so the pin marks only the North Atlantic; the other places are not pinned." }
  ]},
  { id: "atlantic-city", name: "Atlantic City, New Jersey, USA", lng: -74.4229, lat: 39.3643, area: false, cc: "US", cont: "North America", reg: ["atlantic city", "new jersey", "nj", "boardwalk", "jersey shore"], books: [
    { title: "Liberation Summer", author: "Micki McElya", year: 2026, isbn: "9781982166762", cover: "atlas/cover-liberation-summer.jpg",
      setting: "The Atlantic City Boardwalk, September 1968: the Miss America pageant protests", note: "Nonfiction. Pinned because the book builds to one place and one weekend. It also ranges across 1968 America.",
      page: "bookstore.html",
      srcUrl: "https://www.harvard.com/book/9781982166762",
      src: "Avid Reader Press / Simon & Schuster description (via Harvard Book Store): \"Atlantic City played host ... the boardwalk became a site of vigorously contested ideas\"; Elaine Weiss blurb (\"the Atlantic City boardwalk in late summer 1968\"); Kirkus (starred review). The book also covers wider 1968 politics, which are not pinned." }
  ]},
  { id: "ionian-islands", name: "Ithaca and the Ionian Islands, Greece", lng: 20.65, lat: 38.30, area: true, cc: "GR", cont: "Europe", reg: ["ithaca", "ithaki", "ionian islands", "ionian sea", "kefalonia", "cephalonia", "greece"], books: [
    { title: "The Odyssey", author: "Homer", isbn: "9780140268867", cover: "atlas/cover-the-odyssey.jpg",
      setting: "Ithaca, Odysseus's island home, in the Ionian Sea", note: "The poem ranges across the Mediterranean, and the pin marks only the home he is trying to reach. Scholars still debate exactly which modern island Homer's Ithaca is, so the ring covers the Ionian group.",
      page: "bookstore.html",
      srcUrl: "https://en.wikipedia.org/wiki/Ithaca_(island)",
      src: "Wikipedia (Ithaca (island)): Odysseus's home in the Odyssey; modern Ithaki is the traditional identification, with Lefkada and Paliki (Kefalonia) proposed as alternatives; HISTORY.com, \"Is the Island of Ithaca in The Odyssey a Real Place?\"; Perseus / Princeton Encyclopedia of Classical Sites (Ithaca, Greece). The other places in the poem are not pinned." }
  ]},
  { id: "berlin", name: "Berlin, Germany", lng: 13.4050, lat: 52.5200, area: false, cc: "DE", cont: "Europe", reg: ["berlin", "germany", "weimar", "weimar republic"], books: [
    { title: "Destiny Express", author: "Howard A. Rodman", isbn: "9781644285534", cover: "atlas/cover-destiny-express.jpg",
      setting: "Berlin, from the last day of February 1933: the film director Fritz Lang and the screenwriter Thea von Harbou as the Nazis take power", note: "Howard Rodman's first novel. He also wrote The Great Eastern, which is on this map in the North Atlantic.",
      srcUrl: "https://howardrodman.com/destiny-express/",
      src: "Howard Rodman's own book page for Destiny Express (\"Berlin, the last day of February, 1933 ... across the grid of Berlin\"). Cover from howardrodman.com." }
  ]}
  ,{ id: "lower-manhattan", name: "William Street, Lower Manhattan, New York", lng: -74.0083, lat: 40.7063, area: true, cc: "US", cont: "North America", reg: ["lower manhattan", "william street", "financial district", "manhattan", "new york", "new york city", "nyc"], books: [
    { title: "A Washington Irving Sketch Book: Reflections on an American Writer", author: "Phillip Lopate", year: 2026, isbn: "9780691284439", cover: "atlas/cover-washington-irving-sketch-book.jpg",
      setting: "Irving's New York City, from his family's home and shop on William Street in Lower Manhattan", note: "Nonfiction sketches of the writer. The book also follows Irving to the Hudson River Valley and Europe; only his New York beginnings are pinned.",
      page: "book-washington-irving-sketch-book.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/phillip-lopate/a-washington-irving-sketch-book/",
      src: "Kirkus Reviews (names Irving's \"beloved hometown, New York City\" and his family's home and shop on William Street in Lower Manhattan); Princeton University Press book page. The pin sits near William Street, not at an exact address. The other places in the book are not pinned." }
  ]},
  { id: "brownsville-matamoros", name: "Brownsville, Texas, and Matamoros, Mexico", lng: -97.4975, lat: 25.9017, area: true, cc: "US", cont: "North America", reg: ["brownsville", "matamoros", "heroica matamoros", "rio grande", "rio grande valley", "cameron county", "texas", "tx", "tamaulipas", "mexico"], books: [
    { title: "Rewriting American Architecture: Contesting the Myths of National Culture", author: "Charles L. Davis II, Kathryn E. Holliday and Joanna Merwood-Salisbury (eds.)", year: 2026, isbn: "9781477334171", cover: "atlas/cover-rewriting-american-architecture.jpg",
      setting: "Essays on the border cities of Brownsville, Texas, and Matamoros, Tamaulipas, in the nineteenth century (chapter 9)", note: "Nonfiction. A collection of 20 essays with no single setting. The pin marks only the places one chapter studies, so read it as essays on this border.",
      page: "book-rewriting-american-architecture.html",
      srcUrl: "https://utpress.utexas.edu/9781477334171/",
      src: "University of Texas Press book page (table of contents) and the publisher's review copy of the book (chapter 9, on Brownsville, Texas, and Heroica Matamoros, Tamaulipas). The book's other chapters are not pinned." }
  ]},
  { id: "austin", name: "Austin, Texas", lng: -97.7431, lat: 30.2672, area: false, cc: "US", cont: "North America", reg: ["austin", "travis county", "texas", "tx"], books: [
    { title: "Rewriting American Architecture: Contesting the Myths of National Culture", author: "Charles L. Davis II, Kathryn E. Holliday and Joanna Merwood-Salisbury (eds.)", year: 2026, isbn: "9781477334171", cover: "atlas/cover-rewriting-american-architecture.jpg",
      setting: "Essays on nineteenth-century Austin, Texas, and the Mason family of builders (chapter 4)", note: "Nonfiction. A collection of 20 essays with no single setting. The pin marks only the place one chapter studies, so read it as essays on Austin.",
      page: "book-rewriting-american-architecture.html",
      srcUrl: "https://utpress.utexas.edu/9781477334171/",
      src: "University of Texas Press book page (table of contents) and the publisher's review copy of the book (chapter 4, on the Mason family, builders in Austin, Texas). The book's other chapters are not pinned." }
  ]},
  { id: "bogota", name: "Bogotá, Colombia", lng: -74.0721, lat: 4.7110, area: false, cc: "CO", cont: "South America", reg: ["bogota", "bogotá", "colombia"], books: [
    { title: "Pretend You’re Dead and I Carry You", author: "Julián Delgado Lopera", year: 2026, isbn: "9781324097204", cover: "atlas/cover-pretend-youre-dead-and-i-carry-you.jpg",
      setting: "Bogotá in the 1990s, from a dreary apartment to the city’s queer underground", note: "A 2026 National Book Award finalist for Fiction.",
      page: "book-pretend-youre-dead-and-i-carry-you.html",
      srcUrl: "https://www.harvard.com/book/9781324097204",
      src: "Publisher’s description (Liveright, via Harvard Book Store): \"a dreary Bogotá apartment\", \"Bogotá’s queer underground\"; book-pretend-youre-dead-and-i-carry-you.html (\"Bogotá in the 1990s\")" }
  ]},
  { id: "miami", name: "Miami, Florida", lng: -80.1918, lat: 25.7617, area: false, cc: "US", cont: "North America", reg: ["miami", "miami-dade", "florida", "fl"], books: [
    { title: "Dèy", author: "Edwidge Danticat", year: 2026, isbn: "9780593803523", cover: "atlas/cover-dey.jpg",
      setting: "Miami, with family still in Haiti", note: "A 2026 National Book Award finalist for Fiction.",
      page: "book-dey.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/768725/dey-by-edwidge-danticat/",
      src: "Penguin Random House book page: \"Magnolia, a successful Haitian American real estate agent in Miami\"" }
  ]},
  { id: "florida", name: "Florida, USA", lng: -82.4, lat: 29.2, area: true, cc: "US", cont: "North America", reg: ["florida", "fl"], books: [
    { title: "Mad Eden", author: "Morgan Thomas", year: 2026, isbn: "9780374620158", cover: "atlas/cover-mad-eden.jpg",
      setting: "A ramshackle cabin in a secluded stretch of Florida (the book doesn’t say where)", note: "A debut novel and a 2026 National Book Award finalist for Fiction.",
      page: "book-mad-eden.html",
      srcUrl: "https://www.mcdbooks.com/books/mad-eden",
      src: "MCD Books / FSG publisher's description: \"a ramshackle cabin in a secluded stretch of Florida\". No town is named, so this is an area pin." }
  ]},
  { id: "dakar", name: "Dakar, Senegal", lng: -17.4677, lat: 14.7167, area: false, cc: "SN", cont: "Africa", reg: ["dakar", "senegal"], books: [
    { title: "Pure Men", author: "Mohamed Mbougar Sarr (translated by Lara Vergnaud)", year: 2026, isbn: "9781635424706", cover: "atlas/cover-pure-men.jpg",
      setting: "Dakar, and the hidden side of the city", note: "A 2026 National Book Award finalist for Translated Literature.",
      page: "book-pure-men.html",
      srcUrl: "https://otherpress.com/product/pure-men-9781635424706/",
      src: "Other Press book page: \"A viral video makes the rounds in Dakar\"; \"he explores a hidden side of Dakar\"" }
  ]},
  { id: "sicily", name: "Sicily, Italy", lng: 14.2, lat: 37.55, area: true, cc: "IT", cont: "Europe", reg: ["sicily", "sicilia", "italy"], books: [
    { title: "Beginning Middle End", author: "Valeria Luiselli", year: 2026, isbn: "9798217208319", cover: "atlas/cover-beginning-middle-end.jpg",
      setting: "A stormy summer in Sicily, near the ancient ruins of a great-grandmother’s archaeological dig", note: "A 2026 National Book Award finalist for Fiction.",
      page: "book-beginning-middle-end.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/815828/beginning-middle-end-by-valeria-luiselli/",
      src: "Penguin Random House book page: \"They’ve landed in Sicily, near the ancient ruins where the mother’s grandmother worked long ago on an archaeological dig\". The ruins are not named, so this is an area pin." }
  ]},
  { id: "cairo", name: "Cairo, Egypt", lng: 31.2357, lat: 30.0444, area: false, cc: "EG", cont: "Africa", reg: ["cairo", "egypt"], books: [
    { title: "Huna", author: "Abdelrahman ElGendy", year: 2026, isbn: "9798217153602", cover: "atlas/cover-huna.jpg",
      setting: "Cairo in 2013, then six years in Egypt’s prisons", note: "Memoir. A debut and a 2026 National Book Award finalist for Nonfiction.",
      page: "book-huna.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/799613/huna-by-abdelrahman-elgendy/",
      src: "Penguin Random House book page: \"seventeen-year-old Abdelrahman ElGendy was a budding student activist in Cairo\"; six years as a political prisoner" }
  ]},
  { id: "gaza", name: "Gaza", lng: 34.40, lat: 31.42, area: true, cc: "PS", cont: "Asia", reg: ["gaza", "gaza strip", "palestine"], books: [
    { title: "Your Presence Is a Danger to Your Life", author: "Samar Yazbek (translated by Leri Price)", year: 2026, isbn: "9781635426120", cover: "atlas/cover-your-presence-is-a-danger-to-your-life.jpg",
      setting: "Survivors from Gaza, in their own words (many were interviewed in Doha in 2024)", note: "Nonfiction. A 2026 National Book Award finalist for Translated Literature.",
      page: "book-your-presence-is-a-danger-to-your-life.html",
      srcUrl: "https://otherpress.com/product/your-presence-is-a-danger-to-your-life-9781635426120/",
      src: "Other Press book page: \"Samar Yazbek met with hundreds of survivors from Gaza\"; book-your-presence-is-a-danger-to-your-life.html (many receiving treatment in Doha)" }
  ]},
  { id: "safad", name: "Safad (Safed), Galilee", lng: 35.4960, lat: 32.9646, area: false, cc: "IL", cont: "Asia", reg: ["safad", "safed", "tzfat", "galilee", "palestine", "israel"], books: [
    { title: "Paradiso 17", author: "Hannah Lillith Assadi", year: 2026, isbn: "9780593804056", cover: "atlas/cover-paradiso-17.jpg",
      setting: "Safad, Palestine, on the edge of the 1948 Nakba, then Kuwait, a small Italian university town, New York and the Arizona desert", note: "Pinned where Sufien’s life begins. A 2026 National Book Award finalist for Fiction.",
      page: "book-paradiso-17.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/776855/paradiso-17-by-hannah-lillith-assadi/",
      src: "Penguin Random House book page: \"Raised in Safad on the precipice of the 1948 Nakba\"; later Kuwait, a small Italian university town, New York and Arizona" }
  ]},
  { id: "london-black-bag", name: "London, England (today)", lng: -0.1180, lat: 51.5230, area: true, cc: "GB", cont: "Europe", reg: ["london", "greater london", "england"], books: [
    { title: "Black Bag", author: "Luke Kennard", year: 2026, isbn: "9781638933380", cover: "atlas/cover-black-bag.jpg",
      setting: "Contemporary London: a grotty flat and a university lecture hall", note: "A campus novel. Shortlisted for the 2026 Booker Prize.",
      page: "book-black-bag.html",
      srcUrl: "https://thebookerprizes.com/the-booker-library/books/black-bag",
      src: "The Booker Prizes book page, judges' citation: \"How does an aspiring actor survive in contemporary London\". The university is not named, so this is an area pin." }
  ]}

];

/* Reading routes. A route is an ordered list of place ids, drawn as a numbered path, with its own chip above the map.
   Deep link: atlas.html#<id>. Optional: eyebrow (banner kicker), order (replaces "oldest to newest" in the count line),
   color (path color), moody (tint the map, Gothic only), note (line under the stop list), isNew (shows the "New" tag on the chip).
   The first sentence of "blurb" is replaced by the live count ("8 stops, 8 books, west to east."). */
window.bsRoutes = [
  { id: "gothic-october", name: "Gothic October", eyebrow: "A reading route · Halloween 2026", moody: true, isNew: true, color: "#4a0f22",
    note: "Public-domain classics show their first-edition covers. Where a book is set is cited in each popup.",
    blurb: "Seven stops, eight books, oldest to newest. Lock the door first.",
    stops: ["otranto", "geneva", "thornfield", "yorkshire", "london-gothic", "whitby", "kerry"] },
  { id: "national-book-awards-2026", name: "National Book Awards 2026", eyebrow: "Award route · winners named Nov 18", order: "west to east", color: "#111111",
    note: "Three of the eleven finalists (Let the Poets Govern, Mother Tongue and Spawning Season) don't center on one place, so they aren't pinned. Each popup cites its source.",
    blurb: "Eight stops. Fiction, Nonfiction and Translated Literature finalists, from Bogotá to Galilee.",
    stops: ["bogota", "miami", "florida", "dakar", "sicily", "cairo", "gaza", "safad"] },
  { id: "booker-prize-2026", name: "Booker Prize 2026", eyebrow: "Award route · winner named Nov 9", order: "west to east", color: "#7a4f00",
    note: "Five of the six shortlisted novels. May We Feed the King isn't pinned because its medieval palace and kingdom aren't named. Each popup cites its source.",
    blurb: "Five stops. The shortlist, from Kingston to the Kent coast.",
    stops: ["kingston", "massachusetts", "hebrides", "london-black-bag", "kent"] }
];
