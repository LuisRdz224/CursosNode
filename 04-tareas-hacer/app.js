require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer')
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {

    let opt = ''
    const tareas = new Tareas()

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }


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
                tareas.listadoCompleto();
                break
            case '3':
                tareas.listarPendientesCompletadas(true);
                break
            case '4':
                tareas.listarPendientesCompletadas(false);
                break
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArray);
                console.log({id});
                break

        }
        // guardarDB(tareas.listadoArray);
        await pausa()
    } while (opt !== '0')
}
main();