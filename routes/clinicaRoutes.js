const express = require('express');
const router = express.Router();
const clinicaController = require('../controllers/clinicaController');

// Ruta para crear una nueva clínica
router.post('/', clinicaController.saveClinica);

// Ruta para obtener una clínica por su ID
router.get('/:id', clinicaController.getClinicaById);

// Ruta para obtener todas las clínicas
router.get('/', clinicaController.getAllClinicas);

// Ruta para actualizar una clínica por su ID
router.put('/:id', clinicaController.updateClinica);

// Ruta para eliminar una clínica por su ID
router.delete('/:id', clinicaController.deleteClinica);

module.exports = router;
