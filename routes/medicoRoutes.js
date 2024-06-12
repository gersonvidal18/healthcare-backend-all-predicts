const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

// Ruta para crear un nuevo médico
router.post('/', medicoController.saveMedico);

// Ruta para obtener un médico por su ID
router.get('/:id', medicoController.getMedicoById);

// Ruta para obtener todos los médicos
router.get('/', medicoController.getAllMedicos);

// Ruta para actualizar un médico por su ID
router.put('/:id', medicoController.updateMedico);

// Ruta para eliminar un médico por su ID
router.delete('/:id', medicoController.deleteMedico);

module.exports = router;
