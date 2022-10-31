// rate limit users


/*

apa itu rate limit? rate limit adalah sebuah fitur yang sangat power full dimana kita bisa membatasi request dari 
client misalnya kita bisa mengatur request yang masuk setiap 1 menit itu hanya 50 request

atau misalnya 1 hari itu cuma 1000 request bisa saja, 
lalu apa sih untungnya jika kita membatasi request?

- server tidak pernah kelebihan beban
    nah jika kita membatasi request yang masuk maka si server tidak akan menangani request yang 
    terlalu banyak, jadi server tidak akan lambat

- meningkatkan keamanan server
    jika ada yang menyepam request maka itu akan sangat mudah ditangani karena kita sudah 
    menambahkan batas maximal request yang masuk

- berbisnis
    kita bisa menggunakan rate limit pada API kita, jadi ketika seseorang menggunakan API kita secara gratis maka
    kita akan membatasi request yang masuk, dan jika sudah berlangganan maka requestnya akan ditambah atau bahkan bisa
    unlimited



penerapan rate limit

ada beberapa algoritma yang popular dan dapat kita implementasikan 
diantaranya sebagai berikut

- algoritma fiex window counter
- sliding log
- sliding window counter
- token bucket
- leaky bucket


jadi manakah diantara algoritma tersebut yang paling baik ?
sebenarnya itu tergantung kasus kalian apa ya

tapi kali ini kita akan menggunakan sliding window counter untuk menerapkan rate limit
untuk algoritma yang lain kalian bisa baca artikel ini 

https://blog.logrocket.com/rate-limiting-node-js/#what-rate-limiting

atau kalian bisa cari cari digoogle




menerapkan pada node js

nah untuk penerapannya kita bisa menggunakan library atau third party module npm 
yaitu express-rate-limit


langsung saja kita coba


*/

// import express from 'express'

// const app = express()

// app.get('/',function(req,res){
//     return res.status(200).json({msg : "oke"})
// })



// app.listen(8080,function(){
//     console.log('server is listening on port http://127.0.0.1:8080')
// })




/*

nah kalo kita jalankan maka siapa pun akan dapat mengaksesnya tanpa memperdulikan berapa
banyak request dalam waktu tertentu

nah misalkan kita ingin membatasi api kita
kita bisa gunakan express rate limit

*/



// import express from 'express'
// import rateLimit from 'express-rate-limit'


// // kita buat limitnya

// const limit = rateLimit({
//     windowMs : 10000, // 10 detik dalam milisecond
//     max : 5, // maksimal requet dalam waktu
//     message : "terlalu banyak request",
//     standardHeaders : true

// })

// const app = express()


// // kita tambahkan limit di routenya
// app.get('/',limit,function(req,res){
//     return res.status(200).json({msg : "oke"})
// })



// app.listen(8080,function(){
//     console.log('server is listening on port http://127.0.0.1:8080')
// })


/*

maka kalo kita jalankan setiap 10 detik maka server hanya akan menerima 5 request saja per client ya
jika kita lihat saat kita mengirimkan request yang belum ada rate limitnya

maka headersnya akan seperti ini



HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 13
ETag: W/"d-ZGWc97hIpunLZGYa8TRV08c3Ntk"
Date: Mon, 24 Oct 2022 05:53:40 GMT
Connection: close

{
  "msg": "oke"
}


akan tetapi saat kita membuat rate limit menggunakan express rate limit 
response headersnya akan seperti ini


HTTP/1.1 200 OK
X-Powered-By: Express
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 4
Date: Mon, 24 Oct 2022 05:55:02 GMT
X-RateLimit-Reset: 1666590911
RateLimit-Limit: 5
RateLimit-Remaining: 4
RateLimit-Reset: 9
Content-Type: application/json; charset=utf-8
Content-Length: 13
ETag: W/"d-ZGWc97hIpunLZGYa8TRV08c3Ntk"
Connection: close

{
  "msg": "oke"
}


dan saat requestnya terlalu banyak akan response headersnya akan 
seperti ini

HTTP/1.1 429 Too Many Requests
X-Powered-By: Express
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 0
Date: Mon, 24 Oct 2022 05:55:50 GMT
X-RateLimit-Reset: 1666590958
RateLimit-Limit: 5
RateLimit-Remaining: 0
RateLimit-Reset: 8
Retry-After: 10
Content-Type: text/html; charset=utf-8
Content-Length: 22
ETag: W/"16-oe23RGj5/oVywzz3isg31EfPfls"
Connection: close

nah jika kita lihat perbedaanya pada request yang belum ada rate limitnya

dan setelah ada rate limitnya maka setelah kita berikan rate limit 
akan ada key dan value baru pada headersnya 

diantaranya

X-RateLimit-Limit: 5
X-RateLimit-Remaining: 4
X-RateLimit-Reset: 1666590911
RateLimit-Limit: 5
RateLimit-Remaining: 4
RateLimit-Reset: 9

saat terlalu banyak 

X-RateLimit-Limit: 5
X-RateLimit-Remaining: 4
X-RateLimit-Reset: 1666590911
RateLimit-Limit: 5
RateLimit-Remaining: 4
RateLimit-Reset: 9
Retry-After: 10



nah jika kita bedah satu persatu penggunaan dari key dan value yang dikirimkan diheadersnya 
maka akan seperti ini


- X-RateLimit-Limit: 5, RateLimit-Limit: 5
    dua key dan value peer ini maksutnya adalah limit yang kita berikan saat request
    nah jika kita membuat setingan limit requestnya sebanyak 10 dalam waktu tertentu 
    maka value dari key tersebut akan menjadi 10 juga

    jadi dua key dan value tersebut memiliki tujuan untuk memberitahu bahwa request ini memiliki
    limit sebanyak 5 kali  dalam waktu tertentu

- X-RateLimit-Remaining: 4, RateLimit-Remaining: 4

    dua key dan value perr maksutnya adalah untuk memberitahu ke client sisa dari request kita
    dalam waktu tertentu

    jadi setiap request dalam waktu 10 detik, tiap request akan mengurangi valuenya

- RateLimit-Reset: 9,
    ini adalah hitung mundur waktu yang dibutuhkan untuk melakukan request lagi jika
    request sebelumnya sudah lebih dari 5 kali

- Retry-After: 10
    key ini bermaksut untuk memberitahu bahwa client dapat mencobanya 10 detik dari
    sekarang




jadi seperti itu penggunaan dari express rate limit
dan ini bersifat individu 

artinya artinya misalnya ada dua user yaitu user A dan user B, user A itu sudah mengirim request 
sebanyak 5 kali dan request ke 6 maka akan terbatas requestnya

nah sedangkan user B itu belum melakukan request sama sekai, jika user B melakukan request
maka request dari user B akan berhasil

jadi request akan dihitung berdasarkan rqeuest dari client yang individu



*/


import express from 'express'
import rateLimit from 'express-rate-limit'


const limit = rateLimit({
    windowMs : 10000, // 10 detik dalam milisecond
    max : 5, // maksimal requet dalam waktu
    message : "terlalu banyak request",
    standardHeaders : true

})

const app = express()


app.get('/',function(req,res){
    return res.status(200).json({msg : "oke"})
})

app.get('/tes',limit,function(req,res){
    return res.status(200).json({msg : "oke"})
})


app.listen(8080,function(){
    console.log('server is listening on port http://127.0.0.1:8080')
})




/*

jadi untuk mengatur rate limit kita tinggal berikan pada
routenya

jika ada route yang tidak ada rate limit maka dia tidak akan
ada batasan request ya


oke jadi seperti itu penggunana dari express rate limit
mudah mudahan kalian paham 

*/
