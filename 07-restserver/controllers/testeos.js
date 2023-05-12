const testingPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controlador'
    })
}

module.exports = {
    testingPatch
}
