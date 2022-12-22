import React from "react"
import { useEffect, useState } from "react"
import Grid from "./components/Grid"
import PokemonService from "./services/PokemonService"
import selectRandom from "./util/ArrayUtil"
import SearchBar from "./components/SearchBar"
import Pokemon from "./components/Pokemon"

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [allPokemon, setAllPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const slice = 20

  // Get slice amount of random Pokemon.
  useEffect(() => {
    PokemonService.getAllPokemon()
      .then(received => {
        setAllPokemon(received)
        setPokemon(selectRandom(received, slice))
      })
  }, [])

  const onSearch = (event) => {
    const term = event.target.value.toLowerCase().trim()
    setSearchTerm(term)
    if (term === "") {
      setPokemon(selectRandom(allPokemon, slice))
      return
    }
    setPokemon(allPokemon.filter(p => p.name.toLowerCase().includes(term)).slice(0,slice))
  }

  const onExit = () => {
    setSearchTerm("")
    setPokemon(selectRandom(allPokemon, slice))
  }

  const onSelection = (name) => {
    setPokemon(allPokemon.filter(p => p.name === name))
  }

  if (pokemon && pokemon.length === 1) {
    return <div style={appStyle}>
      <Pokemon url={pokemon[0].url} onExit={onExit}></Pokemon>
    </div>
  }
  return pokemon ? 
    <div style={appStyle}>
      <SearchBar handleContentChange={onSearch} content={searchTerm}/>
      <Grid pokemon={pokemon} onSelection={onSelection}/>
    </div>
    :
    <p>loading...</p>
}

const appStyle = {
  maxWidth: "80%",
  margin: "auto",
}

export default App
