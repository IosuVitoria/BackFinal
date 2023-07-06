const express = require('express');
const {getAsignaturas, getAsignaturaById, postAsignaturas, putAsignaturas, deleteAsignaturas} = require('../controllers/asignatura.controller');
const upload = require('../../middlewares/upload.file');
const asignaturasRouter = express.Router();

asignaturasRouter.get('/', getAsignaturas)
asignaturasRouter.get('/:id', getAsignaturaById)

asignaturasRouter.post('/', postAsignaturas)
asignaturasRouter.delete('/:id', deleteAsignaturas)
asignaturasRouter.put('/:id', upload.fields([{name:'foto'}, {name:'foto2'}]), putAsignaturas)

module.exports = asignaturasRouter;