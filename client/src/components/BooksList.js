// import React, { Component } from 'react';
import React from 'react';
import './NavBar.css'

const BooksList = ({bookList}) => {

  const books = bookList.map((book, index) => {
    return <img src={book.image_url} key={index} alt="book" />
  });

  return (
      <div className="BooksPage">
        {books}
      </div>
  )
}

export default BooksList
