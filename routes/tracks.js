const express = require('express')
const {
    getItemsController,
    getItemController,
    createItemController,
    updateItemController,
    deleteItemController
} = require("../controllers/tracksController");
const {validatorCreateItem, validatorGetItem} = require('../validators/tracksValidator')
const router = express.Router()
const customHeaderMiddleware = require('../middlewares/customHeaderMiddleware')

router.get("/", getItemsController)
router.get("/:id", validatorGetItem, getItemController)
router.post('/', validatorCreateItem, createItemController)
router.put('/:id', validatorGetItem, validatorCreateItem, updateItemController)
router.delete('/:id', validatorGetItem, deleteItemController)

module.exports = router