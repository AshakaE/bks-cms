import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Books from '../components/Book';
import { createBook, removeBook } from '../actions/index';

const BooksList = (props) => {
  const { books } = props;

  return (
    <table className="w-3/4 m-auto">
      <tr className="bg-gray-300 text-gray-600 border-b-2 h-12 border-gray-800">
        <th className="w-2/6 text-left">Book ID</th>
        <th className="w-2/6 text-left">Title</th>
        <th className="w-2/6 text-left">Category</th>
      </tr>
      {books.map((book) => <Books key={book.id} book={book} />)}
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  createBook: () => dispatch(createBook),
  removeBook: () => dispatch(removeBook),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
