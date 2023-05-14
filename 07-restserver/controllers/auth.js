const { response } = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')

const login = async (req, res = response) => {
    const { correo, password } = req.body
    try {
        const usuario = await Usuario.findOne({ correo })
        //Validar correo
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario | Constraseña incorrectos - correo'
            })
        }

        //validar estado
        if (!usuario.estado) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario | Constraseña incorrectos - estado'
            })
        }

        //validar password
        const isValidPassword = bcryptjs.compareSync(password, usuario.password)
        if (!isValidPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario | Constraseña incorrectos - password'
            })
        }

        res.json({
            msg: 'respuesta ok'
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: error
        })
    }
}

module.exports = {
    login
}
