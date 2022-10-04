const sequelize = require('../config/database/db')

const {DataTypes} = require('sequelize')

const CartDevice = sequelize.define('cart_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}, {
    underscored: true
})
module.exports = CartDevice