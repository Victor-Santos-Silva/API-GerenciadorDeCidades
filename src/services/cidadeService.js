const Cidade = require("../models/Cidade");
const Estado = require("../models/Estado");

const cidadeService = {
  getAll: async () => {
    try {
      return await Cidade.findAll();
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar todos os Cidades");
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

  create: async (cidade) => {
    try {
      // Extrai os dados do objeto cidade
      const { nome, estado_uf } = cidade;

      // Verifica se o estado existe no banco de dados
      const estado = await Estado.findOne({
        where: { uf: estado_uf },
      });

      // Verifica se o estado existe e se o nome da cidade é válido
      if (!estado || nome.length > 50) {
        return null;
      }

      // Cria a nova cidade no banco de dados
      return await Cidade.create({ nome, estado_uf });
    } catch (error) {
      throw new Error("Ocorreu um erro ao criar cidade.");
    }
  },

  update: async (id, cidadeToUpdate) => {
    try {
      // Busca a cidade pelo ID
      const cidade = await Cidade.findByPk(id);

      // Se a cidade não existir, retorna null
      if (!cidade) {
        return null;
      }

      // Atualiza a cidade com os novos dados
      await cidade.update(cidadeToUpdate);
      return cidade;
    } catch (error) {
      throw new Error("Ocorreu um erro ao atualizar uma cidade.");
    }
  },

  delete: async (id) => {
    try {
      // Busca a cidade pelo ID
      const cidade = await Cidade.findByPk(id);

      // Se a cidade não existir, retorna null
      if (!cidade) {
        return null;
      }
      // Deleta a cidade do banco de dados
      await cidade.destroy();
      return cidade;
    } catch (error) {
      throw new Error("Ocorreu um erro ao deletar o Cidade");
    }
  },
};

module.exports = cidadeService;
