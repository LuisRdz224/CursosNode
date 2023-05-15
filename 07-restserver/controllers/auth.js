const { response } = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')
const { generarToken } = require('../helpers/generarJWT')
const { googleVerify } = require('../helpers/google-verify')

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

const googleSignin = async (req, res = response) => {
    const { id_token } = req.body
    try {
        const { name, email, picture } = await googleVerify(id_token)

        let usuario = await Usuario.findOne({ correo: email })
        if (!usuario) {
            const data = new Usuario({
                nombre: name,
                correo: email,
                img: picture,
                rol: 'USER_ROLE',
                password: ':p',
                estado: true,
                google: true
            })
            const usuario = new Usuario(data)
            await usuario.save()
        }

        //validar estado
        if (!usuario.estado) {
            return res.status(401).json({
                ok: false,
                msg: `Usuario ${usuario.correo} bloqueado, hable con el administrador`
            })
        }

        //crear JWT
        const token = await generarToken(usuario.id)
        res.json({
            usuario,
            token
        })
    } catch (error) {
        res.json({
            msg: 'Token de google no valido'
        })
    }
}

module.exports = {
    login,
    googleSignin
}
