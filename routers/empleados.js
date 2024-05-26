const express = require('express');
const router = express.Router();
const empleadoController = require('../controller/empleadoController');

router.post('/agregar', empleadoController.agregarEmpleados);
router.get('/', empleadoController.buscarEmpleados);
router.get('/:id', empleadoController.buscarEmpleado);
router.delete('/:id',empleadoController.eliminarEmpleado);
router.patch('/:id',empleadoController.actualizarEmpleado);

module.exports = router;