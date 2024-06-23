const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/results/:id', (req, res) => {
    const id = req.params.id;

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
        res.redirect('/results/t');
    } else if (uname == 'kibrom') {
        res.redirect('/results/v');
    } else if (uname == 'henok') {
        res.redirect('/results/w');
    } else {
        res.redirect('/');
    }
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notfound.html'));
});

app.listen(3000, () => {
    console.log('server online');
});
