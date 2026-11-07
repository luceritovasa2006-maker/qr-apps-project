
const Lavaojos = require('../../models/Lavaojos');

// Guardar una inspección
const guardarInspeccion = async (req, res) => {
  try {
    const { ubicacion, inspector, firma, preguntas } = req.body;

    const nuevaInspeccion = new Lavaojos({
      ubicacion,
      inspector,
      firma,
      preguntas
    });

    await nuevaInspeccion.save();
    res.status(201).json({ mensaje: '✅ Inspección guardada exitosamente', data: nuevaInspeccion });
  } catch (error) {
    console.error('❌ Error guardando inspección:', error.message);
    res.status(500).json({ mensaje: 'Error al guardar la inspección', error: error.message });
  }
};

// Obtener todas las inspecciones
const obtenerInspecciones = async (req, res) => {
  try {
    const inspecciones = await Lavaojos.find().sort({ fecha: -1 });
    res.status(200).json(inspecciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener inspecciones', error: error.message });
  }
};

// Obtener inspecciones por ubicación
const obtenerPorUbicacion = async (req, res) => {
  try {
    const { ubicacion } = req.params;
    const inspecciones = await Lavaojos.find({ ubicacion }).sort({ fecha: -1 });
    res.status(200).json(inspecciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener inspecciones', error: error.message });
  }
};

module.exports = { guardarInspeccion, obtenerInspecciones, obtenerPorUbicacion };
