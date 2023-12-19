// Pada folder routes - digunakan untuk mengumpulkan file2 yang memiliki fungsi user ( path )

const express = require("express");
const BooksController = require("../controller/books.js");

const router = express.Router();

// CREATE - POST
router.post('/', BooksController.createNewBooks);

// READ - GET
router.get('/', BooksController.getAllBooks);

//UPDATE - PATCH 
router.patch('/:idbooks', BooksController.updateBooks);

// DELETE - DELETE
router.delete('/:idbooks', BooksController.deleteBooks);

module.exports = router;
