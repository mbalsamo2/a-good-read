import React from 'react';
import { Link } from 'react-router-dom';
import  './book.css';

const Book = ({ book }) => {
  return (
    <div className="booksDiv">
      <Link to={`/books/${book.id}`}>
        <img className="booksImage" src={`${book.image_url}`} alt={book.name} />
      </Link>
      <p>Title: {book.name} || Author: {book.author}</p>
    </div>
  )
}

export default Book;
