// loads index of all the books in JSON format from backend API
export function fetchComments (book) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_COMMENTS'});
    return fetch(`http://localhost:3001/books/${book.id}/comments`)
      .then(response => response.json())
      .then(comments => dispatch({ type: 'FETCH_COMMENTS', comments: comments }));
  }
}
