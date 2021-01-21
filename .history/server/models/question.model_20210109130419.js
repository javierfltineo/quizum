const { Schema } = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        name: {
          type : String,
          required : true,
          unique : false,
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
