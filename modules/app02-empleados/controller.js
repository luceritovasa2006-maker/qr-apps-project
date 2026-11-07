
const qrService = require('../../services/qrService');

const MODULE_NAME = 'empleados';

const empleadosController = {
  async crear(req, res) {
    try {
      const { nombre, cedula, cargo, departamento, telefono } = req.body;

      const qrContent = JSON.stringify({
        tipo: 'empleado',
        nombre,
        cedula,
        cargo,
        departamento,
        telefono
      });

      const qr = await qrService.generateAndSave({
        appModule: MODULE_NAME,
        title: `Empleado: ${nombre}`,
        qrContent,
        data: { nombre, cedula, cargo, departamento, telefono }
      });

      res.json({ success: true, message: 'QR de empleado creado', data: qr });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const qrs = await qrService.getByModule(MODULE_NAME);
      res.json({ success: true, total: qrs.length, data: qrs });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = empleadosController;

