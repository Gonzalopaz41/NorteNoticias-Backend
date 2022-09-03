//const { validationResult } = require('express-validator');
const User= require('../models/users')
const bcrypt = require('bcrypt')

const getUsers= async (req,res)=>{
    try{
        const result = await User.find()
        res.status(200).json(result)

    } catch(error){
        res.status(400).json(error)

    }

}

const postRegister = async (req,res)=>{
    const {name, surname, email, password} = req.body
    //const {email} = req.body;
    const userExist = await User.findOne({email});

    if(userExist){
        const error = new Error ("usuario ya registrado");
        return res.status(400).json({msg:error.message});

    }

    // const errors = validationResult(req)
    //     if (!errors.isEmpty()){
    //         //const valores = req.body
    //         const errores = errors.array()
    //         return res.send({errores:errores})
    //     } 
        
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    
    
    try {
        const user = new User({
            name,surname, email, password
            /*name:req.body.name,
            surname:req.body.surname,
            email:req.body.email,
            password:req.body.password,*/

        })

        const salt = bcrypt.genSaltSync(10)
        user.password = bcrypt.hashSync(password,salt)

       const newUser =await user.save()
       res.status(201).json({msg:"usuario creado",newUser})
    } catch (error) {
        res.status(404).json(error)
        
    }

}

module.exports={postRegister,getUsers}