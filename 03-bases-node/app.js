const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;

//imprimir la tabla del 5
console.clear();

console.log(process.argv);
console.log(argv);
console.log(argv.base);



// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo))
//     .catch(err => console.log(err));