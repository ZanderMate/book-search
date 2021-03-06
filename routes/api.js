const express = require('express');
const router = express.Router();
const Book = require('../models/books');

// show all the saved books
router.get('/books', (req, res, next) => {
		Book
		.find({})
		.then(data => res.json(data))
		.catch(next)
});

// add book to saved books
router.post('/books', (req, res, next) => {
    if (req.body) {
        Book
            .create(req.body)
            .then(data => res.json(data))
            .catch(next);
    }
    else {
        res.json({ error: "The field is empty" })
    }
});

// delete a book from saved books1
router.delete('/books/:id', (req, res, next) => {
    Book.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;