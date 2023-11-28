const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const { getItemsController, getItemController, createItemController, deleteItemController } = require('../controllers/storageController')
const {validatorGetItem} = require('../validators/storageValidator')

router.get('/', getItemsController)
router.get("/:id", validatorGetItem,  getItemController)
router.post("/", uploadMiddleware.single('myFile'), createItemController)
router.delete('/:id', validatorGetItem, deleteItemController)

module.exports = router