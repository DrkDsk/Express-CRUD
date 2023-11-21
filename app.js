const express = require('express')
const app = express()
const cors = require('cors')
const dbConnect = require('./config/mongo')
const { port, STATIC_PATH } = require('./config/vars')
const router = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.static(STATIC_PATH))

app.use('/api', router)
app.listen(port, () => {
    console.log(`listening in port ${port}`)
})

dbConnect()

