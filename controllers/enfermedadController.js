const express = require('express');
const router = express.Router();
const enfermedadService = require('../services/enfermedadService');
const verifyToken = require('../middleware/verifyToken');

router.post('/saveEnfermedad', verifyToken, async (req, res) => {
    try {
        const enfermedadData = req.body;
        const result = await enfermedadService.saveEnfermedad(enfermedadData);
        if (result.success) {
            res.status(201).json(result.enfermedad);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.get('/enfermedad/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await enfermedadService.getEnfermedadById(id);
        if (result.success) {
            res.status(200).json(result.enfermedad);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.get('/enfermedades', verifyToken, async (req, res) => {
    try {
        const result = await enfermedadService.getAllEnfermedades();
        if (result.success) {
            res.status(200).json(result.enfermedades);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.put('/enfermedad/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const enfermedadData = req.body;
        const result = await enfermedadService.updateEnfermedad(id, enfermedadData);
        if (result.success) {
            res.status(200).json(result.enfermedad);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.delete('/enfermedad/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await enfermedadService.deleteEnfermedad(id);
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.post('/buscarEnfermedad', async (req, res) => {
    try {
        const nombreEnIngles = req.body.enfermedad;
        const enfermedad = await enfermedadService.getEnfermedadByNombreOriginal(nombreEnIngles);
        if (enfermedad) {
            res.status(200).json(enfermedad);
        } else {
            res.status(404).json({ message: 'Enfermedad no encontrada' });
        }
    } catch (error) {
        console.error('Error fetching disease by original name:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


module.exports = router;
