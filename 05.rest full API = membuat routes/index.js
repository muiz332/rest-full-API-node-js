import express from "express"
import mongoose from "mongoose"
import route from './route/routes.js'


const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/restfull')
const db = mongoose.connection;
db.on('error',(err) => console.log(err))
db.once('open',() => console.log('database connected'))

/*

nah kali ini kita akan membuat route atau url
tapi disini saya akan bentuk sebagai middleware dengan menggunakan 
express route

jadi tidak seperti sebelumnya yang langsung 
menuliskan methodnya apa lalu urlnya apa

untuk lebih jelasnya kita coba saja
kita buat folder baru yang namanya routes



*/




/*

setelah kita export kita panggil kehalaman ini
dan kita gunakan

caranya kalian tinggal tuliskan seperti init

*/

app.use('/product',route)

/*

nah maka misalnya saya kasih product agar nanti 
tau bahwa urlnya ini akan menampilkan semua product

kalo kalian ingin melihat hasilnya jangan lupa 
dikasih /product

karena dia berjalan diproduct

*/


app.listen(3000,'127.0.0.1',() => {
    console.log("Server is listenning on http://127.0.0.1:3000/product")
})


/*

nah untuk melakukan pengujian kalian bisa menggunakan postman
tapi untuk materi kali ini kita akan menggunakan extention
yang namanya rest client

setelah itu kita membuat file yang memiliki extensi .rest
nah file ini hanya berfungsi untuk menguji web service kita 

setelah semuanya berjalan dengan lancar 
kalian bisa menghapus file ini 


*/