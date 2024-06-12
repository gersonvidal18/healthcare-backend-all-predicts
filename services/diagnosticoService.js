const diagnosticoRepository = require("../repositories/diagnosticoRepository");

const saveDiagnostico = async (diagnosticoData) => {
  try {
    const diagnostico = await diagnosticoRepository.saveDiagnostico(
      diagnosticoData
    );
    return { success: true, diagnostico };
  } catch (error) {
    return { success: false, message: "Error al guardar el diagnóstico" };
  }
};

const getDiagnosticoById = async (id) => {
  try {
    const diagnostico = await diagnosticoRepository.getDiagnosticoById(id);
    if (diagnostico) {
      return { success: true, diagnostico };
    } else {
      return { success: false, message: "Diagnóstico no encontrado" };
    }
  } catch (error) {
    return { success: false, message: "Error al obtener el diagnóstico" };
  }
};

const getPrediccionesByUsuarioId = async (idUsuario) => {
  try {
    const diagnosticos = await diagnosticoRepository.getPrediccionesByUsuarioId(
      idUsuario
    );
    return { success: true, diagnosticos };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

const getDiagnosticosByUsuarioId = async (idUsuario) => {
  try {
    const diagnosticos = await diagnosticoRepository.getDiagnosticosByUsuarioId(
      idUsuario
    );
    return { success: true, diagnosticos };
  } catch (error) {
    return { success: false, message: "Error al obtener los diagnósticos" };
  }
};

const getAllDiagnosticos = async () => {
  try {
    const diagnosticos = await diagnosticoRepository.getAllDiagnosticos();
    return { success: true, diagnosticos };
  } catch (error) {
    return { success: false, message: "Error al obtener los diagnósticos" };
  }
};

const updateDiagnostico = async (id, diagnosticoData) => {
  try {
    const diagnostico = await diagnosticoRepository.updateDiagnostico(
      id,
      diagnosticoData
    );
    if (diagnostico) {
      return { success: true, diagnostico };
    } else {
      return { success: false, message: "Diagnóstico no encontrado" };
    }
  } catch (error) {
    return { success: false, message: "Error al actualizar el diagnóstico" };
  }
};

const deleteDiagnostico = async (id) => {
  try {
    const diagnostico = await diagnosticoRepository.deleteDiagnostico(id);
    if (diagnostico) {
      return { success: true, message: "Diagnóstico eliminado correctamente" };
    } else {
      return { success: false, message: "Diagnóstico no encontrado" };
    }
  } catch (error) {
    return { success: false, message: "Error al eliminar el diagnóstico" };
  }
};

module.exports = {
  saveDiagnostico,
  getDiagnosticoById,
  getDiagnosticosByUsuarioId,
  getPrediccionesByUsuarioId,
  getAllDiagnosticos,
  updateDiagnostico,
  deleteDiagnostico,
};
