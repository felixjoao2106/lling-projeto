const express = require('express');
const session = require('express-session');
const app = express();

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