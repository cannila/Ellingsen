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