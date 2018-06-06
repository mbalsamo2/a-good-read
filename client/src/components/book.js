import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  './book.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Book extends Component {
  constructor(props) {
    super(props);

  }

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }


  render() {
    const {book} = this.props
    return (
      <div className="booksDiv">
        <Link to={`/books/${book.id}`}>
          <img className="booksImage" src={`${book.image_url}`} alt={book.name} />
        </Link>
        <h3>{book.name} || {book.author}</h3>
        <p><button onClick={this.handleClick}>Like</button> {book.likes}</p>
      </div>
    )
  }
}

export default Book;
