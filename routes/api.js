const router = require("express").Router();
const projectController = require("../controllers/projectController");
const messageController = require("../controllers/messageController");

router.route("/api/projects")
    .get(projectController.findAll);


router.route("/api/messages")
    .post(messageController.create);

router.route("/api/getRepos", async function (req, res) {
    var repos = await axios({
        url: "https://api.github.com/users/jsp117/repos",
        method: "GET",
        headers: {
            Accept: "application/vnd.github.v3+json",
            Username: "jsp117",
            Authorization: `token ${token}`,
        },
    }).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
    // display repos
    res.json({ repos: repos });
});


module.exports = router;