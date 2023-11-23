require('dotenv').config()

const port = process.env.PORT || 3000
const DB_URI = process.env.DB_URI
const STATIC_PATH = process.env.STATIC_PATH
const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

module.exports = {
    port,
    DB_URI,
    STATIC_PATH,
    PUBLIC_URL,
    MEDIA_PATH
}