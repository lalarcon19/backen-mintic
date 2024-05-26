const Cliente = require("../models/Clientes")


exports.buscarClientes = async(req, res) =>{
    try {
      const cliente = await Cliente.find();
      res.json(cliente)
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un cliente')
    }
}

//agregar cliente
exports.agregarClientes = async(req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente');
    }
}
exports.buscarCliente = async(req,res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).send({msg:"cliente no encontrado por ese id"});
            return
        } 
        res.json(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un cliente');
    }
}
exports.eliminarCliente = async(req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"EL cliente no existe"})
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El cliente ha sido eliminado"});
        return
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un cliente');
    }
}

exports.actualizarCliente = async(req, res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(404).json({msg: "El cliente no existe"});
            return
        }
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);
    }catch(error){
        console.log(error)
        res.status(500).send('hubo un error al actualizar un cliente');
    }
}