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

const updateTrack = (_id, data) => {
    return tracksModel.findByIdAndUpdate(_id, data, {
        new : true,
        upsert: true
    })
}

const deleteTrack = (_id) => {
    return tracksModel.delete({_id})
}

module.exports = { allTracks, createTrack, getTrack, updateTrack, deleteTrack}