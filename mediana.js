function calcularMediaAritmetica(lista){
    var sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    var promedioLista = sumaLista / lista.length
    return promedioLista;
    }

//lista Arrays

var lista1 = [200,100,500,300];

// con el atributo de arrays sort, me ordena en orden la lista,en caso de la base de datos venga desorganizada

var lista1Ordenada = lista1.sort(function(a,b){
    return a - b;
});
console.log(lista1);

var mitadLista1 = parseInt (lista1Ordenada.length / 2);


// % = module 

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if (esPar(lista1Ordenada.length)) {
    var elemento1 = lista1Ordenada[mitadLista1 - 1];
    var elemento2 = lista1Ordenada[mitadLista1];

    var Promedio1y2 = calcularMediaAritmetica
    ([elemento1,elemento2]);

    mediana = Promedio1y2;
}else{
    mediana = lista1Ordenada[mitadLista1];
}
