const router = require("express").Router();
const messageController = require("../controllers/messageController");


// create new message
router.route("/")
    .post(messageController.create);


module.exports = router;