import React from "react"
import GridItem from "./GridItem"

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