const express = require('express');
const {getAlumnos, getAlumnoById,getAlumnoByCurso, getAlumnosPaged, postAlumnos, putAlumnos, deleteAlumnos} = require('../controllers/alumno.controller');
const upload = require('../../middlewares/upload.file');
const alumnosRouter = express.Router(); 


alumnosRouter.get('/', getAlumnos)

alumnosRouter.get('/paged', getAlumnosPaged)
alumnosRouter.get('/:id', getAlumnoById)
alumnosRouter.get('/curso/:curso', getAlumnoByCurso)
alumnosRouter.post('/', postAlumnos)
alumnosRouter.delete('/:id', deleteAlumnos)
alumnosRouter.put('/:id', upload.fields([{name:'foto'}, {name:'foto2'}]), putAlumnos)

module.exports = alumnosRouter;