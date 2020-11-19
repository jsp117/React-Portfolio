const router = require("express").Router();
const repos = require("../../controllers/repos");
const axios = require("axios");


// get all repos
router.route("/").get(async function (req, res) {
    var token = "toke91c0d6a2bcb84fd0f2db445a94f7eb4b12f35dfb"
    token = token.replace('toke', '');
    // get all repos from github
    let repos = await axios({
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
    res.json(repos);


});
// working





module.exports = router;