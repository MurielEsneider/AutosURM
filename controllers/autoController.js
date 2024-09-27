const { Auto } = require('../models');

const obtenerAuto = async (req, res) => {
    try {
        const autos = await Auto.findAll();
        res.json(autos);
    } catch (e) {
        res.status(500).json({ mensaje: "Error al obtener los autos", error: e.message });
    }
}



const crearAuto = async (req, res) =>{
    try {
        const {marca, modelo, año, estado} = req.body;
        const nuevoDato = new Auto({marca, modelo, año, estado});
        await nuevoDato.save();
        res.json({mensaje:nuevoDato})
    } catch (e) {
        res.status(500).json({mensaje: "error al crear auto"})
    }
}

const actualizarAuto = async (req, res) => {
    try {
        let { id } = req.params;
        let { marca, modelo, año, estado } = req.body;

        if (!marca || !modelo || !año || !estado) {
            return res.json({ mensaje: "Los espacios están vacíos" });
        }
        let auto = await Auto.findByPk(id);
        if (!auto) {
            return res.status(404).json({ mensaje: "Auto no encontrado" });
        }
        await auto.update({ marca, modelo, año, estado });

        return res.json({ mensaje: "Auto actualizado", auto });
    } catch (e) {
        res.status(500).json({ mensaje: "Error al actualizar el auto", error: e.message });
    }
};


const eliminarAuto = async (req, res) => {
    try {
        let { id } = req.params;
        let auto = await Auto.findByPk(id);

        if (!auto) {
            return res.status(404).json({ mensaje: "Id no existe" });
        }
        await auto.destroy();

        return res.json({ mensaje: "Auto eliminado", auto });
    } catch (e) {
        res.status(500).json({ mensaje: "Error en el método eliminar Auto", error: e.message });
    }
};


module.exports = {obtenerAuto, crearAuto, actualizarAuto, eliminarAuto}