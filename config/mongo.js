const mongoose = require('mongoose')
const {DB_URI} = require('./vars')

const dbConnect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((success) => {
        console.log('***** CONEXIÓN SATISFACTORIA')
    }).catch((error) => {
        console.log(error)
        console.log('***** CONEXIÓN ERRONEA')
    })
}

module.exports = dbConnect