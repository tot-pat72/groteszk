/**
 * Táblázat fejlécének a létrehozása.
 * A head végighalad a header tömbön.
 * Az adatokat a header tömbből szedi ki. 
 */
function generateHeader(){ //A generateHeader függvény meghatározása.
    const header = ["Nemzetiség", "Szerző", "Mű"]; //A header változóba, a tömb tartalmának az eltárolása.
    const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
    thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.
    for(const head of header){ //Végighaladás a headeren, a head az aktuális elem.
        const th = document.createElement('th') //Új cella létrehozása.
        th.innerHTML = head; //A cella tartalmának megadása a headnek az értékével.
        if(head === "Szerző"){ //Ha a head egyenlő a szerzővel.
            th.className = "cell"; //className megadása a fejléc szerző cellájának.
        }
        tr.appendChild(th); //Cellák hozzáadása a fejlécben lévő sorhoz.
    }
}

/**
 * A form létrehozása:
 * -Származás megnevezése
 * -Első szerző
 * -Első mű
 * -Második szerző
 * -Második mű
 * Button a kitöltött form hozzáadásához.
 * Minden inputnak van egy error classa.
 */
function generateForm(){ //A generateForm függvény meghatározása.
    const field = [ //A field tömb létrehozása.
        { label: "Származás:", id: "szarmazas", name: "szarmazas", for: "szarmazas"}, //A label, id, name, for-nak a megadása.
        { label: "1. szerző:", id: "szerzo1", name: "szerzo1", for: "szerzo1"}, //A label, id, name, for-nak a megadása.
        { label: "1. szerző műve:", id: "szerzo1mu", name: "szerzo1mu", for: "szerzo1mu"}, //A label, id, name, for-nak a megadása.
        { label: "2. szerző:", id: "szerzo2", name: "szerzo2", for: "szerzo2"}, //A label, id, name, for-nak a megadása.
        { label: "2. szerző műve:", id: "szerzo2mu", name: "szerzo2mu", for: "szerzo2mu"}, //A label, id, name, for-nak a megadása.
    ]
    const form = document.createElement('form'); //Form létrehozása.
    form.id = 'form'; //A form id-jének megadása.
    document.body.appendChild(form); //A form hozzáadása a dokumentum törzséhez.

    for(const cell of field){ //Végighaladás a fielden, a cell az aktuális elem.
        const div = document.createElement('div'); //A form sorainak a létrehozása.
        div.classList.add('field'); //A field class hozzáadása a div-hez.

        const label = document.createElement('label'); //A label elem létrehozása.
        label.htmlFor = cell.for; //A label for-ának megadása.
        label.innerText = cell.label; //A label tartalmának megadása.
        div.appendChild(label); //A label hozzáadása a div-hez.

        const input = document.createElement('input'); //Az input mező létrehozása.
        input.type = 'text'; //Az input típusának megadása.
        input.id = cell.id; //Az input id-jének megadása.
        input.name = cell.name; //Az input nevének megadása.
        div.appendChild(input); //Az input hozzáadása a div-hez.

        const div_error = document.createElement('div'); //A div_error div létrehozása.
        div_error.classList = 'error'; //A div_error-hoz az error class hozzárendelése.
        div.appendChild(div_error); //A div_error hozzáadása a div-hez.
        form.appendChild(div); //A div hozzáadása a formhoz.
    }
    const button = document.createElement('button'); //A gomb elem létrehozása.
    button.type = 'submit'; //A gomb típusa submit lesz.
    button.innerText = 'Hozzáadás'; //A gomb tartalma a Hozzáadás lesz.
    form.appendChild(button); //A gomb hozzáadása a formhoz.
}

/**
 * A render függvény létrehoz egy táblázatot az arrayben lévők alapján.
 * A származás, szerző és mű után új sor létrehozása, kivéve ha egy nemzethez több szerző, mű tartozik. Ez esetben ugyanahoz a nemzethez egy új sor létrehozása.
 * @param {array} array tartalmazza az adatokat.
 */
function render(array){ //A render függvény meghatározása, amelynek a bemeneti paramétere az array lesz.
    for(const currentElement of array){ //Végighaladás az arrayen, a currentElement az aktuális elem.
        const tr_1 = document.createElement('tr'); //Egy új sor létrehozása a táblázatba.
        tbody.appendChild(tr_1); //Az adott sor hozzáfűzése a táblázathoz.

        const nemzetiseg = document.createElement('td'); //Új cella létrehozása az adott sorban.
        nemzetiseg.innerHTML = currentElement.nemzetiseg; //A cella tartalmának megadása az aktuális elem nemzetiségének az értékével.
        tr_1.appendChild(nemzetiseg); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

        const szerzo_1 = document.createElement('td'); //Új cella létrehozása az adott sorban.
        szerzo_1.innerHTML = currentElement.szerzo_1; //A cella tartalmának megadása az aktuális elem szerzőjének az értékével.
        tr_1.appendChild(szerzo_1); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

        const mu_1 = document.createElement('td'); //Új cella létrehozása az adott sorban.
        mu_1.innerHTML = currentElement.mu_1; //A cella tartalmának megadása az aktuális elem művének az értékével.
        tr_1.appendChild(mu_1); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

        if(currentElement.szerzo_2 !== undefined && currentElement.mu_2 !== undefined){ //Ha a currentElement.szerzo_2 és a currentElement.mu_2 nem egyenlő undefineddal, akkor végig megy az elágazáson.
            const tr_2 = document.createElement('tr'); //Még egy új sor létrehozása a táblázatba.
            tbody.appendChild(tr_2); //Az adott sor hozzáfűzése a táblázathoz.
            nemzetiseg.rowSpan = 2; //Ha idáig lefut, akkor összevonjuk a nemzetiseg 2 sorát.

            const szerzo_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
            szerzo_2.innerHTML = currentElement.szerzo_2; //A cella tartalmának megadása az aktuális elem szerzőjének az értékével.
            tr_2.appendChild(szerzo_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

            const mu_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
            mu_2.innerHTML = currentElement.mu_2; //A cella tartalmának megadása az aktuális elem művének az értékével.
            tr_2.appendChild(mu_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
        }
    }
}

/**
 * @param {HTMLElement} inputHTMLElement Ennek megvizsgálása, hogy üres e.
 * @param {string} errormessage Hibaüzenet kiírása, hogyha üres a mező.
 * @returns {Boolean} Visszatér, vagy hamissal hogyha nem ment át a validáción, igennel meg ha ki volt töltve mindkettő mező. 
 */
function validateFormHTMLField(inputHTMLElement, errormessage){ //A validateFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.
    if(inputHTMLElement.value === ''){ //Ha az inputHTMLElement.value beviteli mezője üres.
        const parentElement = inputHTMLElement.parentElement; //Az inputHTMLElement beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az inputHTMLElement beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor a hibaüzenet megadása kell.
        }
        valid = false; //A valid változó értéke false lesz.
    }
    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}

/**
 * A getNonEmptyFormHTMLField függvény csak akkor fut le, hogyha csak az egyik mező van kitöltve.
 * @param {HTMLElement} szerzo_2 Ennek megvizsgálása, hogy van e benne valami.
 * @param {HTMLElement} mu_2 Ennek megvizsgálása, hogy van e benne valami.
 * @param {string} errormessage Hibaüzenet kiírása, hogyha üres a mező.
 * @returns {Boolean}Visszatér, vagy hamissal hogyha csak az egyik volt kitöltve, igennel meg ha ki volt töltve mindkettő mező.
 */
function getNonEmptyFormHTMLField(szerzo_2, mu_2, errormessage){ //A getNonEmptyFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.
    if (!validateFormHTMLField(szerzo_2, errormessage) && mu_2.value !== ''){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti szerzo_2 esetén és a mu_2.value nem egyenlő egy üres stringgel.
        valid = false; //A valid változó értéke false lesz.
    };
    if (!validateFormHTMLField(mu_2, errormessage) && szerzo_2.value !== ''){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti mu_2 esetén és a szerzo_2.value nem egyenlő egy üres stringgel.
        valid = false; //A valid változó értéke false lesz.
    };
    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}