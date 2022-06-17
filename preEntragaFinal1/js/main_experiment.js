document.title = "Proyecto Final 1er entrega";

let nombreusuario = prompt('Escribi tu Nombre');

const saludos = document.querySelector('#nombreusuario')
saludos.innerHTML = "Hola "+ nombreusuario;

const tipoDisenio = [
    {id: 1, nombre: 'Basic WebSite', precio: 50000},
    {id: 2, nombre: 'Basic Logotype', precio: 10000},
    {id: 3, nombre: 'Basic motion', precio: 20000},
]

const agregadoDisenioWeb = [
    {id: 4, nombre: 'Web 5 Paginas', precio: 10000},
    {id: 5, nombre: 'web 10 Paginas', precio: 20000},
    {id: 6, nombre: 'web 20 Paginas', precio: 40000},
]

const agregadoDisenioLogo = [
    {id: 7, nombre: 'logo + manual', precio: 10000},
    {id: 8, nombre: 'logo + manual + aplicaciones', precio: 20000},
]

const agregadoDisenioMotion = [
    {id: 9, nombre: 'Mas de 1 minuto', precio: 15000},
    {id: 10, nombre: 'Mas de 5 minuto', precio: 30000},
]

const tipodeCliente = [
    {id: 11, nombre: 'pequenia', precio: 0},
    {id: 12, nombre: 'Mediana', precio: 5000},
    {id: 13, nombre: 'grande', precio: 10000},
]


const muestrario1 = tipoDisenio.map((muestreo) =>{
    return {
        nombre: muestreo.nombre,
        precio: muestreo.precio
    }
})

 
const muestrario2 = agregadoDisenioWeb.map((muestreo) =>{
    return{
        nombre: muestreo.nombre,
        precio: muestreo.precio
    }
})

const muestrario3 = agregadoDisenioWeb.map((muestreo) =>{
    return {
        nombre: muestreo.nombre,
        precio: muestreo.precio
    }
})

const muestrario4 = agregadoDisenioMotion.map((muestreo) =>{
    return {
        nombre: muestreo.nombre,
        precio: muestreo.precio
    }
})

const muestrario5 = tipodeCliente.map((muestreo) =>{
    return {
        nombre: muestreo.nombre,
        precio: muestreo.precio
    }
})

console.log("Servicios Basicos:");
console.log(muestrario1);
console.log("Servicios de Detalle web:")
console.log(muestrario2);
console.log("Servicios de Branding:")
console.log(muestrario3);
console.log("Servicios de Motion:")
console.log(muestrario4);
console.log("Costo extra por tamanio de empresa:")
console.log(muestrario5);


let aviso = alert("Por favor chequea en la consola los servicio, precios y luego arma tu presupuesto")

let datoServicio = parseInt (prompt("Por Favor, cargar el costo del servicio basico elegido:"))
let extraServicio = parseInt (prompt("Por Favor, si estas interesado en agregar otro items carga el costo a continuacion:"))
let datoEmpresa = parseInt (prompt("Por Favor cargar el costo por el tamanio de empresa elegido:"))


function sumarServis(dato1,dato2,dato3){
    return dato1 + dato2 + dato3;
}
 
function mostrar(mensaje){
    alert("El Servicio tiene un costo de: $"+ mensaje);
}

let resultado = sumarServis(datoServicio,extraServicio,datoEmpresa); 

mostrar(resultado)