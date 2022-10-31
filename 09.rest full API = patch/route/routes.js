import express from 'express'
import {getProduct, postProduct,updateProduct} from '../controllers/productControllers.js'
const router = express.Router()



router.get('/',getProduct)
router.post('/',postProduct)

// kita tambahkan request method patch ya
router.patch('/:id',updateProduct)


export default router;