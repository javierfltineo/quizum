const db = require("../models");
const Deck = db.decks;

exports.create = (req, res) => {
  Deck.create(req.body);

};

exports.findAll = (req, res) => {
  Deck.create(req.body);
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

};

