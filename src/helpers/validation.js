const {validationResult} = require ('express-validator');

const errors = (req,res,next) => {
    try{   
        validationResult(req).throw()
        return next()
    } catch(errores){
        res.status(403)
        res.send({errores:errores})
    }
}

module.exports={errors}