    (function () {
        var BS = 'https://bookshop.org/a/125864/';
        // [cover, title, author, isbn13, own page or '', fortune]
        var BOOKS = [
            ['sandman', 'The Sandman', 'Lars Kepler', '9780525433057', 'book-the-sandman.html', 'Zoltar sees Joona Linna, Saga Bauer and a killer named Jurek Walter. Zoltar also sees you sleeping with the lights on.'],
            ['ripley', 'The Talented Mr. Ripley', 'Patricia Highsmith', '9780393332148', 'book-talented-mr-ripley.html', 'You will envy a rich stranger\u2019s life in Italy. Do not, under any circumstances, try it on.'],
            ['carol', 'Carol', 'Patricia Highsmith', '9780393325997', 'book-carol.html', 'A glance across a department store at Christmas will rearrange your whole life. Pack for a road trip.'],
            ['sontag', 'Susan Sontag: The Collected Essays', 'Edited by David Rieff', '9781598538595', 'book-susan-sontag-collected-essays.html', 'Strong opinions on photography, illness and camp are headed your way. Two volumes of them.'],
            ['wilson', 'The Space Behind the Face', 'Robert Wilson with Keith McDermott', '9798217061273', 'book-space-behind-the-face.html', 'A twelve-hour silent opera appears in your future. Bring snacks. Bring wonder.'],
            ['sound', 'Sound Within Sound', 'Kate Molleson', '9781419753565', 'book-sound-within-sound.html', 'You will meet a dozen radical composers the canon tried to skip. Turn it up.'],
            ['end', 'The End of Everything', 'M. John Harrison', '9798217438655', 'book-the-end-of-everything.html', 'Something strange will wash up at your feet. Zoltar advises you carry it inland.'],
            ['switzy', 'Switzy', 'Emma Cline', '9780593595244', 'book-switzy.html', 'A last trip across Europe is in the cards: dinner in London, an old friend in France, and the past riding shotgun.'],
            ['helen', 'Helen of Nowhere', 'Makenna Goodman', '9781566897358', 'book-helen-of-nowhere.html', 'You will tour a country house for sale. Read the fine print. All six acts of it.'],
            ['dogs', 'All Them Dogs', 'Djamel White', '9798217046676', 'book-all-them-dogs.html', 'You\u2019re going back to West Dublin. Trouble is waiting, and so is a man called Flute.'],
            ['ambivalence', 'Ambivalence: An Education', 'Brian Dillon', '9798896231103', 'book-ambivalence.html', 'Zoltar senses you are of two minds about everything. Brian Dillon calls that an education.'],
            ['1984', '1984', 'George Orwell', '9780451524935', '', 'Zoltar is watching you. So is Big Brother. Only one of us sells books.'],
            ['animal-farm', 'Animal Farm', 'George Orwell', '9780451526342', '', 'All fortunes are equal, but this fortune is more equal than others.'],
            ['demon', 'Demon Copperhead', 'Barbara Kingsolver', '9780063251984', '', 'Dickens is heading for the Appalachian mountains, and you have a seat on the bus.'],
            ['odyssey', 'The Odyssey', 'Homer, translated by Robert Fagles', '9780140268867', '', 'A long voyage home lies ahead. Avoid one-eyed giants and anyone singing on the rocks.'],
            ['yogi', 'Autobiography of a Yogi', 'Paramahansa Yogananda', '9780876120835', '', 'Zoltar foresees deep breaths, a yogi\u2019s own life story, and a calm you didn\u2019t order.'],
            ['moosewood', 'Moosewood Cookbook', 'Mollie Katzen', '9781607747390', '', 'Zoltar sees vegetables in your future. Lots of vegetables. You will be thrilled.'],
            ['future-shock', 'Future Shock', 'Alvin Toffler', '9780553277371', '', 'The future is arriving faster than you are. Toffler saw it coming in 1970.'],
            ['cocaine-surfing', 'Cocaine + Surfing', 'Chas Smith', '9781945572814', '', 'Zoltar sees a perfect wave, and the surf industry\u2019s worst-kept secret paddling out beside you.'],
            ['red-baron', 'Snoopy and the Red Baron', 'Charles M. Schulz', '9781787742727', '', 'Curse you, Red Baron! A doghouse takes flight in your near future.'],
            ['covering-islam', 'Covering Islam', 'Edward W. Said', '9780679758907', '', 'You will start reading the news more carefully. Edward Said insists.'],
            ['wild-party', 'The Wild Party', 'Joseph Moncure March', '9780375706431', '', 'A Jazz Age party is about to get out of hand, and your name is on the guest list.'],
            ['sakamoto', 'Music Sets You Free', 'Ryuichi Sakamoto, translated by Sam Bett', '9780063416505', '', 'Zoltar hears a piano in the distance. Ryuichi Sakamoto has a life story to tell you.'],
            ['belafonte', 'Daylight Come', 'Joshua Jelly-Schapiro', '9780593652701', '', 'Day-O! Harry Belafonte will be in your head by morning, and so will the world he made.'],
            ['clara', 'Madame Composer', 'Sarah Fritz', '9798897101887', '', 'A virtuoso named Clara Schumann is about to take back the spotlight. Front row, please.'],
            ['touch-of-grey', 'Touch of Grey, or How the Grateful Dead Became Pop Stars', 'John Brackett', '9781478038894', '', 'You will get by. You will survive. And the Grateful Dead will become pop stars.'],
            ['push-the-wall', 'Push the Wall', 'Frank Miller', '9781668065297', '', 'Zoltar sees ink-stained fingers in your future. Frank Miller is telling his own story.'],
            ['hiroshima', 'Hiroshima, 8:15: The Lost Memoir', 'Kiyoshi Tanimoto', '9798217197972', '', 'Some fortunes look back. A survivor\u2019s lost memoir of one morning the world must remember.'],
            ['ego-trip', 'The Ego Trip', 'Kimon de Greef', '9780385550246', '', 'Beware gurus bearing toads. Zoltar has seen how this trip ends.'],
            ['nerd-reich', 'The Nerd Reich', 'Gil Dur\u00e1n', '9781668221402', '', 'Tech billionaires loom in your future. Read the warning label first.']
        ];
        // Bookshop.org ebook editions: [Bookshop product path, ebook EAN]. Link = product page + ?ean=EBOOK&digital=t&affiliate=125864
        // (the format Bookshop's own ebook share links use). Books without a confirmed ebook edition get no EBOOK button.
        var EBOOKS = {
            'sandman': ['the-sandman-a-novel-lars-kepler/acc92d0235b6be2d', '9781524732257'],
            'ripley': ['the-talented-mr-ripley-patricia-highsmith/ad6d888cfdc8d4fa', '9780393344721'],
            'carol': ['carol-patricia-highsmith/3d06ecb89c2ad4f7', '9780393345643'],
            'wilson': ['the-space-behind-the-face-life-stories-robert-wilson/4661552c0412f8ff', '9798217061280'],
            'sound': ['sound-within-sound-radical-composers-of-the-twentieth-century-kate-molleson/b3664349ebf637ef', '9781647002534'],
            'end': ['the-end-of-everything-visionary-and-brilliant-china-mieville-m-john-harrison/fe6e357926af029c', '9798217438679'],
            'switzy': ['switzy-a-novel-emma-cline/f5a588e2ff0bd8e0', '9780593595251'],
            'dogs': ['all-them-dogs-a-novel-djamel-white/6a6a2065023a0448', '9798217046690'],
            'ambivalence': ['ambivalence-brian-dillon/5a7de895b7f5d04a', '9798896231110'],
            'demon': ['demon-copperhead-a-novel-barbara-kingsolver/685df5a3bfc2305a', '9780063251991'],
            'odyssey': ['the-odyssey-penguin-classics-deluxe-edition-homer/a81376267225cf32', '9781101221846'],
            'moosewood': ['the-moosewood-cookbook-40th-anniversary-edition-mollie-katzen/6981e1bb1d37ef2e', '9781607747406'],
            'future-shock': ['future-shock-alvin-toffler/05c7eb7dd17fd632', '9780593159767'],
            'belafonte': ['daylight-come-harry-belafonte-and-the-world-he-made-joshua-jelly-schapiro/94080209b51f0a6d', '9780593652718'],
            'hiroshima': ['what-divides-us-a-memoir-of-hiroshima-kiyoshi-tanimoto/ce9f3dc906283bdb', '9798217197996'],
            'ego-trip': ['the-ego-trip-psychedelic-toads-a-trail-of-deaths-and-the-guru-who-peddled-transcendence-kimon-de-greef/9e7f0e20e04fc1b3', '9780385550239'],
            'sakamoto': ['music-sets-you-free-ryuichi-sakamoto/849179867382adde', '9780063416529'],
            'clara': ['madame-composer-the-virtuosic-genius-of-clara-schumann-sarah-fritz/9ace517951fcf549', '9798897101894'],
            'push-the-wall': ['push-the-wall-my-life-writing-drawing-and-the-art-of-storytelling-frank-miller/e8f1f6099d7abe45', '9781668065310'],
            'nerd-reich': ['the-nerd-reich-silicon-valley-fascism-and-the-war-on-democracy-gil-dur-n/a6f6f0dce1150339', '9781668221426']
        };
        var ROWS = 'ABCDEF', PER = 5;
        var glass = document.getElementById('glass'), machine = document.getElementById('machine');
        var lcd1 = document.getElementById('lcd1'), lcd2 = document.getElementById('lcd2');
        var ask = document.getElementById('ask'), reveal = document.getElementById('reveal'), tray = document.getElementById('tray');
        var slots = [], busy = false, entry = '', last = -1;

        // Bulbs
        Array.prototype.forEach.call(document.querySelectorAll('.bulbs'), function (b) {
            for (var i = 0; i < 18; i++) b.appendChild(document.createElement('i'));
        });

        // Build rows
        for (var r = 0; r < ROWS.length; r++) {
            var row = document.createElement('div'); row.className = 'row';
            for (var c = 0; c < PER; c++) {
                var idx = r * PER + c, b = BOOKS[idx]; if (!b) break;
                var code = ROWS[r] + (c + 1);
                var s = document.createElement('button');
                s.type = 'button'; s.className = 'slot'; s.dataset.i = idx;
                s.setAttribute('aria-label', code + ': ' + b[1] + ' by ' + b[2]);
                s.innerHTML = '<span class="cover"><img src="zoltar/' + b[0] + '.jpg" alt="" loading="' + (r < 2 ? 'eager' : 'lazy') + '"></span><span class="coil"></span><span class="code">' + code + '</span>';
                s.addEventListener('click', function () { dispense(+this.dataset.i); });
                row.appendChild(s); slots.push(s);
            }
            glass.appendChild(row);
        }
        function codeOf(i) { return ROWS[Math.floor(i / PER)] + (i % PER + 1); }

        // Keypad
        var keys = ['A','B','C','1','D','E','F','2','3','4','5','CLR'];
        var kp = document.getElementById('keypad');
        keys.forEach(function (k) {
            var el = document.createElement('button'); el.type = 'button'; el.textContent = k;
            el.className = 'key' + (/[A-F]/.test(k) && k.length === 1 ? ' letter' : '');
            el.addEventListener('click', function () { press(k); });
            kp.appendChild(el);
        });
        function setLcd(a, b) { lcd1.textContent = a; lcd2.textContent = b; }
        function press(k) {
            if (busy) return;
            if (k === 'CLR') { entry = ''; setLcd('ZOLTAR IS READY', 'ENTER CODE'); return; }
            if (/[A-F]/.test(k)) entry = k;
            else if (entry.length === 1) entry += k;
            else { setLcd('LETTER FIRST', 'A\u2013F'); return; }
            setLcd(entry.length === 1 ? 'NOW A NUMBER 1\u20135' : 'VENDING', entry + (entry.length === 1 ? '_' : ''));
            if (entry.length === 2) {
                var i = ROWS.indexOf(entry[0]) * PER + (+entry[1] - 1);
                entry = '';
                if (BOOKS[i]) setTimeout(function () { dispense(i); }, 250);
            }
        }
        document.addEventListener('keydown', function (e) {
            if (reveal.classList.contains('open')) { if (e.key === 'Escape') closeReveal(); return; }
            if (e.target.tagName === 'INPUT') return;
            var host = document.getElementById('zmx');
            if (host && host.hasAttribute('data-keys-focus') && !host.contains(document.activeElement)) return; // on the home page, only react to keys while the machine has focus
            var k = e.key.toUpperCase();
            if (/^[A-F1-5]$/.test(k)) press(k);
            else if (k === 'BACKSPACE' || k === 'ESCAPE') press('CLR');
        });

        ask.addEventListener('click', function () {
            if (busy) return;
            var i; do { i = Math.floor(Math.random() * BOOKS.length); } while (i === last && BOOKS.length > 1);
            dispense(i, true);
        });

        function dispense(i, roulette) {
            if (busy) return; busy = true; last = i; ask.disabled = true;
            machine.classList.add('busy');
            machine.classList.remove('shake'); void machine.offsetWidth; machine.classList.add('shake');
            setLcd('ZOLTAR IS THINKING', '. . .');
            var steps = roulette ? 11 : 5, n = 0, prev = null;
            (function spin() {
                if (prev) prev.classList.remove('lit');
                if (n < steps) {
                    var j = Math.floor(Math.random() * slots.length);
                    prev = slots[j]; prev.classList.add('lit'); n++;
                    setTimeout(spin, 60 + n * 9);
                } else {
                    var s = slots[i]; s.classList.add('lit', 'pick');
                    setLcd('VENDING', codeOf(i));
                    setTimeout(function () { tray.classList.remove('flash'); void tray.offsetWidth; tray.classList.add('flash'); }, 1100);
                    setTimeout(function () { s.classList.add('gone'); show(i); }, 1500);
                }
            })();
        }

        function show(i) {
            var b = BOOKS[i];
            document.getElementById('tCode').textContent = codeOf(i);
            var img = document.getElementById('tImg'); img.src = 'zoltar/' + b[0] + '.jpg'; img.alt = b[1] + ' by ' + b[2] + ', book cover';
            document.getElementById('fortune').textContent = b[5];
            document.getElementById('tTitle').textContent = b[1];
            document.getElementById('tAuthor').textContent = b[2];
            var buy = document.getElementById('buy');
            if (b[4]) {
                buy.href = b[4]; buy.removeAttribute('target');
                buy.setAttribute('aria-label', 'Buy the book: ' + b[1] + ', see its Book & Shores page');
                document.getElementById('via').textContent = '';
            } else {
                buy.href = BS + b[3]; buy.target = '_blank';
                buy.setAttribute('aria-label', 'Buy the print book of ' + b[1] + ' by ' + b[2] + ' on Bookshop.org (opens in a new tab)');
                document.getElementById('via').textContent = 'Print via Bookshop.org.';
            }
            var eb = document.getElementById('ebook'), e = EBOOKS[b[0]];
            if (e) {
                eb.href = 'https://bookshop.org/p/books/' + e[0] + '?ean=' + e[1] + '&digital=t&affiliate=125864';
                eb.setAttribute('aria-label', 'Buy the ebook of ' + b[1] + ' on Bookshop.org (opens in a new tab)');
                eb.hidden = false;
                var v = document.getElementById('via'); v.textContent = v.textContent ? 'Print & ebooks via Bookshop.org.' : 'Ebooks via Bookshop.org.';
            } else { eb.hidden = true; eb.removeAttribute('href'); }
            reveal.classList.add('open');
            machine.classList.remove('busy');
            setLcd('ENJOY YOUR BOOK', codeOf(i));
            setTimeout(function () { document.getElementById('ticket').focus({ preventScroll: true }); }, 50);
        }
        function reset() {
            slots.forEach(function (s) { s.classList.remove('lit', 'pick', 'gone'); });
            busy = false; ask.disabled = false; machine.classList.remove('busy');
        }
        function closeReveal() { reveal.classList.remove('open'); reset(); setLcd('ZOLTAR IS READY', 'ENTER CODE'); }
        document.getElementById('close').addEventListener('click', closeReveal);
        reveal.addEventListener('click', function (e) { if (e.target === reveal) closeReveal(); });
        document.getElementById('again').addEventListener('click', function () {
            reveal.classList.remove('open'); reset();
            setTimeout(function () { ask.click(); }, 200);
        });

        // ?demo=A1 shows a dispensed book straight away (for previews)
        var demo = (new URLSearchParams(location.search).get('demo') || '').toUpperCase();
        if (/^[A-F][1-5]$/.test(demo)) {
            var di = ROWS.indexOf(demo[0]) * PER + (+demo[1] - 1);
            if (BOOKS[di]) { busy = true; ask.disabled = true; slots[di].classList.add('gone'); last = di; show(di); }
        }
    })();

        // Small alien Zoltar window: silent loop; poster only if reduced motion or autoplay fails; speeds up while a book is vending
        (function () {
            var v = document.getElementById('alienVid'), machine = document.getElementById('machine'); if (!v || !machine) return;
            v.muted = true;
            if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) { v.removeAttribute('autoplay'); v.pause(); return; }
            var p = v.play(); if (p && p.catch) p.catch(function () { v.pause(); });
            new MutationObserver(function () { v.playbackRate = machine.classList.contains('busy') ? 1.6 : 1; })
                .observe(machine, { attributes: true, attributeFilter: ['class'] });
        })();
