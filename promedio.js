

function calcularMediaAritmetica(lista){
//   let sumaLista = 0;
//    for (let i = 0; i < lista.length; i++) {
//    sumaLista = sumaLista + lista[i];
//}

//Reduce,permite sumar cada elemento
var sumaLista = lista.reduce(
    function (valorAcumulado = 0,nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);

var promedioLista = sumaLista / lista.length
return promedioLista;
}