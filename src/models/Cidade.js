const { DataTypes } = require("sequelize");
const Estado = require("./Estado");
const sequelize = require("../config/database");

const Cidade = sequelize.define(
  "Cidade",
  {
    idCidade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    estado_uf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Estado,
        key: "idEstado",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Cidade;
