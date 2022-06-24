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

function calcularHoraTrabajo(horasalida,horaentrada){
    var horatrabajo = horasalida - horaentrada;
    if (horasalida < horaentrada){
        alert("La hora de salida es menor que la hora de entrada")
    }
    return horatrabajo;
}

function calcularMinutoTrabajo(minutosalida,minutoentrada){
    var minutotrabajo = minutosalida - minutoentrada;
    if (minutotrabajo < 0){
        minutotrabajo = minutotrabajo * -1;
        return minutotrabajo;
    }
    return minutotrabajo;
}

function sumaMinutos(horatrabajo,minutotrabajo){
    var totalminutos = (horatrabajo * 60) + minutotrabajo;
    return totalminutos;
}

var salario = 3700

function onclickCalcularTotalMinutos(){
    var inputEntradaHora = document.getElementById("InputEntradaHora");
    var EntradaHoraValue = inputEntradaHora.value;
    var inputSalidaHora = document.getElementById("InputSalidaHora");
    var SalidaHoraValue = inputSalidaHora.value;
    var totalHoraTrabajo = calcularHoraTrabajo(SalidaHoraValue,EntradaHoraValue);

    var inputEntradaMinuto = document.getElementById("InputEntradaMinuto");
    var EntradaMinutoValue = inputEntradaMinuto.value;
    var inputSalidaMinuto = document.getElementById("InputSalidaMinuto");
    var SalidaMinutoValue = inputSalidaMinuto.value;
    var totalMinutoTrabajo = calcularMinutoTrabajo(SalidaMinutoValue,EntradaMinutoValue);

    var totalMinutosTrabajados = sumaMinutos(totalHoraTrabajo,totalMinutoTrabajo);

    var totalaPagar = (totalMinutosTrabajados/60) * salario;

    var ResultadoHora = document.getElementById("ResultadoHora");
    ResultadoHora.innerText = "Las horas laboradas fueron : " + totalHoraTrabajo + " horas";

    var ResultadoMinuto = document.getElementById("ResultadoMinuto");
    ResultadoMinuto.innerText = "Los minutos laborados fueron : " + totalMinutoTrabajo + " minutos";

    var ResultadoTotalMinuto = document.getElementById("ResultadoTotalMinuto");
    ResultadoTotalMinuto.innerText = "El total de minutos laborados fue : " + totalMinutosTrabajados + " minutos";

    var ResultadoPagar = document.getElementById("ResultadoPagar");
    ResultadoPagar.innerText = "El total a pagar por el tiempo trabajado es : $ " + totalaPagar ;

    console.log(totalHoraTrabajo);
    console.log(totalMinutoTrabajo);
    console.log(totalMinutosTrabajados);
    console.log(totalaPagar);
}


