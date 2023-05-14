const { response } = require('express')

const login = (req, res = response) => {
    res.json({
        msg: 'respuesta ok'
    })
}

module.exports = {
    login
}
