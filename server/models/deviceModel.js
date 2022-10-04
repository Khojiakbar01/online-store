const sequelize = require('../config/database/db')
const {DataTypes} = require('sequelize')

const Rating = require('./ratingModel')
const CartDevice = require('./cartDeviceModel')
const DeviceInfo = require('./deviceInfoModel')


const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.STRING, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
}, {
    underscored: true
})

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(CartDevice)
CartDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

module.exports = Device