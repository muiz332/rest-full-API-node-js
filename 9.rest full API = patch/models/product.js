import mongoose from "mongoose";

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
export default product