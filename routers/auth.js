const express = require ("express");
const router = express.Router();
const authController = require("../controller/authController");
const {check} = require ("express-validator");
const auth = require("../middlewares/authMiddlewares");

//Se autenticara el usuario 

router.post("/",[
    check("email", "agrega un email valido").isEmpty(),
    check("password", "El password debe ser minimo de 10 caracteres").isLength({min:10,}),
],
authController.autenticarUsuario
);

router.get("/", auth, authController.usuarioAutenticado);
module.exports = router;