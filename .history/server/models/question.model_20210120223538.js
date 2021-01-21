const { Schema } = require("mongoose");
require("deck.model");
module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        name: {
          type : String,
          required : true,
        },
      },
      {
        options: {
          type : String,
        },
      },
      {
        deck: {
          type : Deck,
          required : true,
        },
      },
      { timestamps: true }
  );

  schema.method("toJSON", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  const Question = mongoose.model("question", schema);

  return Question;
};
