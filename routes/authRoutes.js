const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rotas de visualização
router.get('/login', (req, res) => {
    res.send('Página de Login');
});

router.get('/register', (req, res) => {
    res.send('Página de Cadastro');
});

// Rotas de API
router.post('/api/register', authController.register);
router.post('/api/login', authController.login);

module.exports = router;