import React, { Component } from 'react';
import '../components/NavBar.css';
import { fetchBooks } from '../actions/bookActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BooksList from '../components/BooksList.js';
import BookForm from '../components/bookForm.js';

class BooksPage extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {

    return (
      <div className="BooksPage">
        <BookForm />
        <BooksList books = {this.props.books }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
