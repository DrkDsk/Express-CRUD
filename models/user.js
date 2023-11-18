const mongoose = require('mongoose')

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
            type: String
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

module.exports = mongoose.model("users", UserSchema)