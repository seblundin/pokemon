import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Pokemon = ({ url }) => {
  const picUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => setData(pokemon));
  }, []);

  if (data.stats) {
    return <>
      <h1>{data.name}</h1>
      <h2>HP: {data.stats[0].base_stat}</h2>
      <img alt={`A pokemon named ${data.name}`} src={`${picUrl}${data.id}.png`}></img>
    </>;
  }
  return <p>loading...</p>;
};

Pokemon.propTypes = {
  url: PropTypes.string.isRequired
};

export default Pokemon;
