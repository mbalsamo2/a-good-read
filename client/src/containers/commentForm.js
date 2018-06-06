import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitComment } from '../actions/commentActions.js';


class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "",
      comment: "",
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    debugger
    this.props.submitComment(this.state, this.props.bookId);
    this.refs.commentInput.value = '';
    this.refs.userInput.value = '';
  }

  render() {
    return (

      <div>
        <h3>Add a comment:</h3>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input ref="userInput" type="text" name="user" placeholder="Name" value={this.state.user} onChange={this.onChange} />
          <input ref="commentInput" type="text" name="comment" placeholder="Comment" value={this.state.comment} onChange={this.onChange} />
          <button type="submit">Add a comment</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    submitComment: submitComment
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentForm);
