let servicioEmpresa = prompt("ARMA TU PRESUPUESTO \n-Elegi alguna de las siguientes opciones \n- logotype \n- website \n- motion \n- salir / siguiente opcion");

while(servicioEmpresa != "salir"){
    switch(servicioEmpresa){
        case "logotype":
            alert ("El precio del logotype es: 5000");
            break;
        case "website":
            alert ("El precio del website es: 10000");
            break;
        case "motion":
            alert ("El precio del motion es: 7000");
            break;
        default:
            alert ("La opcion no es valida, vuelva a ingresar");
            break;            
    }
    servicioEmpresa = prompt("Elegi alguna de las siguientes opciones \n- logotype \n- website \n- motion \n- salir / siguiente opcion");
}

let tamanioEmpresa = prompt("ARMA TU PRESUPUESTO \n-Elegi alguna de las siguientes opciones \n- small \n- medium \n- big \n- salir / siguiente opcion");

while(tamanioEmpresa != "salir"){
    switch(tamanioEmpresa){
        case "small":
            alert ("El precio para empresas chicas es: 500");
            break;
        case "medium":
            alert ("El precio para empresas media es: 1500");
            break;
        case "big":
            alert ("El precio para empresas grande es: 3000");
            break;
        default:
            alert ("La opcion no es valida, vuelva a ingresar");
            break;            
    }
    tamanioEmpresa = prompt("Elegi alguna de las siguientes opciones \n- small \n- medium \n- big \n- salir / siguiente opcion");
}


let datoServicio = parseInt (prompt("cargar el costo del servicio"))
let datoEmpresa = parseInt (prompt("cargar el costo x tamanio de empresa"))


function sumarServis(dato1,dato2){
    return dato1 + dato2;
}
 
function mostrar(mensaje){
    alert("El Servicio tiene un costo de: "+ mensaje);
}

let resultado = sumarServis(datoServicio,datoEmpresa); 

mostrar(resultado)