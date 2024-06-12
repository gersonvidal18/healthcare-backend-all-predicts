// repositories/sintomaRepository.js
const Sintoma = require('../models/sintoma.js');

const getSintomaByClave = async (clave) => {
    return Sintoma.findOne({ where: { clave } });
};

const getAllSintomas = async () => {
    return Sintoma.findAll();
};

module.exports = {
    
    getSintomaByClave,
    getAllSintomas
};