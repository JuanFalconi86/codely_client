import React from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
  const { searchValue, handleSearch } = props;

  return (
    <input style={{borderRadius:"50px", border:"none", backgroundColor:"rgba(228, 239, 249, 0.91)", height: "40px", marginLeft:"12px", paddingLeft:"20px", outline:"none"}}
      className="input mb-5"
      type="text"
      placeholder="Search..."
      value={searchValue}
      onChange={(event) => handleSearch(event, event.target.value)}
    />
  );
};

export default Search;