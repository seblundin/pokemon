import React, { useEffect, useState } from "react"
import Image from "./Image"
import PokemonService from "../services/PokemonService"

/**
 * A React component for displaying general info about a Pokemon.
 * The data is retrieved from https://pokeapi.co/
 * 
 * @param {string} url The hyperlink to data for the Pokemon.
 */
const Pokemon = ({ url, onExit }) => {
  const [data, setData] = useState({})

  // Fetch Pokemon data.
  useEffect(() => {
    PokemonService
      .getPokemon(null,null,url)
      .then(pokemon => setData(pokemon))
  }, [])

  //Once data is fetched, display data.
  return data && data.stats ?
    <>
      <button onClick={() => onExit()}>X</button>
      <h1>{data.name}</h1>
      <h2>HP: {data.stats[0].base_stat}</h2>
      <Image id={data.id} name={data.name}/>
    </>
    :
    <p>loading...</p>
}

export default Pokemon
