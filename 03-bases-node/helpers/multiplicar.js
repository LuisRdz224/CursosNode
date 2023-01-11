const fs = require('fs');
const colors = require('colors');
const { argv } = require('yargs');
const crearArchivo = async(base = 5) =>{

    try {
        

        let salida = "";

        for (let index = 1; index <= 10; index++) {
            salida += `${base} ${'x'.yellow} ${index} ${'='.cyan} ${base*index}\n`
        }
        if(argv.l){
            console.log("===============".rainbow);
            console.log(`Tabla del ${base}:`.green);
            console.log(colors.rainbow("==============="));

            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`,salida);
        return `tabla-${base}.txt fue creado`;
    } catch (err) {
        throw err
    }
    
    
}

module.exports = {
    crearArchivo
}