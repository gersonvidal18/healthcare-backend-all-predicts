const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');


const registerUser = async (nombre, genero, email, contraseña, edad) => {
    const existingUser = await userRepository.getUserByEmail(email);
    if (existingUser) {
        throw new Error('Ya existe un usuario con ese correo electrónico');
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser = await userRepository.saveUser({ nombre, genero, email, contraseña: hashedPassword, edad });

    const token = jwt.sign({ id: newUser.id, email: newUser.email, nombre: newUser.nombre }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user: newUser, token };
};

const login = async (email, contraseña) => {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('Correo electrónico o contraseña incorrectos');
    }

    const isValidPassword = await bcrypt.compare(contraseña, user.contraseña);
    if (!isValidPassword) {
        throw new Error('Correo electrónico o contraseña incorrectos');
    }

    const token = jwt.sign({ id: user.id, nombre: user.nombre, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};


const getAllUsers = async () => {
    try {
        const users = await userRepository.getAllUsers();
        return users;
    } catch (error) {
        throw new Error('Error al obtener usuarios');
    }
};

const updateUserAvatar = async (userId, avatarUrl) => {
    try {
        await userRepository.updateUser(userId, { foto: avatarUrl });
    } catch (error) {
        throw new Error('Error al actualizar el avatar del usuario');
    }
};

const requestResetPassword = async (email) => {
    try {
        // Generate a reset token
        const resetToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const expirationDate = new Date(Date.now() + 3600000); // 1 hour from now

        // Save the reset token and its expiration date in the database
        await userRepository.saveResetToken(email, resetToken, expirationDate);

        // Send an email with the reset token (email sending logic not included here)
        // sendResetPasswordEmail(email, resetToken);

        return { message: 'Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.' };
    } catch (error) {
        throw new Error('Error al solicitar el restablecimiento de la contraseña');
    }
};

const resetPassword = async (email, newPassword, token) => {
    try {
        // Verify the reset token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.email !== email) {
            throw new Error('Token inválido o caducado');
        }

        // Check if the token is still valid
        const resetTokenData = await userRepository.getResetToken(email);
        if (!resetTokenData || resetTokenData.token !== token || new Date() > resetTokenData.expirationDate) {
            throw new Error('Token inválido o caducado');
        }

        // Hash the new password and update the user
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await userRepository.updatePassword(email, hashedPassword);

        // Delete the reset token from the database
        await userRepository.deleteResetToken(email);

        return { message: 'Contraseña restablecida correctamente. Ahora puedes iniciar sesión.' };
    } catch (error) {
        throw new Error('Error al restablecer la contraseña');
    }
};

module.exports = { registerUser, login, getAllUsers, requestResetPassword, resetPassword, updateUserAvatar };
