const { Router } = require("express");
const router = Router();
const estadoController = require("../controllers/estadoController");

//busca todos os estados
router.get("/", estadoController.getAll);

// funcao buscar unico estado
router.get("/:id", estadoController.getOne);

module.exports = router;
