import React from 'react';
import search_logo from '../../assets/search.svg'

const SearchBar = ({ search }) => {
  return (
    <div className="search-bar">
      <input className="input" placeholder="Search..."></input>
      <button className="button" onClick={search}>
        <img className="search" src={search_logo} alt="weather" />
      </button>
    </div>
  );
};

export default SearchBar;
