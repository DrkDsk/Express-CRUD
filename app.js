const express = require('express')
const app = express()
const cors = require('cors')
const dbConnect = require('./config/mongo')
const { port } = require('./config/vars')

app.use(cors())
app.listen(port, () => {
    console.log(`listening in port ${port}`)
})

dbConnect()

