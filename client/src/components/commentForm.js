import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div>
        <h3>Add a comment:</h3>
        <form id="comment-form">
          <input type="text" name="user" placeholder="Name"/>
          <input type="text" name="comment" placeholder="Comment"/>
          <button type="submit">Add a comment</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
