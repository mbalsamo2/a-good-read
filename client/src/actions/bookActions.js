export function loadBooks() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOKS'});
    return fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(books => dispatch({ type: 'FETCH_BOOKS', books: books }));
      debugger
  }
}
