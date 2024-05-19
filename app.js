const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/result', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.post('/login', (req, res) => {
    const uname = req.body.username;
    if (uname == '') res.redirect('/');
    
    if (uname === 'tsineat') {
        res.redirect('/result');
    }
});

app.listen(3000, () => {
    console.log('server online');
});


