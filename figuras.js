// Para poder modiicar las medidas de las figuras geometricas y no sean fijas en el codigo, si no qu pueden varias de acuerdo a l necesidad del solicitant se hace utilizando funciones

// Codigo del cuadrado

console.group("Cuadrado")
//var ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 

//console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// codigo del triangulo

console.group("Triangulo")
//var ladotriangulo1 = 6;
//var ladotriangulo2 = 6;
//var basetriangulo = 4;

//console.log("Los lados del tringulo miden: "+ ladotriangulo1 + "cm ," + ladotriangulo2 + "cm ," + basetriangulo + "cm")


//var alturatriangulo = 5.5;
//console.log("La altura del Triangulo es: " + alturatriangulo + "cm")

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El area del tringulo es: " + areaTriangulo +"cm^2")

console.groupEnd();

// Codigo del circulo

console.group("Circulo");

// Radio
//var radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm")

// Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diametro del circulo es: " + diametroCirculo + "cm")

// PI

var PI = Math.PI;
console.log("PI es: " + PI)

// perimetro

function perimetroCirculo(radio){
    var diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("La perimetro del circulo es: " + perimetroCirculo + "cm")

//Área

function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("El Área del circulo es: " + areaCirculo + "cm^2")

console.groupEnd();

// Aqui va la interaccion con Js

function calcularPerimetroCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);
    alert(area);
}



