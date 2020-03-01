import React from 'react';

const ListBooks = ({ books, deleteBook }) => {

    return (
        <ul  style={{listStyle:"none"}}>
            {
                books &&
                    books.length > 0 ?
                    (
                        books.map(book => {
                            return (
                                <li key={book._id} onClick={() => deleteBook(book._id)}>{book.item}</li>
                            )
                        })
                    )
                    :
                    (
                        <li>No Books Saved</li>
                    )
            }
        </ul>
    )
}

export default ListBooks;