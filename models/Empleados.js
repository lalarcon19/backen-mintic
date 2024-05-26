const mongoose= require("mongoose");

const empleadoSchema = mongoose.Schema({

    nombres:{
        type: String,
        required:true
    },
    apellidos:{
        type: String,
        required:true
    },
    documento:{
        type: Number,
        required:true
    },
    correo:{
        type: String,
        required:true
    },
    telefono:{
        type: Number,
        required:true
    },
    cargo:{
        type:String,
        required:true
    }
},{versionKey:false})

module.exports = mongoose.model('Empleado', empleadoSchema);