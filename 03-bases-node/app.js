const {crearArchivo} = require('./helpers/multiplicar');

//imprimir la tabla del 5
console.clear();

console.log(process.argv);
const [,,arg3 = 'base=5'] = process.argv;
const [,base=5] = arg3.split('=');
console.log(base);



crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));