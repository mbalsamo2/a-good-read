import React, { Component } from 'react';
import '../components/NavBar.css';
import { Link } from 'react-router-dom';
import Book from './book.js';

class BooksList extends Component {

  render() {
    if (this.props.books) {
      const books = this.props.books.map((book, index) => {
        return (
        <Book book={book} /> )
      })

      return (
        <div className="BooksPage">
          <p>{books}</p>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default BooksList;
