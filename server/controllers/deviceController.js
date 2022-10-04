const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../errors/ApiError')


exports.create = async (req, res, next) => {
    try {
        let {name, price, brandId, typeId, info} = req.body;
        // const {img} = req.files
        // let fileName = uuid.v4() + ".jpg"
        // img.mv(path.resolve(__dirname, '..', 'static', fileName));

        if (info) {
            info = JSON.parse(info)
            info.forEach(i => {
                DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                })
            })
        }
        const device = await Device.create({name, price, brandId, typeId})

        res.json(device)
    } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }

exports.getAll = async (req, res) => {
    let {brandId, typeId, limit, page} = req.query;
    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit


    let device;
    if (!brandId && !typeId) {
        device = await Device.findAndCountAll({limit, offset})
    }
    if (brandId && !typeId) {
        device = await Device.findAndCountAll({
            where: {brandId}, limit, offset
        })
    }
    if (!brandId && typeId) {
        device = await Device.findAndCountAll({
            where: {typeId}, limit, offset
        })
    }
    if (brandId && typeId) {
        device = await Device.findAndCountAll({
            where: {brandId, typeId}, limit, offset
        })
    }
    return res.json(device)
}

exports.getOne = async (req, res) => {
    const {id} = req.params;
    const device = await Device.findOne({
        where: {id},
        include: [{model: DeviceInfo, as: 'info'}]
    })
    return res.json(device)
}