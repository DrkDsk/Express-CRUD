require('dotenv').config()

const port = process.env.PORT || 3000
const DB_URI = process.env.DB_URI

module.exports = {
    port,
    DB_URI
}