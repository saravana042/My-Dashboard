import React from 'react';

const Search = props => {
  return (
    <div className="header-search-wrapper hide-on-med-and-down">
        <i className="material-icons">search</i>
        <input className="header-search-input z-depth-2" type="search" name="Search" placeholder="Explore My Dashboard" />
    </div>
  );
};

export default Search;