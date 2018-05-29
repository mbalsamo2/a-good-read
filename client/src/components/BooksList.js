import React, { Component } from 'react';
// import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';


// renders correctly
export const BooksList = () => {
  return (
    <div className="BooksPage">
      <p>I am a book</p>
    </div>
  )
}

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
