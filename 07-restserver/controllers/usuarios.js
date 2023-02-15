const { response, request } = require('express')

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
    const body = req.body
    const usuario = new Usuario(body)

    await usuario.save()
    res.status(201).json({
        msg: 'post API - Controlador',
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
