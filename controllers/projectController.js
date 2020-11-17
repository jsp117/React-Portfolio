const db = require("../models");

// Defining methods for the ProjectController
module.exports = {
  findAll: function (req, res) {
    db.Project
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Project
      .remove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
