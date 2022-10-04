const Router = require('express')
const brandController = require('../controllers/brandController')

const router = Router()

router.route('/')
    .post(brandController.createBrand)
    .get(brandController.getAllBrands)

module.exports = router