const db = require("../models");
const Question = db.questions;

exports.create = (req, res) => {
  Question.create(req.body).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Question."
    });
  });

};

exports.findAll = (req, res) => {
  Question.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving questions."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Question.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Question with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Question with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  console.log(req.params);
  Question.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Question with id=${id}. Maybe Question was not found!`
        });
      } else res.send({ message: "Question was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Question with id=" + id
      });
    });

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};

