let carritoServicios=[]

let listDisenio = [
    {id: 1, nombre: 'Basic WebSite', precio: 50000, cat:'tipoDisenio', img: './img/web_1_presu.jpg', detalle: 'El servicio de website basico, incluye un sitio estatico, de hasta 5 pagina. '},
    {id: 2, nombre: 'Basic Logotype', precio: 10000, cat:'tipoDisenio', img: './img/branding_1_presu.jpg', detalle: 'El servicio de Branding basico, incluye el desarrollo de una marca (Hasta 3 correciones). ' },
    {id: 3, nombre: 'Basic motion', precio: 20000, cat:'tipoDisenio', img: './img/motion_1_presu.jpg', detalle: 'El servicio de Motion basico, incluye el desarrollo de 1minuto de animacion. '},
    {id: 4, nombre: 'Web 5 Paginas', precio: 10000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg', detalle: 'El servicio de website Medium, incluye un sitio dinamico, de hasta 10 pagina. Se le suma el costo del servicio basico web' },
    {id: 5, nombre: 'web 10 Paginas', precio: 20000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg', detalle: 'El servicio de website High, incluye un sitio dinamico, de hasta 20 pagina. Se le suma el costo del servicio basico web' },
    {id: 6, nombre: 'web 20 Paginas', precio: 40000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg', detalle: 'El servicio de website Premium, incluye un sitio dinamico, de hasta 20 pagina. Se le suma el costo del servicio basico web'},
    {id: 7, nombre: 'logo + manual', precio: 10000, cat:'agregadoDisenioLogo', img: './img/branding_1_presu.jpg', detalle: 'El servicio de Branding Medium, incluye desarrollo de marca, mas manual de uso. Se le suma el costo del servicio basico branding'},
    {id: 8, nombre: 'logo + manual + aplicaciones', precio: 20000, cat:'agregadoDisenioLogo', img: './img/branding_1_presu.jpg', detalle: 'El servicio de Branding High, incluye desarrollo de marca, mas manual de uso y ejemplos de lenguajes de marca. Se le suma el costo del servicio basico branding'},
    {id: 9, nombre: 'Mas de 1 minuto', precio: 15000, cat:'agregadoDisenioMotio', img: './img/motion_1_presu.jpg', detalle: 'El servicio de Motion Medium, incluye desarrollo de hasta 3 minutos de animacion. Se le suma el costo del servicio basico motion'},
    {id: 10, nombre: 'Mas de 5 minuto', precio: 30000, cat:'agregadoDisenioMotio', img: './img/motion_1_presu.jpg', detalle: 'El servicio de Motion High, incluye desarrollo de hasta 3 minutos de animacion. Se le suma el costo del servicio basico motion'},
    {id: 11, nombre: 'pequenia', precio: 0, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg', detalle: 'El costo por empresas de 0 a 5 empleados / o profesionales. Se le suma el costo de este monto a los servicios seleccionado'},
    {id: 12, nombre: 'Mediana', precio: 5000, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg' },
    {id: 13, nombre: 'grande', precio: 10000, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg'},
]

document.title = "DESAFÍO COMPLEMENTARIO - Dom";

const listDisenioMostrar = document.getElementById('listDisenio');
const mostrarServiciosAgregados = document.getElementById('servicioContenedor');

let nombreusuario = prompt('Escribi tu Nombre');

const saludos = document.getElementById('nombreusuario');
saludos.innerHTML = "Hola "+ nombreusuario;

mostrarServicios(listDisenio)

function mostrarServicios(array){

    for (const el of array) {
        
        let div = document.createElement('div')
        div.className = 'col-md-3 d-flex flex-column my-3 mx-3'
        div.innerHTML = `<div>
        <img src="${el.img}" class="card-img-top img-fluid img_borde_redondo1" alt="imagen">
        <div class="card-text mb-auto">    
          <h4 class="titulos_notas--black">${el.nombre}</h4>
          <p class="card-text txt_justificado">Re-diseño de Marca para un supermercado. <br>
          Donde se busco mezclar elementos tradiciones y autoctono con nuevo lenguaje.</p>
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
    let servicioAgregar = listDisenio.find(ele => ele.id === id)
    console.log(servicioAgregar);
    carritoServicios.push(servicioAgregar)
    mostrarServicios(servicioAgregar)
} 

/* function mostrarServicios(servicioAgregar){

    let div = document.createElement('div')
    div.innerHTML = `<div>
        <div class="card-text mb-auto">    
            <h4 class="titulos_notas--black"> ${servicioAgregar.nombre}</h4>
            
        </div>
        <div class="bg-branding p-1 font_oswald">
            <h6>Precio: $ ${servicioAgregar.precio}</h6>
        </div>    
    </div> `

    mostrarServiciosAgregados.appendChild(div)

} */