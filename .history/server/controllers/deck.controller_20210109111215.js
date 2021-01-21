const db = require("../models");
const Deck = db.decks;

exports.create = (req, res) => {
  Deck.create(req.body).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  });

};

exports.findAll = (req, res) => {

};

exports.findOne = (req, res) => {
  return {'asdf'};
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};

