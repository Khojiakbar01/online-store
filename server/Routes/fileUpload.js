const upload = require('../middlewares/fileUpload')
const express = require('express')


const attachmentController = require('../controllers/attachmentController')
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router()

router.post("/",upload.single("avatar"), attachmentController.uploader)

module.exports = router;