// controllers/medicoController.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const medicoService = require('../services/medicoService');

router.post('/saveMedico', verifyToken, async (req, res) => {
    try {
        const medicoData = req.body;
        const result = await medicoService.saveMedico(medicoData);
        if (result.success) {
            res.status(201).json(result.medico);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.get('/medico/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await medicoService.getMedicoById(id);
        if (result.success) {
            res.status(200).json(result.medico);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.post('/especialidad', async (req, res) => {
    try {
        const { especialidadId } = req.body;
        console.log(`Recibido especialidadId: ${especialidadId}`);
        const medico = await medicoService.getMedicoByEspecialidadId(especialidadId);
        if (medico) {
            res.status(200).json(medico);
        } else {
            res.status(404).json({ message: 'Médico no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el médico por ID de especialidad' });
    }
});

router.get('/medicos', verifyToken, async (req, res) => {
    try {
        const result = await medicoService.getAllMedicos();
        if (result.success) {
            res.status(200).json(result.medicos);
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.put('/medico/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const medicoData = req.body;
        const result = await medicoService.updateMedico(id, medicoData);
        if (result.success) {
            res.status(200).json(result.medico);
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.delete('/medico/:id', verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await medicoService.deleteMedico(id);
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
