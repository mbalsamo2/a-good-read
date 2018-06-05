import React, { Component } from 'react';
import '../components/NavBar.css';
import BookPage from '../containers/BookPage.js';

class CommentsList extends Component {
  render() {
    if (this.props.comment) {
      const comments = this.props.comment.map((comment, index) => {
        return (
          <div>
            <p>{comment.user}: {comment.comment}</p>
          </div>
        )
      })

      return(
        <div>
          {comments}
        </div>
      )
    } else {
      return null;
    }
  }
}

export default CommentsList;
