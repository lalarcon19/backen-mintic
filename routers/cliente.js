const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.post('/agregar', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarCliente);
router.delete('/:id',clienteController.eliminarCliente);
router.patch('/:id',clienteController.actualizarCliente);

module.exports = router;

