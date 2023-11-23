const { storagesModel} = require('..//models/index')

const getStorages = () => {
    return storagesModel.find({})
}

const getStorage = (_id) => {
    return storagesModel.findById(_id)
}

const createStorage = (body) => {
    return storagesModel.create(body)
}

const deleteStorage = (_id) => {
    return storagesModel.delete({_id})
}

module.exports = { getStorages, getStorage, createStorage, deleteStorage }
