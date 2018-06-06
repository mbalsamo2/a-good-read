import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBook } from '../actions/bookActions.js';
import '../App.css';
import CommentForm from './commentForm.js';
import CommentsList from '../components/CommentsList.js';
import { fetchComments } from '../actions/commentActions.js';

class BookPage  extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.book.id)
  }

  render(props) {
    const book = this.props.book;

    return (
      <div className="bookDiv">
        <img className="bookImage" src={`${book.image_url}`} alt={book.name} />
        <div className="textDiv">
          <p className="title">{book.name}</p>
          <p className="author">By: {book.author}</p>
          <p className="rating">Rating: {book.rating} stars</p>
          <p className="summary">Summary: {book.summary}</p>
          <p className="review">Review: {book.review}</p>
        </div>

        <div className="comments">
          <CommentForm  bookId = { this.props.match.params.id }/>
          <CommentsList comment = { book.comments }/>
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
    // loadBook: loadBook,
    fetchComments: fetchComments
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
