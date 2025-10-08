const User = require('../models/User');
const bcrypt = require('bcryptjs');

const authController = {
    register: (req, res) => {
        const { name, email, password, user_type } = req.body;
        
        // Verifica se usuário já existe
        User.findByEmail(email, (err, results) => {
            if (err) throw err;
            
            if (results.length > 0) {
                return res.status(400).json({ error: 'Email já cadastrado' });
            }
            
            // Criptografa a senha
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) throw err;
                
                const newUser = {
                    name,
                    email,
                    password: hash,
                    user_type
                };
                
                User.create(newUser, (err, results) => {
                    if (err) throw err;
                    res.json({ message: 'Usuário criado com sucesso!', userId: results.insertId });
                });
            });
        });
    },
    
    login: (req, res) => {
        const { email, password } = req.body;
        
        User.findByEmail(email, (err, results) => {
            if (err) throw err;
            
            if (results.length === 0) {
                return res.status(400).json({ error: 'Usuário não encontrado' });
            }
            
            const user = results[0];
            
            // Verifica a senha
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                
                if (isMatch) {
                    req.session.userId = user.id;
                    req.session.userType = user.user_type;
                    res.json({ message: 'Login realizado com sucesso!', userType: user.user_type });
                } else {
                    res.status(400).json({ error: 'Senha incorreta' });
                }
            });
        });
    }
};

module.exports = authController;