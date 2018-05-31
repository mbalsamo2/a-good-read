import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookPage  extends Component {

  render(props) {
    const book = this.props.book;

    return (
      <div>
        <p>this is a book page</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const book = state.books.find((book, index) => book.id == ownProps.match.params.bookId)

  if (book) {
    return { book: book }
  } else {
    return { book: [] }
  }
}

export default connect(mapStateToProps)(BookPage);
