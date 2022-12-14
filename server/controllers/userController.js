const ApiError = require('../errors/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const Cart = require('../models/cartModel')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h',},
    )
}



exports.userRegister = async (req, res, next) => {
    const {email, password, role} = req.body;
    if (!email || !password) {
        return next(ApiError.badRequest('Invalid email or password'))
    }
    const candidate = await User.findOne({where: {email}})
    if (candidate) {
        return next(ApiError.badRequest('user already registered'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
        const cart = await Cart.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }


exports.login = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}})
    if (!user) {
        return next(ApiError.badRequest('user not found'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
        return next(ApiError.badRequest('Password mismatch'))
    }
    const token = generateJwt(user.id, user.password, user.role);
        return res.json({token})
    }

exports.authorization = async (req, res, next) => {
    // const {id} = res.query
    const token = generateJwt(req.user.id, req.user.email, req.user.role);

    return res.json({token})
}
