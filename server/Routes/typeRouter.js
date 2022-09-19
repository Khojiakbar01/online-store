const Router = require('express')
const typeController = require('../controllers/typeController')
const router = Router()
const checkRole=  require('../middlewares/chekRoleMiddleware')

router.route('/')
    .post( checkRole('ADMIN'), typeController.create)
    .get(typeController.get)

module.exports = router