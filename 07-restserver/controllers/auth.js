const { response } = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')
const { generarToken } = require('../helpers/generarJWT')

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

        //crear JWT
        const token = await generarToken(usuario.id)

        res.json({
            usuario,
            token
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg: error
        })
    }
}


const googleSignin = (req, res = response) => {
    const { id_token } = req.body

    if (!id_token) {
        return res.json({
            msg: 'No se envio token'
        })
    }

    res.json({
        msg: 'Todo bien',
        token: id_token
    })
}

module.exports = {
    login,
    googleSignin
}
