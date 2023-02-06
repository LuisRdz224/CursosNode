const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const { Busquedas } = require("./models/busquedas");

const main = async() =>{
    const busquedas = new Busquedas();
    let opt = '';

    do {
        opt = await inquirerMenu();
        console.log(opt);
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                console.log(lugar);

                //Buscar los lugares

                // Seleccionar el lugar

                // Clima

                // Mostrar resultados
                // const ciudades = await busquedas.ciudad();
                // console.log(ciudades);

                console.log('\n Informacion de la ciudad\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
                console.log('Temperatura:',);
                console.log('Minima:',);
                console.log('Maxima:',);
                break;
            case 2:
                const historial = busquedas.historial;
                console.log(historial);
                break;
        }
        if( opt !==0 ) await pausa();
    } while (opt!==0);
}
main();