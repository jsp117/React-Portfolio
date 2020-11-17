const router = require("express").Router();
const projectRoutes = require("./project");
const messageRoutes = require("./message");
const repoRoutes = require("./repo");

// router.use("/projects", projectRoutes);
// router.use("/message", messageRoutes);
router.use("/repo", repoRoutes);

module.exports = router;
