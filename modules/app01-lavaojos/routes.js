
const express = require('express');
const router = express.Router();
const { guardarInspeccion, obtenerInspecciones, obtenerPorUbicacion } = require('./controller');

// POST - Guardar inspección
router.post('/api/lavaojos', guardarInspeccion);

// GET - Obtener todas las inspecciones
router.get('/api/lavaojos', obtenerInspecciones);

// GET - Obtener inspecciones por ubicación
router.get('/api/lavaojos/:ubicacion', obtenerPorUbicacion);

module.exports = router;

