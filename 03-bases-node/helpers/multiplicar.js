const fs = require('fs');
const { argv } = require('yargs');
const crearArchivo = async(base = 5) =>{

    try {
        

        let salida = "";

        for (let index = 1; index <= 10; index++) {
            salida += `${base}x${index} = ${base*index}\n`
        }
        if(argv.l){
            console.log("===============");
            console.log(`Tabla del ${base}:`);
            console.log("===============");

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