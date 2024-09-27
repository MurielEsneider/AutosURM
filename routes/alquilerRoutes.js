const express = require ("express");
const router = express.Router();
const alquilerRoutes = require("../controllers/alquilerController");

router.get("/alquileres", alquilerRoutes.obtenerAlquiler)
router.post("/alquileres", alquilerRoutes.crearAlquiler)
router.put("/alquileres/:id", alquilerRoutes.actualizarAlquiler)
router.delete("/alquileres/:id", alquilerRoutes.eliminarAlquiler)

module.exports = router;