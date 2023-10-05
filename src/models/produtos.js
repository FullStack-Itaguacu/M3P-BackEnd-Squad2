const { STRING, ENUM, DATE, DECIMAL, INTEGER } = require('sequelize');
const { connection } = require('../database/connection');
const { Usuarios } = require('./usuarios');

const Produtos = connection.define(
  'produtos',
  {
    usuarioId: {
      type: INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
    nomeProduto: STRING,
    nomeLab: STRING,
    imagemProduto: STRING,
    dosagem: STRING,
    descricao: STRING,
    precoUnitario: DECIMAL(10, 2),
    tipoProduto: {
      type: ENUM('Controlado', 'Não Controlado'),
    },
    totalEstoque: INTEGER,
    usuarioId: {
      type: INTEGER,
      references: {
        model: 'usuarios',
        key: 'id',
      },
    },
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

Produtos.belongsTo(Usuarios);

module.exports = {
  Produtos,
};
