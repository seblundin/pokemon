import React from "react"

const SearchBar = ({ handleContentChange, content }) => {
  return <div>
    search:
    <input value={content}
      onChange={handleContentChange}
      name='search bar' />
  </div>
}

export default SearchBar
