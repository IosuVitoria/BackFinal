const express = require('express');
const {login, register, checkSession,changePassword,getUsers,deleteUser} = require('../controllers/user.controller');
const { isAuth } = require('../../middlewares/auth');
const userRoutes = express.Router();

userRoutes.post('/login', login)
userRoutes.post('/register', register);
userRoutes.get('/checksession', isAuth, checkSession);
userRoutes.put('/:id',changePassword);
userRoutes.get('/',getUsers);
userRoutes.delete('/delete/:id',deleteUser);

module.exports = userRoutes;