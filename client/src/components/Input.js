import React, { useState } from 'react';
import axios from 'axios';

function Input(props) {
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState([]);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [book, setBook] = useState({})


    const addBook = () => {

        if (book && book.length > 0) {
            axios.post('/api/books',
                {
                    'title': title,
                    'authors': authors,
                    'image': image,
                    'description': description,
                    'link': link
                })
                .then(res => {
                    if (res.data) {
                        props.getBooks();
                        setBook("");
                    }
                })
                .catch(err => console.log(err))
        } else {
            console.log('Item required')
        }
    }

    const handleChange = (e) => {
        setBook(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={addBook}>add book</button>
        </div>
    )
}

export default Input