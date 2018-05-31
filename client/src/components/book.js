import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <div>
      <Link to={`/books/${book.id}`}>
        <img src={`${book.image_url}`} alt={book.name} />
      </Link>
      <p>Title: {book.name} || Author: {book.author}</p>
    </div>
  )
}

export default Book;
