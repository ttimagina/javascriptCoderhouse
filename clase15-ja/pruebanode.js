const mensaje = 'ultima clase de JS';

console.log(mensaje)

const file = require('fs')
const mensajefile = 'Creando un archivo desde NodeJs';


/// para poder controlar errores
try {
    file.writeFileSync('archivo.txt', mensajefile)
} catch (error) {
    console.log('no se puede crear el archivo' + error)
}