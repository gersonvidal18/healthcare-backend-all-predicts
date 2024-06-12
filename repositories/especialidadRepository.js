const Especialidad = require('../models/especialidad');

const saveEspecialidad = async (especialidadData) => {
    return Especialidad.create(especialidadData);
};

const getEspecialidadById = async (id) => {
    return Especialidad.findByPk(id);
};

const getAllEspecialidades = async () => {
    return Especialidad.findAll();
};

const updateEspecialidad = async (id, especialidadData) => {
    const especialidad = await Especialidad.findByPk(id);
    if (especialidad) {
        return especialidad.update(especialidadData);
    }
    return null;
};

const deleteEspecialidad = async (id) => {
    const especialidad = await Especialidad.findByPk(id);
    if (especialidad) {
        return especialidad.destroy();
    }
    return null;
};

module.exports = {
    saveEspecialidad,
    getEspecialidadById,
    getAllEspecialidades,
    updateEspecialidad,
    deleteEspecialidad
};
