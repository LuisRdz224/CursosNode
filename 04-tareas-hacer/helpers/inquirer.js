const inquirer = require('inquirer')
require('colors')

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea',
            },
            {
                value: '2',
                name: '2. Listar tareas',
            },
            {
                value: '3',
                name: '3. Listar tareas completadas',
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes',
            },
            {
                value: '5',
                name: '5. Completar tarea(s)',
            },
            {
                value: '6',
                name: '6. Borrar tarea',
            },
            {
                value: '0',
                name: '0. Salir',
            },

        ]
    }
]

const pausaMenu = [{
    type: 'input',
    name: 'pausaOpt',
    message: 'Presiona un botón para continuar'
    }]

const inquirerMenu = async () => {
    console.clear()
    console.log('======================='.green)
    console.log('Seleccione una opcion'.yellow)
    console.log('======================='.green)

    const {opcion} = await inquirer.prompt(menuOpts)
    return opcion
}

const pausa = async() =>{
    console.log('\n');
    const {pausaOpt} = await inquirer.prompt(pausaMenu);
    return pausaOpt;


    // return new Promise (res=>{
    //     const readline = require('readline').createInterface({
    //         input: process.stdin,
    //         output: process.stdout
    //     })

    //     readline.question(`\nPresione ${'ENTER'.green} para continuar\n`,(opt) =>{
    //         readline.close();
    //         res();
    //     })
    // })
}

module.exports = {
    inquirerMenu,
    pausa
}
