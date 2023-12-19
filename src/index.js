require('dotenv').config()
const PORT = process.env.PORT || 7000;
const express = require('express');

const booksRoutes = require('./routes/books.js');
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();

// app.use("/", (req, res, next) =>{
//     res.send('hello dunia');
// })
app.use(middlewareLogRequest);
app.use(express.json());
app.use(('/assets'), express.static('public/images'))

app.use("/books", booksRoutes);
app.post('/upload',upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})


app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

// Method Spesifik
// Get


app.listen(PORT, () => {
    console.log(`Server Berhasil Running di port ${PORT}`);
});
