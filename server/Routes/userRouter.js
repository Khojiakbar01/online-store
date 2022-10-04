const Router = require('express')
const router = Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/registration', userController.userRegister)

router.post('/login', userController.login)

router.get('/authorization', authMiddleware,userController.authorization)

module.exports = router