document.title = "Proyecto Final 1er entrega";
const listDisenioMostrar = document.getElementById('listDisenio')

let nombreusuario = prompt('Escribi tu Nombre');

const saludos = document.getElementById('nombreusuario')
saludos.innerHTML = "Hola "+ nombreusuario;

let listDisenio = [
    {id: 1, nombre: 'Basic WebSite', precio: 50000, cat:'tipoDisenio', img: './img/web_1_presu.jpg'},
    {id: 2, nombre: 'Basic Logotype', precio: 10000, cat:'tipoDisenio', img: './img/branding_1_presu.jpg'},
    {id: 3, nombre: 'Basic motion', precio: 20000, cat:'tipoDisenio', img: './img/motion_1_presu.jpg'},
    {id: 4, nombre: 'Web 5 Paginas', precio: 10000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg'},
    {id: 5, nombre: 'web 10 Paginas', precio: 20000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg'},
    {id: 6, nombre: 'web 20 Paginas', precio: 40000, cat:'agregadoDisenioWeb', img: './img/web_1_presu.jpg'},
    {id: 7, nombre: 'logo + manual', precio: 10000, cat:'agregadoDisenioLogo', img: './img/branding_1_presu.jpg'},
    {id: 8, nombre: 'logo + manual + aplicaciones', precio: 20000, cat:'agregadoDisenioLogo', img: './img/branding_1_presu.jpg'},
    {id: 9, nombre: 'Mas de 1 minuto', precio: 15000, cat:'agregadoDisenioMotio', img: './img/motion_1_presu.jpg'},
    {id: 10, nombre: 'Mas de 5 minuto', precio: 30000, cat:'agregadoDisenioMotio', img: './img/motion_1_presu.jpg'},
    {id: 11, nombre: 'pequenia', precio: 0, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg'},
    {id: 12, nombre: 'Mediana', precio: 5000, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg' },
    {id: 13, nombre: 'grande', precio: 10000, cat:'tipodeCliente', img: './img/cliente_1_presu.jpg'},
]

mostrarServicios()
function mostrarServicios(){

    listDisenio.forEach(el => {
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
            <a id="boton" class="alink">agregar</a>
        </div> 
        </div> `

        listDisenioMostrar.appendChild(div)
    })
}