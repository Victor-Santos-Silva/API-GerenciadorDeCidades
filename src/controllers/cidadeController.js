const cidadeController = {
  getAll: async (req, res) => {
    try {
      const cidade = await cidadeService.getAll();
      return res.status(200).json({
        msg: "Todos os cidade!",
        cidade,
      });
    } catch (error) {
      return res.status(200).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const admin = await cidadeervice.getById(req.params.id);
      if (!admin) {
        return res.status(400).json({
          msg: "Admin nao encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Admin encontrado",
        admin,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Ocorreu um erro no servidor",
      });
    }
  },
};

module.exports = cidadeController;
