const express =require('express');
const router = express.Router();
const { postRegister, getUsers } = require('../controllers/register.controller');
const {body} = require ('express-validator')
//const {validateEmail} = require('../helpers/validation.js')
const {errors} = require ('../helpers/validation')

router.post('/user',getUsers);

router.post('/',
    body('email', 'Ingrese un E-mail valido')
        .exists()
        .isEmail(),
    body('name','Ingrese un nombre')
        .exists()
        .isLength({min:2}),
    body('surname','Ingrese un apellido')
        .exists()
        .isLength({min:2}),
    body('password','La contraseña debe tener un minimo de 3 caracteres')
        .exists()
        .isLength({min:3}),
        (req,res,next)=>{
            errors(req,res,next)
        }
        ,postRegister)

module.exports=router