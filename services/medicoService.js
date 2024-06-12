const medicoRepository = require('../repositories/medicoRepository');

const saveMedico = async (medicoData) => {
    try {
        const medico = await medicoRepository.saveMedico(medicoData);
        return { success: true, medico };
    } catch (error) {
        return { success: false, message: 'Error al guardar el médico' };
    }
};

const getMedicoByEspecialidadId = async (especialidadId) => {
    return medicoRepository.getMedicoByEspecialidadId(especialidadId);
};


const getMedicoById = async (id) => {
    try {
        const medico = await medicoRepository.getMedicoById(id);
        if (medico) {
            return { success: true, medico };
        } else {
            return { success: false, message: 'Médico no encontrado' };
        }
    } catch (error) {
        return { success: false, message: 'Error al obtener el médico' };
    }
};

const getAllMedicos = async () => {
    try {
        const medicos = await medicoRepository.getAllMedicos();
        return { success: true, medicos };
    } catch (error) {
        return { success: false, message: 'Error al obtener los médicos' };
    }
};

const updateMedico = async (id, medicoData) => {
    try {
        const medico = await medicoRepository.updateMedico(id, medicoData);
        if (medico) {
            return { success: true, medico };
        } else {
            return { success: false, message: 'Médico no encontrado' };
        }
    } catch (error) {
        return { success: false, message: 'Error al actualizar el médico' };
    }
};

const deleteMedico = async (id) => {
    try {
        const medico = await medicoRepository.deleteMedico(id);
        if (medico) {
            return { success: true, message: 'Médico eliminado correctamente' };
        } else {
            return { success: false, message: 'Médico no encontrado' };
        }
    } catch (error) {
        return { success: false, message: 'Error al eliminar el médico' };
    }
};

module.exports = {
    saveMedico,
    getMedicoById,
    getAllMedicos,
    updateMedico,
    deleteMedico,
    getMedicoByEspecialidadId
};
