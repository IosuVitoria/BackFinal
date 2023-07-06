const express = require('express');
const {getProfesores, getProfesorById, postProfesores, putProfesores, deleteProfesores} = require('../controllers/profesor.controller');
const upload = require('../../middlewares/upload.file');
const profesoresRouter = express.Router();

profesoresRouter.get('/', getProfesores)
profesoresRouter.get('/:id', getProfesorById)

profesoresRouter.post('/', upload.fields([{name:'foto'}, {name:'foto2'}]), postProfesores)
profesoresRouter.delete('/:id', deleteProfesores)
profesoresRouter.put('/:id', upload.fields([{name:'foto'}, {name:'foto2'}]), putProfesores)

module.exports = profesoresRouter;