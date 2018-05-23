export function loadBooks() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOKS'});
    return fetch('http://localhost:4000/books.json')
      .then(response => JSON.parse(response))
      .then(books => dispatch({ type: 'FETCH_BOOKS', books: books }));
  }
}
