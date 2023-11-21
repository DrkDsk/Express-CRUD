const { allTracks, getTrack, createTrack} = require('../repository/tracksRepository')

const getItems = async (req, res) => {
    const data = await allTracks()

    res.send({data})
}

const getItem = async (req, res) => {
    const item = await getTrack(req.id)

    res.send(item)
}

const createItem = async (req, res) => {
    const {body} = req
    const track = await createTrack(body)

    res.send(track)
}

const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}


module.exports = {
    getItems, getItem, createItem, updateItem, deleteItem
}