
const qrService = require('../../services/qrService');

const MODULE_NAME = 'productos';

const productosController = {
  async crear(req, res) {
    try {
      const { nombre, referencia, categoria, precio, descripcion } = req.body;

      const qrContent = JSON.stringify({
        tipo: 'producto',
        nombre,
        referencia,
        categoria,
        precio,
        descripcion
      });

      const qr = await qrService.generateAndSave({
        appModule: MODULE_NAME,
        title: `Producto: ${nombre}`,
        qrContent,
        data: { nombre, referencia, categoria, precio, descripcion }
      });

      res.json({ success: true, message: 'QR de producto creado', data: qr });
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

module.exports = productosController;

