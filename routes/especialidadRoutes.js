const express = require('express');
const router = express.Router();
const especialidadController = require('../controllers/especialidadController');

// Ruta para crear una nueva especialidad
router.post('/', especialidadController.saveEspecialidad);

// Ruta para obtener una especialidad por su ID
router.get('/:id', especialidadController.getEspecialidadById);

// Ruta para obtener todas las especialidades
router.get('/', especialidadController.getAllEspecialidades);

// Ruta para actualizar una especialidad por su ID
router.put('/:id', especialidadController.updateEspecialidad);

// Ruta para eliminar una especialidad por su ID
router.delete('/:id', especialidadController.deleteEspecialidad);

module.exports = router;
