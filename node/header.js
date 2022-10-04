/**
 * Header HTTP
 * 
 * HTTP header permintaan memberikan informasi tentang permintaan,
 * respon, atau badan transmisi lainnya
 * 
 * Pada bagian ini akan memperkenalkan header respon HTTP tertentu.
 * belajar menerima otentikasi
 */

const http = require    ("http")

const server = http.createServer((req, res)=>{

    let dataHeader, //* akan menampung object header request
    dataAutorization, //* berisi properti dari object header
    userPass, //* hasil decode base64 to string dari datauser
    splitData, //* permisah atau pembatas antara value autorization
    dataUser, //* kode dengan base64 to string
    dataRespone;

    res.setHeader("Content-Type", "application/json");

    // ini untuk mendapatkan hasil respon berupa json
    dataHeader = req.headers;

    console.log(dataHeader)

    // get data otorisasi
    dataAutorization = dataHeader.authorization;

    // jika autorization tidak terkirim maka akan menghasilkan :

    if(!dataAutorization){
        dataRespone = {
            data: "Undifined Authorization"
        };

        // send ke clint dan return agar berhenti
        return res.end(JSON.stringify(dataRespone));
    }

    splitData = dataAutorization.split(" ");

    dataUser = splitData[1];

    userPass = Buffer.from(dataUser, "base64").toString();

    // Create respon berisi nilai dan usee pass
    dataRespone = {
        token: dataHeader.authorization,
        userPass,
    }

    return res.end(JSON.stringify(dataRespone))

});

server.listen(5000)