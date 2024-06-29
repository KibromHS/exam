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
        res.sendFile(path.join(__dirname, 'public', 'nostudent.html'));
    }

});

app.post('/login', (req, res) => {
    const uname = req.body.username;

    if (uname === 'newp19453/16') {
        res.redirect('/results/t');
    } else if (uname == 'newp19464/16') {
        res.redirect('/results/v');
    } else if (uname == 'newp19478/16') {
        res.redirect('/results/w');
    } else {
        res.redirect('/results/n');
    }
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nofound.html'));
});

app.listen(3000, () => {
    console.log('server online');
});
