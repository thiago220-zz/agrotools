var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Todos os quetionários' });
});

router.get('/questionario', function (req, res, next) {
  res.render('questionario', { title: 'Adicionar um questionário' });
});

router.get('/resposta/:id', function (req, res, next) {
  res.render('resposta', { title: 'Responder o questionário nº ' + req.params.id });
});

module.exports = router;
