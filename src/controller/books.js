// sebuah fungsi yang digunakan pada setiap routes (fungsi2 dalam routes)
const BooksModel = require('../models/books.js');

// READ
const getAllBooks = async (req, res) => {
    try{
        const [data] = await BooksModel.getAllBooks();
        res.json({
            message: "GET all Books success",
            data: data
        });
    }catch(error){
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
};

// CREATE
const createNewBooks = async (req, res) => {
    const {body} = req;

    if(!body.isbn || !body.title || !body.namapenulis || !body.penerbit || !body.tahunterbit || !body.stockbuku || !body.kategori || !body.deskripsibuku || !body.cover){
        return res.status(400).json({
            message: 'Pengiriman data yang salah',
            data: null,
        })
    }
    try {
        await BooksModel.createNewBooks(body);
        res.status(201).json({
            message: 'CREATE NEW Books success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
};

// UPDATE
const updateBooks = async (req, res) => {
    const { idbooks } = req.params;
    const {body} =req;
    try {
        await BooksModel.updateBooks(body, idbooks);
        res.json({
            message: "UPDATE books success",
            data: {
                id: idbooks,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
    
};

// DELETE
const deleteBooks = async (req, res) => {
    const { idbooks } = req.params;
    try {
        await BooksModel.deleteBooks(idbooks);
        res.json({
            message: "DELETE books success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
    
};

module.exports = {
    getAllBooks,
    createNewBooks,
    updateBooks,
    deleteBooks,
};
