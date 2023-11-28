const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key

        if (apiKey === 'alfredo palacios') {
            return next()
        }
        return res.status(403).send({error: 'API KEY INCORRECTA'})
    } catch (e) {
        return res.status(403).send({error: 'OCURRIÓ UN PROBLEMA EN EL CUSTOM HEADER'})
    }
}

module.exports = customHeader