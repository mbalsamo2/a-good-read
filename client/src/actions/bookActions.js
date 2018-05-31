export function fetchBooks () {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOKS'});
    return fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(books => dispatch({ type: 'FETCH_BOOKS', books: books }));
  }
}

export function loadbook(bookId) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOK'});
    return fetch(`http://localhost:3001/books/${bookId}`)
    .then(resp => resp.json())
    .then(books => dispatch({ type: 'FETCH_BOOK', book: book }));
  }
}
