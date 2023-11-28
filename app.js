const express = require('express')
const app = express()
const cors = require('cors')
const dbConnect = require('./config/mongo')
const { port, STATIC_PATH } = require('./config/vars')
const router = require('./routes')
const morganBody = require('morgan-body')
const loggerStream = require('./utils/handleLogger')

app.use(cors())
app.use(express.json())
app.use(express.static(STATIC_PATH))

morganBody(app, {
    noColors : true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400
    }
})

app.use('/api', router)

app.listen(port, () => {
    console.log(`listening in port ${port}`)
})

dbConnect()

