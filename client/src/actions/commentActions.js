// loads index of all the books in JSON format from backend API
export function fetchComments (book) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS'});
    return fetch(`http://localhost:3001/books/${book.id}/comments`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'FETCH_COMMENTS', comments: comments }));
  }
}

// submits a new comment from backend create route and adds response to state
export function submitComment(book) {
  return (dispatch) => {
    dispatch({ type: 'SUBMITTING_COMMENT' });
    return fetch(`http://localhost:3001/books/${book.id}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment: book.comments})})
      .then(resp => resp.json())
      .then(comment => dispatch({ type: 'SUBMIT_COMMENT', comment: comment}))
  }
}

function addComment (id, comment, user) {
  return {
    type: 'ADD_COMMENT',
    id,
    comment,
    user
  }
}

export default addComment;
