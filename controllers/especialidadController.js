const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const especialidadService = require('../services/especialidadService');

router.post('/saveEspecialidad', verifyToken, async (req, res) => {
    try {
        const especialidadData = req.body;
        const result = await especialidadService.saveEspecialidad(especialidadData);
        if (result.success) {
            res.status(201).json(result.especialidad);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.post('/especialidadname', verifyToken, async (req, res) => {
    try {
        const { id } = req.body;
        const result = await especialidadService.getEspecialidadById(id);
        if (result.success) {
            res.status(200).json({ nombre: result.especialidad.nombre });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.get('/especialidades', verifyToken, async (req, res) => {
    try {
        const result = await especialidadService.getAllEspecialidades();
        if (result.success) {
            res.status(200).json(result.especialidades);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.put('/especialidad/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const especialidadData = req.body;
        const result = await especialidadService.updateEspecialidad(id, especialidadData);
        if (result.success) {
            res.status(200).json(result.especialidad);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.delete('/especialidad/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await especialidadService.deleteEspecialidad(id);
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

