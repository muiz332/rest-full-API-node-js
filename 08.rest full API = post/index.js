import express from "express"
import mongoose from "mongoose"
import route from './route/routes.js'

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/restfull')
const db = mongoose.connection
db.on('error',(err) => console.log(err))
db.once('open', () => console.log('database connected'))


/*

nah setelah kita berhasil mengambil semua data dari mongodb
kita akan menambah data menggunakan method post 
dan mengubah data menggunakan method patch

kita pergi controllers

*/



app.use(express.json())

/*

nah kita tambahkan express.json karena agar kita dapat menerima
data dari post dalam format json
nah sekarang kita akan lakukan ujicoba

*/

app.use('/product',route)

app.listen(3000,'127.0.0.1',() => {
    console.log('Server is listening on http://127.0.0.1:3000/product')
})