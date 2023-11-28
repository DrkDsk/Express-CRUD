const { getStorages, getStorage, deleteStorage, createStorage,  } = require('../repository/storageRepository')
const {PUBLIC_URL, MEDIA_PATH} = require('../config/vars')
const {handleHttpError} = require("../utils/handleError");
const {matchedData} = require("express-validator");
const {unlinkSync} = require("fs");

const getItemsController = async (req, res) => {
    try {
        const data = await getStorages()

        return res.send({data})
    } catch (e) {
        return handleHttpError(res, "Ha ocurrido un error al obtener la lista de recursos")
    }
}

const getItemController = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await getStorage(id)

        return res.send({data})
    }catch (e) {
        return handleHttpError(res, "Ha ocurrido un error al obtener el recurso")
    }
}
const createItemController = async (req, res) => {
    try {
        const {file} = req
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }

        const data = await createStorage(fileData)
        return res.send({data})
    } catch (e) {
        return handleHttpError(res, 'Ha ocurrido un error al guardar el recurso')
    }
}

const deleteItemController = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await getStorage(id)

        if (!data) {
            return handleHttpError(res, `No se encuentra el storage con el id: ${id}`, 404)
        }

        const { filename } = data
        const filePath = `${MEDIA_PATH}/${filename}`
        try {
            unlinkSync(filePath)
        } catch (e) {}

        await deleteStorage(id)

        return res.send({message: `recurso eliminado: ${id}`})
    } catch (e) {
        return handleHttpError(res, 'Ha ocurrido un error al momento de eliminar el item')
    }
}

module.exports = {getItemsController, getItemController, createItemController, deleteItemController}