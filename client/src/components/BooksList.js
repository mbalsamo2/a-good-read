// import React, { Component } from 'react';
import React from 'react';
import './NavBar.css'

// const BooksList = ({bookList}) => {
//
//   const books = bookList.map((book, index) => {
//     return <img src={book.image_url} key={index} alt="book" />
//   });
//
//   return (
//       <div className="BooksPage">
//         <p>I am a book</p>
//         {books}
//       </div>
//   )
// }

class BooksList extends Component {
  render() {

    return (
      <div className="BooksPage">
        <p>I am a book</p>
      </div>
    )
  }
}

export default BooksList