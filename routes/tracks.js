const express = require('express')
const { getItems, getItem, createItem } = require("../controllers/tracksController");
const { validatorCreateItem } = require('../validators/tracksValidator')
const router = express.Router()

router.get("/", getItems)
router.get("/:id", getItem)
router.post('/', validatorCreateItem, createItem)

module.exports = router