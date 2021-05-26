const { Schema, model } = require("mongoose");

const authorSchema = Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: String,
});

const Author = model("author", authorSchema);

module.exports = Author;
