const Estado = require("../models/Estado");

const estadoService = {
  getAll: async () => {
    try {
      return await Estado.findAll();
    } catch (error) {
      console.log("Erro no service:", error);
      throw new Error("Ocorreu um erro ao buscar todos os Estados");
    }
  },

  getById: async (id) => {
    try {
      const estado = await Estado.findByPk(id);
      if (!estado) {
        return null;
      }
      return estado;
    } catch (error) {
      console.log("Erro no service:", error);
      throw new Error("Ocorreu um erro ao buscar um unico Estado");
    }
  },
};

module.exports = estadoService;
