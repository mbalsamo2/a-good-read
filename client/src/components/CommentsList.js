// import React, { Component } from 'react';
import React from 'react';
import '../components/NavBar.css';
// import BookPage from '../containers/BookPage.js';
import '../App.css';

const CommentsList = ({ comment }) => {
    if (comment) {
      let reverseComments = comment.reverse()
      const comments = reverseComments.map((comment, index) => {
        return (
          <div className="commentDiv" key={index}>
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

export default CommentsList;
