const { Router } = require("express");
const cidadeController = require("../controllers/cidadeController");
const router = Router();

//busca todos os admins
router.get("/", cidadeController.getAll);

// funcao buscar unico
router.get("/:id", cidadeController.getOne);

//funcao de criar
router.post("/", cidadeController.create);

// funcao de editar
router.put("/:id", cidadeController.update);

// funcao de deletar
router.delete("/:id", cidadeController.delete);

module.exports = router;
