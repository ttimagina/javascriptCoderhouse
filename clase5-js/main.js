/// declarar un objeto de manera literal

let persona={
    nombre:"homero",
    edad:39,
    calle:"av. siempreviva 742"

}

console.log(persona);

/// objeto - propiedades
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.calle);
/// objeto - propiedades 
console.log(persona["edad"]);


// cambiar el dato del la propiedad
persona.nombre = "bart"
persona["edad"]= 15

console.log(persona.nombre);
console.log(persona.edad);


// agregar propiedad al objeto
persona.cabello="azul"

//funcion constructora desde un molde
function Persona(nombre, edad, tel, dni){
    //this para asociar
    this.nombre = nombre;
    this.edad = edad;
    this.tel = tel;
    this.dni = dni;

    ///metodo - es una funcion
    this.saludar = function(){console.log("hola me llamo " + this.nombre);}
}

//palabra reservada - new -
const persona2= new Persona("Martin", 39, 3794886995, 29980806)

console.log(persona2);


/////////ejemplos
/* function ingresarDatos (mensaje){
    return prompt(mensaje)
}

let nombresss = ingresarDatos("Ingresa un nombre")
let edadsss = ingresarDatos("Ingresa una edad")
let telefonosss = ingresarDatos("Ingresa un telefono")
let dnisss = ingresarDatos("Ingresa un dni")

const persona3= new Persona(nombresss, edadsss, telefonosss, dnisss)

console.log(persona3);

persona2.saludar()
 */


console.log("edad" in persona2)

for (const propiedad in persona2) {
   console.log(persona2[propiedad]);
}

for (const propiedad in persona2) {
    console.log(propiedad +": " +persona2[propiedad]);
 }