const {matchedData} = require("express-validator");
const {encrypt, compare} = require('../utils/handlePassword')
const {createUser, findUser} = require('../repository/userRepository')
const {handleHttpError} = require("../utils/handleError");
const {tokenSign} = require('../utils/handleJwt')

const indexController = async (req, res) => {
    return res.send({success : true})
}
const loginController = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await findUser({ ['email'] : req.email }).select('password name roles email')

        if (!user) {
            return handleHttpError(res, "USER_NOT_EXISTS", 404)
        }

        const hashedPassword = user.password
        const check = await compare(req.password, hashedPassword)

        if (!check) {
            return handleHttpError(res, 'INVALID_CREDENTIALS')
        }

        user.set('password', undefined, {strict : false})

        const data = {
            token : await tokenSign(user),
            user
        }

        return res.send({data})
    } catch (e) {
        console.log(e)
        return handleHttpError(res, 'ERROR_AT_LOGIN')
    }
}

const registerController = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = {...req, password}
        const user = await findUser({ ['email'] : req.email })

        if (user) {
            return handleHttpError(res, 'USER_EXISTS', 404)
        }

        const dataUser = await createUser(body)
        dataUser.set('password', undefined, { strict : false})

        const data = {
            user : dataUser,
            token : await tokenSign(dataUser)
        }

        return res.send({success : true, message: 'Usuario creado correctamente', data})
    } catch (e) {
        return handleHttpError(res, "ERROR_AT_REGISTER")
    }
}

module.exports = {loginController, registerController, indexController}