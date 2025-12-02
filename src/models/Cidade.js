const { DataTypes } = require("sequelize");
const Estado = require("./Estado");
const sequelize = require("../configs/database");

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
      type: DataTypes.STRING(2),
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
