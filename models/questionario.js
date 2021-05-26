'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questionario extends Model {
    static associate(models) {
      Questionario.belongsTo(models.Usuario, {foreignKey: 'usuarioId', as: 'usuario'});
      Questionario.hasMany(models.Resposta, {as: 'respostas'});
    }
  };
  Questionario.init({
    titulo: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Questionario',
  });
  return Questionario;
};