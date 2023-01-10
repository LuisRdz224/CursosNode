const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw "La base tiene que ser un numero";
                    }
                    return true;
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    default: false
                })
                .argv;

//imprimir la tabla del 5
console.clear();

console.log(argv);



crearArchivo(argv.b)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));