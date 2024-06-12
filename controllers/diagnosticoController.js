const express = require("express");
const router = express.Router();
const diagnosticoService = require("../services/diagnosticoService");
const verifyToken = require("../middleware/verifyToken");

router.post("/save-diagnostico", verifyToken, async (req, res) => {
  const diagnosticoData = req.body;
  const result = await diagnosticoService.saveDiagnostico(diagnosticoData);
  if (result.success) {
    res.status(201).json(result.diagnostico);
  } else {
    res.status(500).json({ message: result.message });
  }
});

router.get("/get-diagnostico/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const result = await diagnosticoService.getDiagnosticoById(id);
  if (result.success) {
    res.status(200).json(result.diagnostico);
  } else {
    res.status(404).json({ message: result.message });
  }
});

router.get("/get-diagnosticos/:idUsuario", verifyToken, async (req, res) => {
  const { idUsuario } = req.params;
  const result = await diagnosticoService.getDiagnosticosByUsuarioId(idUsuario);
  if (result.success) {
    res.status(200).json(result.diagnosticos);
  } else {
    res.status(500).json({ message: result.message });
  }
});

router.get(
  "/usuario/:idUsuario/predicciones",
  verifyToken,
  async (req, res) => {
    const { idUsuario } = req.params;
    try {
      const result = await diagnosticoService.getPrediccionesByUsuarioId(
        idUsuario
      );
      if (result.succes) {
        res.status(200).json(result.diagnosticos);
      } else {
        res
          .status(500)
          .json({ message: result.message });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.get("/get-all-diagnosticos", verifyToken, async (req, res) => {
  const result = await diagnosticoService.getAllDiagnosticos();
  if (result.success) {
    res.status(200).json(result.diagnosticos);
  } else {
    res.status(500).json({ message: result.message });
  }
});

router.put("/update-diagnostico/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const diagnosticoData = req.body;
  const result = await diagnosticoService.updateDiagnostico(
    id,
    diagnosticoData
  );
  if (result.success) {
    res.status(200).json(result.diagnostico);
  } else {
    res.status(404).json({ message: result.message });
  }
});

router.delete("/delete-diagnostico/:id", verifyToken, async (req, res) => {
  const { id } = req.params;
  const result = await diagnosticoService.deleteDiagnostico(id);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.message });
  }
});

module.exports = router;
