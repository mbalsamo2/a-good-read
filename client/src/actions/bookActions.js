// loads index of all the books in JSON format from backend API
export function fetchBooks () {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BOOKS'});
    return fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(books => dispatch({ type: 'FETCH_BOOKS', books: books }));
  }
}

// loads single book in JSON format from backend API
// export function loadBook(bookId) {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_BOOK'});
//     return fetch(`http://localhost:3001/books/${bookId}`)
//     .then(resp => resp.json())
//     .then(book =>  { debugger } )
//       // dispatch({ type: 'FETCH_BOOK', book: book }))}
//
//   }
// }

// submits a new book from backend create route and adds response to state
export function submitBook(formContent) {
  return (dispatch) => {
    //dispatch({ type: 'SUBMITTING_BOOK' });
    return fetch(`http://localhost:3001/books`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({book: formContent})})
      .then(resp => resp.json())
      .then(book => dispatch({ type: 'SUBMIT_BOOK', book: book}))
  }
}

// updates a book from backend update route and updates state
export function updateBook(book) {
  return (dispatch) => {
    dispatch({ type: 'EDITING_BOOK'});
    return fetch(`http://localhost:3001/books/${book.id}`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        summary: book.summary,
        review: book.review,
        rating: book.rating,
        image_url: book.image_url
      })
    })
    .then(resp => resp.json())
    .then(book => dispatch({ type: 'EDITED_BOOK', book: book}))
  }
}
