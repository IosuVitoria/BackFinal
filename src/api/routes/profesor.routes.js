const express = require('express');
const {getProfesores, getProfesorById, postProfesores,getProfesoresNotas, putProfesores, deleteProfesores} = require('../controllers/profesor.controller');
const upload = require('../../middlewares/upload.file');
const profesoresRouter = express.Router();

profesoresRouter.get('/', getProfesores)
profesoresRouter.get('/:id', getProfesorById)
profesoresRouter.get('/notas/:id', getProfesoresNotas)
profesoresRouter.post('/', postProfesores)
profesoresRouter.delete('/:id', deleteProfesores)
profesoresRouter.put('/:id',  putProfesores)

module.exports = profesoresRouter;