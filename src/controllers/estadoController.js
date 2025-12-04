const estadoService = require("../services/estadoService");

const estadoController = {
  getAll: async (req, res) => {
    try {
      // Chama o serviço para obter todos os estados
      const estado = await estadoService.getAll();

      // Retorna a resposta com os estados encontrados
      return res.status(200).json({
        msg: "Todos os Estados!",
        estado,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      // Chama o serviço para obter o estado pelo ID
      const estado = await estadoService.getById(req.params.id);

      // Se o estado não for encontrado, retorna erro 400
      if (!estado) {
        return res.status(400).json({
          msg: "Estado não encontrado!",
        });
      }

      // Retorna a resposta com o estado encontrado
      return res.status(200).json({
        msg: "Estado encontrado",
        estado,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
};

module.exports = estadoController;
