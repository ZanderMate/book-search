const express = require('express');
const router = express.Router();
const Book = require('../models/books');

router.get('/books', (req, res, next) => {
		Book
		.find({}, 'item')
		.then(data => res.json(data))
		.catch(next)
});

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

router.delete('/books/:id', (req, res, next) => {
    Book.findOneAndDelete({ "_id": req.params.id })
        .then(data => res.json(data))
        .catch(next)
})

module.exports = router;