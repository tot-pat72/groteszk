const array = [ //Az array tömb létrehozása.
    { //Az array 1.elemének a létrehozása.
        nemzetiseg: "Orosz", //Értékadás az array 1.elem nemzetiseg tulajdonságának.
        szerzo_1: "Gogol", //Értékadás az array 1.elem szerzo_1 tulajdonságának.
        mu_1: "A köpönyeg", //Értékadás az array 1.elem mu_1 tulajdonságának.
        szerzo_2: "Csehov", //Értékadás az array 1.elem szerzo_2 tulajdonságának.
        mu_2: "A csinovnyik halála" //Értékadás az array 1.elem mu_2 tulajdonságának.
    },

    { //Az array 2.elemének a létrehozása.
        nemzetiseg: "Cseh", //Értékadás az array 2.elem nemzetiseg tulajdonságának.
        szerzo_1: "Franz Kafka", //Értékadás az array 2.elem szerzo_1 tulajdonságának.
        mu_1: "Az átváltozás", //Értékadás az array 2.elem mu_1 tulajdonságának.
    },

    { //Az array 3.elemének a létrehozása.
        nemzetiseg: "Magyar", //Értékadás az array 3.elem nemzetiseg tulajdonságának.
        szerzo_1: "Örkény István", //Értékadás az array 3.elem szerzo_1 tulajdonságának.
        mu_1: "Egyperces Novellák", //Értékadás az array 3.elem mu_1 tulajdonságának.
        szerzo_2: "József Attila", //Értékadás az array 3.elem szerzo_2 tulajdonságának.
        mu_2: "Klárisok" //Értékadás az array 3.elem mu_2 tulajdonságának.
    },

    { //Az array 4.elemének a létrehozása.
        nemzetiseg: "Svájc", //Értékadás az array 4.elem nemzetiseg tulajdonságának.
        szerzo_1: "Friedrich Dürrenmatt", //Értékadás az array 4.elem szerzo_1 tulajdonságának.
        mu_1: "A fizikusok" //Értékadás az array 4.elem mu_1 tulajdonságának.
    }
]

const head = { //A fejléc objektum létrhozása.
    nemzetiseg: "Nemzetiség", //Értékadás az objektum nemzetiségének.
    szerzo: "Szerző", //Értékadás az objektum szerzőjének.
    mu: "Mű" //Értékadás az objektum műnek.
}

const table = document.createElement('table'); //Táblázat lértehozása.
document.body.appendChild(table); //Táblázat hozzáadása a dokumentumhoz.

const colgroup = document.createElement('colgroup'); //Colgroup létrehozása.
table.appendChild(colgroup); //Colgroup hozzáadása a táblázathoz.

const colSpan_1 = document.createElement('col'); //1.oszlop létrehozása.
colSpan_1.className = "columns"; //className megadása az 1.oszlopnak.
colgroup.appendChild(colSpan_1); //1.oszlop hozzáadása a Colgouphoz.

const colSpan_2 = document.createElement('col'); //2.oszlop létrehozása.
colgroup.appendChild(colSpan_2); //2.oszlop hozzáadása a Colgouphoz.

const colSpan_3 = document.createElement('col'); //3.oszlop létrehozása.
colSpan_3.className = "columns"; //className megadása a 3.oszlopnak.
colgroup.appendChild(colSpan_3); //3.oszlop hozzáadása a Colgouphoz.

const thead = document.createElement('thead'); //Fejléc létrehozása.
table.appendChild(thead); //Fejléc hozzáadása a táblázathoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

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
generateHeader(); //A generateHeader függvény meghívása.

function generateForm(){ //A generateForm függvény meghatározása.
    const form = document.createElement('form'); //Form létrehozása.
    form.id = 'form'; //A form id-jének megadása.
    document.body.appendChild(form); //A form hozzáadása a dokumentum törzséhez.

    const div_1 = document.createElement('div'); //A form 1.sorának a létrehozása.
    div_1.classList.add('field'); //A field class hozzáadása a div_1-hez.

    const label_1 = document.createElement('label'); //A label_1 elem létrehozása.
    label_1.htmlFor = 'szarmazas'; //A label_1 for-ának megadása.
    label_1.innerText = 'Származás:'; //A label_1 tartalma a Származás: lesz.
    div_1.appendChild(label_1); //A label_1 hozzáadása a div_1-hez.

    const input_1 = document.createElement('input'); //Az input_1 mező létrehozása.
    input_1.type = 'text'; //Az input_1 típusának megadása.
    input_1.id = 'szarmazas'; //Az input_1 id-jének megadása.
    input_1.name = 'szarmazas'; //Az input_1 nevének megadása.
    div_1.appendChild(input_1); //Az input_1 hozzáadása a div_1-hez.

    const div_1_error = document.createElement('div'); //A div_1_error div létrehozása.
    div_1_error.classList = 'error'; //A div_1_error-hoz az error class hozzárendelése.
    div_1.appendChild(div_1_error); //A div_1_error hozzáadása a div_1-hez.
    form.appendChild(div_1); //A div_1 hozzáadása a formhoz.

    
    const div_2 = document.createElement('div'); //A form 2.sorának a létrehozása.
    div_2.classList.add('field'); //A field class hozzáadása a div_2-höz.

    const label_2 = document.createElement('label'); //A label_2 elem létrehozása.
    label_2.htmlFor = 'szerzo1'; //A label_2 for-ának megadása.
    label_2.innerText = '1. szerző:'; //A label_2 tartalma az 1. szerző: lesz.
    div_2.appendChild(label_2); //A label_2 hozzáadása a div_2-höz.

    const input_2 = document.createElement('input'); //Az input_2 mező létrehozása.
    input_2.type = 'text'; //Az input_2 típusának megadása.
    input_2.id = 'szerzo1'; //Az input_2 id-jének megadása.
    input_2.name = 'szerzo1'; //Az input_2 nevének megadása.
    div_2.appendChild(input_2); //Az input_2 hozzáadása a div_2-höz.

    const div_2_error = document.createElement('div'); //A div_2_error div létrehozása.
    div_2_error.classList = 'error'; //A div_2_error-hoz az error class hozzárendelése.
    div_2.appendChild(div_2_error); //A div_2_error hozzáadása a div_2-höz.
    form.appendChild(div_2); //A div_2 hozzáadása a formhoz.


    const div_3 = document.createElement('div'); //A form 3.sorának a létrehozása.
    div_3.classList.add('field'); //A field class hozzáadása a div_3-hoz.

    const label_3 = document.createElement('label'); //A label_3 elem létrehozása.
    label_3.htmlFor = 'szerzo1mu'; //A label_3 for-ának megadása.
    label_3.innerText = '1. szerző műve:'; //A label_3 tartalma az 1. szerző műve: lesz.
    div_3.appendChild(label_3); //A label_3 hozzáadása a div_3-hoz.

    const input_3 = document.createElement('input'); //Az input_3 mező létrehozása.
    input_3.type = 'text'; //Az input_3 típusának megadása.
    input_3.id = 'szerzo1mu'; //Az input_3 id-jének megadása.
    input_3.name = 'szerzo1mu'; //Az input_3 nevének megadása.
    div_3.appendChild(input_3); //Az input_3 hozzáadása a div_3-hoz.

    const div_3_error = document.createElement('div'); //A div_3_error div létrehozása.
    div_3_error.classList = 'error'; //A div_3_error-hoz az error class hozzárendelése.
    div_3.appendChild(div_3_error); //A div_3_error hozzáadása a div_3-hoz.
    form.appendChild(div_3); //A div_3 hozzáadása a formhoz.


    const div_4 = document.createElement('div'); //A form 4.sorának a létrehozása.
    div_4.classList.add('field'); //A field class hozzáadása a div_4-hez.

    const label_4 = document.createElement('label'); //A label_4 elem létrehozása.
    label_4.htmlFor = 'szerzo2'; //A label_4 for-ának megadása.
    label_4.innerText = '2. szerző:'; //A label_4 tartalma a 2. szerző: lesz.
    div_4.appendChild(label_4); //A label_4 hozzáadása a div_4-hez.

    const input_4 = document.createElement('input'); //Az input_4 mező létrehozása.
    input_4.type = 'text'; //Az input_4 típusának megadása.
    input_4.id = 'szerzo2'; //Az input_4 id-jének megadása.
    input_4.name = 'szerzo2'; //Az input_4 nevének megadása.
    div_4.appendChild(input_4); //Az input_4 hozzáadása a div_4-hez.

    const div_4_error = document.createElement('div'); //A div_4_error div létrehozása.
    div_4_error.classList = 'error'; //A div_4_error-hoz az error class hozzárendelése.
    div_4.appendChild(div_4_error); //A div_4_error hozzáadása a div_4-hez.
    form.appendChild(div_4); //A div_4 hozzáadása a formhoz.


    const div_5 = document.createElement('div'); //A form 5.sorának a létrehozása.
    div_5.classList.add('field'); //A field class hozzáadása a div_5-höz.

    const label_5 = document.createElement('label'); //A label_5 elem létrehozása.
    label_5.htmlFor = 'szerzo2mu'; //A label_5 for-ának megadása.
    label_5.innerText = '2. szerző műve:'; //A label_5 tartalma a 2. szerző műve: lesz.
    div_5.appendChild(label_5); //A label_5 hozzáadása a div_5-höz.

    const input_5 = document.createElement('input'); //Az input_5 mező létrehozása.
    input_5.type = 'text'; //Az input_5 típusának megadása.
    input_5.id = 'szerzo2mu'; //Az input_5 id-jének megadása.
    input_5.name = 'szerzo2mu'; //Az input_5 nevének megadása.
    div_5.appendChild(input_5); //Az input_5 hozzáadása a div_5-höz.

    const div_5_error = document.createElement('div'); //A div_5_error div létrehozása.
    div_5_error.classList = 'error'; //A div_5_error-hoz az error class hozzárendelése.
    div_5.appendChild(div_5_error); //A div_5_error hozzáadása a div_5-höz.
    form.appendChild(div_5); //A div_5 hozzáadása a formhoz.

    const button = document.createElement('button'); //A gomb elem létrehozása.
    button.type = 'submit'; //A gomb típusa submit lesz.
    button.innerText = 'Hozzáadás'; //A gomb tartalma a Hozzáadás lesz.
    form.appendChild(button); //A gomb hozzáadása a formhoz.
}
generateForm(); //A generateForm függvény meghívása.

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
render(array); //A render függvény meghívása.

const form = document.getElementById('form'); //Az űrlapban lévő formnak az id-jének az elkérése.
form.addEventListener('submit', function(e) { //A függvény meghívódik, a submit használatakor.
    e.preventDefault(); //A böngésző alapértelmezett lefutásának a megakadályozása.
    const nemzetisegHtmlElement = document.getElementById('szarmazas'); //A HtmlElement elkérése, amelynek a szarmazas az id-je.
    const szerzo_1HtmlElement = document.getElementById('szerzo1'); //A HtmlElement elkérése, amelynek a szerzo1 az id-je.
    const mu_1HtmlElement = document.getElementById('szerzo1mu'); //A HtmlElement elkérése, amelynek a szerzo1mu az id-je.
    const szerzo_2HtmlElement = document.getElementById('szerzo2'); //A HtmlElement elkérése, amelynek a szerzo2 az id-je.
    const mu_2HtmlElement = document.getElementById('szerzo2mu'); //A HtmlElement elkérése, amelynek a szerzo2mu az id-je.

    const thisForm = e.currentTarget; //Az e.currentTarget tulajdonsága, amely a formot tartalmazza, ennek eltárolása egy változóba.
    const errorHtmlElements = thisForm.querySelectorAll('.error'); //A formon belüli összes error classal ellátott html element elkérése.
    for(const errorElement of errorHtmlElements){ //Végighaladás a visszakapott errorHtmlElementen.
        errorElement.innerHTML = ''; //Az aktuális elem tartalmának kitörlése.
    }
    let valid = true; //A valid valtozó kezdő értéke igaz.

    if(!validateFormHTMLField(nemzetisegHtmlElement, 'A nemzetiseg megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti nemzetisegHtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!validateFormHTMLField(szerzo_1HtmlElement, 'A szerző megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti szerzo_1HtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!validateFormHTMLField(mu_1HtmlElement, 'A mű megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti mu_1HtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!getNonEmptyFormHTMLField(szerzo_2HtmlElement, mu_2HtmlElement, "A szerző és a hozzá tartozó mű megadása kötelező")){ //Ha getNonEmptyFormHTMLField függvény hamissal tér vissza, mind a bemeneti szerzo_2HtmlElement és az mu_2HtmlElement esetén is.
        valid = false; //A valid változó értéke false lesz.
    }

    if(valid){ //Ha a valid változó értéke igaz(nem volt kihagyott mező).
        const nemzetisegValue = nemzetisegHtmlElement.value; //A nemzetisegHtmlElement értékének belerakása egy változóba.
        const szerzo_1Value = szerzo_1HtmlElement.value; //A szerzo_1HtmlElement értékének belerakása egy változóba.
        const mu_1Value = mu_1HtmlElement.value; //A mu_1HtmlElement értékének belerakása egy változóba.
        const szerzo_2Value = szerzo_2HtmlElement.value === "" ? undefined : szerzo_2HtmlElement.value; //A szerzo_2HtmlElement értékének belerakása egy változóba. Amennyiben a szerzo_2HtmlElement-nek nincs értéke, akkor undefined lesz.
        const mu_2Value = mu_2HtmlElement.value === "" ? undefined : mu_2HtmlElement.value; //A mu_2HtmlElement értékének belerakása egy változóba. Amennyiben a mu_2HtmlElement-nek nincs értéke, akkor undefined lesz.

        const newElement = { //A newElement létrehozása.
            nemzetiseg: nemzetisegValue, //A nemzetiseg értéke az nemzetisegValue lesz.
            szerzo_1: szerzo_1Value, //A szerzo_1 értéke az szerzo_1Value lesz.
            mu_1: mu_1Value, //A mu_1 értéke az mu_1Value lesz.
            szerzo_2: szerzo_2Value, //A szerzo_2 értéke az szerzo_2Value lesz.
            mu_2: mu_2Value //A mu_2 értéke az mu_2Value lesz.
        }
        array.push(newElement); //A newElement hozzáadása az arrayhez.
        tbody.innerHTML = ''; //A táblázat tartalmának kitörlése.
        render(array); //A render függvény újra renderelése.
        thisForm.reset(); //A form visszaállítása alaphelyzetbe.
    }
})

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