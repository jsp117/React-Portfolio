const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// get all projects
router.route("/")
    .get(projectController.findAll);


module.exports = router;