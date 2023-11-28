const { allTracks, getTrack, createTrack, updateTrack, deleteTrack } = require('../repository/trackRepository')
const {handleHttpError} = require('../utils/handleError')
const {matchedData} = require("express-validator");
const getItemsController = async (req, res) => {
    try {
        const data = await allTracks()

        return res.send({data})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de obtener los items')
    }
}

const getItemController = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const item = await getTrack(id)

        res.send({data : item})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de obtener un item')
    }
}

const createItemController = async (req, res) => {
    try {
        const body = matchedData(req)
        const track = await createTrack(body)

        res.send({track})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de crear el track')
    }
}

const updateItemController = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const track = await updateTrack(id, body)

        res.send({track})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de actualizar el track')
    }
}

const deleteItemController = async (req, res) => {
    try {
        const {id} = matchedData(req)
        await deleteTrack(id)

        res.send({message: `track eliminado: ${id}`})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de eliminar el item')
    }
}


module.exports = {
    getItemsController, getItemController, createItemController, updateItemController, deleteItemController
}