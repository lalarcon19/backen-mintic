const Usuarios = require("../models/Usuarios");
const bcryctjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  const { email, password } = req.body;

  try {
    //Verificar que el usuario registrado sea unico
    let usuario = await Usuarios.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya exite" });
    }

    usuario = new Usuarios(req.body);
    usuario.password = await bcryctjs.hash(password, 12);

    // Guardar usuario

    await usuario.save();

    const payload = {
      usuario: { id: usuario.id },
    };

    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hay un error");
    console.log(error);
    res.status(400).send("Hubo un error ");
  }
};


