import React, { Component } from 'react';
import '../components/NavBar.css';
import Book from './book.js';

class BooksList extends Component {

  render() {
    if (this.props.books) {
      const books = this.props.books.map((book, index) => {
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
}

export default BooksList;
