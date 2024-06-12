const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const verifyToken = require('../middleware/verifyToken');
const upload = require('../middleware/uploadMiddleware');

// Ruta protegida, requiere autenticación
router.get('/profile', verifyToken, async (req, res) => {
    try {
        const user = req.user; // El usuario adjuntado por el middleware
        res.json(user); // Esto incluirá id, email, nombre, iat, exp
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el perfil del usuario' });
    }
});

// Ruta protegida, requiere autenticación
router.put('/profile', verifyToken, async (req, res) => {
    try {
        // Obtener el usuario a partir del token en req.user
        const user = req.user;
        // Actualizar el perfil del usuario con los datos de req.body
        // Por ejemplo, userService.updateUserProfile(user.id, req.body);
        res.json({ message: 'Perfil actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el perfil del usuario' });
    }
});

// Ruta para subir un avatar, protegida y requiere autenticación
router.post('/upload', verifyToken, upload.single('avatar'), async (req, res) => {
    try {
        const user = req.user;
        const avatarUrl = `/uploads/${req.file.filename}`;
        // Lógica para actualizar el usuario con la URL del avatar
        await userService.updateUserAvatar(user.id, avatarUrl);
        res.json({ message: 'Avatar subido correctamente', avatarUrl });
    } catch (error) {
        res.status(500).json({ message: 'Error al subir el avatar' });
    }
});

module.exports = router;
