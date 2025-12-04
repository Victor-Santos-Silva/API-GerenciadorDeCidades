const fs = require("fs");
const path = require("path");
const sequelize = require("../config/database");

// Carregando todos os modelos da pasta
const db = [];

// Lendo todos os arquivos na pasta models, exceto este index.js
fs.readdirSync(__dirname)
  // Filtrando apenas arquivos .js e excluindo index.js
  .filter((file) => file !== "index.js")

  // Importando cada modelo e adicionando ao objeto db
  .forEach((file) => {
    // Importando o modelo
    const model = require(path.join(__dirname, file));

    // Adicionando o modelo ao objeto db
    db[model.name] = model;
  });

// Sincronizando todos os modelos com o banco de dados
sequelize.sync();

// Exportando o objeto db contendo todos os modelos e a instância do Sequelize
module.exports = { sequelize, ...db };
