const SintomasPac = require('../models/sintomasPac');
const Sintoma = require('../models/sintoma');

const saveSintomasPac = async (idUsuario, idSintomas) => {
    try {
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

const updateSintomasPacWithDiagnostico = async (idUsuario, idDiagnostico) => {
    try {
        await SintomasPac.update({ idDiagnostico }, { where: { idUsuario } });
        return { success: true, message: 'SíntomasPac actualizados correctamente con el diagnóstico' };
    } catch (error) {
        return { success: false, message: 'Error al actualizar los SíntomasPac con el diagnóstico' };
    }
};

const getSintomasPacByUsuario = async (idUsuario) => {
    try {
        const sintomasPac = await SintomasPac.findAll({
            where: { idUsuario },
            include: [{ model: Sintoma, attributes: ['descripcion'] }]
        });
        const formattedSintomasPac = sintomasPac.map(sintomaPac => ({
            id: sintomaPac.id,
            descripcion: sintomaPac.Sintoma.descripcion
        }));
        return { success: true, sintomasPac: formattedSintomasPac };
    } catch (error) {
        return { success: false, message: 'Error al obtener los SíntomasPac' };
    }
};

const deleteSintomasPacByUsuario = async (idUsuario) => {
    try {
        await SintomasPac.destroy({ where: { idUsuario } });
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
