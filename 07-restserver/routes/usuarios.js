const { Router } = require('express');
const { usuariosGet, usuariosPatch, usuariosDelete, usuariosPut, usuariosPost } = require('../controllers/usuarios');
const { check } = require('express-validator')
const { realizaValidacion } = require('../middlewares/validar-campos')
const { esRol, validaMail, validaID } = require('../helpers/db-validators')
const { verificaJWT } = require('../middlewares/validar-jwt')
const { esAdminRole } = require('../middlewares/validar-roles')
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
        esAdminRole,
        check('id', 'Ingresa un MongoID Valido').isMongoId(),
        check('id').custom(validaID),
        realizaValidacion
    ],
    usuariosDelete
)

router.patch('/',usuariosPatch );

module.exports = router;