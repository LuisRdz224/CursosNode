const esAdminRole = (req, response = response, next) => {
    if (!req.uid) {
        return response.status(401).json({
            error: 'No se tiene un token'
        })
    }
    const { rol, nombre } = req.uid
    if (rol !== 'ADMIN_ROLE') {
        return response.status(401).json({
            error: `El usuario ${nombre} no tiene permisos para ejecutar esta acción`
        })
    }
    next()
}
module.exports = {
    esAdminRole
}
