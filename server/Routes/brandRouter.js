const Router = require('express')
const brandController = require('../controllers/brandController')

const router = Router()

router.route('/')
    .post(brandController.create)
    .get(brandController.getAll)

module.exports = router