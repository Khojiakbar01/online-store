const sequelize = require('../config/database/db')

const {DataTypes} = require('sequelize')

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
}, {
    underscored: true
})


module.exports = DeviceInfo