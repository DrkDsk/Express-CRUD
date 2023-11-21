const { tracksModel} = require('../models/')

const allTracks = () => {
    return tracksModel.find({});
}

const createTrack = (body) => {
    return tracksModel.create(body)
}

const getTrack = (_id) => {
    return tracksModel.findById(_id)
}

module.exports = { allTracks, createTrack, getTrack }