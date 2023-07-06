const express = require('express');
const {getAutores, postAutores, putAutores, deleteAutores} = require('../controllers/autor.controller');
const upload = require('../../middlewares/upload.file');
const autoresRouter = express.Router();

autoresRouter.get('/', getAutores)
autoresRouter.post('/', upload.fields([{name:'foto'}, {name:'foto2'}]), postAutores)
autoresRouter.delete('/:id', deleteAutores)
autoresRouter.put('/:id', upload.fields([{name:'foto'}, {name:'foto2'}]), putAutores)

module.exports = autoresRouter;