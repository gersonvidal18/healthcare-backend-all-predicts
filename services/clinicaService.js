const clinicaRepository = require('../repositories/clinicaRepository');

const saveClinica = async (clinicaData) => {
    try {
        const clinica = await clinicaRepository.saveClinica(clinicaData);
        return { success: true, clinica };
    } catch (error) {
        return { success: false, message: 'Error al guardar la clínica' };
    }
};

const getClinicaById = async (id) => {
    try {
        const clinica = await clinicaRepository.getClinicaById(id);
        if (clinica) {
            return { success: true, clinica };
        } else {
            return { success: false, message: 'Clínica no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al obtener la clínica' };
    }
};

const getAllClinicas = async () => {
    try {
        const clinicas = await clinicaRepository.getAllClinicas();
        return { success: true, clinicas };
    } catch (error) {
        return { success: false, message: 'Error al obtener las clínicas' };
    }
};

const updateClinica = async (id, clinicaData) => {
    try {
        const clinica = await clinicaRepository.updateClinica(id, clinicaData);
        if (clinica) {
            return { success: true, clinica };
        } else {
            return { success: false, message: 'Clínica no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al actualizar la clínica' };
    }
};

const deleteClinica = async (id) => {
    try {
        const clinica = await clinicaRepository.deleteClinica(id);
        if (clinica) {
            return { success: true, message: 'Clínica eliminada correctamente' };
        } else {
            return { success: false, message: 'Clínica no encontrada' };
        }
    } catch (error) {
        return { success: false, message: 'Error al eliminar la clínica' };
    }
};

module.exports = {
    saveClinica,
    getClinicaById,
    getAllClinicas,
    updateClinica,
    deleteClinica
};
