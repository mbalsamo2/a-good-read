import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitBook } from '../actions/bookActions.js';

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
      <div>
        <form id="book-form">
          Title: <input type="text" name="name"/><br>
          Author: <input type="text" name="author"/><br>
          Summary: <textarea name="summary"/><br>
          Review: <textarea name="review"/><br>
          Rating: <input type="number" name="rating"/><br>
          Book Image: <input type="text" name="image_url"/><br>
          <input type="submit" />
        </form>
      </div>
    )
  }

}

export default BookForm;
