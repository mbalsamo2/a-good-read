import React from 'react';
import { Link } from 'react-router-dom';
import  './book.css';

const Book = ({ book }) => {
  return (
    <div className="booksDiv">
      <Link to={`/books/${book.id}`}>
        <img className="booksImage" src={`${book.image_url}`} alt={book.name} />
      </Link>
      <h3>{book.name} || {book.author}</h3>
    </div>
  )
}

export default Book;
