const { Router } = require("express");

const router = Router();
const estadoRouter = require("./estadoRouter");
const cidadeRouter = require("./cidadeRouter");
const autenticateToken = require("../middleware/authenticateToken");

router.use("/estados", autenticateToken, estadoRouter);
router.use("/cidades", autenticateToken, cidadeRouter);

module.exports = router;
