const sequelize = require('../config/database/db')

const {DataTypes} = require('sequelize')

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

}, {
    underscored: true
})

module.exports = TypeBrand