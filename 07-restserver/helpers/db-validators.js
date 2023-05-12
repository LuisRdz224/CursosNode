const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRol = async (rol = '') => {
    const existeRol = await Role.findOne({ rol })
    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe`)
    }
}
const validaMail = async (correo = '') => {
    //Verificar si el correo existe
    const existeMail = await Usuario.findOne({ correo })
    if (existeMail) {
        throw new Error(`El correo ${correo} ya se encuentra registrado`)
    }
}

module.exports = {
    esRol,
    validaMail
}
