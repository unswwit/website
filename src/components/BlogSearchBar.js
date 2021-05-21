import React from 'react';
import styles from "./BlogSearchBar.module.css";
import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
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
};

export default SearchBar;
