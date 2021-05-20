import React from 'react';
import styles from './Pagination.module.css';
//import PaginationComp from '@material-ui/lab/Pagination';
import { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, page, currentPage }) => {
  const pageNumbers = [];
  const maxPages = 10;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    // gives us correct amount of page numbers
    pageNumbers.push(i);
  }

  const middle = maxPages/2;
  const [displayPages, setDisplayPages] = useState([1, 2, 3, 4, 5, '...', pageNumbers.length]);

  // getting the hyperlink to page that the pagination is applied to e.g. blog
  const href = '!#/' + page;
  let next = currentPage+1;
  if (currentPage === Math.ceil(totalPosts / postsPerPage)) {
    next = Math.ceil(totalPosts / postsPerPage);
  }

  let prev = currentPage-1;
  if (currentPage === 1) {
    prev = 1;
  }

  const changePage = (pageNumber) => {
    const total = pageNumbers.length;
    if (pageNumber === middle) {
      setDisplayPages(1, '...', middle-1, middle, middle+1, '...', pageNumbers.length);
    } else if (next === total - maxPages/2 + 2) {
      setDisplayPages([1, '...']);
      for (let i = total - maxPages/2 + 1; i <= pageNumbers.length; i++) {
        displayPages.push(i);
      }
    }
  }

  if (pageNumbers.length > maxPages) {
    const displayPages = [1, 2, 3, '...'];
    displayPages.push(pageNumbers.length);
    return <nav>
      <ul className='pagination justify-content-center'>
        <li class={styles.pagination}>
            <a onClick={() => paginate(prev)} className={prev === currentPage ? [styles.disabled] : styles.pagination} href={href}>Previous </a>
        </li>
        {displayPages.map(number => (
          <li key={number} className={styles.pagination}>
            <a onClick={() => paginate(number), changePage(number)} href={href} className={currentPage === number ? [styles.active] : styles.pagination}>
              {number}
            </a>
          </li>
        ))}
        <li class={styles.pagination}>
          <a onClick={() => paginate(next)} className={next === currentPage ? [styles.disabled] : styles.pagination} href={href}>Next </a>
      </li>
      </ul>
    </nav>
  } else if (totalPosts > 8) {
    return <nav>
      <ul className='pagination justify-content-center'>
        <li class={styles.pagination}>
            <a onClick={() => paginate(prev)} className={prev === currentPage ? [styles.disabled] : styles.pagination} href={href}>Previous </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pagination}>
            <a onClick={() => paginate(number)} href={href} className={currentPage === number ? [styles.active] : styles.pagination}>
              {number}
            </a>
          </li>
        ))}
        <li class={styles.pagination}>
          <a onClick={() => paginate(next)} className={next === currentPage ? [styles.disabled] : styles.pagination} href={href}>Next </a>
      </li>
      </ul>
    </nav>
  } else {
    return null;
  }

};

export default Pagination;