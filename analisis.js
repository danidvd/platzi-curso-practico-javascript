// Esta variable esta mapeando y me esta retornado un arrays solo con los salarios de las personas

var salariosCol = colombia.map(
    function (persona) {
        return persona.salario;
    }
);


// Esta variable por medio del metodo sort, me esta ordenando en orden los salarios

var salariosColSorted = salariosCol.sort(
    function (salarioA,salarioB) {
        return salarioA - salarioB;
    }
);

// Esta funcion es para calcular si el salario de la mitad es numero par o impar (total de salarios)

function esPar (numero) {
    return (numero % 2 === 0);
// Esta funcion se puede simplificar de esta manera, ya que de igual manera me va retornar true o false
//    if (numero % 2 === 0) {
//        return true;
//    } else {
//        return false;
//    }
}

// Esta funcion es para calcular el promedio o media aritemetica de salarios

function calcularMediaAritmetica(lista){
    var sumaLista = lista.reduce(
        function (valorAcumulado = 0,nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    var promedioLista = sumaLista / lista.length
    return promedioLista;
}

// esta funcion es para calcular la mediana de los salarios

function medianaSalarios(lista){
    var mitad = parseInt (lista.length / 2);
    if (esPar(lista.length)) {
        var personaMitad1 = lista[mitad - 1];
        var personaMitad2 = lista[mitad];

        var mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;

    } else {
        var personaMitad = lista[mitad];
        return personaMitad;
    }
}

// le estoy asigando valor a la funcion en un variable Mediana General

var medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana top 10 %
// Metodo splice me reibe 2 parametros (1.donde lo quiero colocar 2.numero de elementos)

var spliceStar = (salariosColSorted.length * 90) / 100;
var spliceCount = salariosColSorted.length - spliceStar;

var salarioColTop10 = salariosColSorted.splice(spliceStar,spliceCount);

var medianaTop10Col = medianaSalarios(salarioColTop10);

console.log(
    {
        medianaGeneralCol,
        medianaTop10Col,
    }
);