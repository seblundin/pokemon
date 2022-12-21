import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import PokemonService from "../services/PokemonService";

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
    PokemonService
      .getPokemon(null,null,url)
      .then(pokemon => setData(pokemon));
  }, []);

  //Once data is fetched, display data.
  return data && data.stats ?
    <>
      {console.log(data)}
      <h1>{data.name}</h1>
      <h2>HP: {data.stats[0].base_stat}</h2>
      <Image id={data.id} name={data.name}/>
    </>
    :
    <p>loading...</p>;
};

Pokemon.propTypes = {
  url: PropTypes.string.isRequired
};

export default Pokemon;
