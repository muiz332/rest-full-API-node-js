import express from 'express'
import {getProduct, postProduct,updateProduct,getSingleProduct,deleteProduct} from '../controllers/productControllers.js'
const router = express.Router()



router.get('/',getProduct)
router.get('/:id',getSingleProduct)
router.post('/',postProduct)
router.patch('/:id',updateProduct)
router.delete('/:id',deleteProduct)


export default router;