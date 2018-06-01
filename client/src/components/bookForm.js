import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitBook } from '../actions/bookActions.js';
import '../App.css';

class BookForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      author: "",
      summary: "",
      review: "",
      rating: "",
      image_url: ""
    }
  }

  render() {
    return (
      <div className="form">
        <h3>Add a new book:</h3>
        <form id="book-form">
          <p>
            <input type="text" name="name" placeholder="Title"/>
            <input type="text" name="author" placeholder="Author"/>
          </p>
          <p>
            <textarea name="summary" className="textarea" placeholder="Summary"/>
            <textarea name="review" className="textarea" placeholder="Review"/>
          </p>
          <p>
          <input type="number" name="rating" placeholder="Rating (1-5)"/>
          <input type="text" name="image_url" placeholder="Book Image"/>
          </p>
          <button type="submit">Add a book</button>
        </form>
      </div>
    )
  }

}

export default BookForm;
