//Creo la clase producto para que el cliente ingrese un producto ,se cree una instancia de objeto y se agregue a la lista carrito 
class Producto {
    constructor(nombre,precio){
        this.nombre= nombre.toUpperCase();
        this.precio= parseFloat(precio);
    }
}
const carrito= [];
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
//La funcion comprarProductos() deja al cliente sumar productos mediante un push 
function comprarProductos(){
    let comprando;
    while (comprando != "s") {
        comprando = prompt("Ingresa el nombre del producto o 's' para salir");
        if (comprando != "s") {
            let precio = parseFloat(prompt("Ingrese el precio del producto"));
            if (!isNaN(precio)) {
                nuevoProducto= new Producto(comprando,precio);
                carrito.push(nuevoProducto);
                alert(`El precio de ${comprando} es de : ${precio} ARS`);
            }
        }
    }
    console.log(carrito);
}
//La funcion total(carrito) nos permite entrar al precio de cada objeto y guardarlo en un contador para luego retornarlo  
function total(carrito){
    let cont = 0;
    for (const producto of carrito){
        cont = (cont + producto.precio);
    }
    return cont;
}

//La funcion pagocuotas permite al usuario elegir un plan de pago en cuotas
function pagocuotas(precioTotal){
    let int = 1.15 ;
    let cuotas = parseInt(prompt("ingrese la cantidad de cuotas [1-12]"));
    if (!isNaN(cuotas) && cuotas >= 1 && cuotas <= 12) {
        let precioCuota = parseInt((precioTotal / cuotas) * int) ;
        let montoTotal = precioCuota * cuotas ;
        alert(`El plan de pago es de ${cuotas} cuotas de : ${precioCuota} ARS finales por mes \n\ Monto total : ${montoTotal} ARS. \n\ Tasa de interes : ${Math.round((int-1)*100)} %`);
    } else {
        alert("Las cuotas ingresadas son invalidas");
        pagocuotas(precioTotal);
    }
}
// La funcion mostrarCarrito mediante un metodo forEach recorre el array y genera un console.log de sus objetos 
function mostrarCarrito(carrito){
console.log(`======* ORDEN DE COMPRA *======`);
carrito.forEach(element => {
console.log("=================");
console.log("Producto: " + element.nombre);
console.log("Precio: " + element.precio + " ARS");

});
console.log("=================");
}
// La funcion pagocash utiliza map para generar un nuevo array que tenga el precio de los productos reducidos en un 15% (descuento en efectivo) y los muestra mediante funcion mostrarCarrito(preciosEfectivo)
function pagocash(carrito){
const preciosEfectivo = carrito.map((elemento) => {
return{
    nombre:elemento.nombre,
    precio:elemento.precio * 0.85
}
})
mostrarCarrito(preciosEfectivo);
console.log("El descuento en efectivo , ya ha sido aplicado");
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
        comprarProductos();
        mostrarCarrito(carrito);
        let precioTotal= total(carrito);
        console.log(precioTotal);
        let pago = parseInt(prompt(`Si desea realizar el pago con TARJETA pulse "1"  \n\ si desea realizar el pago en EFECTIVO pulse "2" (Contamos con un 15% de descuento en efectivo) `));
        switch(pago){
            case 1: pagocuotas(precioTotal);
            break;
            case 2: pagocash(carrito);
            break;
            default: pago = parseInt(prompt(`Si desea realizar el pago con TARJETA pulse "1"  \n\ si desea realizar el pago en EFECTIVO pulse "2" (Contamos con un 15% de descuento en efectivo) `));
        }
    }
}