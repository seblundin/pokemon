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
      .getPokemon(url)
      .then(pokemon => setData(pokemon))
  }, [])

  //Once data is fetched, display data.
  return data && data.stats ?
    <div style={pokemonStyle}>
      <button onClick={() => onExit()} style={buttonStyle}>X</button>
      <h1>{data.name}</h1>
      <h2>HP: {data.stats[0].base_stat}</h2>
      <h2>Attack: {data.stats[1].base_stat}</h2>
      <h3>Abilities:</h3>
      <ul style={abilitiesStyle}>
        {data.abilities.map(a => <li key={a}>{a.ability.name}</li>)}
      </ul>
      <h3>Types:</h3>
      <ul style={abilitiesStyle}>
        {data.types.map(t => <li key={t}>{t.type.name}</li>)}
      </ul>
      <Image id={data.id} name={data.name}/>
    </div>
    :
    <p>loading...</p>
}

const pokemonStyle = {
  textAlign: "center",
  listStyle: "none",
  maxWidth: "60%",
  columnCount: 2,
}

const abilitiesStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
}

const buttonStyle = {
  width: "3em",
}

export default Pokemon
