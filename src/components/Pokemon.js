import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "./Image";

/**
 * A React component for displaying general info about a Pokemon.
 * The data is retrieved from https://pokeapi.co/
 * 
 * @param {string} url The hyperlink to data for the Pokemon.
 */
const Pokemon = ({ url }) => {
  const [data, setData] = useState({});

  // Fetch Pokemon data.
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => setData(pokemon));
  }, []);

  //Once data is fetched, display data.
  if (data.stats) {
    return <>
      <h1>{data.name}</h1>
      <h2>HP: {data.stats[0].base_stat}</h2>
      <Image id={data.id} name={data.name}/>
    </>;
  }
  return <p>loading...</p>;
};

Pokemon.propTypes = {
  url: PropTypes.string.isRequired
};

export default Pokemon;
