require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database/db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./Routes/index')
const errorHandler = require('./middlewares/ErrorHandler')
const PORT = process.env.PORT || 5000
const path = require('path');


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)



app.use(errorHandler)




const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started at ${PORT}`);
        })
    }catch (err) {
        console.log(err)
    }

}

start();

