const mongoose = require('mongoose')
const mongoooseDelete = require('mongoose-delete')

const TrackSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        album: {
            type: String
        },
        cover: {
            type: String,
            validator: (req) => {
                return true
            },
            message: "ERROR_URL"
        },
        artist: {
            name: {
                type: String
            },
            nickname: {
                type: String
            },
            nationality: {
                type: String
            }
        },
        duration: {
            start: {
                type: Number
            },
            end: {
                type: Number
            }
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

TrackSchema.plugin(mongoooseDelete, { overrideMethods : 'all' })
module.exports = mongoose.model("tracks", TrackSchema)