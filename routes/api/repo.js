const router = require("express").Router();
const axios = require("axios");


// get all repos
router.route("/").get(async function (req, res) {
    let token = process.env.TOKEN_NEW;
    
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