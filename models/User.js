const db = require('../config/database');

const User = {
    create: (userData, callback) => {
        const sql = 'INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)';
        db.query(sql, [userData.name, userData.email, userData.password, userData.user_type], callback);
    },
    
    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], callback);
    }
};

module.exports = User;