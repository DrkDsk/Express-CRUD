const mongoose = require('mongoose')
const mongoooseDelete = require("mongoose-delete");

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
StorageSchema.plugin(mongoooseDelete, { overrideMethods : 'all' })
module.exports = mongoose.model("storages", StorageSchema)