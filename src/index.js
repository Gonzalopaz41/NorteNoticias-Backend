const express = require ('express');
const app = express();
require ('dotenv/config');
const PORT = process.env.PORT;
const cors = require('cors')
app.use(cors())
app.use(express.json());

require('./dataBase/connection')
const adminRoute = require ('./routes/admin.route')
const loginRoute = require('./routes/login.route')
const registerRoute = require ('./routes/register.route')


app.use ('/admin',adminRoute)
app.use('/login',loginRoute)
app.use ('/register', registerRoute)
app.listen (PORT, ()=>{
    console.log (`se esta escuchando el puerto ${PORT}`)
})