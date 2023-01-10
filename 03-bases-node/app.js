const {crearArchivo} = require('./helpers/multiplicar');

//imprimir la tabla del 5
console.clear();


const base = 4;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));