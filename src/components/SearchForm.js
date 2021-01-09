  
import React from "react";

function SearchForm({ handleChange, searchTerm, handleClick }) {
  return (
    <div>
      <input type="text" onChange={handleChange} value={searchTerm} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchForm;