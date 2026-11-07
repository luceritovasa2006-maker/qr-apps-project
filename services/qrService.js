
const QRCode = require('qrcode');
const path = require('path');
const fs = require('fs');

// URL base de tu servidor (cámbiala cuando tengas dominio real)
const BASE_URL = 'http://localhost:3000';

// Las 13 ubicaciones de los lavaojos
const ubicaciones = [
  'ALMACEN GENERAL',
  'DEPOSITO DE COMBUSTIBLE',
  'POSTCOSECHA',
  'ALMACEN DE FERTILIZANTES',
  'MANTENIMIENTO',
  'RESPEL',
  'BOMBA MIPE 1',
  'BOMBA MIPE 2',
  'BOMBA MIPE 3',
  'BOMBA MIPE 4',
  'BOMBA MIPE 5',
  'BOMBA MIRFE 1',
  'BOMBA MIRFE 2'
];

// Crear carpeta para los QR si no existe
const qrFolder = path.join(__dirname, '..', 'public', 'qr-codes');
if (!fs.existsSync(qrFolder)) {
  fs.mkdirSync(qrFolder);
}

// Generar QR para cada ubicación
const generarTodosLosQR = async () => {
  console.log('🔄 Generando códigos QR...\n');

  for (const ubicacion of ubicaciones) {
    const url = `${BASE_URL}/lavaojos.html?ubicacion=${encodeURIComponent(ubicacion)}`;
    const nombreArchivo = ubicacion.replace(/ /g, '-') + '.png';
    const rutaArchivo = path.join(qrFolder, nombreArchivo);

    try {
      await QRCode.toFile(rutaArchivo, url, {
        width: 400,
        margin: 2,
        color: {
          dark: '#1a1a1a',
          light: '#ffffff'
        }
      });
      console.log(`✅ QR generado: ${nombreArchivo}`);
      console.log(`   📎 URL: ${url}\n`);
    } catch (error) {
      console.error(`❌ Error generando QR para ${ubicacion}:`, error.message);
    }
  }

  console.log('🎉 ¡Todos los QR fueron generados!');
  console.log(`📁 Los encontrarás en: public/qr-codes/`);
};

generarTodosLosQR();

