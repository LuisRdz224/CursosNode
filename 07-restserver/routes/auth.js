const { Router } = require('express')
const { check } = require('express-validator')
const { login, googleSignin } = require('../controllers/auth')
const { realizaValidacion } = require('../middlewares/validar-campos')
const router = Router()

router.post(
    '/login',
    [
        check('correo', 'Email is required').isEmail(),
        check('password', 'Password is required').notEmpty(),
        realizaValidacion
    ],
    login
)

router.post(
    '/google',
    [check('id_token', 'No existe token').notEmpty(), googleSignin],
    login
)

module.exports = router
