const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Toma la base de la tabla de multiplicar'
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
                    describe: 'Muestra la tabla en consola',
                    default: false
                })
                .argv;

module.exports = argv;                