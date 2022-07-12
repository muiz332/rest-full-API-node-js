import product from "../models/product.js";

export const getProduct = async (req,res) => {

    try{
        const dataProducts = await product.find({})
        res.json(dataProducts)
    }catch(err){
        res.status(500).json({msg : err.message});
        // kita juga berikan status codenya 500 artinya server bermasalah
    }
}




export const postProduct = async (req,res) => {
    const document = new product(req.body)
    try{
        const dataProducts = await document.save()
        res.status(201).json(dataProducts)
        // dan disini saya berikan 201 artinya created
    }catch(err){
        res.status(400).json({msg : err.message});
    }
}




export const updateProduct = async (req,res) => {

    /*
    
    nah saya tambahkan validasi untuk updatenya
    ada atau tidak datanya didalam database
    
    */
   const data = await product.findById(req.params.id)

   if(!data){
       res.status(404).json({msg : "data tidak ditemukan"})
   }else{
        try{
            
            const dataProducts = await product.updateOne({_id : req.params.id}, {$set : req.body})
            res.status(200).json(dataProducts)
        }catch(err){
            res.status(400).json({msg : err.message});
        }
   }
}


export const getSingleProduct = async (req,res) => {

    try{
        const dataProducts = await product.findById(req.params.id)
        res.json(dataProducts)
    }catch(err){
        res.status(404).json({msg : err.message});
        // code statusnya 404
    }
}


export const deleteProduct = async (req,res) => {
    // dan disini kita check juga datanya atau atau tidak
    const dataDel = await product.findById(req.params.id)
    if(!dataDel){
        res.status(404).json({msg : "data tidak ditemukan"})
    }else{
        try{
            const del = await product.deleteOne({_id : req.params.id})
            res.status(200).json(del)
        }catch(err){
            res.status(400).json({msg : err.message})
        }
    }
}