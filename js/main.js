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

let cantidadInicial = [];
let colorContadorIniciales = {};
let colorTotalesIniciales = {};

let categoriaColorAgregado;
let cantidadColorAgregado;

    do {
    categoriaColorAgregado = prompt("Ingresá el color que querés registrar, en letras minúsculas y sin tildes. Para terminar, escribí \"SALIR\".");

    if (categoriaColorAgregado.toUpperCase() !== "SALIR") {
        cantidadColorAgregado = parseInt(prompt("Ingresá la cantidad en stock que querés registrar, sin comas ni puntos."));
    
        let colorAgregado = {
            color: categoriaColorAgregado,
            cantidad: cantidadColorAgregado
        }
        cantidadInicial.push(colorAgregado);

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
    return cantidadInicial.reduce((acc, color) => acc + color.cantidad, 0);
}

console.log("Cantidad inicial en stock: ", cantidadInicial);
console.log("Stock total disponible: ", calcularTotalCantidadesEnStock ());
console.log("Cantidad de veces que se ingreso cada color: ", colorContadorIniciales);
console.log("Cantidad por color: ", colorTotalesIniciales);

