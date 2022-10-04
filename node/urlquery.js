/**
 * URL Query String
 * 
 * pasangan antar key - value yang ada di URL
 * 
 * contoh: url google.com
 * 
 * awal = https:/www.google.com/
 * ketika searching = https:/www.google.com/search?q=rumaysho
 * 
 * tanda tanya (?) adalah pemisah antara url dengan query
 * 
 * dalam kasus ini,
 * q = key
 * rumaysho = value
 * 
 * fungsi query disini adalah untuk mengirim data ke server dengan method GET
 * 
 */

 const http = require('http')
 const querystring = require('querystring')
 const url = require('url')
 
 const server = http.createServer((req, res) => {
     let urlRequest, // berisi path url di request
         urlObject, // berisi url yang sudah di proses
         urlQuery, // berisi object dari query
         dataResponsive // oject query
 
     res.setHeader("Content-Type", "application-json")
 
     urlRequest = req.url
     //ubah string urlRequestnya jadi bentuk object URL
 
     urlObject = url.parse(urlRequest)
     urlQuery = urlObject.query
 
     console.log(urlObject)
 
     if (!urlQuery) {
         dataResponsive = {
             data: 'Query string not found'
         }
         return res.end(JSON.stringify(dataResponsive))
     }
 
     //kirim responnya dari hasil parsing urlQuery
     dataResponsive = querystring.parse(urlQuery)
     return res.end(JSON.stringify(dataResponsive))
 })
 
 server.listen(5003)