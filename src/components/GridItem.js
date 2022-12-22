import React, { useEffect, useState } from "react"
import PokemonService from "../services/PokemonService"
import Image from "./Image"

const GridItem = ({ url, onSelection }) => {
  const [pokemon, setPokemon] = useState({})

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
