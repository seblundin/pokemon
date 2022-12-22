import React from "react"

/**
 * A search bar component.
 * 
 * @param {function} handleContentChange A callback function for handling content change.
 * @param {string} content Current search term in input field. 
 * @returns 
 */
const SearchBar = ({ handleContentChange, content }) => {
  return <div>
    search:
    <input value={content}
      onChange={handleContentChange}
      name='search bar' />
  </div>
}

export default SearchBar
