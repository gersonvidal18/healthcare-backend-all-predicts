// controllers/clinicaController.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const clinicaService = require('../services/clinicaService');

router.post('/saveClinica', verifyToken, async (req, res) => {
    try {
        const clinicaData = req.body;
        const result = await clinicaService.saveClinica(clinicaData);
        if (result.success) {
            res.status(201).json(result.clinica);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


router.post('/obtenerclinica', verifyToken, async (req, res) => {
    try {
        const { id } = req.body;  // Obtener el ID de la clínica del cuerpo de la solicitud
        const result = await clinicaService.getClinicaById(id);
        if (result.success) {
            res.status(200).json(result.clinica);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


router.get('/clinicas', verifyToken, async (req, res) => {
    try {
        const result = await clinicaService.getAllClinicas();
        if (result.success) {
            res.status(200).json(result.clinicas);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.put('/clinica/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const clinicaData = req.body;
        const result = await clinicaService.updateClinica(id, clinicaData);
        if (result.success) {
            res.status(200).json(result.clinica);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.delete('/clinica/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await clinicaService.deleteClinica(id);
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
