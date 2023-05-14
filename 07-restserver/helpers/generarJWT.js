const jwt = require('jsonwebtoken')

const generarToken = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid }
        jwt.sign(
            payload,
            process.env.SECRETKEY,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) {
                    reject(err)
                    console.log('no se pudo generar jwt')
                }
                resolve(token)
            }
        )
    })
}

module.exports = {
    generarToken
}
