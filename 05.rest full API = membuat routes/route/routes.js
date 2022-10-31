import express from "express";
const router = express.Router()


router.get('/',(req,res) => {
    res.send('router dengan request method get')
})
router.post('/',(req,res) => {
    res.send('router dengan requst method post')
})



// agar dapat kita gunakan pada file index kita export dulu

export default router;