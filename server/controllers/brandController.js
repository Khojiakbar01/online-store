const Brand = require('../models/brandModel')
const AppError = require('../errors/ApiError')



exports.createBrand = (async (res, req) => {
    const {name} = req.body;
    const brand = await Brand.create({name})
    return res.json(brand)
})
exports.getAllBrands = (async (res, req) => {
    const brands = await Brand.findAll()
    return res.json(brands)
})
