const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5,listar = false , hasta = 10) =>{

    try {
        

        let salida = "";
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base*index}\n`
            consola += `${base} ${'x'.yellow} ${index} ${'='.cyan} ${base*index}\n`
        }
        if(listar){
            console.log("===============".rainbow);
            console.log(`Tabla del ${base}:`.green);
            console.log(colors.rainbow("==============="));

            console.log(consola);
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