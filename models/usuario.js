'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Resposta, {as: 'questionarios'});
      Usuario.hasMany(models.Resposta, {as: 'respostas'});
    }
  };
  Usuario.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};