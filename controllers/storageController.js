const { create } = require('../repository/storageRepository')
const {PUBLIC_URL} = require('../config/vars')

const createItem = async (req, res) => {
    const {file} = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }

    const data = await create(fileData)
    res.send({data})
}

module.exports = {createItem}