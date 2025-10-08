const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rotas de visualização (front-end depois)
router.get('/login', authController.showLogin);
router.get('/register', authController.showRegister);

// Rotas de API (back-end agora)
router.post('/api/register', authController.register);
router.post('/api/login', authController.login);

module.exports = router;