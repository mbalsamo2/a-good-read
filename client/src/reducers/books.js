export default function books (state = [], action) {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.books;
    case 'FETCH_BOOK':
      return action.book;
    case 'SUBMIT_BOOK':
      return [action.book, ...state]
    case 'UPDATE_BOOK':
      const books = state.filter(book => book.id !== action.book.id )
      return [...books, action.book]
    default:
      return state;
  }
}
