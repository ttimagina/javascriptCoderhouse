let carritoServicios=[]

document.title = "2da PreEntrega - Proyecto Final ";
/// input types of sweetalert2

(async () => {

    const ipAPI = '//api.ipify.org?format=json'
    
    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)
    
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
    
    if (ipName) {
      Swal.fire(`Bienvenido ${ipName}`)
      localStorage.setItem('nombres del usuario', ipName);

      const saludos = document.getElementById('nombreusuario');
      saludos.innerHTML = "Hola "+ ipName;
      
    }
    
    })()

////

const listDisenioMostrar = document.getElementById('listadoDeServicios');
const mostrarServiciosAgregados = document.getElementById('servicioContenedor');


///listado de servicios
let listadoDeServicios = [
    {id: 1, tipo:'website', nombre: 'Basic WebSite', precio: 50000, cat:'tipoDisenio', img: './img/web_1_presu.jpg', detalle: 'El servicio de website basico, incluye un sitio estatico, de hasta 5 pagina. '},
    {id: 2, tipo:'branding', nombre: 'Basic Logotype', precio: 10000, cat:'tipoDisenio', img: './img/branding_1_presu.jpg', detalle: 'El servicio de Branding basico, incluye el desarrollo de una marca (Hasta 3 correciones). ' },
    {id: 3, tipo:'motion',nombre: 'Basic motion', precio: 20000, cat:'tipoDisenio', img: './img/motion_1_presu.jpg', detalle: 'El servicio de Motion basico, incluye el desarrollo de 1minuto de animacion. '},
    {id: 5, tipo:'website', nombre: 'website High', precio: 20000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg', detalle: 'El servicio de website High, incluye un sitio dinamico, de hasta 20 pagina. Se le suma el costo del servicio basico web' },
    {id: 6, tipo:'website', nombre: 'website Premium', precio: 40000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg', detalle: 'El servicio de website Premium, incluye un sitio dinamico, de hasta 20 pagina. Se le suma el costo del servicio basico web'},
    {id: 7, tipo:'branding', nombre: 'Branding Medium', precio: 10000, cat:'agregadoDisenioLogo', img: './img/branding_1_presu.jpg', detalle: 'El servicio de Branding Medium, incluye desarrollo de marca, mas manual de uso. Se le suma el costo del servicio basico branding'},
    {id: 8, tipo:'branding', nombre: 'Branding High', precio: 20000, cat:'agregadoDisenioLogo', img: './img/branding_1_presu.jpg', detalle: 'El servicio de Branding High, incluye desarrollo de marca, mas manual de uso y ejemplos de lenguajes de marca. Se le suma el costo del servicio basico branding'},
    {id: 9, tipo:'motion', nombre: 'Motion Medium', precio: 15000, cat:'agregadoDisenioMotio', img: './img/motion_1_presu.jpg', detalle: 'El servicio de Motion Medium, incluye desarrollo de hasta 3 minutos de animacion. Se le suma el costo del servicio basico motion'},
    {id: 10, tipo:'motion', nombre: 'Motion High', precio: 30000, cat:'agregadoDisenioMotio', img: './img/motion_1_presu.jpg', detalle: 'El servicio de Motion High, incluye desarrollo de hasta 3 minutos de animacion. Se le suma el costo del servicio basico motion'},
    {id: 11, tipo:'tamanioEmpresa', nombre: 'pequenia', precio: 0, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg', detalle: 'El costo por empresas de 1 a 10 empleados / o profesionales. Se le suma el costo de este monto a los servicios seleccionado'},
    {id: 12, tipo:'tamanioEmpresa', nombre: 'Mediana', precio: 5000, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg',  detalle: 'El costo por empresas de 11 a 50 empleados / o profesionales. Se le suma el costo de este monto a los servicios seleccionado' },
    {id: 13, tipo:'tamanioEmpresa', nombre: 'grande', precio: 10000, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg', detalle: 'El costo por empresas de 50 a + empleados / o profesionales. Se le suma el costo de este monto a los servicios seleccionado'},
]
////

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