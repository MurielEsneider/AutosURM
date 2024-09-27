const { Cliente } = require ("../models");

const obtenerCliente = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (e) {
        res.status(500).json({ mensaje: "Error al obtener los clientes", error: e.message });
    }
}



const crearCliente = async (req, res) =>{
    try {
        const {nombre, correo, numeroLicencia} = req.body;
        const nuevoDato = new Cliente({nombre, correo, numeroLicencia});
        await nuevoDato.save();
        res.json({mensaje:nuevoDato})
    } catch (e) {
        res.status(500).json({mensaje: "error al crear cliente"})
    }
}


const actualizarCliente = async (req, res) => {
    try {
        let { id } = req.params;
        let { nombre, correo, numeroLicencia } = req.body;

        if (!nombre || !correo || !numeroLicencia) {
            return res.json({ mensaje: "Los espacios están vacíos" });
        }
        let clientes = await Cliente.findByPk(id);
        if (!clientes) {
            return res.status(404).json({ mensaje: "Cliente no encontrado" });
        }
        await clientes.update({ nombre, correo, numeroLicencia });

        return res.json({ mensaje: "Cliente actualizado", clientes });
    } catch (e) {
        res.status(500).json({ mensaje: "Error al actualizar el cliente", error: e.message });
    }
};


const eliminarCliente = async (req, res) => {
    try {
        let { id } = req.params;
        let clientes = await Cliente.findByPk(id);

        if (!clientes) {
            return res.status(404).json({ mensaje: "Id no existe" });
        }
        await clientes.destroy();

        return res.json({ mensaje: "Cliente eliminado", clientes });
    } catch (e) {
        res.status(500).json({ mensaje: "Error en el método eliminar Cliente", error: e.message });
    }
};


module.exports = {obtenerCliente, crearCliente, actualizarCliente, eliminarCliente}