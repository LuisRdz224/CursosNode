const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')

const verificaJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token')

    if (!token) {
        return res.status(401).json({
            error: 'No hay token en la peticion'
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETKEY)
        const usuario = await Usuario.findById(uid)
        //verificar si existe el usuario
        if (!usuario) {
            return res.status(401).json({
                error: 'No existe el usuario'
            })
        }

        //validar si usuario tiene estado=false
        if (!usuario.estado) {
            return res.status(401).json({
                error: 'El usuario esta inactivo'
            })
        }

        req.uid = usuario

        next()
    } catch (error) {
        return res.status(401).json({
            error: 'El token no esta registrado'
        })
    }
}

module.exports = {
    verificaJWT
}
