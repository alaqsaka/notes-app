import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul catatan"
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
