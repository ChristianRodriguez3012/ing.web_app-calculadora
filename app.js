const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // Puerto para el servidor

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Ruta para servir el archivo CSS
app.use('/style.css', express.static(path.join(__dirname, 'public/style.css')));

// Ruta para servir el archivo JavaScript
app.use('/script.js', express.static(path.join(__dirname, 'public/script.js')));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});