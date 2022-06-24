document.title = "clase 9 / comision 30400";


const contador = document.querySelector('#contador'),
btnMas = document.querySelector('#aumentar'),
btnMenos = document.querySelector('#restar'),
ingreso = document.querySelector('#ingreso'),
btnGuardar = document.querySelector('#btnGuardar'),
mensaje = document.querySelector('#mensaje'),
enviar = document.querySelector('#enviar');

//query...

//const parrafo = document.querySelector(".titulo")
//const parrafo = document.querySelectorAll(".titulo")
//const parrafo = document.querySelector("#titulo")


//Eventos
let cont = 0
function cambio(num){
    cont  = cont + num;
    contador.innerHTML = cont;
}
//opcion 1
btnMas.addEventListener("click", () => {
    cambio(1);
});
//opcion 2
btnMenos.onclick = () => {
    cambio(-1);
};

btnGuardar.addEventListener( "click", () => {
        mensaje.innerHTML = ingreso.value;
});


let miformulario = document.getElementById('formulario');
miformulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log(' Formulario Enviado');
}


/* btnMenos.onclick = () =>{
    alert("hiciste click en el menos");
}; */