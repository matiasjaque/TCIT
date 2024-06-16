// models/Post.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('Post', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
async function syncPostModel() {
  try {
    await Post.sync({ alter: true }); // Puedes usar { force: true } para recrear la tabla
    console.log('Modelo Post sincronizado correctamente.');
  } catch (error) {
    console.error('Error al sincronizar modelo Post:', error);
  }
}

syncPostModel();

module.exports = Post;
