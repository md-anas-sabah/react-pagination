import React from "react";

function Pagination({ totalPost, postsPerPage, paginate }) {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {" "}
              {number}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
