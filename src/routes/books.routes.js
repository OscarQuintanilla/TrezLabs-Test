const { Router } = require("express");
const router = Router();
const Book = require("../schemas/book.schema");

// POST Request - Add a new book
router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title
  });

  newBook.save()
    .then(book => res.json(book))
    .catch(err => res.status(422).json(`Error: 'Book already exists'`));
});

// GET Request - Get all books
router.get("/", (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// DELETE Request - Delete a book by title
router.delete("/:title", (req, res) => {
  Book.findOneAndRemove({ title: req.params.title })
    .then(() => res.json("Book deleted"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
