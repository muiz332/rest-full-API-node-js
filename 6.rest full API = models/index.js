import express from 'express'
import mongoose from "mongoose"
import router from './route/routes.js'

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/restfull')
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err)
});

/*

karena koneksinya mengembalikan promise kalian bisa 
menggunakan then dan catch


nah sekarang kita akan membuat model untuk document / data dari product kita
model itu disebut dengan schema kalo didalam database

kita buat foldernya dulu 

*/


app.use('/product',router)
app.listen(3000,'127.0.0.1',() => {
    console.log('Server is listening on http://127.0.0.1:3000/product')
})