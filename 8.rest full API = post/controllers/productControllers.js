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

// kita akan tambahkan postnya

// kalo kita export biasa itu yang dikembalikan adalah object ya 
// jadi kita bisa destructuring objectnya seperti saat dipanggil diroutenya



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

/*

nah sekarang kita bisa daftarkan diroutenya
pergi kehalaman route

*/