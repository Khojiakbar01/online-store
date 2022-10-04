const Router = require('express')
const router = Router()

const deviceRouter = require('./Routes/deviceRouter')
const userRouter = require('./Routes/userRouter')
const typeRouter = require('./Routes/typeRouter')
const brandRouter = require('./Routes/brandRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router