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
                name: `${'1.'.yellow} Crear tarea`,
            },
            {
                value: '2',
                name: `${'2'.yellow}. Listar tareas`,
            },
            {
                value: '3',
                name: `${'3'.yellow}. Listar tareas completadas`,
            },
            {
                value: '4',
                name: `${'4'.yellow}. Listar tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5'.yellow}. Completar tarea(s)`,
            },
            {
                value: '6',
                name: `${'6'.yellow}. Borrar tarea`,
            },
            {
                value: '0',
                name: `${'0'.yellow}. Salir`,
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
    console.log('Seleccione una opcion'.white)
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

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc
}

const listadoTareasBorrar = async(tareas = []) =>{

    const choices = tareas.map( (tarea, i) =>{
        const idx = `${i+1}.`.green
        return{
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })
    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }]
    const {id} = await inquirer.prompt(preguntas)
    // console.log(choices);
    return id
    // {
    //     value: tarea.id,
    //     name: `${'1.'.yellow} Crear tarea`,
    // },
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar
}
