const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {title: 'LLING'});
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});