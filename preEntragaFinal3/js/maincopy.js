document.title = "Entrega - Proyecto Final ";
const DOMProductos = document.getElementById('productos')
const DOMcarrito = document.getElementById('carrito')

const traerDatos = async() => {
    let respuesta = await fetch('./js/datos.json')
    return respuesta.json()
}

window.addEventListener('DOMContentLoaded', () =>{
    renderizarDOM()
})

let carrito = []

const renderizarDOM = async () => {
    let productos = await traerDatos()
    let productosVisualizado = ''
    productos.forEach(producto => {
        // destructuring
        const {img, nombre, detalle, precio, Id} = producto
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
            <button data-id="${Id}" id="mybtn" name="btncomprar"  type="button" class="btn btn-success">AGREGAR</button>
        </div> 
        </div> `
       }
    });   
    DOMProductos.innerHTML = productosVisualizado
}

DOMProductos.addEventListener('click', (e) =>{
    if(e.target.id === "mybtn"){
       guardarProducto(e.target.dataset.id) 
    }
})

const guardarProducto = async (id) =>{
    let productos = await traerDatos()
    let productoEncontrado = productos.find(producto => producto.Id === parseInt(id))
    let productoStorage = JSON.parse(localStorage.getItem(id))
    if(productoStorage === null){
                                                  ///spread operator /// nueva propiedad cantidad
        localStorage.setItem(id, JSON.stringify({...productoEncontrado, cantidad:1}))
        recorrerStorage() 
    }else{
        let productoExiste = JSON.parse(localStorage.getItem(id))
        productoExiste.cantidad = productoExiste.cantidad + 1
        //productoExiste.precio = productoExiste.precio + productoEncontrado.precio
        localStorage.setItem(id. JSON.stringify(productoExiste))
        recorrerStorage() 
    } 
}


const recorrerStorage = () => {
    carrito.lenght = 0
    for (let index = 0; index < localStorage.lenght; index++){
        const element = localStorage.key(index)
        carrito.push(JSON.parse(localStorage.getItem(element)))        
    }
    renderCarrito()
}

const renderCarrito = () => {

    if (carrito.length > 0){
        carrito.forEach(producto => {
            
            DOMcarrito.innerHTML +=  `
            <div class="col-md-3 d-flex flex-column my-3 mx-3">
            <div class="card-text mb-auto">    
              <h4 class="titulos_notas--black">${producto.nombre}</h4>
            </div>
            <div class="bg-branding p-1 font_oswald">
                <h6>Precio: $ ${producto.precio}</h6>
                <h6>Cantidad: ${producto.cantidad}</h6>

            </div> 
            </div>
            `
        });
    } else {
        DOMcarrito.innerHTML = `
            <div id='carritoVacio' class="card" style="width: 18rem>
                <div class="card-body">
                  <h6 class="titulos_notas--black">Aun no ha seleccionado ningun servicio</h6>
                </div>
            </div>
        `
    }
} 
//transformar objeto a arrays
//Object.keys(localStorage).forEach((key) => JSON.parse(localStorage.getItem(key)))



/* let btnAgregar = document.getElementById(`boton${id}`)

btnAgregar.addEventListener('click',()=>{
    agregarAlCarrito(id); */



/* const mostrarDatos = async() => {
    let datos = await traerDatos()
    console.log(datos)
}

mostrarDatos() */


//const {img, nombre, detalle, precio, Id, cantidad} = producto