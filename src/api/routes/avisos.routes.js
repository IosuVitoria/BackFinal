const express = require('express');
const {getAvisos,postAviso} = require('../controllers/aviso.controller');

const avisosRoutes = express.Router();

avisosRoutes.get('/', getAvisos);
avisosRoutes.post('/', postAviso);



module.exports = avisosRoutes;