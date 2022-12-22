import React, { useEffect, useState } from "react"
import PokemonService from "../services/PokemonService"
import Image from "./Image"

/**
 * An info card like component with Pokemon name and Image.
 * 
 * @param {string} url An url to Pokemon data.
 * @param {function} onSelection Callback function for handling click event.
 * @returns 
 */
const GridItem = ({ url, onSelection }) => {
  const [pokemon, setPokemon] = useState({})

  // Update Pokemon on url change.
  useEffect(() => {
    PokemonService
      .getPokemon(url)
      .then(pokemon => setPokemon(pokemon))
  }, [url])

  return pokemon ?
    <button style={itemStyle} onClick={() => onSelection(pokemon.name)}>
      <p>{pokemon.name}</p>
      <Image id={pokemon.id} name={pokemon.name} small={true}/>
    </button>
    :
    <p>loading...</p>
}

const itemStyle = { border: "1px solid rgba(0, 0, 0, 0.8)" }

export default GridItem
