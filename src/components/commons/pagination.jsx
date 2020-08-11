import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = ({ onPageChange, itemsCount, pageSize, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <button onClick={() => onPageChange(page)} className="page-link">
              {page}
            </button>
          </li>
          //button element above, was supposed to be an 'anchor / a' elemeent, resulted in warning
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  onPageChange: propTypes.func.isRequired,
  itemsCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
