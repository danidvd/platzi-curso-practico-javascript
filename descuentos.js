function calcularPrecioConDescuento(precio,descuento){
    var porcentajePrecioConDescuento = 100 - descuento;
    var precioConDescuento = (precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButonPrecioDescuento(){
    var inputPrecio = document.getElementById("InputPrecio");
    var precioValue = inputPrecio.value;
    var inputDescuento = document.getElementById("InputDescuento");
    var descuentoValue = inputDescuento.value;
    var precioConDescuento = calcularPrecioConDescuento(precioValue,descuentoValue);
    // Aqui creo id donde me va traer resultado ,en etiqueta a la cual le di el valor id 
    var ResultadoPrecio = document.getElementById("ResultadoPrecio");
    ResultadoPrecio.innerText = "El precio con descuento es $" + precioConDescuento
}

var salarioNetoMensual = 1344000;

function calcularSalarioMinuto(){
    var valorMinutos = (salarioNetoMensual/30)/1440;
    return valorMinutos;
}

function tiempoTrabajo(entrada,salida){
    return parceint(entrada - salida);
}

function onClickTiempoTrabajado(){
    var inputEntrada = document.getElementById("InputEntrada");
    var entrada = parceint(inputEntrada.value);
    var inputSalida = document.getElementById("InputSalida");
    var salida = parceint(inputSalida.value);
    var tiempoTrabajo = tiempoTrabajo(entrada,salida);
    var resultadoTiempo = document.getElementById("resultadoTiempo");
    resultadoTiempo.innerText = "El tiempo trabajado fue " + tiempoTrabajo;
}