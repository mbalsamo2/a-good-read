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

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    this.props.submitBook(this.state);
      this.refs.nameInput.value = '';
      this.refs.authorInput.value = '';
      this.refs.summaryInput.value = '';
      this.refs.reviewInput.value = '';
      this.refs.ratingInput.value = '';
      this.refs.imageInput.value = '';
  }

  render() {
    return (
      <div className="form">
        <h3>Add a new book:</h3>
        <form id="book-form" onSubmit={this.onSubmitHandler}>
          <p>
            <input ref="nameInput" type="text" name="name" placeholder="Title" value={this.state.name} onChange={this.onChangeHandler}/>
            <input ref="authorInput" type="text" name="author" placeholder="Author" value={this.state.author} onChange={this.onChangeHandler}/>
          </p>
          <p>
            <textarea ref="summaryInput" name="summary" className="textarea" placeholder="Summary" value={this.state.summary} onChange={this.onChangeHandler}/>
            <textarea ref="reviewInput" name="review" className="textarea" placeholder="Review" value={this.state.review} onChange={this.onChangeHandler}/>
          </p>
          <p>
          <input ref="ratingInput" type="number" name="rating" placeholder="Rating (1-5)" value={this.state.rating} onChange={this.onChangeHandler}/>
          <input ref="imageInput" type="text" name="image_url" placeholder="Book Image" value={this.state.image_url} onChange={this.onChangeHandler}/>
          </p>
          <button type="submit">Add a book</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitBook: submitBook
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(BookForm);
