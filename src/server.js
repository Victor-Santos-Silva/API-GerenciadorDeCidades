require("dotenv").config(); // Arquivo => .env
const express = require("express");
const { sequelize } = require("./models");
const routes = require("./routers/router.js");

const app = express(); // Iniciando servidor

app.use(express.json()); // Resposta via JSON

app.use("/api", routes); // Indo para outras rotas

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexao com o banco de dados deu certo.");
  })
  .catch((err) => {
    console.log("Erro ao conectar no banco: ", err);
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("---------------------------");
  console.log(`API rodando em http://${PORT}`);
  console.log("---------------------------");
});
