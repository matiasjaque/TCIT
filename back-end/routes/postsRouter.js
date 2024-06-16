// routes/posts.js

const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Ruta para listar todos los posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error('Error al obtener posts:', error);
    res.status(500).json({ error: 'Error al obtener posts.' });
  }
});

// Ruta para crear un nuevo post
router.post('/posts', async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const newPost = await Post.create({ nombre, descripcion });
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error al crear un nuevo post:', error);
    res.status(500).json({ error: 'Error al crear un nuevo post.' });
  }
});

// Ruta para eliminar un post por su id
router.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Post.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    res.status(500).json({ error: 'Error al eliminar el post.' });
  }
});

module.exports = router;
