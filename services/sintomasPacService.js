const sintomaPacRepository = require('../repositories/sintomasPacRepository');
const SintomasPac = require('../models/sintomasPac');

const saveSintomasPac = async (idUsuario, idSintomas) => {
    try {
        console.log('Datos recibidos:', { idUsuario, idSintomas });
        const sintomasPacList = idSintomas.map(idSintoma => ({
            idUsuario,
            idSintoma
        }));
        await SintomasPac.bulkCreate(sintomasPacList);
        return { success: true, message: 'SíntomasPac guardados correctamente' };
    } catch (error) {
        console.error('Error al guardar los síntomas:', error);
        return { success: false, message: 'Error al guardar los SíntomasPac' };
    }
};

// Función para actualizar los síntomas con el idDiagnostico
const updateSintomasPacWithDiagnostico = async (idUsuario, idDiagnostico) => {
    try {
        await sintomaPacRepository.updateSintomasPacWithDiagnostico(idUsuario, idDiagnostico);
        return { success: true, message: 'SíntomasPac actualizados correctamente con el diagnóstico' };
    } catch (error) {
        return { success: false, message: 'Error al actualizar los SíntomasPac con el diagnóstico' };
    }
};

const getSintomasPacByUsuario = async (idUsuario) => {
    try {
        const sintomasPac = await sintomaPacRepository.getSintomasPacByUsuario(idUsuario);
        // Modificar el formato de los resultados para incluir la descripción de los síntomas
        const formattedSintomasPac = sintomasPac.map(sintomaPac => ({
            id: sintomaPac.id, // Puedes incluir más campos si es necesario
            descripcion: sintomaPac.Sintoma.descripcion // Acceder a la descripción del síntoma a través de la relación
        }));
        return { success: true, sintomasPac: formattedSintomasPac };
    } catch (error) {
        return { success: false, message: 'Error al obtener los SíntomasPac' };
    }
};

const deleteSintomasPacByUsuario = async (idUsuario) => {
    try {
        await sintomaPacRepository.deleteSintomasPacByUsuario(idUsuario);
        return { success: true, message: 'SíntomasPac eliminados correctamente' };
    } catch (error) {
        return { success: false, message: 'Error al eliminar los SíntomasPac' };
    }
};

module.exports = {
    saveSintomasPac,
    updateSintomasPacWithDiagnostico,
    getSintomasPacByUsuario,
    deleteSintomasPacByUsuario
};
