const Empleado = require("../models/empleados")


exports.buscarEmpleados = async(req, res) =>{
    try {
      const empleado = await Empleado.find();
      res.json(empleado)
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar empleados')
    }
}
//agregar cliente
exports.agregarEmpleados = async(req, res) => {
    try {
        let empleados;
        empleados = new Empleado(req.body)
        await empleados.save();
        res.send(empleados)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un empleado');
    }
}

exports.buscarEmpleado = async(req,res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);
        if(!empleado){
            res.status(404).send({msg:"empleado no encontrado por ese id"});
            return
        }
        res.json(empleado);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un empleado');
    }
}
exports.eliminarEmpleado = async(req, res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);
        if(!empleado){
            res.status(404).json({msg:"El empleado no existe"})
            return
        }
        await Empleado.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El empleado ha sido eliminado"});
        return
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un empleado');
    }
}

exports.actualizarEmpleado = async(req, res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, cargo} = req.body
        let empleado = await Empleado.findById(req.params.id);

        if(!empleado){
            res.status(404).json({msg: "El empleado no existe"});
            return
        }
            empleado.nombres = nombres;
            empleado.apellidos = apellidos;
            empleado.documento = documento;
            empleado.correo = correo;
            empleado.telefono = telefono;
            empleado.cargo = cargo;

            empleado = await Empleado.findOneAndUpdate({_id: req.params.id}, empleado,{new:true});
            res.json(empleado);
    }catch(error){
        console.log(error)
        res.status(500).send('hubo un error al actualizar un empleado');
    }
}