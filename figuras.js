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
  
    var ResultadoPerimetroCuadrado = document.getElementById("ResultadoPerimetroCuadrado");
    ResultadoPerimetroCuadrado.innerText = "El perimetro del cuadrado es " + perimetro
}

function calcularAreaCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);

    var ResultadoAreaCuadrado = document.getElementById("ResultadoAreaCuadrado");
    ResultadoAreaCuadrado.innerText = "El area del cuadrado es " + area
}

function calcularPerimetroTriangulo(){
    var derecho = document.getElementById("InputLadoDerecho");
    var valuederecho = parseInt (derecho.value);
    var izquierdo = document.getElementById("InputLadoIzquierdo");
    var valueizquierdo = parseInt (izquierdo.value);
    var base = document.getElementById("InputBase");
    var valuebase = parseInt (base.value);
    var perimetro2 = perimetroTriangulo(valuederecho,valueizquierdo,valuebase);

    var ResultadoPerimetroTriangulo = document.getElementById("ResultadoPerimetroTriangulo");
    ResultadoPerimetroTriangulo.innerText = "El perimetro del triangulo es " + perimetro2
}

function calcularAreaTriangulo(){
    var base = document.getElementById("InputBase");
    var valuebase = base.value;
    var altura = document.getElementById("InputAltura");
    var valuealtura = altura.value;
    var aera2 = areaTriangulo(valuebase,valuealtura);

    var ResultadoAreaTriangulo = document.getElementById("ResultadoAreaTriangulo");
    ResultadoAreaTriangulo.innerText = "El area del triangulo es " + aera2
}

function calcularPerimetroCirculo(){
    var radio = document.getElementById("InputRadio");
    var valueradio = parseInt (radio.value);
    var diametro = diametroCirculo(valueradio);
    var perimetro3 = perimetroCirculo(valueradio);

    var ResultadoPerimetroCirculo = document.getElementById("ResultadoPerimetroCirculo");
    ResultadoPerimetroCirculo.innerText = "El perimetro del circulo es " + perimetro3
}

function calcularAreaCirculo(){
    var radio = document.getElementById("InputRadio");
    var valueradio = parseInt (radio.value);
    var area3 = areaCirculo(valueradio);

    var ResultadoAreaCirculo = document.getElementById("ResultadoAreaCirculo");
    ResultadoAreaCirculo.innerText = "El area del circulo es " + area3
}
