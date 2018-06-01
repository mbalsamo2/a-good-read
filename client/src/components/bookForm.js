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
        <form>
        </form>
      </div>
    )
  }

}

export default BookForm;
