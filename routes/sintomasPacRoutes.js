const express = require('express');
const router = express.Router();
const sintomasPacController = require('../controllers/sintomasPacController');

// Ruta para guardar síntomas de un paciente
router.post('/', sintomasPacController.saveSintomasPac);

// Ruta para obtener todos los síntomas de un paciente por su ID de usuario
router.get('/:idUsuario', sintomasPacController.getSintomasPacByUsuario);

// Ruta para eliminar todos los síntomas de un paciente por su ID de usuario
router.delete('/:idUsuario', sintomasPacController.deleteSintomasPacByUsuario);

module.exports = router;