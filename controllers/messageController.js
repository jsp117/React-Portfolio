const db = require("../models");

// Defining methods for the ProjectController
module.exports = {
    create: function (req, res) {
        db.Message
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}