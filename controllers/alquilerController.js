const { Alquiler } = require('../models');

const obtenerAlquiler = async (req, res) => {
    try {
        const alquileres = await Alquiler.findAll();
        res.json(alquileres);
    } catch (e) {
        res.status(500).json({ mensaje: "Error al obtener los alquileres", error: e.message });
    }

}



const crearAlquiler = async (req, res) =>{
    try {
        const {clienteRegistrado, autoAlquilado, fechaInicioAlquiler, fechaFinAlquiler} = req.body;
        const nuevoDato = new Alquiler({clienteRegistrado, autoAlquilado, fechaInicioAlquiler, fechaFinAlquiler});
        await nuevoDato.save();
        res.json({mensaje:nuevoDato})
    } catch (e) {
        res.status(500).json({mensaje: "error al crear alquiler"})
    }
}

const actualizarAlquiler = async (req, res) => {
    try {
        let { id } = req.params;
        let { clienteRegistrado, autoAlquilado, fechaInicioAlquiler, fechaFinAlquiler } = req.body;

        if (!clienteRegistrado || !autoAlquilado || !fechaInicioAlquiler || !fechaFinAlquiler) {
            return res.json({ mensaje: "Los espacios están vacíos" });
        }
        let alquileres = await Alquiler.findByPk(id);
        if (!clientes) {
            return res.status(404).json({ mensaje: "Alquiler no encontrado" });
        }
        await alquileres.update({ clienteRegistrado, autoAlquilado, fechaInicioAlquiler, fechaFinAlquiler });

        return res.json({ mensaje: "Alquiler actualizado", alquileres });
    } catch (e) {
        res.status(500).json({ mensaje: "Error al actualizar el alquiler", error: e.message });
    }
};


const eliminarAlquiler = async (req, res) => {
    try {
        let { id } = req.params;

        let alquileres = await Alquiler.findByPk(id);

        if (!alquileres) {
            return res.status(404).json({ mensaje: "Id no existe" });
        }
        await alquileres.destroy();

        return res.json({ mensaje: "Alquiler eliminado", alquileres });
    } catch (e) {
        res.status(500).json({ mensaje: "Error en el método eliminar Alquiler", error: e.message });
    }
};


module.exports = {obtenerAlquiler, crearAlquiler, actualizarAlquiler, eliminarAlquiler}