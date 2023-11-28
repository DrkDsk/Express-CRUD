const { usersModel} = require('../models/')

const findUser = (query) => {
    return usersModel.findOne(query)
}

const createUser = (data) => {
    return usersModel.create(data)
}

module.exports = {createUser, findUser}