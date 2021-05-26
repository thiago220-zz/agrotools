const models = require('../models');

const Questionario = models.Questionario;
const Usuario = models.Usuario;

exports.index = async function(req,res){
    listaQuestionario = await Questionario.findAll({include: ['usuario', 'respostas']});
    res.render('index', {title: 'Todos os quetionários', questionarios: listaQuestionario})
};

exports.questionario = async function(req,res){    
    res.render('questionario', { title: 'Adicionar um questionário', usuarios: await Usuario.findAll()});
}

exports.resposta = async function(req,res){    
    res.render('resposta', { title: 'Responder o questionário nº ' + req.params.id, id: req.params.id, usuarios: await Usuario.findAll() });
}