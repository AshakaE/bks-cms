import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  // React.useEffect(() => {
  //   getProducts();
  // }, [getProducts]);
  // if (loading) {
  //   return <h2 className="section-title">Loading...</h2>;
  // }
  <tr className="text-left">
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Book;
