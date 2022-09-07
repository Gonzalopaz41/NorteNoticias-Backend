const mongoose = require('mongoose')
require ('dotenv').config();

mongoose.connect(process.env.DB_URL_CONNECTION)
.then(()=>{
    console.log("conexion exitosa DB")
})
.catch(()=>{
    console.log("no estas conectado a la DB")
})