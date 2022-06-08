// Como crear console. agrupados o en grupitos, se hace de la sigueinte manera al principio console.group("name")-al final console.groupEnd();

// Codigo del cuadrado

console.group("Cuadrado")
var ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

var perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

var areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// codigo del triangulo

console.group("Triangulo")
var ladotriangulo1 = 6;
var ladotriangulo2 = 6;
var basetriangulo = 4;

console.log("Los lados del tringulo miden: "+ ladotriangulo1 + "cm ," + ladotriangulo2 + "cm ," + basetriangulo + "cm")


var alturatriangulo = 5.5;
console.log("La altura del Triangulo es: " + alturatriangulo + "cm")

var perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm")

var areaTriangulo = (basetriangulo*alturatriangulo)/2;
console.log("El area del tringulo es: " + areaTriangulo +"cm^2")

console.groupEnd();

// Codigo del circulo

console.group("Circulo");

// Radio
var radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm")

// Diametro
var diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm")

// PI

var PI = Math.PI;
console.log("PI es: " + PI)

// Circunferencia

var circunferenciaCirculo = diametroCirculo * PI;
console.log("La circunferencia del circulo es: " + circunferenciaCirculo + "cm")

//Área

var areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El Área del circulo es: " + areaCirculo + "cm^2")

console.groupEnd();


