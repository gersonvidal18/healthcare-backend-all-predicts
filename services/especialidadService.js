const especialidadRepository = require('../repositories/especialidadRepository');

const saveEspecialidad = async (especialidadData) => {
    try {
        const especialidad = await especialidadRepository.saveEspecialidad(especialidadData);
        return { success: true, especialidad };
    } catch (error) {
        return { success: false, message: 'Error al guardar la especialidad' };
    }
};

const getEspecialidadById = async (id) => {
    try {
        const especialidad = await especialidadRepository.getEspecialidadById(id);
        if (especialidad) {
            return { success: true, especialidad };
        } else {
            return { success: false, message: 'Especialidad no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al obtener la especialidad' };
    }
};

const getAllEspecialidades = async () => {
    try {
        const especialidades = await especialidadRepository.getAllEspecialidades();
        return { success: true, especialidades };
    } catch (error) {
        return { success: false, message: 'Error al obtener las especialidades' };
    }
};

const updateEspecialidad = async (id, especialidadData) => {
    try {
        const especialidad = await especialidadRepository.updateEspecialidad(id, especialidadData);
        if (especialidad) {
            return { success: true, especialidad };
        } else {
            return { success: false, message: 'Especialidad no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al actualizar la especialidad' };
    }
};

const deleteEspecialidad = async (id) => {
    try {
        const especialidad = await especialidadRepository.deleteEspecialidad(id);
        if (especialidad) {
            return { success: true, message: 'Especialidad eliminada correctamente' };
        } else {
            return { success: false, message: 'Especialidad no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al eliminar la especialidad' };
    }
};

module.exports = {
    saveEspecialidad,
    getEspecialidadById,
    getAllEspecialidades,
    updateEspecialidad,
    deleteEspecialidad
};
