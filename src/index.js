const express = require("express");
const cors = require('cors');
const conectarBD = require('../config/db')

const app = express();
app.use(cors());
app.use(express.json());
conectarBD();

const port =process.env.port || 4000;
app.use("/api/usuarios", require("../routers/usuarios"))
app.use("/api/auth",require("../routers/auth"));
app.use("/api/clientes",require("../routers/cliente"));
app.use("/api/empleados",require("../routers/empleados"));

app.listen(port, ()=>{
    console.log("El servidor esta inciado")
})

