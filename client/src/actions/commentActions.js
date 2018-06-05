// loads index of all the books in JSON format from backend API
export function fetchComments (comments, bookId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS'});
    return fetch(`http://localhost:3001/books/${bookId}/comments`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'FETCH_COMMENTS', comments: comments }));
  }
}

// submits a new comment from backend create route and adds response to state
export function submitComment(comment, bookId) {
  return (dispatch) => {
    dispatch({ type: 'SUBMITTING_COMMENT' });
    return fetch(`http://localhost:3001/books/${bookId}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment: comment})})
      .then(resp => resp.json())
      .then(book => dispatch({ type: 'UPDATE_BOOK', book}))
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
