const estadoService = require("../services/estadoService");

const estadoController = {
  getAll: async (req, res) => {
    try {
      const estado = await estadoService.getAll();
      return res.status(200).json({
        msg: "Todos os Estados!",
        estado,
      });
    } catch (error) {
      console.log("Erro no controller:", error);
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const estado = await estadoService.getById(req.params.id);
      if (!estado) {
        return res.status(400).json({
          msg: "Estado não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Estado encontrado",
        estado,
      });
    } catch (error) {
      console.log("Erro no controller:", error);
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
};

module.exports = estadoController;
