import React, { Component } from 'react';
// import React from 'react';
import '../components/NavBar.css';
import { Link } from 'react-router-dom';
// import action

// renders correctly
// export const BooksList = () => {
//   return (
//     <div className="BooksPage">
//       <p>I am a book</p>
//     </div>
//   )
// }

class BooksList extends Component {
  // constructor(props) {
  //   super(props);
  // }
 // connect to store reread Redux connect single component 
  render() {
    return (
      <div className="BooksPage">
        <p>I am a book</p>
      </div>
    )
  }
}

export default BooksList;

// export const BooksList = ({ books }) => {
//
//     const renderBooks = books.map(book =>
//       <Link key={book.id} to={`/books/${book.id}`}>
//         <div className="BookList">
//           <h3>{book.name}</h3>
//         </div>
//       </Link>
//     )
//
//     return (
//       <div>
//       {renderBooks}
//       </div>
//     )
// }
