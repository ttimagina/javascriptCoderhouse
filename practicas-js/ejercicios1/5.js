let precio1 = parseFloat(prompt("introduce tu monto"));
let descuento20 = precio1 * 0.20;
let descuento30 = precio1 * 0.30;

let preciofinal20 = precio1 - descuento20;
let preciofinal30 = precio1 - descuento30;
let preciofinal40 = precio1 - (precio1 * 0.40);

console.log(preciofinal20);
console.log(preciofinal30);
console.log(preciofinal40);