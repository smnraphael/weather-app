import React from 'react';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="email" class="input" id="exampleInputEmail1" placeholder="Search..."></input>
            <button class="button" type="submit"><img className="search" src="search.svg"/></button>
        </div>
    );
}

export default SearchBar;
