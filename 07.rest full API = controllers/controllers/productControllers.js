import product from "../models/product.js";

/*

nah disini kita ambil schema dari folder
yang sudah kita buat

nah disini kita akan membuat sebuah function yang
nantinya kita akan gunakan pada route untuk menggantikan parameter keduanya
setelah routenya

yang pertama kita bikin dulu function untuk mengambil 
semua documentnya

*/

const apa = 'muiz'
 
export const getProduct = async (req,res) => {

    // nah kita ambil datanya dari sini dan kita kirimkan dalam bentuk json
    try{
        const dataProducts = await product.find({})
        res.json(dataProducts)
    }catch(err){
        res.json({msg : err.message});
    }
}

// dan kita export dan kita gunakan pada routenya