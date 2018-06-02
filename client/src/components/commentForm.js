import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { submitComment } from '../actions/commentActions.js'
import addComment from '../actions/commentActions.js';
import bookComments from '../reducers/comments.js';

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "",
      comment: "",
    }
  }

  handleSubmit = (e) => {

    e.preventDefault()
        debugger
    // const { id } = this.props.match.params
    // const user = this.refs.user.value
    // const comment = this.refs.comment.value
    // this.props.addComment(id, user, comment)
    // this.refs.commentForm.reset()
  }

  renderComment (comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
        </p>
      </div>
    )
  }

      debugger

  render() {
    return (
      <div>
        <h3>Add a comment:</h3>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="user" name="user" placeholder="Name"/>
          <input type="text" ref="comment" name="comment" placeholder="Comment"/>
          <button type="submit">Add a comment</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addComment: addComment
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(CommentForm);
