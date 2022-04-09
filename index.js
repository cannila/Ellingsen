alert("Gracias por elegirnos, recuerda que para reservar una cabaña debes tener al menos 16 años");

let edadIngresada = prompt ("Ingrese su edad");
console.log("Ingrese su edad");
//por que cuando pongo igual o mayor a 16 me tira error??
let edad = 16
if (edad > 16) {
    alert("Podes reservar cabañas");
    console.log("Cumple con la edad para reservar cabañas.");    
}
else if (edadIngresada <16) {
    alert("La edad ingresada" + " " + edadIngresada + " " + "no cumple con la mínima para reservar");
}
{
    console.log("No cumple con la edad mínima para reservar");
}




/* ejemplo para describir los tipos de cabañas con funcion
//cabaña para dos personas
let cabana2 = {
    tipoDeCabana: "Cabaña simple", capacidadMaxima: "dos personas", precio: "1000 pesos mas iva"
}
console.log(cabana2.tipoDeCabana);
console.log(cabana2.capacidadMaxima);
console.log(cabana2.precio);

//cabaña para tres personas
let cabana3 = {
    tipoDeCabana: "Cabaña para tres personas", capacidadMaxima: "tres personas", precio: "1500 pesos mas iva"
}
console.log(cabana3.tipoDeCabana);
console.log(cabana3.capacidadMaxima);
console.log(cabana3.precio);


//cabaña familiar
let cabana6 = {
    tipoDeCabana: "Cabaña familiar", capacidadMaxima: "4 adultos y 4 niños", precio: "3000 pesos mas iva"
}
console.log(cabana6.tipoDeCabana);
console.log(cabana6.capacidadMaxima);
console.log(cabana6.precio);
*/




// FUNCIONES EN CABAÑAS

function Cabana(tipoDeCabana, capacidadMaxima, precio) {
    this.tipoDeCabana = tipoDeCabana;
    this.capacidadMaxima = capacidadMaxima;
    this.precio = precio;
}
const cabana2 = new Cabana("Cabaña simple", "dos personas", "1000 pesos mas iva");
const cabana3 = new Cabana("Cabaña triple", "tres personas", "1500 pesos mas iva");
const cabana6 = new Cabana("Cabaña familiar", "cuatro adultos y cuatro niños", "000 pesos mas iva");

console.log(cabana2.tipoDeCabana);
console.log(cabana2.capacidadMaxima);
console.log(cabana2.precio);

console.log(cabana3.tipoDeCabana);
console.log(cabana3.capacidadMaxima);
console.log(cabana3.precio);

console.log(cabana6.tipoDeCabana);
console.log(cabana6.capacidadMaxima);
console.log(cabana6.precio);


//  P R I M E R A    E N T R E G A   D E L   P R O Y E C T O  F I N A L 

class Cabana {
    constructor(nombre, precio, capacidadMaxima) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.reservada = false;
        this.capacidadMaxima = "";

    }
    sumaIva () {
        this.precio = this.precio * 1,21;
    }
}

//agrego arrays- las cabanas- ESTA BIEN ASI?

const cabana = [];
cabana.push (new cabana ("Cabaña para dos personas", 1000, 2));
cabana.push (new cabana ("Cabaña para tres personas", 1500, 3));
cabana.push (new cabana ("Cabaña familiar", 3000, 6));
cabana.push (new cabana ("Cabaña para solo travellers", 700, 8));

//for ... of para modificar todos los precios asi se muestran con el iva

for (const cabana of cabanas) {
    cabana.sumaIva (); //que pongo en los ()?
}




const cabanas = [
    {nombre: "cabanaDos", precio: 1000, id: 1},
    {nombre: "cabanaTres", precio: 1500, id: 2},
    {nombre: "cabanaFamilia", precio:3000, id: 3},
]
cabanas.push({nombre: "cabanaSolo", precio: 700, id: 4})

console.log(cabanas);

// A C T I V I D A D E S 

const actividades = [
    {nombre: "actividadPaseo", precio: 1000, id: 1, duracion: "75 minutos", exterior: true},
    {nombre: "actividadKayak", precio: 1500, id: 2, duracion: "90 minutos", exterior: true},
    {nombre: "actividadLancha", precio: 3000, id: 3, duracion: "2 horas", exterior: true},
    {nombre: "actividadTennis", precio: 2500, id: 4, duracion: "60 minutos", exterior: true},
    {nombre: "actividadCocinaVeggie", precio: 2500, id: 5, duracion: "2 horas", exterior: false},
]

cabanas.push({nombre: "actividadCrochet", precio: 2500, id: 6, duracion: "2 horas", exterior: false})
cabanas.push({nombre: "actividadCeramica", precio: 3000, id: 7, duracion: "2 horas", exterior: false})

console.log(actividades);



for (const actividadTennis of actividades) {
    console.log(actividadTennis.duracion);
    console.log(actividadTennis.exterior);
}




/*
class Cabanas {
    constructor(id, )
}

let baseDatos = [];

function crearReserva() {
    let reserva = new Reserva(
        prompt("Ingrese las fechas de su reserva"),
        prompt("Ingrese el tipo de cabaña"),
        prompt("Ingrese la cantidad de  huéspedes"),
        prompt("Ingrese su pedido especial aquí:")
    );
    baseDatos.push(reserva);
}
*/



function modificarReserva(params) {
    if (reserva.length == 0) {
        alert("No hay ninguna reserva hecha");
    } else {
        let modificar = prompt("Ingrese el código de la reserva que quiere modificar");
        for (const producto of baseDatos) {
            if (reserva.id === parseInt (modificar)) {
                reserva.id = parseInt(prompt("Ingrese el nuevo número de reserva"));
                reserva

                
            }
            
        }

    }
}