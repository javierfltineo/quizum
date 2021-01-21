module.exports = app => {
  const decks = require("../controllers/deck.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", decks.create);

  // Retrieve all Tutorials
  router.get("/", decks.findAll);

  // Retrieve all published Tutorials
  router.get("/published", decks.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", decks.findOne);

  // Update a Tutorial with id
  router.put("/:id", decks.update);

  // Delete a Tutorial with id
  router.delete("/:id", decks.delete);

  // Create a new Tutorial
  router.delete("/", decks.deleteAll);

  app.use('/api/decks', router);
};