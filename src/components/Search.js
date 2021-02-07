import React from "react";

function Search({search, setSearch}) {

  function handleSearch(e){
    setSearch(e.target.value)
    console.log(search)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
