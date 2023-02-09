const mongoose = require("mongoose");

// Book Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book
