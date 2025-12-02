const cidadeService = require("../services/cidadeService.js");

const cidadeController = {
  getAll: async (req, res) => {
    try {
      const cidades = await cidadeService.getAll();
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
      const cidade = await cidadeService.getById(req.params.id);
      if (!cidade) {
        return res.status(400).json({
          msg: "cidade nao encontrada!",
        });
      }
      return res.status(200).json({
        msg: "cidade encontrada!",
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
      const cidade = await cidadeService.create(req.body);
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
      const cidade = await cidadeService.update(req.params.id, req.body);
      if (!cidade) {
        return res.status(400).json({
          msg: "Cidade nao encontrada!",
        });
      }
      return res.status(200).json({
        msg: "Cidade atualizada com sucesso!",
        cidade,
      });
    } catch (error) {
      console.log("Erro para atualizar no controller:", error);
      return res.status(500).json({
        msg: "Erro ao atualizar a cidade!",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const cidade = await cidadeService.delete(req.params.id);
      if (!cidade) {
        return res.status(400).json({
          msg: "Cidade nao encontrada!",
        });
      }
      return res.status(200).json({
        msg: "Cidade deletada com sucesso!",
      });
    } catch (error) {
      console.log("Erro para deletar no controller:", error);
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor!",
      });
    }
  },
};

module.exports = cidadeController;
