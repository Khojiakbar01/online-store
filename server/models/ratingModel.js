const sequelize = require('../config/database/db')

const {DataTypes} = require('sequelize')

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.STRING, allowNull: false}
}, {
    underscored: true
})

module.exports = Rating