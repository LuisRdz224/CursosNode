const { Router } = require('express');
const { usuariosGet, usuariosPatch, usuariosDelete, usuariosPut, usuariosPost } = require('../controllers/usuarios');
const { check } = require('express-validator')
const { realizaValidacion } = require('../middlewares/validar-campos')
const router = Router()

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post(
    '/',
    [check('nombre', 'El nombre es obligatoriio').not().isEmpty()],
    [
        check(
            'password',
            'El password es obligatoriio y mas de 6 letras'
        ).isLength({ min: 6 })
    ],
    [check('correo', 'El correo no es valido').isEmail()],
    [check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE'])],
    realizaValidacion,
    usuariosPost
)

router.delete('/:id', usuariosDelete)

router.patch('/',usuariosPatch );

module.exports = router;