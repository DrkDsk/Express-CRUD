const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracksController");
const { validatorCreateItem, validatorGetItem } = require('../validators/tracksValidator')
const router = express.Router()
const customHeaderMiddleware = require('../middlewares/customHeaderMiddleware')

router.get("/", getItems)
router.get("/:id", validatorGetItem, getItem)
router.post('/', validatorCreateItem, createItem)
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router