import React, { Component } from 'react';
import '../components/NavBar.css';
import { Link } from 'react-router-dom';
// import BooksList from './containers/BooksList.js';

class BooksList extends Component {

  render() {
    if (this.props.books) {
      const books = this.props.books.map((book, index) => {
        return <p>{book.name}</p>
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
