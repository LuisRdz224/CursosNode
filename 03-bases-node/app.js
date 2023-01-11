const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

//imprimir la tabla del 5
console.clear();

// console.log(argv);



crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));