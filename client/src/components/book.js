import React from 'react';

const Book = ({ book }) => {
  return (
    <div>
      <img src={`${book.image_url}`} alt={book.name} />
      <p>Title: {book.name} || Author: {book.author}</p>
    </div>
  )
}

export default Book;
