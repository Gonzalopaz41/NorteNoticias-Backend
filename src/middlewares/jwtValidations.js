const jwt = require ('jsonwebtoken');

const jwtValidators = async (req,res,next) =>{
    const token = req.headers['acces_token']

    if (token) {
        jwt.verify(token,process.env.JWT_SECRET, (err)=>{
            if (err) {
                res.status(401).json("token invalido")
            } else {
                next()
            }
        })
    } else {
        res.status(400).json("token inexistente")
    }
}

module.exports = {
    jwtValidators
}