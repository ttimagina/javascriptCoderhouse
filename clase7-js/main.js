//let numeros =[1,2,3,4,5,6,7,8]

/* function porCadaUno (arr, fn){
    for (const elemento of arr){
        fn(elemento)
    }
} */
/*
porCadaUno(numeros, alert)
 */

/* let duplicado = []

porCadaUno (numeros, (el)=>{
    duplicado.push(el * 2);
})
console.log(numeros);
console.log(duplicado); */


let numeros =[1,2,3,4,50,6,79,8]

numeros.forEach((num)=>{
    console.log(num);
    console.log(num * 2);
})


const curso = [
    {id: 2, nombre: 'javascript', precio: 15000},
    {id: 5, nombre: 'ReactJs', precio: 22000},
    {id: 46, nombre: 'wordpress', precio: 22000},
]
//find
const resultado1 = curso.find((el) => el.nombre === 'ReactJs')
const resultado2 = curso.find((el) => el.nombre === 'Web')
//filter
const resultado3 = curso.filter((el)=> el.precio === 22000)
//some
const resultado4 = curso.some ((el) => el.nombre === "javascript")
//map 
const resultado5 = curso.map((el) => el.id)
const resultado6 = curso.map((el) =>{
    return {
        id: el.id,
        nombre: el.nombre,
        precio: el.precio * 2
    }
})

//math
console.log(Math.max(56,565,88,79879,455))
console.log(Math.min(56,565,88,79879,455))
console.log(Math.ceil(79879.5))
console.log(Math.floor(565.23))
console.log(Math.round(5653.58))
console.log(Math.random())

//date
console.log(new Date(2022, 1, 2));

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);