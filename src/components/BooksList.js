import React from 'react';
// import { connect } from 'react-redux';

const BooksList = () => (
  <table className="">
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
  </table>
);

// export default connect()(BooksList);
export default BooksList;
