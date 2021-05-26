var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/apiController');

router.get('/usuarios', api_controller.todosUsuarios);

router.get('/questionario-respostas/:id', api_controller.repostasPorQuestionario);

router.post('/salvar-questionario', api_controller.salvarQuestionario);

router.post('/salvar-resposta', api_controller.salvarResposta);

module.exports = router;
