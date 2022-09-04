const express = require ("express");
const { getAdminController, postNewsController, UpdateNewsController, deleteNews } = require("../controllers/admin.controller");
const router = express.Router();

router.get ('/', getAdminController)

router.post ('/', postNewsController)

router.patch ('/', UpdateNewsController)

router.delete ('/', deleteNews)

module.exports=router