const { allTracks, getTrack, createTrack, updateTrack, deleteTrack } = require('../repository/tracksRepository')
const {handleHttpError} = require('../utils/handleError')
const {matchedData} = require("express-validator");
const getItems = async (req, res) => {
    try {
        const data = await allTracks()

        res.send({data})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de obtener los items')
    }
}

const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const item = await getTrack(id)

        res.send(item)
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de obtener un item')
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const track = await createTrack(body)

        res.send({track})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de crear el track')
    }
}

const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const track = await updateTrack(id, body)

        res.send({track})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de actualizar el track')
    }
}

const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        await deleteTrack(id)

        res.send({message: `track eliminado: ${id}`})
    } catch (e) {
        handleHttpError(res, 'Ha ocurrido un error al momento de eliminar el item')
    }
}


module.exports = {
    getItems, getItem, createItem, updateItem, deleteItem
}