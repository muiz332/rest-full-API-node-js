import express from 'express'
import mongoose from 'mongoose'

const app = express()


/*

nah disini kita akan melakukan koneksi kedatabase mongodb ya


*/  

mongoose.connect('mongodb://127.0.0.1:27017/restfull')

const db = mongoose.connection
db.on('error',(err) => console.log(err))
db.once('open',() => console.log('database connected'))

/*

kalo kita jalankan maka yang tampil adalah 
database connected

*/







app.get('/',(req,res) => {
    res.send('oke')
})


app.listen(3000,'127.0.0.1',() => {
    console.log('Server is listening on http://127.0.0.1:3000')
})