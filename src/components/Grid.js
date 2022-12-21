import React from "react";
import GridItem from "./GridItem";

const Grid = ({ pokemon }) => {
  return <div style={gridStyle}>
    {Object.entries(pokemon).map(([ key, value ]) => {
      return <GridItem url={value.url} key={key}/>;
    })}
  </div>;
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 9em)",

  maxWidth: "80%",
  margin: "auto",

  textAlign: "center",
};

export default Grid;