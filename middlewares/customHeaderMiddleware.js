const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key

        if (apiKey === 'alfredo palacios') {
            return next()
        }
        res.status(403).send({error: 'API KEY INCORRECTA'})
    } catch (e) {
        res.status(403).send({error: 'OCURRIÓ UN PROBLEMA EN EL CUSTOM HEADER'})
    }
}

module.exports = customHeader