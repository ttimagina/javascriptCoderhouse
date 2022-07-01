//if  tradicional

let temperatura = 20;

/* if (temperatura < 13){
    alert ("que frio");
}else{
    alert("que calor");
} */

//operador ternario -- condicon ? respiesta1 : respuesta2   --- simplicar lineas de if y else

temperatura < 13 ? alert ("que frio") :  alert("que calor");

//let permiso;
const user ={
    nombre:'juanito', edad: 19
}


/* if (user.edad >= 18) {
    permiso = true
} else{
    permiso = false
}

if(permiso){
    alert('bienvideo'+user.nombre)
}else{
    alert('acceso denegado')
}
 */

let permiso = user.edad >= 18 ? true : false;

permiso ? alert('bienvideo'+user.nombre) : alert('acceso denegado');

//// operardor AND
const carrito = []

/* if (carrito.length === 0) {
    console.log('el carrito esta vacio')
} */

carrito.length === 0 && console.log('el carrtio esta vacio')


let registro = user.edad >= 18 && new Date();
console.log(registro)

/// or
let user1 = null;

console.log(user.nombre || 'el nombre no exite');
console.log(user1?.nombre || 'el nombre no exite');// para dejar correr con ese error


/// destructuring
/* let nombre = user.nombre;

console.log(nombre);
console.log(user.nombre); */

let {nombre, edad }= user

console.log(nombre);
console.log(edad);


const nombress = ['juan','jose','chicho', 'coco'] 

/* const [obj1, , obj3] = nombress;

console.log(obj1);
console.log(obj3);
 */

let nombrenuevo = nombress[0]

console.log(nombrenuevo)

//spread operator

const nums = [321, 32, 545, 22, 5, 8, 9 ];
console.log(...nombress);
console.log(Math.max(...nums));

const otroejemplo =['pablo', 'perdo', 'umma', 'kito'];

const otroejemplosunidos = [...nombress, ...otroejemplo];
console.log(otroejemplosunidos);

const otroejemplounidosObjeto ={...otroejemplosunidos};
console.log(otroejemplounidosObjeto);


let userCopia = {
    ...user,
    telefono: 37894886995 //se puede agregar elementos alementos y cambiarlos del original en un nuevo objeto
};

console.log(userCopia);


function sumarTotales(...precios){
    return precios.reduce((acc, n) => acc + n, 0);
}

let total1 = sumarTotales(4);
let total2 = sumarTotales(4,5,6,7,8,9,25);

console.log(total1)
console.log(total2)

console.log(sumarTotales(4,5,6,7,8,9,25));