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
const validaID = async (_id = '') => {
    //Verificar si el correo existe
    const existeID = await Usuario.findById({ _id })
    if (!existeID) {
        throw new Error(`El ID ${_id} no existe`)
    }
}

module.exports = {
    esRol,
    validaMail,
    validaID
}
