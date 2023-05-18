const express = require('express')
const router = express.Router()
const BookController = require('../controller/Book')

router.get('/', BookController.getAllBook)
router.get('/:id', BookController.getOneBookById)
router.post('/creaete', BookController.addNewBook)
router.put('/update/:id', BookController.updateBook)
router.delete('/delete/:id', BookController.deletebook)