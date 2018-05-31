import React from 'react';
import { Link } from 'react-router-dom';
import  './book.css';

const Book = ({ book }) => {
  return (
    <div className="bookDiv">
      <Link to={`/books/${book.id}`}>
        <img className="bookImage" src={`${book.image_url}`} alt={book.name} />
      </Link>
      <p>Title: {book.name} || Author: {book.author}</p>
    </div>
  )
}

export default Book;
