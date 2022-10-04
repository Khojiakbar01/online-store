const sequelize = require('../config/database/db')
const {DataTypes} = require('sequelize')

const CartDevice = require('./cartDeviceModel')

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }
})

Cart.hasMany(CartDevice)
CartDevice.belongsTo(Cart)

module.exports =Cart