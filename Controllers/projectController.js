const db = require("../Models");

module.exports = {
  findAll: function(req, res) {
    db.Project.find(req.query)
      .populate({ path: "employees", model: "employee" })
      .sort({ _id: 1 })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Project.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Project.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Update function");
    console.log(req.body);
    db.Project.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log("Returned");
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  remove: function(req, res) {
    db.Project.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};