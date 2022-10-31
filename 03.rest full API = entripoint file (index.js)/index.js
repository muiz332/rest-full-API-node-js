/*

nah disini kita siapkan dulu file entripoint kita
dan module module yang kita perlukan nanti


kita panggil dulu expressnya

*/

// const express = require('express')

/*

nah kalo kalian memanggil express dengan cara seperti ini
kalian bisa lihat direquirenya itu ada titik 3 

kalo kita sorot requirenya itu katanya dia file ini adalah 
file command js dan sebaiknya kita convert ke ES6 module

nah kita sebaiknya kalo memanggil menggunakan ES6 module
contohnya seperti ini

import express from "express"

nah untuk dapat menggunakan sintax seperti  ini 
kita harus beritahu nodenya dulu kalo kita ingin menggunakan 
sintax ES6 module bukan command js module


caranya pergi ke file package.json
dan kita tambahkan type nya dengan valuenya itu adalah module

nah baru kita dapat menggunakan ES6 sintaxnya


*/


import express from "express";

const app = express()

app.get('/',(req,res) => {
    res.send('oke')
})

app.listen(3000,'127.0.0.1',() => {
    console.log('server is listen on http://127.0.0.1:3000')
})


/*

kalo kita jalankan sudah berhasil ya
jadi seperti itu kalo kita ingin menggunakan 
ES6 sintaxt


*/