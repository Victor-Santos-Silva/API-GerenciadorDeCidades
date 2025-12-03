const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");

const cidadeService = {
  create: async (cidade) => {
    try {
      const { nome, estado_uf } = cidade;

      const estado = await Estado.findOne({
        where: { uf: estado_uf.toUpperCase() },
      });

      if (!estado) {
        throw new Error("Estado não encontrado com esse UF.");
      }

      return await Cidade.create({ nome, estado_uf });
    } catch (error) {
      console.log("Erro no service:", error);
      throw new Error("Ocorreu um erro ao criar Cidade");
    }
  },

  update: async (id, cidadeToUpdate) => {
    try {
      const cidade = await Cidade.findByPk(id);
      if (!cidade) {
        // se cidade for vazio
        return null;
      }
      await cidade.update(cidadeToUpdate);
      await cidade.save();
      return cidade;
    } catch (error) {
      throw new Error("Ocorreu um erro ao atualizar Cidade");
    }
  },
  getById: async (id) => {
    try {
      const cidade = await Cidade.findByPk(id);
      if (!cidade) {
        return null;
      }
      return cidade;
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar um unico Cidade");
    }
  },
  getAll: async () => {
    try {
      return await Cidade.findAll();
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar todos os Cidades");
    }
  },
  delete: async (id) => {
    try {
      const cidade = await Cidade.findByPk(id);
      if (!cidade) {
        return null;
      }
      await cidade.destroy();
      return cidade;
    } catch (error) {
      throw new Error("Ocorreu um erro ao deletar o Cidade");
    }
  },
};

module.exports = cidadeService;
