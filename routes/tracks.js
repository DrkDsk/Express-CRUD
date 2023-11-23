const express = require('express')
const { getItems, getItem, createItem } = require("../controllers/tracksController");
const { validatorCreateItem } = require('../validators/tracksValidator')
const router = express.Router()
const customHeaderMiddleware = require('../middlewares/customHeaderMiddleware')

router.get("/", getItems)
router.get("/:id", getItem)
router.post('/', validatorCreateItem, customHeaderMiddleware, createItem)

module.exports = router