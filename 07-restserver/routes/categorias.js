const { Router } = require('express')
const { check } = require('express-validator')

const router = Router()

//Obtener todas las categorias - publico
router.get('/', (req, res) => {
    res.json('Get')
})
//Obtener categoria por id - publico
router.get('/:id', (req, res) => {
    res.json('Get id')
})
//Actualizar categoria - privado
router.put('/:id', (req, res) => {
    res.json('Put')
})
//Crear nueva categoria - privado
router.post('/', (req, res) => {
    res.json('Post')
})
//Borrar categoria - Admin solamente
router.delete('/:id', (req, res) => {
    res.json('Delete')
})

module.exports = router
