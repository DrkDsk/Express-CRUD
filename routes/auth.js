const express = require('express')
const router = express.Router()
const {indexController, loginController, registerController} = require('../controllers/authController')
const {validatorLoginItem, validatorRegisterItem} = require('../validators/authValidator')
const authMiddleware = require('../middlewares/sessionMiddleware')

router.get("/", authMiddleware, indexController)
router.post("/login", validatorLoginItem, loginController)
router.post("/register", validatorRegisterItem, registerController)

module.exports = router