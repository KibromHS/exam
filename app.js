const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/result', (req, res) => {
    const id = req.session.dataToSend;

    if (id == 't') {
        res.sendFile(path.join(__dirname, 'public', 'main.html'));
    } else if (id == 'v') {
        res.sendFile(path.join(__dirname, 'public', 'main1.html'));
    } else if (id == 'w') {
        res.sendFile(path.join(__dirname, 'public', 'main2.html'));
    } else {
        res.send(id)
    }
    
});

app.post('/login', (req, res) => {
    const uname = req.body.username;
    
    if (uname === 'tsineat') {
        req.session.dataToSend = 't';
        res.redirect('/result');
    } else if (uname == 'kibrom') {
        req.session.dataToSend = 'v';
        res.redirect('/result');
    } else if (uname == 'henok') {
        req.session.dataToSend = 'w';
        res.redirect('/result');
    } else {
        res.redirect('/');
    }
});

app.listen(3000, () => {
    console.log('server online');
});
