const jwt = require('jsonwebtoken')

const verificaJWT = (req = request, res = response, next) => {
    const token = req.header('x-token')

    if (!token) {
        return res.status(401).json({
            error: 'No hay token en la peticion'
        })
    }
    try {
        const { uid } = jwt.verify(token, process.env.SECRETKEY)
        req.uid = uid
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
