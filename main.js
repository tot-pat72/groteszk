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

const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.

const th_1 = document.createElement('th'); //A fejléc sorában lévő 1.cella létrehozása.
th_1.innerHTML = head.nemzetiseg; //A cella tartalmának megadása a fejléc nemzetiségének az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = head.szerzo; //A cella tartalmának megadása a fejléc szerzőjének az értékével.
th_2.className = "cell"; //className megadása az 2.oszlop 1.cellájának.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = head.mu; //A cella tartalmának megadása a fejléc művének az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

function render(){ //A render függvény meghatározása.
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
render(); //A render függvény meghívása.

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

    const nemzetisegValue = nemzetisegHtmlElement.value; //A nemzetisegHtmlElement értékének belerakása egy változóba.
    const szerzo_1Value = szerzo_1HtmlElement.value; //A szerzo_1HtmlElement értékének belerakása egy változóba.
    const mu_1Value = mu_1HtmlElement.value; //A mu_1HtmlElement értékének belerakása egy változóba.
    const szerzo_2Value = szerzo_2HtmlElement.value === "" ? undefined : szerzo_2HtmlElement.value; //A szerzo_2HtmlElement értékének belerakása egy változóba. Amennyiben a szerzo_2HtmlElement-nek nincs értéke, akkor undefined lesz.
    const mu_2Value = mu_2HtmlElement.value === "" ? undefined : mu_2HtmlElement.value; //A mu_2HtmlElement értékének belerakása egy változóba. Amennyiben a mu_2HtmlElement-nek nincs értéke, akkor undefined lesz.

    if(nemzetisegValue === ''){ //Ha a nemzetiség beviteli mezője üres.
        const parentElement = nemzetisegHtmlElement.parentElement; //A nemzetiség beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //A nemzetiség beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = 'A nemzetiseg megadása kötelező'; //Akkor a nemzetiseg megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke hamis lesz.
    }
    if(szerzo_1Value === ''){ //Ha a szerző beviteli mezője üres.
        const parentElement = szerzo_1HtmlElement.parentElement; //A szerző beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //A szerző beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = 'A szerző megadása kötelező'; //Akkor a szerző megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke hamis lesz.
    }
    if(mu_1Value === ''){ //Ha a mű beviteli mezője üres.
        const parentElement = mu_1HtmlElement.parentElement; //A mű beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //A mű beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = 'A mű megadása kötelező'; //Akkor a mű megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke hamis lesz.
    }
    if(valid){ //Ha a valid változó értéke igaz(nem volt kihagyott mező).
        const newElement = { //A newElement létrehozása.
            nemzetiseg: nemzetisegValue, //A nemzetiseg értéke az nemzetisegValue lesz.
            szerzo_1: szerzo_1Value, //A szerzo_1 értéke az szerzo_1Value lesz.
            mu_1: mu_1Value, //A mu_1 értéke az mu_1Value lesz.
            szerzo_2: szerzo_2Value, //A szerzo_2 értéke az szerzo_2Value lesz.
            mu_2: mu_2Value //A mu_2 értéke az mu_2Value lesz.
        }
        array.push(newElement); //A newElement hozzáadása az arrayhez.
        tbody.innerHTML = ''; //A táblázat tartalmának kitörlése.
        render(); //A render függvény újra renderelése.
        thisForm.reset(); //A form visszaállítása alaphelyzetbe.
    }
})