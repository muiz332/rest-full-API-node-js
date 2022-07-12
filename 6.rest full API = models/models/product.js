import mongoose from "mongoose"

/*

nah disini kita akan mebuat schemanya dari collection product

*/

const schemaProduct = mongoose.Schema({
    nama : {
        type : String,
        required : true
    },
    harga : {
        type : Number,
        required : true
    }
})

const product = mongoose.model('products',schemaProduct)

// setelah kita buat schemanya langsung kita export saja

export default product


/*

nah nanti product ini lah yang akan kita gunakan untuk
memanipulasi data dari mongodb

*/