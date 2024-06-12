const express = require('express');
const router = express.Router();
const sintomasPacService = require('../services/sintomasPacService');
const verifyToken = require('../middleware/verifyToken');

router.post('/savesintomaspac', verifyToken, async (req, res) => {
    try {
        const { idUsuario, idSintomas } = req.body;
        const result = await sintomasPacService.saveSintomasPac(idUsuario, idSintomas);
        if (result.success) {
            res.status(201).json({ message: result.message });
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Ruta para actualizar los síntomas con el idDiagnostico
router.put('/updatesintomaspac/:idUsuario/:idDiagnostico', verifyToken, async (req, res) => {
    try {
        const { idUsuario, idDiagnostico } = req.params;
        const result = await sintomasPacService.updateSintomasPacWithDiagnostico(idUsuario, idDiagnostico);
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


router.get('/getsintomaspac/:idUsuario', verifyToken, async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const result = await sintomasPacService.getSintomasPacByUsuario(idUsuario);
        if (result.success) {
            const sintomasPacWithDescripcion = result.sintomasPac.map(sintomaPac => ({
                id: sintomaPac.id,
                descripcion: sintomaPac.descripcion // Incluimos la descripción del síntoma
            }));
            res.status(200).json({ sintomasPac: sintomasPacWithDescripcion });
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.delete('/deletesintomaspac/:idUsuario', verifyToken, async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const result = await sintomasPacService.deleteSintomasPacByUsuario(idUsuario);
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
