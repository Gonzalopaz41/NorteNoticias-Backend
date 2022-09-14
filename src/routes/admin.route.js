const express = require ("express");
const { getAdminController, postNewsController, UpdateNewsController, deleteNews } = require("../controllers/admin.controller");
const router = express.Router();
const {jwtValidators} = require('../middlewares/jwtValidations')

router.post ('/',jwtValidators,getAdminController)

router.post ('/',jwtValidators,postNewsController)

router.patch ('/:id',jwtValidators,UpdateNewsController)

router.delete ('/:id',jwtValidators,deleteNews)

module.exports=router