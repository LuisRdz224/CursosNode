const { Router } = require('express')
const { check } = require('express-validator')

const {
    usuariosGet,
    usuariosPatch,
    usuariosDelete,
    usuariosPut,
    usuariosPost
} = require('../controllers/usuarios')
const { esRol, validaMail, validaID } = require('../helpers/db-validators')

const {
    realizaValidacion,
    verificaJWT,
    esAdminRole,
    tieneRol
} = require('../middlewares')
const router = Router()

router.get('/', usuariosGet)

router.put(
    '/:id',
    [
        check('id', 'Ingresa un MongoID Valido').isMongoId(),
        check('id').custom(validaID),
        check('rol').custom(esRol)
    ],
    realizaValidacion,
    usuariosPut
)

router.post(
    '/',
    [
        check('nombre', 'El nombre es obligatoriio').not().isEmpty(),
        check(
            'password',
            'El password es obligatorio y mas de 6 letras'
        ).isLength({ min: 6 }),
        check('correo', 'El correo no es valido').isEmail(),
        check('correo').custom(validaMail),
        // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom(esRol),
        realizaValidacion
    ],
    usuariosPost
)

router.delete(
    '/:id',
    [
        verificaJWT,
        // esAdminRole,
        tieneRol('ADMIN_ROLE', 'VENTAS_ROLE'),
        check('id', 'Ingresa un MongoID Valido').isMongoId(),
        check('id').custom(validaID),
        realizaValidacion
    ],
    usuariosDelete
)

router.patch('/', usuariosPatch)

module.exports = router
