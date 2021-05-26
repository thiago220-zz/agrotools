'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resposta extends Model {
    static associate(models) {
      Resposta.belongsTo(models.Usuario, { foreignKey: 'usuarioId', as: 'usuario' });
    }
  };
  Resposta.init({
    resposta: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE,
    questionarioId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resposta',
  });
  return Resposta;
};