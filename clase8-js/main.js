const parrafo=document.getElementById('text');
const h1=document.getElementsByClassName('titulo');
const h2=document.getElementsByTagName('h2');
const divs=document.getElementsByTagName('div')

for (const div of divs) {
    console.log(div);
    
}

for (const div of divs) {
    console.log(div.innerText);
    
}

for (const h1s of h1) {
    console.log(h1s);
}

for (const h1s of h1) {
    console.log(h1s.innerHTML);
}

console.log(parrafo)
console.log(parrafo.innerHTML)
console.log(h1)
console.log(h2)
console.log(divs)

h1[0].innerText='Hola catrasca'
h2[1].innerHTML='<h4>Titulo 4</h4>'

divs[0].className='rojo'


let parrafo1=document.createElement('p')

parrafo1.innerHTML='<h4>Este es un garegado con document.createelement</h4>'

document.body.append(parrafo1)
divs[1].append(parrafo1)


let padre = document.getElementById('personas');
let personas = ["homero1", "homero2", "homero3", "homero4",]

for (const persona of personas) {

    let li = document.createElement("li");
    li.innerHTML = persona;
    padre.append(li)
    
}

const producto={id:1, nombre:"cemento", precio: 1200}
let concatenado="id :"+ producto.id + "nombre :"+ producto.nombre + "precio: " + producto.precio

console.log(concatenado);

//plantillas literales
let plantillas=`<h3> ID Producto:</h3> ${producto.id}
<p>Nombre: ${producto.nombre}</p>
<p>Precio: ${producto.precio}</p>`;

console.log(plantillas)

divs[1].innerHTML = plantillas