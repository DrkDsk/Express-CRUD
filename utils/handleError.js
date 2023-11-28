const handleHttpError = (res, message = 'Ha ocurrido un error', code = 403) => {
    return res.status(code).send({error: message})
}

module.exports = {handleHttpError}