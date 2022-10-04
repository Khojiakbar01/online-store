const sequelize = require('../config/database/db')
const {DataTypes} = require('sequelize')

const Device = require('./deviceModel')

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
}, {
    underscored: true
})

Brand.hasMany(Device)
Device.belongsTo(Brand)

module.exports = Brand