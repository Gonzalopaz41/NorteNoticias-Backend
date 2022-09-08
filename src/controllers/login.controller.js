const user = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
let match;

const postLogin = async (req,res) =>{
    const {email,password} = req.body
    const searchEmail = await user.findOne({email})
    
    if(searchEmail){
    match = bcrypt.compareSync (password,searchEmail.password)}
    
        try{
        if (match){
            const payload = {
                id: searchEmail._id,
                email:searchEmail.email
            }
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn: '7d'
            })
            res.status(200).json({msg:"Usuario logueado", token})
    }
    else{
        const error = new Error ("verifica los datos");
        return res.status(404).json({msg:error.message});
    }

    } catch(error){
        res.status(406).json({msg:"verifica los datos",error})
    }
}
    


module.exports={postLogin}