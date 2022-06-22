document.title = 'Clase 10 - 21 de Junio';
const p = document.querySelector('#text-principal')

localStorage.setItem('nombre', 'Julian');
localStorage.setItem('Apellido', 'SanMartin');
localStorage.setItem('stock1', '4564654');
localStorage.setItem('stock2', '856485');


let nombre = localStorage.getItem('nombre')
p.innerHTML = nombre


for(i=0; i < localStorage.length; i++){
    let clave = localStorage.key(i);

    console.log("clave: "+ clave);
    console.log("valor: " + localStorage.getItem(clave));
}

localStorage.removeItem('stock2');
//localStorage.clear();

//objeto en js
let persona  = {nombre: 'manuel', apellido: 'Belgrano', anios: 85}

let personJason =JSON.stringify(persona)

localStorage.setItem('persona1', personJason);

let outPersonaJason = JSON.parse(personJason);

localStorage.setItem('persona2', outPersonaJason);


const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
}

guardarLocal("listaPorductos", JSON.stringify(productos));


let lista = JSON.parse(localStorage.getItem("listaProducto"));

