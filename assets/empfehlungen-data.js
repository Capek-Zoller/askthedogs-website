// ASK THE DOGS – Produktempfehlungen
// Reihenfolge = zeitliche Reihenfolge (älteste zuerst). Neue Empfehlung EINFACH ANS ENDE anhängen –
// die Website zeigt auf der Empfehlungen-Seite und bei den Hunden automatisch die NEUESTE zuerst an.
// Pflichtfelder: id, dogKey, dogName, dogBreed, quote, productImg, productName, productSub, reasons (3 Stichpunkte), link
const EMPFEHLUNGEN = [
  {
    "id": "fluffino-handtuch",
    "dogKey": "luna",
    "dogName": "Luna",
    "dogBreed": "Golden Retriever",
    "quote": "Wir sind waschechte Wasserratten.",
    "productImg": "assets/fluffino-handtuch.jpg",
    "productName": "Fluffino Hundehandtuch – 2er Set",
    "productSub": "120 × 70 cm, Mikrofaser",
    "reasons": [
      "Extra saugfähig – trocknet schneller, als Luna sich schütteln kann",
      "Doppelpack: immer eins bereit, während das andere in der Wäsche ist",
      "Waschbar bei 60 °C – hält auch schlammige Tage aus"
    ],
    "link": "https://link.amazon/B03eEgZOG",
    "pageTitle": "Luna empfiehlt: Fluffino Hundehandtuch – ASK THE DOGS"
  },
  {
    "id": "angst-bei-hunden-buch",
    "dogKey": "roqsy",
    "dogName": "Roqsy",
    "dogBreed": "Bolonka Zwetna",
    "quote": "Ein Buch. Über MICH.",
    "productImg": "assets/angst-bei-hunden-buch.jpg",
    "productName": "„Angst bei Hunden“",
    "productSub": "Martin Rütter mit Andrea Buisman · Kosmos Verlag",
    "reasons": [
      "Erklärt, wie man erste Anzeichen von Angst und Unsicherheit erkennt",
      "Zeigt, welche Ursachen dahinterstecken – Genetik, Erfahrung, Sozialisierung",
      "Gibt konkrete Wege zu mehr Selbstvertrauen und Lebensqualität für den Hund"
    ],
    "link": "https://link.amazon/B0bPEuIlB",
    "pageTitle": "Roqsy empfiehlt: „Angst bei Hunden“ – ASK THE DOGS"
  },
  {
    "id": "transportbox",
    "dogKey": "luna",
    "dogName": "Luna",
    "dogBreed": "Golden Retriever",
    "quote": "Sicher ist sicher – auch im Kofferraum.",
    "productImg": "assets/transportbox.jpg",
    "productName": "EUGAD Hunde-Transportbox",
    "productSub": "Aluminium, 92 × 65 × 66 cm, für Kofferraum",
    "reasons": [
      "Stabile Aluminium-Konstruktion – hält auch bei einer Vollbremsung",
      "Sicherheitsverschluss, der bei einem Unfall nicht einfach aufspringt",
      "Passt in die meisten Kofferräume – leicht und trotzdem robust"
    ],
    "link": "https://link.amazon/B04zZMW3j",
    "pageTitle": "Luna empfiehlt: Hunde-Transportbox – ASK THE DOGS"
  },
  {
    "id": "hunderampe",
    "dogKey": "frida",
    "dogName": "Frida",
    "dogBreed": "Riesenschnauzer, Senior",
    "quote": "Freiheit für Frida.",
    "productImg": "assets/hunderampe.jpg",
    "productName": "Klappbare Teleskop-Hunderampe",
    "productSub": "Aluminium, bis 90 kg Belastung",
    "reasons": [
      "Rutschfest und stabil – kein Wackeln beim Rauf- oder Runtergehen",
      "Lang genug für einen sanften Einstieg, ganz ohne steiles Klettern",
      "Klappbar und leicht im Kofferraum zu verstauen"
    ],
    "link": "https://link.amazon/B0euj63J6",
    "pageTitle": "Frida empfiehlt: Auto-Hunderampe – ASK THE DOGS"
  },
  {
    "id": "brustgeschirr",
    "dogKey": "louis",
    "dogName": "Louis",
    "dogBreed": "Französische Bulldogge",
    "quote": "C'est si bon – purer Komfort.",
    "productImg": "assets/brustgeschirr.jpg",
    "productName": "curli Vest Harness, Air-Mesh",
    "productSub": "Brustgeschirr statt Halsband",
    "reasons": [
      "Atmungsaktives Air-Mesh – schneidet nicht ein und schnürt nicht die Luft ab",
      "Unterfütterte Schnalle für zusätzlichen Komfort",
      "Klettverschluss – mit einer Hand angezogen, ein Klick, fertig"
    ],
    "link": "https://link.amazon/B02Jr8XAm",
    "pageTitle": "Louis empfiehlt: Hunde-Brustgeschirr – ASK THE DOGS"
  },
  {
    "id": "dorsch-doerrfisch",
    "dogKey": "louis",
    "dogName": "Louis",
    "dogBreed": "Französische Bulldogge",
    "quote": "Kein Trostpflaster – eine echte Belohnung.",
    "productImg": "assets/dorsch-doerrfisch.jpg",
    "productName": "ROQSY Natur-Dörrfisch, 100 % Dorsch",
    "productSub": "200 g, fettarm, getreidefrei",
    "reasons": [
      "Mager, kaum Fett, viel Eiweiß – eine Belohnung, die nicht gegen die Diät arbeitet",
      "Single-Protein und getreidefrei, ohne Zusätze",
      "Schonend getrocknet, Made in Germany"
    ],
    "link": "https://link.amazon/B05uJYb3J",
    "pageTitle": "Louis empfiehlt: Dorsch-Dörrfisch – ASK THE DOGS"
  },
  {
    "id": "ohrpflege-fingerpads",
    "dogKey": "luna",
    "dogName": "Luna",
    "dogBreed": "Golden Retriever",
    "quote": "Trockene Ohren sind besonders wichtig.",
    "productImg": "assets/ohrpflege-fingerpads.jpg",
    "productName": "Canosept Ohrpflege-Fingerpads",
    "productSub": "50 Stück, für die tägliche Reinigung",
    "reasons": [
      "Praktische Fingerpads – einfache Reinigung ganz ohne Watte oder Tropfen",
      "Entfernt Schmutz und Ohrenschmalz zuverlässig",
      "Ideal nach dem Schwimmen oder Baden – gerade bei Hängeohren wichtig"
    ],
    "link": "https://link.amazon/B05BGbcq7",
    "pageTitle": "Luna empfiehlt: Ohrpflege-Fingerpads – ASK THE DOGS"
  },
  {
    "id": "autositz",
    "dogKey": "roqsy",
    "dogName": "Roqsy",
    "dogBreed": "Bolonka Zwetna",
    "quote": "Großes Kino – im Sitzen.",
    "productImg": "assets/autositz.jpg",
    "productName": "GL Glenslave Hunde-Autositz",
    "productSub": "dicke Polsterung, Bezug abnehmbar & waschbar",
    "reasons": [
      "Dicke Polsterung für sicheren, bequemen Halt beim Fahren",
      "Erhöhte Sitzposition – bestes Kino durch die Scheibe",
      "Bezug abnehmbar und waschbar, auch nach nassen oder schmutzigen Pfoten"
    ],
    "link": "https://link.amazon/B05nR0rNG",
    "pageTitle": "Roqsy empfiehlt: Hunde-Autositz – ASK THE DOGS"
  },
  {
    "id": "schnueffelteppich",
    "dogKey": "felix",
    "dogName": "Felix",
    "dogBreed": "West Highland White Terrier",
    "quote": "Das ist wie Jagen im Wald – nur besser.",
    "productImg": "assets/schnueffelteppich.jpg",
    "productName": "OSDUE Schnüffelteppich",
    "productSub": "50 × 50 cm, für alle Hunderassen",
    "reasons": [
      "Schnüffeln, graben, kratzen, suchen – fordert die Nase wie Jagen im Wald oder Graben im Garten",
      "Ideal zum Verstecken von Leckerlis – sinnvolle Beschäftigung für drinnen und draußen",
      "Waschbar und robust, für alle Hunderassen geeignet"
    ],
    "link": "https://link.amazon/B0fVxI0sE",
    "pageTitle": "Felix empfiehlt: Schnüffelteppich – ASK THE DOGS"
  },
  {
    "id": "furminator",
    "dogKey": "luna",
    "dogName": "Luna",
    "dogBreed": "Golden Retriever",
    "quote": "Einmal schütteln – und es schneit Haare!",
    "productImg": "assets/furminator.jpg",
    "productName": "FURminator deShedding-Tool",
    "productSub": "Größe L, für langhaariges Fell",
    "reasons": [
      "Entfernt bis zu 99 % der losen Unterwolle beim Fellwechsel",
      "Sanft und hautschonend – ideal für zwei Anwendungen pro Woche",
      "Spürbar weniger Haare auf Couch, im Auto und in der Wohnung"
    ],
    "link": "https://link.amazon/B02vdUiqe",
    "pageTitle": "Luna empfiehlt: FURminator deShedding-Tool – ASK THE DOGS"
  },
  {
    "id": "tierhaarentferner",
    "dogKey": "luna",
    "dogName": "Luna",
    "dogBreed": "Golden Retriever",
    "quote": "Nicht viele Haare sind auch genug.",
    "productImg": "assets/tierhaarentferner.jpg",
    "productName": "BluePet RolloTollo Tierhaarentferner",
    "productSub": "mit Mini-Fusselrolle, wiederverwendbar",
    "reasons": [
      "Zieht Tierhaare mühelos aus Polstern, Kleidung und Autositzen",
      "Einfach abrollen, Kammer leeren, fertig – keine Einwegteile nötig",
      "Kinderleicht zu handhaben und zu reinigen"
    ],
    "link": "https://link.amazon/B0eUc5kZv",
    "pageTitle": "Luna empfiehlt: BluePet Tierhaarentferner – ASK THE DOGS"
  },
  {
    "id": "pfotentrimmer",
    "dogKey": "frida",
    "dogName": "Frida",
    "dogBreed": "Riesenschnauzer, Senior",
    "quote": "Heute stehe ich wie ein Fels auf meinen vier Pfoten.",
    "productImg": "assets/pfotentrimmer.jpg",
    "productName": "oneisall Pfotentrimmer für Hunde",
    "productSub": "2 Geschwindigkeitsstufen, wasserdicht, USB-C",
    "reasons": [
      "Schert Haare zwischen den Pfotenballen sicher und geräuscharm (49 dB)",
      "Wasserdicht, kabellos und dank USB-C in 2 Stunden einsatzbereit",
      "Vibrationsarm und leise – auch für unsichere Hunde gut geeignet"
    ],
    "link": "https://link.amazon/B08szEQuy",
    "pageTitle": "Frida empfiehlt: oneisall Pfotentrimmer – ASK THE DOGS"
  },
  {
    "id": "hundeschermaschine",
    "dogKey": "roqsy",
    "dogName": "Roqsy",
    "dogBreed": "Bolonka Zwetna",
    "quote": "Das ist fast wie entspanntes Streicheln.",
    "productImg": "assets/schermaschine.jpg",
    "productName": "oneisall Hundeschermaschine",
    "productSub": "6 Kammaufsätze, leise, für langes Fell",
    "reasons": [
      "Extra leise – kein stressiges Surren, ideal für sensible Hunde",
      "6 Kammaufsätze für unterschiedliche Fellhöhen, plus Kamm und Schere im Set",
      "Akkubetrieben mit LED-Anzeige, zuverlässig auch bei dichtem oder lockigem Fell"
    ],
    "link": "https://link.amazon/B03gJfHAS",
    "pageTitle": "Roqsy empfiehlt: oneisall Hundeschermaschine – ASK THE DOGS"
  },
  {
    "id": "anti-schling-napf",
    "dogKey": "louis",
    "dogName": "Louis",
    "dogBreed": "Französische Bulldogge",
    "quote": "Jeder Happen muss erobert werden – mon Dieu!",
    "productImg": "assets/anti-schling-napf.jpg",
    "productName": "OHMO Anti-Schling-Napf",
    "productSub": "spülmaschinenfest, für langsameres Fressen",
    "reasons": [
      "Verlangsamt das Fressen um bis zu das Zehnfache – bessere Verdauung, weniger Blähbauch",
      "Bereichert die Mahlzeit durch interaktives 'Erobern' jedes Happens",
      "Spülmaschinenfest und ohne Krümel-Chaos nach dem Essen"
    ],
    "link": "https://link.amazon/B0147zjfU",
    "pageTitle": "Louis empfiehlt: OHMO Anti-Schling-Napf – ASK THE DOGS"
  },
  {
    "id": "augenpflege-pads",
    "dogKey": "felix",
    "dogName": "Felix",
    "dogBreed": "West Highland White Terrier",
    "quote": "Ich bin wieder schneeweiß im Gesicht – wie sich das gehört, hihi.",
    "productImg": "assets/augenpflege-pads.jpg",
    "productName": "Canosept Augenpflege-Pads",
    "productSub": "100 Stück, mit Aloe Vera, entfernt Tränenflecken",
    "reasons": [
      "Entfernt Tränenflecken zuverlässig und sanft",
      "Mit beruhigendem Aloe-Vera-Extrakt für die empfindliche Augenpartie",
      "Fertig getränkte Pads – schnell und einfach, kein Einweichen nötig"
    ],
    "link": "https://link.amazon/B0hjbBbS4",
    "pageTitle": "Felix empfiehlt: Canosept Augenpflege-Pads – ASK THE DOGS"
  },
  {
    "id": "hundemantel",
    "dogKey": "louis",
    "dogName": "Louis",
    "dogBreed": "Französische Bulldogge",
    "quote": "Außen wetterfest, innen weich und warm – c'est parfait!",
    "productImg": "assets/hundemantel.jpg",
    "productName": "LUOWAN Hundemantel mit Geschirr",
    "productSub": "wasserdicht, mit integriertem Geschirr und Reißverschluss",
    "reasons": [
      "Wasserdicht außen, weich gefüttert innen – hält auch bei kaltem Herbstregen warm",
      "Geschirr und Reißverschluss fix eingebaut – kein separates Anziehen nötig",
      "Weiter Brustschnitt, passt auch breiteren Rassen wie Französischen Bulldoggen"
    ],
    "link": "https://link.amazon/B08uUd9An",
    "pageTitle": "Louis empfiehlt: LUOWAN Hundemantel – ASK THE DOGS"
  },
  {
    "id": "ortho-bett",
    "dogKey": "frida",
    "dogName": "Frida",
    "dogBreed": "Riesenschnauzer, Senior",
    "quote": "Kein Druck mehr auf Schultern und Hüfte.",
    "productImg": "assets/ortho-bett.jpg",
    "productName": "BEDSURE Orthopädisches Hundebett",
    "productSub": "Memory-Schaum, für große Hunde",
    "reasons": [
      "Memory-Schaum entlastet Gelenke, Schultern und Hüfte",
      "Rutschfester Boden – auch für ältere Hunde ein sicherer Stand",
      "Bezug abnehmbar und waschbar"
    ],
    "link": "https://link.amazon/B0fWLQe4q",
    "pageTitle": "Frida empfiehlt: Orthopädisches Hundebett – ASK THE DOGS"
  },
  {
    "id": "natur-shampoo",
    "dogKey": "felix",
    "dogName": "Felix",
    "dogBreed": "West Highland White Terrier",
    "quote": "Nach dem Schlammloch ist vor dem Kuscheln.",
    "productImg": "assets/natur-shampoo.jpg",
    "productName": "ROQSY Natur-Hundeshampoo",
    "productSub": "Vegan, pH-neutral, mild, für empfindliche Haut",
    "reasons": [
      "Mild und natürlich – ganz ohne Hautjucken",
      "Wäscht auch hartnäckigen Schlammloch-Duft zuverlässig raus",
      "Sanfte Formel, die Fell und Haut nicht austrocknet"
    ],
    "link": "https://link.amazon/B02eLHER6",
    "pageTitle": "Felix empfiehlt: Natur-Hundeshampoo – ASK THE DOGS"
  },
  {
    "id": "ivvi-probiotic",
    "dogKey": "roqsy",
    "dogName": "Roqsy",
    "dogBreed": "Bolonka Zwetna",
    "quote": "Kein Sodbrennen mehr – einfach Ruhe im Bauch!",
    "productImg": "assets/ivvi-probiotic.jpg",
    "productName": "ivvi PROBIOTIC Hunde-Leckerli",
    "productSub": "mit Bacillus Subtilis & Enterococcus Faecium, gegen Sodbrennen",
    "reasons": [
      "Reguliert die Darmflora mit 2 Probiotikastämmen (Bacillus Subtilis & Enterococcus Faecium)",
      "Reich an Kürbisfleisch, Leinsamen und Hafer für eine gesunde Verdauung",
      "Als tägliches Leckerli einfach zu füttern – keine Kapseln oder Pulver nötig"
    ],
    "link": "https://link.amazon/B0gKjd0Af",
    "pageTitle": "Roqsy empfiehlt: ivvi PROBIOTIC – ASK THE DOGS"
  },
  {
    "id": "snackball",
    "dogKey": "luna",
    "dogName": "Luna",
    "dogBreed": "Golden Retriever",
    "quote": "Seit ich diesen Snack-Ball hab, bin ich glücklich!",
    "productImg": "assets/snackball.jpg",
    "productName": "PawsOnly Snack-Ball",
    "productSub": "Größe L, zum Befüllen mit Futter und Kaustangen",
    "reasons": [
      "Beschäftigung, wenn der Hund allein zu Hause ist – die Zeit vergeht wie im Flug",
      "Lässt sich mit Trockenfutter oder Leckerlis befüllen",
      "Auch Kaustangen passen hinein – so wird Kauen zum Spiel"
    ],
    "link": "https://link.amazon/B06tgcyQm",
    "pageTitle": "Luna empfiehlt: PawsOnly Snack-Ball – ASK THE DOGS"
  },
  {
    "id": "maulkorb-baskerville",
    "dogKey": "frida",
    "dogName": "Frida",
    "dogBreed": "Riesenschnauzer, Senior",
    "quote": "Sehr bequem – ich kann hecheln, trinken und sogar Leckerlis nehmen.",
    "productImg": "assets/baskerville-maulkorb.jpg",
    "productName": "Baskerville Ultra Maulkorb",
    "productSub": "Größe 5, formbar, ermöglicht Hecheln und Trinken",
    "reasons": [
      "Patentiertes Design ermöglicht Hecheln und Trinken – auch bei Hitze oder Stress",
      "Mit warmem Wasser individuell an die Schnauzenform anpassbar",
      "Robustes TPE-Material verhindert Bisse zuverlässig, gepolsterte Riemen für bequemen Sitz"
    ],
    "link": "https://link.amazon/B0gwiqX8p",
    "pageTitle": "Frida empfiehlt: Baskerville Ultra Maulkorb – ASK THE DOGS"
  },{"id": "kong-senior", "dogKey": "louis", "dogName": "Louis", "dogBreed": "Französische Bulldogge", "quote": "Ich muss es nur durch die Gegend rollen – dann fallen die Leckerlies raus!", "productImg": "assets/kong-senior.jpg", "productName": "KONG Senior Hundespielzeug", "productSub": "Größe M, hüpft unberechenbar, befüllbar mit Leckerlies", "reasons": ["Der unregelmäßige Hüpfer sorgt für Bewegung und Spaß beim Spielen und Apportieren", "Mit Leckerlies und Futter befüllbar – das beschäftigt jeden Feinschmecker", "Weicher Naturkautschuk, sanft zu Zähnen und Zahnfleisch"], "link": "https://link.amazon/B048dfscR", "pageTitle": "Louis empfiehlt: KONG Senior Hundespielzeug – ASK THE DOGS"},
  {
    "id": "curli-vest-harness-camo",
    "dogKey": "roqsy",
    "dogName": "Roqsy",
    "dogBreed": "Bolonka Zwetna",
    "quote": "Stylish, oder? Und so leicht – ich spüre es kaum!",
    "productImg": "assets/curli-vest-harness-camo.jpg",
    "productName": "curli Vest Harness Brustgeschirr, Air-Mesh",
    "productSub": "Camo, mit D-Ring-Buckle, in verschiedenen Größen",
    "reasons": [
      "Leicht, luftdurchlässig und schnelltrocknend dank Air-Mesh",
      "Zum Anlegen einfach hineinsteigen, ein Klick, fertig",
      "Robust, in verschiedenen Farben und Größen erhältlich"
    ],
    "link": "https://link.amazon/B0bM0IBeS",
    "pageTitle": "Roqsy empfiehlt: curli Vest Harness Camo – ASK THE DOGS"
  },
  {
    "id": "koskill-leuchthalsband",
    "dogKey": "frida",
    "dogName": "Frida",
    "dogBreed": "Riesenschnauzer, Senior",
    "quote": "Jetzt sieht mich jeder – auch im dunklen Herbst!",
    "productImg": "assets/koskill-leuchthalsband.jpg",
    "productName": "KOSKILL LED Leuchthalsband",
    "productSub": "3 Leuchtfarben, 3 Modi, wasserdicht, per Micro-USB aufladbar",
    "reasons": [
      "Sehr hell leuchtend – in der Dunkelheit gut sichtbar, für mehr Sicherheit bei Herbst- und Winterspaziergängen",
      "3 Leuchtfarben und 3 Leuchtmodi, einfach per ON/OFF-Schalter bedienbar",
      "Weicher, voll verstellbarer Gurt, wasserdicht und per Micro-USB aufladbar"
    ],
    "link": "https://link.amazon/B0dSUQQPG",
    "pageTitle": "Frida empfiehlt: KOSKILL LED Leuchthalsband – ASK THE DOGS"
  }
];
