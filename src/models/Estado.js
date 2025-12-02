const { DataTypes } = require("sequelize");

const Estado = sequelize.define(
  "Estado",
  {
    idEstado: {
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
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = Estado;
