const express = require('express');
const {getAlumnos, getAlumnoById, getAlumnosPaged, postAlumnos, putAlumnos, deleteAlumnos} = require('../controllers/alumno.controller');
const upload = require('../../middlewares/upload.file');
const alumnosRouter = express.Router(); 

 /**
   * @swagger
   * /alumno:  
   *  get:
   *     description: Returns the homepage masdfasdf
   *     responses:
   *       200:
   *         description: hello world
   */
alumnosRouter.get('/', getAlumnos)
 /**
   * @swagger
   * /alumno:  
   *  get:
   *     description: Returns the homepage masdfasdf
   *     responses:
   *       200:
   *         description: hello world
   */
alumnosRouter.get('/paged', getAlumnosPaged)
alumnosRouter.get('/:id', getAlumnoById)

alumnosRouter.post('/', postAlumnos)
alumnosRouter.delete('/:id', deleteAlumnos)
alumnosRouter.put('/:id', upload.fields([{name:'foto'}, {name:'foto2'}]), putAlumnos)

module.exports = alumnosRouter;