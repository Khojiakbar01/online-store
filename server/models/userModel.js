const sequelize = require('../config/database/db')
const {DataTypes} = require('sequelize')

const Cart = require('./cartModel')
const Rating = require('./ratingModel')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'USER',
    }
}, {
    underscored: true
})

User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

module.exports =User