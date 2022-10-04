const {extname} = require('path')
const multer = require('multer')
const uuid = require('uuid');

const storage = multer.diskStorage({
    destination: "./static/uploads",
    filename: (req, file, cb) => {
        const filename = uuid.v4() + extname(file.originalname)
        cb(null, filename)
    }
})

const upload = multer({storage})

module.exports = upload