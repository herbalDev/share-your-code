/**
 * CORE MODUL : http
 * 
 * Membuat server menggunakan module http
 */

const http = require('http')

const server = http.createServer((req, res)=>{

    //* inisialisasi variable yang akan digunakan
    let data;

    console.log(req);

    /**
     * object request itu banyak, tapi yang sering dipakai itu cuma 3 yaitu:
     * • url
     * • method
     * • headers
     */

    // create object yang berisi url, method dan header

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    // ini akan mengubah set respone menjadi berupa data json
    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))

});

server.listen(3000)