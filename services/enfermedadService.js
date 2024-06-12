const enfermedadRepository = require('../repositories/enfermedadRepository');
const Enfermedad = require('../models/enfermedad');

const saveEnfermedad = async (enfermedadData) => {
    try {
        const enfermedad = await enfermedadRepository.saveEnfermedad(enfermedadData);
        return { success: true, enfermedad };
    } catch (error) {
        return { success: false, message: 'Error al guardar la enfermedad' };
    }
};

const getEnfermedadById = async (id) => {
    try {
        const enfermedad = await enfermedadRepository.getEnfermedadById(id);
        if (enfermedad) {
            return { success: true, enfermedad };
        } else {
            return { success: false, message: 'Enfermedad no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al obtener la enfermedad' };
    }
};

const getEnfermedadByNombreOriginal = async (nombreOriginal) => {
    try {
        const enfermedad = await Enfermedad.findOne({ where: { nombreOriginal } });
        return enfermedad; // Devolver directamente la enfermedad encontrada
    } catch (error) {
        console.error('Error al obtener la enfermedad:', error);
        throw new Error('Error al buscar la enfermedad');
    }
};

const getAllEnfermedades = async () => {
    try {
        const enfermedades = await enfermedadRepository.getAllEnfermedades();
        return { success: true, enfermedades };
    } catch (error) {
        return { success: false, message: 'Error al obtener las enfermedades' };
    }
};

const updateEnfermedad = async (id, enfermedadData) => {
    try {
        const enfermedad = await enfermedadRepository.updateEnfermedad(id, enfermedadData);
        if (enfermedad) {
            return { success: true, enfermedad };
        } else {
            return { success: false, message: 'Enfermedad no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al actualizar la enfermedad' };
    }
};

const deleteEnfermedad = async (id) => {
    try {
        const enfermedad = await enfermedadRepository.deleteEnfermedad(id);
        if (enfermedad) {
            return { success: true, message: 'Enfermedad eliminada correctamente' };
        } else {
            return { success: false, message: 'Enfermedad no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al eliminar la enfermedad' };
    }
};



module.exports = {
    saveEnfermedad,
    getEnfermedadById,
    getAllEnfermedades,
    updateEnfermedad,
    deleteEnfermedad,
    getEnfermedadByNombreOriginal
};
