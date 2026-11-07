
const express = require('express');
const connectDB = require('./config/database');
const path = require('path');

const app = express();

// Middleware
app.use(express.json({ limit: '50mb' })); // Límite alto para fotos en base64
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Conectar a MongoDB
connectDB();

// Rutas de las apps
const lavaojosRoutes = require('./modules/app01-lavaojos/routes');
app.use(lavaojosRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

