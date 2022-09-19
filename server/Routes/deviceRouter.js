const Router = require('express')
const deviceController = require('../controllers/deviceController')

const router = Router()

router.route('/')
    .post(deviceController.create)
    .get(deviceController.getAll)

router.route('/:id',)
    .get(deviceController.getOne)

module.exports = router