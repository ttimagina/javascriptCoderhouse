let carritoDeCompras = []

document.title = "Entrega - Proyecto Final ";
/// input types of sweetalert2

(async () => {

    //const ipAPI = '//api.ipify.org?format=json'
    
     const inputValue = fetch()
      .then(response => response.json())
      .then(data => data) 
    
    const { value: ipName } = await Swal.fire({
      title: 'Introduce tu nombre',
      input: 'text',
      inputLabel: 'Gracias',
      inputValue: inputValue,
      showCancelButton: false,
      inputValidator: (value) => {
        if (!value) {
          return 'Por favor dejanos un mensaje '
        }
      }
    })
    
/*     if (ipName) {
      Swal.fire(`Bienvenido ${ipName}`)
      localStorage.setItem('nombres del usuario', ipName);

      const saludos = document.getElementById('nombreusuario');
      saludos.innerHTML = "Hola "+ ipName;
      
    } */
    //// operardor AND
    ipName && Swal.fire(`Bienvenido ${ipName}`),
     localStorage.setItem('nombres del usuario', ipName); 
     const saludos = document.getElementById('nombreusuario');
     saludos.innerHTML = "Hola "+ ipName;
    })()

////

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')


//filtro
selecTalles.addEventListener('change',()=>{

    console.log(selecTalles.value)
    if(selecTalles.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        let arrayNuevo = stockProductos.filter(item => item.tipo == selecTalles.value)//array nuevo

        mostrarProductos(arrayNuevo)
    } 


})

//Buscado
mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){

    contenedorProductos.innerHTML = ""

    for(const el of array) {

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

        contenedorProductos.appendChild(div)
        
        let btnAgregar = document.getElementById(`boton${el.id}`)
        
        btnAgregar.addEventListener('click',()=>{
            agregarAlCarrito(el.id);
        })

    }
       
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




function  actualizarCarrito (){
   contadorCarrito.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.cantidad, 0)
   precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad) , 0)                                                            
}