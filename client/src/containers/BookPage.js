import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBook } from '../actions/bookActions.js';
import '../App.css';

class BookPage  extends Component {

  // componentDidMount() {
  //   this.props.loadBook(bookId)
  // }

  render(props) {
    const book = this.props.book;
    debugger

    return (
      <div className="bookDiv">
        <img className="bookImage" src={`${book.image_url}`} alt={book.name} />
        <div className="textDiv">
          <p>Title: {book.name}</p>
          <p>Author: {book.author}</p>
          <p>Summary: {book.summary}</p>
          <p>Review: {book.review}</p>
          <p>Rating: {book.rating} stars</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const book = state.books.find((book) => book.id === parseInt(ownProps.match.params.id))

  if (book) {
    return { book: book }
  } else {
    return { book: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadBook: loadBook
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
