import React, { Component } from 'react';
import '../components/NavBar.css';
import Book from './book.js';

const BooksList = ({ booksList }) => {
  if (booksList) {
    let reverseBooks = booksList.reverse()
    const books = reverseBooks.map((book, index) => {
      return (
      <Book key={index} book={book} /> )
    })

    return (
      <div className="BooksPage">
        <div>{books}</div>
      </div>
    )
  } else {
    return null;
  }
}


export default BooksList;
