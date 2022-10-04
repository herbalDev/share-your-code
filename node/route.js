/**
 * Routing
 */

 const http = require('http')

 const server = http.createServer((req, res) => {
     let url, dataResponse
 
     res.setHeader("Content-Type", "application/json");
     url = req.url
 
     if(url === "/"){
         dataResponse = {
             data: "Ini Adalah Halaman Home Page"
         }
     }else if (url === "/login"){
         dataResponse ={
             data: "Inid Adahlah Halaman Login"
         }
     }else if (url === "/register"){
         dataResponse={
             data:"ini adalah halaman register"
         }
     }else {
         dataResponse = {
             data: "TIDAK ADA PAGE YANG DI TEEMUKAN {404, NOT FOUND}"
         }
     }
 
     return res.end(JSON.stringify(dataResponse));
 })
 server.listen(3000);