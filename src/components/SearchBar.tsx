import React from 'react';
import styles from '../styles/SearchBar.module.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search characters..."
                onChange={handleInputChange}
                className={styles.input}
            />
        </div>
    );
};

export default SearchBar;