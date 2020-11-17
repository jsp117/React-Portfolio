const router = require("express").Router();
const projectRoutes = require("./api");

// Book routes
router.use("/projects", projectRoutes);

module.exports = router;
