var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('index');
});

router.get('/usuarios', function (req, res, next) {
    res.send('usuarios');
});

router.get('/respostas/:id', function (req, res, next) {
    res.send('respostas');
});

router.get('/questionarios/:id', function (req, res, next) {
    res.send('respostas');
});

router.post('/salvar-questionario', function (req, res, next) {
    res.send('respostas');
});

router.post('/salvar-resposta', function (req, res, next) {
    res.redirect('/');
});

module.exports = router;
