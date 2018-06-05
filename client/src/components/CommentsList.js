import React, { Component } from 'react';
import '../components/NavBar.css';
import BookPage from '../containers/BookPage.js';
import '../App.css';

class CommentsList extends Component {
  render() {
    if (this.props.comment) {
      let reverseComments = this.props.comment.reverse()
      const comments = reverseComments.map((comment, index) => {
        return (
          <div className="commentDiv">
            <p><strong>{comment.user}</strong>: {comment.comment}</p>
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
