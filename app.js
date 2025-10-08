const express = require('express');
const session = require('express-session');
const app = express();

// Conexão com o banco (adicione esta linha)
require('./config/database');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'lling-secret',
    resave: false,
    saveUninitialized: false
}));

// Rotas
app.use('/', require('./routes/authRoutes'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});