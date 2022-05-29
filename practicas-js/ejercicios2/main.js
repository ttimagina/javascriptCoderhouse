/* // ejercicio 1
let nombre1 = prompt("introduce tu nombre");
let nombrecargado = "Martin";

if (nombre1 == nombrecargado){
    console.log("Fui yo");
} else {
    console.log("Yo no fui");
}


// ejercicio 2

let letra = prompt("elige una letra");

if (letra == "y" || letra == "Y"){
    alert ("Correcto");
}else{
    alert ("No es Correcto");
} */


//ejercicio 3
/* let eleccion = parseInt(prompt("elige de 1 a 4"));

if (eleccion === 1){
    console.log("Elegiste Homero");
}else if (eleccion === 2){
    console.log("Elegiste Marge");
}else if (eleccion === 3){
    console.log("Elegiste Bart");
}else if (eleccion === 4){
    console.log("Elegiste Lisa");
} else {
    console.log("tu eleccion no es validad");
} 
 */
//ejercicio 4
let valor = parseInt(prompt("Intruduce tu presupuesto"));

if (valor <= 1000 && valor >= 0 ){
    console.log("Presupuesto bajo");
} else if (valor <= 3000 && valor >=1001){
    console.log("Presupuesto medio");
} else if (valor >= 3001){
    console.log("Presupuesto alto")
} else {
    console.log("tu eleccion no es validad");
} 


//ejercicio 5

let ingresoProd1 = prompt("ingresa un producto");
let ingresoProd2 = prompt("ingresa un producto");
let ingresoProd3 = prompt("ingresa un producto");
let ingresoProd4 = prompt("ingresa un producto");

let productoscargados =  ingresoProd1 +  ingresoProd2 + ingresoProd3 + ingresoProd4;

if ((ingresoProd1 != "") || (ingresoProd2 != "") || (ingresoProd3 != "") || (ingresoProd4 != "")){
    console.log("te falto cargar un producto");
} else {
    console.log(productoscargados);
}
