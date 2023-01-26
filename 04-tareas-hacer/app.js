require('colors');

const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer')
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {
    console.log('Hola Mundo')

    let opt = ''
    const tareas = new Tareas()

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                //Crear opcion
                const desc = await leerInput('Descripcion: ')
                // console.log(desc)
                tareas.crearTarea(desc);
                break
            case '2':
                console.log(tareas.listadoArray)
                break

        }
        // guardarDB(tareas.listadoArray);
        await pausa()
    } while (opt !== '0')
}
main();