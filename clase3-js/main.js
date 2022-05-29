//for i++ = i=i+1
/* for(let i = 0; i <= 10; i++){
    console.log(i);
}
 */

/* let ingreso = parseInt(prompt("inresa un numero"))

for(let i = 0; i <= 10; i=i+1){
    let resultado = ingreso * i

    console.log(ingreso + "x" + i + "=" + resultado);
} */


/* let productos = parseInt(prompt("cantidad de productos a comprar"));

let precios = 0; 

for(let i = 1; i <= productos; i++){
    let precioingresados = parseInt(prompt("ingresar el precio" + i));
    precios = precios + precioingresados;
    //precio += precioingresados
} console.log(precios);
 */

/* /// ejemplo de un tutor
let cantidadProducto = parseInt(prompt('ingrese la cantidad de alfajores quiere comprar'))
let stuck = 5

for (let i = 1; i <= cantidadProducto; i++) {
    if (i === stuck) {
        console.log('no hay mas stock')
        break
    }
    console.log('se agrego ' + i )
}
 */


/* for (let i = 1; i <= 15; i++){
    if(i==13){
        break;
    }
    console.log(i);   
} */

/* let stock = 10;

for (let i = 1; i <= 15; i++){
    if(i==stock){
        continue;
    }
    console.log(i);   
} */

//while mientras se cumpla true

/* let condicion = true;

while (condicion){
    // ejecutamos el codigo  - mientras sea verdadero
    console.log("al inifito y mas alla")



    //condicion de salida
} */

/* let ingreso = prompt("Ingresa un producto  para Salir ingresar ESC");

while (ingreso != "ESC"){
    console.log("El producto ingresado el "+ingreso);
    // CONDICION DE SALIDA
    i ngreso = prompt("Ingresa un producto  para Salir ingresar ESC");
}*/


// DO WHILE

/* do{
    //codigo a ejectuar 

    //condicion de salida
} while (condicion) */


let ingreso = prompt("ingresa un producto o SALIR")
do{
    //codigo a ejectuar
    console.log("el producto ingresado es "+ingreso); 

    //condicion de salida
    ingreso = prompt("Ingresa un producto  para Salir ingresar SALIR");
} while (ingreso != "SALIR")