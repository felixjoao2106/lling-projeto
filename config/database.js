const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lling_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro de conexão MySQL:', err.message);
        // Mostra qual é o erro específico
        return;
    }
    console.log('Conectado ao MySQL - LLING Database!');
});

module.exports = connection;