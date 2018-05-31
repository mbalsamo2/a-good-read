import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBook } from '../actions/bookActions.js';

class BookPage  extends Component {

  // componentDidMount() {
  //   this.props.loadBook(bookId)
  // }

  render(props) {
    const book = this.props.book;
    debugger

    return (
      <div>
        <p>this is a book page</p>
        <p>{ book.name }</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const book = state.books.find((book) => book.id === parseInt(ownProps.match.params.id))
  debugger

  if (book) {
    return { book: book }
  } else {
    return { book: [] }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadBook: loadBook
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
