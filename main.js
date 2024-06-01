import { termekekLIST } from "./termekek.js";
import { kartyaKiir, kosarOsszeallit } from "./fuggvenyek.js";
import { szures } from "./fuggvenyek.js";
import { arRendez, nevRendez } from "./rendez.js";
import { torol, kosarka, arNovel, arCsokkent } from "./kosar.js";
const termekELEM = $("#termekek");

const kosarba = $("#gomb")
termekELEM.html(kartyaKiir(termekekLIST))
const KOSAR = []

let irany = 1;
init(termekekLIST);
szuresEsemeny();


function init(lista) {
    termekELEM.html(kartyaKiir(lista))
    rendezEsemeny(lista);
    kosarEsemeny(lista);
  
}

function rendezEsemeny(lista) {
    const nevElem = $("#rendeznev")
    const arElem = $("#arrendez")

    nevElem.on("click", function () {
        const rLista = nevRendez(lista.slice(), irany);
        termekELEM.html(kartyaKiir(rLista))
        irany *= -1;
    })
    arElem.on("click", function () {
        const rLista = arRendez(lista.slice(), irany);
        termekELEM.html(kartyaKiir(rLista))
        irany *= -1;
    })

}

function szuresEsemeny() {
    const keresoELEM = $("#szuro");
    keresoELEM.on("keyup", function () {
      let keresoSzoveg = keresoELEM.val();
      const szLISTA = szures(termekekLIST, keresoSzoveg);
      init(szLISTA);
    });
}

const kosarELEM = $("#kosar")
function kosarEsemeny(lista){
    const gombELEM = $(".gomb")
    gombELEM.on("click", function(event){
        const ID = event.target.id
        if(!KOSAR.includes(lista[ID])){
            lista[ID].db = 1
            KOSAR.push(lista[ID])
            kosarELEM.html(kosarka(KOSAR))
            arELEM.html((arNovel(KOSAR))*lista[ID].db)
            torolEsemeny()
        }else if(KOSAR.includes(lista[ID])){
            lista[ID].db += 1
            kosarELEM.html(kosarka(KOSAR))
            arELEM.html((arNovel(KOSAR))*lista[ID].db)
            torolEsemeny()
        }
    })
}


function torolEsemeny(){
    const torolGombELEM = $(".torles")
    torolGombELEM.on("click", function(event){
        const ID = event.target.id
        const tLISTA = torol(KOSAR, ID)
        kosarELEM.html(tablazat(tLISTA))
        arELEM.html(Math.abs(arCsokkent(tLISTA)))
        torolEsemeny()
    } )
}
init(cipokLISTA)