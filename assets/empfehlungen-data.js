// ASK THE DOGS – Produktempfehlungen
// Neue Empfehlung hinzufügen: einfach ein neues Objekt unten in die Liste einfügen.
// Pflichtfelder: id, dogKey, dogName, dogBreed, quote, productImg, productName, productSub, reasons (3 Stichpunkte), link
const EMPFEHLUNGEN = [
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
    "link": "https://www.amazon.de/Angst-bei-Hunden-%C3%A4ngstlichen-traumatisierten/dp/3440174557?dib_tag=se&keywords=martin+r%C3%BCtter+buch+angst&qid=1786886692&sr=8-1&linkCode=ll2&tag=askthedogs-21&linkId=b894db3800744b17cb560b3f3cd6dabc&ref_=as_li_ss_tl",
    "pageTitle": "Roqsy empfiehlt: „Angst bei Hunden“ – ASK THE DOGS"
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
    "link": "https://www.amazon.de/GL-GLENSLAVE-Hunde-Autositz-Hundeautositz-Abnehmbarer/dp/B0DRT6YT9L?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.3b3493f3-8612-4501-b517-b018baece425%3Aamzn1.sym.3b3493f3-8612-4501-b517-b018baece425&crid=1N76LGOECDPH0&cv_ct_cx=hunde%2Bautositz&keywords=hunde%2Bautositz&pd_rd_i=B0DRT6YT9L&pd_rd_r=8e484165-a8a7-4498-a16c-dece0c0d297b&pd_rd_w=XfGSL&pd_rd_wg=i8OYu&pf_rd_p=3b3493f3-8612-4501-b517-b018baece425&pf_rd_r=N23W3XZSZDGYBCP01MNA&qid=1784824391&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=hundeautositz%2Caps%2C132&sr=1-5-6e6ea531-5af4-4866-af75-1ef299d1c279-spons&aref=8LYOX4y6sQ&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=askthedogs-21&linkId=7e02ff0e326d770703e1ec8bb133101c&ref_=as_li_ss",
    "pageTitle": "Roqsy empfiehlt: Hunde-Autositz – ASK THE DOGS"
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
    "link": "https://www.amazon.de/Harness-curli-Clasp-Air-Mesh-Black/dp/B09N9CQVFT?dib=eyJ2IjoiMSJ9.zLCE0LymstxliCvd4w-rDPzDTnnykGiDpK5BVgLnTQWproAIrHi0zPf7_NzfGIgkAOnkqpRvyzl5fOnBAllhBxvgVfT2DL1B8vO0XuzPNj__QpGzoyvBinJ4EDURr3f13-YrVsak9VlbNEDDu0Hm4VjOhFPM-OyextUEA1eRAVgjCsB1l7bDhALQRU_1_LzdOTQ80vT-4PpjOSlJcSf_J_2wS98X6BJIabMjGFmIkYQtSDxll2svApUGAsB1mMp4CdONqC_1-nr40b0rYUnFJixIhhsk5a7OsadZKC73BxY.2uWY841uf9E-wGxuUDYhvcFA8SrunqR5XCUaQvy6k3Y&dib_tag=se&keywords=hundegeschirr&qid=1786304518&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-7&th=1&linkCode=ll2&tag=askthedogs-21&linkId=43886869980de84cb31161e2972f08b8&ref_=as_li_ss_tl",
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
    "link": "https://www.amazon.de/ROQSY-Natur-D%C3%B6rrfisch-Trockenfisch-Barf-Erg%C3%A4nzung-getreidefrei/dp/B0C7LF89GB?dib=eyJ2IjoiMSJ9.Ysl5SnHQ0uoXL9-lFlIeXtiseRSi_sBEn0ztmnXx3VDldWe4_ye1dV0cZHVlPDnf9nXCeWxFVx1U_B4xJpqjEL-4INR_uLL8gKOr_G0VmsZDEWz7b80xnP_yytQqAui934vhak5gBrFojQjI3lLD6jCoJAt-Yns6KutG6deMSWdgwWZmxzY77wGhhRedw5NctL70avmprM_bi_YzLYBCZvZbiGDNWeTA6TPjmZ1gL5Q._3wAaz95J2-3zlTx5PzBao5sg4LkYgaUlqnDXS6stcc&dib_tag=se&keywords=roqsy&qid=1785153715&sr=8-18&th=1&linkCode=ll2&tag=askthedogs-21&linkId=a0c9ed052b58c63aa640b22dedac1cfe&ref_=as_li_ss_tl",
    "pageTitle": "Louis empfiehlt: Dorsch-Dörrfisch – ASK THE DOGS"
  },
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
    "link": "https://www.amazon.de/Hundehandtuch-mittelgro%C3%9Fe-trocknendes-Mikrofaser-Handtuch-Grifftaschen/dp/B0CP7WNR8X?th=1&linkCode=ll2&tag=askthedogs-21&linkId=52f7f56b6abe1749dfe4b2bec183eecb&ref_=as_li_ss_tl",
    "pageTitle": "Luna empfiehlt: Fluffino Hundehandtuch – ASK THE DOGS"
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
    "link": "https://www.amazon.de/Hunderampe-Klappbar-Teleskop-Rampe-gro%C3%9Fe/dp/B0CS9V77X8?th=1&linkCode=ll2&tag=askthedogs-21&linkId=95b54c98823bd3255ed443db626b4096&ref_=as_li_ss_tl",
    "pageTitle": "Frida empfiehlt: Auto-Hunderampe – ASK THE DOGS"
  },
  {
    "id": "natur-shampoo",
    "dogKey": "felix",
    "dogName": "Felix",
    "dogBreed": "West Highland White Terrier",
    "quote": "Nach dem Schlammloch ist vor dem Kuscheln.",
    "productImg": "assets/natur-shampoo.jpg",
    "productName": "ROQSY Natur-Hundeshampoo",
    "productSub": "mild, für empfindliche Haut",
    "reasons": [
      "Mild und natürlich – ganz ohne Hautjucken",
      "Wäscht auch hartnäckigen Schlammloch-Duft zuverlässig raus",
      "Sanfte Formel, die Fell und Haut nicht austrocknet"
    ],
    "link": "https://www.amazon.de/dp/B07FPMXDRD?th=1&linkCode=ll2&tag=askthedogs-21&linkId=6f37093b0b2a875548b1f5c3e521fc1c&ref_=as_li_ss_tl",
    "pageTitle": "Felix empfiehlt: Natur-Hundeshampoo – ASK THE DOGS"
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
    "link": "https://www.amazon.de/Canosept-Ohrpflege-FingerPads-Hunde-St%C3%BCck/dp/B07RDKPPZX?th=1&linkCode=ll2&tag=askthedogs-21&linkId=eebdbd72cc7ad68251744d104751f98c&ref_=as_li_ss_tl",
    "pageTitle": "Luna empfiehlt: Ohrpflege-Fingerpads – ASK THE DOGS"
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
    "link": "https://www.amazon.de/BEDSURE-orthop%C3%A4disches-Hundebett-Grosse-Hunde/dp/B07QW4X9PY?dib=eyJ2IjoiMSJ9.yKn5GQybW1mwdssIR9ATDFvArMPzGDA7wkI764lsl_H0AX4tRkfAwm6M-J0WMbgHeTuNEHPxuiwcN3QfzUatwXBE4m1i1tpvl7-bsG_R2_0ZthqZNt6sVy3Hcv4CvlQv8MMJM-fK_Fs3PFp-EhWCgG5CZNSAQ9BoqBKUbgpXoU8J0m0DIUBt62UflUho1VcwZgcHC-bKrGuxUJHq5d0BJ56EesAcUwLQZJsc9pxCD6y045LMywUP1fHTLRdUJ8Jr_mOPaKSX0WPE1BBFwOmPzAOKCYbYi2UzDYUmaDKD0AE.td7JzMbohef4XhRcQHDFAlSSLlVcTChSaxORpVNBstc&dib_tag=se&keywords=bedsure&qid=1787236505&sr=8-3-spons&aref=ZCQYGjTiCq&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=askthedogs-21&linkId=202353c96e28891b6bc377f71c0cf2ba&ref_=as_li_ss_tl",
    "pageTitle": "Frida empfiehlt: Orthopädisches Hundebett – ASK THE DOGS"
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
    "link": "https://www.amazon.de/OSDUE-Futterschn%C3%BCffel-Futtermatte-Hunde-Schn%C3%BCffelmatte-Welpen-Trainingsmatte-Schn%C3%BCffelspielzeug/dp/B0DNJYVCG7?th=1&linkCode=ll2&tag=askthedogs-21&linkId=223a56f224331c5558281d5c3c6a4eb9&ref_=as_li_ss_tl",
    "pageTitle": "Felix empfiehlt: Schnüffelteppich – ASK THE DOGS"
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
    "link": "https://www.amazon.de/EUGAD-Hundetransportbox-Franz%C3%B6sische-Bulldogge-0010LL/dp/B0C81JZPTT?dib=eyJ2IjoiMSJ9.XzdjvcNaAt0u3C1ltDkVYdnmU2qhQU-lAivY5TeicdchEdGzGBYP7GklLBOR0Ks18HP4BW24iXgfSN9vX-pssWB29oDAmM4NewEvo0bBfF_9OiwOKFW9rBFJL53FUKEAWI7J1YiT0KtGOEgIl2wN5hLi19X9gQSmtMeN1MpOnvH3Z0eUi45adKSZbTthkVk5GeZawFA1Q7qqaTKf8uuhz7lKAluw0Iw1SKzkZ-5RBZ4JhDqoTxy-vYryBqJMr6fJvVlTylL23Nt7swrtZJHZgGiRtg7N0Y6oMAFn6wJI2uw.rJumF9ODuttmRhqmLKdaNpijOzupdXGzf-VnsRpYGlU&dib_tag=se&keywords=eugad%2Bhundetransportbox&qid=1784474590&sr=8-1-spons&aref=loXD5NaSDS&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=askthedogs-21&linkId=72d7a242b0b60f9ca59ffa5fa13b5529&ref_=as_li_ss_tl",
    "pageTitle": "Luna empfiehlt: Hunde-Transportbox – ASK THE DOGS"
  }
];
