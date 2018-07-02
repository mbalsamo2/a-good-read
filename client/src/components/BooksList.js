import React from 'react';
import '../components/NavBar.css';
import Book from './book.js';

const BooksList = ({ booksList }) => {
  if (booksList) {
    //let reverseBooks = booksList.reverse()

    // function compare(a,b) {
    //   if (a.attr < b.attr)
    //      return -1;
    //   if (a.attr > b.attr)
    //     return 1;
    //   return 0;
    // }
    //
    // canvasObjects.sort(compare);

    const sortedBooks = booksList.sort(function(a,b) {return (a.likes < b.likes) ? 1 : ((b.likes < a.likes) ? -1 : 0);} );

    const books = sortedBooks.map((book, index) => {
      return (
      <Book key={index} book={book} /> )
    })

    // const books = booksList.map((book, index) => {
    //   return (
    //   <Book key={index} book={book} /> )
    // })

    return (
      <div className="BooksPage">
        <div>{books}</div>
      </div>
    )
  } else {
    return null;
  }
}


export default BooksList;
