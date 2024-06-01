export function nevRendez(lista, irany) {
    lista.sort (function (t1, t2) {
        let eredmeny = 1;
        if (t1.nev < t2.nev) {
            eredmeny = -1
        }
        return eredmeny * irany
    });
    return lista
}

export function arRendez(lista, irany) { 
    lista.sort (function (t1, t2) { 
        let eredmeny = 0;  
        if (t1.ar < t2.ar) { 
            eredmeny = -1;
        } else if (t1.ar > t2.ar) {
            eredmeny = 1;
        }
        return eredmeny * irany;
    }); 
    return lista;
} 