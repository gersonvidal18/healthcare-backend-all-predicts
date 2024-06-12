const sintomaRepository = require('../repositories/sintomaRepository');

const getSintomaByClave = async (clave) => {
    return sintomaRepository.getSintomaByClave(clave);
};

const getAllSintomas = async () => {
    return sintomaRepository.getAllSintomas();
};

module.exports = { 
    
    getSintomaByClave,
    getAllSintomas
};