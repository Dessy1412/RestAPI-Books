// Digunakan untuk menyimpan fungsi2 call ke database 
const dbPool = require('../config/database.js');


// GET 
const getAllBooks = () =>{
    const SQLQuery = 'SELECT * FROM books';
    
    return dbPool.execute(SQLQuery);
}


// POST
const createNewBooks = (body) =>{
    const SQLQuery = `INSERT INTO books (isbn, title, namapenulis, penerbit, tahunterbit, stockbuku, kategori, deskripsibuku, cover) 
                        VALUES ('${body.isbn}', '${body.title}', '${body.namapenulis}', '${body.penerbit}', '${body.tahunterbit}', '${body.stockbuku}', '${body.kategori}', '${body.deskripsibuku}', '${body.cover}')`;

    return dbPool.execute(SQLQuery);
}


//UPDATE
const updateBooks = (body, idbooks) => {
    const SQLQuery = ` UPDATE books 
                        SET isbn='${body.isbn}', title='${body.title}', namapenulis='${body.namapenulis}', penerbit='${body.penerbit}', tahunterbit='${body.tahunterbit}', stockbuku='${body.stockbuku}', kategori='${body.kategori}', deskripsibuku='${body.deskripsibuku}', cover='${body.cover}'
                        WHERE idbooks=${idbooks}`;

    return dbPool.execute(SQLQuery);
} 


// DELETE
const deleteBooks = (idbooks) =>{
    const SQLQuery = `DELETE FROM books WHERE idbooks=${idbooks}`;

    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllBooks,
    createNewBooks,
    updateBooks,
    deleteBooks
}

