const Cidade = require("../models/Cidade.js");
const Estado = require("../models/Estado.js");
const cidadeService = require("../services/cidadeService.js");

const cidadeController = {
  getAll: async (req, res) => {
    try {
      // Busca todas as cidades utilizando o serviço
      const cidades = await cidadeService.getAll();

      // Sucesso na busca de todas as cidades
      return res.status(200).json({
        msg: "Todas as cidades!",
        cidades,
      });
    } catch (error) {
      console.log("Erro no controller:", error);
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor!",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      // Busca a cidade utilizando o serviço
      const cidade = await cidadeService.getById(req.params.id);

      // Verifica se a cidade foi encontrada
      if (!cidade) {
        return res.status(400).json({
          msg: "Cidade não encontrada!",
        });
      }

      // Sucesso na busca da cidade
      return res.status(200).json({
        msg: "Cidade encontrada!",
        cidade,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },

  create: async (req, res) => {
    try {
      const { nome, estado_uf } = req.body;
      // Validações dos dados recebidos
      if (nome.length < 5) {
        return res.status(400).json({
          msg: "Nome minimo para uma cidade são 5 caracteres.",
        });
      } else if (nome.length > 50) {
        return res.status(400).json({
          msg: "Nome maximo para uma cidade são 50 caracteres.",
        });
      } else if (estado_uf.length !== 2) {
        return res.status(400).json({
          msg: "UF deve conter 2 caracteres.",
        });
      }

      const cidadeExiste = await Cidade.findOne({
        where: { nome, estado_uf },
      });

      if (cidadeExiste) {
        return res.status(400).json({
          msg: "Cidade já cadastrada nesse estado.",
        });
      }

      // Cria a cidade utilizando o serviço
      const cidade = await cidadeService.create(req.body);

      // Sucesso na criação da cidade
      return res.status(201).json({
        msg: "Cidade criada com sucesso!",
        cidade,
      });
    } catch (error) {
      console.log("Erro no controller:", error);
      return res.status(500).json({
        msg: "Erro ao tentar criar a cidade",
      });
    }
  },

  update: async (req, res) => {
    try {
      // Validações dos dados recebidos
      if (req.body.nome.length < 5) {
        return res.status(400).json({
          msg: "Nome minimo para uma cidade são 5 caracteres.",
        });
      }

      if (req.body.estado_uf.length !== 2) {
        return res.status(400).json({
          msg: "UF deve conter 2 caracteres.",
        });
      }

      // Atualiza a cidade utilizando o serviço
      const cidade = await cidadeService.update(req.params.id, req.body);
      if (!cidade) {
        return res.status(400).json({
          msg: "Cidade nao encontrada!",
        });
      }

      // Sucesso na atualização da cidade
      return res.status(200).json({
        msg: "Cidade atualizada com sucesso!",
        cidade,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao atualizar a cidade!",
      });
    }
  },

  delete: async (req, res) => {
    try {
      // Deleta a cidade utilizando o serviço
      const cidade = await cidadeService.delete(req.params.id);

      // Verifica se a cidade foi encontrada
      if (!cidade) {
        return res.status(400).json({
          msg: "Cidade nao encontrada!",
        });
      }

      // Sucesso na deleção da cidade
      return res.status(200).json({
        msg: "Cidade deletada com sucesso!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor!",
      });
    }
  },
};

module.exports = cidadeController;
