const Medico  = require('../models/medico');


const saveMedico = async (medicoData) => {
    return Medico.create(medicoData);
};

const getMedicoById = async (id) => {
    return Medico.findByPk(id, {
        include: ['Especialidad', 'Clinica'] // Incluimos las asociaciones
    });
};

const getAllMedicos = async () => {
    return Medico.findAll({
        include: ['Especialidad', 'Clinica'] // Incluimos las asociaciones
    });
};

const getMedicoByEspecialidadId = async (especialidadId) => {
    try {
        console.log(`Buscando médico con especialidadId: ${especialidadId}`);
        const medico = await Medico.findOne({ where: { especialidadId } });
        console.log(medico); // Agregar este console.log
        if (medico) {
            return {
                id: medico.id,
                nombre: medico.nombre,
                apellidos: medico.apellidos,
                especialidadId: medico.especialidadId,
                clinicaId: medico.clinicaId
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error en getMedicoByEspecialidadId:', error);
        throw new Error('Error al obtener el médico por ID de especialidad');
    }
};

const updateMedico = async (id, medicoData) => {
    const medico = await Medico.findByPk(id);
    if (medico) {
        return medico.update(medicoData);
    }
    return null;
};

const deleteMedico = async (id) => {
    const medico = await Medico.findByPk(id);
    if (medico) {
        return medico.destroy();
    }
    return null;
};

module.exports = {
    saveMedico,
    getMedicoById,
    getAllMedicos,
    updateMedico,
    deleteMedico,
    getMedicoByEspecialidadId
};
