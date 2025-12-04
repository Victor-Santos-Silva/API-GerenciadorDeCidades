require("dotenv").config(); // Arquivo => .env
const express = require("express");
const { sequelize } = require("./models");
const routes = require("./routers/router.js");

const app = express(); // Iniciando servidor

app.use(express.json()); // Resposta via JSON

app.use("/api", routes); // Indo para outras rotas

// Testando conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexao com o banco de dados deu certo.");
  })
  .catch((err) => {
    console.log("Erro ao conectar no banco: ", err);
  });

// Iniciando servidor na porta definida no .env ou 3001
const PORT = process.env.PORT || 3001;

// Servidor ouvindo na porta definida
app.listen(PORT, () => {
  console.log("---------------------------");
  console.log(`API rodando em http://localhost:${PORT}`);
  console.log("---------------------------");
});
