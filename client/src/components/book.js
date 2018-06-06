import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './book.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onLike } from '../actions/bookActions.js';

class Book extends Component {


  // handleClick = () => {
  //   this.setState({
  //     likes: this.state.likes + 1
  //   })
  // }


  render() {
    const {book} = this.props
    return (
      <div className="booksDiv">
        <Link to={`/books/${book.id}`}>
          <img className="booksImage" src={`${book.image_url}`} alt={book.name} />
        </Link>
        <h3>{book.name} || {book.author}</h3>
        <p><button onClick={ onLike }>Like</button> {book.likes}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const book = state.books.find((book) => book.id === parseInt(ownProps.book.id))
  if (book) {
    return { book: book }
  } else {
    return { book: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onLike
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
