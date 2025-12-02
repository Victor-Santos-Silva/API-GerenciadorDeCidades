const { Router } = require("express");

const router = Router();
const estadoRouter = require("./estadoRouter");
const cidadeRouter = require("./cidadeRouter");

router.use("/estados", estadoRouter);
router.use("/cidades", cidadeRouter);

module.exports = router;
