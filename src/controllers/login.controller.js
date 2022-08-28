const user = require('../models/users')
const bcrypt = require('bcrypt')


const postLogin = async (req,res) =>{
    const {email,password} = req.body

    const searchEmail = await user.findOne({email})
    if(searchEmail){
    const match = bcrypt.compareSync (password,searchEmail.password)
    if (match){
        res.status(200).json("usuario logueado")
        res.json({token: generateJWT()})
    } else{
        res.status(401).json("verifica los datos")
    }
    }else{
        return res.status(404).json("verifica los datos")
    }
    
    
}

module.exports={postLogin}