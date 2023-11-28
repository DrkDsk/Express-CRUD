const {handleHttpError} = require("../utils/handleError");

/*
** Este método verifica que al menos un rol del usuario
* coincida con el array de roles proporcionado en la ruta
 */
const checkRoleMiddleware = (roles) => (req, res, next) => {
    try {
        const {user} = req
        const rolesByUser = user.roles

        const checkValueRole = roles.some((rolSingle) => rolesByUser.includes(rolSingle))
        if (!checkValueRole) {
            return  handleHttpError(res, "USER_NOT_PERMISSIONS", 403)
        }

        return next()
    } catch (e) {
        return handleHttpError(res, "Ha ocurrido un error", 403)
    }
}

module.exports = checkRoleMiddleware