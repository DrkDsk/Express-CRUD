const jsonwebtoken = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/vars')
const tokenSign = async (user) => {
    return await jsonwebtoken.sign(
        {
            _id: user._id,
            roles: user.roles
        },
        JWT_SECRET,
        {
            expiresIn: "10h"
        }
    )
}

const verifyToken = async (tokenJwt) => {
    try {
        return await jsonwebtoken.verify(tokenJwt, JWT_SECRET)
    } catch (e) {
        return null
    }
}

module.exports = {tokenSign, verifyToken}