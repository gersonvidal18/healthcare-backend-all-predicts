const express = require('express');
const router = express.Router();
const sintomaController = require('../controllers/sintomaController');

// Ruta para obtener un síntoma por su clave
router.get('/:clave', sintomaController.getSintomaByClave);

// Ruta para obtener todos los síntomas
router.get('/', sintomaController.getAllSintomas);

module.exports = router;
