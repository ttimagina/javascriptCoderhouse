let carritoServicios=[]

document.title = "DESAFÍO COMPLEMENTARIO - Dom";

const listDisenioMostrar = document.getElementById('listadoDeServicios');
const mostrarServiciosAgregados = document.getElementById('servicioContenedor');

let nombreusuario = prompt('Escribi tu Nombre');

const saludos = document.getElementById('nombreusuario');
saludos.innerHTML = "Hola "+ nombreusuario;

mostrarServicios(listadoDeServicios)

function mostrarServicios(array){

    for (const el of array) {

        listDisenioMostrar.innerHTML = ""
        
        let div = document.createElement('div')
        div.className = 'col-md-3 d-flex flex-column my-3 mx-3'
        div.innerHTML = `<div>
        <img src="${el.img}" class="card-img-top img-fluid img_borde_redondo1" alt="imagen">
        <div class="card-text mb-auto">    
          <h4 class="titulos_notas--black">${el.nombre}</h4>
          <p class="card-text txt_justificado">${el.detalle}</p>
        </div>
        <div class="bg-branding p-1 font_oswald">
            <h6>Precio: $ ${el.precio}</h6>
            <button type="button" id="boton${el.id}" class="btn btn-success">AGREGAR</button>
        </div> 
        </div> `

        listDisenioMostrar.appendChild(div)

        let btnAgregar = document.getElementById(`boton${el.id}`)
        
        btnAgregar.addEventListener('click',()=>{
            agregarPresupuesto(el.id);
        })
    }
}

 function agregarPresupuesto(id) {
    let servicioExiste = carritoServicios.find(ele => ele.id === id)
    ///console.log(servicioAgregar);
    if(servicioExiste){
        servicioExiste.cantidad = servicioExiste.cantidad + 1
        document.getElementById(`Cantidad${servicioExiste.id}`).innerHTML = `<p id="cantidad${servicioExiste.id}">cantidad: ${servicioExiste.cantidad}</p>`
        actualizarCarrito()
    }else{
        let servicioAgregar = listadoDeServicios.find(ele => ele.id === id)
        servicioAgregar.cantidad = 1

        carritoServicios.push(servicioAgregar)
        actualizarCarrito()
        mostrarServicios(servicioAgregar)
    }

 
} 


function mostrarServicios(servicioAgregar){

    let div = document.createElement('div')
    div.innerHTML = `<div class="card-text mb-auto">    
            <h4 class="titulos_notas--black">${servicioAgregar.nombre}</h4>
        </div>
        <div class="bg-branding p-1 font_oswald">
            <h6>Precio: $ ${servicioAgregar.precio}</h6>
        </div> 
        <p id="cantidad${servicioAgregar.id}">cantidad: ${servicioAgregar.cantidad}</p>
        <button id="eliminar${servicioAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`

    mostrarServiciosAgregados.appendChild(div)

    let btnEliminar= document.getElementById(`eliminar${servicioAgregar.id}`)
    btnEliminar.addEventListener('click', ()=>{
        if(servicioAgregar.cantidad ==1){
            btnEliminar.parentElement.remove()
            carritoServicios = carritoServicios.filter(item => item.id !== servicioAgregar.id)
            actualizarCarrito()
        }else{
            servicioAgregar.cantidad = servicioAgregar.cantidad -1 
        document.getElementById(`cantidad${servicioAgregar.id}`).innerHTML = `<p id="cantidad${servicioAgregar.id}">cantidad: ${servicioAgregar.cantidad}</p>`
        actualizarCarrito()
        }
    
    })
}

function  actualizarCarrito (){
    contadorServicio.innerText = carritoServicios.reduce((acc,el)=> acc + el.cantidad, 0)
    precioTotal.innerText = carritoServicios.reduce((acc,el)=> acc + (el.precio * el.cantidad) , 0)                                                            
 }