const Diagnostico = require('../models/diagnostico');
const Sintoma = require('../models/sintoma.js');
const SintomasPac = require('../models/sintomasPac.js')

const saveDiagnostico = async (diagnosticoData) => {
    return Diagnostico.create(diagnosticoData);
};

const getDiagnosticoById = async (id) => {
    return Diagnostico.findByPk(id);
};

const getDiagnosticosByUsuarioId = async (idUsuario) => {
    return Diagnostico.findAll({
        where: { idUsuario }
    });
};

const getPrediccionesByUsuarioId = async (idUsuario) => {
    try {
        const diagnosticos = await Diagnostico.findAll({
            where: { idUsuario },
            include: {
                model: SintomasPac,
                attributes: ['idSintoma'],
                include: {
                    model: Sintoma,
                    attributes: ['clave'],
                }
            }
        });

        const response = diagnosticos.map(diagnostico => ({
            fecha: diagnostico.fecha,
            sintomas: diagnostico.SintomasPac.map(sintoma => sintoma.Sintoma.nombre).join(', '), // Concatenar nombres de síntomas
            predictIA: diagnostico.predictIA,
        }));

        return response
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllDiagnosticos = async () => {
    return Diagnostico.findAll();
};

const updateDiagnostico = async (id, diagnosticoData) => {
    const diagnostico = await Diagnostico.findByPk(id);
    if (diagnostico) {
        return diagnostico.update(diagnosticoData);
    }
    return null;
};

const deleteDiagnostico = async (id) => {
    const diagnostico = await Diagnostico.findByPk(id);
    if (diagnostico) {
        return diagnostico.destroy();
    }
    return null;
};

module.exports = {
    saveDiagnostico,
    getDiagnosticoById,
    getDiagnosticosByUsuarioId,
    getPrediccionesByUsuarioId,
    getAllDiagnosticos,
    updateDiagnostico,
    deleteDiagnostico
};
