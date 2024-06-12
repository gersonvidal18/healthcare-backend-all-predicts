const Clinica = require('../models/clinica');

const saveClinica = async (clinicaData) => {
    return Clinica.create(clinicaData);
};

const getClinicaById = async (id) => {
    return Clinica.findByPk(id);
};

const getAllClinicas = async () => {
    return Clinica.findAll();
};

const updateClinica = async (id, clinicaData) => {
    const clinica = await Clinica.findByPk(id);
    if (clinica) {
        return clinica.update(clinicaData);
    }
    return null;
};

const deleteClinica = async (id) => {
    const clinica = await Clinica.findByPk(id);
    if (clinica) {
        return clinica.destroy();
    }
    return null;
};

module.exports = {
    saveClinica,
    getClinicaById,
    getAllClinicas,
    updateClinica,
    deleteClinica
};
