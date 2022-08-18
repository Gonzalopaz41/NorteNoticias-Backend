const express = require ('express');
const app = express();
require ('dotenv/config');
const PORT = process.env.PORT;
const cors = require('cors')


app.use(cors())

app.use(express.json());

app.listen (PORT, ()=>{
    console.log (`se esta escuchando el puerto ${PORT}`)
})