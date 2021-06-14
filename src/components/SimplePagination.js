import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  page,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    // gives us correct amount of page numbers
    pageNumbers.push(i);
  }

  // getting the hyperlink to page that the pagination is applied to e.g. blog
  const href = "!#/resources/" + page;

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pagination}>
            <a
              onClick={() => paginate(number)}
              href={href}
              className={
                currentPage === number ? [styles.active] : styles.pagination
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
