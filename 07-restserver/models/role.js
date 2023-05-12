const { Schema, model } = require('mongoose')

const roleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El campo de role es obligatorio']
    }
})

module.exports = model('Role', roleSchema)
