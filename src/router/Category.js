const express = require('express')
const router = express.Router()
const CategoryController = require('../controller/Category')

router.get('/', CategoryController.getAllCategory)
router.post('/create', CategoryController.createNewCategory)

module.exports = router