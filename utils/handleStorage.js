const multer = require('multer')

const handleStorage = multer.diskStorage({
    destination: function (req,file, cb) {
        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename: function (req, file, cb) {
        const extension = file.originalname.split(".").pop()
        const filename = `file-${Date.now()}.${extension}`
        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage: handleStorage})

module.exports = uploadMiddleware