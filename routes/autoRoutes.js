const express = require ("express");
const router = express.Router();
const autoController = require("../controllers/autoController");

router.get("/autos", autoController.obtenerAuto)
router.post("/autos", autoController.crearAuto)
router.put("/autos/:id", autoController.actualizarAuto)
router.delete("/autos/:id",autoController.eliminarAuto)

module.exports = router;