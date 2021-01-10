  
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SearchForm({ handleChange, searchTerm, handleClick }) {
  return (
    <div className="input-group mt-5 mb-3">
      <input type="text" onChange={handleChange} value={searchTerm} className="form-control"/>
      <button type="button" className="btn btn-primary" onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchForm;