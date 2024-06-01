

export function kartyaKiir(lista) {
    let txt = ""
    txt += `<div class = "row container-fluid">`
    for (let index = 0; index < lista.length; index++) {
        txt+= `<div id="kartyakep" class="card col-md-4">`
        txt+= `<img class="card-img-top" src="${lista[index].eleres}" alt="Card image">`
        txt+= `<div class="card-body">`
        txt+= `<h4 class="card-title">${lista[index].nev}</h4>`
        txt+= `<a href="#" id="${index}" class="gomb">Kosárba</a>`
        txt+= `<p>ár: ${lista[index].ar}</p>`
        txt+= `</div>`
        txt+= `</div>`
    }
    txt += `</div>`
    
    return txt
}

export function kartyaRendez() {

}

export function szures(lista, keresoSzoveg) {

    const szurtLISTA = lista.filter(function (a) {
      return a.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });

    return szurtLISTA;
  }


  export function kosarOsszeallit(lista) {
    console.log(lista);
    let txt="<table class'table table-striped'>"
    txt+="<thead><tr><th>Név</th><th>Ár</th>Kosár tartalma</tr>"
    txt+="<tbody>"
    lista.forEach((elem,index) => {
      txt+=`<tr>`
      for (const kulcs in elem) {
        txt+= `<td>${elem[kulcs]}</td>`;
      }
      txt += `<td class="torles" id=${index}>🗑️</td>`;
      txt +=`</tr>`;
    });
    txt+= "</tbody></table>";
    console.log(txt);
    return txt;
}