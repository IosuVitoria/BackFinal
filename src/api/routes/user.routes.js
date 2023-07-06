const express = require('express');
const {login, register, checkSession,changePassword} = require('../controllers/user.controller');
const { isAuth } = require('../../middlewares/auth');
const userRoutes = express.Router();

userRoutes.post('/login', login)
userRoutes.post('/register', register);
userRoutes.get('/checksession', isAuth, checkSession);
userRoutes.put('/passwd',changePassword);

module.exports = userRoutes;