import React, { Component } from 'react';

const BooksList = ({bookList}) => {

  const books = bookList.map((book, index) => {
    return <img src={book.image_url} key={index} alt="book" />
  });

  return (
      <div>
        {books}
      </div>
  )
}

export default BooksList
