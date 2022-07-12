import express from "express"
import mongoose from "mongoose"
import route from './route/routes.js'
import cors from 'cors'

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/restfull')
const db = mongoose.connection
db.on('error',(err) => console.log(err))
db.once('open', () => console.log('database connected'))

/*

nah terakhir saya akan install cors atau cros origin resource sharing
agar API kita dapat diakses diluar domain

dan kita juga dapat memfilter 
untuk lebih lengkapnya kalian bisa baca disini

https://teziger.blogspot.com/2019/07/cors-policy-nodejs-express.html

untuk menginstallnya kalian tinggal tuliskan 
npm i cors

dan kita import
lalu kita gunakan sebagai middleware

kalian bisa pastikan pada testing restnya
kalo berhasil itu artinya aplikasi kita sudah berjalan dengan baik 

jadi sampai disini materi kita untuk membuat restfull API
menggunakan node js express dan mongodb

mudah mudahan kalian paham

*/

app.use(cors())
app.use(express.json())
app.use('/product',route)

app.listen(3000,'127.0.0.1',() => {
    console.log('Server is listening on http://127.0.0.1:3000/product')
})