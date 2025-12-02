const { Router } = require("express");

const router = Router();

//busca todos os estados
router.get("/");

// funcao buscar unico estado
router.get("/:id");

module.exports = router;
