function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
// este es un metodo
    this.saludar =()=> {
        return "hola soy" + this.nombre;
    };
}

//objeto
const persona1 = new Persona("homero", 39, "avenidad viva la pepa");

//clase constructora 
class Persona3{
    //metodo constructor
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    //metodo por fuera del constructor
    saludarrr(){
        return "hola soy" + this.nombre;
    }
}


///arrays////////////////////////////////////////

const numero = [0,1,2,3,4,5,6,7,8];
const palabras = ["martin", "facundo", "jose", "lucas", ""];
//metodo push - agregar elementos al final (propio de los arrays)
palabras.push("lucrecia", "jose Maria" );
numero.push(55,56,89);
//metodo pop - qita el ultimo elementos (propio de los arrays)
numero.pop();
//metodo shift - qita el primer elementos (propio de los arrays)
numero.shift();
//metodo splice - qita elementos de la array en cualquier lugar(propio de los arrays)
//el primera para parametro es donde empieza y el segundo parametro cuando elementos saca
palabras.splice(1, 2);

///metodo slice copia un pedazo del array
const nombres = palabras.slice(1,2)
console.log(nombres);

//indexOf
console.log(numero.indexOf(55));

console.log(numero);
console.log( numero [0]);
console.log(palabras);
console.log(palabras[1]);

console.log("tamano del array - numero - "+numero.length);

for (let index = 0; index < 5; index++){
    console.log(numero[index])
}


for (let index = 0; index < numero.length; index++){
    console.log(numero[index])

}

///metodo contact
const unirarrays = palabras.concat(palabras);
console.log(unirarrays);
