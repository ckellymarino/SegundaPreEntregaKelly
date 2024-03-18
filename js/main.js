let inicio = alert("Buen día, bienvenido al control de stock semanal de Pinturaría Aura");

let nomrbeUsuario = prompt("Ingrese por favor su nombre de usuario");
console.log (nomrbeUsuario);
let fechaRegistro = prompt("Ingrese por favor la fecha de registro del Stock en formato DD/MM/AA");

let confirmacionFecha = prompt("La fecha ingresada es " + fechaRegistro + ". \n Si es correcta, coloquela nuevamente \n Si no es correcta, vuelva a ingresar la fecha. ");

if (confirmacionFecha !== fechaRegistro) {
        alert("La nueva fecha ingresada es " + confirmacionFecha)
    } else alert ("La fecha ingresada es " + fechaRegistro);

    if (confirmacionFecha !== fechaRegistro) {
        console.log(confirmacionFecha)
    } else console.log (fechaRegistro);

alert("Comencemos con el ingreso de stock inicial")

let coloresInicial = [];
let colorContadorIniciales = {};
let colorTotalesIniciales = {};

let categoriaColorAgregado;
let cantidadColorAgregado;

    do {
    categoriaColorAgregado = (prompt("Ingresá el color que querés registrar, en letras minúsculas y sin tildes. Para terminar, escribí \"SALIR\"."));

    if (categoriaColorAgregado.toUpperCase() !== "SALIR") {
        cantidadColorAgregado = parseInt(prompt("Ingresá la cantidad en stock que querés registrar, sin comas ni puntos."));
    
        let colorAgregado = {
            color: categoriaColorAgregado,
            cantidad: cantidadColorAgregado
        }
        coloresInicial.push(colorAgregado);

        if (colorContadorIniciales[categoriaColorAgregado]) {
            colorTotalesIniciales[categoriaColorAgregado] += cantidadColorAgregado;
        } else {
            colorTotalesIniciales[categoriaColorAgregado] = cantidadColorAgregado;
        }

        if (colorContadorIniciales[categoriaColorAgregado]) {
            colorContadorIniciales[categoriaColorAgregado]++;
        } else {
            colorContadorIniciales[categoriaColorAgregado] = 1;
        }
    }




} while(categoriaColorAgregado.toUpperCase() !== "SALIR");

function calcularTotalCantidadesEnStock() {
    return coloresInicial.reduce((acc, color) => acc + color.cantidad, 0);
}

console.log("Cantidad inicial en stock: ", coloresInicial);
console.log("Stock total disponible: ", calcularTotalCantidadesEnStock ());
console.log("Cantidad de veces que se ingreso cada color: ", colorContadorIniciales);
console.log("Cantidad por color: ", colorTotalesIniciales);

alert("Continuemos con las cantidades de color vendidas en la semana")

let cantidadVendida = [];
let colorContadorVendido = {};
let colorTotalesVendido = {};


let categoriaColorVendido;
let cantidadColorVendido;

    do {
    categoriaColorVendido = prompt("Ingresá el color que querés registrar, en letras minúsculas y sin tildes. Para terminar, escribí \"SALIR\".");

    if (categoriaColorVendido.toUpperCase() !== "SALIR") {
        cantidadColorVendido = parseInt(prompt("Ingresá la cantidad vendida en la semana que querés registrar, sin comas ni puntos."));
    
        let colorVendido = {
            color: categoriaColorVendido,
            cantidad: cantidadColorVendido
        }
        cantidadVendida.push(colorVendido);

        if (colorContadorVendido[categoriaColorVendido]) {
            colorTotalesVendido[categoriaColorVendido] += cantidadColorVendido;
        } else {
            colorTotalesVendido[categoriaColorVendido] = cantidadColorVendido;
        }

        if (colorContadorVendido[categoriaColorVendido]) {
            colorContadorVendido[categoriaColorVendido]++;
        } else {
            colorContadorVendido[categoriaColorVendido] = 1;
        }
    }

} while(categoriaColorVendido.toUpperCase() !== "SALIR");

function calcularCantidadesVendida() {
    return cantidadVendida.reduce((acc, color) => acc + color.cantidad, 0);
}

console.log("Cantidad vendida: ", cantidadVendida);
console.log("Total vendida: ", calcularCantidadesVendida ());
console.log("Cantidad de veces que se vendió cada color: ", colorContadorVendido);
console.log("Cantidad vendida de cada color: ", colorTotalesVendido);

//No me salio la parte de resta para obtener inventario final...

// alert("Veamos cuanto nos queda esta semana... ")



// function stockDeLaSemana() {
//     return coloresInicial,cantidadVendida.reduce((acc, color) => (acc - color.cantidad), 0);
// }

// console.log("Cantidad final de cada color esta semana: ", stockDeLaSemana);


// const coloresDisponibles = colores.map((color) => color.cantidad);
// console.log(coloresDisponibles);

// const stockDeLaSemana = colores.map((color) => {
//     return {
//         color: coloresInicial.color - cantidadVendida.color,
//         cantidadFinales: coloresInicial.cantidad - cantidadVendida.cantidad
//     }
// });

// console.log(color);
// console.log(cantidadFinales);