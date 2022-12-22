import React from "react"
import GridItem from "./GridItem"

/**
 * A component that displays Pokemon in a grid.
 * 
 * @param {object} pokemon An object with pokemon name and url to data.
 * @param {function} onSelection Function for grid item click event handling.
 * @returns 
 */
const Grid = ({ pokemon, onSelection }) => {
  return <div style={gridStyle}>
    {Object.entries(pokemon).map(([ key, value ]) => {
      return <GridItem url={value.url} onSelection={onSelection} key={key}/>
    })}
  </div>
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 9em)",

  textAlign: "center",
}

export default Grid