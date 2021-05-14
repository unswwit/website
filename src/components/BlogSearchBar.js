import React from 'react';
import styles from "./BlogSearchBar.module.css";

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className={styles.visuallyHidden}>Search blog post by title</span>
        </label>
        <input className ={styles.searchBar}
            type="text"
            id="header-search"
            placeholder="Search blog post by title"
            name="s" 
        />
    </form>
);

export default SearchBar;
