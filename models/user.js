const mongoose = require('mongoose')
const mongoooseDelete = require("mongoose-delete");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            select: false
        },
        roles:{
            type: ["user", "admin"],
            default: ["user"]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
UserSchema.plugin(mongoooseDelete, { overrideMethods : 'all' })
module.exports = mongoose.model("users", UserSchema)