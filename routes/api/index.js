const router = require("express").Router();
const repoRoutes = require("./repo");

router.use("/repo", repoRoutes);

module.exports = router;
