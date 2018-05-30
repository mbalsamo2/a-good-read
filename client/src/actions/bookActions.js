export function fetchBooks () {
  return (dispatch) => {
    dispatch({ type: 'FETCH_BOOKS'});
    return fetch('http://localhost:3000/books')
      .then(response => response.json()
      .then(json => { dispatch({ type: 'RECEIVED_BOOKS', payload: json })
      })
    )
  }
}



// export function loadBooks() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_BOOKS'});
//     return fetch('http://localhost:3000/books')
//       .then(response => response.json())
//       .then(books => dispatch({ type: 'FETCH_BOOKS', books: books }));
//   }
// }
