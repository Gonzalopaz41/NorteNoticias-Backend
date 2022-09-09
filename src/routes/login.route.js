const express =require('express');
const { postLogin } = require('../controllers/login.controller');
const router = express.Router();

router.post('/', postLogin)

module.exports=router