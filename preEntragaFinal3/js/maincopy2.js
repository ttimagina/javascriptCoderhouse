document.title = "Entrega - Proyecto Final ";
/// input types of sweetalert2

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')

const traerDatos = async() => {
    let respuesta = await fetch('./js/datos.json')
    return respuesta.json()
}

//filtro
selecTalles.addEventListener('change',()=>{

    console.log(selecTalles.value)
    if(selecTalles.value == 'all'){
        respuesta()
    }else{
        let arrayNuevo = productos.filter(item => item.tipo == selecTalles.value)//array nuevo

        respuesta(arrayNuevo)
    } 


})

window.addEventListener('DOMContentLoaded', () =>{
    mostrarProductos()
})

//Buscado
let carritoDeCompras = []

//logica Ecommerce
const mostrarProductos = async () => {
    let productos = await traerDatos()
    let productosVisualizado = ''
    productos.forEach(producto => {

        // destructuring
        const {img, nombre, detalle, precio, id} = producto
       { 
        productosVisualizado +=
 
        `<div class="col-md-3 d-flex flex-column my-3 mx-3">
        <img src="${img}" class="card-img-top img-fluid img_borde_redondo1" alt="imagen">
        <div class="card-text mb-auto">    
          <h4 class="titulos_notas--black">${nombre}</h4>
          <p class="card-text txt_justificado">${detalle}</p>
        </div>
        <div class="bg-branding p-1 font_oswald">
            <h6>Precio: $ ${precio}</h6>
            <button type="button" id="boton${id}" class="btn btn-success">AGREGAR</button>
        </div> 
        </div> `
        
       }
       
    });
    contenedorProductos.innerHTML = productosVisualizado
    
    let btnAgregar = document.getElementById(`boton${productos.id}`)
        
    btnAgregar.addEventListener('click',()=>{
        agregarAlCarrito(productos.id);
    }) 

       
}

function agregarAlCarrito(id) {
    let yaExiste = carritoDeCompras.find(elemento => elemento.id == id)

    if(yaExiste){
        yaExiste.cantidad = yaExiste.cantidad + 1
        document.getElementById(`cantidad${yaExiste.id}`).innerHTML = `<p id="cantidad${yaExiste.id}">cantidad: ${yaExiste.cantidad}</p>`
        actualizarCarrito()
    }else{
        let productoAgregar = stockProductos.find(ele => ele.id === id)
        productoAgregar.cantidad = 1 
   carritoDeCompras.push(productoAgregar)
   actualizarCarrito()
   mostrarCarrito(productoAgregar) 
    }
  
}



function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML =`<p>${productoAgregar.nombre}</p>
                <p>Precio: $${productoAgregar.precio}</p>
                
                <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i>X</button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar= document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        if(productoAgregar.cantidad == 1){
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.id !== productoAgregar.id)
            actualizarCarrito()
        }else{
            productoAgregar.cantidad = productoAgregar.cantidad - 1
        document.getElementById(`cantidad${productoAgregar.id}`).innerHTML = `<p id="cantidad${productoAgregar.id}">cantidad: ${productoAgregar.cantidad}</p>`
        actualizarCarrito()
        }
    

    })
}


s  

function  actualizarCarrito (){
   contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
   precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad) , 0)                                                            
}