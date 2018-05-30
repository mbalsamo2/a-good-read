export default function books (state = [], action) {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return state
    case 'FETCH_BOOKS_ERROR':
      return { ...state, error: action.paload }
    case 'RECEIVED_BOOKS':
      return {
        ...state,
        books: action.payload
      }
    default:
      return state;
  }
}


// export default function booksReducer(state = [], action) {
//   switch(action.type) {
//     case 'FETCH_BOOKS':
//       return action.books
//     default:
//       return state;
//   }
// }
