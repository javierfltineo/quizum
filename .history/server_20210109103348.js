const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors())

require("./server/routes/deck.routes")(app);

const db = require("./server/models");





db.mongoose
  .connect(db.url, {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useCreateIndex: true

  })
  .then(() => {
    console.log("Connected to the database!");

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

