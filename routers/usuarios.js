const express = require ("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");
const {check}= require ("express-validator");

router.post("/",[
check("nombres", "Los nombres son obligatorios").not().isEmpty(),
check("email", "ingresa un emaikl valido").isEmail(),
check("password", "El password debe tener minimo 10 caracteres").isLength({min:10, }),
],
usuarioController.crearUsuario );

module.exports = router;