const Enfermedad = require('../models/enfermedad');

const saveEnfermedad = async (enfermedadData) => {
    return Enfermedad.create(enfermedadData);
};

const getEnfermedadById = async (id) => {
    return Enfermedad.findByPk(id);
};

const getAllEnfermedades = async () => {
    return Enfermedad.findAll();
};

const updateEnfermedad = async (id, enfermedadData) => {
    const enfermedad = await Enfermedad.findByPk(id);
    if (enfermedad) {
        return enfermedad.update(enfermedadData);
    }
    return null;
};

const deleteEnfermedad = async (id) => {
    const enfermedad = await Enfermedad.findByPk(id);
    if (enfermedad) {
        return enfermedad.destroy();
    }
    return null;
};


const getEnfermedadByNombreOriginal = async (nombreOriginal) => {
    try {
        
        console.log(`Buscando enfermedad con nombre original: ${nombreOriginal}`);
        const enfermedad = await Enfermedad.findOne({ where: { nombreOriginal } });
        
        console.log(enfermedad); // Agregar este console.log
        if (enfermedad) {
            return {
                id: enfermedad.id,
                nombreOriginal: enfermedad.nombreOriginal,
                nombreEspañol: enfermedad.nombreEspañol,
                descripcion: enfermedad.descripcion,
                especialistasTratan: enfermedad.especialistasTratan,
                clinicaTratante: enfermedad.clinicaTratante,
                imagen: enfermedad.imagen
            };
        } else {
            return null;
        }
    } catch (error) {
        throw new Error('Error al buscar la enfermedad');
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
