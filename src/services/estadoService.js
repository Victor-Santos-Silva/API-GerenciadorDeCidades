const Estado = require("../models/Estado");

const estadoService = {
  getAll: async () => {
    try {
      // Busca todos os estados no banco de dados
      return await Estado.findAll();
    } catch (error) {
      console.log("Erro no service:", error);
      throw new Error("Ocorreu um erro ao buscar todos os Estados");
    }
  },

  getById: async (id) => {
    try {
      // Busca o estado pelo ID
      const estado = await Estado.findByPk(id);

      // Se o estado não existir, retorna null
      if (!estado) {
        return null;
      }

      // Retorna o estado encontrado
      return estado;
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar um unico Estado");
    }
  },
};

module.exports = estadoService;
