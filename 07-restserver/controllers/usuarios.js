const { response, request } = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuario')

const mongoose = require('mongoose')

const usuariosGet = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query
    const query = { estado: true }

    // const usuarios = await Usuario.find(query)
    //     .limit(Number(limite))
    //     .skip(Number(desde))

    // const total = await Usuario.countDocuments(query)

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).limit(Number(limite)).skip(Number(desde))
    ])
    res.json({
        total,
        usuarios
    })
}

//test
const usuariosPost = async (req, res) => {
    const { nombre, correo, password, rol } = req.body
    const usuario = new Usuario({ nombre, correo, password, rol })

    //Encriptar la contrase;a
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)
    //Guardar en BD
    await usuario.save()

    res.json({
        usuario
    })
    console.log('El usuario fue creado exitosamente')
}
const usuariosPut = async (req, res) => {
    const id = req.params.id
    const { _id, password, correo, google, ...resto } = req.body

    if (password) {
        const salt = bcrypt.genSaltSync()
        resto.password = bcrypt.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.status(400).json({
        usuario
    })
}
const usuariosDelete = async (req, res, next) => {
    // const userId = req.params.id
    // console.log(`Usuario: ${userId}`)
    try {
        // Obtener el ID del usuario a eliminar de los parámetros de la URL
        const userId = req.params.id

        // Convertir el ID a un objeto ObjectId de MongoDB
        const objectId = mongoose.Types.ObjectId(userId)

        // Buscar y eliminar el usuario por su ID de MongoDB
        const deletedUser = await Usuario.findByIdAndDelete(objectId)

        // Si el usuario no existe, lanzar un error 404
        if (!deletedUser) {
            throw new ErrorHandler(404, 'Usuario no encontrado')
        }

        // Enviar una respuesta de éxito al cliente
        res.status(200).json({
            success: true,
            message: `Usuario con ID ${userId} eliminado exitosamente`,
            data: deletedUser
        })
    } catch (err) {
        const userId = req.params.id
        console.log(`Ocurrio un error eliminando al usuario ${userId}`)
        next(err)
    }
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
