const listapost= document.querySelector('#post');
const listapost2= document.querySelector('#post2');
const chucknorris= document.querySelector('#chuck');

fetch ('https://jsonplaceholder.typicode.com/posts')
 .then((response) => response.json())
 .then((datos) =>{

 console.log(datos)
/*  console.log(datos[0])
 console.log(datos[0]).body
 console.log(datos[0]).title */

 datos.forEach(datos => {
    const li = document.createElement('li')
    li.innerHTML=`
    <h3>${datos.title.toUpperCase()}</h3>
    <hr>
    <p>${datos.body}</p>


    `
    listapost.append(li)
 });

});


/// nueva prueba

/* fetch ('https://jsonplaceholder.typicode.com/photos/1')
 .then((response) => response.json())
 .then((fotos) =>{

 console.log(fotos[1])


  fotos.forEach(fotos => {
    const li = document.createElement('li')
    li.innerHTML=`
    <h3>${fotos.title}</h3>
    <hr>
    <p>${fotos.url}</p>


    `
    listapost2.append(li)
 }); 

}); */

/// armado por martin no funciona
const url = './datos.json';

fetch (url)
 .then((response) => response.json())
 .then((datos2) =>{

 console.log(datos2)
/*  console.log(datos[0])
 console.log(datos[0]).body
 console.log(datos[0]).title*/
 datos2.forEach(datos2 => {
   const li = document.createElement('li')
   li.innerHTML=`
   <h3>${datos2.nombre}</h3>
   <hr>
   <p>${datos2.detalle}</p>

 `
 listapost2.append(li)
}); 

});


/// armado para aplicar api chuck

/* fetch ('https://api.chucknorris.io/jokes/random')
 .then((response) => response.json())
 .then((datos3) =>{

 console.log(datos3);

 datos3.forEach(datos3 => {
   const div = document.createElement('li')
   div.innerHTML=`
   <hr>
   <img src="${datos3.icon_url}" alt="chuck icon">
   <hr>


 `
 chucknorris.append(li);
}); 

}); */




  


//async await

//asyn function pedriproductos(){}
