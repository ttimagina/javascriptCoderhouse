let calcular = parseInt(prompt("- Ingresa tu monto para saber el descuento \n - Ingresa SALIR para terminar"));

while (calcular != "SALIR"){
    console.log(calcular * 0.20);
    // CONDICION DE SALIDA
    calcular = prompt("- Ingresa tu monto para saber el descuento \n - Ingresa SALIR para terminar");
}