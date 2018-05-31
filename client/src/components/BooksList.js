import React, { Component } from 'react';
import '../components/NavBar.css';
import { fetchBooks } from '../actions/bookActions.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import BooksList from './containers/BooksList.js';

class BooksList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const books = this.props.books.map((book, index) => {
      return <p>{book.name}</p>
    })

    return (
      <div className="BooksPage">
        <p>{books}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchBooks: fetchBooks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
