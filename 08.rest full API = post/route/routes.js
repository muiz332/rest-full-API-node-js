import express from 'express'
import {getProduct, postProduct} from '../controllers/productControllers.js'
const router = express.Router()



router.get('/',getProduct)
router.post('/',postProduct)

// kita tuliskan seperti itu

/*

akan tetapi agar datanya dapat kita tangkap dari postnya
kita akan menggunakan middleware express.json() sebelum middleware
routenya pada index.js

*/

export default router;