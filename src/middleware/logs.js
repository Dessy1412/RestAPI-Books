// Sebuah fungsi yang dapat mengakses req atau res atau penghubung untuk req (bisa dilakukan pengecekan seperti token dll)

const logRequest = (req, res, next) => {
    console.log('Terjadi request ke path:', req.path);
    next();
}

module.exports = logRequest;