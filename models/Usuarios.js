const mongoose= require("mongoose");
const bcrypt = require('bcryptjs')

const usuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        required:true,
        trim:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    },
    registro: {
        type: Date, 
        default: Date.now()
    },
});
module.exports = mongoose.model('Usuarios', usuarioSchema);