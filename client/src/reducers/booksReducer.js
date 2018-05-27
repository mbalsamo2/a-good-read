export default function booksReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.books
    default:
      return state;
  }
}
