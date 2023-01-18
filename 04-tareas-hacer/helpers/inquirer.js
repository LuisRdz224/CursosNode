const inquirer = require('inquirer')
require('colors')

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('======================='.green)
    console.log('Seleccione una opcion'.yellow)
    console.log('======================='.green)

    const opt = await inquirer.prompt(menuOpts)
    return opt
}

module.exports = {
    inquirerMenu
}
