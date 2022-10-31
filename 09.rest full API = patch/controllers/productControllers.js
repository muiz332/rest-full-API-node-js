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
        // dan disini pada post untuk insert saya akan berikan 400 artinya bad request 
        // jadi yang bermasalah itu disisi clientnya bukan servernya    
    }
}



// update


export const updateProduct = async (req,res) => {
    try{
        
        const dataProducts = await product.updateOne({_id : req.params.id}, {$set : req.body})
        res.status(200).json(dataProducts)
    }catch(err){
        res.status(400).json({msg : err.message});
        // dan disini pada post untuk insert saya akan berikan 400 artinya bad request 
        // jadi yang bermasalah itu disisi clientnya bukan servernya    
    }
}

// lalu kita export dan kita lakukan ujicoba
