//declaracion
let nombre;
let apellido;
let edad;
let anio;

// let Edad;
// let año; no me toma bien la Ñ

//asignacion
nombre = "Jose";
apellido = "Perez";

edad = 34;
anio = 1983;
console.log(anio)
 anio = "Mil novecientos ochenta y dos" 
console.log(anio)
//optar para usar comillas doble o simple en todo el proyecto

//inicializar (declarar y asignar)
let mascota = "firulais"

//const (el valor no va a variar) la constante siempre va con su valor, si inicializa su const 

const PI=3.141516
const IVA=21
const DNI=29980806



let numero1 = 45
let numero2 = 98

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multi = numero1 * PI;

console.log(suma)
console.log(resta)
console.log(multi)

//mensajes de salida por el alert
//alert("hola")
//alert(multi)

/*let entrada = prompt("deja tu nombre")
let mensaje = "hola "
console.log(mensaje + entrada) //concatenacion*/

/*let n1 = prompt ("ingresa un numero") // siempre es un string
let n2 = prompt ("ingresa un numero")
let resultado = n1 + n2;

console.log(resultado);*/

// parseo o conversion 

let n1 = parseFloat (prompt ("ingresa un numero")) 
let n2 = parseInt (prompt ("ingresa otro numero"))
let resultado = n1 + n2;
const descuento = 0.25

console.log(resultado * descuento);