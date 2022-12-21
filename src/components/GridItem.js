import React, { useEffect, useState } from "react"
import PokemonService from "../services/PokemonService"
import Image from "./Image"

const GridItem = ({ url }) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    PokemonService
      .getPokemon(null, null, url)
      .then(pokemon => setPokemon(pokemon))
  }, [])

  return pokemon ?
    <div style={itemStyle}>
      <p>{pokemon.name}</p>
      <Image id={pokemon.id} name={pokemon.name} small={true}/>
    </div>
    :
    <p>loading...</p>
}

const itemStyle = { border: "1px solid rgba(0, 0, 0, 0.8)" }

export default GridItem
