//La funcion validar datos chequea si la entrada de dia , mes y hora es distinta a un numero 
function validarDatos(dia, mes, hora) {
    let validar = true;
    if (isNaN(dia) || dia < 1 || dia > 31) {
        validar = false;
        alert("Por favor ingrese una dia valido");
    }
    if (isNaN(mes) || mes < 1 || mes > 12) {
        validar = false;
        alert("Por favor ingrese un mes valido");
    }
    if (isNaN(hora) || hora < 1 || hora > 23) {
        validar = false;
        alert("Por favor ingrese una hora valida");
    }
    return validar;
}
//La funcion validar datos deja al cliente sumar productos y arroja el precio total 
function comprarProductos(){
    let precioTotal = 0 ;
    let producto;
    while (producto != "s") {
        producto = prompt("Ingresa el nombre del producto o 's' para salir");
        if (producto != "s") {
            let precio = parseFloat(prompt("Ingrese el precio del producto"));
            if (!isNaN(precio)) {
                alert(`El precio de ${producto} es de : ${precio} ARS`);
                precioTotal = precioTotal + precio;
            }
        }
    }
return precioTotal;
}

//La funcion pagocuotas permite al usuario elegir un plan de pago
function pagocuotas(precioTotal , int ){
    let cuotas = parseInt(prompt("ingrese la cantidad de cuotas [1-12]"));
    if (!isNaN(cuotas) && cuotas >= 1 && cuotas <= 12) {
        let precioCuota = parseInt((precioTotal / cuotas) * int) ;
        let montoTotal = precioCuota * cuotas ;
        alert(`El plan de pago es de ${cuotas} cuotas de : ${precioCuota} ARS finales por mes \n\ Monto total : ${montoTotal} ARS.`);
    } else {
        alert("Las cuotas ingresadas son invalidas");
    }
}

//Entrada de datos del usuario
let op = parseInt(prompt("Bienvenido a Ponce Joyas \n\ Para solicitar un TURNO ingrese [1] \n\ Para COMPRAR un producto ingrese [2]"));
if (op===1){
    let nombre = prompt("Ingresa tu nombre");
    let dia = parseInt(prompt("Ingrese dia [1 -31]"));
    let mes = parseInt(prompt("Ingrese Mes [1-12]"));
    let hora = parseInt(prompt("Ingrese hora [0-23]"));
    if(validarDatos(dia,mes,hora)){
        alert(` ${nombre} su turno ha sido registrado con exito el dia ${dia}/${mes} a las ${hora} hs . \n\ Gracias por elegirnos`);
    }
}

else {
    if(op===2){
        alert("Bienvenido al carrito de compras");
        let total = comprarProductos();
        let int = 1.1 ;
        alert(`Usted ha sumado un total de : ${total} ARS`);
        c=prompt(`Si desea pagar en cuotas pulse C , de lo contrario pulse cualquier tecla para salir `);
        if (c == "c" || c == "C"){
            pagocuotas(total,int);
        }
    }
}
