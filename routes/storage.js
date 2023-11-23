const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const { getItems, getItem, createItem, deleteItem } = require('../controllers/storageController')
const {validatorGetItem} = require('../validators/storageValidator')

router.get('/', getItems)
router.get("/:id", validatorGetItem,  getItem)
router.post("/", uploadMiddleware.single('myFile'), createItem)
router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router