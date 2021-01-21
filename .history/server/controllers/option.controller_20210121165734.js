const db = require("../models");
const Option = db.options;

exports.create = (req, res) => {
  Option.create(req.body).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Option."
    });
  });

};

exports.findAll = (req, res) => {
  Option.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving options."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Option.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Option with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Option with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Option.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Option with id=${id}. Maybe Option was not found!`
        });
      } else res.send({ message: "Option was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Option with id=" + id
      });
    });

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
