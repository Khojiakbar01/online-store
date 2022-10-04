const sequelize = require('../config/database/db')
const {DataTypes} = require('sequelize')

const Device = require('./deviceModel')
const Brand = require('./brandModel')
const TypeBrand = require('./typeBrandModel')

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
}, {
    underscored: true
})

Type.hasMany(Device)
Device.belongsTo(Type)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = Type