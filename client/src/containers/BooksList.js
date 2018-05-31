import React, { Component } from 'react';
import '../components/NavBar.css';
import { fetchBooks } from '../actions/bookActions.js';
import { Link } from 'react-router-dom';
// import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BooksList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div className="BooksPage">
        <p>I am a book</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchTpProps = (dispatch) => {
  return bindActionCreators({
    fetchBooks: fetchBooks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchTpProps)(BooksList);

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
