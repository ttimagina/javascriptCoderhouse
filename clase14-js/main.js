document.title = 'Clase 14 - comision 3040';

const titulo1 = document.querySelector('.titulo span'),
      titulo2 = document.querySelector('h2');

//titulo1.innerHTML = 'Clase 14';
//titulo2.innerHTML = 'Asincronia';

const boton = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

// setTimeout
/* console.log('Inicio del proceso');

setTimeout(()=>{
    console.log('asincronia')
}, 3000);

console.log('fin del proces');

boton.addEventListener('click',()=>{
    console.log('click')
    popup.classList.add('popup-active')

    setTimeout(()=>{
        popup.classList.remove('popup-active')
    }, 2000)
})

 */

for (const letra of 'hola'){
    setTimeout(()=>{
    console.log(letra);
}, 2500);
}


for (const letra of 'tarola'){
    setTimeout(()=>{
        console.log(letra);
    }, 1500);
}



function multiply (x, y){
    return x * y;
}

function printSquare (x){
    let s = multiply(x,x)
    console.log(s);
}

printSquare(10);

/* const fecha = new date();
setInterval(() => {
    console.log(fecha.getSecond());
}, 1000);
 */

//promesas

let eventoFuturo =  (respuesta) => {
    return new Promise((resolve, reject)=>{
/*         if (respuesta == true) {
            resolve ('resuelto');
        }else{
            reject ('No resuelto');
        } */

    setTimeout(()=>{ 
        respuesta ? resolve('Resuelto') : reject('no resuelto');
    }, 3500)    
});
};

//console.log(eventoFuturo(true));

/* eventoFuturo(true).then((response)=>{
    console.log(response);
});

eventoFuturo(false).catch((error)=>{
    console.log(error);
}); */


eventoFuturo(true).then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(console.log('Me ejecuto igual'));