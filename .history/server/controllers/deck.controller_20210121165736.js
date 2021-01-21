const db = require("../models");
const Deck = db.decks;

exports.create = (req, res) => {
  Deck.create(req.body).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Deck."
    });
  });

};

exports.findAll = (req, res) => {
  Deck.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving decks."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Deck.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Deck with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Deck with id=" + id });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Deck.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      console.warn(data);
      if (!data) {
        res.status(404).send({
          message: `Cannot update Deck with id=${id}. Maybe Deck was not found!`
        });
      } else res.send({ message: "Deck was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Deck with id=" + id
      });
    });

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};
