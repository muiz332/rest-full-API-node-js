import express from 'express'
const router = express.Router()


router.get('/',(req,res) => {
    res.send('request method get')
})
router.post('/',(req,res) => {
    res.send('request method post')
})

export default router