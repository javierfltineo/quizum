const { Schema } = require("mongoose");

module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        name: {
          type : String,
          required : true,
        },
      },
      {
        id_question: {
          type : String,
        },
      },
      { timestamps: true }
  );

  schema.method("toJSON", function() {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  const Option = mongoose.model("option", schema);

  return Option;
};
