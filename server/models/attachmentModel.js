const sequelize = require('../config/database/db')

const {DataTypes} = require('sequelize')

const Attachment = sequelize.define('Attachment', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    originalName: {type: DataTypes.STRING, allowNull: false},
    size: {type: DataTypes.INTEGER, autoIncrement: false},
    type: {type: DataTypes.STRING, allowNull: false},
}, {
    underscored: true
})

module.exports = Attachment