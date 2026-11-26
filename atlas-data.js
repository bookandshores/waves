// B&S Atlas of Books: pin data. Edit this file to add or change pins; atlas.js reads it.
// RULES: every pin is a book's STATED setting (from our own book page/blurb or the publisher/major press, see "src").
// If a book names no real place (theory, tech, essays, memoirs that span many cities, etc.), the pin is the publishing press.
// Those pins set published: true and are labeled "Published in [city] by [press]", never as a story setting.
// "area": true = the book names a region, not an exact address, so the pin sits inside the region (shown as a dashed ring).
// "page": our own page for the book. "bookstore.html" means the book only has a card in our bookstore (no dedicated page yet).
// "partner": optional, name of the press, author or organization that paid for a Launch Pin. Shows a "Partner pin" label on the card and the place page.
// Buy link is https://bookshop.org/a/125864/<ISBN13> (affiliate ID 125864), unless "buy" gives the bookstore listing URL (e.g. a press).
window.bsAtlas = [
  { id: "dublin", name: "Dublin, Ireland", lng: -6.2603, lat: 53.3498, area: false, cc: "IE", cont: "Europe", reg: ["dublin", "leinster", "ireland"], books: [
    { title: "All Them Dogs", author: "Djamel White", isbn: "9798217046676", cover: "atlas/cover-all-them-dogs.jpg",
      setting: "West Dublin", note: "A gangland thriller. Longlisted for the 2026 Booker Prize.",
      page: "book-all-them-dogs.html",
      src: "book-all-them-dogs.html (\"West Dublin gangland\")" },
    { title: "Ambivalence: An Education", author: "Brian Dillon", isbn: "9798896231103", cover: "atlas/cover-ambivalence.jpg",
      setting: "Dublin, late 1980s and 1990s", note: "A memoir of growing up on books and ideas.",
      page: "book-ambivalence.html",
      src: "book-ambivalence.html (\"Dublin in the late 1980s and 1990s\")" }
  ]},
  { id: "zurich", name: "Zurich, Switzerland", lng: 8.5417, lat: 47.3769, area: false, cc: "CH", cont: "Europe", reg: ["zurich", "zürich", "switzerland"], books: [
    { title: "Switzy", author: "Emma Cline", isbn: "9780593595244", cover: "atlas/cover-switzy.jpg",
      setting: "Zurich (the last stop), after London and France", note: "A last pilgrimage across Europe. Longlisted for the 2026 Booker Prize.",
      page: "book-switzy.html",
      src: "book-switzy.html (flight to a clinic in Zurich; dinner in London; friend in France)" }
  ]},
  { id: "ucla-westwood", name: "UCLA, Westwood, Los Angeles", lng: -118.4452, lat: 34.0689, area: false, cc: "US", cont: "North America", reg: ["ucla", "westwood", "los angeles", "la", "california"], books: [
    { title: "Arrows of Desire", author: "Peter Wollen", isbn: "9781836741176", cover: "atlas/cover-arrows-of-desire.jpg",
      setting: "UCLA in the 1990s, where Wollen taught and spent his mornings in the Arts Library chasing one text to the next", note: "Selected Writings 1963\u20132002, edited by Kodwo Eshun, Oliver Fuke & Nicolas Helm-Grovas. Verso.",
      page: "book-arrows-of-desire.html",
      src: "Adrian Martin, \"The One That Remembers Also Sings,\" Los Angeles Review of Books, Nov 4, 2026 (Chon Noriega, Wollen's UCLA colleague in the 1990s: \"He would spend his mornings in the Arts Library\"), https://lareviewofbooks.org/article/arrows-of-desire-peter-wollen-film-criticism-director/" }
  ]},
  { id: "dordogne", name: "Dordogne, France", lng: 0.7500, lat: 45.1000, area: true, cc: "FR", cont: "Europe", reg: ["dordogne", "nouvelle-aquitaine", "perigord", "france"], books: [
    { title: "Practicing Dying", author: "Charlotte Northall", isbn: "9781068758645", cover: "Practice.png",
      setting: "A Zen Buddhist monastery in a forested national park in the Dordogne, rural France", note: "A literary anti-memoir of addiction and monastery life. Pilot Press.",
      page: "bookstore.html", buy: "https://www.pilotpress.co.uk/catalogue",
      src: "Publisher synopsis (\"a Zen Buddhist monastery in rural France\"), charlottenorthall.com/about-2; author's Chapter 5 excerpt (\"a forested national park in the Dordogne\"), https://charlottenorthall.substack.com/p/chapter-5" }
  ]},
  { id: "stockholm", name: "Stockholm, Sweden", lng: 18.0686, lat: 59.3293, area: true, cc: "SE", cont: "Europe", reg: ["stockholm"], books: [
    { title: "The Sandman", author: "Lars Kepler", isbn: "9780525433057", cover: "atlas/cover-the-sandman.jpg",
      setting: "Outside Stockholm", note: "Swedish crime thriller, translated by Neil Smith.",
      page: "book-the-sandman.html",
      src: "book-the-sandman.html (\"Late one night outside Stockholm\")" }
  ]},
  { id: "positano", name: "Mongibello, Italy (made up)", lng: 14.4850, lat: 40.6281, area: true, cc: "IT", cont: "Europe", reg: ["positano", "campania", "amalfi coast", "mongibello"], books: [
    { title: "The Talented Mr. Ripley", author: "Patricia Highsmith", isbn: "9780393332148", cover: "atlas/cover-talented-mr-ripley.jpg",
      setting: "Mongibello, a made-up Italian coastal town (modeled on Positano)", note: "The pin sits on Positano, the real town Highsmith borrowed.",
      page: "book-talented-mr-ripley.html",
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
      page: "book-nova-scotia-house.html",
      src: "book-nova-scotia-house.html; bookstore.html card blurb (\"a London flat\"); Nightboat Books interview with Porter; World of Interiors (Dorset Estate, Tower Hamlets)" }
  ]},
  { id: "kent", name: "Kent coast, England", lng: 1.2000, lat: 51.1000, area: true, cc: "GB", cont: "Europe", reg: ["kent", "england"], books: [
    { title: "The End of Everything", author: "M. John Harrison", isbn: "9798217438655", cover: "atlas/cover-the-end-of-everything.jpg",
      setting: "The coast of Kent, where a beachcomber works the Channel", note: "Shortlisted for the 2026 Booker Prize.",
      page: "book-the-end-of-everything.html",
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
      page: "book-carol.html",
      src: "book-carol.html (department store clerk); Frankenberg's, Manhattan: Astra Magazine, Wikipedia (Carol film)" },
    { title: "Going Down in Gotham", author: "Zoe Hansen", isbn: "9798994335628", cover: "atlas/cover-going-down-in-gotham.jpg",
      setting: "Manhattan, 1980s, by way of London", note: "A memoir of MTV, heroin, and a madam's-eye view of the city.",
      page: "bookstore.html",
      src: "bookstore.html card blurb (\"London to 1980s New York ... Manhattan\")" },
    { title: "Office Politics", author: "Wilfrid Sheed", year: 1966, isbn: "9781961341180", cover: "atlas/cover-office-politics.jpg",
      setting: "A drab office on the east side of Manhattan: the staff of The Outsider, a small highbrow weekly, 1960s", note: "A McNally Editions reissue of the 1966 novel, and one of the books Jonathan Lethem champions as our Author of the Month for November 2026.",
      page: "author-of-the-month.html#9781961341180",
      src: "author-of-the-month.html (Lethem's Office Politics pick); Electric Literature, \"Wilfrid Sheed's Office Politics Reconsidered\" (the office is \"somewhere on the east side of Manhattan\"); McNally Editions (publisher page: a satire of 1960s intellectual New York, set at the magazine The Outsider)" },
    { title: "Audition", author: "Katie Kitamura", year: 2025, isbn: "9780593852323", cover: "Audition.png",
      setting: "A Manhattan restaurant, where two people meet for lunch, and rehearsals for a premiere", note: "A novel by Katie Kitamura. Riverhead / Penguin Random House. Finalist for the Booker Prize and the Pulitzer Prize.",
      page: "bookstore.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/762930/audition-by-katie-kitamura/",
      src: "Riverhead / Penguin Random House book page (\"Two people meet for lunch in a Manhattan restaurant. She's an accomplished actress in rehearsals for an upcoming premiere\")" }
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
      page: "bookstore.html",
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
      page: "bookstore.html",
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
      src: "Wikipedia (Wuthering Heights): set on the Yorkshire moors; houses fictional. Cover: 1847 first edition, Houghton Library via Wikimedia Commons, public domain." },
    { title: "Victorian Psycho", author: "Virginia Feito", year: 2025, isbn: "9781324097785", cover: "atlas/cover-victorian-psycho.jpg",
      setting: "Ensor House, a manor on the moorland of Grim Wolds, Yorkshire, in the 19th century", note: "Grim Wolds and Ensor House are made up. No real town is named, so the pin shares the Yorkshire moors ring. The film opens in theaters Nov 13, 2026.",
      page: "book-victorian-psycho.html",
      srcUrl: "https://www.bookpage.com/reviews/victorian-psycho-virginia-feito-book-review/",
      src: "W. W. Norton UK book page (\"Grim Wolds, England: Winifred Notty arrives at Ensor House\"); BookPage review (\"old manor house in Yorkshire\"); BookRags study guide (\"the fictional Yorkshire village of Grim Wolds\"); New York Times Book Review 2025-02-01 (Ensor House \"on a stretch of moorland\"). Grim Wolds is fictional, so this is an area pin." }
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
  { id: "boerum-hill-lethem-essay", name: "Lethem's room, Boerum Hill, Brooklyn", lng: -73.9846, lat: 40.6853, area: false, cc: "US", cont: "North America", reg: ["boerum hill", "brooklyn", "new york", "new york city", "nyc", "lethem"], books: [
    { title: "9 Failures of the Imagination", author: "Jonathan Lethem", year: 2001, cover: "atlas/cover-lethem-9-failures.jpg",
      setting: "Lethem's own room in Boerum Hill, Brooklyn, in the days after September 11, 2001", note: "A New York Times Magazine essay, Sept. 23, 2001, written from home in Boerum Hill. Jonathan Lethem is our Author of the Month for November 2026.",
      page: "author-of-the-month.html",
      srcUrl: "https://www.nytimes.com/2001/09/23/magazine/9-failures-of-the-imagination.html",
      src: "The New York Times Magazine, \"9 Failures of the Imagination\" by Jonathan Lethem, Sept. 23, 2001 (opens: \"It began for me here, in the same room where I sit now, in Boerum Hill\")" }
  ]},
  { id: "bay-area-lethem-tension", name: "San Francisco Bay Area, California", lng: -122.33, lat: 37.82, area: true, cc: "US", cont: "North America", reg: ["bay area", "san francisco bay area", "oakland", "berkeley", "san francisco", "california", "lethem"], books: [
    { title: "A Different Kind of Tension", author: "Jonathan Lethem", year: 2025, isbn: "9780063388864", cover: "atlas/cover-different-kind-of-tension.jpg",
      setting: "The Bay Area, in the new story \"The Red Sun School of Thoughts\"", note: "New and selected stories from more than three decades, led by a never-before-published story set in the Bay Area. Paperback from Ecco, Sept. 1, 2026. Jonathan Lethem is our Author of the Month for November 2026.",
      page: "author-of-the-month.html",
      srcUrl: "https://penguinbookshop.com/book/9780063388864",
      src: "Alta, quoted on the Penguin Bookshop page (\"a brand-new Bay Area\u2013set story, 'The Red Sun School of Thoughts'\"); HarperCollins page (paperback on sale Sept. 1, 2026), https://www.harpercollins.com/products/a-different-kind-of-tension-jonathan-lethem" }
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
      page: "bookstore.html",
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
      page: "book-the-great-eastern.html",
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
  { id: "bronzeville-chicago", name: "South Side Community Art Center, Bronzeville, Chicago", lng: -87.6227, lat: 41.8246, area: false, cc: "US", cont: "North America", reg: ["bronzeville", "south side", "south side community art center", "sscac", "3831 south michigan avenue", "michigan avenue", "chicago", "cook county", "illinois", "il"], books: [
    { title: "Black Designers in Chicago: Culture and Community in the Twentieth Century", author: "Chris Dingwall, David Hartt and Daniel Schulman (eds.)", year: 2026, isbn: "9780226830551", cover: "atlas/cover-black-designers-in-chicago.jpg",
      setting: "Chicago's South Side, where the South Side Community Art Center at 3831 South Michigan Avenue anchored generations of Black designers", note: "Nonfiction. An illustrated history of Black design across twentieth-century Chicago. The pin marks the art center the book returns to, not every place it covers.",
      page: "book-black-designers-in-chicago.html",
      srcUrl: "https://press.uchicago.edu/ucp/books/book/chicago/B/bo262165038.html",
      src: "University of Chicago Press book page (Black designers \"helped to build community institutions such as the South Side Community Art Center\") and the publisher's review copy of the book (Jacqueline Goldsby's essay gives the center's site at 3831 South Michigan Avenue). The book's other places are not pinned." }
  ]},
  { id: "savannah", name: "Savannah, Georgia", lng: -81.0921, lat: 32.0790, area: true, cc: "US", cont: "North America", reg: ["savannah", "chatham county", "georgia", "ga", "savannah historic district"], books: [
    { title: "Learning from Savannah: From Ideal City to Elastic Urbanism", author: "David W. Gobel and Robin B. Williams", year: 2026, isbn: "9780820374604", cover: "atlas/cover-learning-from-savannah.jpg",
      setting: "Savannah, Georgia: the city's town plan of wards and squares, and the buildings and landscape it shaped", note: "Nonfiction. A history of the Savannah plan and the city's architecture. The pin sits on the historic town, not an exact address.",
      page: "book-learning-from-savannah.html",
      srcUrl: "https://www.ugapress.org/9780820374604/learning-from-savannah/",
      src: "University of Georgia Press book page (\"the history of Savannah's famed urban plan and the history of the city's architecture\") and the publisher's review copy of the book." }
  ]},
  { id: "lowell", name: "Lowell, Massachusetts", lng: -71.3085, lat: 42.6414, area: false, cc: "US", cont: "North America", reg: ["lowell", "middlesex county", "massachusetts", "ma", "new england"], books: [
    { title: "Big American Writer: The Bilingual Jack Kerouac", author: "Jean-Christophe Cloutier", year: 2026, isbn: "9780231222457", cover: "atlas/cover-big-american-writer.jpg",
      setting: "Lowell, Massachusetts, where Jack Kerouac grew up in a French-speaking home", note: "Nonfiction. A study of Kerouac as a bilingual French Canadian writer. Only his Lowell upbringing is pinned.",
      page: "book-big-american-writer.html",
      srcUrl: "https://cup.columbia.edu/book/big-american-writer/9780231222457/",
      src: "Columbia University Press book page (Kerouac \"was raised in a French-speaking home in Lowell, Massachusetts\"). The book's other places are not pinned." }
  ]},
  { id: "east-seventh-street", name: "64 East Seventh Street, East Village, New York", lng: -73.9871, lat: 40.7273, area: false, cc: "US", cont: "North America", reg: ["east village", "east seventh street", "east 7th street", "64 east seventh street", "lower east side", "manhattan", "new york", "new york city", "nyc"], books: [
    { title: "The Night Before: Essays on Music, Comics, and Culture", author: "David Hajdu", year: 2026, isbn: "9780231225168", cover: "atlas/cover-the-night-before.jpg",
      setting: "64 East Seventh Street in the East Village: the essay of that name tells the life of this one building", note: "Nonfiction. A collection of essays with no single setting. The pin marks only the building one essay is about.",
      page: "book-the-night-before.html",
      srcUrl: "https://cup.columbia.edu/book/the-night-before/9780231225168/",
      src: "Columbia University Press book page (table of contents: \"64 East Seventh Street\") and the publisher's advance copy of the book (the essay is a history of the building). The book's other places are not pinned." }
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
      setting: "Cairo in 2013, then six years in Egypt’s prisons", note: "Memoir. A debut and the 2026 National Book Award winner for Nonfiction.",
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
      setting: "Safad, Palestine, on the edge of the 1948 Nakba, then Kuwait, a small Italian university town, New York and the Arizona desert", note: "Pinned where Sufien’s life begins. The 2026 National Book Award winner for Fiction.",
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
  ]},
  /* ---- LA Times "10 books to read in November" (Nov 2, 2026), the picks with a sourced setting ---- */
  { id: "pimlico", name: "Pimlico, London, England", lng: -0.1334, lat: 51.4893, area: true, cc: "GB", cont: "Europe", reg: ["pimlico", "westminster", "london", "greater london", "england", "ireland", "dublin"], books: [
    { title: "Stations", author: "Louise Kennedy", year: 2026, isbn: "9780593714607", cover: "atlas/cover-stations.jpg",
      setting: "A squat in Pimlico, London, in the 1980s, after a girlhood in a small town south of Dublin", note: "Pinned at the Pimlico squat where Róisín finds Red. A novel of first love and regret. Riverhead.",
      page: "bookstore.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/735417/stations-by-louise-kennedy/",
      src: "Penguin Random House book page: \"In 1980s Ireland\" ... \"Róisín tracks down Red and moves into his Pimlico squat\"; Publishers Weekly review (\"her small town south of Dublin\")" }
  ]},
  { id: "glacier-national-park", name: "Glacier National Park, Montana", lng: -113.7870, lat: 48.7596, area: true, cc: "US", cont: "North America", reg: ["glacier national park", "montana", "rocky mountains", "alberta"], books: [
    { title: "A Glacier's Guide to Dying", author: "Michelle Porter", year: 2026, isbn: "9781523538003", cover: "atlas/cover-a-glaciers-guide-to-dying.jpg",
      setting: "A glacier in Glacier National Park, Montana, as wildfires rage, after a bus ride down from Alberta", note: "A young Métis man hunts for his missing father and hears the glacier speak. Algonquin Books.",
      page: "bookstore.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/michelle-porter/a-glaciers-guide-to-dying/",
      src: "Kirkus review: \"A young Métis man from Alberta winds up trekking a glacier in Montana\" ... \"the two men wind up in Glacier National Park, where wildfires rage\"; LA Times, Nov 2, 2026 (uncle in Montana)" }
  ]},
  { id: "richland-ohio", name: "Rural Ohio, USA (Richland is made up)", lng: -82.9071, lat: 40.4173, area: true, cc: "US", cont: "North America", reg: ["ohio", "richland", "midwest"], books: [
    { title: "Monsters of Ohio", author: "John Scalzi", year: 2026, isbn: "9780765389039", cover: "atlas/cover-monsters-of-ohio.jpg",
      setting: "Richland, a made-up small farm town in rural Ohio whose biggest employer is closing", note: "Sci-fi with tentacles and small-town resistance. Richland is made up, so this is an area pin. Tor Books.",
      page: "bookstore.html",
      srcUrl: "https://torpublishinggroup.com/monsters-of-ohio/?format=hardback&isbn=9780765389039",
      src: "Tor Publishing Group book page: \"Welcome to Richland, Ohio\"; Kirkus review: \"the story's fictional town\" sits in the rural Ohio county where Scalzi lives" }
  ]},
  { id: "lagos", name: "Lagos, Nigeria", lng: 3.3792, lat: 6.5244, area: true, cc: "NG", cont: "Africa", reg: ["lagos", "nigeria", "west africa"], books: [
    { title: "This Impossible Life", author: "Chinelo Okparanta", year: 2026, isbn: "9780358650171", cover: "atlas/cover-this-impossible-life.jpg",
      setting: "Lagos, Nigeria, from 1993, then New York City and Italy", note: "Pinned where Alohan and Ivie's story begins. A saga of two orphaned siblings. Mariner Books.",
      page: "bookstore.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/chinelo-okparanta/this-impossible-life/",
      src: "Kirkus review: \"a brother and sister raised in Lagos\" ... \"In 1993\"; later New York City and Italy. Publisher copy: \"from Nigeria to the United States to Italy\"" }
  ]},
  { id: "mekong-delta", name: "Mekong Delta, Vietnam", lng: 105.7800, lat: 10.0300, area: true, cc: "VN", cont: "Asia", reg: ["mekong delta", "mekong", "vietnam", "washington", "washington dc"], books: [
    { title: "27 Knots", author: "Martin J. Smith", year: 2026, isbn: "9798337209531", cover: "atlas/cover-27-knots.jpg",
      setting: "The Mekong Delta during the Vietnam War, then Washington, DC, fifty years later", note: "Pinned on the river where Vance served with the Mobile Riverine Force. A thriller. Open Road Media.",
      page: "bookstore.html",
      srcUrl: "https://openroadmedia.com/ebook/27-knots/9798337209524",
      src: "Open Road Media book page: \"sent down the Mekong Delta on a napalm boat as part of the Mobile Riverine Force\" ... \"Fifty years later, lured to Washington, DC\"" }
  ]},
  /* ---- Backlist & midlist from our shelves (Nov 3, 2026): great books keep finding readers long after launch ---- */
  { id: "peterborough-ontario", name: "Peterborough, Ontario, Canada", lng: -78.3197, lat: 44.3091, area: true, cc: "CA", cont: "North America", reg: ["peterborough", "ontario", "canada"], books: [
    { title: "Dark Rides", author: "Derek McCormack", year: 1996, cover: "atlas/cover-dark-rides.jpg",
      setting: "Peterborough, Ontario, in 1952: haunted hayrides, a joke shop and honky-tonks in a small Canadian city", note: "Linked stories its publisher calls \"like the best carnival dark ride you've ever been on.\" First published in 1996; the 30th anniversary edition is from Pilot Press, a small press.",
      page: "bookstore.html",
      srcUrl: "https://www.taddlecreekmag.com/above-snakes",
      src: "Taddle Creek: \"Dark Rides is set in Peterborough in 1952\"; Pilot Press catalogue: \"gay teenagers growing up in a small city in Canada in the 1950s\"" }
  ]},
  { id: "skies-over-france", name: "Skies over France, World War I (the Sopwith Camel is a doghouse)", lng: 2.8, lat: 49.9, area: true, cc: "FR", cont: "Europe", reg: ["france", "western front", "somme", "picardy", "europe"], books: [
    { title: "Snoopy and the Red Baron", author: "Charles M. Schulz", year: 1966, isbn: "9781787742727", cover: "atlas/cover-snoopy-and-the-red-baron.jpg",
      setting: "The skies over France in World War I, flown from atop Snoopy's doghouse, then behind enemy lines and back to base", note: "The doghouse is a Sopwith Camel, the enemy is the Red Baron, and the war is all in Snoopy's head. An area pin. First published 1966.",
      page: "bookstore.html",
      srcUrl: "https://www.enotes.com/topics/charles-m-onroe-schulz/criticism/clarence-petersen",
      src: "Clarence Petersen, Book World, Chicago Tribune (Aug. 10, 1969): \"his doghouse is the Sopwith Camel\" ... \"Snoopy under anti-aircraft fire over France\"" }
  ]},
  { id: "jazz-age-new-york", name: "New York City in the Jazz Age", lng: -73.9855, lat: 40.7580, area: true, cc: "US", cont: "North America", reg: ["new york", "new york city", "manhattan", "nyc"], books: [
    { title: "The Wild Party", author: "Joseph Moncure March, drawings by Art Spiegelman", year: 1928, isbn: "9780375706431", cover: "atlas/cover-the-wild-party.jpg",
      setting: "Queenie's studio apartment in Jazz Age New York, over one long night of a party", note: "A 1928 ballad-novel, promptly banned in Boston, here with Art Spiegelman's drawings. An area pin: the flat's address isn't given. Pantheon.",
      page: "bookstore.html",
      srcUrl: "https://archive.nytimes.com/www.nytimes.com/books/99/07/25/nnp/moncure-wild.html",
      src: "The New York Times review: \"the book of a young man eagerly slumming in Jazz Age New York\" ... \"That night they throw a party\"" }
  ]},
  { id: "north-shore-oahu", name: "North Shore, Oahu, Hawaii", lng: -158.0530, lat: 21.6650, area: true, cc: "US", cont: "North America", reg: ["north shore", "oahu", "hawaii", "pipeline", "pacific"], books: [
    { title: "Welcome to Paradise, Now Go to Hell", author: "Chas Smith", year: 2013, isbn: "9780062202536", cover: "atlas/cover-welcome-to-paradise-now-go-to-hell.jpg",
      setting: "Oahu's North Shore in winter, when the best surfers in the world converge on the Banzai Pipeline", note: "Nonfiction about surf culture on its most famous coast. HarperCollins.",
      page: "bookstore.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/chas-smith/welcome-to-paradise-now-go-to-hell/",
      src: "Kirkus review: \"a hip exposé of Hawaii's North Shore surfing culture\" ... \"the best surfers in the world converge on Oahu's North Shore\"" }
  ]},
  { id: "mississippi-river", name: "The Mississippi River", lng: -91.3500, lat: 39.7000, area: true, cc: "US", cont: "North America", reg: ["mississippi river", "mississippi", "missouri", "illinois", "midwest"], books: [
    { title: "James", author: "Percival Everett", year: 2024, isbn: "9780385550369", cover: "atlas/cover-james.jpg",
      setting: "A raft on the antebellum Mississippi River, as Jim runs from being sold, with Huck alongside", note: "Huckleberry Finn told by Jim. An area pin on the river. Winner of the Pulitzer Prize. Doubleday.",
      page: "bookstore.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/percival-everett/james/",
      src: "Kirkus review: \"the Black slave with whom the boy escapes via raft on the Mississippi River\" ... \"an antebellum wilderness\"" }
  ]},
  { id: "bucharest", name: "Bucharest, Romania", lng: 26.1025, lat: 44.4268, area: true, cc: "RO", cont: "Europe", reg: ["bucharest", "romania", "eastern europe"], books: [
    { title: "Solenoid", author: "Mircea Cărtărescu (translated by Sean Cotter)", year: 2022, isbn: "9781646052028", cover: "atlas/cover-solenoid.jpg",
      setting: "Bucharest, where solenoids hum hidden under the back alleys and tunnels of the city", note: "A teacher who wanted to be a writer keeps a diary that spirals into a cosmos. Deep Vellum, a small press.",
      page: "bookstore.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/mircea-cartarescu/solenoid/",
      src: "Kirkus review: \"It's not the only solenoid hidden away in the back alleys and tunnels of Bucharest\"" }
  ]},
  { id: "dutch-countryside", name: "Dutch countryside, Netherlands", lng: 6.4, lat: 52.4, area: true, cc: "NL", cont: "Europe", reg: ["netherlands", "holland", "dutch countryside", "europe"], books: [
    { title: "The Safekeep", author: "Yael van der Wouden", year: 2024, isbn: "9781668034354", cover: "atlas/cover-the-safekeep.jpg",
      setting: "An old family house in the Dutch countryside in the summer of 1961", note: "Isabel's ordered life comes apart when her brother Louis's girlfriend, Eva, comes to stay. An area pin: the village isn't named. Avid Reader Press.",
      page: "bookstore.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/yael-van-der-wouden/the-safekeep/",
      src: "Kirkus review: \"Two women spend a fraught summer together in the Dutch countryside\" ... \"opens in 1961 in the Netherlands\"" }
  ]},
  { id: "gyula", name: "Gyula, Hungary (the town is unnamed)", lng: 21.2784, lat: 46.6473, area: true, cc: "HU", cont: "Europe", reg: ["gyula", "bekes", "hungary", "eastern europe"], books: [
    { title: "Baron Wenckheim's Homecoming", author: "László Krasznahorkai (translated by Ottilie Mulzet)", year: 2019, isbn: "9780811239707", cover: "atlas/cover-baron-wenckheims-homecoming.jpg",
      setting: "An unnamed Hungarian town near the Romanian border, a lightly fictionalised Gyula, as a baron whose casino debts catch up with him comes home from Argentina", note: "The town is never named, so this is an area pin. New Directions.",
      page: "bookstore.html",
      srcUrl: "https://www.thesaturdaypaper.com.au/culture/books/2020/02/29/baron-wenckheims-homecoming/15804756009327",
      src: "The Saturday Paper: \"The unnamed town is a lightly fictionalised version of Gyula, a city of some 30,000 souls in Békés County, near the Romanian border\"; Kirkus review: he \"returns to the countryside haunts of his youth\"" }
  ]},
  { id: "pittsburgh", name: "Pittsburgh, Pennsylvania", heading: "Dummy", sub: "A comics and arts magazine edited and published by John Kelly · Pittsburgh, Pennsylvania", cardBy: "A comics and arts magazine edited and published by John Kelly · Pittsburgh, Pennsylvania", desc: "Dummy, the comics and arts magazine edited and published by John Kelly in Pittsburgh, is pinned on the Book & Shores Literary Atlas: issues #1 and #2, with sources cited.", lng: -79.9959, lat: 40.4406, area: false, cc: "US", cont: "North America", reg: ["pittsburgh", "pennsylvania", "pa", "steel city"], books: [
    { title: "Dummy Magazine #1", author: "John Kelly, editor and publisher", cover: "atlas/cover-dummy-1.jpg",
      setting: "Pittsburgh, where Dummy, a comics and arts magazine, is edited and published", note: "Dummy is a comics and arts magazine with a deep affection for art and its makers. Each issue looks closely at creative process, historical material and rarely seen images. Issue #1: The Art of Pee-wee’s Playhouse. Book and Shores, an independent bookstore, pins Dummy with gratitude for its contribution to the literary arts. Image courtesy Dummy.",
      page: "bookstore.html",
      srcUrl: "https://www.dummyzine.com/about-dummy",
      src: "Copacetic Comics (\"edited and published right here in Pittsburgh, PA\"), https://copaceticcomics.com/comics/dummy-2; The Comics Journal author page for John Kelly (Dummy's publisher, lives in Pittsburgh), https://www.tcj.com/author/john-kelly/" },
    { title: "Dummy Magazine #2", author: "John Kelly, editor and publisher", cover: "atlas/cover-dummy-2.jpg",
      setting: "Pittsburgh, where Dummy, a comics and arts magazine, is edited and published", note: "The comics and arts magazine’s second issue, whose cover asks: Parody or Piracy? Image courtesy Dummy.",
      page: "bookstore.html",
      srcUrl: "https://www.dummyzine.com/about-dummy",
      src: "Copacetic Comics (\"edited and published right here in Pittsburgh, PA\"), https://copaceticcomics.com/comics/dummy-2; The Comics Journal author page for John Kelly (Dummy's publisher, lives in Pittsburgh), https://www.tcj.com/author/john-kelly/" }
  ]}
  ,{ id: "village-gate", name: "The Village Gate, Greenwich Village, New York", lng: -74.0003, lat: 40.7290, area: false, cc: "US", cont: "North America", reg: ["village gate", "greenwich village", "bleecker street", "manhattan", "new york", "new york city", "nyc"], books: [
    { title: "Don't Let Me Be Misunderstood", author: "W. Jason Miller", year: 2026, isbn: "9781469698212", cover: "atlas/cover-dont-let-me-be-misunderstood.jpg",
      setting: "New York in the 1960s, where Langston Hughes and Nina Simone became close friends; Hughes left a play after its first act to hear her at the Village Gate on April 3, 1961",
      note: "Nina Simone, Langston Hughes and the Birth of Black Power. A Booklist and Library Journal starred review. Cover courtesy University of North Carolina Press.",
      page: "book-dont-let-me-be-misunderstood.html", srcUrl: "https://theconversation.com/nina-simone-langston-hughes-and-their-forgotten-creative-collaboration-290878",
      src: "W. Jason Miller in The Conversation (Simone moved to New York in 1959; the two visited each other's homes; she performed at the Village Gate in Greenwich Village); Backlash Blues timeline, https://www.backlash-blues.com/timeline (Hughes left Genet's The Blacks after the first act to watch Simone at the Village Gate, April 3, 1961)" }
  ]}
,
  { id: "paris-image-of-her", name: "Paris, France", lng: 2.3522, lat: 48.8566, area: false, cc: "FR", cont: "Europe", reg: ["paris", "ile-de-france", "france"], books: [
    { title: "The Image of Her", author: "Simone de Beauvoir", year: 1966, isbn: "9780300287172", cover: "weekly-the-image-of-her.jpg",
      setting: "Paris in the 1960s, where Laurence, an advertising copywriter, lives among the Parisian bourgeoisie", note: "Beauvoir's final novel (1966), translated by Lauren Elkin. Yale University Press.",
      page: "book-the-image-of-her.html", srcUrl: "https://yalebooks.yale.edu/book/9780300287172/the-image-of-her/",
      src: "Yale University Press book page (\"the trappings of 1960s Parisian bourgeoisie\"; Laurence's career as an advertising copywriter); Waterstones / Vintage blurb (\"weekdays in Paris\")" },
    { title: "The Contessa", author: "Benedetta Craveri, tr. Alex Andriesse", year: 2026, isbn: "9798896230465", cover: "IMG_2780.jpg",
      setting: "Paris, where Virginia, Countess of Castiglione, was sent to persuade Napoleon III to support Italian unification", note: "A biography. New York Review Books. The countess was already renowned in Italy; this pin marks Paris, the assignment the publisher places at the center of the story.",
      page: "bookstore.html",
      srcUrl: "https://www.nyrb.com/products/the-contessa",
      src: "New York Review Books book page (\"Eighteen years old when Victor Emmanuel I sent her to Paris on a special assignment\"; \"Her entrance into the haut monde of Paris\")" }
  ]}
  ,{ id: "london-school-of-night", name: "London, England (1985)", lng: -0.1276, lat: 51.5072, area: true, cc: "GB", cont: "Europe", reg: ["london", "greater london", "england"], books: [
    { title: "The School of Night", author: "Karl Ove Knausgaard", year: 2026, isbn: "9780593832820", cover: "weekly-school-of-night.jpg",
      setting: "London, 1985: Kristian Hadeland is a photography student who meets an eccentric Dutch artist", note: "A 2026 National Book Award finalist for Translated Literature, and a Book & Shores Weekly Reads pick (Oct 25, 2026). The New York retrospective later in the novel is not pinned.",
      page: "book-the-school-of-night.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/760316/the-school-of-night-by-karl-ove-knausgaard/",
      src: "book-the-school-of-night.html (\"London, 1985. Kristian Hadeland, a photography student\"); Penguin Random House book page (London, 1985)" }
  ]}
  ,{ id: "szonden-oder", name: "Szonden, on the Oder (Prussia)", lng: 14.5506, lat: 52.3412, area: true, cc: "PL", cont: "Europe", reg: ["szonden", "oder", "prussia", "poland", "oder river"], books: [
    { title: "Centroeuropa", author: "Vicente Luis Mora", year: 2026, isbn: "9781954276529", cover: "weekly-centroeuropa.jpg",
      setting: "Szonden, a small Prussian town on the Oder River in the 1820s (in what is now Poland): Redo Hauptshammer digs to bury his wife and finds frozen soldiers", note: "The 2026 National Book Award winner for Translated Literature, and a Book & Shores Weekly Reads pick (Oct 25, 2026). Szonden is the novel's town; the pin sits on the Oder near Frankfurt (Oder).",
      page: "book-centroeuropa.html",
      srcUrl: "https://www.kirkusreviews.com/book-reviews/vicente-luis-mora/centroeuropa/",
      src: "Kirkus Reviews (\"the Prussian village of Szonden on the banks of the Oder River in the 1820s\"); Bellevue Literary Press book page; Complete Review (\"on the Oder (in what is now Poland)\")" }
  ]}
  ,{ id: "jakarta-thousand-hells", name: "Jakarta, Indonesia", lng: 106.8456, lat: -6.2088, area: true, cc: "ID", cont: "Asia", reg: ["jakarta", "indonesia", "java"], books: [
    { title: "Night of a Thousand Hells", author: "Intan Paramaditha", year: 2026, isbn: "9798889662129", cover: "weekly-night-of-a-thousand-hells.jpg",
      setting: "Jakarta, after a suicide bombing by the youngest of three Indonesian sisters; the novel also moves through the United States and Australia", note: "A 2026 National Book Award finalist for Translated Literature, and a Book & Shores Weekly Reads pick (Oct 25, 2026). The pin marks Jakarta; the other countries are not pinned.",
      page: "book-night-of-a-thousand-hells.html",
      srcUrl: "https://www.europaeditions.co.uk/book/9781787706644/night-of-a-thousand-hells",
      src: "Europa Editions (\"Set across Indonesia, the United States, and Australia\"); Foreword Reviews (Mutiara in Indonesia; Maya in New York, then returns to Jakarta)" }
  ]}

  ,{ id: "haight-ashbury-715", name: "715 Ashbury Street, Haight-Ashbury, San Francisco", lng: -122.4470, lat: 37.7687, area: false, cc: "US", cont: "North America", reg: ["haight-ashbury", "haight ashbury", "ashbury", "ashbury street", "715 ashbury", "san francisco", "california", "bay area"], books: [
    { title: "California Dreams: The Art of Stanley Mouse", author: "Stanley Mouse Miller", year: 2015, isbn: "9781593765460", cover: "atlas/cover-california-dreams.jpg",
      setting: "715 Ashbury Street in Haight-Ashbury, San Francisco, where Stanley Mouse and Alton Kelley lived and made posters in 1966–67, across the street from the Grateful Dead at 710 Ashbury", note: "Art book. A career-spanning collection of Mouse's psychedelic posters, album covers and later fine art. The pin marks the Haight-Ashbury house where Mouse and Kelley worked during the San Francisco poster scene the book covers; his Detroit hot-rod years and later work are not pinned.",
      page: "book-california-dreams.html",
      srcUrl: "https://softskull.com/books/california-dreams/",
      src: "Soft Skull Press book page (Mouse \"taking Haight-Ashbury by storm\" in San Francisco's counterculture renaissance); Vanity Fair, July 2012 (\"Kelley and Mouse made their posters at 715 Ashbury, across the street\"); Sotheby's (Mouse lived at 715 Ashbury across from the Dead); SF Planning / San Francisco Heritage Citywide Historic Context Statement for Counterculture (1965–1975), adopted 17 July 2024 (Mouse Studios at 715 Ashbury)" }
  ]},
  { id: "columbia-rmbl", name: "Rare Book and Manuscript Library, Columbia University, New York", lng: -73.9631, lat: 40.8064, area: false, cc: "US", cont: "North America", reg: ["columbia", "columbia university", "rare book and manuscript library", "rmbl", "butler library", "morningside heights", "manhattan", "new york", "new york city", "nyc"], books: [
    { title: "On Closeness: Minoritarian Method and Forms of Relation", author: "Olivia Michiko Gagnon", year: 2026, isbn: "9781479831067", cover: "atlas/cover-on-closeness.jpg",
      setting: "Columbia University's Rare Book and Manuscript Library in New York City, where Gagnon first encountered a 1915 lithograph by Inuk artist Nungusuituq in the Robert J. Flaherty Papers",
      note: "A study of closeness as method in contemporary art and performance. The pin marks the library where the book opens and later returns; it does not mark every place the chapters visit. Gagnon also writes from Vancouver and of growing up in Montréal, and spends time with artworks tied to Brooklyn, Providence Canyon in Georgia, Nunavik and Greenland.",
      page: "book-on-closeness.html",
      src: "book-on-closeness.html (Olivia Michiko Gagnon, On Closeness: Minoritarian Method and Forms of Relation, NYU Press, 2026, pp. 1–2, 160–163: Rare Book and Manuscript Library, Columbia University, New York City; Robert Joseph Flaherty Papers)" }
  ]}

  ,{ id: "seoul-korean-music", name: "Seoul, South Korea", lng: 126.9780, lat: 37.5665, area: true, cc: "KR", cont: "Asia", reg: ["seoul", "korea", "south korea", "korean music", "k-pop"], books: [
    { title: "Fighting for Your Right to Party", author: "Jung Wooyoung", year: 2026, cover: "weekly-fighting-for-your-right-to-party.jpg", page: "book-fighting-for-your-right-to-party.html",
      setting: "Korean popular music, 1967–2022, through 100 albums and songs and ten international collectors, DJs and writers", note: "Weekly Reads, Nov 15. The book covers Korean music, not one neighborhood, so this dashed ring marks Seoul, the country's capital, at city level. Poets & Punks is based in London and Seoul.",
      srcUrl: "https://www.poetsandpunks.com/shop/p/poetspunks-banju-and-anju-book-cn5sj-4r7sn",
      src: "Poets & Punks book page (\"explores Korean popular music through the perspectives of ten international collectors, DJs and writers\"; \"100 Korean albums and songs spanning 1967–2022\"); Poets & Punks About page (\"Based in London and Seoul\")" }
  ]}
  ,{ id: "tokyo-seoul-to-tokyo", name: "Tokyo, Japan", lng: 139.7671, lat: 35.6812, area: true, cc: "JP", cont: "Asia", reg: ["tokyo", "japan", "kanto"], books: [
    { title: "Walking in Place 3: Tokyo", author: "Mike Slack", isbn: "9781922545565", cover: "weekly-walking-in-place-3-tokyo.jpg", page: "book-walking-in-place-3-tokyo.html",
      setting: "Tokyo's streets, photographed on foot: \"identifiably Tokyo terrain\"", note: "Weekly Reads, Nov 15. Perimeter Editions. The dashed ring marks the city, not one street.",
      srcUrl: "https://perimetereditions.com/mike-slack-%E2%80%93-walking-in-place-3-tokyo",
      src: "Perimeter Editions book page (\"this is identifiably Tokyo terrain\"; \"the city folds in on itself to describe Tokyo's curious, utterly unique, ambience\")" },
    { title: "Mondo Tokyo: Dispatches from a Secret Japan", author: "Patrick Macias", year: 2024, isbn: "9781990823299", cover: "weekly-mondo-tokyo.jpg", page: "book-mondo-tokyo.html",
      setting: "Tokyo in the early 2000s and the ex-pats, weirdoes and dreamers who came looking for a stranger life", note: "Weekly Reads, Nov 15. Sutherland House. The dashed ring marks the city.",
      srcUrl: "https://sutherlandhousebooks.com/product/mondo-tokyo",
      src: "Sutherland House book page (\"Tokyo, in the early aughts, was a weird place\"; \"wide-eyed ex-pats, weirdoes, and dreamers who came to Tokyo\")" },
    { title: "Jazz Kissa: Japan's Greatest Listening Cafes", author: "Katsumasa Kusunose", cover: "weekly-jazz-kissa.jpg", page: "book-jazz-kissa.html",
      setting: "Japan's jazz listening cafes, \"from the heart of Tokyo to the most remote corners of the country\"", note: "Weekly Reads, Nov 15. ERG Media. The book travels across Japan; the pin sits in Tokyo, where the publisher starts.",
      srcUrl: "https://erg.media/pages/jazz-kissa",
      src: "ERG Media book page (\"From the heart of Tokyo to the most remote corners of the country, listening bars popularly known as Jazz Kissa have shaped Japanese musical culture since the 1940s\")" }
  ]}
  ,{ id: "japan-caring-for-a-corpse", name: "The Japanese mountains, Japan", heading: "Caring for a Corpse", sub: "The Japanese mountains, Japan", lng: 138.2529, lat: 36.2048, area: true, cc: "JP", cont: "Asia", reg: ["japan", "japanese mountains", "japanese alps", "honshu", "japanese literature"], books: [
    { title: "Caring for a Corpse", author: "Harumi Miura, tr. Tristan Hill", isbn: "9798855427875", cover: "9798855427875.jpg", page: "book-caring-for-a-corpse.html",
      setting: "A sprawling, ominous mansion \"deep in the Japanese mountains\"", note: "Weekly Reads No. 6, Nov 21. Avocado House (Yen Press). The publisher doesn't name the mountains, so the dashed ring marks Japan, not one place.",
      srcUrl: "https://avocadohouse.com/books/9798855427875-caring-for-a-corpse",
      src: "Avocado House book page (\"Deep in the Japanese mountains, Akane Kuriya begins a new job as a live-in caregiver. She moves into a sprawling, ominous mansion\")" }
  ]}
  /* B&S: past Weekly Reads pinned Nov 24, 2026 (AE: "Every Weekly Read in the past should be on our Atlas"). Only books with a real, named setting from a citable source. */
  ,{ id: "guyenne-creation-lake", name: "The Guyenne, southwestern France", heading: "Creation Lake", sub: "The Guyenne, southwestern France", lng: 0.62, lat: 44.6, area: true, cc: "FR", cont: "Europe", reg: ["guyenne", "aquitaine", "southwestern france", "south-west france", "france"], books: [
    { title: "Creation Lake", author: "Rachel Kushner", isbn: "9781982116538", cover: "9781982116538.jpg", page: "book-creation-lake.html",
      setting: "Le Moulin, an anarchist farming commune in the Guyenne, a region of old farms and prehistoric caves in southwestern France", note: "Weekly Reads, January 2026. Kushner calls her Guyenne fictional, an old name for a part of southwestern France she knows well, so the dashed ring marks the region, not one town.",
      srcUrl: "https://www.newyorker.com/magazine/2024/10/14/creation-lake-rachel-kushner-book-review",
      src: "The New Yorker review (\"an anarchist commune called Le Moulin, in the southwestern region of Guyenne\"); NPR interview with Kushner (\"I call it the Guyenne ... a region of southwestern France\"), https://www.npr.org/2024/09/07/nx-s1-5061496/rachel-kushner-on-her-new-spy-novel-creation-lake" }
  ]}
  ,{ id: "greenwich-village", name: "Greenwich Village, New York", heading: "Women in the Shadows", sub: "Greenwich Village, New York", lng: -74.0030, lat: 40.7336, area: true, cc: "US", cont: "North America", reg: ["greenwich village", "the village", "manhattan", "new york", "new york city", "nyc"], books: [
    { title: "Women in the Shadows", author: "Ann Bannon", year: 1959, isbn: "9781573441490", cover: "Shadows.jpg", page: "book-women-in-the-shadows.html",
      setting: "Greenwich Village, late 1950s: Laura and Beebo's apartment, the gay bars and the raids", note: "Weekly Reads, February 2026. The third Beebo Brinker novel (1959), in the Cleis Press edition.",
      srcUrl: "https://www.annbannon.com/books-intro-womenshadows.html",
      src: "Ann Bannon's introduction to the Cleis Press edition (Greenwich Village, its bars and police raids); the novel's opening (\"in Greenwich Village that is a pretty good record\"), Project Gutenberg; Cleis Press / Simon & Schuster book page" }
  ]}
  ,{ id: "mexico-reservoir-bitches", name: "Mexico", heading: "Reservoir Bitches", sub: "Mexico", lng: -102.55, lat: 23.63, area: true, cc: "MX", cont: "North America", reg: ["mexico", "méxico"], books: [
    { title: "Reservoir Bitches", author: "Dahlia de la Cerda, tr. Julia Sanches and Heather Cleary", isbn: "9781558613119", cover: "BITCHES.png", page: "book-reservoir-bitches.html",
      setting: "Thirteen linked stories of women across contemporary Mexico", note: "Weekly Reads, July 2026. Longlisted for the 2025 International Booker Prize. The stories range across the country, so the dashed ring marks Mexico, not one city.",
      srcUrl: "https://thebookerprizes.com/the-booker-library/books/reservoir-bitches",
      src: "The Booker Prizes book page (author: \"My book is about women in Mexico who survive in violent contexts\"; \"fiction from Mexico\"); Feminist Press description (\"stories about Mexican women\")" }
  ]}
  ,{ id: "london-edinburgh-sleeper", name: "London, England (the overnight train to Edinburgh)", heading: "I Made You Up Inside My Head", sub: "London, England (the overnight train to Edinburgh)", lng: -0.1337, lat: 51.5282, area: true, cc: "GB", cont: "Europe", reg: ["london", "edinburgh", "sleeper train", "england", "scotland", "uk"], books: [
    { title: "I Made You Up Inside My Head", author: "Marta Pérez-Carbonell, tr. Rosalind Harvey", isbn: "9780593854105", cover: "IMG_2775.jpg", page: "book-i-made-you-up-inside-my-head.html",
      setting: "An overnight sleeper train from London to Edinburgh, with memories of Madrid, Mallorca, Socotra and New York", note: "Weekly Reads, July 2026. The pin sits at London, where the night train sets out; the publisher does not name the station.",
      srcUrl: "https://www.penguinrandomhouse.com/books/771163/i-made-you-up-inside-my-head-by-marta-perez-carbonell-translated-by-rosalind-harvey/",
      src: "Riverhead / Penguin Random House book page (\"On an overnight train from London to Edinburgh\"); Publishers Weekly review (\"the monthly commute to Edinburgh\")" }
  ]}
  ,{ id: "pacific-energy-fields", name: "The Pacific", lng: 155.0, lat: 25.0, area: true, cc: "", cont: "Pacific Ocean", reg: ["pacific", "pacific ocean", "pacific rim", "pacific plate"], books: [
    { title: "Energy Fields: Vibrations of the Pacific", author: "Lawrence English and Robert Takahashi Novak (eds.)", year: 2025, isbn: "9789083449807", cover: "weekly-energy-fields.jpg", page: "book-energy-fields.html",
      setting: "The Pacific, \"the most dynamic tectonic plate on the face of the planet,\" read through its volcanic, seismic, nuclear and other vibrations", note: "Set Margins' #39, published with the exhibition at Chapman University (Sept 15, 2024 – Jan 19, 2025). Weekly Reads, Nov 15. The pin marks the ocean as a whole, not one place.",
      srcUrl: "https://www.setmargins.press/books/energy-fields-vibrations-of-the-pacific/",
      src: "Set Margins' book page (\"As the most dynamic tectonic plate on the face of the planet, the Pacific has been a hotbed of activity caused by volcanic, seismic, nuclear, and other vibrant forces\")" }
  ]}
  /* B&S: Seoul to Tokyo Weekly Reads, Nov 15, 2026 (local draft for AE packet; not live).
     The rejected Nov 15 pins (Yeonhui-dong / The Seoul Letter Shop, Musashino / How Can My Manager Be So Stupid?, Tokyo Village Vanguard / The Bookshop Woman) have been removed.
     None of the approved books have a publisher-named neighborhood that matches those three stops without inventing a setting.
     Optional pins (AE decision, not added here): Park Hyatt Tokyo for Lost in Translation if the 8th is included; Toshima City for one episode in Fracture; a general Tokyo pin for Walking in Place 3, Mondo Tokyo, or Jazz Kissa only if AE accepts a city-level pin. Love at Least stays off the map. */

  /* B&S: Bookstore titles added to the Atlas, Nov 25, 2026.
     Setting pins first, then press-location pins (published: true).
     Press pins are labeled "Published in [city] by [press]" and never as a story setting. */

  ,{ id: "willingdon-manor-farm", name: "Manor Farm, near Willingdon, England", lng: 0.2501, lat: 50.8004, area: true, cc: "GB", cont: "Europe", reg: ["willingdon", "manor farm", "animal farm", "east sussex", "sussex", "england"], books: [
    { title: "Animal Farm (75th Anniversary Edition)", author: "George Orwell", year: 1945, isbn: "9780451526342", cover: "n-5.jpg",
      setting: "Manor Farm, near Willingdon, England, later renamed Animal Farm", note: "Signet 75th anniversary edition. Willingdon is the village named in the book; a real East Sussex village shares the name. The dashed ring marks that village, not a claimed inspiration site.",
      page: "bookstore.html",
      srcUrl: "https://en.wikipedia.org/wiki/Animal_Farm",
      src: "Wikipedia (Animal Farm), plot summary: \"The animal populace of Manor Farm near Willingdon, England\"" }
  ]}
  ,{ id: "rue-la-boetie", name: "21 rue La Boétie, Paris", lng: 2.3169, lat: 48.8740, area: false, cc: "FR", cont: "Europe", reg: ["rue la boétie", "la boetie", "paris", "8th arrondissement", "france"], books: [
    { title: "My Grandfather's Gallery", author: "Anne Sinclair, tr. Shaun Whiteside", year: 2014, isbn: "9781250074775", cover: "9781250074775.jpg",
      setting: "21 rue La Boétie, Paris, the gallery of Paul Rosenberg, dealer for Picasso, Matisse and Braque", note: "A family memoir of art and war. Picador paperback.",
      page: "book-my-grandfathers-gallery.html",
      srcUrl: "https://bookandshores.com/book-my-grandfathers-gallery.html",
      src: "book-my-grandfathers-gallery.html (Paul Rosenberg \"had been the Paris dealer for Picasso, Matisse and Braque, at 21 rue La Boétie\")" }
  ]}
  ,{ id: "silicon-valley-nerd-reich", name: "Silicon Valley, California", lng: -122.1545, lat: 37.4430, area: true, cc: "US", cont: "North America", reg: ["silicon valley", "san francisco", "bay area", "california", "palo alto"], books: [
    { title: "The Nerd Reich: Silicon Valley Fascism and the War on Democracy", author: "Gil Durán", year: 2026, isbn: "9781668221402", cover: "n-3.jpg",
      setting: "Silicon Valley, from San Francisco politics to the international stage", note: "Avid Reader Press / Simon & Schuster. The dashed ring marks Silicon Valley as a region, not one office.",
      page: "bookstore.html",
      srcUrl: "https://www.simonandschuster.com/books/The-Nerd-Reich/Gil-Duran/9781668221402",
      src: "Avid Reader Press / Simon & Schuster book page (\"from its early days in San Francisco politics\"; \"Silicon Valley's war on democracy\"; \"From San Francisco's weaponized elections\")" }
  ]}

  ,{ id: "ancient-greece", name: "Ancient Greece", heading: "Ancient Greece", sub: "University of Chicago Press", cardBy: "University of Chicago Press", pageName: "Ancient Greece", lng: 23.7257, lat: 37.9715, area: false, cc: "GR", cont: "Europe", reg: ["ancient greece", "greece", "athens", "hellas"],
    desc: "Turning Away by Benjamin A. Saltzman, pinned in Ancient Greece, where the gesture begins. University of Chicago Press. The book traces that gesture through later art, poetry and philosophy.",
    hero: "1 book pinned here, where the gesture begins. The book traces that gesture through later art, poetry and philosophy.", books: [
    { title: "Turning Away", author: "Benjamin A. Saltzman", isbn: "9780226847221", cover: "TURNING.jpg",
      setting: "Ancient Greece, where the gesture begins", note: "Turning Away: The Poetics of an Ancient Gesture. A study of the averted gaze in art, poetry and philosophy, from Timanthes and Plato to the present. Weekly Reads, July 2026.",
      page: "book-turning-away.html", cta: "Our page for the book →",
      srcUrl: "https://press.uchicago.edu/ucp/books/book/chicago/T/bo264591260.html",
      src: "book-turning-away.html; University of Chicago Press book page (Turning Away: The Poetics of an Ancient Gesture starts from Timanthes's Sacrifice of Iphigenia, Plato's Republic, and other scenes)" }
  ]}
  ,{ id: "cambridge-mit-press", name: "Cambridge, Massachusetts", heading: "Published in Cambridge", sub: "The MIT Press", cardBy: "The MIT Press", published: true, lng: -71.0853, lat: 42.3628, area: false, cc: "US", cont: "North America", reg: ["cambridge", "mit", "mit press", "kendall square", "massachusetts"],
    desc: "MIT Press titles from the bookstore, pinned at the press in Cambridge, Massachusetts, not as story settings. The press address is cited.", books: [
    { title: "Beautiful Particulars", author: "David Weinberger", isbn: "9780262054867", cover: "PARTICULARS.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A work of ideas from The MIT Press.",
      page: "bookstore.html",
      srcUrl: "https://mitpress.mit.edu/9780262054867/",
      src: "The MIT Press book page (9780262054867); MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "Better Tech", author: "Francine Berman", isbn: "9780262054881", cover: "BETTERTECH.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A work of ideas from The MIT Press.",
      page: "bookstore.html",
      srcUrl: "https://mitpress.mit.edu/9780262054881/better-tech/",
      src: "The MIT Press book page (Better Tech); MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "Design for Entropy: Active Inference and Technology", author: "Luca M. Possati", isbn: "9780262056267", cover: "DESIGN.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A work of ideas from The MIT Press.",
      page: "bookstore.html",
      src: "ISBN 9780262056267 is a The MIT Press title; MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "Life's Chemical Secret", author: "Addy Pross", isbn: "9780262054836", cover: "CHEMICAL.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A work of ideas from The MIT Press.",
      page: "bookstore.html",
      srcUrl: "https://doi.org/10.7551/mitpress/16156.001.0001",
      src: "The MIT Press Direct book page (DOI 10.7551/mitpress/16156.001.0001); MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "Nary a Horse Left Standing", author: "Lee Alan Dugatkin", isbn: "9780262054546", cover: "NARY.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A work of ideas from The MIT Press.",
      page: "bookstore.html",
      src: "ISBN 9780262054546 is a The MIT Press title; MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "Strange Attractor", author: "Graham St John", isbn: "9780262049573", cover: "Terence.jpg",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "Strange Attractor: The Hallucinatory Life of Terence McKenna, with a foreword by Erik Davis. A biography that does not center on one named place.",
      page: "bookstore.html",
      srcUrl: "https://mitpress.mit.edu/9780262049573/strange-attractor/",
      src: "The MIT Press book page (Strange Attractor: The Hallucinatory Life of Terence McKenna, Graham St John); MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "The Aesthetics of Machine Vision: Critical Terms and Ideas", author: "Edited by Kathrin Maurer, Rikke Munck Petersen, Dominique Routhier, Kassandra Wellendorf, and Kristin Veel", isbn: "9780262054171", cover: "Vision.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A critical-terms volume from The MIT Press.",
      page: "bookstore.html",
      src: "ISBN 9780262054171 is a The MIT Press title; MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "The Carbon Wave: A Story of Democracy, Parenthood, and the Race to Protect Our Planet", author: "Leah C. Stokes", isbn: "9780262054775", cover: "CARBON.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A work of ideas from The MIT Press. The publisher does not name one place as the book's center.",
      page: "bookstore.html",
      src: "ISBN 9780262054775 is a The MIT Press title; MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" },
    { title: "The Player and the Played", author: "Max Haiven", isbn: "9780262056045", cover: "PLAYER.png",
      setting: "Published in Cambridge, Massachusetts, by The MIT Press", note: "A work of ideas from The MIT Press.",
      page: "bookstore.html",
      srcUrl: "https://maxhaiven.com/player/",
      src: "ISBN 9780262056045 is a The MIT Press title; MIT Press contact page, 255 Main Street, 9th Floor, Cambridge, MA 02142, https://mitpress.mit.edu/contact-us/" }
  ]}
  ,{ id: "durham-duke-press", name: "Durham, North Carolina", heading: "Published in Durham", sub: "Duke University Press", cardBy: "Duke University Press", published: true, lng: -78.9099, lat: 36.0001, area: false, cc: "US", cont: "North America", reg: ["durham", "north carolina", "duke", "duke university press"],
    desc: "Duke University Press titles from the bookstore, pinned at the press in Durham, not as story settings. The press address is cited.", books: [
    { title: "Archives of the Anthropocene: Visual Grammars of Deep Time", author: "Yuriko Furuhata", isbn: "9781478038948", cover: "IMG_2856.jpg",
      setting: "Published in Durham, North Carolina, by Duke University Press", note: "A scholarly book on visual grammars of deep time.",
      page: "bookstore.html",
      src: "ISBN 9781478038948 is a Duke University Press title; Duke University Press contact page, 905 W. Main St. Ste 18-B, Durham, NC 27701, https://dukeupress.edu/contact" },
    { title: "Live Dead: The Grateful Dead, Live Recordings, and the Ideology of Liveness", author: "John Brackett", isbn: "9781478025481", cover: "LIVEDEAD.png",
      setting: "Published in Durham, North Carolina, by Duke University Press", note: "A scholarly study of Grateful Dead live recordings. The press does not name one place as the book's center.",
      page: "bookstore.html",
      src: "ISBN 9781478025481 is a Duke University Press title; Duke University Press contact page, 905 W. Main St. Ste 18-B, Durham, NC 27701, https://dukeupress.edu/contact" },
    { title: "Touch of Grey, or How the Grateful Dead Became Pop Stars", author: "John Brackett", isbn: "9781478038894", cover: "TOUCHGREY.png",
      setting: "Published in Durham, North Carolina, by Duke University Press", note: "A scholarly study of the Grateful Dead. The press does not name one place as the book's center.",
      page: "bookstore.html",
      src: "ISBN 9781478038894 is a Duke University Press title; Duke University Press contact page, 905 W. Main St. Ste 18-B, Durham, NC 27701, https://dukeupress.edu/contact" },
    { title: "Worlds Beyond Bios", author: "Sophie Chao, Christine J. Winter & David Schlosberg", isbn: "9781478038870", cover: "WORLDS.png",
      setting: "Published in Durham, North Carolina, by Duke University Press", note: "Environmental thinkers on worlds beyond the human.",
      page: "bookstore.html",
      src: "ISBN 9781478038870 is a Duke University Press title; Duke University Press contact page, 905 W. Main St. Ste 18-B, Durham, NC 27701, https://dukeupress.edu/contact" }
  ]}
  ,{ id: "new-york-columbia-press", name: "New York, New York", heading: "Published in New York", sub: "Columbia University Press", cardBy: "Columbia University Press", published: true, lng: -73.9828, lat: 40.7711, area: false, cc: "US", cont: "North America", reg: ["columbia university press", "lincoln square", "manhattan", "new york", "new york city", "nyc"],
    desc: "The Edges of Cinema by Erika Balsom, pinned at Columbia University Press in New York, not as a story setting. The press address is cited.", books: [
    { title: "The Edges of Cinema", author: "Erika Balsom", isbn: "9780231221337", cover: "EDGES.png",
      setting: "Published in New York by Columbia University Press", note: "A work of film criticism and ideas from Columbia University Press.",
      page: "bookstore.html",
      srcUrl: "https://cup.columbia.edu/contact/",
      src: "ISBN 9780231 is a Columbia University Press title; Columbia University Press contact page, 61 West 62 Street, New York, NY 10023, https://cup.columbia.edu/contact/" }
  ]}
  ,{ id: "minneapolis-coffee-house-press", name: "Minneapolis, Minnesota", heading: "Published in Minneapolis", sub: "Coffee House Press", cardBy: "Coffee House Press", published: true, lng: -93.2705, lat: 45.0000, area: false, cc: "US", cont: "North America", reg: ["minneapolis", "minnesota", "coffee house press"],
    desc: "Helen of Nowhere by Makenna Goodman, pinned at Coffee House Press in Minneapolis. The publisher places the story in the countryside and does not name a town.", books: [
    { title: "Helen of Nowhere", author: "Makenna Goodman", year: 2025, isbn: "9781566897358", cover: "HELEN.png",
      setting: "Published in Minneapolis by Coffee House Press", note: "Longlisted for the 2026 Booker Prize. Coffee House Press places the story in the countryside, at an idyllic house, and does not name a town, so the pin marks the press.",
      page: "book-helen-of-nowhere.html",
      srcUrl: "https://coffeehousepress.org/products/helen-of-nowhere",
      src: "Coffee House Press book page (\"In the middle of the countryside, a realtor is showing a disgraced professor around an idyllic house\"); Coffee House Press contact page, 79 Thirteenth Avenue NE, Suite 110, Minneapolis, MN 55413, https://coffeehousepress.org/pages/contact" }
  ]}
  ,{ id: "london-presses", name: "London, England", heading: "Published in London", sub: "Publishers in London", cardBy: "Publishers in London", published: true, lng: -0.1072, lat: 51.5114, area: true, cc: "GB", cont: "Europe", reg: ["london", "england", "uk", "octopus", "pushkin", "harpercollins", "montez"],
    desc: "Bookstore titles whose publishers are in London, pinned at the city of the press, not as story settings. Each book names its press, with the source cited.", books: [
    { title: "Cursed Thing", author: "Nashi, tr. Jim Rion", year: 2027, isbn: "9781846019180", cover: "9781846019180.jpg",
      setting: "Published in London by Octopus Publishing Group", note: "Octopus describes images of a young woman's face across the city and does not name the city, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-cursed-thing.html",
      srcUrl: "https://www.hachette.co.uk/titles/nashi/cursed-thing/9781846019180/",
      src: "Hachette UK / Octopus book listing (Cursed Thing, 9781846019180); book-cursed-thing.html (Octopus does not name the city); Octopus contact page, Carmelite House, 50 Victoria Embankment, London EC4Y 0DZ, https://www.octopusbooks.co.uk/imprint/octopus/page/contact-octopus/" },
    { title: "Please Form Pairs", author: "Chiren Kina, tr. Haydn Trowell", year: 2026, isbn: "9781846017537", cover: "9781846017537.jpg",
      setting: "Published in London by Octopus Publishing Group", note: "Octopus places the story at a school in Japan and does not name a city, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-please-form-pairs.html",
      src: "book-please-form-pairs.html (Octopus, August 2026; places the story at a school in Japan and does not name a city); Octopus contact page, Carmelite House, 50 Victoria Embankment, London EC4Y 0DZ, https://www.octopusbooks.co.uk/imprint/octopus/page/contact-octopus/" },
    { title: "Negative Space", author: "Kaori Fujino, tr. Kendall Heitzman", year: 2027, isbn: "9781805680413", cover: "9781805680413.jpg",
      setting: "Published in London by Pushkin Press", note: "Pushkin Press places the story in a university flat and does not name a city, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-negative-space.html",
      src: "book-negative-space.html (Pushkin Press, March 2027; places the story in a university flat and does not name a city); Pushkin Press contact page, Somerset House, Strand, London WC2R 1LA, https://pushkinpress.com/contact/" },
    { title: "The Flower Brings Death", author: "Chihiro Kurihara", year: 2027, isbn: "9780008863807", cover: "9780008863807.jpg",
      setting: "Published in London by HarperCollins", note: "HarperCollins UK edition (ISBN 978-0-00). In the Japanese Lit collection. The publisher page does not name a story setting, so the pin marks the press.",
      page: "book-the-flower-brings-death.html", buy: "https://www.harpercollins.com/products/the-flower-brings-death-chihiro-kurihara",
      srcUrl: "https://corporate.harpercollins.co.uk/people-and-culture/about-our-offices/",
      src: "book-the-flower-brings-death.html (HarperCollins, 23 September 2027, ISBN 9780008863807); HarperCollins UK offices page, The News Building, 1 London Bridge Street, London SE1 9GF, https://corporate.harpercollins.co.uk/people-and-culture/about-our-offices/" },
    { title: "The Whole Routine", author: "Edward Thomasson", year: 2026, cover: "WHOLE.png",
      setting: "Published in London by Montez Press", note: "A performance score from the Montez Press Scores imprint. The text is not tied to one named city, so the pin marks the press.",
      page: "bookstore.html", buy: "https://www.montezpress.com/catalogue/scores/the-whole-routine/",
      srcUrl: "https://www.montezpress.com/catalogue/scores/the-whole-routine/",
      src: "Montez Press book page (The Whole Routine, a musical performance about control and desire); Montez Press contact page, Unit 29, Penarth Centre, Penarth Street, SE15 1TR, London, https://www.montezpress.com/about/contact/" }
  ]}
  ,{ id: "new-york-presses", name: "New York, New York", heading: "Published in New York", sub: "Publishers in New York", cardBy: "Publishers in New York", published: true, lng: -73.9809, lat: 40.7589, area: true, cc: "US", cont: "North America", reg: ["new york", "new york city", "nyc", "manhattan", "publishers"],
    desc: "Bookstore titles whose publishers are in New York, pinned at the city of the press, not as story settings. Each book names its press, with the source cited.", books: [
    { title: "A Sudden Flicker of Light: A Revisionist History of Movies", author: "David Thomson", isbn: "9781668205730", cover: "IMG_2770.jpg",
      setting: "Published in New York by Simon & Schuster", note: "A history of movies. The book does not center on one named place, so the pin marks the press.",
      page: "bookstore.html",
      src: "ISBN 9781668 is a Simon & Schuster title; Simon & Schuster locations page, Corporate Headquarters, 1230 Avenue of the Americas, New York, NY 10020, https://www.simonandschuster.biz/p/locations" },
    { title: "Birds of America", author: "Chera Hammons", year: 2026, isbn: "9780593980033", cover: "Birds.png",
      setting: "Published in New York by Dial Press", note: "Poems steeped in the natural world. The publisher description does not name a setting, so the pin marks the press, not the author's home.",
      page: "bookstore.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/799081/birds-of-america-by-chera-hammons/",
      src: "Dial Press / Penguin Random House book page (\"poems steeped in the natural world\"; imprint Dial Press Trade Paperback); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Chain of Ideas", author: "Ibram X. Kendi", isbn: "9780593978023", cover: "Chain.png",
      setting: "Published in New York by Penguin Random House", note: "A book of ideas. The publisher listing does not name one place as the book's center, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://penguinrandomhousehighereducation.com/book/?isbn=9780593978023",
      src: "Penguin Random House higher-education book page (9780593978023); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Covering Islam", author: "Edward W. Said", isbn: "9780679758907", cover: "COVERING.png",
      setting: "Published in New York by Vintage", note: "A work of criticism from Vintage, a Penguin Random House imprint.",
      page: "bookstore.html",
      src: "ISBN 9780679 is a Vintage / Penguin Random House title; Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Daylight Come: Harry Belafonte and the World He Made", author: "Joshua Jelly-Schapiro", year: 2026, isbn: "9780593652701", cover: "IMG_2776.jpg",
      setting: "Published in New York by Penguin Press", note: "A biography that follows Belafonte from Harlem to Jamaica to the March on Washington, so it does not center on one place. The pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/716426/daylight-come-by-joshua-jelly-schapiro-curated-by-henry-louis-gates-jr/",
      src: "Penguin Press book page (\"following him from rags to riches and from Harlem to Jamaica to the March on Washington\"); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Future Shock", author: "Alvin Toffler", isbn: "9780553277371", cover: "FUTURESHOCK.png",
      setting: "Published in New York by Bantam", note: "A work of ideas from Bantam, a Penguin Random House imprint.",
      page: "bookstore.html",
      src: "ISBN 9780553 is a Bantam / Penguin Random House title; Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Let the Poets Govern", author: "Camonghne Felix", isbn: "9780593242148", cover: "9780593242148.jpg",
      setting: "Published in New York by Penguin Random House", note: "A 2026 National Book Award finalist for Nonfiction. The book does not center on one named place, so the pin marks the press.",
      page: "book-let-the-poets-govern.html",
      src: "book-let-the-poets-govern.html; Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Madame Composer: The Virtuosic Genius of Clara Schumann", author: "Sarah Fritz", year: 2026, isbn: "9798897101887", cover: "IMG_2782.jpg",
      setting: "Published in New York by Pegasus Books", note: "A biography of Clara Schumann that moves with her career and does not center on one named city, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "http://www.pegasusbooks.com/about/contact",
      src: "Pegasus Books contact page, 148 West 37th Street, 13th Floor, New York, NY 10018, http://www.pegasusbooks.com/about/contact" },
    { title: "Mother Tongue", author: "Sara Nović", isbn: "9780593241530", cover: "9780593241530.jpg",
      setting: "Published in New York by Penguin Random House", note: "A 2026 National Book Award finalist for Nonfiction. The book does not center on one named place, so the pin marks the press.",
      page: "book-mother-tongue.html",
      src: "book-mother-tongue.html; Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Music Sets You Free", author: "Ryuichi Sakamoto, tr. Sam Bett", year: 2026, isbn: "9780063416505", cover: "IMG_2781.jpg",
      setting: "Published in New York by HarperCollins", note: "A memoir of a career that does not center on one named city, so the pin marks the press. This edition is the HarperCollins US ISBN.",
      page: "bookstore.html",
      srcUrl: "https://www.harpercollins.com/pages/privacy-notice",
      src: "HarperCollins US ISBN 9780063416505; HarperCollins Publishers privacy notice, 195 Broadway, New York, NY 10007, https://www.harpercollins.com/pages/privacy-notice" },
    { title: "Platonic Love", author: "Mieko Kanai, tr. Polly Barton", year: 2027, isbn: "9780811239424", cover: "9780811239424.jpg",
      setting: "Published in New York by New Directions", note: "Short stories first published in Japan in the 1970s, with no single named place, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-platonic-love.html",
      srcUrl: "https://www.ndbooks.com/about/contact/",
      src: "book-platonic-love.html (New Directions, April 2027; short stories, no single place); New Directions contact page, 80 Eighth Avenue, New York, NY 10011, https://www.ndbooks.com/about/contact/" },
    { title: "Powershift", author: "Alvin Toffler", isbn: "9780553292152", cover: "POWERSHIFT.png",
      setting: "Published in New York by Bantam", note: "A work of ideas from Bantam, a Penguin Random House imprint.",
      page: "bookstore.html",
      srcUrl: "https://penguinrandomhousehighereducation.com/book/?isbn=9780553292152",
      src: "Penguin Random House higher-education book page (9780553292152); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "Push the Wall: My Life, Writing, Drawing, and the Art of Storytelling", author: "Frank Miller", year: 2026, isbn: "9781668065297", cover: "IMG_2771.jpg",
      setting: "Published in New York by Simon & Schuster", note: "A memoir of a life and craft that does not center on one named place, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.simonandschuster.biz/books/Push-the-Wall/Frank-Miller/9781668065297",
      src: "Simon & Schuster book page (Push the Wall); Simon & Schuster locations page, Corporate Headquarters, 1230 Avenue of the Americas, New York, NY 10020, https://www.simonandschuster.biz/p/locations" },
    { title: "Scream", author: "Tokuro Nukui", year: 2027, isbn: "9781668204740", cover: "9781668204740.jpg",
      setting: "Published in New York by Atria / Emily Bestler Books", note: "Atria/Emily Bestler Books places the story in contemporary Japan and does not name a city, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-scream.html",
      src: "book-scream.html (Atria/Emily Bestler Books, July 2027; contemporary Japan, no city named); Simon & Schuster locations page, Corporate Headquarters, 1230 Avenue of the Americas, New York, NY 10020, https://www.simonandschuster.biz/p/locations" },
    { title: "Sickness unto Love", author: "Yuki Shasendo, tr. Michael Blaskowsky", year: 2026, isbn: "9798855423679", cover: "9798855423679.jpg",
      setting: "Published in New York by Avocado House", note: "Avocado House, an imprint of Yen Press, follows deaths across Japan and does not name a city, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-sickness-unto-love.html",
      srcUrl: "https://yenpress.com/contacts",
      src: "book-sickness-unto-love.html (Avocado House, November 2026; follows deaths across Japan, no city named); Avocado House about page (\"an imprint of Yen Press\"), https://avocadohouse.com/about; Yen Press mailing address, 150 W 30th Street, 6th floor, New York, New York 10001, https://yenpress.com/contacts" },
    { title: "Sound Within Sound: Radical Composers of the Twentieth Century", author: "Kate Molleson", year: 2022, isbn: "9781419753565", cover: "9781419753565.jpg",
      setting: "Published in New York by Abrams Press", note: "Profiles of a dozen composers who worked far from the usual capitals, so the book does not center on one place. The pin marks the press.",
      page: "book-sound-within-sound.html",
      srcUrl: "https://www.abramsbooks.com/contact/",
      src: "book-sound-within-sound.html (Abrams Press hardcover, 2022); Abrams contact page, 195 Broadway, 9th Floor, New York, NY 10007, https://www.abramsbooks.com/contact/" },
    { title: "Spawning Season", author: "Joseph Osmundson", isbn: "9781639737833", cover: "9781639737833.jpg",
      setting: "Published in New York by Bloomsbury", note: "A 2026 National Book Award finalist for Nonfiction. The book does not center on one named place, so the pin marks the press.",
      page: "book-spawning-season.html",
      srcUrl: "https://www.bloomsbury.com/us/connect/about-us/offices/",
      src: "book-spawning-season.html; Bloomsbury offices page, Bloomsbury Publishing Inc., 1359 Broadway, 12th Floor, New York, NY 10018, https://www.bloomsbury.com/us/connect/about-us/offices/" },
    { title: "Strange Maps", author: "Uketsu, tr. Jim Rion", year: 2027, isbn: "9780063577268", cover: "9780063577268.jpg",
      setting: "Published in New York by HarperVia", note: "HarperVia names a deserted coastal village and a town and does not name either place, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-strange-maps.html",
      src: "book-strange-maps.html (HarperVia, April 2027; does not name the village or the town); HarperCollins Publishers privacy notice, 195 Broadway, New York, NY 10007, https://www.harpercollins.com/pages/privacy-notice" },
    { title: "Susan Sontag: The Collected Essays", author: "Edited by David Rieff", year: 2026, isbn: "9781598538595", cover: "9781598538595.jpg",
      setting: "Published in New York by Library of America", note: "A two-volume boxed set of Sontag's essays. An essay collection does not center on one place, so the pin marks the press.",
      page: "book-susan-sontag-collected-essays.html",
      srcUrl: "https://www.loa.org/contact-us/",
      src: "book-susan-sontag-collected-essays.html (Library of America, November 3, 2026); Library of America editorial office, 14 East 60th Street, New York, NY 10022-1006, https://www.loa.org/contact-us/" },
    { title: "The Best American Essays 2026", author: "Edited by M. Gessen", year: 2026, isbn: "9780063454446", cover: "n-1.jpg",
      setting: "Published in New York by HarperCollins", note: "An annual anthology with no single setting, so the pin marks the press.",
      page: "bookstore.html",
      src: "ISBN 9780063454446 is a HarperCollins title; HarperCollins Publishers privacy notice, 195 Broadway, New York, NY 10007, https://www.harpercollins.com/pages/privacy-notice" },
    { title: "The Friday Afternoon Club", author: "Griffin Dunne", year: 2024, isbn: "9780593652848", cover: "Friday.png",
      setting: "Published in New York by Penguin Press", note: "A family memoir the publisher places in Hollywood and Manhattan, so it does not center on one place. The pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/717278/the-friday-afternoon-club-by-griffin-dunne/",
      src: "Penguin Press / Penguin Books page (\"growing up among larger-than-life characters in Hollywood and Manhattan\"); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "The Land and Its People", author: "David Sedaris", isbn: "9780316264839", cover: "Sedaris.jpg",
      setting: "Published in New York by Little, Brown and Company", note: "An essay collection that moves among many places, so it does not center on one. The pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.hachettebookgroup.com/about/",
      src: "ISBN 9780316 is a Little, Brown title; Hachette Book Group about page (Little, Brown and Company is one of HBG's publishing groups; \"HBG is headquartered in New York City\"), https://www.hachettebookgroup.com/about/" },
    { title: "The Mountain", author: "Nanami Kamon, tr. Kalau Almony", year: 2027, isbn: "9781668246870", cover: "9781668246870.jpg",
      setting: "Published in New York by Saga Press", note: "Saga Press places the story at an abandoned lumber mill deep in the mountains in Japan and does not name the mountain, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-the-mountain.html",
      src: "book-the-mountain.html (Saga Press, January 2027; does not name the mountain); Simon & Schuster locations page, Corporate Headquarters, 1230 Avenue of the Americas, New York, NY 10020, https://www.simonandschuster.biz/p/locations" },
    { title: "The Museum of Silence", author: "Yoko Ogawa, tr. Stephen Snyder", year: 2027, isbn: "9780593702062", cover: "9780593702062.jpg",
      setting: "Published in New York by Pantheon", note: "Pantheon places the story in a small, nondescript town and does not name the town, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-the-museum-of-silence.html",
      src: "book-the-museum-of-silence.html (Pantheon, 8 June 2027; a small, nondescript town, unnamed); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "The Near and Distant World", author: "Bianca Stone", isbn: "9781963108651", cover: "THENEAR.png",
      setting: "Published in New York by Penguin Random House", note: "A poetry collection. The publisher listing does not name one place as the book's center, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.penguinrandomhouse.com/books/816553/the-near-and-distant-world-by-bianca-stone/",
      src: "Penguin Random House book page (The Near and Distant World); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "The Simpsons Treehouse of Horror Omnibus 3-Volume Box Set", author: "uncredited", isbn: "9781419793967", cover: "SimpsonsTreehouse.png",
      setting: "Published in New York by Abrams", note: "A box set. Springfield is a fictional town the series never locates, so the pin marks the press. No author is listed on the bookstore card.",
      page: "bookstore.html",
      srcUrl: "https://www.abramsbooks.com/contact/",
      src: "ISBN 9781419793967 is an Abrams title; Abrams contact page, 195 Broadway, 9th Floor, New York, NY 10007, https://www.abramsbooks.com/contact/" },
    { title: "The Space Behind the Face: Life Stories", author: "Robert Wilson with Keith McDermott", year: 2026, isbn: "9798217061273", cover: "9798217061273.jpg",
      setting: "Published in New York by Penguin Press", note: "A memoir that moves from small-town Texas to New York's downtown scene to stages around the world, so it does not center on one place. The pin marks the press.",
      page: "book-space-behind-the-face.html",
      src: "book-space-behind-the-face.html (\"from small-town Texas to New York's downtown scene to the world's stages\"); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" },
    { title: "The Third Wave", author: "Alvin Toffler", isbn: "9780553246988", cover: "THIRDWAV.png",
      setting: "Published in New York by Bantam", note: "A work of ideas from Bantam, a Penguin Random House imprint.",
      page: "bookstore.html",
      srcUrl: "https://penguinrandomhousehighereducation.com/book/?isbn=9780553246988",
      src: "Penguin Random House higher-education book page (9780553246988); Penguin Random House, \"Headquartered in New York City,\" https://www.penguinrandomhouse.com/about-us/our-story/" }
  ]}
  ,{ id: "brooklyn-presses", name: "Brooklyn, New York", heading: "Published in Brooklyn", sub: "Publishers in Brooklyn", cardBy: "Publishers in Brooklyn", published: true, lng: -73.9521, lat: 40.6984, area: true, cc: "US", cont: "North America", reg: ["brooklyn", "kings county", "new york", "new york city", "nyc", "nightboat", "catapult"],
    desc: "Bookstore titles whose publishers are in Brooklyn, pinned at the borough of the press, not as story settings. Each book names its press, with the source cited.", books: [
    { title: "Cloud Six", author: "Amy Fusselman", year: 2026, isbn: "9781646223480", cover: "CLOUDSIX.png",
      setting: "Published in Brooklyn by Catapult", note: "A novel whose action takes place in Cloud Six, a fictional tier of heaven, so the pin marks the press, not a place on the map.",
      page: "bookstore.html",
      srcUrl: "https://books.catapult.co/books/cloud-six/",
      src: "Catapult book page (\"married couple Mam and Bunko have found themselves in Cloud Six. It's the newest, and lowest, tier of heaven\"); Counterpoint / Catapult contact page, 20 Jay Street #704, Brooklyn, NY 11201 (general inquiries: contact@catapult.co), https://www.counterpointpress.com/contact/" },
    { title: "Unsex Me Here", author: "Aurora Mattia", year: 2025, isbn: "9781643622705", cover: "UNISEX.png",
      setting: "Published in Brooklyn by Nightboat Books", note: "Stories that move from a West Texas town to a stalactite cavern and hotel rooms, with no single named center, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://nightboat.org/book/unsex-me-here/",
      src: "Nightboat Books book page (\"From a West Texas town with a supernatural past to a stalactite cavern in the birthplace of Aphrodite, from hotel rooms to gardens\"); Nightboat contact page, 130 Palmetto Street, Studio 205, Brooklyn, NY 11221, https://nightboat.org/about/" }
  ]}
  ,{ id: "san-francisco-two-lines-press", name: "San Francisco, California", heading: "Published in San Francisco", sub: "Two Lines Press", cardBy: "Two Lines Press", published: true, lng: -122.4016, lat: 37.7895, area: false, cc: "US", cont: "North America", reg: ["san francisco", "california", "two lines press", "center for the art of translation"],
    desc: "Blood Is Dripping onto the Courtyard by Elvira Navarro, pinned at Two Lines Press in San Francisco. The stories move among many places, so the pin marks the press.", books: [
    { title: "Blood Is Dripping onto the Courtyard", author: "Elvira Navarro, tr. Christina MacSweeney", year: 2026, isbn: "9781966192077", cover: "BLOOD.png",
      setting: "Published in San Francisco by Two Lines Press", note: "Stories the publisher places in towns in the middle of nowhere, abandoned buildings, and, in one piece, the Parisian suburbs, so the collection does not center on one place. The pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.twolinespress.com/shop/books/blood-is-dripping-onto-the-courtyard",
      src: "Two Lines Press book page (\"towns in the middle of nowhere, abandoned buildings,\" and \"the cruel neglect of the Parisian suburbs\"); Center for the Art of Translation contact page (Two Lines Press is its book publishing program), 582 Market Street, Suite 700, San Francisco, CA 94104, https://www.catranslation.org/about/contact-us/" }
  ]}
  ,{ id: "helsinki-we-jazz", name: "Helsinki, Finland", heading: "Published in Helsinki", sub: "We Jazz", cardBy: "We Jazz", published: true, lng: 24.9575, lat: 60.1887, area: false, cc: "FI", cont: "Europe", reg: ["helsinki", "finland", "we jazz"],
    desc: "We Jazz Issue 19: Milestones, pinned at We Jazz in Helsinki, not as a story setting. The press address is cited.", books: [
    { title: "We Jazz Issue 19: Milestones", author: "We Jazz", cover: "WE JAZZ.png",
      setting: "Published in Helsinki by We Jazz", note: "A magazine issue; Milestones is the issue theme. The pin marks the press.",
      page: "bookstore.html", buy: "https://publicknowledgebooks.com/products/we-jazz-issue-19-milestones-1",
      srcUrl: "https://wejazz.fi/info/",
      src: "We Jazz info page (\"an independent music culture company based in Helsinki, Finland\"; We Jazz Oy, Vaasankatu 15, 00500 Helsinki, FI), https://wejazz.fi/info/" }
  ]}
  ,{ id: "los-angeles-srf", name: "Los Angeles, California", heading: "Published in Los Angeles", sub: "Self-Realization Fellowship", cardBy: "Self-Realization Fellowship", published: true, lng: -118.2157, lat: 34.1017, area: false, cc: "US", cont: "North America", reg: ["los angeles", "mount washington", "california", "self-realization fellowship", "srf"],
    desc: "Autobiography of a Yogi, pinned at Self-Realization Fellowship International Headquarters in Los Angeles. The memoir spans India and California, so the pin marks the press.", books: [
    { title: "Autobiography of a Yogi", author: "Paramahansa Yogananda", isbn: "9780876120835", cover: "9780876120835.jpg",
      setting: "Published in Los Angeles by Self-Realization Fellowship", note: "A memoir that moves between India and California, so it does not center on one place. The pin marks the press that publishes this edition.",
      page: "bookstore.html",
      srcUrl: "https://yogananda.org/contact-us",
      src: "Self-Realization Fellowship contact page (\"Where is the SRF International Headquarters located? 3880 San Rafael Avenue, Los Angeles, California 90065-3219 U.S.A.\"), https://yogananda.org/contact-us; SRF is the publisher of this edition (ISBN 9780876120835)" }
  ]}
  ,{ id: "los-angeles-rare-bird", name: "Los Angeles, California", heading: "Published in Los Angeles", sub: "Rare Bird Books", cardBy: "Rare Bird Books", published: true, lng: -118.2437, lat: 34.0522, area: true, cc: "US", cont: "North America", reg: ["los angeles", "california", "rare bird"],
    desc: "Cocaine + Surfing by Chas Smith, pinned at Rare Bird Books in Los Angeles, not as a story setting.", books: [
    { title: "Cocaine + Surfing", author: "Chas Smith", year: 2018, isbn: "9781945572814", cover: "Cocaine.png",
      setting: "Published in Los Angeles by Rare Bird Books", note: "A history of surfing's entanglement with cocaine. The book does not center on one named place, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://rarebirdlit.com/about-rare-bird/",
      src: "Rare Bird official About page (\"humming beneath the cultural broadband of Los Angeles\"; \"operates from a shadowy locus between Northeast LA\"), https://rarebirdlit.com/about-rare-bird/" }
  ]}
  ,{ id: "marina-del-rey-tokyopop", name: "Marina del Rey, California", heading: "Published in Marina del Rey", sub: "TOKYOPOP", cardBy: "TOKYOPOP", published: true, lng: -118.4486, lat: 33.9777, area: true, cc: "US", cont: "North America", reg: ["marina del rey", "los angeles", "california", "tokyopop"],
    desc: "Six: Paths of Horror by Nashi, pinned at TOKYOPOP in Marina del Rey. The stories have no single named place, so the pin marks the press.", books: [
    { title: "Six: Paths of Horror", author: "Nashi", year: 2026, isbn: "9781427888341", cover: "9781427888341.jpg",
      setting: "Published in Marina del Rey, California, by TOKYOPOP", note: "Six stories with no single named place, so the pin marks the press. In the Japanese Lit collection.",
      page: "book-six-paths-of-horror.html",
      srcUrl: "https://tokyopop.com/pages/contact-us",
      src: "book-six-paths-of-horror.html (TOKYOPOP, November 2026; short stories, no single place); TOKYOPOP contact page, TOKYOPOP US: 4136 Del Rey Ave, Suite 502, Marina del Rey, CA 90292, https://tokyopop.com/pages/contact-us" }
  ]}
  ,{ id: "madrid-alfaguara", name: "Madrid, Spain", heading: "Published in Madrid", sub: "Alfaguara", cardBy: "Alfaguara", published: true, lng: -3.6998, lat: 40.4312, area: false, cc: "ES", cont: "Europe", reg: ["madrid", "spain", "alfaguara"],
    desc: "Desde que te vi morir by Javier Marías, pinned at Alfaguara in Madrid. The book is essays, poems and other pieces, not a story with one setting, so the pin marks the press.", books: [
    { title: "Desde que te vi morir", author: "Javier Marías", year: 2025, isbn: "9788420477695", cover: "Javier.png",
      setting: "Published in Madrid by Alfaguara", note: "An Alfaguara edition of essays, poems and other pieces, with no single story setting, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.penguinrandomhousegrupoeditorial.com/oficinas-y-contactos/oficina/espana/",
      src: "Penguin Libros / Alfaguara listing (9788420477695); Penguin Random House Grupo Editorial, Spain offices (Madrid: Luchana, 23, 1a Planta, 28010 Madrid), https://www.penguinrandomhousegrupoeditorial.com/oficinas-y-contactos/oficina/espana/" }
  ]}
  ,{ id: "boulder-shambhala", name: "Boulder, Colorado", heading: "Published in Boulder", sub: "Shambhala Publications", cardBy: "Shambhala Publications", published: true, lng: -105.2795, lat: 40.0197, area: false, cc: "US", cont: "North America", reg: ["boulder", "colorado", "shambhala"],
    desc: "Psychedelic Therapy, pinned at Shambhala Publications in Boulder, not as a story setting. The press address is cited.", books: [
    { title: "Psychedelic Therapy", author: "Will Van Derveer & Keith Kurlander", isbn: "9781645476047", cover: "Psychedelic.png",
      setting: "Published in Boulder, Colorado, by Shambhala Publications", note: "A book of ideas and practice from Shambhala. It does not center on one story setting, so the pin marks the press.",
      page: "bookstore.html",
      srcUrl: "https://www.shambhala.com/pages/contact",
      src: "Shambhala Publications book listing (Psychedelic Therapy, 9781645476047); Shambhala contact page, 2129 13th Street, Boulder, CO 80302, https://www.shambhala.com/pages/contact" }
  ]}

  ,{ id: "cheltenham", name: "Cheltenham, England", lng: -2.067, lat: 51.900, area: false, cc: "GB", cont: "Europe", reg: ["cheltenham", "gloucestershire", "cotswolds", "england"], books: [
    { title: "Homework: A Memoir", author: "Geoff Dyer", year: 2026, isbn: "9781250437846", cover: "atlas/cover-homework.jpg",
      setting: "Cheltenham, England, from childhood in the late 1950s to Oxford", note: "A memoir of a postwar childhood in Cheltenham. Canongate paperback, May 2026; this listing is the Picador US paperback, June 2026.",
      page: "bookstore.html",
      srcUrl: "https://www.theguardian.com/books/2025/may/27/homework-by-geoff-dyer-review-coming-of-age-in-70s-england",
      src: "Blake Morrison, The Guardian, May 27, 2025 (\"growing up, as he was, in Cheltenham\"), https://www.theguardian.com/books/2025/may/27/homework-by-geoff-dyer-review-coming-of-age-in-70s-england; Canongate book page (Cheltenham Grammar School; \"This Gloucestershire lad\"), https://canongate.co.uk/books/5228-homework-a-memoir/" }
  ]}

];

/* Reading routes. A route is an ordered list of place ids, drawn as a numbered path, with its own chip above the map.
   Deep link: atlas.html#<id>. Optional: eyebrow (banner kicker), order (replaces "oldest to newest" in the count line),
   color (path color), moody (tint the map, Gothic only), note (line under the stop list), isNew (shows the "New" tag on the chip), hidden (keeps a retired route in the file without showing it). The first route uses the #route-chip button in atlas.html.
   The first sentence of "blurb" is replaced by the live count ("8 stops, 8 books, west to east."). */
window.bsRoutes = [
  /* Weekly Reads route: only books that were Book & Shores Weekly Reads picks (index.html history) AND already have a sourced pin above.
     Every book at each stop is a Weekly Reads pick. Picks with no single stated setting stay off the map. */
  { id: "weekly-reads", name: "Weekly Reads", eyebrow: "A reading route · Weekly Reads, Nov 8", isNew: false, order: "west to east", color: "#1f4e79",
    note: "The Nov 8 Weekly Reads picks with a sourced setting, plus two stops from our Author of the Month Jonathan Lethem, his latest book and his Times essay from Boerum Hill, standing in for The Last Leaf, which doesn't center on one place. The Night Before is pinned at 64 East Seventh Street, the building one of its essays is about. Each popup cites its source.",
    blurb: "Six stops. The Nov 8 Weekly Reads picks and Jonathan Lethem, from the Bay Area to Paris.",
    stops: ["bay-area-lethem-tension", "ucla-westwood", "east-seventh-street", "boerum-hill-lethem-essay", "north-atlantic", "paris-image-of-her"] },
  /* B&S: Seoul to Tokyo route, Weekly Reads Nov 15 (local draft for AE packet; not live).
     Stops are empty until AE chooses optional pins. The chip can still deep-link; the note explains that this week's picks are on the list and off the map for now.
     Approved stub artwork is unchanged and lives outside this file. */
  { id: "seoul-tokyo", name: "Seoul to Tokyo", eyebrow: "A reading route · Weekly Reads, Nov 15", isNew: false, order: "west to east", color: "#8b1e3f",
    note: "Pins sit only where a publisher names the place. Dashed rings mark a city or region, not an address. Each popup cites its source.",
    blurb: "Three stops. The Nov 15 Weekly Reads picks, from Seoul to Tokyo and out to the Pacific.",
    stops: ["seoul-korean-music", "tokyo-seoul-to-tokyo", "pacific-energy-fields"],
    /* This week's picks with no single named place: listed under the route, not pinned. */
    alsoOn: [
      { title: "Love at Least", author: "Yukiko Motoya, tr. Kamil Spychalski", cover: "weekly-love-at-least.jpg", url: "book-love-at-least.html", page: "book-love-at-least.html", why: "Set in Japan; no city named." },
      { title: "Long Take", author: "Akira Kurosawa, tr. Anne McKnight", cover: "weekly-long-take.jpg", url: "book-long-take.html", page: "book-long-take.html", why: "A portrait of the director; no single place." },
      { title: "Fracture", author: "Ian Lynam", cover: "weekly-fracture.jpg", url: "book-fracture.html", page: "book-fracture.html", why: "Japanese graphic design, country-wide." },
      { title: "Sonic Footprints", author: "Louis Möckel, ed. (record + booklet)", cover: "weekly-sonic-footprints.jpg", url: "book-sonic-footprints.html", page: "book-sonic-footprints.html", why: "Sound along a supply chain; no place." }
    ],
    /* Route ticket stub (existing Tally forms; stubs are emailed by the B&S stub pipeline). */
    stub: { img: "route-stub-seoul-to-tokyo.jpg", alt: "Seoul to Tokyo route ticket stub: The Pacific, Energy Fields, with A. E. Goodson's illustration of two men kissing, one holding a read me. mug",
      signup: "https://tally.so/r/Z9Ed5o", finish: "https://tally.so/r/gbd5DO", routeLabel: "Weekly Reads" } },
  /* B&S: Six Strange Ones, Weekly Reads No. 6 (Nov 21): Japanese Literature. AE's go, Nov 23. Only this week's six books.
     Only Caring for a Corpse has a publisher-stated setting (the Japanese mountains); the other five name no real place and are listed, not pinned. */
  { id: "six-strange-ones", name: "Six Strange Ones", eyebrow: "A reading route · Weekly Reads No. 6, Nov 21", isNew: true, order: "plus five more listed below the map", color: "#0b5d6b",
    note: "Pins sit only where a publisher names the place. Five of this week's six books name no real place, so they're listed below the map and pinned at their presses. Each popup cites its source.",
    blurb: "The Nov 21 Weekly Reads picks: Japanese Literature. Only Caring for a Corpse names a real place, the Japanese mountains. The other five are pinned at their presses.",
    stops: ["japan-caring-for-a-corpse"],
    alsoOn: [
      { title: "Platonic Love", author: "Mieko Kanai, tr. Polly Barton", cover: "9780811239424.jpg", url: "book-platonic-love.html", page: "book-platonic-love.html", why: "Short stories; no single place. Pinned at New Directions in New York." },
      { title: "Six: Paths of Horror", author: "Nashi", cover: "9781427888341.jpg", url: "book-six-paths-of-horror.html", page: "book-six-paths-of-horror.html", why: "Six stories; no single place. Pinned at TOKYOPOP in Marina del Rey." },
      { title: "Cursed Thing", author: "Nashi, tr. Jim Rion", cover: "9781846019180.jpg", url: "book-cursed-thing.html", page: "book-cursed-thing.html", why: "A city the publisher doesn't name. Pinned at Octopus in London." },
      { title: "Strange Maps", author: "Uketsu, tr. Jim Rion", cover: "9780063577268.jpg", url: "book-strange-maps.html", page: "book-strange-maps.html", why: "A coastal village the publisher doesn't name. Pinned at HarperVia in New York." },
      { title: "The Museum of Silence", author: "Yoko Ogawa, tr. Stephen Snyder", cover: "9780593702062.jpg", url: "book-the-museum-of-silence.html", page: "book-the-museum-of-silence.html", why: "A small town the publisher doesn't name. Pinned at Pantheon in New York." }
    ] },
  /* Gothic October is retired for now (hidden: true): no chip, no route; its pins stay on the map. Remove "hidden" to bring it back. */
  { id: "gothic-october", hidden: true, name: "Gothic October", eyebrow: "A reading route · Halloween 2026", moody: true, color: "#4a0f22",
    note: "Public-domain classics show their first-edition covers. Where a book is set is cited in each popup.",
    blurb: "Seven stops, eight books, oldest to newest. Lock the door first.",
    stops: ["otranto", "geneva", "thornfield", "yorkshire", "london-gothic", "whitby", "kerry"] },
  { id: "national-book-awards-2026", name: "National Book Awards 2026", eyebrow: "Award route · winners announced Nov 18", order: "west to east", color: "#111111",
    note: "Three of the eleven finalists (Let the Poets Govern, Mother Tongue and Spawning Season) don't center on one place, so they are pinned at their presses rather than on this award route. Each popup cites its source.",
    blurb: "Nine stops. The 2026 National Book Award winners and finalists, from Bogotá to Galilee.",
    stops: ["bogota", "miami", "florida", "dakar", "sicily", "szonden-oder", "cairo", "gaza", "safad"] },
  { id: "booker-prize-2026", name: "Booker Prize 2026", eyebrow: "Award route · winner named Nov 9", order: "west to east", color: "#7a4f00",
    note: "Five of the six shortlisted novels. May We Feed the King isn't pinned because its medieval palace and kingdom aren't named. Each popup cites its source.",
    blurb: "Five stops. The shortlist, from Kingston to the Kent coast.",
    stops: ["kingston", "massachusetts", "hebrides", "london-black-bag", "kent"] }
];
