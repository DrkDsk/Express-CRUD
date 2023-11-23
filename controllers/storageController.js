const { getStorages, getStorage, deleteStorage, createStorage,  } = require('../repository/storageRepository')
const {PUBLIC_URL} = require('../config/vars')
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");

const getItems = async (req, res) => {
    try {
        const data = await getStorages()

        res.send({data})
    } catch (e) {
        handleHttpError(res, "Ha ocurrido un error al obtener la lista de recursos")
    }
}

const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await getStorage(id)

        res.send({data})
    }catch (e) {
        handleHttpError(res, "Ha ocurrido un error al obtener el recurso")
    }
}
const createItem = async (req, res) => {
    try {
        const {file} = req
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }

        const data = await createStorage(fileData)
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al guardar el recurso')
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        await deleteStorage(id)

        res.send({message: `recurso eliminado: ${id}`})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de eliminar el item')
    }
}

module.exports = {getItems, getItem, createItem, deleteItem}