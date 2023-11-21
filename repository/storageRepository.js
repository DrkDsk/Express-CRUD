const { storagesModel} = require('..//models/index')

const create = (body) => {
    return storagesModel.create(body)
}

module.exports = { create }
