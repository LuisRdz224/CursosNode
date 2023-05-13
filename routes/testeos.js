const { Router } = require('express')
const { testingPatch } = require('../controllers/testeos')

const router = Router()

router.get('/', testingPatch)

module.exports = router
