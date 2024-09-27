const express = require ("express");
const router = express.Router();
const clienteRoutes = require("../controllers/clienteController");

router.get("/clientes", clienteRoutes.obtenerCliente )
router.post("/clientes", clienteRoutes.crearCliente)
router.put("/clientes/:id", clienteRoutes.actualizarCliente)
router.delete("/clientes/:id", clienteRoutes.eliminarCliente)

module.exports = router;