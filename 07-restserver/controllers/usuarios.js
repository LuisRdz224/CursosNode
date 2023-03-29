const { response, request } = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuario')

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'no name', apiKey, page = 1 } = req.query
    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apiKey
    })
}

const usuariosPost = async (req, res) => {
    const { nombre, correo, password, rol } = req.body
    const usuario = new Usuario({ nombre, correo, password, rol })

    //Verificar si el correo existe

    //Encriptar la contrase;a
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)
    //Guardar en BD
    await usuario.save()

    res.json({
        usuario
    })
}
const usuariosPut = (req, res) => {
    const id = req.params.id

    res.status(400).json({
        msg: 'put API - Controlador',
        id
    })
}
const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controlador'
    })
}
const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}
