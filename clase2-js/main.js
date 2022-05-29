
// condicional IF
// si - condicion
if (true){
    // bloque de codigo a ejecutar
    console.log("vas a ver este mensaje");
}

if (false){
    console.log("no vas a ver este mensaje");
}

let unNumero = 12;
// = asignacion de valores
// == comparacion - va a devolver true o false
// === comparacion mas estricta - va a devolver true o false

if (unNumero == 12){
    console.log("vas a ver este mensaje");
}

let esMenor = unNumero == 10;
console.log(esMenor);

let esIgual = unNumero == 12;
console.log(esIgual);


let esIgualstring = "12" == 12;
// javascript no es estricto -- compara valores
console.log(esIgualstring);

let esIgualstring2 = "12" === 12;
//  compara valores y datos
console.log(esIgualstring2);


if (unNumero === 10){
    console.log("Los numeros son iguales");
} else {
    //sino significa else
    console.log("los numeros no son iguales");
}

/* let nombre = prompt("ingresa tu nombre");
if (nombre == ""){
    alert ("Hola desconocido");
} else {
    alert("hola "+ nombre);
} */

/* let precioProducto = 50

if (precioProducto < 20){
    console.log("El precio del producto es menor a 20");
} else if (precioProducto < 40){
    console.log("El precio del producto es menor a 40");
} else if (precioProducto < 70){
    console.log("El precio del producto es menor a 70");
} else {
    console.log("El precio del producto es maryo a 100");
} */



//and &
/*  let nombre = prompt("ingresa tu nombres");
 let apellido = prompt("ingresa tu apellido");

 if(nombre != "" && apellido != ""){
     console.log("hola usuario "+ nombre + apellido );
 }else{
     console.log("Campo Vacio");
} */


let nombre = prompt("ingresa tu nombres");
let apellido = prompt("ingresa tu apellido");


//operador logico or
if(nombre != "" || apellido != ""){
    console.log("hola usuario "+ nombre + apellido );
}else{
    console.log("Campo Vacio");
}
