const express = require('express');
const router = express.Router();
const enfermedadController = require('../controllers/enfermedadController');

// Ruta para crear una nueva enfermedad
router.post('/', enfermedadController.saveEnfermedad);

// Ruta para obtener una enfermedad por su ID
router.get('/:id', enfermedadController.getEnfermedadById);

// Ruta para obtener todas las enfermedades
router.get('/', enfermedadController.getAllEnfermedades);

// Ruta para actualizar una enfermedad por su ID
router.put('/:id', enfermedadController.updateEnfermedad);

// Ruta para eliminar una enfermedad por su ID
router.delete('/:id', enfermedadController.deleteEnfermedad);

module.exports = router;
