const {handleHttpError} = require("../utils/handleError");
const {verifyToken} = require('../utils/handleJwt')
const {findUser} = require("../repository/userRepository");
const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return handleHttpError(res, 'NOT_BEARER_TOKEN_PROVIDED', 401)
        }

        const token = req.headers.authorization.split(' ').pop()
        const dataToken = await verifyToken(token)
        if (!dataToken || !dataToken._id) {
            return handleHttpError(res, 'ERROR_ID_TOKEN', 401)
        }

        const user = await findUser({['_id'] : dataToken._id})
        req.user = user

        return !user ? handleHttpError(res, 'USER_NOT_EXISTS', 404) : next()
    } catch (e) {
        return handleHttpError(res, "ERROR_AT_AUTH_MIDDLEWARE")
    }
}

module.exports = authMiddleware