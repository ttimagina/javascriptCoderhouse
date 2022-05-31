let nombre = prompt("Carga tu nombre");

if (nombre != ""){
    alert("Hola "+nombre);
} else {
    alert("No cargaste tu nombre");
}
    

let calcular = parseInt(prompt("- Ingresa tu monto para saber el 20% de descuento \n - Ingresa SALIR para terminar"));

while (calcular != "SALIR"){
    console.log(calcular * 0.20);
    // CONDICION DE SALIDA
    calcular = prompt("- Ingresa tu monto para saber el 20% de descuento \n - Ingresa SALIR para terminar");
}