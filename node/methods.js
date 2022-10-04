/**
 * Routing dengan methods
 */

 const http = require('http')

 const server = http.createServer((req, res) => {
     let url, //url berisi path url di request
         method,  //method berisi jenis method pada request, nilai defaultnya get
         dataResponse //dataResponse berisi data yang akan dikirimkan kepada klien
 
     res.setHeader("Content-Type", "application/json");
 
     url = req.url
 
     // jika method tidak ada isi , maka isi dengan method get
     method = req.method ?? "get"
 
     if (url === "/") {
         dataResponse = {
             data: " Ini adalah Halaman Homepage"
         }
     } else if (url === "/Login") {
         //akses untuk method post
         if (method === "POST") {
             dataResponse = {
                 data: " Anda Berhasil Login Dengan Menggunakan Method Post"
             }
         } else {
             dataResponse = {
                 data: `Maaf coba kemabli dengan kembali mengubah Method ${method}, menjadi POST`
             }
         }
     } else {
         dataResponse = {
             data: "Halaman Tidak Ditemukan",
         };
     }
 
     return res.end(JSON.stringify(dataResponse));
 })
 
 server.listen(4500);