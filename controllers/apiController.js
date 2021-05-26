const models = require('../models');

const Questionario = models.Questionario;
const Usuario = models.Usuario;
const Resposta = models.Resposta;

exports.todosUsuarios = async function (req, res) {
    res.json(await Usuario.findAll());
};

exports.repostasPorQuestionario = async function (req, res) {
    res.json(await Resposta.findAll({
        where: {
            questionarioId: req.params.id
        },
        include: ['usuario'],
    }));
};

exports.salvarQuestionario = async function (req, res) {
    const resultadoCreate = await Questionario.create({
        titulo: req.body.titulo,
        usuarioId: req.body.usuario,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });
    res.redirect('/');
};

exports.salvarResposta = async function (req, res) {
    const resultadoCreate = await Resposta.create({
        resposta: req.body.resposta,
        lat: req.body.lat,
        long: req.body.long,
        questionarioId: req.body.questionarioId,
        usuarioId: req.body.usuarioId,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });
    res.redirect('/');
};