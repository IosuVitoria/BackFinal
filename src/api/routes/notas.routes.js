const express = require('express');
const {getNotas, getNotaById,getNotaByAlumno, postNotas,insertNotas, putNotas, deleteNotas} = require('../controllers/nota.controller');
const upload = require('../../middlewares/upload.file');
const notasRouter = express.Router();

notasRouter.get('/', getNotas)
notasRouter.get('/:id', getNotaById)
notasRouter.get('/alumno/:id', getNotaByAlumno)

notasRouter.post('/',  postNotas)
notasRouter.post('/s',  insertNotas)
notasRouter.delete('/:id', deleteNotas)
notasRouter.put('/:id', putNotas)


module.exports = notasRouter;