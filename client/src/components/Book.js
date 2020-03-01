import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import ListBooks from './ListBooks';

function Book() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = () => {
        axios.get('/api/books')
            .then(res => {
                if (res.data) {
                    setBooks(res.data)
                }
            })
            .catch(err => console.log(err))
    }

    const deleteBook = (id) => {

        axios.delete(`/api/books/${id}`)
            .then(res => {
                if (res.data) {
                    getBooks()
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Book List</h1>
            <Input getBooks={getBooks} />
            <ListBooks books={books} deleteBook={deleteBook} />
        </div>
    );
}

export default Book;
