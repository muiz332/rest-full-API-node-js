import express from 'express'
import {getProduct} from '../controllers/productControllers.js'
const router = express.Router()


/*

nah kita import getProductnya disini dan 
kita panggil pada parameter keduanya si get

dan usahakan kalian isi dulu minimal 1 document
pada collection productsnya 

lalu coba kalian tes 
maka dia akan memgembalikan documents dari mongodbnya
berupa data product

*/


router.get('/',getProduct)
router.post('/',(req,res) => {
    res.send('request method post')
})

export default router;