// index.js

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


// Importar Sequelize (db.js) y configurarlo
const sequelize = require('./db');

// Importar y usar las rutas
const postsRouter = require('./routes/postsRouter');

app.use(express.json());
app.use(cors({
  origin: '*',  // Permitir todas las solicitudes entrantes
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Encabezados permitidos
}));
app.use(postsRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
