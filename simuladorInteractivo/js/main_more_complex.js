/* let presuServicio = 0
let tamanioEmpresa = prompt("Elegi alguna de las siguientes opciones \n empresaPequenia \n empresaMediana \n empresaGrande");

while(tamanioEmpresa != salir){
    switch (tamanioEmpresa) {
        case "empresaPequenia":
            alert ("Elegiste Empresa pequenia");
            break;
        case "empresaMediana":
            alert ("Elegiste Empresa Mediana");
            break;
        case "empresaGrande":
            alert ("Elegiste empresa Grande");
            break;
        default:
            alert ("La opcion no es valida, vuelva a ingresar");
            break;            
    }
    tamanioEmpresa = prompt("Elegi alguna de las siguientes opciones \n empresaPequenia \n empresaMediana \n empresaGrande");
}

let servicioEmpresa = prompt("Elegi alguna de las siguientes opciones \n logotype \n website \n motion");

while(servicioEmpresa != salir){
    switch(servicioEmpresa){
        case "logotype":
            alert ("Elegiste logotipo");
            break;
        case "website":
            alert ("Elegiste website");
            break;
        case "motion":
            alert ("Elegiste motion");
            break;
        default:
            alert ("La opcion no es valida, vuelva a ingresar");
            break;            
    }
    servicioEmpresa = prompt("Elegi alguna de las siguientes opciones \n logotype \n website \n motion");
}
 */

//datos fijos
const empresaPequenia = 0
const empresaMediana = 1500
const empresaGrande = 3000

const logotype = 5000
const website = 10000
const motion = 7000


let tamanioEmpresa = prompt("Elegi alguna de las siguientes opciones \n empresaPequenia \n empresaMediana \n empresaGrande \n salir");

if (tamanioEmpresa == empresaPequenia){
        alert ("Elegiste Empresa pequenia");
 } else if (tamanioEmpresa == empresaMediana){
        alert ("Elegiste Empresa Mediana");
 } else if (tamanioEmpresa == empresaGrande){
        alert ("Elegiste Empresa Grande");
 } else if (tamanioEmpresa == "salir"){
        alert ("Gracias");
    }
    else {
        alert("Por favor ingrese una opcion valida");
    }



let servicioEmpresa = prompt("Elegi alguna de las siguientes opciones \n logotype \n website \n motion");

while(servicioEmpresa != salir){
    switch(servicioEmpresa){
        case "logotype":
            alert ("Elegiste logotipo");
            break;
        case "website":
            alert ("Elegiste website");
            break;
        case "motion":
            alert ("Elegiste motion");
            break;
        default:
            alert ("La opcion no es valida, vuelva a ingresar");
            break;            
    }
    servicioEmpresa = prompt("Elegi alguna de las siguientes opciones \n logotype \n website \n motion");
}

function sumarServis(dato1, dato2){
    return dato1 + dato2;
}

sumarServis(tamanioEmpresa + servicioEmpresa) 
    
function mostrar(mensaje){
    alert("El Servicio tiene un costo de: "+ mensaje);
}

mostrar (sumarServis)