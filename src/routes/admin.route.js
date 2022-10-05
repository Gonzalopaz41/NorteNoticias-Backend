const express = require ("express");
const { getAdminController, postNewsController, UpdateNewsController, deleteNews } = require("../controllers/admin.controller");
const router = express.Router();
const {jwtValidators} = require('../middlewares/jwtValidations')

router.post ('/get',jwtValidators,getAdminController)

router.post ('/post',jwtValidators,postNewsController)

router.patch ('/editar/:id',jwtValidators,UpdateNewsController)

router.delete ('/eliminar/:id',jwtValidators,deleteNews)

module.exports=router