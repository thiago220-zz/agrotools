var express = require('express');
var router = express.Router();

var frontend_controller = require('../controllers/frontendController');

router.get('/', frontend_controller.index);

router.get('/questionario', frontend_controller.questionario);

router.get('/resposta/:id', frontend_controller.resposta);

module.exports = router;
